package facespace

class FriendList {

    Profile ownerProfile

    static belongsTo = [ownerProfile : Profile]

    static hasMany = [friendProfiles : Profile]

    static constraints = {
        friendProfiles nullable: true
    }
}
