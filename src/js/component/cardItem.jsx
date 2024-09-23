import React from "react";

const CardItem = () => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://placehold.co/500x325"
        className="card-img-top"
        alt="placeholder image"
      />
      <div className="card-body text-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, Ipsam
            eligendi, in quo sunt possimus non incidut odit vero aliquid
            similique quaerat nam nombis illo aspernatur vitae fugiat numquam
            repellat
        </p>
        <a href="#" className="btn btn-primary">
          Find out more
        </a>
      </div>
    </div>
  );
};

export default CardItem;