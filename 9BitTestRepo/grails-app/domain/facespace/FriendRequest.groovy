package facespace

class FriendRequest {

    Profile targetProfile
    String message

    static belongsTo = [sourceProfile: Profile]

    static constraints = {
        message maxSize: 180
    }
}
