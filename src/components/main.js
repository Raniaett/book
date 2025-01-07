import React, { useState } from 'react';
import './../App.css';
import image1 from './../assets/image1.jpg';
import image2 from './../assets/image2.jpg';
import image3 from './../assets/image3.jpg';
import image4 from './../assets/image4.jpg';
import image5 from './../assets/image5.jpg';
import image6 from './../assets/image6.jpg';
const MainComponent = () => {
  // Sample data for books
const [books, setBooks] = useState([
  { id: 1, title: 'It ends with us', author: 'Colleen Hoover',image: image1 },
  { id: 2, title: 'It starts with us', author: 'Colleen Hoover' ,image: image2},
  { id: 3, title: '9th November', author: 'Colleen Hoover',image: image3 },
  { id: 4, title: 'Twisted Games', author: 'Ana Huang' ,image: image4},
  { id: 5, title: 'Beauty and the Beast', author: 'Disney' ,image: image5},
  { id: 6, title: 'It ends with us', author: 'Colleen Hoover',image: image1 },
  { id: 7, title: 'It starts with us', author: 'Colleen Hoover',image: image2 },
  { id: 8, title: '9th November', author: 'Colleen Hoover',image: image3 },
  { id: 9, title: 'Twisted Games', author: 'Ana Huang',image: image4 },
  { id: 10, title: 'Beauty and the Beast', author: 'Disney' ,image: image5},
  { id: 11, title: 'Beauty and the Beast', author: 'Disney',image: image1},
  { id: 12, title: 'It ends with us', author: 'Colleen Hoover',image: image2 },
  { id: 13, title: 'It starts with us', author: 'Colleen Hoover',image: image3 },
  { id: 14, title: '9th November', author: 'Colleen Hoover',image: image4 },
  { id: 15, title: 'Twisted Games', author: 'Ana Huang' ,image: image5},
  { id: 16, title: 'Beauty and the Beast', author: 'Disney' ,image: image1},
  { id: 17, title: 'Beauty and the Beast', author: 'Disney',image: image2},
  { id: 18, title: 'It ends with us', author: 'Colleen Hoover' ,image: image3},
  { id: 19, title: 'It starts with us', author: 'Colleen Hoover',image: image4 },
  { id: 20, title: '9th November', author: 'Colleen Hoover' ,image: image5},
  { id: 21, title: 'Twisted Games', author: 'Ana Huang' ,image: image1},
  { id: 22, title: 'Beauty and the Beast', author: 'Disney' ,image: image2},
  { id: 23, title: '9th November', author: 'Colleen Hoover',image: image3 },
  { id: 24, title: 'Twisted Games', author: 'Ana Huang' ,image: image4 },
  { id: 25, title: 'Beauty and the Beast', author: 'Disney' ,image: image5},
]);

  const addBook = () => {
    const newBook = { id: books.length + 1, title: 'New Book', author: 'New Author' ,image: image6};
    setBooks([...books, newBook]);
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const modifyBook = (id) => {
    const updatedBooks = books.map(book =>
      book.id === id ? { ...book, title: 'Modified Book', author: 'Modified Author' } : book
    );
    setBooks(updatedBooks);
  };

  return (
    
    <main className="main-content">
      <h1 className="main-title">Book List</h1>
      <button className="cta-button" onClick={addBook}>Add Book</button>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-info">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
            <div className="book-actions">
              <button className="action-btn" onClick={() => modifyBook(book.id)}>Modify Book</button>
              <button className="action-btn" onClick={() => removeBook(book.id)}>Remove Book</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainComponent;
