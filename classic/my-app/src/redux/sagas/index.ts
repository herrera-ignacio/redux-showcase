import { all, fork } from 'redux-saga/effects';
import counterSagas from './counter';

export default function* root(): Generator {
  yield all([fork(counterSagas)]);
}
