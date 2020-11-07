import React, { Component } from 'react';
import style from './NavBranch.module.scss';
import { NavLink } from 'react-router-dom';

export default class NavBranch extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isActive: false
        }
    }
    render() {
        const {classIcon, title, value, url} = this.props.data;
        const {valueSeclected, isExpand} = this.props;
        console.log(classIcon);
        return (
            <div className = {`${style.navBranch}`} 
            onClick = {()=> {this.props.select(value, title)}}>
                <div className = {`nav-area ${valueSeclected == value ? "active": ''}
                                  ${!isExpand ? 'collapsed' : ''}`}>
                    <NavLink className = "nav__link" to = {url} >
                        <i class={classIcon}></i>
                        {isExpand ? (<span>{title}</span>) : ('')}
                    </NavLink>
                    <div className = "collapse" id="collapseExample">abc</div>
                </div>
            </div>
        )
    }
}
