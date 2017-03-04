package facespace

class VideoPost extends Post{

    String videoURL
    String thumbnailURL

    static constraints = {
        videoURL nullable: true
        thumbnailURL nullable: true
    }
}
