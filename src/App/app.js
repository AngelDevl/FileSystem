import Cli from "../Cli/cli.js";
import parse from "../Parser/parse.js";
import Directory from "../FileSystem/Directory.js";

class App {
  cli = new Cli();

  async launch() {
    try {
      this.initializeRoot();
      await this.cli.start(this.readLineHandler);
    } catch (error) {
      console.error(error);
    }
  }

  readLineHandler(line) {
    if (line === "exit") {
      this.cli.stop();
    } else {
      parse(line);
    }
  }

  initializeRoot() {
    this.root = new Directory("Root", 0);
  }
}

export default App;
