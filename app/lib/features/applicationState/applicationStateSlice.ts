import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { IApplicationState } from '@/app/types/IApplicationState';

const initialState: IApplicationState = {
  applicationState: {
    loading: true,
    error: null,
  },
};

export const applicationStateSlice = createSlice({
  name: 'applicationStateSlice',
  initialState,
  reducers: {
    loading: (state) => {
      state.applicationState = { loading: true, error: null };
    },
    success: (state) => {
      state.applicationState = { loading: false, error: null };
    },
    errorAction: (
      state,
      action: PayloadAction<{
        errorMessage: string;
      }>
    ) => {
      const { errorMessage } = action.payload;
      state.applicationState = { loading: false, error: errorMessage };
    },
  },
});

export const { success, errorAction, loading } = applicationStateSlice.actions;
export const selectApplicationState = (state: RootState) =>
  state.applicationState;
export default applicationStateSlice.reducer;
