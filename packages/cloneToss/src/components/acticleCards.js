/** @jsx h */
import { h } from '../core/parse.js';
import Component from 'component-h';

export default function ActicleCards({ target, props }) {
  const { detailDatas, division } = props;
  const template = () => {
    return (
      <div>
        {detailDatas.map(item => (
          <div
            data-navigate={`/${division}/${item.id}`}
            class="article__card"
            key={item.id}
          >
            <div class="article__card--left">
              <img src={item.thumbnail} alt={item.title} />
            </div>
            <div class="article__card--right">
              <h2>{item.title}</h2>
              <p>{item.content}</p>
              <span>{item.createDate}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };

  new Component({
    target,
    template,
  });
}
