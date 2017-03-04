package facespace

abstract class Post {

    Date dateCreated
    Date dateLastEdited

    Post(){
        dateCreated = new Date()
        dateLastEdited = new Date()
    }

    static belongsTo = [ownerProfile : Profile]

    static constraints = {
    }
}
