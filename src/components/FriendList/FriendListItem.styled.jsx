import styled from '@emotion/styled';

export const FriendItem = styled.li`
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 75px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding-left: 15px;
`;

export const FriendStatus = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: auto 0;
  margin-right: 5px;
  background-color: ${props => {
  if (props.status) {
    return `green`
  } return 'red'
  }}
`;

export const FriendAvatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 5px;
  margin: auto 0;
  margin-right: 10px;
`;

export const FriendName = styled.p`
  display: block;
  font-size: 24px;
  margin: auto 0;
`;
