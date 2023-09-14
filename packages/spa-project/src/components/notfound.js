import Component from 'component-h';

export default class NotFound extends Component {
  constructor(target) {
    super(target);
    this.render();
  }
  template() {
    return `
              <div>NotFound</div>
            `;
  }
}
