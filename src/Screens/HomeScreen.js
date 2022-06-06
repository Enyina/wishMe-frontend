import React from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <div className="homescreen">
      <div className="top-container">
        <h1 className="page-title"> The Wish List Maker</h1>
        <h2> Add gifts from any website. Share with friends</h2>
        <Link to=""> Create a Wishlist </Link>
      </div>

      <div className="mid-container">
        <div className="mid-box-container">
          {/* img */}
          <h2> Add anything </h2>
          <p> Add gifts from any store online </p>
        </div>
        <div className="mid-box-container">
          {/* img */}
          <h2> Any occassion</h2>
          <p> Birthdays, Weddings, Baby showers, All kinds of events </p>
          <p> WishMe works everytime </p>
        </div>
        <div className="mid-box-container">
          {/* img */}
          <h2> Completely Free </h2>
          <p> WishMe is completely free and unlimited </p>
        </div>
      </div>

      <div className="buttom-container">
        <h2> How it works </h2>

        <div className="sub-buttom">
          <div className="buttom-box-container">
            <h3>Create wishlist</h3>
            <p>
              Wishlists can be for yourself,for a family member, or even a
              friend.
            </p>
          </div>
          <div className="buttom-box-container">
            <h3> Add wishes</h3>
            <p>Paste a link from any website,We'll load in the details.</p>
          </div>
          <div className="buttom-box-container">
            <h3> Share</h3>
            <p>With friends, family oranyone you like.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
