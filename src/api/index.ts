import { IFilter, IRecord } from "../models/models";
import { supabase } from "./supabaseClient";

export async function getTable() {
  let { data, error } = await supabase.from("spa").select("*");
  if (error) throw error;
  return data;
}

export async function getFilteredTable(filter: IFilter) {
  let { data, error } = await supabase
    .from("spa")
    .select("*")
    [filter.comparison](filter.property, filter.value);
  if (error) throw error;
  return data;
}

export async function insertRows(rows: IRecord[]) {
  const { data, error } = await supabase.from("spa").insert(rows);
  if (error) throw error;
  return data;
}
