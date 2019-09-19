import React from "react";

function BookDetail(props) {
  return (
    <div className="text-center">
    <img src={props.thumbnail} image={props.thumbnail} alt={props.title} className="img-fluid" style={{ margin: "0 auto" }}/>
      <strong>Author(s): {props.authors}</strong>
      <p>{props.description}</p>
      <a href={props.link} >See Book on Google</a>
      <button onClick={props.handleFormSave} className="btn btn-primary">Save A Book!</button>
      </div>
  );
}

export default BookDetail;
