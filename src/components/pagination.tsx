import React from "react";
import { insertRows } from "../api";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getFilteredTableAction } from "../store/actions";
import { setPage } from "../store/spaSlice";

export default function Pagination() {

  const dispatch = useAppDispatch();
  const { filter, currentPage } = useAppSelector((state) => state.spaReducer);

  const handlePrev = () => {
    const fetchPage = currentPage === 1 ? 1 : currentPage - 1;
    dispatch(setPage(fetchPage))
    dispatch(getFilteredTableAction({ filter, page: fetchPage }));
  };

  const handleNext = () => {
    const fetchPage = currentPage+1;
    dispatch(setPage(fetchPage))
    dispatch(getFilteredTableAction({ filter, page: fetchPage }));
  };

//   const handleInsert = () => {
//     const insertArr = [];
//     let i = 0;
//     while (i < 35) {
//       insertArr.push({
//         title: "title" + i,
//         quantity: Math.round(Math.random() * 100),
//         distance: Math.round(Math.random() * 100),
//       });
//       i++;
//     }

//     console.log(insertArr);
//     insertRows(insertArr);
//   };

  return (
    <div className="d-flex justify-content-center gap-4">
      <button className="prev btn-secondary" onClick={handlePrev}>
        prev
      </button>
      <div className="current">{currentPage}</div>
      <button className="next btn-secondary" onClick={handleNext}>
        next
      </button>
      {/* <button onClick={handleInsert}>insert rows</button> */}
    </div>
  );
}
