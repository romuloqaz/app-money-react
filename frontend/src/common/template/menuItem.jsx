import React from 'react';

export default props => (
    <li>
        <a href={props.patch}>
            <i className={`fa fa-${props.icon}`}></i> {props.label}
        </a>
    </li>
);