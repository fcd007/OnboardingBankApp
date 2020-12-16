import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
    isFocused: boolean;
    isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
    width: 100%;
    height: 60px;
    padding: 0 16px;
    border-radius: 50px;

    background: #fefefe;
    margin: 0px;

    border-width: 2px;
    border-color: #A8A6A6;

    flex-direction: row;
    align-items: center;
    margin-bottom: 4px;

    ${(props) =>
        props.isErrored &&
        css`
            border-color: #c53030;
    `}

    ${(props) =>
        props.isFocused &&
        css`
            border-color: #5E67C8;
    `}
`;

export const TextInput = styled.TextInput`
    flex: 1;
    font-family: 'RobotoSlab-Regular';
    color: #353535;
    font-size: 20px;
`;

export const Icon = styled(FeatherIcon)`
    margin-right: 16px;
`;
