import React, { useState } from 'react';
import LoaderFinhub from '../LoaderFinhub';
import LoaderCSV from '../LoaderCSV';
import * as sourceType from '../../../constants/dataset-source-type';

const Loader = () => {
  const [where, setWhere] = useState(sourceType.USER_FILE);
  return (
    <>
      <div className="form-group">
        <label htmlFor="where">Where</label>
        <select 
          className="custom-select" 
          id="where" 
          value={where}
          onChange={(e) => setWhere(e.target.value)}>
          <option value={sourceType.USER_FILE}>My CSV File</option>
          <option value={sourceType.FINHUB}>finhub.com</option>
        </select>  
      </div>
      {where === sourceType.FINHUB && <LoaderFinhub />}
      {where === sourceType.USER_FILE && <LoaderCSV />}
    </>
  );
};

export default Loader;
