import * as datasetListSortType from '../constants/dataset-sort-type';

export const finhubToDataset = (data) => {
  let result = {};
  for (let i = 0; i < data.t.length; i++) {
    result = {
      ...result, 
      [data.t[i]]: { 
        c: data.c[i],
        h: data.h[i],
        l: data.l[i],
        o: data.o[i],
        v: data.v[i],
      },
    };
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