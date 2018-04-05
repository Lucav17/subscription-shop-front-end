import React, { Component } from "react";
import request from 'request';

let fakeListing = {
  price: 100.0,
  tags: ["food", "all natural", "handmade"],
  username: "lucav17",
  description:
    "example description of what this bio in their instagram is, example description of what this bio in their instagram is, example description of what this bio in their instagram is, example description of what this bio in their instagram is, example description of what this bio in their instagram is, example description of what this bio in their instagram is, example description of what this bio in their instagram is, example description of what this bio in their instagram is, example description of what this bio in their instagram is, ",
  followers: 26000,
  avg: 35,
  posts: 267,
  rating: 4.0,
  firstLetter: "L",
  lastLetter: "V",
  totalFollowers: 50234
};



class ProfilePage extends Component {
  handleClick() {
    request.post({
        url: 'https://hackathon.acumatica.com/beta/entity/auth/login',
        headers: {'content-type' : 'application/json'},
         body: JSON.stringify({
            "name" : "admin",
            "password" : "Goodbye",
            "company" :  ""
        })
         }, function(error, response, body){
            // console.log(response);
            console.log(body);
            console.log(error);
        });
  }
  render() {
    return (
      <div className="container profile-page">
        <div className="row">
          <div className="col-sm-8 offset-sm-2">
            <div className="profile-holder">
              {fakeListing.firstLetter}
              {fakeListing.lastLetter}
            </div>
            <p style={{ marginTop: "30px" }}>
              <b>username:</b> {fakeListing.username} | <b>tags:</b>{" "}
              {fakeListing.tags.join(", ")} | <b>total followers:</b>{" "}
              {fakeListing.totalFollowers}{" "}
            </p>
            <p className="smaller">{fakeListing.description}</p>

            <hr />
            <div className="profile-stats">
              <small>Accounts</small>
              <table class="table">
                <tbody>
                  <tr>
                    <th scope="row">Instagram</th>
                    <td>$150.00</td>
                    <td>25,000</td>
                    <td>
                      <button type="button" onClick={this.handleClick} className="btn btn-sm">
                        Bid
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
