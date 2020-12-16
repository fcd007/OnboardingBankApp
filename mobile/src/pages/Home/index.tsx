import React from 'react';

import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button/';
import ButtonCreate from '../../components/ButtonCreate';

import logoImg from '../../assets/logo.png';

import {
  TopContainer,
  Container,
  Title
} from './styles';

const Home: React.FC = () => {

    const navigation = useNavigation();

    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={ Platform.OS === 'ios' ? 'padding': undefined }
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex:1 }}
                >
                    <Container>
                        <Image source={ logoImg } />
                          <View>
                            <Title>BEM-VINDO(A)!</Title>
                          </View>
                    </Container>
                    <TopContainer>
                        <Button onPress={() => navigation.navigate('SignIn')}>
                          Entrar na minha conta
                        </Button>
                        <ButtonCreate onPress={() => navigation.navigate('SignUp')}>
                          Criar minha conta
                        </ButtonCreate>
                    </TopContainer>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
};

export default Home;
