import { root } from "./config.js";

export const commands = [
  {
    name: "CREATE",
    expectedArguments: 1,
    pathValidation: 1,
    operate: function (params) {
      root.addDirectory(params[0]);
    },
  },
  {
    name: "MOVE",
    expectedArguments: 2,
    pathValidation: 2,
    operate: function (params) {
      root.moveDirectory(params[0], params[1]);
    },
  },
  {
    name: "LIST",
    expectedArguments: 0,
    operate: function (params) {
      root.listDirectories();
    },
  },
  {
    name: "DELETE",
    expectedArguments: 1,
    pathValidation: 1,
    operate: function (params) {
      root.deleteDirectory(params[0]);
    },
  },
];
