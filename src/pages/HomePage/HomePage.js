import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./HomePage.scss";

const HomePage = () => {
  const state = useSelector((state) => state.countries);
  const dispatchFn = useDispatch();
  console.log(state, dispatchFn);

  return (
    <section className="homepage">
      <div className="header">
        <p>Home Page...</p>
      </div>
    </section>
  );
};

export default HomePage;
