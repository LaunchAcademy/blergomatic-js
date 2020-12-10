import Comment from '../Comment.js'
import Article from '../Article.js'
import Author from '../Author.js'

describe('an article', () => {
  let author
  let article
  let title
  let body

  beforeEach(() => {
    author = new Author('Roald', 'Dahl')
    body = 'Something smart to say'
    title = 'Dan screwed up the test suite'
    article = new Article(author, title, body)
  })

  it('has an author', () => {
    expect(article.author).toEqual(author)
  })

  it('has a title', () => {
    expect(article.title).toEqual(title)
  })

  it('has a body', () => {
    expect(article.body).toEqual(body)
  })

  it('returns the number of words in the articles body', () => {
    expect(article.wordCount()).toEqual(4)
  })

  it('has a description that includes the author name', () => {
    expect(article.description()).toMatch(author.fullName())
  })

  it('has a description that includes the title', () => {
    expect(article.description()).toMatch(article.title)
  })

  it('starts with an empty list of comments', () => {
    expect(article.comments.length).toEqual(0)
  })

  it('has a way to add a comment to the article', () => {
    const comment = new Comment('I am so smart', author)
    article.addComment(comment)
    expect(article.comments.length).toEqual(1)
    // expect(article.comments).toEqual([comment])
  })

  it('has a comment count', () => {
    const comment = new Comment('I am so smart', author)
    const comment2 = new Comment('Boom', author)

    article.addComment(comment)
    article.addComment(comment2)

    expect(article.commentCount()).toEqual(2)
  })

  describe('#formattedString', () => {
    beforeEach(() => {
      let comment = new Comment('Awesome!', author)
      article.addComment(comment)
    })

    it('includes the title', () => {
      expect(article.formattedString()).toMatch(article.title)
    })

    it("includes the author's full name", () => {
      expect(article.formattedString()).toMatch(article.author.fullName())
    })

    it('includes the number of comments', () => {
      expect(article.formattedString()).toMatch(
        article.commentCount().toString()
      )
    })

    it('includes the body', () => {
      expect(article.formattedString()).toMatch(article.body)
    })
  })

  describe('#commentsMentioning', () => {
    it('provides a list of comments containing a certain phrase', () => {
      article.addComment(new Comment('Spaceforce!', author))
      article.addComment(new Comment('Regular Comment', author))
      article.addComment(new Comment('I want to join spaceforce', author))
      expect(article.commentsMentioning('spaceforce').length).toEqual(2)
    })
  })
})
