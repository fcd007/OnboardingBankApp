import styled from 'styled-components/native';
import { Platform } from 'react-native';

import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
    padding: 0 30px ${Platform.OS === 'android' ? 10 : 40}px;
    background: #4B55C1;
`;

export const NavegationOption = styled.View`
    flex:1;
    align-items: center;
    justify-content: center;
    padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
    background: #fefefe;
`;

export const Title = styled.Text`
    font-family: 'RobotoSlab-Medium';

    color: #f4ede8;
    font-size: 24px;
    line-height: 36px;
    margin: 30px 0 10px;
`;

export const SubTitle = styled.Text`
    font-family: 'RobotoSlab';

    color: #f4ede8;
    font-size: 16px;
    line-height: 36px;
    margin: 0;
`;

export const VersionApp = styled.Text`
    font-family: 'RobotoSlab';

    background: #fefefe;
    color: #A8A6A6;
    font-size: 12px;
    line-height: 30px;
    margin: 0;
`;
