import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/Home';
import TeamPage from './components/TeamPage';
import AboutUsPage from './components/AboutUsPage';
import SpecialistsPage from './components/SpecialistsPage';
import PartnersPage from './components/PartnersPage';
import ReviewsPage from './components/ReviewsPage';
import LicensesCertificatesPage from './components/LicensesCertificatesPage';
import VacancyPage from './components/VacancyPage';

import ServicesPage from './components/ServicesPage';
import CostPage from './components/CostPage';
import Login from './components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/team",
    element: <TeamPage/>,
  },
  {
    path: "/aboutLaboratory",
    element: <AboutUsPage/>,
  },
  {
    path: "/specialists",
    element: <SpecialistsPage/>,
  },
  {
    path: "/reviews",
    element: <ReviewsPage/>,
  },
  {
    path: "/vacancy",
    element: <VacancyPage/>,
  },
  {
    path: "/licenses_certificates",
    element: <LicensesCertificatesPage/>,
  },
  {
    path: "/partners",
    element: <PartnersPage/>,
  },
  {
    path: "/vacancy",
    element: <VacancyPage/>,
  },
  {
    path: "/cost",
    element: <CostPage/>,
  },
  {
    path: "/services",
    element: <ServicesPage/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
