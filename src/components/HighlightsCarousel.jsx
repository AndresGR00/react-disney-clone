import { useState } from "react";
import HIGHLIGHT_CAROUSEL from "../data/highlightsCarousel.data";

const HighlightsCarousel = () => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const handleNextPicture = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === HIGHLIGHT_CAROUSEL.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevPicture = () => {
    setCurrentPictureIndex((prevIndex) =>
      prevIndex === 0 ? HIGHLIGHT_CAROUSEL.length - 1 : prevIndex - 1
    );
  };

  const currentPicture = HIGHLIGHT_CAROUSEL[currentPictureIndex];

  return (
    <div className="h-[550px] w-full m-auto py-16 px-4 bg-white flex justify-center items-center">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 100%), url(${[
            currentPicture.img,
          ]})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="max-w-[1800px] w-full h-full rounded-2xl duration-500 relative"
      >
        <h2 className="absolute bottom-5 left-5 text-4xl font-semibold">
          {currentPicture.name}
        </h2>

        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md"
          onClick={handlePrevPicture}
        >
          {"<"}
        </button>

        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-md"
          onClick={handleNextPicture}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default HighlightsCarousel;
