# 🎓 Beginner React Course 2026

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

A beginner-friendly React course focusing on core fundamentals: State, Effects, Routing, APIs, and project deployments.

## 📂 Folder Structure (Focusing on Lessons)

This structure organizes files logically, putting the core course material in the `src/lessons/` folder:

```text
reactadvanced/
├── src/
│   ├── assets/          # Static media assets, icons, and illustrations
│   ├── components/      # Shared components (useContext)
│   ├── Hooks/           # Custom hooks and context (ThemeContext.jsx)
│   ├── lessons/         # 🌟 Core Day-by-Day Learning Modules
│   │   ├── Day1.jsx     # State: React state & Counter Application
│   │   ├── Day2.jsx     # Effects: APIs with Axios & Timer intervals
│   │   └── Day3.jsx     # Routing: Single-page navigation & layout
│   ├── Pages/           # Route components (Home.jsx, About.jsx)
│   ├── App.css          # App-wide global styles
│   ├── App.jsx          # Route configuration mapping URLs to pages
│   ├── index.css        # Tailwind CSS imports & global rules
│   └── main.jsx         # React DOM root setup
├── eslint.config.js     # Code quality and linting configuration
├── index.html           # Main HTML document template
├── package.json         # NPM script configurations & package dependencies
├── vite.config.js       # Vite build setup with Tailwind plugin
├── .gitignore           # Git ignore list for untracked files
└── Readme.md            # Course overview and documentation (this file)
```

## 🛠️ Tech Stack & Dependencies

All project dependencies are declared in `package.json`:

- **React & React DOM (`v19.2.6`)**: Component state and rendering.
- **React Router DOM (`v7.17.0`)**: Single-page path routing.
- **Axios (`v1.17.0`)**: Asynchronous REST API fetching.
- **Tailwind CSS (`v4.3.0`)**: Global responsive styles.
- **Vite (`v8.0.12`)**: Dev server and compilation builder.

## 📚 Course Description

- **Course Schema**: Metadata is stored in a clean array mapping titles, duration, difficulty, and route slug IDs.
- **Lessons Dashboard**: The `/lessons` page displays interactive cards linking to individual courses.
- **Dynamic Viewer Route**: The `/lessons/:lessonId` parameter route renders the requested day component dynamically from the registry.
- **useContext (Global State)**: Demonstrates creating, providing, and consuming global context variables across nested views.

---

## ⚙️ Prerequisites

- **Advanced ES6+ JS**: API calling (fetch), Promises, timers, and DOM manipulation.
- **Tailwind CSS**: Familiarity with styling utilities.

---

## 🤝 Contributions & License

- **Contributions**: Pull requests are welcome. Feel free to open issues.
- **Queries**: Reach out via issues for any questions.
- **License**: Licensed under [MIT License](LICENSE).
