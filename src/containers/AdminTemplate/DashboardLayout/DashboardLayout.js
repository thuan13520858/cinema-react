import React, { Component } from 'react'
import Page from '../Page/Page'
import SidebarNav from './SidebarNav/SidebarNav'

export default class DashboardLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: true,
            title: 'Movies'
        }
    }

    expandCollapsedHandle = () => {
        this.setState({isExpand: !this.state.isExpand});
    }
    
    changNav = (value) => {
        this.setState({title: value});
    }

    render() {
        return (
            <div>
                <SidebarNav change = {this.changNav} isExpand  = {this.state.isExpand}/>
                <Page title = {this.state.title} isExpand  = {this.state.isExpand} expandCollapsedHandle = {this.expandCollapsedHandle}/>
            </div>
        )
    }
}
