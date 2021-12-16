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

  formattedString() {
    return `Description: ${this.description()}, # Comments: ${this.comments.length}, Body: ${this.body}`
  }

  commentsMentioning(wordToCheck) {
    let list = []
    this.comments.forEach((comment) => {
      if (comment.body.toLowerCase().includes(wordToCheck)) {
        list.push(comment)
      }
    })
    return list
  }
}

export default Article
