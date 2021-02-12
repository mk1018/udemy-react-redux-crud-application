import React, {Component} from 'react';

/**
 * クラスコンポーネント
 */
// class App extends Component {
//   render() {
//     return (
//       <>
//         <input type="text" onChange={() => {console.log("i ma clicked.")}} />
//       </>
//     );
//   }
// }

/**
 * 関数コンポーネント１
 */
// function App() {
//   // return <h1 className="foo">HelloWorld</h1> ; //jsx (javaScriptXMLの略)
//   return (
//     <>
//       <input type="text" onChange={() => {console.log("i ma clicked.")}} />
//     </>
//   );
// }

/**
 * 関数コンポーネント２
 */
const App = () => {
  return (
    <>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </>
  );
}

const Cat = () => {
  return (
    <div>猫</div>
  );
}

/**
 * JSXをJavaScriptで表現したもの
 */
/* JavaScript */
// function App() {
//   return React.createElement(
//     "div",
//     null,
//     "Hello World!!"
//   );
// }


export default App;
