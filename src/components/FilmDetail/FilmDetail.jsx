import "./FilmDetail.css";
import PropTypes from "prop-types";

const FilmDetail = ({ title, plot, img}) => {
  return (
    <div className="flex flex-wrap justify-center items-start gap-10 rounded-lg max-w-[70%]">
      <div className="flex flex-col gap-8 w-[600px] pr-10">
        <h1 className="font-bold text-3xl">{title}</h1>
        <h2>Plot:</h2>
        <p>{plot}</p>
      </div>
      <div>
        <img src={img} alt={title} />
      </div>
    </div>
  );
};

FilmDetail.propTypes = {
  title: PropTypes.string,
  plot: PropTypes.string,
  img: PropTypes.string,
  actors: PropTypes.string,
  director: PropTypes.string,
};

export default FilmDetail;
