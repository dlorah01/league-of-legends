import { Image } from "../../champions/models/image"
import { Gold } from "./gold"
import { Maps } from "./maps"

export type Item = {
  id: string,
  name: string,
  description: string,
  colloq: string,
  plaintext: string,
  into: Array <string>,
  image: Image,
  gold: Gold,
  tags: Array<string>,
  maps: Maps,
  stats: {},
  effects: {}
}
