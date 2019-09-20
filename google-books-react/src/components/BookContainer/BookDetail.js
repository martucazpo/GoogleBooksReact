import React from "react";



function BookDetail(props) {
  return (
    <div className="text-center">
    <img src={props.thumbnail} image={props.thumbnail} alt={props.title} className="img-fluid" style={{ margin: "0 auto" }}/>
      <strong>Author(s): {props.authors}</strong>
      <p>{props.description}</p>
      <div>
      <button onClick={props.handleLocation} className="btn btn-primary" >See Book on Google</button>
      </div>
      <div>
      <button onClick={props.handleFormSave} className="btn btn-primary" style={{ marginTop: "5px" }}>Save Book to Your List</button>
      </div>
      </div>
  );
}

export default BookDetail;
