import React, { useState, useEffect } from 'react';
import { AppLayout } from '@/layouts';
import { MovementVM } from './movement-list.vm';
import classes from './movement-list.page.module.css';
import { AccountListTableComponent } from './components/movement-list-table.component';
import { getAccountInfo, getMovementList } from './api';
import { mapMovementListFromApiToVm } from './movement-list.mapper';

export const MovementListPage: React.FC = () => {
  const [accountList, setAccountList] = useState<MovementVM[]>([]);
  const [id, setId] = useState<string>('');
  const [headerInfo, setHeaderInfo] = useState<{ avalaibleBalance: number, iban: string, name: string }>({ avalaibleBalance: 0, iban: '', name: '' });

  useEffect(() => {
    getMovementList().then((result) => {
      const mappedResult = mapMovementListFromApiToVm(result);
      setAccountList(mappedResult);
      console.log(mappedResult);

      if (result.length > 0) {
        setId(result[0].id);
      }
    });

    getAccountInfo().then((headerResult) => {
      const filteredHeaderResult = headerResult.filter((item) => item.id === id);

      if (filteredHeaderResult.length > 0) {
        setHeaderInfo({ name: filteredHeaderResult[0].name, avalaibleBalance: filteredHeaderResult[0].balance, iban: filteredHeaderResult[0].iban });
      }
    });
  }, [id]);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Mis Movimientos</h1>
          <div>
            <h2>Saldo Disponible</h2>
            <span className={`${classes.bold}`}>{headerInfo.avalaibleBalance} €</span>
          </div>
        </div>
        <div className={`${classes.underheaderContainer} ${classes.bold}`}>
          <span>Alias: {headerInfo.name}</span>
          <span className={classes.bold}>IBAN: {headerInfo.iban}</span>
        </div>
        <AccountListTableComponent movementList={accountList} />
      </div>
    </AppLayout>
  );
};