import { RouteObject } from "react-router-dom";

import MapView from "@/components/pages/map.tsx";

const router: RouteObject[] = [
  {
    path: "/",
    element: <MapView />,
  },
];

export default router;
