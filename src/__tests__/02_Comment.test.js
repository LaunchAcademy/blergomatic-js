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
})
