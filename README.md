# Media Search Hub

<div align="center">

![React](https://img.shields.io/badge/React-19.2-61dafb?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.1-646cff?logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-2.12-764abc?logo=redux&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3-38b2ac?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)
![Node](https://img.shields.io/badge/Node-18+-339933?logo=node.js&logoColor=white)

A powerful, production-grade media discovery and collection platform that aggregates photos, videos, and GIFs from multiple premium sources into a unified, intuitive interface.

[Features](#-features) • [Quick Start](#-quick-start) • [Documentation](#-documentation) • [Deployment](#-deployment) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Quick Start](#-quick-start)
- [Configuration](#-configuration)
- [Documentation](#-documentation)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

---

## Overview

**Media Search Hub** is a modern, full-featured application for discovering and curating media content across multiple platforms. Users can seamlessly search for photos, videos, and GIFs from premium APIs (Unsplash, Pexels, Giphy) and build personal collections with persistent storage.

Built with cutting-edge technologies including React 19, Vite, Redux Toolkit, and Tailwind CSS, this application demonstrates production-level best practices in state management, component architecture, and performance optimization.

### Use Cases

- 📸 Content creators building media libraries
- 🎨 Designers sourcing reference materials
- 🎬 Video producers finding stock footage
- 🎉 Marketing teams curating visual content
- 👥 Teams collaborating on media collections

---

## ✨ Features

### Core Features

- **🔍 Unified Search**: Search across photos, videos, and GIFs with a single query
- **📁 Smart Collections**: Save and organize favorite media with persistent localStorage
- **🎯 Tab-Based Navigation**: Easy switching between photo, video, and GIF sources
- **⚡ Real-Time Loading States**: Visual feedback with loading indicators
- **🔔 Toast Notifications**: User-friendly feedback for all actions
- **🔗 Direct Media Links**: Open original content on source platforms
- **📱 Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices

### Advanced Features

- **State Persistence**: Redux with localStorage sync for collection persistence
- **Error Handling**: Comprehensive error management with user-friendly messages
- **Performance Optimized**: Lazy loading, code splitting, and efficient rendering
- **Accessibility Ready**: Semantic HTML and keyboard navigation support

---

## 🛠 Tech Stack

### Frontend Framework & Build
| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19.2 | UI library with modern hooks |
| **Vite** | 8.1 | Next-gen build tool with HMR |
| **React Router** | 8.3 | Client-side routing & navigation |

### State Management
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Redux Toolkit** | 2.12 | Predictable state management |
| **React-Redux** | 9.3 | Official React bindings |

### Styling & UI
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Tailwind CSS** | 4.3 | Utility-first CSS framework |
| **Tailwind Vite Plugin** | 4.3 | Optimized Vite integration |

### HTTP & Notifications
| Technology | Version | Purpose |
|-----------|---------|---------|
| **Axios** | 1.19 | Promise-based HTTP client |
| **React Toastify** | Latest | Toast notifications |

### Development & Quality
| Technology | Version | Purpose |
|-----------|---------|---------|
| **ESLint** | 10.6 | Code quality & consistency |
| **Vite React Plugin** | 6.0 | Fast Refresh & optimization |

---

## 📂 Project Structure

```
Redux-Project/
├── src/
│   ├── components/
│   │   ├── ResultCard.jsx          # Individual media item display with Save/Remove
│   │   ├── ResultGrid.jsx          # Grid layout for search results
│   │   ├── SearchBar.jsx           # Search input component
│   │   └── Tabs.jsx                # Media type tab switcher (photo/video/gif)
│   │
│   ├── pages/
│   │   └── CollectionPage.jsx      # Saved media collection view
│   │
│   ├── api/
│   │   └── mediaApi.js             # Multi-source API integration
│   │
│   ├── redux/
│   │   ├── store.js                # Redux store configuration
│   │   └── features/
│   │       ├── searchSlice.js      # Search state management
│   │       └── collectionSlice.js  # Collection state management
│   │
│   ├── App.jsx                     # Root component
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles & Tailwind imports
│
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies & scripts
├── vite.config.js                  # Vite configuration
├── eslint.config.js                # ESLint rules
├── tailwind.config.js              # Tailwind CSS configuration
└── README.md                       # This file
```

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:
- **Node.js** 18.0 or higher
- **npm** 9.0+ or **yarn** 3.0+
- Git for version control

Check versions:
```bash
node --version    # Should be v18.0 or higher
npm --version     # Should be v9.0 or higher
```

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/Redux-Project.git
   cd Redux-Project
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Create Environment File**
   
   Create `.env.local` in the project root:
   ```env
   VITE_UNSPLASH_KEY=your_unsplash_key_here
   VITE_PEXELS_KEY=your_pexels_key_here
   VITE_GIPHY_KEY=your_giphy_key_here
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production (generates `/dist`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality with ESLint |

---

## 🔐 Configuration

### Environment Variables

The application requires API keys from three providers:

#### 1. **Unsplash API** (Photos)
- **Get Key**: [https://unsplash.com/developers](https://unsplash.com/developers)
- **Steps**:
  1. Sign up for a free account
  2. Create an application
  3. Copy the Access Key
  4. Set `VITE_UNSPLASH_KEY=<your-key>`
- **Limits**: 50 requests/hour (free tier)

#### 2. **Pexels API** (Videos)
- **Get Key**: [https://www.pexels.com/api/](https://www.pexels.com/api/)
- **Steps**:
  1. Create a free account
  2. Request an API key
  3. Check email for approval
  4. Set `VITE_PEXELS_KEY=<your-key>`
- **Limits**: 200 requests/hour (free tier)

#### 3. **Giphy API** (GIFs)
- **Get Key**: [https://developers.giphy.com/](https://developers.giphy.com/)
- **Steps**:
  1. Sign up for a developer account
  2. Create an app
  3. Copy the API key
  4. Set `VITE_GIPHY_KEY=<your-key>`
- **Limits**: 43,200 requests/day (free tier)

### Environment File Example

```env
# .env.local
VITE_UNSPLASH_KEY=your_key_here_minimum_20_chars
VITE_PEXELS_KEY=your_key_here_minimum_20_chars
VITE_GIPHY_KEY=your_key_here_minimum_20_chars

# Optional: For production
VITE_API_TIMEOUT=10000
```

### Build Configuration

**Vite Config** (`vite.config.js`):
```javascript
export default {
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    strictPort: false,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser'
  }
}
```

---

## 📚 Documentation

### Redux State Structure

#### Search Slice (`searchSlice`)

Manages search query, results, and active media type:

```javascript
{
  search: {
    query: "cat",              // Current search query
    activeTab: "photo",        // Active tab: "photo" | "video" | "gif"
    results: [...],            // Array of media items
    loading: false,            // Loading state
    error: null                // Error message if any
  }
}
```

**Available Actions**:
- `setQuery(query)` - Set search query
- `setActiveTabs(tab)` - Switch media type
- `setLoading()` - Set loading state
- `setResults(data)` - Update results
- `setError(error)` - Set error message
- `clearResults()` - Clear results

#### Collection Slice (`collectionSlice`)

Manages saved media with localStorage persistence:

```javascript
{
  collection: {
    items: [
      {
        id: "abc123",
        type: "photo",
        title: "...",
        src: "...",
        url: "...",
        ...
      }
    ]
  }
}
```

**Available Actions**:
- `addCollection(item)` - Add media to collection
- `removeCollection(id)` - Remove media from collection
- `clearCollection(type)` - Clear all items of a type

### API Documentation

#### fetchPhotos(query, page, per_page)
Search for photos on Unsplash

**Parameters**:
| Name | Type | Default | Description |
|------|------|---------|-------------|
| query | string | required | Search term |
| page | number | 1 | Page number for pagination |
| per_page | number | 20 | Results per page (1-30) |

**Returns**: `Promise<Array>` - Array of photo objects
```javascript
[
  {
    id: "abc123",
    type: "photo",
    src: "https://...",
    url: "https://unsplash.com/photos/...",
    title: "Photo description",
    author: "Photographer name"
  }
]
```

**Example**:
```javascript
import { fetchPhotos } from './api/mediaApi';

const results = await fetchPhotos("mountain", 1, 20);
```

---

#### fetchVideos(query, per_page)
Search for videos on Pexels

**Parameters**:
| Name | Type | Default | Description |
|------|------|---------|-------------|
| query | string | required | Search term |
| per_page | number | 20 | Results per page (1-80) |

**Returns**: `Promise<Array>` - Array of video objects
```javascript
[
  {
    id: 12345,
    type: "video",
    src: "https://...",
    url: "https://pexels.com/videos/...",
    title: "Video title"
  }
]
```

---

#### fetchGifs(query, page, limit)
Search for GIFs on Giphy

**Parameters**:
| Name | Type | Default | Description |
|------|------|---------|-------------|
| query | string | required | Search term |
| page | number | 1 | Page number |
| limit | number | 20 | Results per page (1-100) |

**Returns**: `Promise<Array>` - Array of GIF objects

---

### Component API

#### ResultCard Component

Displays individual media with save/remove functionality.

**Props**:
```javascript
{
  item: {
    id: string,
    type: "photo" | "video" | "gif",
    src: string,
    url: string,
    title: string
  },
  isCollectionPage?: boolean  // Default: false
}
```

**Features**:
- Responsive grid layout
- Hover effects
- Toast notifications
- Opens original source in new tab

#### Tabs Component

Switches between media types.

**Features**:
- Active tab highlighting
- Smooth transitions
- Click handlers for tab switching

#### ResultGrid Component

Displays search results in grid format.

**Features**:
- Integrates with Redux for state
- Automatic data fetching
- Loading and error states
- Responsive layout

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

Generates optimized files in `/dist` directory:
- Minified JavaScript bundles
- Optimized CSS
- Compiled assets

### Deployment Platforms

#### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

#### GitHub Pages
```bash
# Add to package.json
"homepage": "https://yourusername.github.io/Redux-Project"

# Deploy
npm run build
npm install --save-dev gh-pages
npx gh-pages -d dist
```

#### Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
WORKDIR /app
RUN npm i -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
```

Build and run:
```bash
docker build -t media-search-hub .
docker run -p 3000:3000 media-search-hub
```

### Environment Variables for Production

Create `.env.production`:
```env
VITE_UNSPLASH_KEY=prod_unsplash_key
VITE_PEXELS_KEY=prod_pexels_key
VITE_GIPHY_KEY=prod_giphy_key
```

**Important**: Use separate API keys for production with higher rate limits.

---

## ⚡ Performance

### Optimization Techniques

- **Vite Bundle Analysis**: Monitor bundle size
  ```bash
  npm i -D vite-plugin-visualizer
  ```

- **Code Splitting**: Automatic route-based splitting with React Router

- **Lazy Loading**: Components can be lazy-loaded:
  ```javascript
  const CollectionPage = lazy(() => import('./pages/CollectionPage'));
  ```

- **Caching Strategy**:
  - Redux state caching for search results
  - LocalStorage for collection persistence
  - Browser caching headers in production

### Performance Metrics

Target metrics (Lighthouse):
- **Performance**: > 90
- **Accessibility**: > 90
- **Best Practices**: > 90
- **SEO**: > 90

Measure with:
```bash
npm i -D lighthouse-ci
```

---

## 🐛 Troubleshooting

### API Key Issues

**Problem**: "401 Unauthorized" errors
```
Solution:
- Verify keys are in .env.local
- Check key hasn't expired
- Ensure no leading/trailing spaces
- Verify key has appropriate permissions
```

**Problem**: Rate limit exceeded
```
Solution:
- Implement request debouncing
- Add request caching
- Upgrade to paid API tier
```

### Development Issues

**Port Already in Use**
```bash
# Use different port
npm run dev -- --port 3000

# Or kill process on port 5173
lsof -i :5173
kill -9 <PID>
```

**Module Not Found Errors**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Build Fails**
```bash
# Clear build cache
rm -rf dist
npm run build

# Check for ESLint errors
npm run lint
```

### Redux DevTools

Install Redux DevTools Extension:
- [Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/)
- [Firefox Extension](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)

Monitor state changes in real-time during development.

---

## 🤝 Contributing

### Getting Started

1. **Fork the repository**
   ```bash
   git clone https://github.com/yourusername/Redux-Project.git
   cd Redux-Project
   ```

2. **Create feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make changes and test**
   ```bash
   npm run dev
   npm run lint
   ```

4. **Commit with semantic messages**
   ```bash
   git commit -m "feat: add amazing feature"
   # Types: feat, fix, docs, style, refactor, test, chore
   ```

5. **Push and open PR**
   ```bash
   git push origin feature/amazing-feature
   ```

### Code Standards

- **Style Guide**: Follow existing code patterns
- **Naming**: camelCase for functions/variables, PascalCase for components
- **Components**: Keep small and focused (< 200 lines)
- **Comments**: Document complex logic only
- **Commits**: Use conventional commit format

### Pull Request Checklist

- [ ] Code follows project style guide
- [ ] ESLint passes (`npm run lint`)
- [ ] Changes tested locally
- [ ] Commit messages are descriptive
- [ ] No console errors or warnings
- [ ] Updated documentation if needed

---

## 📄 License

This project is licensed under the **MIT License** - see [LICENSE](LICENSE) file for details.

### MIT License Summary
- ✅ Use commercially
- ✅ Modify source code
- ✅ Distribute
- ❌ Hold liable
- ❌ Use trademark

---

## 📞 Support & Community

- **Issues**: [GitHub Issues](https://github.com/yourusername/Redux-Project/issues)
- **Discussions**: [GitHub Discussions](https://github.com/yourusername/Redux-Project/discussions)
- **Email**: support@yourdomain.com

---

## 🗺️ Roadmap

### Upcoming Features
- [ ] User authentication & accounts
- [ ] Cloud sync for collections
- [ ] Advanced search filters
- [ ] Download capabilities
- [ ] Share collections feature
- [ ] Dark/Light theme toggle
- [ ] Multiple language support
- [ ] Mobile app (React Native)

### Known Limitations
- Free API tiers have rate limits
- No offline functionality currently
- Collections stored locally only

---

## 📊 Project Statistics

- **React Components**: 4 main components
- **Redux Slices**: 2 (search, collection)
- **Supported APIs**: 3 (Unsplash, Pexels, Giphy)
- **Bundle Size**: ~250KB (gzipped)
- **Last Updated**: 2026-08-17
- **Node.js Minimum**: v18.0
- **npm Minimum**: v9.0

---

<div align="center">

Made with ❤️ by the team

[⬆ Back to top](#media-search-hub)

</div>
