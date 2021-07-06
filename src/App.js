import React from "react";
import { Map, Marker } from "pigeon-maps"
import sites from "./sites.json";

//https://www.limn.co.za/dev/assets/za-provinces.topojson

export function MapChart() {
  return (
    <Map height="100vh" defaultCenter={[-28.4792625, 24.6727135]} defaultZoom={6}>
      {
        sites.map((site, index) => (
          <Marker width={50} anchor={[site.latitude, site.longitude]} key={`${site.name}_index`} onClick={()=> window.open(`https://www.google.com/maps/search/?api=1&query=${site.latitude}%2C${site.longitude}`, "_blank")} />
        ))
      }
    </Map>
  )
}

export default MapChart;


