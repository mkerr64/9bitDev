package facespace

class UserAccount {

    String userName
    String password

    // hasOne property should be on the owning object
    // e.g. UserAccount owns the Profile
    //static hasOne = [userProfile : Profile]
    static hasMany = [transactions: Transaction]


    static constraints = {
    }
}
