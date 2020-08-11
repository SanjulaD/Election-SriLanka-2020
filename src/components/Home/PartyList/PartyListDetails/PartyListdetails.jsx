import React from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const PartyListDetails = ({ party }) => {

    const history = useHistory();

    const getPartyDetails = (partyID) => {
        history.push("/party?" + partyID);
    }

    return (
        <div className="col-md-4 mt-3">
            <Card>
                <CardImg style={{ width: '80%' }} top src={party.PARTY_LOGO} alt={party.PARTY_NAME} />
                <CardBody>
                    <CardTitle style={{ fontWeight: 'bold' }}>{party.PARTY_NAME}</CardTitle>
                    <Button style={{
                        color: 'black',
                        backgroundColor: 'white',
                    }} onClick={() => getPartyDetails(party.PARTY_ID)}>Details</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default PartyListDetails;