import { Artist } from "./Artist";
import { Hub } from "./Hub";
import { Images } from "./Images";
import { Share } from "./Share";
import { ChartWorldType } from "./ChartWorldType";

export interface ChartWorld {
  artists:        Artist[];
  highlightsurls: any;
  hub:            Hub;
  images:         Images;
  key:            string;
  layout:         string;
  properties:     any;
  share:          Share;
  subtitle:       string;
  title:          string;
  type:           ChartWorldType;
  url:            string;
  track?:         any;
  attributes:     any;
}
