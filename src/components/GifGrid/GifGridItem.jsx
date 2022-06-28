import PropTypes from "prop-types";

export const GifGridItem = ({ title, url }) => (
  <div className="card">
    <img alt={title} src={url} />
    <p>{title}</p>
  </div>
);

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
