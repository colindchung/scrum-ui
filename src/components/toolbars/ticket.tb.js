import React from 'react';

export class TicketsToolbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tickets: ['SC-1', 'SC-2', 'SC-3']
        }
    }

    getTickets(tickets){
        return tickets.map(t => 
            <li>{t}</li>
        )
    }

    render() {
        return (
            <div className="ticket-tb">
                <ul className="ticket-tb-ul">{this.getTickets(this.state.tickets)}</ul>
            </div>
        )
    }
}