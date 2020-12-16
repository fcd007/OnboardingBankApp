import React, { useRef, useCallback } from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';

import getValidationErrors from '../../utils/getValidationErros';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

import {
  Container,
  Title,
  SubTitle,
  TopHeader,
  BackToSignIn,
  BackToSignInText
} from './styles';

interface SignUpFormData {
  cpf: string;
  cnpj: string;
}

const SignUpCpf: React.FC = () => {
    const navigation = useNavigation();

    const formRef = useRef<FormHandles>(null);

    const emailInputRef = useRef<TextInput>(null);

    const handleSignUp = useCallback(
        async (data: SignUpFormData) => {
          try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
              cpf: Yup.string().required('CPF obrigatório'),
              cnpj: Yup.string()
                .required('CNPJ obrigatório'),
            });

            await schema.validate(data, {
              abortEarly: false,
            });

            await api.post('/users', data);

            //realizando navegação para tela inicial teste
            // navigation.goBack();
          } catch (err) {
            if (err instanceof Yup.ValidationError) {
              const errors = getValidationErrors(err);
              console.log(errors)

              formRef.current?.setErrors(errors);

              return;
            }

            Alert.alert(
                'Erro na cadastro',
                'Ocorreu um erro ao fazer o cadastro, tente novamente mais tarde',
                );
          }
        },
        [navigation],
      );

    return (
        <>
            <KeyboardAvoidingView
                style={{flex: 1}}
                behavior={ Platform.OS === 'ios' ? 'padding': undefined }
                enabled
            >
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    contentContainerStyle={{ flex:1 }}
                >
                    <TopHeader>
                      <Image source={ logoImg } />
                          <Title>Vamos começar?</Title>
                          <SubTitle>É rapidinho</SubTitle>
                    </TopHeader>
                    <Container>
                        <Form
                            ref={formRef}
                            onSubmit={handleSignUp}
                        >
                            <Input
                                autoCapitalize="words"
                                name="name"
                                icon="user"
                                placeholder="CPF ou CNPJ"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    emailInputRef.current?.focus();
                                }}
                            />
                        </Form>
                        <Button onPress={() => {
                          formRef.current?.submitForm()
                          navigation.navigate('SignUpPerson')
                          }}>
                            Próximo Passo
                        </Button>

                    </Container>
                </ScrollView>
            </KeyboardAvoidingView>
            <BackToSignIn onPress={() => navigation.goBack()} >
                <Icon name="arrow-left" size={ 20 } color="#f4ede8" />
                <BackToSignInText>
                    Voltar
                </BackToSignInText>
            </BackToSignIn>
        </>
    );
}

export default SignUpCpf;