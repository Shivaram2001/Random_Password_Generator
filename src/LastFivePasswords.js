import React from "react";

export default function LastFivePasswords(props) {
  let last5Password = getLastFiveElements(props.passwords);
  function getLastFiveElements(arr) {
    if (arr.length >= 5) {
      return arr.slice(-5);
    } else {
      return arr;
    }
  }
  return (
    <div>
      {props.passwords.length < 1 ? (
        <h5 className="text-center">No Previous Password</h5>
      ) : (
        <>
          <h5 className="pass-counter">
            Your Last {last5Password.length} Passwords
          </h5>
          <ul type="none">
            {last5Password.map((password, index) => {
              return (
                <li key={index} className="text-center">
                  {password}
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
