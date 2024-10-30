import readline from "node:readline";

class Cli {
  async start(handler) {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    for await (const line of this.rl) {
      if (line.length > 0) handler(line);
    }
  }

  stop() {
    if (this.rl) this.rl.close();
  }
}

export default Cli;
