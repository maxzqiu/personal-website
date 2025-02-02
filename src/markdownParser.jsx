import text from "../public/post/test.md?raw";

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

function MarkdownParser() {
  return parseMarkdown(text);
}

export default MarkdownParser;
