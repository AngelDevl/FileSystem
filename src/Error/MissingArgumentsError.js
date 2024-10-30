class MissingArgumentsError extends Error {
  constructor(
    command,
    expectedArgumentsCount,
    providedArgumentsCount,
    ...params
  ) {
    super(params);
    this.command = command;
    this.expectedArgumentsCount = expectedArgumentsCount;
    this.providedArgumentsCount = providedArgumentsCount;
    this.message = `${command}: Error missing arguments - expected: ${expectedArgumentsCount} | provided: ${providedArgumentsCount}`;
  }
}

export default MissingArgumentsError;
