import React, { Component } from "react";
import BookContainer from "../components/BookContainer";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "./books.css";
//import { url } from "inspector";


class Books extends Component {
  state = {
    books: [],
    title: "",
    authors: "",
    description: "",
    thumbnail: "",
    link: "",
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, 
          title: this.state.title,
          authors: this.state.authors,
          description: this.state.description,
          thumbnail: this.state.thumbnail,
          link: this.state.link})
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSave = event => {
    event.preventDefault();
    if (this.state.title) {
      API.saveBook({
        title: this.state.title,
        authors: this.state.authors,
        description: this.state.description,
        thumbnail: this.state.thumbnail,
        link: this.state.link
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  
  render() {
    return (
      <div className="books-back">
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <BookContainer
            handleFormSave={this.handleFormSave}
            loadBooks={this.loadBooks}></BookContainer>
         </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.authors}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col> 
        </Row>
      </Container>
      </div>
    );
  }
}

export default Books;
