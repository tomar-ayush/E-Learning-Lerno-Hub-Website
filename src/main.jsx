import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import { KindeProvider } from "@kinde-oss/kinde-auth-react";

import Layout from "./Layout.jsx";
import Home from "./components/Home.jsx";
import Courses from "./components/Courses.jsx";
import Reviews from "./components/Reviews.jsx";
import Contact from "./components/Contact.jsx";
import About from "./components/About.jsx";
import Profile from "./components/Profile.jsx";
import Web from "./webdevelopment/Web.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="courses" element={<Courses />}>
        <Route path="web" element={<Web />} />
      </Route>
      <Route path="reviews" element={<Reviews />} />
      <Route path="contact" element={<Contact />} />
      <Route path="profile" element={<Profile />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <KindeProvider
      clientId="99ca6ba3418b4d05bd7188455ab85b44"
      domain="https://lernohub.kinde.com"
      redirectUri="http://localhost:5173"
      logoutUri="http://localhost:5173"
    >
      <RouterProvider router={router} />
    </KindeProvider>
  </React.StrictMode>
);
