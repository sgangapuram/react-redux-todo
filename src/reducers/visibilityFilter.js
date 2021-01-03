import { VisibilityFilters } from '../literals';
const initialState = VisibilityFilters.SHOW_ALL;
const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      console.log('here1', action);
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;