# Portfolio Website

A modern, responsive portfolio website built with React and Node.js, featuring smooth animations, interactive components, and a professional design.

## Features

- 🎨 **Modern Design**: Clean and professional UI with smooth animations
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast Performance**: Optimized with modern React practices
- 🎭 **Smooth Animations**: Framer Motion animations for engaging user experience
- 🎯 **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- 🔧 **Full Stack**: Node.js backend with Express server
- 🎨 **Styled Components**: Modern CSS-in-JS styling approach

## Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Styled Components** - CSS-in-JS styling solution
- **Framer Motion** - Animation library for React
- **React Icons** - Icon library for React
- **React Router** - Client-side routing

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **CORS** - Cross-origin resource sharing
- **Helmet** - Security middleware
- **Compression** - Response compression

## Project Structure

```
portfolio/
├── client/                 # React frontend
│   ├── public/            # Static files
│   ├── src/               # Source code
│   │   ├── components/    # React components
│   │   ├── App.js         # Main App component
│   │   └── index.js       # Entry point
│   └── package.json       # Frontend dependencies
├── server/                 # Node.js backend
│   └── index.js           # Express server
├── package.json            # Root package.json
└── README.md              # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   # Install root dependencies
   npm install
   
   # Install frontend dependencies
   cd client && npm install
   
   # Return to root
   cd ..
   ```

3. **Start the development servers**
   ```bash
   # Start both frontend and backend
   npm run dev
   
   # Or start them separately:
   npm run server    # Backend only
   npm run client    # Frontend only
   ```

4. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:5000

### Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run server` - Start only the backend server
- `npm run client` - Start only the frontend development server
- `npm run build` - Build the frontend for production
- `npm start` - Start the production server
- `npm run install-all` - Install all dependencies (root + client)

## Development

### Frontend Development

The React application is located in the `client/` directory. Key features include:

- **Component-based architecture** with reusable components
- **Styled Components** for maintainable CSS
- **Framer Motion** for smooth animations
- **Responsive design** with mobile-first approach
- **Modern React patterns** using hooks and functional components

### Backend Development

The Node.js server is located in the `server/` directory. Features include:

- **Express.js** server with middleware
- **CORS support** for cross-origin requests
- **Security headers** with Helmet
- **Response compression** for better performance
- **Static file serving** for the React build

### Styling

The project uses **Styled Components** for styling:

- **Component-scoped styles** that don't conflict
- **Dynamic styling** based on props and state
- **Theme support** for consistent design
- **Responsive design** with media queries

### Animations

**Framer Motion** is used for animations:

- **Smooth transitions** between states
- **Scroll-triggered animations** for better UX
- **Hover effects** for interactive elements
- **Performance optimized** animations

## Customization

### Colors and Theme

Update the color scheme by modifying the styled components in each component file. The main colors used are:

- Primary: `#2563eb` (Blue)
- Secondary: `#667eea` (Purple)
- Text: `#1e293b` (Dark)
- Background: `#f8fafc` (Light)

### Content

Update the content by modifying the data in each component:

- **Hero section**: Update title, subtitle, and description
- **About section**: Modify personal information and stats
- **Skills section**: Update skill percentages and technologies
- **Projects section**: Add your own projects and descriptions
- **Contact section**: Update contact information

### Styling

Customize the design by modifying the styled components:

- **Layout**: Adjust grid layouts and spacing
- **Typography**: Update fonts, sizes, and weights
- **Animations**: Modify animation durations and effects
- **Responsive**: Adjust breakpoints and mobile layouts

## Deployment

### Frontend Build

1. **Build the React app**
   ```bash
   npm run build
   ```

2. **The build files will be in `client/build/`**

### Backend Deployment

1. **Set environment variables**
   ```bash
   PORT=5000
   NODE_ENV=production
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

### Deployment Options

- **Heroku**: Easy deployment with Git integration
- **Vercel**: Great for frontend deployment
- **Netlify**: Excellent for static sites
- **AWS**: Scalable cloud deployment
- **DigitalOcean**: VPS deployment

## Performance Optimization

- **Code splitting** with React.lazy()
- **Image optimization** with proper sizing and formats
- **Lazy loading** for components and images
- **Minification** of CSS and JavaScript
- **Gzip compression** on the server
- **CDN usage** for static assets

## Browser Support

- **Chrome** (latest)
- **Firefox** (latest)
- **Safari** (latest)
- **Edge** (latest)
- **Mobile browsers** (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

If you have any questions or need help:

- Create an issue in the repository
- Contact: contact@example.com
- Documentation: Check the component files for implementation details

---
