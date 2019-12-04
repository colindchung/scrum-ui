import React from 'react';
import axios from 'axios';

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
        axios.get("https://localhost:44392/ticket/getAll")
            .then(res => {
                var data = [];
                
                res.data.forEach(t => {
                    var curr = {
                        id: t.id,
                        desc: t.description,
                        pts: t.points,
                        assignee: t.assignee
                    };
                    
                    data.push(curr);
                });

                this.setState({
                    tickets: data
                })
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