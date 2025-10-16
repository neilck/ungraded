# Ungraded AI - Complete Website

A modern, professional website for Ungraded AI, an EdTech startup helping educators give meaningful feedback at scale.

## 🌟 Features

### Multi-Page Application
- **Home** - Landing page showcasing product value and features
- **About** - Company mission, team, and values  
- **Roadmap** - Product development timeline with Q1-Q4 2025 features
- **Resources** - Filterable guides, case studies, and blog posts

### Design & UX
- ✨ Smooth scroll animations with Motion (Framer Motion)
- 🎨 Modern, minimalist design inspired by Thinkific and Duolingo for Schools
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎯 Sticky navigation with scroll detection
- 🔄 Parallax background effects
- 💫 Floating animated shapes
- ⚡ Image skeleton loading states
- 🎪 Micro-interactions on hover

### Technical Features
- React with TypeScript
- React Router for navigation
- Motion for animations
- Tailwind CSS for styling
- Shadcn/ui components
- Custom fonts (Poppins + Inter)

## 🎨 Design System

### Colors
```
Primary Blue: #2D70C9
Light Blue: #EAF2FB  
Text: #1A1A1A
Background: #FFFFFF
```

### Typography
```
Headings: Poppins (400, 500, 600, 700)
Body: Inter (400, 500, 600)
```

### Spacing
```
Section padding: 120px (desktop), responsive on mobile
Column grid: 12 columns
Margins: 80px
```

## 📁 File Structure

```
/
├── App.tsx                      # Main app with routing
├── pages/
│   ├── Home.tsx                 # Landing page
│   ├── About.tsx                # About page  
│   ├── Roadmap.tsx              # Product roadmap
│   └── Resources.tsx            # Resources & blog
├── components/
│   ├── Navigation.tsx           # Sticky nav with routing
│   ├── Footer.tsx               # Site footer
│   ├── ScrollProgress.tsx       # Top progress bar
│   ├── ScrollToTop.tsx          # Back to top button
│   ├── FloatingShapes.tsx       # Animated backgrounds
│   ├── ParallaxSection.tsx      # Parallax wrapper
│   ├── ImageWithSkeleton.tsx    # Images with loading
│   ├── ValueCard.tsx            # Mission/values cards
│   ├── StatCard.tsx             # Statistics cards
│   ├── TeamCard.tsx             # Team member cards
│   ├── FeatureCard.tsx          # Feature cards
│   └── ui/                      # Shadcn components
└── styles/
    └── globals.css              # Global styles & fonts
```

## 🚀 Setup

### 1. Install Dependencies

```bash
npm install react-router-dom
```

### 2. Run Development Server

```bash
npm run dev
```

### 3. Build for Production

```bash
npm run build
```

## 📄 Page Details

### Home Page (`/`)
**Sections:**
- Hero with value proposition + CTA
- Features grid (6 cards)
- How It Works (4 steps)
- Testimonials (3 educator quotes)
- Final CTA section

**Key Features:**
- Parallax hero background
- Animated feature cards
- Timeline visualization
- Trust indicators

### About Page (`/about`)
**Sections:**
- Hero introduction
- Mission & Values (4 core values)
- Our Story (founders + timeline)
- Impact statistics
- Team profiles (2 co-founders)
- Differentiation (4 unique aspects)
- CTA section

**Key Features:**
- Founder photos with hover effects
- Animated timeline (Idea → Prototype → Movement)
- Statistics with animated counters
- Testimonial with quote icon

### Roadmap Page (`/roadmap`)
**Sections:**
- Hero with status legend
- Q1-Q4 2025 timeline
- Feature cards per quarter
- Feedback request CTA

**Key Features:**
- Status badges (Completed, In Progress, Planned)
- Icon-based feature cards
- Visual timeline with connecting lines
- Hover animations on cards

**Roadmap Content:**
- **Q3 2025 - July-September** (Completed): UBC Venture program, core platform, learning objectives, AI pre-grading, student submissions & feedback, AI chat
- **Q4 2025 - October** (In Progress): Interactive assessment, enhanced reports, submission verification, re-submission support
- **Q4 2025 - November** (Planned): Student summary view, automated billing, community accounts, paid accounts
- **Q4 2025/Q1 2026 - Dec-Jan** (Planned): LMS integration, learning objectives approval, class-level reporting, IP marketplace

### Resources Page (`/resources`)
**Sections:**
- Hero with search bar
- Category filters
- Resource cards grid
- Newsletter signup

**Key Features:**
- Live search filtering
- Category tabs (All, Guides, Videos, Case Studies, Blog)
- Resource cards with images
- Read time indicators
- Empty state handling

**Categories:**
- **Guides** - How-to articles and best practices
- **Videos** - Tutorial videos and walkthroughs  
- **Case Studies** - Success stories from educators
- **Blog** - Thought leadership and insights

## 🎯 Key Components

### Navigation
- Appears after 100px scroll
- Highlights active page
- Mobile hamburger menu
- Links to all pages + CTA button

### Footer
- 4 column layout (Product, Company, Resources, Legal)
- Links to all main pages
- Brand tagline
- Copyright info

### Animations
- **Scroll-triggered**: Elements fade in as you scroll
- **Parallax**: Background shapes move at different speeds
- **Floating**: Continuous gentle motion
- **Hover**: Scale, lift, and rotation effects
- **Page transitions**: Smooth route changes

### Loading States
- Skeleton screens for images
- Smooth fade-in when loaded
- Error handling for failed loads

## 🎨 Customization

### Update Content
Edit the respective page files:
- `/pages/Home.tsx` - Landing page content
- `/pages/About.tsx` - Company info
- `/pages/Roadmap.tsx` - Product timeline
- `/pages/Resources.tsx` - Blog posts and resources

### Update Styles
- Colors: `/styles/globals.css` (CSS variables)
- Components: Individual component files
- Shadcn: `/components/ui/*`

### Add New Pages
1. Create new file in `/pages/`
2. Add route in `/App.tsx`
3. Add navigation link in `/components/Navigation.tsx`
4. Add footer link in `/components/Footer.tsx`

## 🔧 Technologies

- **React** - UI library
- **TypeScript** - Type safety
- **React Router** - Client-side routing
- **Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS
- **Shadcn/ui** - Component library
- **Lucide React** - Icon library
- **Vite** - Build tool

## 📱 Responsive Breakpoints

```
Mobile: < 640px
Tablet: 640px - 1024px  
Desktop: > 1024px
```

All components use responsive design with:
- Fluid typography (clamp())
- Responsive grids
- Mobile-first approach
- Touch-friendly interactions

## ✨ Best Practices

- **Performance**: Images use skeleton loading, lazy loading
- **Accessibility**: Semantic HTML, keyboard navigation
- **SEO**: Proper heading hierarchy, meta tags ready
- **Code Quality**: TypeScript, component reusability
- **UX**: Smooth animations, clear CTAs, intuitive navigation

## 📊 Content Statistics

- **4 Pages** (Home, About, Roadmap, Resources)
- **6 Features** on home page
- **4 Values** in mission
- **3 Testimonials** from educators
- **16 Roadmap Items** across 4 quarters
- **9 Resource Articles** with filtering

## 🎓 Educational Focus

The website emphasizes:
- **Trust** in AI technology
- **Educator-first** design philosophy
- **Ethical AI** usage
- **Real understanding** over grades
- **Time savings** for teachers
- **Student growth** tracking

## 📞 Support

For questions or issues, refer to:
- SETUP_INSTRUCTIONS.md for detailed setup
- Component files for implementation details
- Shadcn documentation for UI components

---

**Built with ❤️ for educators by educators**

© 2025 Ungraded AI · Vancouver · Bangalore
