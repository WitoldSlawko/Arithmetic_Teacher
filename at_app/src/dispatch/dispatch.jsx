import numbering from '../actions/actions.jsx';

export function mapStateToProps(state) {
  return { number: state.number };
}

export function dispatchToProps(dispatch) {
  return { changeNumber: () => dispatch(numbering()) };
}