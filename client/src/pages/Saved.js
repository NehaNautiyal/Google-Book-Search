import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { List, ListItem } from "../components/List";

class Saved extends Component {
  state = {
    saved: []
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getBook(this.props.match.params.id)
  //     .then(res => this.setState({ book: res.data }))
  //     .catch(err => console.log(err));
  // }

  componentDidMount() {
    API.getSavedBooks()
      .then(res => {
        console.log(res.data[0]);
        this.setState({ saved: res.data })
      })
      .catch(err => console.log(err));
  }

  deleteBook = id => {
    console.log(id);
    API.deleteBook(id)
      .then(res => {
        API.getSavedBooks()
          .then(res => this.setState({ saved: res.data }))
      })
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Your Saved Books
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
          {this.state.saved.length > 0 ? (
              <List>
                {this.state.saved.map(book => (
                  <ListItem
                    key={book._id}
                    id={book._id}
                    title={book.title}
                    author={book.author}
                    description={book.description}
                    link={book.link}
                    image={book.image}
                    deleteBook={() => this.deleteBook(book._id)}
                  />
                ))}
              </List>
            ) : (
                <h3>No Saved Books to Display</h3>
              )}
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Google Search Homepage</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
