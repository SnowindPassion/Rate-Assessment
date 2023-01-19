import { useQuery, UseQueryResult } from 'react-query';

import { IExchangeRate } from '../types';

const parseResponse = (text: string): IExchangeRate[] =>  {
  const rows = text.split('\n');

  // remove unnecessary stuff
  rows.shift();
  rows.shift();
  rows.pop();

  const rates: IExchangeRate[] = rows.map((row: string) => {
    // row example: MMF|ZPČ|1|XDR|29,533
    const [country, currency, amount, code, rate] = row.split('|');

    return {
      country,
      currency,
      amount: Number.parseInt(amount, 10),
      code,
      rate: Number.parseInt(rate, 10),
    };
  });

  return rates;
}

export const useExchangeRates = (): UseQueryResult<IExchangeRate[]> => {
  return useQuery('exchangeRates', () =>
    fetch('/cs/financni-trhy/devizovy-trh/kurzy-devizoveho-trhu/kurzy-devizoveho-trhu/denni_kurz.txt')
      .then((res) => res.text())
      .then((text) => parseResponse(text))
  );
}
