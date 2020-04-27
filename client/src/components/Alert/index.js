import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';

const Alert = (props) => {
  useEffect(() => { 
    props.error.message && props.alert.error(props.error.message);
  }, [props.error]);

  return <></>
}

const mapStateToProps = (state) => ({
  error: state.error,
})

export default connect(mapStateToProps)(withAlert()(Alert))