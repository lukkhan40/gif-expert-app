import { getGifs } from "../../src/api/gifs";

describe("Pruebas en gifs.js", () => {
  test("debe de retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("Bob esponja");
    expect(gifs.data.length).toBeGreaterThan(0);
    //console.log(gifs.data[0]);

    // expect(gifs.data[0]).toEqual({
    //   id: expect.any(String),
    //   title: expect.any(String),
    //   url: expect.any(String),
    // });
  });
});
