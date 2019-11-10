import React from 'react';
import './ScrumApp.css';
import { ToolBar1 } from './components/toolbars/tb1'

const mainAppData = require('./appData/main.json')

export default class ScrumApp extends React.Component {
    render(){
        return (
            <ToolBar1 items={mainAppData.main_tb1_headers}/>
        )
    } 
}
