import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
    padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
    font-family: 'RobotoSlab-Medium';
    color: #f4ede8;
    font-size: 24px;
    line-height: 36px;
    margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
    margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
    font-family: 'RobotoSlab-Regular';
    font-size: 16px;
    color: #f4ede8;

`;

export const CreatAccountButton = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;

    background: #312e38;

    border-top-width: 1px;
    border-color: #232129;
     padding: 16px 0 ${16 + getBottomSpace()}px;

     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: row;
`;

export const CreatAccountButtonText = styled.Text`
    font-family: 'RobotoSlab-Regular';
    font-size: 18px;
    color: #ff9000;

    margin-left: 16px;
`;
