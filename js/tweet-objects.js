class Tweet {
    constructor(userScreenName, userName, timestamp, text, embeddedText, emojis, comments, likes, retweets, imageLink, tweetLink, id, partei, sentiment){
        this.userScreenName = userScreenName
        this.userName = userName
        this.timestamp = timestamp
        this.text = text
        this.embeddedText = embeddedText
        this.emojis = emojis
        this.comments = comments
        this.likes = likes
        this.retweets = retweets
        this.imageLink = imageLink
        this.tweetLink = tweetLink
        this.id = id
        this.partei = partei
        this.sentiment = sentiment
    }
}