class Article {
    constructor(authorObject, titleString, bodyString){
        this.author = authorObject
        this.title = titleString
        this.body = bodyString
        this.comments = []
    }

    wordCount(){
        const wordsInStringArray = this.body.split(" ")
        return wordsInStringArray.length
    }

    description(){
        return `${this.title} by ${this.author.fullName()}`
    }

    addComment(newCommentObject){
        this.comments.push(newCommentObject)
    }

    commentCount(){
        return this.comments.length
    }

    formattedString(){
        let finalString = ""
        finalString += `${this.description()}\n`
        finalString += `${this.body}\n`
        finalString += `Comments #: ${this.commentCount()}\n`
        // finalString += `${this.comments}`
        this.comments.forEach((commentObject) => {
            finalString += `${commentObject.body}\n`
        })
        return finalString
    }

    commentsMentioning(keyword){
        // iterate over the comments 
            // for each comment, check if it contains the keyword 
            // if so, add that comment to an array
        // return that array of comments mentioning the keyword

        let arrayWithKeyword = []
        this.comments.forEach((commentObject) => {
            if (commentObject.body.toLowerCase().includes(keyword)){
                arrayWithKeyword.push(commentObject)
            }
        })
        return arrayWithKeyword
    }
}


export default Article