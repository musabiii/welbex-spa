export interface IRecord {
  id: number;
  created_at: string;
  title: string;
  quantity: number;
  distance: number;
}

export enum Columns {
  id = "id",
  created_at = "created_at",
  title = "title",
  quantity = "quantity",
  distance = "distance",
}

export enum Comparison {
  eq = "eq",
  gt = "gt",
  lt = "lt",
  like = "like",
}

export interface IFilter {
  property: Columns;
  comparison: Comparison;
  value: string;
}

export interface IInitialState {
  table: IRecord[];
  filter: IFilter;
  loading: boolean;
  errorLoading: boolean;
  sort: SortOptions;
  sortDirection: boolean;
  currentPage:number
}

export enum SortOptions {
  title = "title",
  quantity = "quantity",
  distance = "distance",
}

export interface IThunkProp {
  filter: IFilter;
  page: number;
}

