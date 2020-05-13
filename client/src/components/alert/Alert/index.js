import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';

const Alert = ({ error, alert }) => {
  useEffect(() => {
    if (error.message) alert.error(error.message);
  }, [error, alert]);
  return <></>;
};

const mapStateToProps = (state) => ({
  error: state.error,
});

export default connect(mapStateToProps)(withAlert()(Alert));