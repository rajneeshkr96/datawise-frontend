# Project Name

A modern web application built with React, TypeScript, and Tailwind CSS, featuring a dashboard with user activity tracking, form submissions, and responsive navigation.

## 🚀 Features

- Sidebar navigation (Dashboard, Users, Settings)
- Responsive layout with Tailwind CSS
- Dashboard view with:
  - 📈 Bar chart (static/mock)
  - 📋 User activity table (GET API)
  - 📝 Activity form submission (POST API)
- React Router v6 navigation
- Axios for API communication
- shadcn/ui components for UI consistency

## 🗂️ Project Structure

```
├── src/
│   ├── assets/          # Static assets (e.g., images)
│   ├── components/      # Reusable components (Loader, ErrorMessage)
│   ├── context/         # App-level context (optional)
│   ├── features/
│   │   └── dashboard/
│   │       ├── components/  # BarChart, UserTable, ActivityForm
│   │       ├── pages/       # DashboardPage
│   │       ├── services/    # API functions
│   │       └── types/       # TypeScript types
│   ├── layout/          # DashboardLayout with sidebar
│   ├── pages/           # Route views: Dashboard, Users, Settings
│   ├── routes/          # Router config
│   ├── services/        # Axios config
│   ├── hooks/           # Custom hooks (e.g., useFetch)
│   ├── utils/           # Helper functions
│   ├── styles/          # Global styles (Tailwind setup)
│   ├── App.tsx          # App root
│   └── main.tsx         # Entry point
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- A code editor (e.g., VS Code)

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```


3. **Run the development server**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```
   - Open `http://localhost:5173` in your browser to view the app.

4. **Build for production**:
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```
   - The production-ready files will be in the `dist/` directory.

### Dependencies

- **React**: Frontend framework
- **React Router DOM**: For navigation
- **Axios**: For API requests
- **Tailwind CSS**: For styling
- **shadcn/ui**: For UI components
- **TypeScript**: For type safety

## 📝 Usage

- Navigate using the sidebar to access Dashboard, Users, or Settings.
- The Dashboard displays a bar chart, user activity table (fetched via GET API), and an activity form (submits via POST API).
- Ensure the API is running and the `.env` file is configured correctly for API requests.

## 🖼️ Screenshots

- **Dashboard Page**:
  ![Dashboard Page](attachment://dashboard_page.png)
- **Users Page**:
  ![Users Page](attachment://users_page.png)
- **Settings Page**:
  ![Settings Page](attachment://settings_page.png)

