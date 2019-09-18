import React from "react";

function BookDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" image={props.thumbnail} style={{ margin: "0 auto" }} />
      <h3>Author(s): {props.authors}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default BookDetail;
