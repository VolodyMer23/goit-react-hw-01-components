import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileDescription,
  ProfileImageWrapper,
  ProfileImage,
  ProfileName,
  ProfileInfo,
  ProfileStats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
} from './Profile.styled';
import { Section, SectionTitle } from '../Section/Section.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers = 0,
    views = 0,
    likes = 0, }
}) => {
  return (
    <Section>
      <SectionTitle>1 - Профіль соціальної мережі</SectionTitle>
      <ProfileContainer>
        <ProfileDescription>
          <ProfileImageWrapper>
            <ProfileImage src={avatar} alt={username} />
          </ProfileImageWrapper>
          <ProfileName>{username}</ProfileName>
          <ProfileInfo>@{tag}</ProfileInfo>
          <ProfileInfo>{location}</ProfileInfo>
        </ProfileDescription>

        <ProfileStats>
          <StatsItem>
            <StatsLabel>Followers</StatsLabel>
            <StatsQuantity>{followers}</StatsQuantity>
          </StatsItem>
          <StatsItem>
            <StatsLabel>Views</StatsLabel>
            <StatsQuantity>{views}</StatsQuantity>
          </StatsItem>
          <StatsItem>
            <StatsLabel>Likes</StatsLabel>
            <StatsQuantity>{likes}</StatsQuantity>
          </StatsItem>
        </ProfileStats>
      </ProfileContainer>
    </Section>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile