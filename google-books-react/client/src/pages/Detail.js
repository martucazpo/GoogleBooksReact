import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import OtherJumbotron from "../components/OtherJumbotron";
import API from "../utils/API";
import "./detail.css";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="detail-back">
      <Container fluid>
        <Row>
          <Col size="md-12">
            <OtherJumbotron>
              <h1>
                {this.state.book.title} by {this.state.book.authors}
              </h1>
              <img src={this.state.book.thumbnail} alt={this.state.book.title} image={this.state.book.thumbnail} style={{margin:"20px"}}/>
            </OtherJumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article style={{margin:"80px"}}>
              <h3>Synopsis</h3>
              <p>
                {this.state.book.description}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
      </div>
    );
  }
}

export default Detail;
