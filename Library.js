class Library {
  constructor(books, patrons, dailyFine) {
    this.books = [];
    this.patrons = [];
    this.dailyFine = 0.1;
  }

  addBook(book) {
    this.books.push(book);
  }

  addPatron(patron) {
    this.patrons.push(patron);
  }

  chargeFine(patron) {
    const now = new Date();
    const latePatrons = this.patrons.filter(
      (patron) =>
        patron.currentBook !== null && patron.currentBook.dueDate < now
    );

    for (let patron of latePatrons) {
      const dateDiff = new Date(now - patron.currentBook.dueDate);
      console.log(dateDiff);
      const daysLate = dateDiff.getDate();
      console.log(daysLate);
      patron.balance += this.dailyFine * daysLate;
    }
  }
}
