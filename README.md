# Real-Time Coding Interview Platform

A comprehensive coding interview platform with integrated video calling, screen sharing, and recording capabilities. Built for companies to conduct technical interviews with real-time collaboration features.

## 🚀 Features

### Video & Audio Capabilities
- **HD Video/Audio Calls** - Crystal clear communication with candidates
- **Screen Sharing** - Share entire screen or specific windows
- **Screen Recording** - Record interviews for later review
- **Real-time Reactions** - Express feedback during interviews
- **Resizable Panels** - Customizable layout (vertical & horizontal)

### Code Editor
- **Multi-language Support** - JavaScript, Python, Java, and more
- **VS Code-like Experience** - Familiar interface with syntax highlighting
- **Real-time Collaboration** - Live code synchronization
- **Autocomplete** - Intelligent code suggestions
- **Multiple Coding Problems** - Pre-built challenges with starter code

### User Management
- **Role-based Access** - Candidates, Interviewers, and Admins
- **Authentication** - GitHub, Google, and email/password login
- **Interview Scheduling** - Plan and organize interviews
- **Dashboard** - Manage past, live, and upcoming interviews

### Interview Management
- **Live Interview Status** - Real-time interview state tracking
- **Comment System** - Add feedback and evaluation notes
- **Success/Failure Tracking** - Mark interview outcomes
- **Recording Playback** - Review past interviews
- **Instant Calls** - Start impromptu interviews

### UI/UX
- **Light/Dark Mode** - Toggle between themes
- **Responsive Design** - Works on all devices
- **Intuitive Setup** - Device selection and testing before interviews
- **Motivational Messages** - Encourage candidates before interviews

## 🛠️ Tech Stack

- **Frontend**: React with Next.js
- **Styling**: Tailwind CSS
- **Database**: Convex (Real-time)
- **Authentication**: Clerk
- **Video/Audio**: Stream
- **Deployment**: Vercel (or similar)

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/coding-interview-platform.git
   cd coding-interview-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key

   # Convex Database
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   CONVEX_DEPLOY_KEY=your_convex_deploy_key

   # Stream Video
   NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
   STREAM_SECRET_KEY=your_stream_secret_key
   ```

4. **Setup Convex**
   ```bash
   npx convex dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
├── components/           # Reusable React components
│   ├── ui/              # UI components
│   ├── interview/       # Interview-specific components
│   └── auth/            # Authentication components
├── pages/               # Next.js pages
├── convex/              # Convex database functions
├── lib/                 # Utility functions
├── styles/              # Global styles
├── public/              # Static assets
└── types/               # TypeScript type definitions
```

## 🎯 Usage

### For Candidates
1. **Sign up/Login** using GitHub, Google, or email
2. **View interviews** from your dashboard
3. **Join live interviews** via the join button
4. **Setup devices** (camera/microphone) before joining
5. **Solve coding problems** using the built-in editor
6. **Interact** with interviewers through video/audio

### For Interviewers
1. **Schedule interviews** with candidates
2. **Start instant calls** for impromptu interviews
3. **Select coding problems** and programming languages
4. **Monitor candidate progress** in real-time
5. **Add comments** and evaluate performance
6. **End calls** and review recordings

### For Admins
1. **Manage user roles** (Candidate/Interviewer)
2. **Access all recordings** and interview data
3. **Monitor platform usage** and statistics

## 🔑 Key Components

- **Authentication System** - Secure login with multiple providers
- **Real-time Database** - Live synchronization across all users
- **Video Call Engine** - High-quality video/audio communication
- **Code Editor** - Professional coding environment
- **Interview Scheduler** - Meeting management system
- **Recording System** - Capture and playback capabilities

## 🚀 Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy to Vercel**
   ```bash
   npx vercel --prod
   ```

3. **Configure environment variables** in your deployment platform

## 📱 Responsive Design

The platform is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices
- Various screen sizes and orientations

## 🎨 Customization

### Adding New Programming Languages
1. Update the language selector component
2. Add syntax highlighting support
3. Configure code execution environment

### Adding Coding Problems
1. Navigate to the admin dashboard
2. Create new problems with starter code
3. Set difficulty levels and categories

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check the `/docs` folder for detailed guides
- **Issues**: Report bugs via GitHub Issues
- **Discussions**: Join our community discussions

## 🙏 Acknowledgments

- Stream for video calling capabilities
- Clerk for authentication services
- Convex for real-time database
- Next.js team for the amazing framework
- All contributors and testers

---

**Built with ❤️ for better technical interviews**
