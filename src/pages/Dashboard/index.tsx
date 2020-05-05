import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';

import api from '../../services/api';

import newIncome from '../../assets/new-income.svg';
import newOutcome from '../../assets/new-outcome.svg';
import newTotal from '../../assets/new-total.svg';

import Header from '../../components/Header';

import formatValue from '../../utils/formatValue';

import {
  Container,
  NavContainer,
  TableContainer,
  CardBlock,
  Card,
} from './styles';

interface Transaction {
  id: string;
  title: string;
  value: number;
  formattedValue: string;
  formattedDate: string;
  type: 'income' | 'outcome';
  category: { title: string };
  created_at: Date;
}

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const response = await api.get('/transactions');

      const transactionsFormated = response.data.transactions.map(
        (transaction: Transaction) => ({
          ...transaction,
          formattedValue: formatValue(transaction.value),
          formattedDate: new Date(transaction.created_at).toLocaleDateString(
            'pt-br',
          ),
        }),
      );

      setTransactions(transactionsFormated);

      const balanceFormated = {
        income: formatValue(response.data.balance.income),
        outcome: formatValue(response.data.balance.outcome),
        total: formatValue(response.data.balance.total),
      };

      setBalance(balanceFormated);
    }
    loadTransactions();
  }, []);

  // Função de deletar uma transação
  async function handleDeleteTransaction(id: string): Promise<void> {
    try {
      await api.delete(`/transactions/${id}`);

      const transactionDeleted = transactions.filter(
        transaction => transaction.id !== id,
      );

      setTransactions(transactionDeleted);
    } catch (err) {
      alert('Erro ao deletar transação, tente novamente.');
    } finally {
      const response = await api.get('/transactions');

      const balanceFormated = {
        income: formatValue(response.data.balance.income),
        outcome: formatValue(response.data.balance.outcome),
        total: formatValue(response.data.balance.total),
      };

      setBalance(balanceFormated);
    }
  }

  return (
    <>
      <Header />
      <Container>
        {/* <CardContainer /> */}
        <CardBlock>
          <Card>
            <img src={newIncome} alt="Income" />
            <div>
              <p>Entradas</p>
              <h1 data-testid="balance-income">{balance.income}</h1>
            </div>
          </Card>
          <Card>
            <img src={newOutcome} alt="Outcome" />
            <div>
              <p>Saídas</p>
              <h1 data-testid="balance-outcome">{balance.outcome}</h1>
            </div>
          </Card>
          <Card total>
            <img src={newTotal} alt="Total" />
            <div>
              <p>Total</p>
              <h1 data-testid="balance-total">{balance.total}</h1>
            </div>
          </Card>
        </CardBlock>

        <NavContainer>
          <ul>
            <Link to="/">
              <li className="active">Listagem</li>
            </Link>
            <Link to="/import">
              <li>Importar</li>
            </Link>
            <Link to="/register">
              <li>Cadastrar</li>
            </Link>
          </ul>
        </NavContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Categoria</th>
                <th>Data</th>
              </tr>
            </thead>

            <tbody>
              {transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td className="title">{transaction.title}</td>
                  <td className={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {transaction.formattedValue}
                  </td>
                  <td>{transaction.category.title}</td>
                  <td>{transaction.formattedDate}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteTransaction(transaction.id)}
                      type="button"
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
