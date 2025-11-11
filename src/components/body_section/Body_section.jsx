import React from "react";
import First_section from "./First-section/First_section";
import Second_section from "./Second_section/Second_section";
import Third_section from "./Third-section/Third_section";
import Fourth_section from "./Fourth_section/Fourth_section";
import Fifth_section from "./Fifth_section/Fifth_section";
import Sixth_section from "./Sixth_section/Sixth_section";
import YouTubeVideos from "./YoutubeVideo/YoutubeVideos";

function Body_section() {
  return (
    <>
      <First_section />
      <Second_section />
      <Third_section />
      <Fourth_section />
      <Fifth_section />
      <Sixth_section />
      <YouTubeVideos />
    </>
  );
}

export default Body_section;
