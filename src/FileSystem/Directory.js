import DirectoryAlreadyExistsError from "../Error/DirectoryAlreadyExistsError.js";
import PathNotExistsError from "../Error/PathNotExistsError.js";

/**
 * Directory class - A sort of a file system simulation but with only directorys
 */
class Directory {
  /**
   * Directory constructor - construct a new Directory object including the entries (which hold Directory objects)
   * @param {*} name the name of the directory
   * @param {*} depth the depth or level of the new Directory obejct
   */
  constructor(name, depth) {
    this.name = name;
    this.depth = depth;
    this.entries = {};
  }

  /**
   * addDirectory - create a new directory object and insert it to the new directory if can
   * @param {*} path the path of the new directory
   */
  addDirectory(path) {
    const directorys = path.split("/");
    const newDirectoryName = directorys.pop();

    try {
      const directoryObject = this.getDirectory(directorys.join("/"));
      if (directoryObject.directory) {
        if (directoryObject.directory.entries[newDirectoryName]) {
          throw new DirectoryAlreadyExistsError(path);
        } else {
          directoryObject.directory.entries[newDirectoryName] = new Directory(
            newDirectoryName,
            directorys.length + 1
          );
        }
      } else {
        throw new PathNotExistsError("create", path, directoryObject.pathNotExists);
      }
    } catch (error) {
      throw error;
    }
  }

  /**
   * getDirectory - a recursive function that traverse every Directory obejct from the root entries
   * @param {*} path the path of the requested directory object
   * @param {*} parent the parent of the requested directory
   * @returns on success the requested directory and his parent and on fail the parent if exists and in what directory did the fail occur
   */
  getDirectory(path, parent = null) {
    const directorys = path.split("/");
    if (directorys.length === 0 || !directorys[0]) {
      return { directory: this, parent };
    }

    const directoryName = directorys[0];

    if (!this.entries[directoryName]) {
      return { directory: null, parent: null, pathNotExists: directoryName };
    }

    return this.entries[directoryName].getDirectory(
      directorys.slice(1).join("/"),
      this
    );
  }

  /**
   * deleteDirectory - deletes a directory by a given path
   * @param {*} path - given path of the requested directory to delete
   * @returns true on success and false on fail
   */
  deleteDirectory(path) {
    try {
      const directoryObject = this.getDirectory(path);
      if (!directoryObject.directory) {
        throw new PathNotExistsError("delete", path, directoryObject.pathNotExists);
      }

      delete directoryObject.parent.entries[directoryObject.directory.name];
    } catch (error) {
      throw error;
    }
  }

  /**
   * moveDirectory - moves a directory from one path to another path
   * @param {*} path original directory path
   * @param {*} movePath new directory path
   * @returns true on success and false on fail
   */
  moveDirectory(path, movePath) {
    try {
      const directoryObject = this.getDirectory(path);
      const moveIntoDirectoryObject = this.getDirectory(movePath);
      if (!directoryObject.directory) {
        throw new PathNotExistsError("move", path, directoryObject.pathNotExists);
      }

      if (!moveIntoDirectoryObject.directory) {
        throw new PathNotExistsError("move", path, directoryObject.pathNotExists);
      }

      moveIntoDirectoryObject.directory.entries[
        directoryObject.directory.name
      ] = directoryObject.directory;
      delete directoryObject.parent.entries[directoryObject.directory.name];
    } catch (error) {
      throw error;
    }
  }

  /**
   * listDirectories - list the directories starting from the Root like a real file system
   * @param {*} spacing the spacing in each line
   */
  listDirectories(spacing = "") {
    if (this.depth != 0) console.log(`${spacing}${this.name}`);

    for (const entryName in this.entries) {
      this.entries[entryName].listDirectories(this.depth == 0 ? "" : spacing + " ");
    }
  }
}

export default Directory;
