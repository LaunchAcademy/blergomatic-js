import Comment from '../Comment.js'
import Author from '../Author.js'

describe('a comment', () => {
  let body
  let author
  let comment

  beforeEach(() => {
    body = 'I am a troll and I am on the internet'
    author = new Author('RL', 'Stine')
    comment = new Comment(body, author)
  })

  it('has a body', () => {
    expect(comment.body).toEqual(body)
  })

  it('has an author', () => {
    expect(comment.author).toEqual(author)
  })

  it('has an upvote count that starts at zero', () => {
    expect(comment.upvotes).toEqual(0)
  })

  describe("#upvote", () => {
    it("increases the upvote count by 1", () => {
      comment.upvote()
      comment.upvote()
      expect(comment.upvotes).toEqual(2)
    })
  })
  
  describe("#downvote", () => {
    it("increases the dowvote count by 1", () => {
      comment.downvote()
      comment.downvote()
      expect(comment.downvotes).toEqual(2)
    })
  })

  describe("#voteSummary", () => {
    it("returns the upvotes minus the downvotes", () => {
      comment.upvote()
      comment.upvote()
      comment.downvote()
      expect(comment.voteSummary()).toEqual(1)
    })
  })
})
