class CommandNotExistsError extends Error {
  constructor(command, ...params) {
    super(params);
    this.command = command;
    this.message = `Error: command ${command} does not exists`;
  }
}

export default CommandNotExistsError;
