class DirectoryAlreadyExistsError extends Error {
  constructor(path, ...params) {
    super(params);
    this.message = `Cannot create a a new directory at ${path} - directory allready exists`;
  }
}

export default DirectoryAlreadyExistsError;
