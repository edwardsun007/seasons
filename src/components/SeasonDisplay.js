import React from "react";
import "./seasonDisplay.css";
/* this doesn't mean that we simply import everything from css file into this js file!
Webpack works for me behind the scene grab everything in the css and put it into index.html
*/

const seasonConfig = {
  Summer: {
    text: "Lets hit the beach!",
    iconName: "sun"
  },
  Winter: {
    text: "Burr, it is chilly~~",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  console.log();
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter"; // if its north hemisphere then summer else winter
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; // nice way to make both seasonConfig and getSeason dynamic, try destructor always when possible
  //console.log(season);
  // const seasonTxt =
  //   season === "Winter" ? text : seasonConfig.summer.text;
  // const icon =
  //   season === "Winter"
  //     ? seasonConfig.winter.iconName
  //     : seasonConfig.summer.iconName;

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
