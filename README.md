# 🌸 Real-Time Coding Interview Platform 💚

> *A super cute and comprehensive coding interview platform with integrated video calling, screen sharing, and recording capabilities! Built with love for companies to conduct the most adorable technical interviews ever! ✨*

---

## 🎀 Features That'll Make You Go "Awww!"

### 📹 Video & Audio Magic ✨
- 🎥 **HD Video/Audio Calls** - Crystal clear conversations with candidates! 
- 🖥️ **Screen Sharing** - Share your screen like sharing cookies with friends!
- 📱 **Screen Recording** - Capture precious interview moments forever! 
- 😊 **Real-time Reactions** - Express your feelings with cute emojis!
- 📐 **Resizable Panels** - Stretch and squeeze panels like playdough! 

### 💻 Code Editor of Dreams 🌈
- 🌍 **Multi-language Support** - JavaScript, Python, Java, and more cuties!
- 💖 **VS Code-like Experience** - Familiar and cozy coding environment!
- 🤝 **Real-time Collaboration** - Code together like best friends!
- ⚡ **Autocomplete** - Smart suggestions that finish your thoughts!
- 🧩 **Multiple Coding Problems** - Fun challenges with starter hugs!

### 👥 User Management Sweetness 🍭
- 🎭 **Role-based Access** - Candidates, Interviewers, and Super Admins!
- 🔐 **Authentication** - GitHub, Google, and email logins (so many options!)
- 📅 **Interview Scheduling** - Plan the cutest meetings ever!
- 📊 **Dashboard** - Your personal command center of cuteness!

### 📈 Interview Management Bliss 💫
- 🔴 **Live Interview Status** - Real-time tracking that's always on point!
- 💬 **Comment System** - Leave the sweetest feedback notes!
- ✅ **Success/Failure Tracking** - Celebrate wins and learn from oops!
- 🎬 **Recording Playback** - Rewatch your favorite interview moments!
- ⚡ **Instant Calls** - Surprise interviews that spark joy!

### 🎨 UI/UX That Sparks Joy ✨
- 🌙 **Light/Dark Mode** - Match your mood, day or night!
- 📱 **Responsive Design** - Looks adorable on every device!
- 🎯 **Intuitive Setup** - So easy, even your grandma could use it!
- 💝 **Motivational Messages** - Little pick-me-ups before interviews!

---

## 🛠️ Tech Stack (The Dream Team!) 

```
🔧 Frontend: React with Next.js
🎨 Styling: Tailwind CSS  
🗄️ Database: Convex (Real-time magic!)
🔒 Authentication: Clerk
📹 Video/Audio: Stream
🚀 Deployment: Vercel
```

---

## 📋 Prerequisites (What You'll Need!) 

- 📦 Node.js (v18 or higher) - *The foundation of our dreams!*
- 🎁 npm or yarn - *Your package delivery service!*
- 🌿 Git - *Version control cuteness!*

---

## 🎉 Installation (Let's Get This Party Started!)

### 1️⃣ Clone the magical repository
```bash
git clone https://github.com/yourusername/coding-interview-platform.git
cd coding-interview-platform
```

### 2️⃣ Install all the cute dependencies
```bash
npm install
# or if you prefer yarn (we don't judge! 💕)
yarn install
```

### 3️⃣ Environment Setup (The Secret Sauce!)
Create a `.env.local` file and fill it with love:

```env
# 🔐 Clerk Authentication Magic
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_super_secret_clerk_key
CLERK_SECRET_KEY=your_even_more_secret_clerk_key

# 🗄️ Convex Database Sweetness  
NEXT_PUBLIC_CONVEX_URL=your_convex_url_of_dreams
CONVEX_DEPLOY_KEY=your_convex_deploy_magic

# 📹 Stream Video Awesomeness
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_sauce
```

### 4️⃣ Wake up Convex
```bash
npx convex dev
```

### 5️⃣ Start the development magic show
```bash
npm run dev
# or
yarn dev
```

### 6️⃣ Open your browser and witness the cuteness
Navigate to `http://localhost:3000` and prepare to be amazed! ✨

---

## 🏗️ Project Structure (Our Cozy Home!)

```
📁 Project Root
├── 📂 components/           # 🧩 Reusable React goodies
│   ├── 📂 ui/              # 🎨 Pretty UI components  
│   ├── 📂 interview/       # 💼 Interview magic components
│   └── 📂 auth/            # 🔒 Authentication sweetness
├── 📂 pages/               # 📄 Next.js page wonderland
├── 📂 convex/              # 🗄️ Database function paradise  
├── 📂 lib/                 # 🔧 Utility function helpers
├── 📂 styles/              # 💅 Global styling beauty
├── 📂 public/              # 🌍 Static asset treasure chest
└── 📂 types/               # 📝 TypeScript type definitions
```

---

## 🎯 How to Use This Cuteness

### 👨‍💻 For Our Beloved Candidates
1. 🎪 **Sign up/Login** - Choose GitHub, Google, or email (your pick!)
2. 👀 **View interviews** - Check your adorable dashboard  
3. 🚀 **Join live interviews** - Click that shiny join button!
4. 🎛️ **Setup devices** - Test your camera and mic like a pro!
5. 🧠 **Solve coding problems** - Show off those amazing skills!
6. 💬 **Chat with interviewers** - Make new friends through video!

### 👩‍💼 For Our Amazing Interviewers  
1. 📅 **Schedule interviews** - Plan those important meetings!
2. ⚡ **Start instant calls** - Surprise interviews for the win!
3. 🎲 **Select coding problems** - Pick the perfect challenges!
4. 👁️ **Monitor progress** - Watch candidates work their magic!
5. 📝 **Add comments** - Share your wonderful feedback!
6. 🎬 **Review recordings** - Relive those great moments!

### ⚙️ For Our Super Admins
1. 👥 **Manage user roles** - Decide who's who in our world!
2. 📹 **Access recordings** - See everything that happened!
3. 📊 **Monitor usage** - Keep track of all the fun stats!

---

## 🔑 Key Components (The Heart & Soul!)

- 🛡️ **Authentication System** - Secure login that feels like a warm hug
- ⚡ **Real-time Database** - Lightning-fast sync across the universe  
- 📹 **Video Call Engine** - Crystal clear conversations
- 💻 **Code Editor** - Professional coding playground
- 📅 **Interview Scheduler** - Meeting magic made simple
- 🎬 **Recording System** - Capture and replay the good times

---

## 🚀 Deployment (Launch to the Stars!)

### 1️⃣ Build your masterpiece
```bash
npm run build
```

### 2️⃣ Deploy to Vercel (or anywhere you love!)
```bash
npx vercel --prod
```

### 3️⃣ Set up environment variables
Don't forget to configure those secret keys in production! 🤫

---

## 📱 Responsive Design (Works Everywhere!)

Our platform is like a chameleon - it adapts beautifully to:
- 🖥️ Desktop computers (big and bold!)
- 📱 Tablets (just the right size!)  
- 📱 Mobile devices (tiny but mighty!)
- 🌈 All screen sizes (we love them all!)

---

## 🎨 Customization (Make It Yours!)

### Adding New Programming Languages 🌍
1. Update the language selector (easy peasy!)
2. Add syntax highlighting (make it pretty!)
3. Configure execution magic (let it run!)

### Adding Coding Problems 🧩  
1. Visit the admin dashboard (your control center!)
2. Create new challenges (be creative!)
3. Set difficulty levels (from baby steps to ninja level!)

---

## 🤝 Contributing (Join Our Family!)

We'd love your help making this even more awesome! 💕

1. 🍴 Fork the repository (make it your own!)
2. 🌿 Create a feature branch `git checkout -b feature/amazing-new-thing`
3. 💖 Commit your changes `git commit -m 'Add some amazing magic'`
4. 🚀 Push to your branch `git push origin feature/amazing-new-thing`  
5. 🎉 Open a Pull Request (show us what you've got!)

---

## 📄 License

This project is licensed under the MIT License - because sharing is caring! 💕

---

## 🆘 Need Help? We're Here for You!

- 📚 **Documentation**: Check our `/docs` folder for detailed guides
- 🐛 **Issues**: Found a bug? Let us know via GitHub Issues  
- 💬 **Discussions**: Join our friendly community chat!
- 📧 **Email**: Drop us a line anytime!

---

## 🙏 Special Thanks & Love

- 🎥 **Stream** - For making video calls a dream
- 🔒 **Clerk** - For keeping us safe and sound  
- 🗄️ **Convex** - For real-time database magic
- ⚛️ **Next.js Team** - For the incredible framework
- 👥 **All Contributors** - You make this project shine!
- ☕ **Coffee** - For keeping us awake during late coding sessions

---

## 🌟 Star This Repo!

If you love this project, give us a star! ⭐ It makes our day brighter! 🌈

---

<div align="center">

### 💖 Built with Love, Caffeine, and Lots of Emojis 💖

*Made for developers who believe interviews should be fun, friendly, and fantastic!* ✨

**Happy Coding!** 🚀💕

</div>
