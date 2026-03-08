# Complete README.md for Your SagaScape React App

# SagaScape - Old Norse Reading Web Application

## Overview

I am about both historical linguistics and modern software development. I created SagaScape to explore how ancient texts can be made accessible through interactive web technologies. This project represents my journey in mastering React with TypeScript while building a tool that brings Old Norse literature to life for modern readers.

SagaScape is a responsive single-page web application that allows users to read Old Norse texts with interactive word definitions. The app features a clean, intuitive interface where users can click any Old Norse word to instantly see its English meaning this simulates the experience of reading with a digital dictionary at hand.

### Running the Application

To run SagaScape locally on your computer:

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/sagascape-web.git
   cd sagascape-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **View the application**
   Open your web browser and navigate to `http://localhost:3000`

The development server supports hot-reloading, so any changes you make to the code will automatically update in the browser.

### Purpose

My primary goals in building this software were:
- **Deepen React expertise**: Move beyond tutorials by building a complete, functional application with routing and state management
- **Master TypeScript in React**: Implement strict typing, interfaces, and type-safe components
- **Create an educational tool**: Build something that could actually help people learn Old Norse
- **Practice responsive design**: Ensure the application works seamlessly across desktop, tablet, and mobile devices

[Software Demo Video](https://youtu.be/ES7vUkfUDsY) *(YouTube link)*

## 2 Web Pages

### Home Page (`/`)
The landing page serves as an inviting entry point to the application:
- **Hero section**: Features a prominent headline and call-to-action button
- **Navigation bar**: Contains the SagaScape logo and "Start Reading" button
- **Feature cards**: Three dynamically rendered cards highlighting key features:
    - "Original Texts" - Read the Poetic Edda in Old Norse
    - "Click Any Word" - Instant definitions while reading
    - "Responsive Design" - Study on any device
- **Dynamic elements**: The feature cards are generated programmatically from an array of data, demonstrating React's component composition

### Reader Page (`/reader`)
The main reading interface where users interact with Old Norse text:
- **Text display**: Shows the first stanza of Völuspá (The Prophecy of the Seeress) with each word rendered as an interactive element
- **Word click handling**: When a user clicks any Old Norse word:
    - A popup appears showing the English definition
    - The popup automatically disappears after 2 seconds
    - Visual feedback highlights the clicked word
- **Navigation**: Includes a "Home" link to return to the landing page
- **Mobile optimization**: Features a floating hint (👆 Tap words) on mobile devices
- **Dynamic content**: All words are mapped from a TypeScript array, making it easy to expand to longer texts

### Page Transitions
The application uses React Router for seamless client-side routing:
- Clicking "Start Reading" or "Begin Your Journey" smoothly transitions from Home to Reader
- The "Home" link on the Reader page returns users to the landing page
- All transitions occur without page reloads, creating a fluid single-page application experience

## Development Environment

### Tools
- **VS Code**: Primary code editor with TypeScript support and ESLint integration
- **Git & GitHub**: Version control and repository hosting
- **Chrome DevTools**: Testing and debugging responsive design
- **Terminal**: Running development server and package management

### Programming Language & Libraries

**Core Technologies:**
- **TypeScript**: Ensures type safety throughout the application with interfaces for data models and component props
- **React 18**: Component-based UI library for building interactive user interfaces
- **React Router 6**: Handles client-side routing between pages

**Styling & UI:**
- **Tailwind CSS**: Utility-first CSS framework for rapid, responsive design
- **Custom CSS animations**: Fade-in effects and hover states for enhanced user experience

**Development Tools:**
- **Create React App**: Bootstrapped the project with optimal configuration
- **npm**: Package management and script running

## Useful Websites

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/) - Essential reference for combining React with TypeScript
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Comprehensive guide to utility classes and responsive design
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial) - Excellent tutorial for implementing navigation
- [Old Norse Online](https://lrc.la.utexas.edu/eieol/norol) - University of Texas linguistics resources for Old Norse definitions
- [CSS Tricks - Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - Invaluable for responsive layouts
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react-typescript) - Community solutions to React+TypeScript challenges

## Future Work

While the current MVP successfully demonstrates core functionality, several enhancements would make SagaScape more powerful:

- **Full Dictionary Integration**: Connect to the Cleasby-Vigfusson Old Norse dictionary API for comprehensive word definitions
- **Multiple Texts**: Add more Eddas and Sagas (Hávamál, Grímnismál, Egil's Saga) with a text selector dropdown
- **User Accounts**: Implement authentication so users can save their reading progress and favorite words
- **Highlighting System**: Allow users to highlight passages and add personal notes (reusing the PostgreSQL database from Module 3)
- **Dark/Light Theme**: Add theme toggle for comfortable reading in different lighting conditions
- **Audio Pronunciation**: Include audio clips of Old Norse words spoken by linguistics experts
- **Translation Comparison**: Side-by-side view of multiple English translations
- **Study Dashboard**: Track reading statistics and vocabulary learning progress
- **Offline Support**: Implement Progressive Web App features for offline reading
- **Performance Optimization**: Lazy load longer texts and implement virtual scrolling
