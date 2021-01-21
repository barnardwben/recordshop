import React from "react";

const Genres = ({ genres, filterRecords }) => {
  return (
    <div className="btn-container">
      {genres.map((genre, index) => {
        return (
          <button
            className="genre-btn"
            key={index}
            onClick={() => filterRecords(genre)}
          >
            {genre}
          </button>
        );
      })}
    </div>
  );
};

export default Genres;
