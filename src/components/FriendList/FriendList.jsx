import PropTypes from 'prop-types';
import FriendListItem  from './FriendListItem';
import { Section, SectionTitle } from '../Section/Section.styled';
import { FriendsList } from './FriendList.styled';


const FriendList = ({ friends }) => {
  return (
    <Section>
      <SectionTitle>3 - Список друзів</SectionTitle>
      <FriendsList>
        {friends.map(({ id, isOnline, avatar, name }) => (
          <FriendListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        ))}
      </FriendsList>
    </Section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }))
};

export default FriendList;
