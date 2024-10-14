import { Routes } from "@angular/router";

export const adminRoutes: Routes = [
    {
        path: "home",
        loadComponent: () => import("../pages/students/home/[home]/home-page/home-page.component"). then ((m)=>m.HomePageComponent)
    },
    {}
]