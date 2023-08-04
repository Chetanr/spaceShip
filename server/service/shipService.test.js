import * as shipsService from "./shipService";

jest.mock("axios", () => {
  return {
    get: jest
      .fn()
      .mockImplementation(() => Promise.resolve({ data: "mock data" })),
  };
});
jest.mock("../db.js");

describe("test getShipsService", () => {
  it("test getShips", async () => {
    const mockGetShips = jest.spyOn(shipsService, "getShips");
    await shipsService.getShipsService(1);
    expect(mockGetShips).not.toBeCalled();
  });
});
