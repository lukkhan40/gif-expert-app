import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../../src/components/GifGrid/GifGrid";
import { useFetchGifs } from "../../../src/hooks/useFetchGifs";

jest.mock("../../../src/hooks/useFetchGifs");

describe("Prueba <GifGrid/>", () => {
  const category = "Bob esponja";

  test("Debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    // screen.debug();
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe de mostrar Items cuando se cargan las imagenes useFetchifs()", () => {
    const gifs = [
      {
        id: "Bob",
        title: "Esponja",
        url: "https://localhost:3000/",
      },
      {
        id: "Bob 2",
        title: "Esponja 2",
        url: "https://localhost:3000/",
      },
    ];

    useFetchGifs.mockReturnValue({
      gifs,
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
