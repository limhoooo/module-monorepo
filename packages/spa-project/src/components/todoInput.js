import Component from 'component-h';

export default class TodoInput extends Component {
  setEvent() {
    this.props.todoInputEvent(this.target);
  }
  template() {
    return `
                        <div>
                            <input type="text" class='todoInput'/>
                            <button class='addTodo'>Add</button>
                        </div>
                        `;
  }
}
