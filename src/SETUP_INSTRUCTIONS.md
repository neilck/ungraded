# Ungraded AI Website - Setup Instructions

## Required Dependencies

This project requires the following npm package to be installed:

```bash
npm install react-router-dom
```

Or if you're using yarn:

```bash
yarn add react-router-dom
```

## Project Structure

The website consists of 4 main pages:

1. **Home** (`/`) - Landing page for educational institutions
2. **About** (`/about`) - Company mission, team, and values
3. **Roadmap** (`/roadmap`) - Product development timeline and features
4. **Resources** (`/resources`) - Guides, case studies, and learning materials

## Features Implemented

### Navigation
- Sticky navigation that appears after scrolling 100px
- Smooth page transitions
- Mobile-responsive hamburger menu
- Active page highlighting

### Animations
- Scroll-triggered animations using Motion (Framer Motion)
- Parallax background effects
- Floating animated shapes
- Hover micro-interactions on cards and buttons

### Performance
- Image skeleton loading states
- Lazy loading for images
- Smooth scroll behavior

### Design System
- Fonts: Poppins (headings), Inter (body)
- Color Palette:
  - Primary Blue: #2D70C9
  - Light Blue: #EAF2FB
  - Text: #1A1A1A
  - Background: #FFFFFF
- Fully responsive (mobile, tablet, desktop)

## Development

Run the development server:

```bash
npm run dev
```

## Components

### Shared Components
- `Navigation` - Sticky header with routing
- `Footer` - Site-wide footer with links
- `ScrollProgress` - Top progress bar
- `ScrollToTop` - Floating back-to-top button
- `FloatingShapes` - Animated background elements
- `ParallaxSection` - Parallax wrapper component
- `ImageWithSkeleton` - Images with loading states

### Card Components
- `ValueCard` - Mission/values cards
- `StatCard` - Statistics with icons
- `TeamCard` - Team member profiles
- `FeatureCard` - Feature highlights

## Pages Overview

### Home Page
- Hero with CTA buttons
- Features grid (6 features)
- How It Works (4 steps)
- Testimonials (3 cards)
- CTA section

### About Page
- Hero section
- Mission & Values (4 cards)
- Our Story with timeline
- Impact statistics
- Team profiles (2 founders)
- Differentiation (4 cards)
- CTA section

### Roadmap Page
- Timeline view by quarter
- Status badges (Completed, In Progress, Planned)
- Feature cards with icons
- Feedback request section

### Resources Page
- Search functionality
- Category filters (All, Guides, Videos, Case Studies, Blog)
- Resource cards with images
- Newsletter signup

## Customization

To customize the content, edit the respective page files in `/pages/`:
- `/pages/Home.tsx`
- `/pages/About.tsx`
- `/pages/Roadmap.tsx`
- `/pages/Resources.tsx`

To modify the design system, update `/styles/globals.css`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript enabled
