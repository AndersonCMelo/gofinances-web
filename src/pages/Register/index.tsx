import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Header from '../../components/Header';
import CardContainer from '../../components/CardContainer';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container, NavContainer, Title, Button, ContentForm } from './styles';

import api from '../../services/api';

const Register: React.FC = () => {
  const history = useHistory();

  async function handleSubmit(data: object): Promise<void> {
    try {
      await api.post('/transactions', data);

      history.push('/');
    } catch {
      alert('Erro ao cadastrar transação, tente novamente.');
    }
  }

  return (
    <>
      <Header />
      <Container>
        <CardContainer />

        <NavContainer>
          <ul>
            <Link to="/">
              <li>Listagem</li>
            </Link>
            <Link to="/import">
              <li>Importar</li>
            </Link>
            <Link to="/register">
              <li className="active">Cadastrar</li>
            </Link>
          </ul>
        </NavContainer>

        <Title>Cadastrar uma nova transação</Title>
        <ContentForm>
          <Form onSubmit={handleSubmit}>
            <Input name="title" placeholder="Título da transação" />
            <Input name="value" placeholder="Valor" />
            {/* <Input name="type" placeholder="income ou outcome" /> */}
            <Select
              name="type"
              placeholder="Selecionar"
              options={[
                { value: 'income', label: 'Entrada' },
                { value: 'outcome', label: 'Saída' },
              ]}
            />

            <Input name="category" placeholder="Categoria" />

            <Button type="submit">Cadastrar</Button>
          </Form>
        </ContentForm>
      </Container>
    </>
  );
};

export default Register;
