import CommandNotExistsError from "../Error/CommandNotExistsError.js";
import MissingArgumentsError from "../Error/MissingArgumentsError.js";
import TooManyArgumentsError from "../Error/TooManyArgumentsError.js";
import validatePath from "../Validation/validatePath.js";
import getCommandObject from "./getCommandObject.js";

/**
 * parse the given command string and operate it
 * @param {*} string the command string
 */
const parse = (query) => {
  const { commandObject, command, commandArguments } = getCommandObject(query);

  try {
    if (!commandObject) {
      throw new CommandNotExistsError(command);
    }

    if (commandArguments.length < commandObject.expectedArguments) {
      throw new MissingArgumentsError(
        commandObject.name,
        commandObject.expectedArguments,
        commandArguments.length
      );
    }

    if (commandArguments.length > commandObject.expectedArguments) {
      throw new TooManyArgumentsError(
        commandObject.name,
        commandObject.expectedArguments,
        commandArguments.length
      );
    }

    validatePath(commandObject);

    // Operate the appropriate command
    commandObject.operate(commandArguments);
  } catch (error) {
    console.error(error.message);
  }
};

export default parse;
