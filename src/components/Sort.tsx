import React, { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { setSort, setSortDirection } from "../store/spaSlice";

export default function Sort() {

    const dispatch = useAppDispatch()

    const {sort,sortDirection} = useAppSelector(state=>state.spaReducer)

    const handleChangeSort = (e:ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSort(e.target.value))
    }

    const handleChangeSortDirection = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(setSortDirection(e.target.checked))
    }


  return (
    <div className="d-flex justify-content-start m-2 gap-2">
      <div>sort by: </div>
      <select
        onChange={handleChangeSort}
        className="form-select"
        value={sort}
      >
        <option value={"title"}>{"title"}</option>
        <option value={"quantity"}>{"quantity"}</option>
        <option value={"distance"}>{"distance"}</option>
      </select>
      <label>
        DESC
      <input className="form-check" checked={sortDirection} onChange={handleChangeSortDirection} type="checkbox" name="" id="" />
      </label>
    </div>
  );
}
