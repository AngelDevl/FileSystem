class PathNotExistsError extends Error {
  constructor(command, givenPath, stuckOnPath, ...params) {
    super(params);
    this.command = command;
    this.message = `Cannot ${command.toLowerCase()} ${givenPath} - ${stuckOnPath} does not exists`;
  }
}

export default PathNotExistsError;
