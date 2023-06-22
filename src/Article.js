class Article {
  //
  constructor(author, title, body) {
    //
    this.author = author
    this.title = title
    this.body = body
    this.comments = []
  }

  wordCount() {
    const words = this.body.split(" ")
    // debugger
    return words.length
  }

  description() {
    // console.log(this.author)
    return `${this.author.fullName()} ${this.title}`
  }

  addComment(newComment) {
    this.comments.push(newComment)
  }

  commentCount() {
    return this.comments.length
  }

  formattedString() {
    let commentBodyString = ""
    this.comments.forEach((comment) => {
      commentBodyString += comment.body
    })
    return `${this.description()} ${
      this.body
    } ${this.commentCount()} ${commentBodyString}`
  }

  commentsMentioning(searchString) {
    const lowerString = searchString.toLowerCase()
    let foundComments = []

    this.comments.forEach((comment) => {
      const lowerBody = comment.body.toLowerCase()

      if (lowerBody.includes(lowerString)) {
        foundComments.push(comment)
      }
    })
    return foundComments
  }
}

export default Article
