import React from 'react';
import axios from 'axios';

class allCandidates extends React.Component {

    state = {
        candidates: []
    }

    componentDidMount() {
        this.fetchParties();
    }

    fetchParties() {
        axios.get('https://janawarama.helakuru.lk/api/election/candidates', { headers: { 'api-key': '0d9e15c7-3189-4402-8e3f-e5073ff00281' } })
            .then(({ data }) => {
                console.log(data)
                this.setState({
                    candidates: data.data.data
                });

            })
            .catch(error => console.log(error.response));
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {
                        this.state.candidates.map(
                            candidates => <allCandidates candidates={candidates} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default allCandidates;