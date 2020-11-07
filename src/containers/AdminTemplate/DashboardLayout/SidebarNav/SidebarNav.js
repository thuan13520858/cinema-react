import React, { Component } from 'react';
import NavBranch from '../NavBranch/NavBranch';
import NavMain from '../NavMain/NavMain';
import UserInfo from '../UserInfo/UserInfo';
import style from './SidebarNav.module.scss'

export default class SidebarNav extends Component {
    render() {
        const {isExpand, change} = this.props;
        return (
            <div className = {`${style.sidebarNav} ${!isExpand ? 'sidebarNavCollapsed' : ''}`}>
               <UserInfo isExpand = {isExpand}/>
               <div>
                   <NavMain change = {change} isExpand = {isExpand}/>
               </div>
            </div>
        )
    }
}
