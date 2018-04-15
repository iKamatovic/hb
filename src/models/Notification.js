export default class Notification {
  constructor(message = '', type = 'neutral') {
    this.type = type;
    this.message = message;
  }
}