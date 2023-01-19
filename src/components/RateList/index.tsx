import { IExchangeRate } from '../../types';
import { RateElement } from '../RateElement';
import { Container, List } from './styled';

interface RateListProps {
  rates?: IExchangeRate[];
  isFetching: boolean;
}

export const RateList = ({ rates }: RateListProps) => (
  <Container>
    <List>
      {rates && rates.map(rate => <RateElement key={`${rate.country} - ${rate.currency}`} rate={rate} />)}
    </List>
  </Container>
);
