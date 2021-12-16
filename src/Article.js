class Article {
  constructor(author, title, body) {
    this.author = author
    this.title = title
    this.body = body
    this.comments = []
  }

  wordCount() {
    // debugger
    const arrayOfWords = this.body.split(" ")
    return arrayOfWords.length
  }

  description() {
    return `${this.author.fullName()} ${this.title}`
  }

  addComment(newComment) {
    this.comments.push(newComment)
  }
}

export default Article
