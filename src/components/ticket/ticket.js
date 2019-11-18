import React from 'react'

export class Ticket extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ticket: {
                id: 'SC-1',
                title: 'Do this'
            }
        }
    }

    render() {
        return (
            <div className="tk">
                <h1 id="tk-title">SC-1</h1>
            </div>
        )
    }
}