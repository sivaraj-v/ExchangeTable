import React from 'react';
export const TableHead = ({ exchangeMetadata }) => {
  const currencyList = Object.keys(exchangeMetadata);
  return (
    <thead className="thead-dark">
      <tr>
        <th scope="col" colSpan="2" />
        {currencyList.map((currency, index) => (
          <th key={index} scope="col">
            <div className={` align-baseline currency-flag currency-flag-${currency.toLocaleLowerCase()}`} />{' '}
            <span style={{ verticalAlign: 'text-bottom' }}>{currency}</span>
          </th>
        ))}
      </tr>
    </thead>
  );
};
