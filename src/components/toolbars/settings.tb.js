import React from 'react';

let icons = [
    require('./library/icons/icon-gear-white.png')
]

export class SettingsToolBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    renderImages(){
        document.getElementById('icon-settings').src = icons[0]
    }

    render() {
        return this.props.settings.display ? (
            <div className="tb-2">
                <img className="icon" id="icon-settings" src={icons[0]}/>
            </div>
        ) : null
    }
}