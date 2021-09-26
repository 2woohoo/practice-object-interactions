class Book {
  constructor(title, author, isbn, _out, dueDate, patron) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.dueDate = null;
    this.patron = null;
    this._out = false;
  }

  get out() {
    return this._out;
  }

  set out(out) {
    this._out = out;

    if (out) {
      const newDueDate = new Date();
      newDueDate.setDate(newDueDate.getDate() - 14);
      this.dueDate = newDueDate;
    } else {
      this.dueDate = null;
    }
  }
}
