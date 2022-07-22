import { getFilteredTable, getTable } from ".";
import { columns, comparison } from "../models/models";

describe('test api', () => {

    it("get all", async () => {
        const res = await getTable();
        expect(res).not.toBeNull();
      });

 })


describe("test quantity property", () => {


  it("test equal filter", async () => {
    const testNumber = 1;
    const res = await getFilteredTable({
      property: columns.quantity,
      comparison: comparison.eq,
      value: String(testNumber),
    });
    expect(res).not.toBeNull();
    res?.forEach((el) => {
      expect(el.quantity).toBe(testNumber);
    });
  });

  it("test greeter then filter", async () => {
    const testNumber = 1;
    const res = await getFilteredTable({
      property: columns.quantity,
      comparison: comparison.gt,
      value: String(testNumber),
    });
    expect(res).not.toBeNull();
    res?.forEach((el) => {
      expect(el.quantity).toBeGreaterThan(testNumber);
    });
  });

  it("test less then filter", async () => {
    const testNumber = 1;
    const res = await getFilteredTable({
      property: columns.quantity,
      comparison: comparison.lt,
      value: String(testNumber),
    });
    expect(res).not.toBeNull();
    res?.forEach((el) => {
      expect(el.quantity).toBeLessThan(testNumber);
    });
  });

});


describe("test distance property", () => {


  it("test equal filter", async () => {
    const testNumber = 1;
    const res = await getFilteredTable({
      property: columns.distance,
      comparison: comparison.eq,
      value: String(testNumber),
    });
    expect(res).not.toBeNull();
    res?.forEach((el) => {
      expect(el.distance).toBe(testNumber);
    });
  });

  it("test greeter then filter", async () => {
    const testNumber = 1;
    const res = await getFilteredTable({
      property: columns.distance,
      comparison: comparison.gt,
      value: String(testNumber),
    });
    expect(res).not.toBeNull();
    res?.forEach((el) => {
      expect(el.distance).toBeGreaterThan(testNumber);
    });
  });

  it("test less then filter", async () => {
    const testNumber = 1;
    const res = await getFilteredTable({
      property: columns.distance,
      comparison: comparison.lt,
      value: String(testNumber),
    });
    expect(res).not.toBeNull();
    res?.forEach((el) => {
      expect(el.distance).toBeLessThan(testNumber);
    });
  });
});


describe("test title property", () => {


  it("test equal filter", async () => {
    const testTitle = "title1";
    const res = await getFilteredTable({
      property: columns.title,
      comparison: comparison.eq,
      value: String(testTitle),
    });
    expect(res).not.toBeNull();
    res?.forEach((el) => {
      expect(el.title).toBe(testTitle);
    });
  });

  it("test like filter", async () => {
    const testTitle = "title";
    const res = await getFilteredTable({
      property: columns.title,
      comparison: comparison.like,
      value: String("%"+testTitle+"%"),
    });
    expect(res).not.toBeNull();
    res?.forEach((el) => {
      expect(el.title).toMatch(testTitle);
    });
  });

});
