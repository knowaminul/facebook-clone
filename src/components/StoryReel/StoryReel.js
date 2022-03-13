import React from "react";
import Story from "../Story/Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://picsum.photos/id/1036/367/267"
        profileImage="https://randomuser.me/api/portraits/thumb/men/32.jpg"
        name="Necati Yıldızoğlu"
      />
      <Story
        image="https://picsum.photos/id/1035/367/267"
        profileImage="https://randomuser.me/api/portraits/thumb/men/29.jpg"
        name="Samuel Scott"
      />
      <Story
        image="https://picsum.photos/id/1038/367/267"
        profileImage="https://randomuser.me/api/portraits/thumb/women/95.jpg"
        name="Allie Richards"
      />
      <Story
        image="https://picsum.photos/id/1033/367/267"
        profileImage="https://randomuser.me/api/portraits/thumb/women/3.jpg"
        name="Mathilde Møller"
      />
      <Story
        image="https://picsum.photos/id/1032/367/267"
        profileImage="https://randomuser.me/api/portraits/thumb/men/5.jpg"
        name="John Walker"
      />
    </div>
  );
}

export default StoryReel;
