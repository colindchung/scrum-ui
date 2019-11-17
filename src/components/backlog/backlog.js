import React from 'react'
import { BacklogBoard } from './board'
import { TicketsToolbar } from '../toolbars/ticket.tb'

export class Backlog extends React.Component {
    render(){
        return (
            <div>
                <TicketsToolbar />
                <BacklogBoard/>
            </div>
        )
    }
}