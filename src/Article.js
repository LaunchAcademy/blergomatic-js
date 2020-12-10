class Article {
  constructor(author, title, body) {
    this.title = title
    this.author = author
    this.body = body
    this.comments = []
  }

  wordCount(){
  }
}

//   wordCount() {
//     return this.body.split(' ').length
//   }
//
//   description() {
//     return this.title + '\n' + this.author.fullName()
//   }
//
//   addComment(comment) {
//     this.comments.push(comment)
//   }
//
//   commentCount() {
//     return this.comments.length
//   }
//
//   formattedString() {
//     return [
//       this.title,
//       this.author.fullName(),
//       this.commentCount().toString(),
//       this.body
//     ].join('\n')
//   }
//
//   commentsMentioning(subphrase) {
//     let matchingComments = []
//     this.comments.forEach(comment => {
//       if (comment.body.toLowerCase().includes(subphrase.toLowerCase())) {
//         matchingComments.push(comment)
//       }
//     })
//     return matchingComments
//   }
// }

export default Article
