import { Action } from "./Action";
import { Beacondata } from "./Beacondata";
import { Caption } from "./Caption";
import { Listcaption } from "./Listcaption";
import { Providername } from "./Providername";
import { BeacondataType } from "./BeacondataType";

export interface Option {
  actions:             Action[];
  beacondata:          Beacondata;
  caption:             Caption;
  colouroverflowimage: boolean;
  image:               string;
  listcaption:         Listcaption;
  overflowimage:       string;
  providername:        Providername;
  type:                BeacondataType;
}
