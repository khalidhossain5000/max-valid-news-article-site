# News Article Platform

A responsive React application for browsing, creating, and managing news articles — built as part of the **Frontend Development Intern** technical assignment for **MaxValid**.

## Description

This project is a full-featured news article web app where users can browse published articles with search and filtering, view detailed article pages, and (via a dashboard) create and manage content using a rich text editor. The UI closely follows the provided Figma design and is fully responsive across desktop, tablet, and mobile screens.

**Figma Design:** [Given Figma](https://www.figma.com/design/B4Pc6Pr0lmnU3RqWSJ2gOR/Task-Intern?node-id=1-18990&m=dev)

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone <https://github.com/khalidhossain5000/max-valid-news-article-site.git>
cd <max-valid-news-article-site>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root and add the following:

```dotenv
VITE_BACKEND_URL=https://max-valid-article-server-new.vercel.app
VITE_IMGBB_API_KEY=your_imgbb_api_key_here
```

| Variable             | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| `VITE_BACKEND_URL`   | Base URL of the backend API                                  |
| `VITE_IMGBB_API_KEY` | API key for ImgBB, used for image uploads (thumbnail/editor) |

### 4. Run the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` by default.

### 5. Build for production

```bash
npm run build
```

---

## Backend API Reference

**Base URL:** `https://max-valid-article-server-new.vercel.app`

| Method | Endpoint        | Description                                               |
| ------ | --------------- | --------------------------------------------------------- |
| `POST` | `/api/news`     | Create a new news article                                 |
| `GET`  | `/api/news`     | Get all news articles, supports query-based search/filter |
| `GET`  | `/api/news/:id` | Get details of a single news article by ID                |

**Query parameters supported on `GET /api/news`:**
Filters are appended dynamically as URL search params (e.g. search term, category, status), based on the `INewsQuery` type.

---

## Folder Structure

```
src/
├── assets/          # Static assets (images, icons)
├── Components/       # Reusable UI components
├── data/             # Static/mock data
├── Hooks/             # Custom React hooks
├── Layouts/           # Layout wrappers (RootLayout, DashboardLayout)
├── Pages/              # Route-level page components
├── Router/             # React Router route definitions
├── service/             # API handler functions
│   ├── formatDate.ts
│   ├── newsHandler.ts
│   └── uploadImage.ts
├── types/               # TypeScript type definitions
├── App.css
├── index.css
└── main.tsx
```

---

## Tech Stack

- **React 19** + **TypeScript**
- **React Router v8** — routing, dynamic route params, loaders
- **Tailwind CSS v4** — utility-first styling
- **Tiptap** — rich text editor (with image, underline, task list extensions)
- **React Hot Toast** — toast notifications
- **SweetAlert2** — confirmation modals/alerts
- **React Icons** — icon library
- **Tailwind Merge** — conditional class merging

## Features

- Responsive layout across desktop, tablet, and mobile
- Browse news articles with search and filtering
- Dynamic article details page (route-based, data fetched via loader)
- Dashboard for content management (create, view, manage articles)
- Rich text article editor powered by Tiptap
- Image upload integration via ImgBB
- Toast notifications and confirmation alerts for user actions
- Reusable, semantic React components
- Global loading and error states
- Clean, modular project structure with a dedicated service layer for API calls

## Live Deployment

https://max-valid-news-article-project.vercel.app
