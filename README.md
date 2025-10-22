# James Rono's Portfolio

A modern, responsive portfolio website showcasing my professional work, skills, and experience. Built with React and featuring smooth animations, dark mode support, and an interactive user interface.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7.9.4-CA4245?logo=react-router&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23-0055FF?logo=framer&logoColor=white)

## 🚀 Features

- **Modern UI/UX**: Clean and professional design with smooth animations
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Theme switcher with system preference detection
- **Interactive Elements**: Engaging user interface with motion effects
- **Section Navigation**: Smooth scrolling between different portfolio sections
- **Dynamic Background**: Interactive animated background effects
- **Performance Optimized**: Fast loading times and optimized assets
- **EmailJS Contact Form**: Integrated contact form using EmailJS for direct email submissions

## 💻 Tech Stack

### Core Technologies
- **React**: v19.2.0 - Main frontend framework
- **React Router**: v7.9.4 - For seamless navigation
- **Bootstrap**: v5.3.8 - UI framework for responsive design
- **React Bootstrap**: v2.10.10 - React components for Bootstrap
- **Framer Motion**: v12.23.24 - For smooth animations and transitions

### Animation & Visual Effects
- **Three.js**: v0.180.0 - 3D graphics and effects
- **Vanta.js**: v0.5.24 - Animated backgrounds
- **TSParticles**: v3.9.1 - Interactive particle effects

### Development Tools
- **React Scripts**: v5.0.1 - Development and build tools
- **ESLint**: Code quality and style checking
- **Jest & Testing Library**: For unit and integration testing

## 🏗️ Project Structure

```
portfolio/
├── public/             # Public assets and HTML template
├── src/
│   ├── assets/        # Images, fonts, and other static assets
│   ├── components/    # Reusable React components
│   ├── pages/         # Main page components
│   ├── App.js         # Root React component
│   └── custom.css     # Custom styling
└── package.json       # Project dependencies and scripts
```

## 🛠️ Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jimmi0623/james-rono.git
   ```

2. Install dependencies:
   ```bash
   cd james-rono
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm run build
   ```

5. **EmailJS Setup (Contact Form):**
   - The contact form uses [EmailJS](https://www.emailjs.com/) to send emails directly to your inbox.
   - You must configure your EmailJS account, service, and template for production use.
   - Update your service ID, template ID, and public key in `src/pages/Contact.js` as described in the code comments.
   - Form fields are mapped to template variables: `${name}`, `${email}`, `${message}`.

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

## 🌐 Browser Support

The portfolio website is optimized for:
- Latest versions of Chrome, Firefox, Safari, and Edge
- Mobile browsers on iOS and Android devices

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers (1024px and above)
- Tablets (768px to 1023px)
- Mobile devices (320px to 767px)

## 🎨 Theme Support

- Light and Dark mode support
- System preference detection
- Persistent theme selection

## 🤝 Contributing

Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

James Rono - [Contact through the portfolio website]

Project Link: [https://github.com/jimmi0623/james-rono](https://github.com/jimmi0623/james-rono)

---
⭐ Star this repo if you find it helpful!
