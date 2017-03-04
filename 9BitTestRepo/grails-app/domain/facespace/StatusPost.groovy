package facespace

class StatusPost extends Post{

    String statusText

    StatusPost(){
        super()
    }

    static constraints = {
        statusText(maxSize: 180)
    }
}
