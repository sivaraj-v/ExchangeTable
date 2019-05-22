const limitGridCellSize = 12;
const sortGridByAscending = (currencyList) => Object.fromEntries(Object.entries(currencyList).sort()); // Used Instead of new Map()
export const reduceGridByLimit = (currencyList) => {
  let sortedList = sortGridByAscending(currencyList);
  return Object.keys(sortedList)
    .slice(0, limitGridCellSize)
    .reduce((result, key) => {
      result[key] = sortedList[key];
      return result;
    }, {});
};
export const getBaseCurrencyInUrl = (field, url) => {
  var href = url ? url : window.location.href;
  var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
  var string = reg.exec(href);
  return string ? string[1] : null;
};
