/** @jsx h */
import { h } from '../core/parse.js';
import Component from 'component-h';
import InitTossFetch from '../http/initTossFetch.js';
import ActicleCards from '../components/acticleCards.js';
export default async function TechArticle({ target }) {
  const instance = new InitTossFetch();
  const { response: detailDatas } = await instance.tech.getTechs();
  const onMounted = () => {
    ActicleCards({
      target: '#acticleCards',
      props: { detailDatas, division: 'tech' },
    });
  };
  const template = () => {
    return (
      <div class="article__inner">
        <h1 class="article__title">개발</h1>
        <div id="acticleCards"></div>
      </div>
    );
  };

  new Component({
    target,
    template,
    onMounted,
  });
}
