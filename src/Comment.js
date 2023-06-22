class Comment {
  constructor(body, author) {
    this.body = body
    this.author = author
    this.upvotes = 0
    this.downvotes = 0
  }

  upvote() {
    this.upvotes += 1
    return true
  }

  downvote() {
    this.downvotes += 1
    return true
  }

  voteSummary() {
    const total = this.upvotes - this.downvotes
    return total
  }
}

export default Comment
