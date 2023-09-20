import React from "react";
import { MovementVM } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";

interface Props {
  movementItem: MovementVM;
}

export const AccountListItemComponent: React.FC<Props> = (props) => {
  const { movementItem } = props;

  const amountClass = parseInt(movementItem.amount) < 0 ? classes.redText : classes.blackText;

  return (
    <div className={classes.row}>
      <span className={`${classes.dataCell}`}>
        {new Date(movementItem.transaction).toLocaleDateString()}
      </span>
      <span className={`${classes.dataCell} ${classes.alingCenter}`}>
        {new Date(movementItem.realTransaction).toLocaleDateString()}
      </span>
      <span className={`${classes.dataCell} ${classes.bold}`}>
        <span>
          {movementItem.description}
        </span>
      </span>
      <span className={`${classes.dataCell} ${amountClass} ${classes.alingCenter}`}>{movementItem.amount} €</span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movementItem.balance} €
      </span>
    </div>
  );
};