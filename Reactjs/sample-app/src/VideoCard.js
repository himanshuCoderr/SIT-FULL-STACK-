import './VideoCard.css'

function VideoCard({thumbnailImg , channelImg , channelName , videoTitle , views , dayAgo}) {
    console.log(videoTitle , views , thumbnailImg , channelImg , channelName ,dayAgo)
    
    return (
        <div class="video-card">
            <div class="thumbnail">
                <img src={thumbnailImg} alt="Video Thumbnail" />
            </div>
            <div class="video-info">
                <img style={{width : "50px"}} class="channel-icon" src={channelImg} alt="Channel Icon" />
                    <div class="details">
                        <h3 class="video-title">{videoTitle}</h3>
                        <p class="channel-name">{channelName}</p>
                        <p class="video-views">{views} views • {dayAgo} ago</p>
                    </div>
            </div>
        </div>
    )
}


export default VideoCard