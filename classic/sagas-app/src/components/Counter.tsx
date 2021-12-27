import React, { useState } from 'react';
import styles from './Counter.module.css';
import {
  counterDecrement,
  counterIncrement,
  counterIncrementByValue,
  counterIncrementDelayed,
} from '../redux/actions/counter';
import { getCounterValue } from '../redux/selectors/counter';
import { useAppSelector, useAppDispatch } from '../redux/hooks';

export function Counter() {
  const count = useAppSelector(getCounterValue);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  const incrementIfOdd = () => {
    if (count % 2 === 1) {
      dispatch(counterIncrement());
    }
  }

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(counterDecrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(counterIncrement())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(counterIncrementByValue(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(counterIncrementDelayed())}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={incrementIfOdd}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
