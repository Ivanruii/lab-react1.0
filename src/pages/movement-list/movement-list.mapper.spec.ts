import * as apiModel from "./api/movement-list.api-model";
import * as viewModel from "./movement-list.vm";
import { mapMovementListFromApiToVm } from "./movement-list.mapper";

describe("mapMovementListFromApiToVm", () => {
  it("should map an empty list of movements", () => {
    const apiMovementList: apiModel.Movement[] = [];
    const expectedVmMovementList: viewModel.MovementVM[] = [];

    const result = mapMovementListFromApiToVm(apiMovementList);

    expect(result).toEqual(expectedVmMovementList);
  });

  it("should map a list of API moves to ViewModel", () => {
    const apiMovementList: apiModel.Movement[] = [
      {
        id: "1",
        description: "Nómina noviembre",
        amount: 900,
        balance: 1490,
        transaction: "2019-12-09T21:30:00",
        realTransaction: "2019-12-09T21:30:00",
        accountId: "1"
      },
      {
        id: "2",
        description: "Alquiler noviembre",
        amount: -400,
        balance: 590,
        transaction: "2019-12-07T11:30:00",
        realTransaction: "2019-12-08T20:00:10",
        accountId: "1"
      },
  
    ];

    const expectedVmMovementList: viewModel.MovementVM[] = [
      {
        id: "1",
        description: "Nómina noviembre",
        amount: 900,
        balance: 1490,
        transaction: "2019-12-09T21:30:00",
        realTransaction: "2019-12-09T21:30:00",
        accountId: "1"
      },
      {
        id: "2",
        description: "Alquiler noviembre",
        amount: -400,
        balance: 590,
        transaction: "2019-12-07T11:30:00",
        realTransaction: "2019-12-08T20:00:10",
        accountId: "1"
      },  
    ];

    const result = mapMovementListFromApiToVm(apiMovementList);

    expect(result).toEqual(expectedVmMovementList);
  });
});
