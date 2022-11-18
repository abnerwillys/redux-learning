import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    // PayloadAction<number> => onde number é a tipagem do action.payload
    incrementAmount: (state, action: PayloadAction<number>) => {
      // action.type = "counter/incrementAmount" => junção do sliceName + reducers.incrementAmount

      state.value += action.payload;
    },
  }
})


export const { increment, incrementAmount } = counterSlice.actions

export const counterReducer = counterSlice.reducer