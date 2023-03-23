class Author {
    constructor(firstNameString, lastNameString){
        this.firstName = firstNameString 
        this.lastName = lastNameString
    }

    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}
// const terry = new Author("Terry", "Pratchett")
// terry.fullName()

export default Author