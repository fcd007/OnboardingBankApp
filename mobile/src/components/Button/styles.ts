import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
    width: 100%;
    height: 60px;
    border-radius: 50px;
    margin-top: 10px;
    background: #5E67C8;

    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-family: 'RobotoSlab';
    color: #FFFFFF;
    font-size: 20px;
`;
