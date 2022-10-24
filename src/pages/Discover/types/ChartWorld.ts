import { Artist } from "./Artist";
import { Highlightsurls } from "./Highlightsurls";
import { Hub } from "./Hub";
import { Images } from "./Images";
import { Share } from "./Share";
import { ChartWorldType } from "./ChartWorldType";

export interface ChartWorld {
  artists:        Artist[];
  highlightsurls: Highlightsurls;
  hub:            Hub;
  images:         Images;
  key:            string;
  layout:         string;
  properties:     Highlightsurls;
  share:          Share;
  subtitle:       string;
  title:          string;
  type:           ChartWorldType;
  url:            string;
}
