import React from "react";
import { useAppSelector } from "../hooks/hooks";
import { useSortTable } from "../hooks/sort";

export default function Table() {
  const { table, loading, errorLoading } = useAppSelector(
    (state) => state.spaReducer
  );

  const sortedTable = useSortTable(table);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th className="col">Date</th>
            <th className="col">Title</th>
            <th className="col">Quantity</th>
            <th className="col">Distance</th>
          </tr>
        </thead>
        {!loading &&
          !errorLoading &&
          sortedTable.map((row) => {
            return (
              <tbody key={row.id}>
                <tr>
                  <td>{row.created_at}</td>
                  <td>{row.title}</td>
                  <td>{row.quantity}</td>
                  <td>{row.distance}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
      {loading && !errorLoading && <h3>loading...</h3>}
      {errorLoading && <h3>something go wrong</h3>}
    </div>
  );
}
