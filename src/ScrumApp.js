import React from 'react';
import './ScrumApp.css';
import { ToolBar1 } from './components/toolbars/tb1'
import { SettingsToolBar } from './components/toolbars/settings.tb'
import { Backlog } from './components/backlog/backlog' 
import { BacklogBoard } from './components/backlog/board';

const mainAppData = require('./appData/main.json')

class BacklogView extends React.Component {
    render(){
        return (
            <div id="app">
                <div id="top-bar">
                    <SettingsToolBar settings={mainAppData.main_tb2_settings}/>
                </div>
                <div id="body">
                    <div id="side-bar">
                        <ToolBar1 settings={mainAppData.main_tb1_settings}/>
                    </div>
                    <div id="main">
                        <Backlog />
                    </div>
                </div>
            </div>     
        )
    } 
}

export default class ScrumApp extends React.Component {
    render(){
        return (
            <BacklogView />
        )
    }
}
