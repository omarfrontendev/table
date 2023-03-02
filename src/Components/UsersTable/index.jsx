import React, { useMemo } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
  useFilters,
} from "react-table";
import { RiSortDesc, RiSortAsc } from "react-icons/ri";
import ColumnFilter from "../ColumnFilter";
import styles from "./.module.css";
import EditableCell from "../EditableCell";
// import DeletedRow from "../DeletedRow";

const UsersTable = ({ data, setData }) => {
  const defaultColumns = [
    {
      Header: "كود",
      accessor: "code",
      Filter: ColumnFilter,
      Cell: EditableCell,
    },
    {
      Header: "الاسم",
      accessor: "name",
      Filter: ColumnFilter,
      Cell: EditableCell,
    },
    {
      Header: "الموبايل",
      accessor: "phone_number",
      Filter: ColumnFilter,
      Cell: EditableCell,
    },
    {
      Header: "الرصيد",
      accessor: "balance",
      Filter: ColumnFilter,
      Cell: EditableCell,
    },
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = useMemo(() => defaultColumns, []);

  const updateMyData = (rowIndex, columnId, value) => {
    setData((prev) =>
      prev.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...prev[rowIndex],
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      updateMyData,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pagesize } = state;

  // =================================

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "24px",
        }}
      >
        <span className={styles.search}>
          <label htmlFor="search">بحث:</label>
          <input
            id="search"
            type="text"
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </span>
        <span className={styles.search}>
          <label htmlFor="size">حجم الصفحة:</label>
          <select
            className={styles.select__box}
            id="size"
            value={pagesize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[5, 10, 15].map((num) => (
              <option key={num} value={num}>
                أظهار {num} صفوف
              </option>
            ))}
          </select>
        </span>
      </div>
      <table className={styles.table} {...getTableProps()}>
        <thead className={styles.table__head}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  className={styles.table__th}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  <>{column?.canFilter ? column?.render("Filter") : null}</>
                  <span className={styles.icons}>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <RiSortDesc />
                      ) : (
                        <RiSortAsc />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={styles.table__body} {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td className={styles.table__td} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.pagination__btns}>
        <button disabled={!canPreviousPage} onClick={() => previousPage()}>
          السابق
        </button>
        <strong>
          {pageIndex + 1} من {pageOptions.length}
        </strong>
        <button disabled={!canNextPage} onClick={() => nextPage()}>
          التالى
        </button>
      </div>
    </>
  );
};

export default UsersTable;
