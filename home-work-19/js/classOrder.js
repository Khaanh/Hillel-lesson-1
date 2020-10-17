export class Order {
  constructor(config) {
    this.size = config.size;
    this.ingredients = config.ingredients;
    this.status = config.status;
  }

  getStatus() {
    return this.status;
  }

  getSize() {
    return this.size;
  }
}