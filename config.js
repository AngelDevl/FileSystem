import Directory from "./src/FileSystem/Directory.js";

// The Root folder
export const root = new Directory("Root", 0);

export const commands = [
  {
    name: "CREATE",
    expectedParams: 1,
    pathValidation: 1,
    operate: function (params) {
      root.addDirectory(params[0]);
    },
  },
  {
    name: "MOVE",
    expectedParams: 2,
    pathValidation: 2,
    operate: function (params) {
      root.moveDirectory(params[0], params[1]);
    },
  },
  {
    name: "LIST",
    expectedParams: 0,
    operate: function (params) {
      root.listDirectories();
    },
  },
  {
    name: "DELETE",
    expectedParams: 1,
    pathValidation: 1,
    operate: function (params) {
      root.deleteDirectory(params[0]);
    },
  },
];