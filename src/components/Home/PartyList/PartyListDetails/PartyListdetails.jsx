import React from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Button
} from 'reactstrap';

const PartyListDetails = ({ party }) => {
    return (
        <div className="col-md-4 mt-3">
            <Card>
                <CardImg style={{ width: '80%' }} top src={party.PARTY_LOGO} alt={party.PARTY_NAME} />
                <CardBody>
                    <CardTitle style={{ fontWeight: 'bold' }}>{party.PARTY_NAME}</CardTitle>
                    <Button style={{
                        color: 'black',
                        backgroundColor: 'white'
                    }}>Details</Button>
                </CardBody>
            </Card>
        </div>
    );
};

export default PartyListDetails;