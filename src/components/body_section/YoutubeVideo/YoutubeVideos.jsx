import React, { useState, useEffect } from "react";
import "./youtubeVideos.css";
function YouTubeVideos() {
  const [youTubeVideos, setYouTubeVideos] = useState([]);

  useEffect(() => {
    const fetchYouTubeVideos = async () => {
      try {
        const response = await fetch(
          "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyBLBk2HA8XF6yfLTX1oGWh-1GLRXBEE5mA"
        );

        const data = await response.json();
        let youTubeVideos = data.items;
        setYouTubeVideos(youTubeVideos);
      } catch (error) {
        console.error("Error fetching YouTube videos:", error);
      }
    };

    fetchYouTubeVideos();
  }, []);

  return (
    <div className="allVideosWrapper">
      <div className="container">
        <div className="row h-100 align-items-center justify-content-center text-center">
          <div className="col-12">
            <div className="title-wraper bold video-title-wrapper">
              Latest Videos
            </div>
          </div>
          {youTubeVideos.map((singleVideo, i) => {
            let vidId = singleVideo.id.videoId;
            // console.log(vidId);
            let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
            // console.log(vidLink);
            return (
              <div key={i} className="col-sm-12 col-md-4">
                <div className="singleVideoWrapper">
                  <div className="videoThumbnail">
                    <a href={vidLink} target="_blank">
                      <img src={singleVideo.snippet.thumbnails.high.url} />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default YouTubeVideos;
