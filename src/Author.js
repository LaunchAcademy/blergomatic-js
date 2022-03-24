class Author {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
  }

  // how do we know that the test wants a method and not a property? 
  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

// always ensure an export, as soon as you declare your class!
export default Author
