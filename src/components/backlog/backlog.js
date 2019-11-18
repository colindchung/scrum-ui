import React from 'react'
import { BacklogBoard } from './board'
import { Ticket } from '../ticket/ticket'
import { TicketsToolbar } from '../toolbars/ticket.tb'

export class Backlog extends React.Component {
    render(){
        return (
            <div>
                <TicketsToolbar />
                <BacklogBoard />
            </div>
        )
    }
}