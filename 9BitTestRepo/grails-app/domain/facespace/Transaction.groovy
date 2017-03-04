package facespace

class Transaction {

    Double amount
    String category
    String date

    Transaction(double amount, String category, String date){
        this.amount = amount
        this.category = category
        this.date = date

        //Now we break up the string into year, month and day
        /*String[] datestuff = date.split("-")

        d1 = datestuff[0]//year
        d2 = datestuff[1]//month
        d3 = datestuff[2]//day

        year = Integer.parseInt(d1)
        month = Integer.parseInt(d2)
        day = Integer.parseInt(d3)

        //assign to constructor
        this.year = year
        this.month = month
        this.day = day*/


    }

    static belongsTo = [sourceProfile: Profile]

    static constraints = {
        //constaints so that year, month and day values all make sense
        //year > 0
        //1<= month && month <= 12
        //1<= day && day <= 31
    }
}
