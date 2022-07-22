import { comparison, IFilter } from "../models/models";
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

  //     switch (filter.comparison) {

  //     case comparison.eq:
  //       let { data, error } = await supabase
  //         .from("spa")
  //         .select("*")
  //         .eq(filter.property, filter.value);
  //       if (error) throw error;
  //       return data;

  //     default:
  //       break;
  //   }

