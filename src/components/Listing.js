import React from "react";

const Listing = props => {
  let data = props.data.map(x => {
    let tags = x.tags.map(tag => {
      return <a href="" style={{margin:'5px'}}>{tag}</a>;
    });
    return (
        
      <tr>

        <th scope="row">${x.price}</th>
        <td><a href={`/accounts/${x.username}`}>{x.username}</a></td>
        <td>{tags}</td>
        <td>{x.description}</td>
        <td>{x.followers}</td>
        <td>{x.posts}</td>
        <td>{x.rating} / 5.0</td>
        <td>
          <button type="button" className="btn btn-sm">
            Bid
          </button>
        </td>
      </tr>
    );
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Price</th>
          <th scope="col">Username</th>
          <th scope="col">Tags</th>
          <th scope="col">Description</th>
          <th scope="col">Followers</th>
          <th scope="col">Posts</th>
          <th scope="col">Rating</th>
          <th scope="col" />
        </tr>
      </thead>
      <tbody>{data}</tbody>
    </table>
  );
};

export default Listing;
