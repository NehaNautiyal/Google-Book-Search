import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    query: ""
  };

  componentDidMount() {
    console.log(this.state.books);
    this.loadBooks();
  }

  loadBooks = () => {
    if (this.state.books.length === 0) {
      API.search("obama")
        .then(res => this.setState({ books: res.data.items, query: ""})
        )
    }
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

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.query);
    if (this.state.query) {
      API.search(this.state.query)
        .then(res => this.setState({ books: res.data.items, query: "" }))
        .catch(err => console.log(err));
    }
  };

  saveBook = event => {
    let savedBooks = this.state.books.filter(book => book.id === event.target.id)
    savedBooks = savedBooks[0];
    API.saveBook(savedBooks)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What Books Would You Like to Search? <span role="img" aria-label="Thinking Emoji">🤔</span></h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.query}
                onChange={this.handleInputChange}
                name="query"
                placeholder="Type what you want to search here"
              />
              <FormBtn
                disabled={!(this.state.query)}
                onClick={this.handleFormSubmit}
              >
                Search Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12 sm-12">
            <Jumbotron>
              <h1>Book Search Results <span role="img" aria-label="Hand Pointing Down Emoji">👇</span></h1>
            </Jumbotron>
            {this.state.books.length > 0 ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem
                    key={book._id}
                    id={book.id}
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    image={book.volumeInfo.imageLinks.thumbnail}
                    saveBook={() => this.saveBook(book._id)}
                  />
                ))}
              </List>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
