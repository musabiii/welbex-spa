import { Comparison, IFilter, IRecord } from "../models/models";
import { supabase } from "./supabaseClient";

export async function getTable() {
  let { data, error } = await supabase.from("spa").select("*");
  if (error) throw error;
  return data;
}

export async function getFilteredTable(filter: IFilter,page:number = 1) {

  const pageFrom = page*10-10;
  const pageTo = page*10-1;

  if (!filter.value.length) {
    let { data, error } = await supabase.from("spa").select("*").range(pageFrom, pageTo);
    if (error) throw error;
    return data;
  }

  let formattedValue = filter.value;

  if (filter.comparison === Comparison.like) {
    formattedValue = "%" + filter.value + "%";
  }

  let { data, error } = await supabase
    .from("spa")
    .select("*").range(pageFrom, pageTo)
    [filter.comparison](filter.property, formattedValue);
  if (error) throw error;
  return data;
}

export async function insertRows(rows: any[]) {
  const { data, error } = await supabase.from("spa").insert(rows);
  if (error) throw error;
  return data;
}
