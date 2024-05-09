import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface ICounterSlice {
  value: number;
}

const initialState: ICounterSlice = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counterSlice',
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
