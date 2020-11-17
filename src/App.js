import React, { Component } from 'react';
import './SearchBook.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      books:[],
      activeBook: null
    }
  }
  handleSearch(books){
    this.setState({
      books:books.items
    });
  }
  render() { 
    return (
      <>
        <header>
          <h1>Book Search</h1>
          <SearchBook displayBooks = {books => this.handleSearch(books)} />
        </header>
        <main className="App">
          <BookList books = {this.state.books} />
        </main>
      </>
    );
  }
}
export default App;
 
