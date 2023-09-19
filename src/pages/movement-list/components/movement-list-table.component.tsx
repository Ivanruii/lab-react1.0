import React from "react";
import { MovementVM } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";
import { AccountListItemComponent } from "./movement-list-item.component"; // Cambia el nombre del import

interface Props {
  movementList: MovementVM[]; // Cambia el nombre de la propiedad a movementList
}

export const AccountListTableComponent: React.FC<Props> = (props) => {
  const { movementList } = props;

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.headerTable}>
          <span className={classes.headerCell}>Fecha</span> {/* Cambia IBAN a Descripción */}
          <span className={classes.headerCell}>Fecha valor</span> {/* Cambia Alias a Cantidad */}
          <span className={classes.headerCell}>Descripción</span> {/* Cambia Saldo Disponible */}
          <span className={classes.headerCell}>Importe</span> {/* Cambia Última Operación */}
          <span className={classes.headerCell}>Saldo disponible</span>
        </div>

        {movementList.map((movement) => (
          <AccountListItemComponent key={movement.id} movementItem={movement} />
        ))}
      </div>
    </>
  );
};
