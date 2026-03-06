
# Project Blueprint: Interactive 3D Interior Explorer

## Overview

This project is a web-based application that allows users to explore various 3D interior scenes, starting with a kitchen containing a plant vase. Users can interact with objects to learn about their chemical components. The application is built with a modular structure in React and Three.js to allow for future expansion with additional rooms and objects.

## Implemented Features

*   **Project Setup:**
    *   Initialized a React project using Vite.
    *   Installed core 3D rendering libraries: `three`, `@react-three/fiber`, and `@react-three/drei`.
    *   Established a `public/models` directory to store 3D model assets.
*   **Basic Scene & Model Loading:**
    *   Created a reusable `Model.tsx` component to load and display `.glb` models.
    *   Loaded the kitchen and plant models into the scene.
    *   Added a realistic lighting environment.

## Current Plan

*   **Phase 3: Implementing Hotspot Interactivity**
    *   **Insight:** Discovered that the primary kitchen model (`kitchen.glb`) is a single, merged mesh, preventing direct interaction with its sub-components.
    *   **New Strategy:** Instead of interacting with the model geometry, we will create invisible "hotspot" triggers and place them over key objects in the scene.
    1.  Revert the `InteractiveModel.tsx` back to a simple `Model.tsx` for displaying static models.
    2.  Create a new `Hotspot` component directly within `App.tsx`.
    3.  The `Hotspot` will be an invisible box with `onPointerOver` and `onClick` events.
    4.  When a `Hotspot` is hovered, it will display a 3D text label (e.g., "Cup") using `@react-three/drei`.
    5.  Place a `Hotspot` in the scene at the precise location of the cup on the table.
