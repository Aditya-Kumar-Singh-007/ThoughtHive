# ThoughtHive 🧠✨

**Your personal digital space for capturing ideas, organizing tasks, and preserving memories**

ThoughtHive is a modern, responsive note-taking application built with React and Node.js, featuring a beautiful interactive background and seamless user experience across all devices.

## 🌟 Features

- **📝 Create & Edit Notes** - Add, edit, and delete notes with rich text support
- **🔐 User Authentication** - Secure login and signup system
- **🌓 Dark/Light Mode** - Toggle between themes for comfortable viewing
- **📱 Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **🎨 Interactive Background** - Beautiful animated ballpit background
- **⚡ Real-time Updates** - Instant note synchronization
- **🔍 Clean UI/UX** - Modern glass-morphism design with smooth animations

## 🚀 Live Demo

- **Frontend**: [Deployed on Netlify](https://your-netlify-url.netlify.app)
- **Backend**: [https://thoughthive-backend.onrender.com](https://thoughthive-backend.onrender.com)

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **React Router** - Navigation
- **Three.js** - 3D interactive background
- **CSS3** - Styling with modern features
- **Context API** - State management

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **JWT** - Authentication
- **bcrypt** - Password hashing

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB database

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/thoughthive.git
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

### Backend (Render)
- Backend is deployed at: `https://thoughthive-backend.onrender.com`

## 📱 Responsive Design

ThoughtHive is fully responsive with:
- **Desktop**: Full navbar with all features visible
- **Tablet**: Optimized layout with touch-friendly elements
- **Mobile**: Hamburger menu navigation, optimized touch interactions

## 🎨 Design Features

- **Glass Morphism**: Modern translucent design elements
- **Interactive Background**: 3D animated spheres that respond to touch/mouse
- **Smooth Animations**: CSS transitions and transforms
- **Theme Support**: Dark and light mode with system preference detection
- **Typography**: Custom font stack for optimal readability

## 🔧 Available Scripts

- `npm start` - Run development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📂 Project Structure

```
thoughthive/
├── public/
│   ├── index.html
│   ├── light.png
│   ├── dark.png
│   └── notebook.png
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Navbar.js
│   │   ├── SignUp.js
│   │   ├── ViewNote.js
│   │   └── WriteNote.js
│   ├── context/
│   │   └── notes/
│   │       ├── NoteState.js
│   │       └── notesContext.js
│   ├── App.js
│   ├── App.css
│   ├── Ballpit.jsx
│   └── index.js
├── .env
├── package.json
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Three.js community for the amazing 3D library
- React team for the excellent framework
- All contributors and testers

---

**Made with ❤️ for organizing thoughts and ideas**