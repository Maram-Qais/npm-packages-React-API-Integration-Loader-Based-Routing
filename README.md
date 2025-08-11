npm-packages: React API Integration & Loader-Based Routing With TYPESCRIPT
A modern React single-page application (SPA) that explores npm packages by fetching live data from the official NPM Registry API. Built with React Router v6.4+ to leverage route-based loaders for seamless async data fetching and dynamic routing.

Tech Stack
React (v18+) with TypeScript for strong static typing and enhanced developer experience

React Router (v6.4+) leveraging loader APIs for declarative async data fetching

Tailwind CSS for utility-first styling

React Icons for consistent iconography

Live data fetched from the NPM Registry REST API using typed API response models


Features
Dynamic fetching of npm package data using React Router loaders

Route-based data management for smooth navigation and UI updates

Pagination support for search results

Dark mode UI with responsive design

Client-side routing with React Router v6.4+

Error handling and loading states integrated into routes

Project Structure
/pages — main route pages like Home, Search, Details

/components — reusable UI components like PackageListItem, SearchInput, Loading, NotFoundPage

/api — API typings and helper functions

Loaders implemented alongside route components to fetch data server-side before render

Getting Started

Clone the repo:
git clone https://github.com/Maram-Qais/npm-packages-React-API-Integration-Loader-Based-Routing.git
Install dependencies:
npm install
Start the development server:
npm run dev
Open http://localhost:3000 in your browser.