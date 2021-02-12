import React, {Component} from 'react';
// import propTypes from 'prop-types';

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
// const App = () => {
//   const profiles = [
//     {name: "Taro", age: 10},
//     {name: "Hanako", age: 5},
//     {name: "NoAge", age: 1}
//   ]
//   return (
//     <>
//     {
//       profiles.map((profile, index) => {
//         return <User name={profile.name} age={profile.age} key={index} />
//       })
//     }
//     </>
//   );
// }

/**
 * 関数コンポーネント３
 */
const App = () => (<Counter></Counter>)

/**
 * User関数コンポーネント
 * @param {*} props
 */
// const User = (props) => {
//   return (
//     <div>{props.name}, and {props.age}</div>
//   );
// }


class Counter extends Component {
  constructor (props) {
    super(props)
    console.log(this.state)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    /**
     * これはやってはいけない
     * this.state = {count: this.state.count + 1}
     *
     * setStateを使うと必ずrenderが実行されるので再描画まで自動的に行われる
     */

    this.setState({count: this.state.count + 1})
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }

  render () {
    console.log('render')
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </>
    )
  }
}

/**
 * プロップTypes
 * Propsの型を宣言する
 */
// User.propTypes = {
//   name: propTypes.string,
//   age: propTypes.number.isRequired,
// }

/**
 * デフォルトプロップス
 * コンポーネントの渡された値で不明なもののデフォルト値が設定できる
 */
// User.defaultProps = {
//   age: 1
// }

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
