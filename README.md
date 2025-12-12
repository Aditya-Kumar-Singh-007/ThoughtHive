# ThoughtHive 🧠✨

**Your personal digital space for capturing ideas, organizing tasks, and preserving memories**

ThoughtHive is a modern, responsive note-taking application built with React and Node.js, featuring a beautiful interactive 3D background and seamless user experience across all devices.

## 🌟 Features

- **📝 Create & Edit Notes** - Add, edit, and delete notes with tags
- **🔐 User Authentication** - Secure login and signup with JWT
- **🌓 Dark/Light Mode** - Toggle between themes with system preference detection
- **📱 Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **🎨 Interactive 3D Background** - Beautiful animated ballpit using Three.js
- **⚡ Real-time Updates** - Instant note synchronization
- **🔍 Clean UI/UX** - Modern glass-morphism design with smooth animations
- **🏷️ Note Organization** - Tag-based categorization system
- **🔒 Secure Storage** - Encrypted password storage with bcrypt

## 🚀 Live Demo

- **Frontend**: [Deploy on Netlify](https://thoughthive.netlify.app)
- **Backend**: [https://thoughthive-backend.onrender.com](https://thoughthive-backend.onrender.com)

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - Modern UI library with latest features
- **React Router 7.9.5** - Client-side navigation
- **Three.js 0.182.0** - 3D interactive background
- **CSS3** - Glass-morphism styling with modern features
- **Context API** - Global state management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **JWT** - Token-based authentication
- **bcrypt** - Password hashing

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB database

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Aditya-Kumar-Singh-007/thoughthive.git
   cd thoughthive
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file in the root directory:
   ```env
   REACT_APP_API_BASE_URL=https://thoughthive-backend.onrender.com
   REACT_APP_DEVELOPER_NAME=Aditya Kumar Singh
   REACT_APP_DEVELOPER_EMAIL=2604aditya@gmail.com
   REACT_APP_GITHUB_URL=https://github.com/Aditya-Kumar-Singh-007
   REACT_APP_LINKEDIN_URL=https://www.linkedin.com/in/aditya-kumar-singh2604
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🌐 Deployment

### Frontend (Netlify)
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Set environment variables in Netlify dashboard
4. Add `_redirects` file for SPA routing

### Backend (Render)
- Backend is deployed at: `https://thoughthive-backend.onrender.com`
- Supports CORS for frontend integration

## 📱 Responsive Design

ThoughtHive is fully responsive with:
- **Desktop**: Full navbar with all features visible
- **Tablet**: Optimized layout with touch-friendly elements  
- **Mobile**: Hamburger menu navigation, optimized touch interactions
- **Interactive Background**: Touch-responsive 3D spheres on all devices

## 🎨 Design Features

- **Glass Morphism**: Modern translucent design elements with backdrop blur
- **Interactive 3D Background**: Physics-based animated spheres using Three.js
- **Smooth Animations**: CSS transitions and transforms throughout
- **Theme Support**: Dark and light mode with automatic system detection
- **Typography**: Custom font stack (Poppins, Inter, Nunito) for optimal readability
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

## 🔧 Available Scripts

- `npm start` - Run development server (port 3000)
- `npm run build` - Build optimized production bundle
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

## 📂 Project Structure

```
thoughthive/
├── public/
│   ├── index.html
│   ├── light.png          # Light theme toggle icon
│   ├── dark.png           # Dark theme toggle icon
│   ├── notebook.png       # App favicon
│   ├── edit.png           # Edit button icon
│   ├── delete.png         # Delete button icon
│   └── _redirects         # Netlify SPA routing
├── src/
│   ├── components/
│   │   ├── About.js       # About page with features
│   │   ├── Home.js        # Landing page
│   │   ├── Login.js       # Authentication form
│   │   ├── SignUp.js      # User registration
│   │   ├── Navbar.js      # Navigation with theme toggle
│   │   ├── ViewNote.js    # Notes display grid
│   │   ├── WriteNote.js   # Note creation form
│   │   ├── NoteItem.js    # Individual note card
│   │   ├── EditNoteBox.js # Edit note modal
│   │   ├── NoteModal.js   # View note modal
│   │   ├── NoteSubmitModal.js # Success modal
│   │   └── Loader.js      # Loading spinner
│   ├── context/
│   │   └── notes/
│   │       ├── NoteState.js    # State management
│   │       └── notesContext.js # React Context
│   ├── App.js             # Main app component
│   ├── App.css            # Global styles
│   ├── Ballpit.jsx        # Three.js background
│   └── index.js           # App entry point
├── .env                   # Environment variables
├── .env.example          # Environment template
├── package.json          # Dependencies
└── README.md             # This file
```

## 🔒 Security Features

- **JWT Authentication** - Secure token-based auth
- **Password Hashing** - bcrypt encryption
- **Input Validation** - Email format validation
- **Auto-logout** - Token cleanup on logout
- **CORS Protection** - Backend CORS configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨💻 Developer

**Aditya Kumar Singh**
- GitHub: [@Aditya-Kumar-Singh-007](https://github.com/Aditya-Kumar-Singh-007)
- LinkedIn: [Aditya Kumar Singh](https://www.linkedin.com/in/aditya-kumar-singh2604)
- Email: 2604aditya@gmail.com

## 🙏 Acknowledgments

- Three.js community for the amazing 3D library
- React team for the excellent framework
- MongoDB for reliable database solutions
- Render and Netlify for hosting services

---

**Made with ❤️ for organizing thoughts and ideas**