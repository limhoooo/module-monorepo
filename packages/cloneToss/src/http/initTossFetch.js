import Fetch from 'fetch-h';

export default class initTossFetch extends Fetch {
  constructor() {
    super();
    this.setBaseUrl('');
    this.setTimeout(5000);
    this.setHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  }

  tech = {
    getTechs: () => this.get({ url: '/api/articles/tech' }),
    getTechDetail: params => this.get({ url: '/api/articles/tech', params }),
  };
  design = {
    getDesigns: () => this.get({ url: '/api/articles/design' }),
    getDesignDetail: params =>
      this.get({ url: '/api/articles/design', params }),
  };
}
