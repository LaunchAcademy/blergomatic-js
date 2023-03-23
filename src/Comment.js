class Comment {
    constructor(bodyString, authorObject){
        this.body = bodyString
        this.author = authorObject
        this.upvotes = 0
        this.downvotes = 0
    }

    upvote(){
       return this.upvotes++
    //    return ++this.upvotes
    }

    downvote(){
        return this.downvotes++
    }

    voteSummary(){
        return this.upvotes - this.downvotes
    }
}

export default Comment