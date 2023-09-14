import Component from 'component-h';

export default class todoFilter extends Component {
  setEvent() {}
  template() {
    const { items } = this.props;
    return `
    <div>
      <button data-navigate='/'>All</button>
      <button data-navigate='/checked'>Checked</button>
      <button data-navigate='/unchecked'>UnChecked</button>
    </div>
    <div>
      Total Count : ${items.length}
    </div>
    `;
  }
}
