const validateArguments = (command) => {
  // Validate the path string
  if (Object.hasOwn(command, "pathValidation")) {
    for (let index = 0; index < command.pathValidation; index++) {
      if (!validatePath(params[index])) {
        throw new PathNotValidError(params[index]);
      }
    }
  }
};


export default validateArguments