import React, { Component } from 'react';
import axios from 'axios';
import PartyListDetails from './PartyListDetails/PartyListdetails';

class PartyList extends Component {

    state = {
        PartyList: []
    }

    componentDidMount() {
        this.fetchParties();
    }

    fetchParties() {
        axios.get('https://janawarama.helakuru.lk/api/election/parties', { headers: { 'api-key': '0d9e15c7-3189-4402-8e3f-e5073ff00281' } })
            .then(response => {
                console.log(response.data)
                this.setState({
                    PartyList: response.data.data
                });

            })
            .catch(error => console.log(error.response));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.PartyList.map(
                            parties => <PartyListDetails party={parties} key={parties.PARTY_ID} />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default PartyList;