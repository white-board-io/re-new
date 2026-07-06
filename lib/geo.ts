import boundaryData from "./india-state-boundaries.json";

type StateCenter = {
  name: string;
  latitude: number;
  longitude: number;
};

type Position = [number, number];
type BoundaryGeometry =
  | { type: "Polygon"; coordinates: Position[][] }
  | { type: "MultiPolygon"; coordinates: Position[][][] };
type StateBoundary = { name: string; geometry: BoundaryGeometry };

const BOUNDARIES = boundaryData as StateBoundary[];
const NORMALIZED_NAMES: Record<string, string> = {
  "Andaman and Nicobar": "Andaman and Nicobar Islands",
  "Dadra and Nagar Haveli": "Dadra and Nagar Haveli and Daman and Diu",
  "Daman and Diu": "Dadra and Nagar Haveli and Daman and Diu",
  Orissa: "Odisha",
  Uttaranchal: "Uttarakhand",
};

// Representative state/UT centers keep location matching entirely on-device.
const STATE_CENTERS: StateCenter[] = [
  { name: "Tamil Nadu", latitude: 13.0827, longitude: 80.2707 }, // Chennai
  { name: "Tamil Nadu", latitude: 11.0168, longitude: 76.9558 }, // Coimbatore
  { name: "Tamil Nadu", latitude: 9.9252, longitude: 78.1198 }, // Madurai
  { name: "Maharashtra", latitude: 19.076, longitude: 72.8777 }, // Mumbai
  { name: "Maharashtra", latitude: 18.5204, longitude: 73.8567 }, // Pune
  { name: "Maharashtra", latitude: 21.1458, longitude: 79.0882 }, // Nagpur
  { name: "Karnataka", latitude: 12.9716, longitude: 77.5946 }, // Bengaluru
  { name: "Karnataka", latitude: 12.2958, longitude: 76.6394 }, // Mysuru
  { name: "Karnataka", latitude: 12.9141, longitude: 74.856 }, // Mangaluru
  { name: "Telangana", latitude: 17.385, longitude: 78.4867 }, // Hyderabad
  { name: "West Bengal", latitude: 22.5726, longitude: 88.3639 }, // Kolkata
  { name: "Gujarat", latitude: 23.0225, longitude: 72.5714 }, // Ahmedabad
  { name: "Rajasthan", latitude: 26.9124, longitude: 75.7873 }, // Jaipur
  { name: "Uttar Pradesh", latitude: 26.8467, longitude: 80.9462 }, // Lucknow
  { name: "Madhya Pradesh", latitude: 23.2599, longitude: 77.4126 }, // Bhopal
  { name: "Kerala", latitude: 8.5241, longitude: 76.9366 }, // Thiruvananthapuram
  { name: "Kerala", latitude: 9.9312, longitude: 76.2673 }, // Kochi
  { name: "Andhra Pradesh", latitude: 16.5062, longitude: 80.648 }, // Vijayawada
  { name: "Odisha", latitude: 20.2961, longitude: 85.8245 }, // Bhubaneswar
  { name: "Bihar", latitude: 25.5941, longitude: 85.1376 }, // Patna
  { name: "Jharkhand", latitude: 23.3441, longitude: 85.3096 }, // Ranchi
  { name: "Chhattisgarh", latitude: 21.2514, longitude: 81.6296 }, // Raipur
  { name: "Assam", latitude: 26.1445, longitude: 91.7362 }, // Guwahati
  { name: "Uttarakhand", latitude: 30.3165, longitude: 78.0322 }, // Dehradun
  { name: "Punjab", latitude: 31.634, longitude: 74.8723 }, // Amritsar
  { name: "Haryana", latitude: 28.4595, longitude: 77.0266 }, // Gurugram
  { name: "Andaman and Nicobar Islands", latitude: 11.74, longitude: 92.65 },
  { name: "Andhra Pradesh", latitude: 15.91, longitude: 79.74 },
  { name: "Arunachal Pradesh", latitude: 28.22, longitude: 94.73 },
  { name: "Assam", latitude: 26.2, longitude: 92.94 },
  { name: "Bihar", latitude: 25.1, longitude: 85.31 },
  { name: "Chandigarh", latitude: 30.73, longitude: 76.78 },
  { name: "Chhattisgarh", latitude: 21.28, longitude: 81.87 },
  { name: "Dadra and Nagar Haveli and Daman and Diu", latitude: 20.4, longitude: 72.83 },
  { name: "Delhi", latitude: 28.61, longitude: 77.21 },
  { name: "Goa", latitude: 15.3, longitude: 74.12 },
  { name: "Gujarat", latitude: 22.26, longitude: 71.19 },
  { name: "Haryana", latitude: 29.06, longitude: 76.09 },
  { name: "Himachal Pradesh", latitude: 31.1, longitude: 77.17 },
  { name: "Jammu and Kashmir", latitude: 33.78, longitude: 76.57 },
  { name: "Jharkhand", latitude: 23.61, longitude: 85.28 },
  { name: "Karnataka", latitude: 15.32, longitude: 75.71 },
  { name: "Kerala", latitude: 10.85, longitude: 76.27 },
  { name: "Ladakh", latitude: 34.15, longitude: 77.58 },
  { name: "Lakshadweep", latitude: 10.57, longitude: 72.64 },
  { name: "Madhya Pradesh", latitude: 22.97, longitude: 78.66 },
  { name: "Maharashtra", latitude: 19.75, longitude: 75.71 },
  { name: "Manipur", latitude: 24.66, longitude: 93.91 },
  { name: "Meghalaya", latitude: 25.47, longitude: 91.37 },
  { name: "Mizoram", latitude: 23.16, longitude: 92.94 },
  { name: "Nagaland", latitude: 26.16, longitude: 94.56 },
  { name: "Odisha", latitude: 20.95, longitude: 85.1 },
  { name: "Puducherry", latitude: 11.94, longitude: 79.81 },
  { name: "Punjab", latitude: 31.15, longitude: 75.34 },
  { name: "Rajasthan", latitude: 27.02, longitude: 74.22 },
  { name: "Sikkim", latitude: 27.53, longitude: 88.51 },
  { name: "Tamil Nadu", latitude: 11.13, longitude: 78.66 },
  { name: "Telangana", latitude: 18.11, longitude: 79.02 },
  { name: "Tripura", latitude: 23.94, longitude: 91.99 },
  { name: "Uttar Pradesh", latitude: 26.85, longitude: 80.95 },
  { name: "Uttarakhand", latitude: 30.07, longitude: 79.02 },
  { name: "West Bengal", latitude: 22.99, longitude: 87.85 },
];

function distanceKm(latitude: number, longitude: number, point: StateCenter) {
  const toRadians = (value: number) => value * Math.PI / 180;
  const latDelta = toRadians(point.latitude - latitude);
  const lngDelta = toRadians(point.longitude - longitude);
  const startLat = toRadians(latitude);
  const endLat = toRadians(point.latitude);
  const a = Math.sin(latDelta / 2) ** 2
    + Math.cos(startLat) * Math.cos(endLat) * Math.sin(lngDelta / 2) ** 2;
  return 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export function nearestIndianState(latitude: number, longitude: number) {
  const boundary = BOUNDARIES.find(({ geometry }) => containsPoint(geometry, latitude, longitude));
  if (boundary) {
    if (boundary.name === "Jammu and Kashmir" && latitude > 32.3 && longitude > 76.8) {
      return "Ladakh";
    }
    return NORMALIZED_NAMES[boundary.name] ?? boundary.name;
  }

  return STATE_CENTERS.reduce((nearest, candidate) => (
    distanceKm(latitude, longitude, candidate) < distanceKm(latitude, longitude, nearest)
      ? candidate
      : nearest
  )).name;
}

function pointInRing(ring: Position[], latitude: number, longitude: number) {
  let inside = false;
  for (let index = 0, previous = ring.length - 1; index < ring.length; previous = index++) {
    const [x, y] = ring[index];
    const [previousX, previousY] = ring[previous];
    const crossesLatitude = (y > latitude) !== (previousY > latitude);
    const intersection = (previousX - x) * (latitude - y) / (previousY - y) + x;
    if (crossesLatitude && longitude < intersection) inside = !inside;
  }
  return inside;
}

function pointInPolygon(polygon: Position[][], latitude: number, longitude: number) {
  if (!polygon.length || !pointInRing(polygon[0], latitude, longitude)) return false;
  return !polygon.slice(1).some((hole) => pointInRing(hole, latitude, longitude));
}

function containsPoint(geometry: BoundaryGeometry, latitude: number, longitude: number) {
  if (geometry.type === "Polygon") {
    return pointInPolygon(geometry.coordinates, latitude, longitude);
  }
  return geometry.coordinates.some((polygon) => pointInPolygon(polygon, latitude, longitude));
}
