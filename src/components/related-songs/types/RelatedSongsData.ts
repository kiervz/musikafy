import { Artist, Highlightsurls, Hub, Share } from "../../../pages/discover/types";
import { Images } from "./Images";

export interface RelatedSongsData {
  layout: string;
  type: string;
  key: string;
  title: string;
  subtitle: string;
  share: Share;
  images: Images;
  hub: Hub;
  artists: Artist[];
  url: string;
  highlightsurls: Highlightsurls;
  properties: Highlightsurls;
  attributes: any;
}
