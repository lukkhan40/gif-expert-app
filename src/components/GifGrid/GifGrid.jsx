import PropTypes from "prop-types";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h1>Cargando...</h1>}
      <div className="card-grid">
        {gifs.map((gif) => (
          <GifGridItem key={gif.id} title={gif.title} url={gif.url} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
