class Comment {
  constructor(body, author) {
    this.body = body
    this.author = author
    this.upvotes = 0
    this.downvotes = 0
  }

  upvote() {
    this.upvotes += 1
  }

  downvote() {
    this.downvotes += 1
  }

  voteSummary() {
    // const totalVotes = this.upvotes - this.downvotes
    // console.log(totalVotes)
    // return totalVotes

    return this.upvotes - this.downvotes
  }
}

export default Comment
