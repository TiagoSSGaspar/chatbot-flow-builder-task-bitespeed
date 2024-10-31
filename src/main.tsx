import "virtual:uno.css";

import { RouterProvider } from "@tanstack/react-router";
import { setAutoFreeze } from "immer";
import { ClickScrollPlugin, OverlayScrollbars } from "overlayscrollbars";
import React from "react";
import ReactDOM from "react-dom/client";
import { ApplicationStateProvider } from "~/stores/application-state";
import { router } from "~@/router";
import { initializeHead } from "~@/unhead";

import "~/assets/styles/global.scss";

initializeHead();

OverlayScrollbars.plugin(ClickScrollPlugin);

setAutoFreeze(false);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <ApplicationStateProvider>
            <RouterProvider router={router} />
        </ApplicationStateProvider>
    </React.StrictMode>,
);
