import { Image } from "./image"
import { Info } from "./info"
import { Stats } from "./stats"

export type Champion  = {
  blurb: string,
  id: string,
  image: Image,
  info: Info,
  key: string,
  name: string,
  partype: string,
  stats: Stats,
  tags: Array<string>,
  title: string,
  version: string
}
