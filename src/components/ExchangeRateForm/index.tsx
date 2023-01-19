import { useCallback, useState } from 'react';

import { IExchangeRate } from '../../types';
import { Container, Form, Section, Input, Button, Result } from './styled';

interface ExchangeRateFormProps {
  rates?: IExchangeRate[];
  isFetching: boolean;
}

export const ExchangeRateForm = ({ rates }: ExchangeRateFormProps) => {
  const [currencyCode, setCurrencyCode] = useState('');
  const [sourceAmount, setSourceAmout] = useState(0);
  const [result, setResult] = useState('');

  /**
   * Calculate conversion to the given currency
   */
  const calculateTargetAmount = useCallback(() => {
    if (!rates || !currencyCode) {
      return setResult('');
    }

    const rate = rates.find((r) => r.code === currencyCode);
    const amount = rate ? Math.ceil(1000 * sourceAmount * rate.amount / rate.rate) / 1000.0 : 0;

    setResult(`${amount} ${currencyCode}`);
  }, [rates, currencyCode, setResult, sourceAmount]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    calculateTargetAmount();
  }, [calculateTargetAmount])

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Section>
          <Input value={sourceAmount} onChange={(e) => setSourceAmout(Number.parseInt(e.target.value, 10) || 0)} />

          <span> CZK in </span>

          <div>
            <Input list="currencyList" value={currencyCode} onChange={(e) => setCurrencyCode(e.target.value)} />
            <datalist id="currencyList">
              {rates && rates.map((rate, i) => <option key={`${rate.country} - ${rate.currency}`} value={rate.code} />)}
            </datalist>
          </div>

          <Button type="submit" >Calculate</Button>
        </Section>
        <div>
          {<Result>{result}</Result>}
        </div>
      </Form>
    </Container>
  );
}
