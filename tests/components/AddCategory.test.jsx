import { render, screen, fireEvent } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  const inputValue = "Bob esponja";

  test("Debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory addCategory={() => {}} />);
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe(inputValue);
    // screen.debug();
  });

  test("Debe de llamar addCategory si el input tiene un valor", () => {
    const addCategory = jest.fn();

    render(<AddCategory addCategory={addCategory} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe("");

    expect(addCategory).toHaveBeenCalled();
    expect(addCategory).toHaveBeenCalledTimes(1);
    expect(addCategory).toHaveBeenCalledWith(inputValue);
  });

  test("No debe de llamar el addCategory si el input esta vacio", () => {
    const addCategory = jest.fn();

    render(<AddCategory addCategory={addCategory} />);
    const form = screen.getByRole("form");
    fireEvent.submit(form);
    // screen.debug();

    expect(addCategory).toHaveBeenCalledTimes(0);
    // expect(addCategory).not.toHaveBeenCalled()
  });
});
