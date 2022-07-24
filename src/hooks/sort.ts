import { IRecord } from "../models/models";
import { useAppSelector } from "./hooks";

export function useSortTable(table: IRecord[]) {
  const { sort, sortDirection } = useAppSelector((state) => state.spaReducer);

  const tableForSort: IRecord[] = [...table];

  const sortMultiplier = sortDirection ? -1 : 1;

  const sortedTable = tableForSort.sort((a, b) => {
    if (a[sort] > b[sort]) {
      return 1 * sortMultiplier;
    } else if (a[sort] < b[sort]) {
      return -1 * sortMultiplier;
    }
    return 1;
  });

  return sortedTable;
}
