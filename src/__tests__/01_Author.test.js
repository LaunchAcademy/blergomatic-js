import Author from "../Author.js"

describe("Author", () => {
  let author
  beforeEach(() => {
    author = new Author("Terry", "Pratchett")
  })

  describe("when initialized", () => {
    it("has a first name property that can be accessed", () => {
      expect(author.firstName).toEqual("Terry")
    })

    it("has a last name property that can be accessed", () => {
      expect(author.lastName).toEqual("Pratchett")
    })
  })
  
  describe("#fullName", () => {
    it("returns the value of the first and last name properties concatenated", () => {
      expect(author.fullName()).toEqual("Terry Pratchett")
    })
  })
})
