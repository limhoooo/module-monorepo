/** @jsx h */
import { h } from '../core/parse.js';
import Component from 'component-h';
import initTossFetch from '../http/initTossFetch.js';
import ActicleCards from '../components/acticleCards.js';

export default async function DesignArticle({ target }) {
  const instance = new initTossFetch();
  const { response: detailDatas } = await instance.design.getDesigns();
  const onMounted = () => {
    ActicleCards({
      target: '#acticleCards',
      props: { detailDatas, division: 'design' },
    });
  };
  const template = () => {
    return (
      <div class="article__inner">
        <h1 class="article__title">디자인</h1>
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
