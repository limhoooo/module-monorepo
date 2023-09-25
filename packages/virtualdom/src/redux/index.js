const initState = {
  items: [],
};

export default class CreateStore {
  constructor(reducer) {
    console.log(reducer);
    this.reducer = reducer;
    this.state = initState;
    this.listeners = [];
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.listeners.forEach(fn => fn());
  }
  getState() {
    return { ...this.state };
  }
  subscribe(component) {
    this.listeners = [...this.listeners, component];
  }
  initSubscribe() {
    this.listeners = [];
  }
}
