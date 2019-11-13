import React from 'react'

export class BacklogBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tickets: [{
                id: 'SC-1',
                desc: 'Do this',
                pts: 5,
                assignee: 'Colin'
            },{
                id: 'SC-2',
                desc: 'Do this',
                pts: 8,
                assignee: 'Colin'
            },{
                id: 'SC-3',
                desc: 'Do this',
                pts: 3,
                assignee: 'Colin'
            },]
        }
    }

    renderTickets(tickets){

        return tickets.map(t => (
            <tr className="t-row">
                <td className="t-id">{t.id}</td>
                <td className="t-desc">{t.desc}</td>
                <td className="t-pts">{t.pts}</td>
                <td className="t-assignee">{t.assignee}</td>
            </tr> 
        )) 
    }

    render() {
        return (
            <div className="bk-main">
                <table className="bk-table">
                    <tbody>
                        <tr className="t-head">
                            <td>Ticket</td>
                            <td>Description</td>
                            <td>Points</td>
                            <td>Assignee</td>
                        </tr>
                        {this.renderTickets(this.state.tickets)}
                    </tbody>
                </table>
            </div>
        )
    }
}