- snippet video of debugging in JS 

```
- node --inspect-brk <filename>
```


<!-- import Comment from '../Comment.js'
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
    debugger
    expect(article.author).toEqual(author)
  })

  it('has a title', () => {
    expect(article.title).toEqual(title)
  })

  it('has a body', () => {
    expect(article.body).toEqual(body)
  })

  describe("#wordCount", () => {
    it('returns the number of words in the articles body', () => {
      expect(article.wordCount()).toEqual(4)
    })
  })

  describe.only("#description", () => {
    it('returns description text that includes the full name of the author', () => {
      expect(article.description()).toMatch(author.fullName())
    })
  
    it('returns description text that includes the title of the article', () => {
      expect(article.description()).toMatch(article.title)
    })
  })


  it('starts with an empty list of comments', () => {
    expect(article.comments.length).toEqual(0)
  })

  describe("#description", () => {
    it('adds a comment to an article\'s stored comments ', () => {
      const comment = new Comment('I am so smart', author)
      article.addComment(comment)
      expect(article.comments.length).toEqual(1)
      expect(article.comments).toEqual([comment])
    })
  })

  describe("#commentCount", () => {
    it('returns the number of comments for an article', () => {
      const comment = new Comment('I am so smart', author)
      const comment2 = new Comment('Boom', author)
  
      article.addComment(comment)
      article.addComment(comment2)
  
      expect(article.commentCount()).toEqual(2)
    })
  })


  describe.only('#formattedString', () => {
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
}) -->
