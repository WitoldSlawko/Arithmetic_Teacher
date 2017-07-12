const reducer = (state, action) => {
  switch (action.type) {
    case 'NUMBERING':
      return { ...state, number: state.number };
    default:
      return state;
  }
};

export default reducer;