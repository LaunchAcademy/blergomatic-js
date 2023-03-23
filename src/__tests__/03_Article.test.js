import Comment from "../Comment.js"
import Article from "../Article.js"
import Author from "../Author.js"

describe("Article", () => {
  let author
  let article
  let title
  let body

  beforeEach(() => {
    author = new Author("Dan", "Pickett")
    title = "Why Ruby is still cool"
    body = "Here are the reasons Ruby is cool..."
    article = new Article(author, title, body)
  })

  describe("when initialized", () => {
    it("has an author property that can be accessed", () => {
      expect(article.author).toEqual(author)
    })

    it("has a title property that can be accessed", () => {
      expect(article.title).toEqual(title)
    })

    it("has a body property that can be accessed", () => {
      expect(article.body).toEqual(body)
    })

    it("starts with a comments arrays", () => {
      expect(article.comments.length).toEqual(0)
    })
  })

  describe("#wordCount", () => {
    it("returns the number of words in the body of the article", () => {
      expect(article.wordCount()).toEqual(4)
    })
  })

  describe("#description", () => {
    it("returns a string that includes the title", () => {
      expect(article.description()).toContain(article.title)
    })

    it("returns a string containing the author's full name", () => {
      expect(article.description()).toContain(author.fullName())
    })

    // recently updated
    it("returns a string containing the author's full name", () => {
      expect(article.description()).toEqual("Why Ruby is still cool by Dan Pickett")
    })
    
    // e.g. Why Ruby is still cool by Dan Pickett
  })

  describe("#addComment", () => {
    it("adds the provided comment to the article's 'comments' property", () => {
      const comment = new Comment("RUBY RULEZ", author)
      article.addComment(comment)
      expect(article.comments).toEqual([comment])
    })
  })

  // describe("#commentCount", () => {
  //   it("returns the number of comments for the article", () => {
  //     const comment = new Comment("RUBY RULEZ", author)
  //     const comment2 = new Comment("Ruby is fine I guess", author)

  //     article.addComment(comment)
  //     article.addComment(comment2)

  //     expect(article.commentCount()).toEqual(2)
  //   })
  // })

  describe("#formattedString", () => {
    let comment
    let comment2

    beforeEach(() => {
      comment = new Comment("RUBY RULEZ", author)
      comment2 = new Comment("Ruby is fine I guess", author)
      article.addComment(comment)
      article.addComment(comment2)
    })

    it("includes the title", () => {
      expect(article.formattedString()).toContain(article.title)
    })

    it("includes the author's full name", () => {
      expect(article.formattedString()).toContain(article.author.fullName())
    })

    it("includes the body of the article", () => {
      expect(article.formattedString()).toContain(article.body)
    })

    it("includes the number of comments", () => {
      expect(article.formattedString()).toContain(
        article.commentCount().toString()
      )
    })

    it("includes each comment", () => {
      expect(article.formattedString()).toContain(comment.body)
      expect(article.formattedString()).toContain(comment2.body)
    })

    // "Why Ruby is still cool by Dan Pickett
    // Here are the reasons Ruby is cool...
    // Comment #: 2
    // Comments:
    // RUBY RULEZ
    // Ruby is fine I guess"
  })

  describe("#commentsMentioning", () => {
    it("returns an array of comments containing a given phrase", () => {
      article.addComment(new Comment("Spaceforce!", author))
      article.addComment(new Comment("Regular Comment", author))
      article.addComment(new Comment("I want to join spaceforce", author))
      expect(article.commentsMentioning("spaceforce").length).toEqual(2)
      // 
    })
  })
})
