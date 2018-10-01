import Route from '@ember/routing/route';

export default class Feed extends Route {
  model() {
    return [
      this.store.createRecord('post', { content: 'Testing please ignore' }),
      this.store.createRecord('post', { content: 'Here\'s a tweet!' }),
      this.store.createRecord('post', { content: 'Hello, world!' }),
    ]
  }
}
