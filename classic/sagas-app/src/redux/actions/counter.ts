import {
  COUNTER_DECREMENT,
  COUNTER_INCREMENT,
  COUNTER_INCREMENT_BY_VALUE,
  COUNTER_INCREMENT_DELAYED,
  CounterDecrementAction,
  CounterIncrementAction,
  CounterIncrementByValueAction,
  CounterIncrementDelayedAction
} from '../reducers/counter';

export const counterIncrement = (): CounterIncrementAction => ({
  type: COUNTER_INCREMENT
});

export const counterIncrementDelayed = (): CounterIncrementDelayedAction => ({
  type: COUNTER_INCREMENT_DELAYED
})

export const counterDecrement = (): CounterDecrementAction => ({
  type: COUNTER_DECREMENT
});

export const counterIncrementByValue = (value: number): CounterIncrementByValueAction => ({
  type: COUNTER_INCREMENT_BY_VALUE,
  value
});
