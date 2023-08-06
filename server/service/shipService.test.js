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
  it("when data is found in database", async () => {
    const mockGetShipsFromApi = jest.spyOn(shipsService, "getShipsFromApi");
    const mockUpdateShipsDataInDb = jest.spyOn(
      shipsService,
      "updateShipsDataInDb"
    );
    await shipsService.getShipService(1);
    expect(mockGetShipsFromApi).not.toBeCalled();
    expect(mockUpdateShipsDataInDb).not.toBeCalled();
  });
});
