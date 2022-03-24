import Author from '../Author.js'

describe('Author', () => {
  let author

  // when does this get run?
  beforeEach(() => {
    // when do we have access to this object?
    author = new Author('Terry', 'Pratchett')
  })

  it('has a first name', () => {
    expect(author.firstName).toEqual('Terry')
  })

  it('has a last name', () => {
    expect(author.lastName).toEqual('Pratchett')
  })

  describe("#fullName", () => {
    it('returns the author\'s full name and last name as a string ', () => {
      debugger
      expect(author.fullName()).toEqual('Terry Pratchett')
    })
  })
})
