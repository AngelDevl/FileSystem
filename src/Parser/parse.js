import { commands } from "../../config.js";
import validatePath from "../Validation/validatePath.js";

/**
 * parse the given command string and operate it
 * @param {*} string the command string
 * @returns On success true and on fail false
 */
const parse = (string) => {
  const components = string.split(/(\s+)/).filter(e => e.trim().length > 0);
  let command = components[0];
  command = commands.find((obj) => obj.name == command);
  if (!command) {
    throw new Error(`Command ${components[0]} does not exists..`);
  }

  if (components.length - 1 < command.expectedParams) {
    throw new Error(`Not enough params to the following command: ${command.name}`);
  }

  if (components.length - 1 > command.expectedParams) {
    throw new Error(`Too much params to the following command: ${command.name}`);
  }

  const [, ...params] = components;

  // Validate the path string
  if (Object.hasOwn(command, "pathValidation")) {
    for (let index = 0; index < command.pathValidation; index++) {
      if (!validatePath(params[index])) {
        console.log("Given path is not valid");
        return false;
      }
    }
  }

  // Operate the appropriate command
  command.operate(params);
  return true;
};

export default parse;
