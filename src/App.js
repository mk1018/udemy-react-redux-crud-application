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
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "NoAge"}
  ]

  return (
    <>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })
    }
    </>
  );
}

const User = (props) => {
  return (
    <div>{props.name}, and {props.age}</div>
  );
}

User.defaultProps = {
  age: 1
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
