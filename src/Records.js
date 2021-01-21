import React from "react";

const Records = ({ items }) => {
  return (
    <div className="record-grid">
      {items.map((item) => {
        const { id, title, image, description, price, playbtn } = item;
        return (
          <article key={id} className="record-container">
            <img src={image} alt={title} className="photo" />
            <div className="text-container">
              <header>
                <h4 className="title-text">{title}</h4>
                <p>{description}</p>
              </header>
              <span className="price-play">
                <iframe
                  title={title}
                  className="mini-album"
                  src={playbtn}
                  width="80"
                  height="80"
                  frameborder="0"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
                <h4 className="price">${price}</h4>
              </span>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Records;
