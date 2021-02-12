import React from 'react';

/* jsx （直感的にHTMLを操作できる） */
function App() {
  // return <h1 className="foo">HelloWorld</h1> ; //jsx (javaScriptXMLの略)
  return (
    <>
      <input type="text" onChange={() => {console.log("i ma clicked.")}} />
    </>
  );
}

/* JavaScript */
// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hello World!!"
//   );
// }


export default App;
