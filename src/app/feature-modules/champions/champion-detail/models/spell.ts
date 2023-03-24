
import { Image } from "../../models/image";
import { Datavalues } from "./datavalues";
import { Leveltip } from "./leveltip";

export type Spell = {
  id:           string,
  name:         string,
  description:  string,
  tooltip:      string,
  leveltip:     Leveltip,
  maxrank:      number,
  cooldown:     number[],
  cooldownBurn: string,
  cost:         number[],
  costBurn:     string,
  datavalues:   Datavalues,
  effect:       Array<number[] | null>,
  effectBurn:   Array<null | string>,
  vars:         any[],
  costType:     string,
  maxammo:      string,
  range:        number[],
  rangeBurn:    string,
  image:        Image
  resource:     string,
}
