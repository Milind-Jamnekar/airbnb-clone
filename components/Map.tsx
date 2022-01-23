import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import type { Search } from "../utility/mapCordCreate";

type Viewport = {
  latitude: number | false;
  longitude: number | false;
  zoom: number;
};

type Props = {
  searchResult: Search[];
};

type Cords = {
  latitude: number;
  longitude: number;
}[];

export default function Map({ searchResult }: Props) {
  const coordinates = searchResult.map((el) => ({
    latitude: el.lat,
    longitude: el.long,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/milind-jamnekar/ckyrfh1jp4ked15mwurun4hai"
      mapboxApiAccessToken={process.env.mapKey}
      {...viewport}
      width="100%"
      height="100%"
      onViewportChange={(nextViewport: Viewport) => setViewport(nextViewport)}
    >
      {searchResult.map((el) => (
        <div>
          <Marker
            latitude={el.lat}
            longitude={el.long}
            offsetLeft={-20}
            offsetTop={-20}
          >
            <div className="stroke-white fill-red-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-red-400 stroke-white animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </Marker>
        </div>
      ))}
    </ReactMapGL>
  );
}
