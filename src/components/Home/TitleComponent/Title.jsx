import React from 'react';
import { Jumbotron } from 'reactstrap';
import PartyDetails from '../PartyList/DistrictDetails/DistrictDetails';

const Title = (props) => {
  return (
    <div>
      <Jumbotron>
        <h3 className="display-4">චන්ද දායකයන් පිලිබද නිවැරදි තොරතුරු දැනගනිමු</h3>   
        <hr className="my-2 mt-4" />
        <p className="lead">Powered By Janawarama API</p>
      </Jumbotron>
      <PartyDetails />
    </div>
  );
};

export default Title;