/* eslint-disable default-case */
import styled from '@emotion/styled';

export const StatsTypeItem = styled.li`
  display: flex;
  justify-content: center;
  width: 70px;
  height: 70px;
  flex-direction: column;
  text-align: center;
  padding: 15px;
  background-color: ${props => {
    switch (props.type) {
      case '.docx':
        return '#00a8e1';
      case '.pdf':
        return '#3eb489';
      case '.mp3':
        return '#ff8844';
      case '.psd':
        return '#3a4664';
    }
  }};
`;

export const StatsFileExt = styled.span`
  font-weight: 500;
  font-size: 22px;
  color: #ffffff;
  margin: 0;
  margin-bottom: 12px;
`;

export const StatsUploadPercentage = styled.span`
  font-size: 16px;
  color: #ffffff;
  margin: 0;
  margin-bottom: 12px;
`;
