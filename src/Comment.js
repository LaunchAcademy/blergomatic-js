class Comment {
  constructor(body, author) {
    this.body = body
    this.author = author
    this.upvotes = 0
    this.downvotes = 0
  }

  upvote() {
    // this.upvotes ++
    this.upvotes += 1
  }

  downvote() {
    this.downvotes ++
  }

  voteSummary() {
    return this.upvotes - this.downvotes
  }
}

export default Comment
