# DeepSeek Clone

A modern AI chat application built with Next.js and integrated with the DeepSeek AI model. This project provides an interactive chat interface similar to ChatGPT, with features like chat history, message persistence, and real-time AI responses.

<img width="2879" height="1537" alt="image" src="https://github.com/user-attachments/assets/45d46550-fd6b-462e-8ca2-3b334c66a72e" />


## 🚀 Tech Stack

### Frontend
- **Next.js 13+**: React framework with App Router for server-side rendering and routing
- **React**: Library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Markdown**: For rendering markdown responses
- **Prism.js**: For code syntax highlighting
- **React Hot Toast**: For notifications
- **Axios**: For HTTP requests

### Backend & Database
- **MongoDB**: NoSQL database for storing chat history and user data
- **Mongoose**: MongoDB object modeling for Node.js
- **Next.js API Routes**: Backend API implementation

### Authentication & User Management
- **Clerk**: For user authentication and management
- **NextAuth.js**: Authentication implementation

### AI Integration
- **DeepSeek API**: For AI chat completions through OpenRouter
- **OpenAI SDK**: For interacting with the DeepSeek API

## 🔧 Project Setup

1. Clone the repository:
```bash
git clone https://github.com/jain-anshika/deepseek-clone.git
cd deepseek-clone
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file with the following environment variables:
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=clerk_secret_key

MONGODB_URI=mognodb_uri

SIGNING_SECRET=webhook_clerk_secret
DEEPSEEK_API_KEY=your_api_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
deepseek/
├── app/                    # Next.js 13 app directory
│   ├── api/               # API routes
│   │   ├── chat/         # Chat-related endpoints
│   │   └── clerk/        # Clerk webhook handlers
│   ├── layout.js         # Root layout
│   └── page.jsx          # Home page
├── components/            # React components
│   ├── ChatLabel.jsx     # Chat history item
│   ├── Message.jsx       # Chat message component
│   ├── PromptBox.jsx     # Input box for prompts
│   └── Sidebar.jsx       # Navigation sidebar
├── config/               # Configuration files
│   └── db.js            # MongoDB connection
├── context/              # React context
│   └── AppContext.jsx    # Application state
├── models/               # MongoDB models
│   ├── Chat.js          # Chat model
│   └── User.js          # User model
└── public/              # Static files
```

## 🎯 Features

- **User Authentication**: Secure sign-up and login with Clerk
- **Chat Interface**: 
  - Real-time AI responses with typing animation
  - Markdown support for formatted responses
  - Code syntax highlighting
  - Copy message to clipboard
- **Chat Management**:
  - Create new chats
  - Rename existing chats
  - Delete chats
  - Chat history persistence
- **Responsive Design**: Works on desktop and mobile devices
- **Error Handling**: Graceful error handling with user notifications

## 💡 How It Works

1. **Authentication Flow**:
   - Users sign up/login using Clerk
   - Clerk webhook updates user data in MongoDB
   - JWT tokens used for API authentication

2. **Chat Flow**:
   - User sends a message
   - Message is stored in MongoDB
   - Request is sent to DeepSeek API
   - Response is streamed back to the user
   - Chat history is updated in real-time

3. **Data Persistence**:
   - All chats and messages are stored in MongoDB
   - User preferences and settings are maintained
   - Chat history is synced across sessions

## 🔒 Security

- Authentication using Clerk's secure infrastructure
- Environment variables for sensitive data
- API route protection with middleware
- MongoDB connection string encryption
- CORS protection on API routes

## 📝 License

This project is MIT licensed.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/jain-anshika/deepseek-clone/issues).

## 👥 Author

**Anshika Jain**
- GitHub: [@jain-anshika](https://github.com/jain-anshika)
