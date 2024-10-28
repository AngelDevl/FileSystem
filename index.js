import parse from "./src/Parser/parse.js";

try {
  parse("CREATE fruits");
  parse("CREATE vegetables");
  parse("CREATE grains");
  parse("CREATE fruits/apples");
  parse("CREATE fruits/apples/fuji");
  parse("LIST");

  parse("CREATE grains/squash");
  parse("MOVE grains/squash vegetables");
  parse("CREATE foods");
  parse("MOVE grains foods");
  parse("MOVE fruits foods");
  parse("MOVE vegetables foods");
  parse("LIST");

  parse("DELETE fruits/apples");
  parse("DELETE foods/fruits/apples");
  parse("LIST");
} catch (error) {
    console.log(error)
}