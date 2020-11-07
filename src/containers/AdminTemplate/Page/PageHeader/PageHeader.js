import React, { Component } from 'react'
import style from './PageHeader.module.scss'

export default class PageHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpand: true
        }
    }
    render() {
        const { title } = this.props;
        return (
            <div className = {style.pageHeader}>
                <button onClick = {()=> {this.setState({isExpand: !this.state.isExpand}); this.props.select()}}>
                   {
                       this.state.isExpand ? ( <i class="fa fa-angle-left"></i>) : ( <i class="fa fa-angle-right"></i>)
                   }
                </button>
                <p className = "m-0 mx-3">{title}</p>
            </div>
        )
    }
}
