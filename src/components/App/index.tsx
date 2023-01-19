import { useExchangeRates } from '../../hooks/useExchangeRates';

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

  console.log(isFetching, data);

  return (
    <Container className="App">
      <Title>Exchange Rate</Title>
    </Container>
  );
}
