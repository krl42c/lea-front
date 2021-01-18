import React from 'react';
import { withRouter } from 'react-router-dom';

const Volver = ({ history }) => <button class='volver btn btn-primary' onClick={() => history.goBack()}>Volver</button>;

export default withRouter(Volver);
