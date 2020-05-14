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
}