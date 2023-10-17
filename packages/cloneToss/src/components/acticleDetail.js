/** @jsx h */
import { h } from '../core/parse.js';
import Component from 'component-h';

export default function ActicleDetail({ target, props }) {
  const { detailData } = props;
  const template = () => {
    return (
      <div class="article--detail">
        <div class="article--detail__header">
          <img class="article--detail__image" src={detailData.thumbnail} />
          <h1 class="article--detail__title">{detailData.title}</h1>
          <div class="article--detail__profile">
            <img src={detailData.thumbnail} />
            <div class="article--detail__profile__text">
              <p>임호 - Frontend Developer</p>
              <span>{detailData.createDate}</span>
            </div>
          </div>
        </div>
        <div class="article--detail__content">
          <p>{detailData.detail.content}</p>
        </div>
      </div>
    );
  };

  new Component({
    target,
    template,
  });
}
