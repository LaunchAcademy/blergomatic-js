import Comment from "../Comment.js"
import Author from "../Author.js"

describe("Comment", () => {
  let body
  let author
  let comment

  beforeEach(() => {
    body = "I am a troll rawwwrr"
    author = new Author("RL", "Stine")
    comment = new Comment(body, author)
  })

  describe("when initialized", () => {
    it("has a body name property that can be accessed", () => {
      expect(comment.body).toEqual(body)
    })

    it("has an author property that can be accessed and returns an author object", () => {
      expect(comment.author).toEqual(author)
    })

    it("has a default upvote count that starts at zero", () => {
      expect(comment.upvotes).toEqual(0)
    })

    it("has a default downvote count that starts at zero", () => {
      expect(comment.downvotes).toEqual(0)
    })
  })
  
  describe("#upvote", () => {
    it("increases the upvote count by 1", () => {
      comment.upvote()
      comment.upvote()

      expect(comment.upvotes).toEqual(2)
    })
  })

  describe("#downvote", () => {
    it("increases the downvote count by 1", () => {
      comment.downvote()
      comment.downvote()
      expect(comment.downvotes).toEqual(2)
    })
  })

  describe("#voteSummary", () => {
    it("returns the total of the upvotes minus the downvotes", () => {
      comment.upvote()
      comment.upvote()
      comment.downvote()

      expect(comment.voteSummary()).toEqual(1)
    })
  })
})
