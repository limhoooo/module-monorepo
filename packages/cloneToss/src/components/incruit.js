/** @jsx h */
import { h } from '../core/parse.js';
import Component from 'component-h';
import alpha from '../assets/image/alpha.png';
export default function Incruit({ target }) {
  const template = () => {
    return (
      <div class="incruit__container">
        <img src={alpha.src} />
        <div class="incruit__text">
          <h3>토스팀이 만드는 수많은 혁신의 순간들</h3>
          <p>당신과 함께 만들고 싶습니다</p>
          <p>지금, 토스팀에 합류하세요</p>
          <button class="btn bg--primary">채용 중인 공고 보기</button>
        </div>
      </div>
    );
  };

  new Component({
    target,
    template,
  });
}
