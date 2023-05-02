import styled from '@emotion/styled';

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TableHead = styled.thead`
  background-color: #00a8e1;
  color: #ffffff;
`;

export const TableRow = styled.tr`
  display: flex;
  text-align: center;
  align-items: center;
  border: 1px solid #ffffff;
  height: 30px;
  &:nth-of-type(even) {
    background-color: #bacedf;
  }
`;

export const TableHeader = styled.th`
  margin: auto;
`;

export const TableBody = styled.tbody`
`;

export const TableBodyData = styled.td`
  width: 200px;
  text-align: center;
  border-right: 1px solid #ffffff;
  &:nth-last-of-type(1) {
    border-right: none;
  }
`;
