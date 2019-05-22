import React from 'react';
export const TableBody = ({ exchangeMetadata }) => {
  const currencyList = Object.keys(exchangeMetadata);
  return (
    <tbody>
      {currencyList.map((fromCurrency, fromIndex) => (
        <tr key={fromIndex}>
          <th scope="row">
            <div className={`currency-flag currency-flag-${fromCurrency.toLocaleLowerCase()} mt-2`} />
          </th>
          <th scope="row">
            <p className="p-0 m-0">1 {fromCurrency} = </p>
            <p className="p-0 m-0">Inverse </p>
          </th>
          {currencyList.map((toCurrency, toIndex) => {
            const baseConversion = (exchangeMetadata[fromCurrency] / exchangeMetadata[toCurrency]).toFixed(4);
            const InverseConversion = (exchangeMetadata[toCurrency] / exchangeMetadata[fromCurrency]).toFixed(4);
            const style = baseConversion === InverseConversion ? 'text-muted p-0 m-0' : 'text-dark p-0 m-0';
            return (
              <th key={toIndex} scope="col">
                <p className={style}>{baseConversion}</p>
                <p className={style}>{InverseConversion}</p>
              </th>
            );
          })}
        </tr>
      ))}
    </tbody>
  );
};
