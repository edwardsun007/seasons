import React from "react";

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
  //console.log(season);
  const seasonTxt =
    season === "Winter" ? "Burr, it is chilly~~" : "Let's hit the beach!";
  const icon = season === "Winter" ? "snowflake icon" : "sun icon";

  return (
    <div>
      <h1>
        <i className={icon} />
        {seasonTxt}
      </h1>
    </div>
  );
};

export default SeasonDisplay;
