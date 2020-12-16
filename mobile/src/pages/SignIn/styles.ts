import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { getBottomSpace } from 'react-native-iphone-x-helper';

export const TopHeader= styled.View`
    flex:0.6;
    align-items: center;
    justify-content: center;
    padding: 0 30px ${Platform.OS === 'android' ? 0 : 40}px;
    background: #4B55C1;
`;

export const Container = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
    padding: 0 30px ${Platform.OS === 'android' ? 0 : 40}px;
    background: #fefefe;
`;

export const Title = styled.Text`
    font-family: 'RobotoSlab-Medium';

    color: #f4ede8;
    font-size: 24px;
    line-height: 36px;
    margin: 20px 0 0;
`;

export const SubTitle = styled.Text`
    font-family: 'RobotoSlab';

    color: #f4ede8;
    font-size: 16px;
    line-height: 36px;
    margin: 0;
`;

export const ForgotPassword = styled.TouchableOpacity`
    margin-top: 10px;
    margin-bottom: -40px;
`;

export const ForgotPasswordText = styled.Text`
    font-family: 'RobotoSlab-Regular';
    font-size: 16px;
    color: #A8A6A6;
`;


export const BackToHome = styled.TouchableOpacity`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;

    background: #5E67C8;

    border-top-width: 2px;
    border-color: #A8A6A6;
    padding: 8px 0 ${16 + getBottomSpace()}px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const BackToSignInText = styled.Text`
    font-family: 'RobotoSlab-Regular';
    font-size: 16px;
    color: #f4ede8;

    margin-left: 16px;
`;

