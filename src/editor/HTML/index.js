import React from "react";
import { useEffect, useState } from "react";

import useToggle from "../../@hooks/useToggle";
import Safari from "../../components/Safari";
import IDE from "../../components/IDE";

export default function Index(props) {
  const [liveServer, toggleLiveServer] = useToggle(true);

  const [htmlCode, setHtmlCode] = useState(``);
  const [browserCode, setBrowserCode] = useState(``);

  const editors = [
    {
      ext: "index.html",
      name: "index.html",
      language: "html",
      value: htmlCode,
      onChange: setHtmlCode,
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      runBrowser();
    }, 250);

    return () => {
      clearTimeout(timer);
    };
  }, [liveServer, htmlCode]);

  return (
    <section className="flex" style={{ width: props.width }}>
      <IDE
        editor={editors}
        liveServer={liveServer}
        onRun={runBrowser}
        toggleLiveServer={toggleLiveServer}
      />

      <Safari src={browserCode} setSrc={setBrowserCode} template={`html`} />
    </section>
  );

  function runBrowser(force) {
    if (!liveServer && !force) {
      return;
    }

    setBrowserCode(`${htmlCode}`);
  }
}

// import chai from "chai";
// window.chai = chai;
//  const passed = eval(`
//       let code = htmlCode;
//       function testCode() {
//         let testsPassed = false;
//         const chai = window.chai;

//         const assert = chai.assert;

//         try {
//           ${props.tests}
//           testsPassed = true;
//         } catch (error) {
//           console.log(error);
//             testsPassed = false;
//         }

//         return testsPassed;
//     }

//       testCode();
// `);

// if (passed) {
//   // Do something
//   // ...
//   // ...

//   alert("WooHoo!");
// }
// const tests = `
//       const strippedCode = code.replace(/\\s/g, "");

//       assert.include('foobar', 'baz', "string doesn't contain substring");

//       const passed = new RegExp("<h1>IDEASFROMME</h1>","igm").test(strippedCode);

//       if(!passed) {
//         throw new Error("IDEAS FROM ME does not have!");
//       }
//   `;
