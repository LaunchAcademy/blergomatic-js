class Article {
    constructor(author, title, body) {
        this.author = author
        this.title = title
        this.body = body
        this.comments = []
    }

    wordCount(){
        return this.body.split(" ").length
    }

    description(){
        return `${this.author.fullName()} ${this.title}`
    }

    addComment(commentObject){
        this.comments.push(commentObject)
    }

    commentCount(){
        return this.comments.length 
    }

    formattedString(){
        let finalString = ""
        finalString += `${this.title}\n`
        finalString += `${this.author.fullName()}\n`
        finalString += `${this.body}\n`
        finalString += `Comment Count: ${this.commentCount()}\n`

        this.comments.forEach((commentObject) => {
            finalString += `${commentObject.body}\n`
        })

        return finalString
    }

    commentsMentioning(keyWord){
        const keyWordCommentArray = []
        this.comments.forEach((commentObject) => {
            if (commentObject.body.toLowerCase().includes(keyWord.toLowerCase())){
                keyWordCommentArray.push(commentObject)
            }
        })
        return keyWordCommentArray
    }
}

export default Article