class Article {
  constructor(author, title, body) {
    this.author = author
    this.title = title
    this.body = body
    this.comments = []
  }

  wordCount() {
    const stringAsArray = this.body.split(" ")
    // console.log(stringAsArray)
    // console.log(stringAsArray.length)
    return stringAsArray.length
  }

  description() {
    return `${this.author.fullName()}: ${this.title}`
  }

  addComment(newComment) {
    // console.log(newComment)
    this.comments.push(newComment)
  }

  commentCount() {
    return this.comments.length
  }

  formattedString() {
    let finalString = ""
    finalString += this.description() + " "
    finalString += this.body + " "
    finalString += this.commentCount()

    this.comments.forEach((comment) => {
      finalString += `${comment.body} `
    })

    console.log(finalString)
    return finalString

    // return `${this.title} ${this.author.fullName()}`
  }

  commentsMentioning(phrase) {
    let foundComments = []

    this.comments.forEach((comment) => {
      const lowercaseBody = comment.body.toLowerCase()
      if (lowercaseBody.includes(phrase)) {
        foundComments.push(comment)
      }
    })

    return foundComments
  }
}

export default Article