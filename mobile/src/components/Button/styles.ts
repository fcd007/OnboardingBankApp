import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 100%;
    height: 60px;
    border-radius: 50px;
    background: #4B55C1;

    justify-content: center;
    align-items: center;
    margin: 12px 0;
`;

export const ButtonText = styled.Text`
    font-family: 'RobotoSlab';
    color: #FFFFFF;
    font-size: 20px;
`;
