import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import BookDetail from "./BookDetail";
import API from "../../utils/API";

class BookContainer extends Component {
  state = {
    result: {},
    search: "",
    title: "",
    authors: "",
    thumbnail: "",
    description: "",
    link: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchBooks("Electric Blue Angels");
  }

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data,
      title : res.data.items[0].volumeInfo.title,
      authors : res.data.items[0].volumeInfo.authors,
      thumbnail : res.data.items[0].volumeInfo.imageLinks.thumbnail,
      description : res.data.items[0].volumeInfo.description,
      link : res.data.items[0].volumeInfo.previewLink
     }))
      .catch(err => console.log(err));
  };

  
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", description: "", thumbnail: "", link:"" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
    console.log(this.state.result.items[0].volumeInfo.imageLinks.thumbnail);
  };

  handleFormSave = event => {
    event.preventDefault();
    if (this.state.title) {
      API.saveBook({
        title: this.state.title,
        authors: this.state.authors,
        description: this.state.description,
        image: this.state.thumbnail,
        link: this.state.link
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.title || "Search for a Book to Begin"}
            >
              {this.state.result ? (
                <BookDetail
                  title={this.state.title}
                  thumbnail={this.state.thumbnail}
                  authors={this.state.authors}
                  description={this.state.description}
                  link={this.state.link}
                  handleFormSave={this.handleFormSave}
                />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookContainer;
