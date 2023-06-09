import { Container } from './App.styled';
import user from '../Data/user.json';
import Profile from '../Profile/Profile';
import data from '../Data/statistics-data.json';
import Statistics from '../Statistics/Statistics';
import friends from '../Data/friends.json';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from '../Data/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </Container>
  );
};
