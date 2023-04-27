import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  width: 35vh;
  height: 50vh;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.2);
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 35vh;
  align-items: center;
  background-color: #ffffff;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 48px;
  width: 14vh;
  height: 14vh;
  border-radius: 50%;
  background-color: #d4d4d4;
  overflow: hidden;
`;

export const ProfileImage = styled.img`
  width: 10vh;
  height: 10vh;
`;

export const ProfileName = styled.p`
  font-weight: 500;
  font-size: 22px;
  color: #000000;
  margin: 0;
  margin-bottom: 12px;
`;

export const ProfileInfo = styled.p`
  font-size: 16px;
  color: #5f5f5f;
  margin: 0;
  margin-bottom: 12px;
`;

export const ProfileStats = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  width: 100%;
  padding: 0;
  margin: auto auto 0 auto;
  margin-top: auto;
`;

export const StatsItem = styled.li`
  display: flex;
  justify-content: center;
  width: calc(100% / 3);
  height: 7vh;
  flex-direction: column;
  text-align: center;
  padding: 15px;
  border-top: 1px solid #d4d4d4;
  border-right: 1px solid #d4d4d4;

  &:last-child {
    border-right: none;
  }
`;

export const StatsLabel = styled.span`
  font-size: 14px;
  color: #5f5f5f;
  margin-bottom: 4px;
`;

export const StatsQuantity = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: #000000;
`;
