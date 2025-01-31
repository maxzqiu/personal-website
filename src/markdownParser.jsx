import text from "../public/post/test.md?raw";

function parseMarkdown(str) {
  let strings = str.split("\n\n");
  console.log(strings);
  return strings.map((str, key) => {
    if (str.substring(0, 2) === "##") {
      str = str.substring(2, str.length);
      return <h2 key={key}>{str}</h2>;
    } else if (str.charAt(0) === "#") {
      str = str.substring(1, str.length);
      return <h1 key={key}>{str}</h1>;
    } else {
      str = str.split("***");
      str = str.map((k, key) => {
        if (key % 2 === 1) {
          return (
            <strong>
              <em>{k}</em>
            </strong>
          );
        } else {
          return k;
        }
      });
      console.log(str);
      let str2 = "";
      for (let i = 0; i < str.length; i += 1) {
        str2 += str[i];
      }
      str2 = str2.split("**");
      console.log(str2);
      str2 = str2.map((k, key) => {
        if (key % 2 === 1) {
          return <strong>{k}</strong>;
        } else {
          return k;
        }
      });
      console.log(str2);
      let str3 = "";
      for (let i = 0; i < str2.length; i += 1) {
        str3 += str2[i];
      }
      str3 = str3.split("*");
      console.log(str3);
      str3 = str3.map((k, key) => {
        if (key % 2 === 1) {
          return <em>{k}</em>;
        } else {
          return k;
        }
      });
      console.log(str3);
      return <p key={key}>{str3}</p>;
    }
  });
}

function MarkdownParser() {
  return <>{parseMarkdown(text)}</>;
}

export default MarkdownParser;
