import React, { useState, useEffect } from 'react';

import newIncome from '../../assets/new-income.svg';
import newOutcome from '../../assets/new-outcome.svg';
import newTotal from '../../assets/new-total.svg';

import { CardBlock, Card } from './styles';

import api from '../../services/api';
import formatValue from '../../utils/formatValue';

interface Balance {
  income: string;
  outcome: string;
  total: string;
}

const CardContainer: React.FC = () => {
  const [balance, setBalance] = useState<Balance>({} as Balance);

  useEffect(() => {
    async function loadTransactions(): Promise<void> {
      const response = await api.get('/transactions');

      const balanceFormated = {
        income: formatValue(response.data.balance.income),
        outcome: formatValue(response.data.balance.outcome),
        total: formatValue(response.data.balance.total),
      };

      setBalance(balanceFormated);
    }
    loadTransactions();
  }, []);

  return (
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
  );
};

export default CardContainer;
