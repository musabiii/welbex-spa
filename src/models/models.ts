export interface Record {
  id: number;
  created_at: Date;
  title: string;
  quantity: number;
  distance: number;
}

export enum columns {
  id = "id",
  created_at = "created_at",
  title = "title",
  quantity = "quantity",
  distance = "distance",
}

export enum comparison {
  eq = "eq",
  gt = "gt",
  lt = "lt",
  like = "like",
}

export interface IFilter {
  property: columns;
  comparison: comparison;
  value: string;
}
