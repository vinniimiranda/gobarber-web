import React from 'react';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .min(6, 'A senha deve conter no mínimo 6 caractéres')
    .required('A senha é obrigatória'),
});

export default function SignUp() {
  const handleSubmit = data => {
    console.log(data);
  };
  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form onSubmit={handleSubmit} schema={schema}>
        <Input
          name="name"
          type="text"
          placeholder="Nome completo"
          autoComplete="off"
        />
        <Input
          name="email"
          type="email"
          placeholder="Seu e-mail"
          autoComplete="off"
        />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
          autoComplete="off"
        />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login </Link>
      </Form>
    </>
  );
}
