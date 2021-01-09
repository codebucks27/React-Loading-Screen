import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";

import * as location from "../1055-world-locations.json";
import * as success from "../1127-success.json";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: location.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function PreLoader2() {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setloading(true);

          setTimeout(() => {
            setcompleted(true);
          }, 1000);
        });
    }, 2000);
  }, []);

  return (
    <>
      {!completed ? (
        <>
          {!loading ? (
            <Lottie options={defaultOptions1} height={200} width={200} />
          ) : (
            <Lottie options={defaultOptions2} height={100} width={100} />
          )}
        </>
      ) : (
        <>
          <h1>Your Data</h1>
          <br />
          <h6 style={{ position: "Absolute", right: "5rem", bottom: "0" }}>
            <a
              style={{ color: "white" }}
              href="https://lottiefiles.com/chrisgannon"
            >
              Earth Animation by Chris Gannon on LottieFiles
            </a>
            <br />
            <a style={{ color: "white" }} href="https://lottiefiles.com/darius">
              Success Animation by Chris Gannon on LottieFiles
            </a>
          </h6>
        </>
      )}
    </>
  );
}

export default PreLoader2;
