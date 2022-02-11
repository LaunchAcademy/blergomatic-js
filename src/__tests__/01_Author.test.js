import Author from "../Author.js"

describe("Author", () => {
  let author
  beforeEach(() => {
    author = new Author("Terry", "Pratchett")
  })

  it("has a first name", () => {
    expect(author.firstName).toEqual("Terry")
  })

  it("has a last name", () => {
    expect(author.lastName).toEqual("Pratchett")
  })

  it("has a full name", () => {
    expect(author.fullName()).toEqual("Terry Pratchett")
  })
})
