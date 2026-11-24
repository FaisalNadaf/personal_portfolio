<!-- @format -->

# Personal Portfolio

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, interactive 3D elements, and optimized performance for deployment.

## 🚀 Features

- **Modern UI/UX**: Clean design with smooth animations and transitions
- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Elements**: 3D animations, cursor effects, and micro-interactions
- **Performance Optimized**: Code splitting, lazy loading, and optimized bundles
- **SEO Ready**: Proper meta tags and structured content
- **Fast Loading**: Compressed assets and efficient chunking

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, PostCSS
- **Animations**: GSAP, React Spring
- **3D Graphics**: Three.js, React Three Fiber
- **UI Components**: Material-UI, Swiper
- **Deployment**: Vercel, Netlify, GitHub Pages

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd personal_portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Start development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Deployment

### Quick Deploy

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

### Platform-Specific Deployment

#### Vercel (Recommended)

```bash
npm run deploy:vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

#### Netlify

```bash
npm run deploy:netlify
```

Or drag the `dist` folder to Netlify's deploy area.

#### GitHub Pages

```bash
npm run deploy:gh-pages
```

Make sure to update the `homepage` field in `package.json` if deploying to a subdirectory.

## 📁 Project Structure

```
src/
├── components/
│   ├── cursor/          # Interactive cursor effects
│   ├── sections/        # Main portfolio sections
│   ├── ui/             # Reusable UI components
│   └── canvas/         # 3D canvas components
├── data/               # Static data and constants
├── utils/              # Utility functions
└── assets/             # Images and media files
```

## 🎨 Customization

1. **Personal Information**: Update `src/data/constants.js`
2. **Styling**: Modify `tailwind.config.js` and component styles
3. **Content**: Edit section components in `src/components/sections/`
4. **Images**: Replace images in `public/images/`

## 📈 Performance

- **Bundle Size**: Optimized with code splitting (~200KB main bundle)
- **Loading**: Lazy loading for sections and images
- **Caching**: Proper cache headers for static assets
- **Compression**: Gzip compression enabled

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
