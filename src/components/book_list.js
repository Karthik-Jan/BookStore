//purpose of this component is to render a list of Books
import React, {Component} from 'react';

export default class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    })
  }

  render(){
    return (
      <div>
         <ul className="list-group col-sm-4">{this.renderList()}</ul>
      </div>
    );
  }
};
