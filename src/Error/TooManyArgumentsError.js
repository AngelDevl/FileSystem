class TooManyArgumentsError extends Error {
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
      this.message = `${command}: Error too many arguments - expected: ${expectedArgumentsCount} | provided: ${providedArgumentsCount}`;
    }
  }
  
  export default TooManyArgumentsError;
  