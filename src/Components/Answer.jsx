import React, { useState } from "react";

function Answer(props) {
  // <div
  //           className="die-face"
  //           style={styles}
  //           onClick={props.holdDice}
  //       >
  //           <h2 className="die-num">{props.value}</h2>
  //       </div>

  const styles = {
    backgroundColor: props.isHeld ? "#D6DBF5" : "#F5F7FB",
    border: props.isHeld ? "0px" : "1px solid #4d5b9e",
  };
  return (
    <div className="answerBox" style={styles} onClick={props.holdField}>
      <p className="ansValue">{props.ans}</p>
    </div>
  );
}

export default Answer;
