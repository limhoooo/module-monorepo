import Component from 'component-h';

export default class Home extends Component {
  constructor(target, route) {
    super(target);
    this.target = target;
    this.route = route;
  }
  setup() {
    this.state = { items: ['item', 'item'] };
  }
  setEvent() {
    this.target.querySelector('.event').addEventListener('click', () => {
      this.setState({ items: [...this.state.items, 'item'] });
    });
  }
  template() {
    return `
              <h1>Home</h1>
              <div> ${this.state.items
                .map(item => `<li>${item}</li>`)
                .join('')}</div>
              <button class='event'">추가</button>
            `;
  }
}
