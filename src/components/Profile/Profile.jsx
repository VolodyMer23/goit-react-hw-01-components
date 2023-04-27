import { ProfileContainer, ProfileDescription, ProfileImage } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats,
  followers,
  views,
  likes,
}) => {
  return (
    <ProfileContainer>
      <ProfileDescription>
        <ProfileImage src={avatar} alt={username} />
        <p class="name">{username}</p>
        <p class="tag">@{tag}</p>
        <p class="location">{location}</p>
      </ProfileDescription>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </ProfileContainer>
  );
};
