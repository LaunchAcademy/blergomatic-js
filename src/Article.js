class Article {
  constructor(author, title, body) {
    this.author = author 
    this.title = title 
    this.body = body
    this.comments = []
  }

  wordCount() {
    return this.body.split(" ").length
  }

  description() {
    return `${this.title} by ${this.author.fullName()}`
  }

  addComment(commentObject) {
    
    // for(let comment of this.comments) {
    //   if (comment.author.fullName() === commentObject.author.fullName()) {
    //     return false 
    //   }
    // }

    // this.comments.push(commentObject)
    // return true 

    this.comments.push(commentObject)
  }

  commentCount() {
    return this.comments.length
  }

  formattedString() {
    let formattedString = `${this.title} \n ${this.author.fullName()} \n ${this.body} \n # of Comments: ${this.commentCount()} \n`

    for(let comment of this.comments) {
      formattedString += `${comment.body} \n`
    }
    return formattedString
  }

  // wordString = "spaceforce"
  commentsMentioning(wordString) {
    // let commentsArray = []
    // this.comments.forEach(comment => {
    //   if (comment.body.toLowerCase().includes(wordString.toLowerCase())) {
    //     commentsArray.push(comment)
    //   }
    // })
    // return commentsArray

    const commentsContaining = this.comments.filter((comment) => {
      return comment.body.toLowerCase().includes(wordString.toLowerCase())
    })
    return commentsContaining
  }
}

export default Article