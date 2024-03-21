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

  addComment(commentObject){
    this.comments.push(commentObject)
  }

  commentCount(){
    return this.comments.length
  }

  formattedString() {
    let finalString = ""

    finalString += `${this.title}\n`
    finalString += `${this.author.fullName()}\n`
    finalString += `${this.body}\n`
    finalString += `${this.commentCount()}\n`
    
    this.comments.forEach(comment => {
      finalString += `${comment.body}\n`
    })

    return finalString
  }

  commentsMentioning(targetString) {
    let commentArray = []
    this.comments.forEach(commentObject => {
      if (commentObject.body.toLowerCase().includes(targetString)) {
        commentArray.push(commentObject)
      }
    })

    return commentArray
  }
  
}

export default Article