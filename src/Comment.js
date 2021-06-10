class Comment {
  constructor(body, author) {
    this.body = body
    this.author = author
    this.upvotes = 0 
    this.downvotes = 0 
  }

  upvote(){
    this.upvotes++
  }

  downvote(){
    this.downvotes++
  }

  voteSummary(){
    return this.upvotes - this.downvotes 
  }
}

export default Comment
