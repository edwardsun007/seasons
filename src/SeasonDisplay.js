import React from "react";

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
    <div>
      <h1>
        <i className={`large ${iconName} icon`} />
        <br />
        {text}
        <br />
        <i className={`large ${iconName} icon`} />
      </h1>
    </div>
  );
};

export default SeasonDisplay;
