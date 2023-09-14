import Component from 'component-h';

export default class Header extends Component {
  constructor(target) {
    super(target);
  }
  template() {
    return `
            <ul>
                <li>
                  <button data-navigate="/">Home</button>
                </li>
                <li>
                  <button data-navigate="/mypage/login/limho/10">mypage</button>
                </li>
                <li>
                  <button data-navigate="/content/100/2">content</button>
                </li>
                <li>
                  <button data-navigate="/main">Main</button>
                </li>
            </ul>
            `;
  }
}
