const TEXT_INPUT_TYPING = 'jest/TEXT_INPUT_TYPING';

// Initial state.
const initialState = {
  inputValue: '',
};

// Reducer.
export default function reducer(state = initialState, action) {
  if (!action)
    return state

  switch (action.type) {
    case TEXT_INPUT_TYPING:
      return {
        ...state,
        inputValue: action.value
      }
    default:
      return state
  }
}

export const text_input_typing = (value) => {
  console.log('Here action value!!! ===> ', value);
  return { type: TEXT_INPUT_TYPING, value }
};