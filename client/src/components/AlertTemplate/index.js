import React from 'react';

const AlertTemplate = ({ style, options, message, close }) => (
  <div className="alert alert-dismissible alert-warning" style={style}>
    <h4 className="alert-heading">Ошибка!</h4>
    <p className="mb-0">{message}</p>
    <button type="button" className="close" onClick={close}>&times;</button>
  </div>
)

export default AlertTemplate;