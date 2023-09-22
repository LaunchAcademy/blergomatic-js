class Author { 
  constructor(firstNameString, lastNameString) {
    this.firstName = firstNameString 
    this.lastName = lastNameString
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

export default Author