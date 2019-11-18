import React from 'react';

export class TicketsToolbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tickets: ['SC-1', 'SC-2', 'SC-3']
        }
    }

    setActive(e){
        console.log(e.target.id)
    }

    getTickets(tickets){
        return tickets.map(function(t, i) {
            return <li className="ticket-tb-li" id={'t'+i}>{t}</li>
        })
    }

    render() {
        return (
            <div className="ticket-tb">
                <ul className="ticket-tb-ul">{this.getTickets(this.state.tickets)}</ul>
            </div>
        )
    }
}