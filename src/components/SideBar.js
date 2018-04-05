import React from "react";

const SideBar = props => {

    let list = props.data.list.map(x => {
        return (
            <li>
                <a href={x.url}>{x.name}</a>
            </li>
        )
    });

  return (
    <div className='sidebar'>
        <div className='sd-header'>
            {props.data.firstLetter}{props.data.lastLetter}
        </div>
        <div className='sd-list'>
            <ul>
            {list}
            </ul>
        </div>
    </div>

  );
};

export default SideBar;
