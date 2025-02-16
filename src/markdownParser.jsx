//import raw from "../public/post/test.md?raw";

function parseOneStar(str) {
  str = str.split("*");
  return str.map((k, key) => (key % 2 === 1 ? <em key={key}>{k}</em> : k));
}

function parseTwoStars(str) {
  str = str.split("**");
  return str.map((k, key) =>
    key % 2 === 1 ? (
      <strong key={key}>{parseOneStar(k)}</strong>
    ) : (
      parseOneStar(k)
    ),
  );
}

function parseThreeStars(str) {
  str = str.split("***");
  return str.map((k, key) =>
    key % 2 === 1 ? (
      <strong key={key}>
        <em>{parseTwoStars(k)}</em>
      </strong>
    ) : (
      parseTwoStars(k)
    ),
  );
}

function parseMarkdown(str) {
  let strings = str.split(/\r\n\r\n|\n\n/);
  console.log(strings);

  return strings.map((str, key) => {
    if (str.substring(0, 2) === "##") {
      str = str.substring(2, str.length);
      return <h2 key={key}>{str}</h2>;
    } else if (str.charAt(0) === "#") {
      str = str.substring(1, str.length);
      return <h1 key={key}>{str}</h1>;
    } else {
      return <p>{parseThreeStars(str)}</p>;
    }
  });
}

function splitOnFirst(str, splitAt) {
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === splitAt) {
      return [str.substring(0, i), str.substring(i + 1, str.length)];
    }
  }
}

function parseMetadata(str) {
  let metadata = {};
  console.log(str);
  str = str.trim();
  str = str.split(/\r\n|\n/);

  console.log(str);
  for (let i = 0; i < str.length; i += 1) {
    let line = splitOnFirst(str[i], ":");
    if (line[0] === "tags") {
      line[1] = line[1].split(",");
    }
    metadata[line[0]] = line[1];
  }
  return metadata;
}

function markdownParser(raw) {
  let text = raw.split("---");
  // text[0] is empty, text[1] has metadata, and text[2] has content

  console.log(parseMetadata(text[1]));

  return [parseMetadata(text[1]), parseMarkdown(text[2])];
}

export default markdownParser;

// {
//   "header":<h1>Cursor Balls</h1>,
//   "description":<p>Have some fun</p>,
//   "tags":[<p>one</p>,<p>two</p>,<p>three</p>],
//   "link":<a href="https://www.cursor-balls.vercel.app">https://www.cursor-balls.vercel.app</a>,
//   "image":"/panda-clipart.jpg"
// }
