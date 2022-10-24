import { Action } from "./Action";
import { Displayname } from "./Displayname";
import { Option } from "./Option";
import { HubType } from "./HubType";

export interface Hub {
  actions:     Action[];
  displayname: Displayname;
  explicit:    boolean;
  image:       string;
  options:     Option[];
  type:        HubType;
}
