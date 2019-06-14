class NotFound extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.name = 'NotFound';
    this.statusCode = 404;
  }
}

module.exports = NotFound;
