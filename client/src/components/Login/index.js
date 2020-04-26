import React from 'react';
import Modal from '../Modal';

import { connect } from 'react-redux';
import { modalLoginClose } from '../../actions/modal';

class Login extends React.Component {  
  render () {
    const {
      login,
      modalLoginClose,
    } = this.props;  
  
    return ( 
      <Modal 
        status={login}
        close={modalLoginClose}
      >
      </Modal>
    )
  } 
}

const mapStateToProps = (state) => ({
  login: state.modal.login,
})

const mapDispatchToProps = {
  modalLoginClose,
};

export default connect((state) => mapStateToProps, mapDispatchToProps)(Login);

/*
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      onChange={onChange}
                    />
                  </div>
                </form>

*/