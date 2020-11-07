import React, { Component } from 'react';
import style from './UserInfo.module.scss';

export default class UserInfo extends Component {
    render() {
        const {isExpand} = this.props;
        return (
            <div className = {style.userInfo}>
                <img src="./images/icons8-male-user-100.png" alt=""/>
                {isExpand ? (<p className = "user-name">Nguyen Van A</p>) : ('')}
            </div>
        )
    }
}
