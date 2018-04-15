export default class Image {
  constructor(id, name, origin, path, width, height) {
    this.id = id;
    this.name = name;
    this.origin = origin;
    this.path = path;
    this.width = width;
    this.height = height;
  }

  get url() {
    return `${this.origin}/${this.path}`;
  }

  get description() {
    return `Original dimensions (WxH): ${this.width}x${this.height}px`;
  }
}