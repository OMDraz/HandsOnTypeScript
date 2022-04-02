import React, { FC, useEffect } from "react";

interface ScreenCProps {
  message: string;
  history: any;
  match: any;
}

const ScreenC: FC<ScreenCProps> = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.history.push("/");
    }, 3000);
  });
  return (
    <div>
      <div>{"Your id is" + props.match.params.userid}</div>
      <div>{props.message}</div>
    </div>
  );
};

export default ScreenC;
