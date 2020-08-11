import React from 'react';
import { Card, CardBody, CardTitle, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const DistrictNames = ({ district }) => {

    const history = useHistory();

    const getDistrictPersons = (disId) => {
        history.push("/party?");
    }

    return (
        <div className="col-md-4 mt-3">
            <Card>
                <CardBody>
                    <CardTitle style={{ fontWeight: 'bold' }}>{district.D_NAME}</CardTitle>
                    <Button style={{
                        color: 'black',
                        backgroundColor: 'white',
                    }} onClick={() => getDistrictPersons(district.D_ID)}>Details</Button>
                </CardBody>
            </Card>
        </div>
    );
}

export default DistrictNames;