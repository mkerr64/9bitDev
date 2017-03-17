package facespace

class Profile {

    // Grails can correctly 'guess' the association between 'this' and
    // the Profile called userProfile in the UserAccount class
    // i.e. it is correctly inferring the 1-to-1 relationship
    //UserAccount ownerAccount
    //Transaction transactions

    //Transaction transaction
    //ArrayList<Transaction> transactions = new ArrayList<Transaction>()

    // mappedBy tells grails how to handle association conflicts
    /*static mappedBy = [outFriendRequests: 'sourceProfile',
                       inFriendRequests: 'targetProfile']*/
    static belongsTo = [owner: UserAccount]
    static hasMany = [transactions: Transaction]

    static constraints = {
        owner nullable: true
        transactions nullable: false
    }
}
