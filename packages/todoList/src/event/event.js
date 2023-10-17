export const addTodoEvent = store => {
  const addTodoBtn = document.querySelector('.addTodo');
  addTodoBtn.onclick = () => {
    let inputValue = document.querySelector('.todoInput').value;
    if (!inputValue) return;
    store.dispatch({ type: 'ADD_TODO', payload: inputValue });
    document.querySelector('.todoInput').value = '';
  };
};

function deleteTodoEvent(e, store) {
  const { items } = store.getState();
  const { target } = e;
  if (target.classList.contains('todoDeleteBtn')) {
    const todoId = Number(target.getAttribute('data-todoId'));
    const todoList = items.filter(item => item.id !== todoId);
    store.dispatch({ type: 'DELETE_TODO', payload: todoList });
  }
}

function changeTodoEvent(e, store) {
  const { items } = store.getState();
  const { target } = e;
  if (target.classList.contains('todoCheckInput')) {
    const todoId = Number(target.getAttribute('id'));
    const todoList = items.map(item => {
      if (item.id === todoId) return { ...item, check: !item.check };
      return item;
    });
    store.dispatch({ type: 'CHANGE_TODO', payload: todoList });
  }
}
export const todoListEvent = store => {
  const targetNode = document.querySelector('#todoListNode');
  targetNode.onclick = e => {
    deleteTodoEvent(e, store);
    changeTodoEvent(e, store);
  };
};
