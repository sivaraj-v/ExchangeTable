import React from 'react';
import { getBaseCurrencyInUrl, reduceGridByLimit } from './utility';
import { TableHead } from './ExchangeTableHead';
import { TableBody } from './ExchangeTableBody';
class ExchangeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { grid: false, exchangeMetadata: {} };
  }
  async getExchangeRates(baseCurrency) {
    try {
      let exchange = await fetch(`https://api.exchangeratesapi.io/latest?base=${baseCurrency}`);
      let exchangeMetadata = await exchange.json();
      let limitedRates = reduceGridByLimit(exchangeMetadata.rates);
      exchangeMetadata.rates = limitedRates;
      this.setState({ ...this.state, grid: true, exchangeMetadata });
    } catch (error) {
      console.log(error);
    }
  }
  isBaseUrlAvailable(url) {
    let baseCurrency = getBaseCurrencyInUrl('base', decodeURIComponent(url));
    if (baseCurrency) {
      return this.getExchangeRates(baseCurrency);
    }
    return this.setState({ ...this.state, grid: false, exchangeMetadata: null, message: 'No Base Currency Found' });
  }
  componentDidMount() {
    this.isBaseUrlAvailable(window.location.href);
  }
  render() {
    let exchangeMetadata = this.state.exchangeMetadata ? this.state.exchangeMetadata.rates : null;
    if (this.state.message) {
      return <h3 className="text-center pt-5">{this.state.message}</h3>;
    }
    return (
      <table className="table table-sm table-striped table-bordered">
        {exchangeMetadata && <TableHead exchangeMetadata={exchangeMetadata} />}
        {exchangeMetadata && <TableBody exchangeMetadata={exchangeMetadata} />}
      </table>
    );
  }
}
export default ExchangeTable;
