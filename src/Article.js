class Article {
  constructor(author, title, body) {
    this.author = author
    this.title = title
    this.body = body
    this.comments = []
  }

  wordCount(){
    const splitString = this.body.split(' ') 
    console.log(splitString)

    return splitString.length
  }

  addComment(commentObject){
    this.comments.push(commentObject)
  }

  commentsMentioning(substring){
    let someComments = []
    this.comments.forEach((comment) => {
      if (comment.body.toLowerCase().includes(substring)){
        someComments.push(comment)
      }
    })
    return someComments 
  }
}

export default Article

