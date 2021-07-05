import Contracts from "../pages/Contracts";
import Devices from "../pages/Devices";

export const routes = [
  {
    path: "/",
    component: Devices,
  },
  {
    path: "/contracts",
    component: Contracts,
  },
];
