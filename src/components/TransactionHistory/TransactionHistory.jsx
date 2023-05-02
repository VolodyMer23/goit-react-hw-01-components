import PropTypes from 'prop-types';
import { Section, SectionTitle } from '../Section/Section.styled';
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableBodyData,
} from './TransactionHistory.styled';

export default function TransactionHistory({ transactions }) {
  return (
    <Section>
      <SectionTitle>4 - Історія транзакцій</SectionTitle>
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader>Type</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Currency</TableHeader>
          </TableRow>
        </TableHead>

        <TableBody>
          {transactions.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
              <TableBodyData>{type}</TableBodyData>
              <TableBodyData>{amount}</TableBodyData>
              <TableBodyData>{currency}</TableBodyData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Section>
  );
}

TransactionHistory.prototype = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
