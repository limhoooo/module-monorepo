export default function reducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_TODO':
      const item = {
        id: new Date().getTime(),
        check: false,
        todo: action.payload,
      };
      return {
        ...state,
        items: [...state.items, { ...item }],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        items: action.payload,
      };
    case 'CHANGE_TODO':
      return {
        ...state,
        items: action.payload,
      };
  }

  return state;
}
