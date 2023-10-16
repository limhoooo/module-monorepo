/** @jsx h */
import { h } from '../core/parse.js';
import Component from 'component-h';
export default function Footer({ target }) {
  const footerDatas = [
    { title: '토스테크', links: [{ title: '의견 보내기' }] },
    {
      title: '토스',
      links: [{ title: '홈페이지' }, { title: '회사 소개' }, { title: '채용' }],
    },
    {
      title: '고객센터',
      links: [
        { title: '전화: 1599-4905' },
        { title: '이메일: dlagh123@gmail.com' },
        { title: '카카오톡 : @toss' },
      ],
    },
  ];

  const template = () => {
    return (
      <div class="footer__container">
        <div class="footer__nav__container">
          {footerDatas.map(item => (
            <ul class="footer__nav">
              <li class="footer__nav__title">{item.title}</li>
              {item.links.map(link => (
                <li class="footer__nav__link">
                  <a>{link.title}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <address class="footer__address">
          <strong class="footer__address--name">㈜비바리퍼블리카</strong>
          Copyright © Viva Republica, Inc. All Rights Reserved.
        </address>
      </div>
    );
  };
  new Component({
    target,
    template,
  });
}
