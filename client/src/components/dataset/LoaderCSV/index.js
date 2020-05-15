import React, { useState } from 'react';
import { connect } from 'react-redux';
import CSVReader from 'react-csv-reader';
import { datasetUserAdd } from '../../../actions/dataset';
import { tableOpen } from '../../../actions/modal';
import { messageShow } from '../../../actions/message';
import * as msgType from '../../../constants/message-type';
import * as sourceType from '../../../constants/dataset-source-type';
import * as columnType from '../../../constants/dataset-column-type';

const LoaderCSV = ({ messageShow, tableOpen, datasetUserAdd }) => {
  const [headers, setHeaders] = useState([]);
  const [type, setType] = useState([]);
  const [data, setData] = useState([]);
  const [key, setKey] = useState(null);
  const [info, setInfo] = useState(null);
  const [headrow, setHeadrow] = useState(true);

  const onFileLoaded = (data, fileInfo) => {
    try {
      setHeaders(headrow ? data[0] : data[0].map((_, i) => `Column ${i}`));
      setType(Array(data[0].length).fill(columnType.NUMERIC));
      setData(headrow ? data.slice(1, -1) : data);
      setInfo(fileInfo);
      messageShow({
        type: msgType.MESSAGE_SUCCESS,
        title: 'Успех!', 
        text: 'Файл успешно загружен!' 
      });
    } catch(e) {
      console.log(e)
      messageShow({
        type: msgType.MESSAGE_ERROR,
        title: 'Ошибка!', 
        text: 'Ошибка загрузки файла!' 
      });
    }
  };

  const saveDataset = () => {
    if (!key) {
      return messageShow({
        type: msgType.MESSAGE_ERROR,
        title: 'Ошибка!', 
        text: 'Выберите ключевой столбец!' 
      });
    }
    
    const dataset = {
      id: parseInt(new Date().getTime() / 1000),
      meta: {
        source: sourceType.USER_FILE,
        loaded: parseInt(new Date().getTime() / 1000),
        headers,
        type,
        key,
      },
      data,
    };
    datasetUserAdd(dataset);
    messageShow({
      type: msgType.MESSAGE_SUCCESS,
      title: 'Успех!', 
      text: 'Набор данных добавлен в библиотеку!' 
    });
  };

  const deleteDataset = () => {
    setHeaders([]);
    setData([]);
    setKey(null);
    setInfo(null);
  };

  return (
    <div>
      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input 
            type="checkbox" 
            className="custom-control-input" 
            id="customCheck1" 
            checked={headrow}
            onChange={() => setHeadrow(!headrow)} />
          <label className="custom-control-label" htmlFor="customCheck1">
            First row is Header?
          </label>
        </div>
      </div>

      <CSVReader onFileLoaded={onFileLoaded} />

      {info && (
        <>
          <h3 className="my-3">Loaded File</h3>
          <div className="card card-body border-primary mt-3 ">
            <div>
              <h4>File info:</h4>
              <div>
                <span className="font-weight-bold">File Name: </span>
                <span>{info.name}</span>
              </div>
              <div>
                <span className="font-weight-bold">Size: </span>
                <span>{info.size} bytes</span>
              </div>
              <div className="mb-3">
                <span className="font-weight-bold">Type: </span>
                <span>{info.type}</span>
              </div> 

              <h4>Select field types:</h4>
              <fieldset>
                {headers.map((header, index) => (
                  <div 
                    className={`form-group d-flex flex-wrap align-items-sm-center mb-3`} // 
                    key={index}>
                    <label className="mb-3 mb-sm-0 mr-auto" htmlFor={header}>
                      <span className="font-weight-bold">{header}</span> type: 
                    </label>
                    <select 
                      className="custom-select w-auto mb-3 mb-sm-0 ml-0 ml-sm-3" 
                      id={header}
                      onChange={(e) => setType(type.map((col, colIndex) => {
                        return colIndex === index ? e.target.value : col;
                      }))}>
                      <option value={columnType.NUMERIC}>Numeric</option>
                      <option value={columnType.DATE}>Data</option>
                      <option value={columnType.STRING}>Categorial String</option>
                    </select>
                    <label className="form-check-label pl-4 ml-sm-3">
                      <input 
                        type="radio" 
                        className="form-check-input" 
                        name="optionsRadios" 
                        id="optionsRadios1" 
                        value="option1" 
                        checked={key === header}
                        onChange={() => setKey(header)} />
                      is key?
                    </label>
                  </div>
                ))}
              </fieldset>
            </div>

            <div className="row">
              <div className="col-6 col-sm-4 mb-3 mb-sm-0">
                <button 
                  className="btn btn-outline-info w-100"
                  onClick={() => tableOpen({data, headers})}>
                  View
                </button>
              </div>
              <div className="col-6 col-sm-4 mb-3 mb-sm-0">
                <button 
                  className="btn btn-outline-primary w-100"
                  onClick={saveDataset}>
                  Save
                </button>
              </div>
              <div className="col-12 col-sm-4">
                <button 
                  className="btn btn-outline-danger w-100"
                  onClick={deleteDataset}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  messageShow: (value) => dispatch(messageShow(value)),
  tableOpen: (value) => dispatch(tableOpen(value)),
  datasetUserAdd: (value) => dispatch(datasetUserAdd(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LoaderCSV);
