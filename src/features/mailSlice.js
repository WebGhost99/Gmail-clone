import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
  selectedMail : null,
  sendMesageIsOpen : false,
  status: 'idle',
};



export const mailSlice = createSlice({
  name: 'mail',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selectMails : (state,action) => {
      state.selectedMail = action.payload
    },
    openSendMessage : state => {
      state.sendMesageIsOpen = true;
    },
    closeSendMessage : state => {
      state.sendMesageIsOpen = false;
    },
    
  },

});

export const {selectMails, openSendMessage, closeSendMessage } = mailSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectMail = (state) => state.mail.sendMesageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;
// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default mailSlice.reducer;
