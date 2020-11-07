import React, { Component } from 'react'
import NavBranch from '../NavBranch/NavBranch'
import style from './NavMain.module.scss'
import {menu} from '../../MenuAdmin/MenuAdmin'

export default class NavMain extends Component {
    constructor (props) {
        super(props);
        this.state = {
            valueSeclected : 'movies',
            data: [
                {
                    logo: 'movie',
                    url: '/admin/movies',
                    value: "movies",
                    title: 'Movies'
                },
                {
                    logo: 'movie',
                    url: '/admin/users',
                    value: "users",
                    title: 'Users'
                },
                {
                    logo: 'ticket',
                    url: '/admin/ticket',
                    value: "ticket",
                    title: 'Ticket'
                }
            ]
        }
    }
    changeValueSeclected = (value, title) => {
        this.setState({
            valueSeclected: value
        });
        this.props.change(title);
    }
    renderNav = () => {
        const {isExpand, change} = this.props;
        return menu.map((item, index) => {
            return (
                <NavBranch key = {index} data = {item} 
                select = {this.changeValueSeclected}
                isExpand = {isExpand}
                valueSeclected = {this.state.valueSeclected}/>
            )
        })
    }
    render() {
        return (
            <div className = {style.navMain}>
                <this.renderNav />
            </div>
        )
    }
}
