import { commands } from "../Config/commands.js";

const getCommandObject = (query) => {
  const components = query.split(/(\s+)/).filter((e) => e.trim().length > 0);
  const command = components.shift().toUpperCase();
  const commandObject = commands.find((obj) => obj.name == command);

  return { commandObject, command, commandArguments: components };
};

export default getCommandObject;
