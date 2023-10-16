/** @jsx h */
import { h } from '../core/parse.js';
import Component from 'component-h';
import tossLogo from '../assets/image/tossLogo.png';
export default function Header({ target }) {
  const handleMobileNavBtn = () => {
    const mobileNavBtn = document.querySelector('#mobileNavBtn');
    const mobileNav = document.querySelector(
      '.nav__content__menu__mobile__nav',
    );
    mobileNavBtn.onclick = () => {
      mobileNavBtn.classList.toggle('close');
      mobileNav.classList.toggle('hidden');
    };
  };
  const onMounted = () => {
    handleMobileNavBtn();
  };
  const template = () => {
    return (
      <nav class="nav__container">
        <div class="nav__inner">
          <div class="nav__logo">
            <a data-navigate="/">
              <img src={tossLogo.src} />
            </a>
          </div>
          <div class="nav__content">
            <ul class="nav__content__menu">
              <li>
                <a data-navigate="/design">디자인</a>
              </li>
              <li>
                <a data-navigate="/">개발</a>
              </li>
              <li>
                <button class="btn bg--primary">채용 바로가기</button>
              </li>
            </ul>
            <div class="nav__content__menu__mobile">
              <button
                class="nav__content__menu__mobile_btn"
                id="mobileNavBtn"
              ></button>
            </div>
          </div>
        </div>
        <div class="nav__content__menu__mobile__nav hidden">
          <ul class="nav__content__menu__mobile__nav__menu">
            <li>
              <a data-navigate="/design">디자인</a>
            </li>
            <li>
              <a data-navigate="/">개발</a>
            </li>
            <li class="nav__content__menu__mobile__nav__menu_btn">
              <button class="btn bg--primary">채용 바로가기</button>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  new Component({
    target,
    template,
    onMounted,
  });
}
