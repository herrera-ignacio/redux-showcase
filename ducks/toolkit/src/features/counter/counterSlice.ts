import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './counterAPI';

export enum CounterStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  FAILED = 'failed',
}

export interface CounterState {
  value: number;
  status: CounterStatus;
}

const initialState: CounterState = {
  value: 0,
  status: CounterStatus.IDLE,
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async () => {
    const response = await fetchCount();
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const incrementIfOdd = (amount: number): AppThunk => (
  dispatch,
  getState
) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = CounterStatus.LOADING;
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = CounterStatus.IDLE;
        state.value += action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
