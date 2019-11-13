import React from 'react';

//IMAGES
let icon_left = require('./library/icons/icon-left-arrow.png')
let icon_right = require('./library/icons/icon-right-arrow.png')  
let icons = [
    require('./library/icons/icon-backlog.png'),
    require('./library/icons/icon-sprint.png'),
    require('./library/icons/icon-web.png'),
    require('./library/icons/icon-clipboard.png') 
]

export class ToolBar1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: true
        }
    }

    renderList(items){
        return items.map(item => 
            <li><img className="tb-1-hd-icon" src={icons[item.icon]}/>{item.title}</li>
        );
    }

    toggleIcon(){
        const tb = document.getElementById('tb-1-hd')
        const btn = document.getElementById('tb-1-col')

        if(this.state.display){
            this.setState({
                display: false
            })
            tb.style.display = 'none'
            btn.style.marginLeft = '0%'
        } else {
            this.setState({
                display: true
            })
            tb.style.display = ''
            btn.style.marginLeft = '15%'
        }  
    }

    render(){
        return this.props.settings.display ? (
            <div className="tb-1">
                <ul className="tb-1-hd" id="tb-1-hd">{this.renderList(this.props.settings.headers)}</ul>
                <button onClick={() => this.toggleIcon()} className="tb-1-col" id="tb-1-col">
                    <img className="tb-1-col-icon" src={this.state.display ? icon_left : icon_right}/>
                </button>
            </div>
        ) : null
    }
}