import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import style from './Page.module.scss';
import Movies from './PageContent/Movies/Movies';
import Pagecontent from './PageContent/PageContent';
import Users from './PageContent/Users/Users';
import Ticket from './PageContent//Ticket/Ticket'
import PageHeader from './PageHeader/PageHeader';
import {menu} from '../MenuAdmin/MenuAdmin'

export default class Page extends Component {
    constructor(props) {
        super(props);
    }

    renderRout = () => {
        return menu.map((item, index) => {
            return (
                <Route key = {index} path = {item.url} component = {item.component}/>
            )
        })
    }
    render() {
        const {isExpand, title } = this.props;
        return (
            <div className = {`${style.page} ${!isExpand ? 'pageCollapsed' : ''}`}>
                <PageHeader title = {title} select = {this.props.expandCollapsedHandle}/>
                <Pagecontent>
                    <Switch>
                        {/* <Route path = "/admin/movies" component = {Movies}/>
                        <Route path = "/admin/users" component = {Users}/>
                        <Route path = "/admin/ticket" component = {Ticket}/> */}
                        {this.renderRout()}
                        <Redirect from="/" to="/admin" />
                    </Switch>
                </Pagecontent>
            </div>
        )
    }
}
