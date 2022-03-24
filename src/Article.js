class Article {
  constructor(author, title, body){
    this.author = author 
    this.title = title 
    this.body = body
    this.comments = []
  }


  wordCount(){
    return this.body.split(" ").length
  }

  description(){
    return `${this.title} by ${this.author.fullName()} about ${this.body}`
  }

  addComment(commentObject){
    this.comments.push(commentObject)
  }

  formattedString(){
     return `${this.description()} ${this.comments.length}`
  }

  commentsMentioning(phraseString){
    let commentsArrayWithPhrase = []

    this.comments.forEach((commentObject) => {
      if (commentObject.body.toLowerCase().includes(phraseString)){
        commentsArrayWithPhrase.push(commentObject)
      }
    })

    return commentsArrayWithPhrase
  }

}

export default Article