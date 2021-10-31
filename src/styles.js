import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const Title = styled.Text`
  align-self: center;
  margin-top: 60px;
  font-size: 26px;
  font-weight: bold;
  color: #fff;
`;
export const CarouselView = styled.View`
  margin-top: 40px;
  width: 100%;
`;

export const CarouselImg = styled.Image`
  height: 400px;
  width: 230px;
  align-self: center;
  border-radius: 12px;
`;
export const CarouselIcon = styled(Icon)`
  position: absolute;
  top: 15px;
  right: 15px;
`;
export const Information = styled.View`
  align-self: center;
  margin-top: 10px;
  padding: 10px 14px;
  width: 94%;
  border-radius: 8px;
  background-color: #fff;
`;
Information.View = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
Information.Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
Information.Text = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
`;
Information.Release = styled.Text`
  font-weight: bold;
  margin-bottom: 10px;
`;
Information.Direction = styled.Text`
  font-weight: bold;
`;
