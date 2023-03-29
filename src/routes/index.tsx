import { ViewRoutes } from "../views/route";

export const authRoutes = ViewRoutes
export const publicRoutes = ViewRoutes.filter(route => route.private !== true)