package facespace

class Transaction {

    String amounts
    String categorys
    String dates

    static belongsTo = [sourceProfile: UserAccount]

    static constraints = {
        //constaints so that year, month and day values all make sense
        //year > 0
        //1<= month && month <= 12
        //1<= day && day <= 31
    }
}
