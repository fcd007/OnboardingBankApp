import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 100%;
    height: 60px;
    margin: 10px 0 80px;

    justify-content: center;
    align-items: center;

    background: #5E67C8;
    border-radius: 50px;
`;

export const ButtonText = styled.Text`
    font-family: 'RobotoSlab';
    color: #FFFFFF;
    font-size: 20px;
`;
