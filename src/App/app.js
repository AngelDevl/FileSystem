import Cli from "../Cli/cli.js";
import Directory from "../FileSystem/Directory.js";
import parse from "../Parser/parse.js";

class App {
  cli = new Cli();

  async launch() {
    try {
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
}

export default App;
