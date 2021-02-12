/**
 * Actionについて
 * ・ActionとはJavaScriptのオブジェクトのこと
 * ・Type と key と それに対応する値をもつ
 * ・Typeの値はユニークである必要がある
 */

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// export const increment = () => {
//   return  {
//     type: 'INCREMENT'
//   }
// }

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})
