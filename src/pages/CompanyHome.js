import React, { Component } from "react";
import SideBar from "../components/SideBar";
import Listing from "../components/Listing";

let staticSide = {
  firstLetter: "G",
  lastLetter: "V",
  list: [
    {
      name: "Categories",
      url: "/listing/categories"
    },
    {
      name: "Trending",
      url: "/listing/trending"
    },
    {
      name: "Messages",
      url: "/account/messages"
    },
    {
      name: "Jobs",
      url: "/account/jobs"
    }
  ]
};


class CPHome extends Component {
  render() {
    return (
      <div className="company-hm">
        <div className="side-bar-container">
          <SideBar data={staticSide} />
        </div>
        <div className="listing-container">
          <div className="search-container">
            <small style={{ paddingLeft: "10px" }}>
              Find influencers for your business niche
            </small>
            <div style={{ marginTop: "5px" }} className="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Category, tags, description, key words.."
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
          <div className="listing-inner">
          </div>
        </div>
      </div>
    );
  }
}

export default CPHome;
