import * as L from "leaflet";

declare module "leaflet" {
  namespace GPX {
    interface Options extends L.PathOptions {
      async?: boolean;
      polyline_options?: L.PathOptions;
    }
  }

  class GPX extends L.FeatureGroup {
    constructor(gpx: string, options?: GPX.Options);
  }
}
