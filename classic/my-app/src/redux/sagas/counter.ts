import { call, put, takeEvery } from 'redux-saga/effects';
import {COUNTER_INCREMENT_DELAYED, CounterIncrementDelayedAction} from '../reducers/counter';
import { counterIncrement } from '../actions/counter';

const fakePromise = (ms: number) => new Promise<void>((resolve, _) => {
  setTimeout(() => resolve(), ms);
});

const incrementCounterDelayed = function* async({}: CounterIncrementDelayedAction): Generator {
  yield call(() => fakePromise(1000));
  yield put(counterIncrement());
}

export default function* (): Generator {
  return [yield takeEvery(COUNTER_INCREMENT_DELAYED, incrementCounterDelayed)];
}
