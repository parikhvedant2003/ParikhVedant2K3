# Overview

This is a personal portfolio website for Vedant Parikh, a Software Engineer specializing in Python development, AI/ML, and backend systems. The application showcases his professional experience, skills, projects, and achievements through a modern, responsive single-page application. The portfolio serves as both a professional showcase and a contact platform for potential employers and collaborators.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/UI component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: TanStack React Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints for contact form submission and resume downloads
- **Error Handling**: Centralized error middleware with structured error responses
- **Logging**: Custom request logging middleware for API endpoints

## Data Storage Solutions
- **Database ORM**: Drizzle ORM with PostgreSQL dialect configured
- **Schema Management**: Type-safe database schemas with Zod validation
- **Migrations**: Drizzle Kit for database migrations and schema changes
- **Development Storage**: In-memory storage implementation for development/testing
- **Session Storage**: PostgreSQL session store with connect-pg-simple

## Design System
- **Component Library**: Comprehensive UI components from Shadcn/UI
- **Theme System**: CSS custom properties for light/dark mode support
- **Typography**: Inter and Source Sans Pro fonts with semantic font families
- **Icons**: Lucide React icons with React Icons for brand/social icons
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## Performance Optimizations
- **Code Splitting**: Vite's automatic code splitting for optimal loading
- **Asset Optimization**: Optimized font loading with preconnect hints
- **SEO**: Comprehensive meta tags, OpenGraph data, and semantic HTML
- **Development Tools**: Hot module replacement and runtime error overlays

# External Dependencies

## Database & Storage
- **Neon Database**: Serverless PostgreSQL database (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **Session Store**: PostgreSQL-based session management

## UI & Styling
- **Radix UI**: Accessible component primitives for complex UI components
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **Class Variance Authority**: Component variant management
- **Embla Carousel**: Touch-friendly carousel component

## Development & Build Tools
- **Vite**: Build tool with React plugin and development server
- **TypeScript**: Static type checking and enhanced developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment plugins and error handling

## Form & Validation
- **React Hook Form**: Performant form library with validation
- **Hookform Resolvers**: Validation resolver integration
- **Zod**: Runtime type validation and schema definition

## Communication & Analytics
- **Contact Form**: Server-side form processing with email integration readiness
- **Social Integration**: LinkedIn, GitHub, Twitter, and Instagram links
- **Resume Download**: PDF resume serving capability

## Fonts & Icons
- **Google Fonts**: Inter and Source Sans Pro font families
- **Lucide React**: Consistent icon library for UI elements
- **React Icons**: Brand and social media icons