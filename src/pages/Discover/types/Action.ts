import { Name } from "./Name";
import { ActionType } from "./ActionType";

export interface Action {
  id?:  string;
  name: Name;
  type: ActionType;
  uri?: string;
}
