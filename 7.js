function Book(title, author, ISBN) {
    return {
      title,
      author,
      ISBN,
      isBorrowed: false,
      borrow() {
        this.isBorrowed = true;
      },
      returnBook() {
        this.isBorrowed = false;
      }
    };
  }
  
  function Library() {
    return {
      books: [],
      addBook(book) {
        this.books.push(book);
      },
      findBookByISBN(isbn) {
        return this.books.find(book => book.ISBN === isbn);
      },
      listAvailableBooks() {
        return this.books.filter(book => !book.isBorrowed);
      },
      listBorrowedBooks() {
        return this.books.filter(book => book.isBorrowed);
      }
    };
  }
  
  const book1 = Book("India 2020", "Abdul Kalam", "123");
  book1.borrow();
  const book2 = Book("Wings of fire", "Kalam", "456");
  
  const library = Library();
  library.addBook(book1);
  library.addBook(book2);
  
  console.log("Borrowed Books:", JSON.stringify(library.listBorrowedBooks(), null, 2));
  