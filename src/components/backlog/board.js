import React from 'react'
import firebase from 'firebase'
import { GetAllTickets } from '../../dataAccess/ticket'

const connect = require('../../appData/connect.json')
const firebaseConfig = connect.firebaseConnection


export class BacklogBoard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            tickets: []
        }
    }

    componentDidMount(){
        var tickets = []
        firebase.initializeApp(firebaseConfig);
        var data = GetAllTickets();
        console.log(data)

        data.forEach((d) => {
            tickets.push({
                id: d.ticketid,
                desc: d.title,
                pts: d.points,
                assignee: d.assignee
            });
        })

        this.setState({
            tickets: tickets
        })
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