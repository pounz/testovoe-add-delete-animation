import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TElement = {
  id: number;
  randomColor: string;
};

type ElementsState = {
  items : TElement[]
  nextId : number
}

const initialState : ElementsState = {
  items : [],
  nextId : 0
}

const elementSlice = createSlice({
  name : 'elements',
  initialState,
  reducers : {
    addElement : (state, action : PayloadAction<string>) => {
      const newElement : TElement = {
        id : state.nextId,
        randomColor : action.payload
      }
      state.items = [newElement, ...state.items]
      console.log(state.nextId)
      state.nextId += 1
    },
    removeElement : (state) => {
      state.items.pop()
    }
  }
})

export const {addElement, removeElement} = elementSlice.actions
export default elementSlice.reducer