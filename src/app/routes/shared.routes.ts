import { Routes } from "@angular/router";

export const sharedRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("../pages/shared/landing-page/landing-page.component").then(
            (m) => m.LandingPageComponent)
    }
]