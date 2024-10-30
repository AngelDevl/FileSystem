class PathNotValidError extends Error {
  constructor(path, ...params) {
    super(params);
    this.message = `Error: path ${path} not valid.`;
  }
}

export default PathNotValidError;
