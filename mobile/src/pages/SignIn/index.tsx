import React, {
  useCallback,
  useRef
} from 'react';

import {
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/auth';

import getValidationError from '../../utils/getValidationErros';

import Input from '../../components/Input/';
import Button from '../../components/Button/';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  SubTitle,
  ForgotPassword,
  ForgotPasswordText,
  TopHeader,
  BackToHome,
  BackToSignInText
} from './styles';

interface SignDataForm {
  email:string;
  password:string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null);
    const passwordInputRef = useRef<TextInput>(null);

    const navigation = useNavigation();

    const { signIn } = useAuth();

    const handleSignIn = useCallback(
        async (data: SignDataForm) => {
          try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
              email: Yup.string()
                .required('E-mail obrigatório')
                .email('Digite um e-mail válido'),
              password: Yup.string().required('Senha obrigatória'),
            });

            await schema.validate(data, {
              abortEarly: false,
            });

            await signIn({
              email: data.email,
              password: data.password,
            })
          } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationError(err);
              console.log(errors)
              formRef.current?.setErrors(errors);
              return;
            }

            Alert.alert(
                'Erro na autenticação',
                'Ocorreu um erro ao fazer login, tente novamente.',
                );
            }
        }, []);

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
                  <TopHeader>
                    <Image source={ logoImg } />
                    <Title>Quero entrar</Title>
                    <SubTitle>Na minha conta</SubTitle>
                  </TopHeader>
                  <Container>
                      <Form ref={formRef} onSubmit={ handleSignIn }>
                          <Input
                              autoCorrect={false}
                              autoCapitalize="none"
                              keyboardType="email-address"
                              name="email"
                              icon="mail"
                              placeholder="E-mail"
                              returnKeyType="next"
                              onSubmitEditing={() => {
                                  passwordInputRef.current?.focus();
                              }}
                          />

                          <Input
                              ref={passwordInputRef}
                              name="password"
                              icon="lock"
                              placeholder="Digite sua senha"
                              secureTextEntry
                              returnKeyType="send"
                              onSubmitEditing={() => {
                                  formRef.current?.submitForm();
                              }}
                          />
                      </Form>
                      <Button
                          onPress={() => {
                              formRef.current?.submitForm();
                          }}
                          > Entrar
                      </Button>

                      <ForgotPassword onPress={() => {}}>
                          <ForgotPasswordText>
                              Esqueci minha senha
                          </ForgotPasswordText>
                      </ForgotPassword>
                      <BackToHome onPress={() => navigation.goBack()} >
                        <Icon name="arrow-left" size={ 20 } color="#f4ede8" />
                        <BackToSignInText>
                          Voltar para início
                        </BackToSignInText>
                      </BackToHome>
                  </Container>
                </ScrollView>
            </KeyboardAvoidingView>
        </>
    );
};

export default SignIn;
