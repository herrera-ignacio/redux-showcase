import { RootState } from '../store';

export const getCounterValue = (state: RootState): number => state.counter?.value || 0;
