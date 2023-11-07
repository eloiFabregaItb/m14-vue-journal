import Emoji from "./Emoji.ts"

export default interface Entry {
  id:number,
  body:string,
  emoji:Emoji,
  creation:Date,
  userId:number
}