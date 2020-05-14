import { timestampToData } from './timestamp';
import * as datasetListSortType from '../constants/dataset-list-sort-type';

export const finhubToDataset = (data) => {
  let result = {};
  for (let i = 0; i < data.t.length; i++) {
    result = {
      ...result, 
      [data.t[i]]: [ 
        data.c[i],
        data.h[i],
        data.l[i],
        data.o[i],
        // data.v[i],
      ],
    };
  }
  return result;
};

export const finhubToCandle = (data, headers) => {
  let result = [['day', 'Price', 'Open', 'Close', 'High']];
  for (let i = 0; i < data.t.length; i++) {
    result = [
      ...result, 
      [
      timestampToData(data.t[i]), 
      data.l[i],
      data.o[i],
      data.c[i],
      data.h[i],
      // data.v[i],
    ],
    ];
  }
  return result;
};

export const datasetListSort = (list, sortType) => {
  switch (sortType) {
    case datasetListSortType.DATASET_DATE_ASC: {
      return list.sort((a, b) => a.loaded - b.loaded);
    }
    case datasetListSortType.DATASET_DATE_DESC: {
      return list.sort((a, b) => b.loaded - a.loaded);
    }
    default: {
      return list;
    }
  }
};