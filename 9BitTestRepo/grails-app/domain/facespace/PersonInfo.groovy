package facespace

class PersonInfo {

    String name
    Date dob
    String shortBio
    String favQuote

    static belongsTo = [profile : Profile]

    static constraints = {
    }
}
