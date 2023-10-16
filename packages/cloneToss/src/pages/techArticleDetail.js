/** @jsx h */
import { h } from '../core/parse.js';
import Component from 'component-h';
import InitTossFetch from '../http/initTossFetch.js';
import ActicleDetail from '../components/acticleDetail.js';
export default async function TechArticleDetail({ target, props, route }) {
  const instance = new InitTossFetch();
  const { params } = route;
  const { response: detailData } = await instance.tech.getTechDetail({
    id: params.id,
  });
  const onMounted = () => {
    ActicleDetail({ target: '#articleDetail', props: { detailData } });
  };
  const template = () => {
    return <div id="articleDetail"></div>;
  };

  new Component({
    target,
    template,
    onMounted,
  });
}
