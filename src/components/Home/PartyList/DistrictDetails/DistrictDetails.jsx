import React, { Component } from 'react';
import axios from 'axios';
import DistrictNames from './DistrictNames';

class PartyDetails extends Component {

    state = {
        districtList: []
    }

    componentDidMount() {
        this.fetchParties();
    }

    fetchParties() {
        axios.get('https://janawarama.helakuru.lk/api/election/district', { headers: { 'api-key': '0d9e15c7-3189-4402-8e3f-e5073ff00281' } })
            .then(response => {
                console.log(response.data)
                this.setState({
                    districtList: response.data.data
                });

            })
            .catch(error => console.log(error.response));
    }

    render() {
        return (
            <div className="container">
            <h1 className="text-center p-4">Select District</h1>
                <div className="row">
                    {
                        this.state.districtList.map(
                            district => <DistrictNames district={district} key={district.D_ID} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default PartyDetails;