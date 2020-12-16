import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 100%;
    height: 60px;
    margin-top: 30px;

    border-width: 2px;
    border-color: #4B55C1;

    background: #FFFFFF;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-family: 'RobotoSlab';
    color: #323232;
    font-size: 20px;
`;
