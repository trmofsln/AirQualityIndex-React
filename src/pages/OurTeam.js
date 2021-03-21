import React from "react";
import './OurTeam.css'




const teamDetail = [
  {
    id: "p1",
    name: "Tirupati Raman Mishra",
    review: "Develop some thing very good. study in b.tech 6th sem and also good web developer",
    imgUrl: "https://www.online-image-editor.com/styles/2019/images/power_girl.png",
  },
  {
    id: "p2",
    name: "Yash Kumar Prajapati",
    review: "Develop some thing very good. study in b.tech 6th sem and also good web developer",
    imgUrl: "https://www.online-image-editor.com/styles/2019/images/power_girl.png",
  },
  {
    id: "p3",
    name: "Sanyam Gupta",
    review: "Develop some thing very good. study in b.tech 6th sem and also good web developer",
    imgUrl: "https://www.online-image-editor.com/styles/2019/images/power_girl.png",
  },
];

const OurTeam = () => {
  return (
    <div className="ourteam-background">
      <div className="teammate">
    
      <h1> {teamDetail[0].name} </h1>
      </div>
      <div className="teammate">
  
      <h1> {teamDetail[1].name} </h1>
      </div>
      <div className="teammate">
      
      <h1> {teamDetail[2].name} </h1>
      </div>
    </div>
  );
};

export default OurTeam;
