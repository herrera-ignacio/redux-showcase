export const COUNTER_INCREMENT = 'COUNTER_INCREMENT';
export const COUNTER_INCREMENT_DELAYED = 'COUNTER_INCREMENT_DELAYED';
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT';
export const COUNTER_INCREMENT_BY_VALUE = 'COUNTER_INCREMENT_BY_VALUE';

export enum CounterStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
}

export interface CounterIncrementAction {
  type: typeof COUNTER_INCREMENT;
}

export interface CounterIncrementDelayedAction {
  type: typeof COUNTER_INCREMENT_DELAYED;
}

export interface CounterDecrementAction {
  type: typeof COUNTER_DECREMENT;
}

export interface CounterIncrementByValueAction {
  type: typeof COUNTER_INCREMENT_BY_VALUE;
  value: number;
}

type CounterActionTypes = CounterIncrementAction | CounterDecrementAction | CounterIncrementByValueAction | CounterIncrementDelayedAction;

export interface CounterState {
  value: number;
  status: CounterStatus;
}

const initialState: CounterState = {
  value: 0,
  status: CounterStatus.IDLE,
};

export const counterReducer = (state = initialState, action: CounterActionTypes) => {
  switch(action.type) {
    case COUNTER_INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };
    case COUNTER_DECREMENT:
      const newVal = state.value - 1;
      return {
        ...state,
        value: newVal >= 0 ? newVal : 0,
      }
    case COUNTER_INCREMENT_BY_VALUE:
      return {
        ...state,
        value: state.value + action.value
      }
    default:
      return state;
  }
}

export default counterReducer;
