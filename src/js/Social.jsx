import React from 'react';

export default function Social(props) {

    const items = props.data.map((item, index) => (
        <li className="social--item" key={index}><a href={item.link}><i className={item.class}></i></a></li>
    ));

    return (
        <ul className="social">
            {items}
            {/* <i class="far fa-envelope"></i>
            <i class="fab fa-github"></i>
            <i class="fab fa-codepen"></i> */}
        </ul>
    );
}