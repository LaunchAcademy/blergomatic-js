class Comment {
    constructor(body, author) {
        this.body = body
        this.author = author
        this.upvotes = 0
        this.downvotes = 0
    }

    upvote(){
        return this.upvotes++
    }

    downvote(){
        return this.downvotes++
    }

    voteSummary(){
        return this.upvotes - this.downvotes
    }
}

export default Comment