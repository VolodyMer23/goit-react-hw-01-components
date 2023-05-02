import PropTypes from 'prop-types';
import FriendListItem  from './FriendListItem';
import { Section, SectionTitle } from '../Section/Section.styled';
import { FriendsList } from './FriendList.styled';


const FriendList = ({ friends }) => {
  return (
    <Section>
      <SectionTitle>1 - Профіль соціальної мережі</SectionTitle>
      <FriendsList>
        <FriendListItem friendsList={friends} />
      </FriendsList>
    </Section>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};

export default FriendList;
