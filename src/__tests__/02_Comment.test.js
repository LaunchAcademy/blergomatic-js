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

  it('has an downvote count that starts at zero', () => {
    expect(comment.downvotes).toEqual(0)
  })

  describe("#upvote", () => {
    it("updates and returns the current upvote count", () => {
      comment.upvote()
      comment.upvote()
      expect(comment.upvotes).toEqual(2)
    })
  })
  
  describe("#downvote", () => {
    it("updates and returns the current downvote count", () => {
      comment.downvote()
      comment.downvote()
      expect(comment.downvotes).toEqual(2)
    })
  })

  // potentially update for return, or only check property

  describe("#voteSummary", () => {
    it("returns the upvotes minus the downvotes", () => {
      comment.upvote()
      comment.upvote()
      comment.downvote()
      expect(comment.voteSummary()).toEqual(1)
    })
  })
})
