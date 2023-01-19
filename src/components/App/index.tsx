import { useExchangeRates } from '../../hooks/useExchangeRates';
import { RateList } from '../RateList';

import { Container, Title, Error } from './styled';

export const App = () => {
  const { isFetching, data, isError } = useExchangeRates();

  if (isError) {
    return (
      <Container>
        <Error>
          Sorry, unknown fetch error occurred...
        </Error>
      </Container>
    );
  }

  return (
    <Container className="App">
      <Title>Exchange Rate</Title>
      <RateList rates={data} isFetching={isFetching} />
    </Container>
  );
}
