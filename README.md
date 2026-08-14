# Media Search Application

A modern, high-performance React application for searching and managing media across multiple sources (photos, videos, and GIFs) using a unified interface. Built with Vite, Redux Toolkit, and Tailwind CSS.

## Overview

This application provides seamless access to multiple media APIs through a single search interface:

- **Photos**: Powered by [Unsplash API](https://unsplash.com/developers)
- **Videos**: Powered by [Pexels API](https://www.pexels.com/api/)
- **GIFs**: Powered by [Giphy API](https://developers.giphy.com/)

## Features

- 🔍 **Unified Search**: Search across photos, videos, and GIFs with a single query
- 🎨 **Responsive Design**: Fully responsive UI built with Tailwind CSS
- ⚡ **Fast Performance**: Vite for lightning-fast dev server and optimized builds
- 🔄 **State Management**: Redux Toolkit for predictable, scalable state management
- 📦 **Modern Stack**: React 19, Vite 8, Redux Toolkit 2
- 🎯 **Production-Ready**: ESLint configuration and best practices included

## Tech Stack

### Frontend Framework

- **React 19.2**: Latest React with modern hooks and features
- **Vite 8**: Next-generation build tool with instant HMR
- **React Router 8**: Client-side routing

### State Management

- **Redux Toolkit 2.12**: Simplified Redux with built-in thunks and middleware
- **React-Redux 9.3**: Official React bindings for Redux

### Styling

- **Tailwind CSS 4.3**: Utility-first CSS framework
- **Tailwind CSS Vite Plugin 4.3**: Optimized Vite integration

### API & HTTP

- **Axios 1.19**: Promise-based HTTP client

### Development Tools

- **ESLint 10**: Code quality and consistency
- **Vite Plugins**: React Fast Refresh for HMR

## Project Structure

```
├── src/
│   ├── components/          # Reusable React components
│   │   ├── ResultCard.jsx   # Individual media result card
│   │   ├── ResultGrid.jsx   # Grid container for results
│   │   ├── SearchBar.jsx    # Search input component
│   │   └── Tabs.jsx         # Tab switcher for media types
│   ├── pages/               # Page components
│   │   └── CollectionPage.jsx  # Media collection view
│   ├── api/
│   │   └── mediaApi.js      # API integration layer
│   ├── redux/               # State management
│   │   ├── store.js         # Redux store configuration
│   │   └── features/        # Redux slices
│   │       ├── searchSlice.js
│   │       └── collectionSlice.js
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── package.json             # Dependencies and scripts
├── vite.config.js          # Vite configuration
├── eslint.config.js        # ESLint rules
└── README.md               # This file
```

## Getting Started

### Prerequisites

- **Node.js**: v18.0 or higher
- **npm**: v9.0 or higher (or yarn/pnpm)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Redux-Project
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the project root:

   ```env
   VITE_UNSPLASH_KEY=your_unsplash_api_key
   VITE_PEXELS_KEY=your_pexels_api_key
   VITE_GIPHY_KEY=your_giphy_api_key
   ```

   **Get API Keys:**
   - [Unsplash API](https://unsplash.com/developers) - Free tier available
   - [Pexels API](https://www.pexels.com/api/) - Free API key
   - [Giphy API](https://developers.giphy.com/) - Free tier available

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Optimize and bundle for production:

```bash
npm run build
```

Output will be generated in the `dist/` directory.

### Preview Production Build

Test the production build locally:

```bash
npm run preview
```

### Linting

Check code quality and consistency:

```bash
npm run lint
```

## API Integration

### Media API Functions

All API functions are located in [src/api/mediaApi.js](src/api/mediaApi.js):

#### fetchPhotos(query, page, per_page)

Fetches photos from Unsplash API

- **Parameters:**
  - `query` (string): Search term
  - `page` (number): Page number (default: 1)
  - `per_page` (number): Results per page (default: 20)
- **Returns:** Array of photo objects

#### fetchVideos(query, per_page)

Fetches videos from Pexels API

- **Parameters:**
  - `query` (string): Search term
  - `per_page` (number): Results per page (default: 20)
- **Returns:** Array of video objects

#### fetchGifs(query, page, limit)

Fetches GIFs from Giphy API

- **Parameters:**
  - `query` (string): Search term
  - `page` (number): Page number (default: 1)
  - `limit` (number): Results per page (default: 20)
- **Returns:** Array of GIF objects

## Redux Store Architecture

The Redux store is configured in [src/redux/store.js](src/redux/store.js) using Redux Toolkit's `configureStore`:

### Slices (Currently Available)

- **searchSlice**: Search query and filters state
- **collectionSlice**: Media collection and favorites management

### Adding New Reducers

To add a new reducer:

```javascript
import { createSlice } from "@reduxjs/toolkit";

const mySlice = createSlice({
  name: "myFeature",
  initialState: {},
  reducers: {
    // Define actions here
  },
});

export default mySlice.reducer;
```

Then import and add to store:

```javascript
import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./features/mySlice";

export const store = configureStore({
  reducer: {
    myFeature: myReducer,
  },
});
```

## Components

### ResultCard

Displays individual media results with metadata and actions.

### ResultGrid

Container component for rendering multiple result cards in a grid layout.

### SearchBar

Input component for user search queries with filtering options.

### Tabs

Navigation component to switch between media types (photos, videos, GIFs).

## Styling

The project uses **Tailwind CSS** for all styling. Key configuration files:

- `tailwind.config.js`: Tailwind configuration
- `src/index.css`: Global styles and Tailwind directives

### Class Naming Convention

Follow Tailwind's utility-first approach:

```jsx
<button className="px-4 py-2 bg-green-400 text-white rounded hover:bg-green-500">
  Click me
</button>
```

## Environment Variables

The application uses environment variables for sensitive API keys. These should never be committed to version control.

### Available Variables

| Variable            | Description             |
| ------------------- | ----------------------- |
| `VITE_UNSPLASH_KEY` | Unsplash API access key |
| `VITE_PEXELS_KEY`   | Pexels API access key   |
| `VITE_GIPHY_KEY`    | Giphy API access key    |

### Loading Environment Variables

Environment variables are accessed via `import.meta.env` in Vite:

```javascript
const API_KEY = import.meta.env.VITE_API_KEY;
```

## Performance Optimization

- ✅ **Vite**: Optimized build process with tree-shaking
- ✅ **Code Splitting**: Automatic route-based code splitting with React Router
- ✅ **Lazy Loading**: Components and routes can be lazy-loaded as needed
- ✅ **Image Optimization**: Use external CDNs from media APIs
- ✅ **Caching**: Redux state persists search results

## Best Practices

1. **API Keys**: Never commit `.env.local` to version control
2. **Error Handling**: Implement try-catch blocks for API calls
3. **Loading States**: Use Redux to manage loading and error states
4. **Component Reusability**: Create small, focused components
5. **Naming Conventions**: Use camelCase for variables/functions, PascalCase for components

## Development Workflow

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make changes and test locally: `npm run dev`
3. Run linter: `npm run lint`
4. Commit changes: `git commit -m "feat: add my feature"`
5. Push to remote: `git push origin feature/my-feature`
6. Open a pull request

## Troubleshooting

### API Key Issues

- Verify `.env.local` file is in the project root
- Ensure API keys are correctly set in environment variables
- Check that API services are not rate-limited

### Port Already in Use

```bash
# Change the default port
npm run dev -- --port 3000
```

### Build Issues

- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Clear cache: `rm -rf dist && npm run build`

## Contributing

1. Follow the existing code style
2. Run `npm run lint` before committing
3. Write meaningful commit messages
4. Test changes thoroughly before submitting

## License

This project is licensed under the MIT License - see LICENSE file for details.

## Support

For issues, questions, or suggestions, please open an issue in the repository.

---

**Last Updated**: 2024
**Node Version**: v18.0+
**Package Manager**: npm v9.0+
