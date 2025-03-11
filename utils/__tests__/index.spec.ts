import { calculateWinner } from "../index";

describe("calculateWinner", () => {
  test("gana X", () => {
    const squares = ["X", "X", "X", null, null, null, null, null];
    const resultado = calculateWinner(squares);

    expect(resultado).toBe("X");
  });

  test("gana O", () => {
    const squares = ["O", null, null, "O", null, null, "O", null, null];
    const resultado = calculateWinner(squares);

    expect(resultado).toBe("O");
  });

  test("Empate o no hay ganador", () => {
    const squares = ["X", "O", "X", "O", "X", "O", "O", "X", "O"];
    const resultado = calculateWinner(squares);

    expect(resultado).toBe(null);
  });
});
