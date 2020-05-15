import React from 'react';
import { connect } from 'react-redux';
import CSVReader from 'react-csv-reader'
import { messageShow } from '../../../actions/message';
// import { loaderGetSuccess } from '../../../actions/dataset';
import * as msgType from '../../../constants/message-type';

const LoaderCSV = ({ loaderGetSuccess }) => {
  const onFileLoaded = (data, fileInfo) => {
    try {
    } catch(e) {
      console.log(e)
      messageShow( {
        type: msgType.MESSAGE_ERROR,
        title: 'Ошибка!', 
        text: 'Ошибка загрузки файла!' 
      });
    }
  };

  return (
    <div>
      <CSVReader onFileLoaded={onFileLoaded} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(LoaderCSV);
