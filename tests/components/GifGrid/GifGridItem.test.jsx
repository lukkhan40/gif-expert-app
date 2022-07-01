import { render, screen } from "@testing-library/react";
import { GifGridItem } from "../../../src/components/GifGrid/GifGridItem";

describe("Pruebas para <GifGridItem/>", () => {
  const title = "Bob 1";
  const url = "https://localhost:3000/";

  test("Evaluar el snapshot", () => {
    const { container } = render(<GifGridItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("Mostrar imagen con el URL y el alt indicado", () => {
    render(<GifGridItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Debe de mostrar el titulo en el componente", () => {
    render(<GifGridItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
