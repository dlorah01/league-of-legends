
import { Image } from "../../models/image"
import { Info } from "../../models/info"
import { Passive } from "./passive"
import { Skin } from "./skin"
import { Spell } from "./spell"

export type ChampionDetail = {
  id:          string,
  key:         string,
  name:        string,
  title:       string,
  image:       Image
  skins:       Skin[],
  lore:        string,
  blurb:       string,
  allytips:    string[],
  enemytips:   string[],
  tags:        string[],
  partype:     string,
  info:        Info,
  stats:       { [key: string]: number },
  spells:      Spell[],
  passive:     Passive,
  recommended: any[],
}


