import React, { useState } from "react";
import styled from "styled-components";
import { useTable } from "react-table";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    height: 30px;
    position: relative;
    width: 100%;

    th,
    td {
      cursor: pointer;
      font-size: 14px;
      margin: 0;
      padding-bottom: 7px;
      padding-left: 10px;
      padding-right: 10px;
      padding-top: 7px;
      number-align: justify;
      transition: all 0.2s;
    }

    tr {
      border-top: 1px solid #a7a8af;
    }

    th {
      background-color: #848e9c;
      color: #fff;
    }

    th:not(:first-child) {
      number-align: center;
    }

    tr td:not(:first-child) {
      number-align: center;
    }

    
  }

  .pagination {
    display: flex;
    font-size: 1.3rem;
    justify-content: space-between;
    margin-top: 10px;

    .pagination-page_number,
    .pagination-page_select {
      color: #fff;

      select,
      input {
        background-color: #313445;
        border: 1px solid #5d76b5;
        border-radius: 2px;
        color: #fff;
        font-size: 1.3rem;
        font-size: 1rem;
        outline: none;
        padding: 0.3rem 0.5rem 0.3rem 0.5rem;
        padding: 0.5rem;
        -webkit-transition: width 0.4s ease-in-out;
        transition: all 0.2s ease-in-out;
        width: 200px;

        /* When the input field gets focus, change its width to 100% */
        :focus {
          border: 1px solid #9aa9d1;
          width: 200px;
        }
      }
    }

    .pagination-button-box {
      button {
        background-color: #2d2e3d;
        border: none;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        height: 40px;
        margin-right: 5px;
        outline: none;
        transition: ease-in-out 0.3s;
        width: 40px;

        :disabled {
          background-color: #313445;
          color: #49619e;
          cursor: not-allowed;
        }
      }
    }
  }

  .empty {
    background-color: #313445;
    height: 200px;
    left: 0;
    padding: 50px 0;
    position: absolute;
    top: 35px;
    width: 100%;
  }
  
  input {
    width: 3rem;

  }
`;

interface ReactTable {
  columns: any;
  data: any;
}

const Table = (props: ReactTable) => {
  // Use the state and functions returned from useTable to build your UI
  const { columns, data } = props;
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <Styles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Styles>
  );
};

export const EarnedValue = () => {
  const columns = [
    {
      Header: "STT",
      accessor: "id",
    },
    {
      Header: "Công việc - chi phí",
      accessor: "name",
    },
    {
      Header: "D",
      accessor: "d",
    },
    {
      Header: "Pred",
      accessor: "pred",
    },
    {
      Header: "Loại đường",
      accessor: "type",
    },
    {
      Header: "1",
      accessor: "month1",
    },
    {
      Header: "2",
      accessor: "month2",
    },
    {
      Header: "3",
      accessor: "month3",
    },
    {
      Header: "4",
      accessor: "month4",
    },
    {
      Header: "5",
      accessor: "month5",
    },
    {
      Header: "6",
      accessor: "month6",
    },
    {
      Header: "7",
      accessor: "month7",
    },
    {
      Header: "8",
      accessor: "month8",
    },
    {
      Header: "9",
      accessor: "month9",
    },
    {
      Header: "10",
      accessor: "month10",
    },
    {
      Header: "11",
      accessor: "month11",
    },
    {
      Header: "12",
      accessor: "month12",
    },
  ];
  const [dataState, setDataState] = useState([
    {
      id: 1,
      name: "Phần ngầm",
      d: 4,
      pred: "-",
      type: ["LT", "TT"],
      month1: { lt: 1, tt: 1 },
      month2: { lt: 1, tt: 1 },
      month3: { lt: 1, tt: 1 },
      month4: { lt: 1, tt: 1 },
      month5: { lt: 1, tt: 1 },
      month6: { lt: 1, tt: 1 },
      month7: { lt: 1, tt: 1 },
      month8: { lt: 1, tt: 1 },
      month9: { lt: 1, tt: 1 },
      month10: { lt: 1, tt: 1 },
      month11: { lt: 1, tt: 1 },
      month12: { lt: 1, tt: 1 },
    },
  ]);

  const tableDatas = dataState.map((data, i) => {
    return {
      ...data,
      type: data.type.map(t => 
        <div>
          {t}
      </div>),
      month1: ( <div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month1.lt = Number(e.target.value); setDataState(data); }} /> </div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month1.tt = Number(e.target.value); setDataState(data); }} /> </div> </div> ),
      month2: ( <div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month2.lt = Number(e.target.value); setDataState(data); }} /> </div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month2.tt = Number(e.target.value); setDataState(data); }} /> </div> </div> ),
      month3: ( <div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month3.lt = Number(e.target.value); setDataState(data); }} /> </div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month3.tt = Number(e.target.value); setDataState(data); }} /> </div> </div> ),
      month4: ( <div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month4.lt = Number(e.target.value); setDataState(data); }} /> </div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month4.tt = Number(e.target.value); setDataState(data); }} /> </div> </div> ),
      month5: ( <div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month5.lt = Number(e.target.value); setDataState(data); }} /> </div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month5.tt = Number(e.target.value); setDataState(data); }} /> </div> </div> ),
      month6: ( <div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month6.lt = Number(e.target.value); setDataState(data); }} /> </div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month6.tt = Number(e.target.value); setDataState(data); }} /> </div> </div> ),
      month7: ( <div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month7.lt = Number(e.target.value); setDataState(data); }} /> </div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month7.tt = Number(e.target.value); setDataState(data); }} /> </div> </div> ),
      month8: ( <div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month8.lt = Number(e.target.value); setDataState(data); }} /> </div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month8.tt = Number(e.target.value); setDataState(data); }} /> </div> </div> ),
      month9: ( <div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month9.lt = Number(e.target.value); setDataState(data); }} /> </div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month9.tt = Number(e.target.value); setDataState(data); }} /> </div> </div> ),
      month10: ( <div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month10.lt = Number(e.target.value); setDataState(data); }} /> </div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month10.tt = Number(e.target.value); setDataState(data); }} /> </div> </div> ),
      month11: ( <div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month11.lt = Number(e.target.value); setDataState(data); }} /> </div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month11.tt = Number(e.target.value); setDataState(data); }} /> </div> </div> ),
      month12: ( <div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month12.lt = Number(e.target.value); setDataState(data); }} /> </div> <div> <input type="number" onChange={(e) => { const data = [...dataState]; data[i].month12.tt = Number(e.target.value); setDataState(data); }} /> </div> </div> ),

    };
  });

  return (
    <div>
      <Table columns={columns} data={tableDatas} />
      {JSON.stringify(dataState.length)}
    </div>
  );
};
