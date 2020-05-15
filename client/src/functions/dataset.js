import { timestampToDate } from './timestamp';
import * as datasetListSortType from '../constants/dataset-list-sort-type';

export const finhubToData = (dataset) => {
  let data = [];
  for (let i = 0; i < dataset.t.length; i++) {
    const row = [
      dataset.t[i], 
      dataset.l[i], 
      dataset.o[i], 
      dataset.c[i], 
      dataset.h[i],
    ];
    data = [ ...data, row ];
  }
  return data;
};

export const finhubToCandle = (dataset, headers) => {
  let data = [['day', 'Price', 'Open', 'Close', 'High']];

  for (let i = 0; i < dataset.t.length; i++) {
    const row = [
      timestampToDate(dataset.t[i]), 
      dataset.l[i], 
      dataset.o[i], 
      dataset.c[i], 
      dataset.h[i], 
    ];
    data = [...data, row];
  }
  return data;
};

export const datasetListSort = (list, sortType) => {
  switch (sortType) {
    case datasetListSortType.DATASET_DATE_ASC: {
      return list.sort((a, b) => a.meta.loaded - b.meta.loaded);
    }
    case datasetListSortType.DATASET_DATE_DESC: {
      return list.sort((a, b) => b.meta.loaded - a.meta.loaded);
    }
    default: {
      return list;
    }
  }
};