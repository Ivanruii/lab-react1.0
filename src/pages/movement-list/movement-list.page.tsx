import React from 'react';
import { AppLayout } from '@/layouts';
import { AccountVM, MovementVM, createEmptyAccount } from './movement-list.vm';
import classes from './movement-list.page.module.css';
import { AccountListTableComponent } from './components/movement-list-table.component';
import { getAccountInfo, getMovementList } from './api';
import { mapAccountFromApiToVm, mapMovementListFromApiToVm } from './movement-list.mapper';
import { useParams } from 'react-router-dom';

export const MovementListPage: React.FC = () => {
  const [movementList, setMovementList] = React.useState<MovementVM[]>([]);
  const [accountInfo, setAccountInfo] = React.useState<AccountVM>(createEmptyAccount());

  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (id) {
      getMovementList(id).then((result) => {
        const mappedResult = mapMovementListFromApiToVm(result);
        setMovementList(mappedResult);
      });

      getAccountInfo(id).then((result) => {
        const mappedResult = mapAccountFromApiToVm(result);
        setAccountInfo(mappedResult);
      });

    }
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <h1>Mis Movimientos</h1>
          <div>
            <h2>Saldo Disponible</h2>
            <span className={`${classes.bold}`}>{accountInfo.avalibleBalance} €</span>
          </div>
        </div>
        <div className={`${classes.underheaderContainer} ${classes.bold}`}>
          <span>Alias: {accountInfo.name}</span>
          <span className={classes.bold}>IBAN: {accountInfo.iban}</span>
        </div>
        <AccountListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
