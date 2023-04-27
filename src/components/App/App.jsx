import { Container } from './App.styled';
import user from '../Profile/user.json';
import Profile from '../Profile/Profile';
import data from '../Statistics/data.json';
import Statistics from '../Statistics/Statistics';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
    </Container>
  );
};
