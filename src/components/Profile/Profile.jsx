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

const Profile = ({
  username,
  tag,
  location,
  avatar,
  followers,
  views,
  likes,
}) => {
  return (
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
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile