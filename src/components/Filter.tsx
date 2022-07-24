import React, { ChangeEvent, useEffect } from "react";
import { Columns, Comparison } from "../models/models";
import { getFilteredTableAction } from "../store/actions";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import {
  setFilterComparison,
  setFilterProperty,
  setFilterValue,
} from "../store/spaSlice";

export default function Filter() {
  const { property, comparison, value } = useAppSelector(
    (state) => state.spaReducer.filter
  );
  const { currentPage } = useAppSelector((state) => state.spaReducer);

  const dispatch = useAppDispatch();

  //debouncing api
  useEffect(() => {
    const timer = setTimeout(() => {
      const filter = { property, comparison, value };
      dispatch(getFilteredTableAction({ filter, page: currentPage }));
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [property, comparison, value]);

  const handleSelectColumn = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    dispatch(setFilterProperty(e.target.value));
  };

  const handleSelectComparison = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    dispatch(setFilterComparison(e.target.value));
  };

  const handleSelectValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    dispatch(setFilterValue(e.target.value));
  };

  return (
    <div className="d-flex m-2 gap-2">
      <select
        onChange={handleSelectColumn}
        className="form-select"
        value={property}
      >
        <option value={Columns.title}>{Columns.title}</option>
        <option value={Columns.quantity}>{Columns.quantity}</option>
        <option value={Columns.distance}>{Columns.distance}</option>
      </select>

      <select
        onChange={handleSelectComparison}
        className="form-select"
        value={comparison}
      >
        {property === Columns.title && (
          <option value={Comparison.like}>{Comparison.like}</option>
        )}
        <option value={Comparison.eq}>=</option>
        {(property === Columns.quantity || property === Columns.distance) && (
          <>
            <option value={Comparison.gt}>greeter than</option>
            <option value={Comparison.lt}>less than</option>
          </>
        )}
      </select>

      <input
        value={value}
        className="form-control"
        onChange={handleSelectValue}
        type="text"
        name=""
        id=""
      />
    </div>
  );
}
