# Appify - Social Media Feed Application

A full-stack social media application featuring user authentication, post creation, comments/replies, and real-time engagement features. Built with modern web technologies for a seamless user experience.

## 📋 Project Overview

**Appify** is a social networking platform that enables users to:
- Create and share posts with public/private visibility settings
- Like and engage with posts from other users
- Comment on posts and reply to comments
- Maintain user profiles and follow other users
- Experience real-time feed updates with pagination

This is a **two-tier architecture** project with separate backend and frontend applications optimized for scalability and maintainability.

---

## 🎯 Key Features

### Authentication & Authorization
- **User Registration**: Email-based signup with password hashing (bcryptjs)
- **Login/Logout**: JWT-based authentication with access and refresh tokens
- **Protected Routes**: Role-based access control for authenticated users
- **Rate Limiting**: Protection against brute-force attacks on auth endpoints
- **Token Refresh**: Automatic token refresh mechanism using httpOnly cookies

### Post Management
- **Create Posts**: Share text content with optional image uploads
- **Visibility Control**: Posts can be marked as public or private
- **Post Feed**: Paginated feed showing public posts and user's own posts
- **Like/Unlike**: Toggle engagement metrics on posts
- **Image Uploads**: Cloudinary integration for image hosting

### Comments & Discussions
- **Comment on Posts**: Add top-level comments to any post
- **Reply to Comments**: Nested reply system to respond to specific comments
- **Comment Likes**: Engage with comments via likes
- **Reply Author Mention**: Track who each reply is responding to

### User Experience
- **Responsive UI**: Tailwind CSS styling for all devices
- **Real-time Updates**: React Query for optimized server state management
- **Smooth Navigation**: Client-side routing with React Router
- **Error Handling**: User-friendly error messages and validation

---

## 🏗️ Architecture & Tech Stack

### Backend Stack
- **Runtime**: Node.js with ES modules
- **Framework**: Express.js 5.x
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (jsonwebtoken)
- **Password Security**: bcryptjs (salt rounds: 10)
- **File Uploads**: Multer + Cloudinary
- **Rate Limiting**: express-rate-limit
- **Development**: Nodemon for hot-reload
- **CORS**: Configured for localhost:5173 (frontend)

### Frontend Stack
- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v7
- **State Management**: 
  - **Server State**: TanStack React Query v5
  - **Client State**: Zustand v5
- **Styling**: Tailwind CSS v4
- **HTTP Client**: Axios with interceptors
- **Icons**: Lucide React
- **Development**: TypeScript strict mode

---

## 🔐 Key Architectural Decisions

### 1. **Dual Token Authentication Strategy**
- **Access Token**: Short-lived (15 mins), stored in memory, sent via Authorization header
- **Refresh Token**: Long-lived (7 days), stored in httpOnly cookies, secure by default
- **Benefit**: Balance between security (httpOnly cookies) and flexibility (JWT in headers)

### 2. **Server State Management (React Query)**
- Used for posts, comments, and all API-driven data
- Automatic caching and background syncing
- Reduces boilerplate and ensures single source of truth
- **Decision Rationale**: Separates server and client state concerns

### 3. **Client State Management (Zustand)**
- Minimal store for auth state (user, accessToken, readiness)
- Persisted to localStorage via middleware
- Used for authentication status across component tree
- **Decision Rationale**: Lightweight alternative to Redux for auth needs

### 4. **Protected & Public Routes**
- Separate route wrappers for authenticated/unauthenticated access
- Automatic redirects prevent unauthorized access
- Public routes (login, signup) hidden from logged-in users

### 5. **Database Indexing Performance**
- Composite indexes on `(visibility, createdAt)` for feed queries
- User-specific indexes on `author` and `visibility` fields
- Optimizes pagination and filtering operations

### 6. **Post Visibility Privacy Model**
- Public posts visible to all users in the feed
- Private posts only visible to their author
- Query filters on visibility to prevent data leakage

### 7. **Nested Comments Architecture**
- Parent-child relationship via `parent` field
- Reply-to mentions via `replyTo` field (user reference)
- Flattened response structure with calculated reply counts

### 8. **Rate Limiting on Auth Endpoints**
- Login: 5 requests per 15 minutes per IP
- Register: 3 requests per hour per IP
- Prevents brute force and spam account creation

---

## 📁 Project Structure

```
Appify/
├── Backend/
│   ├── src/
│   │   ├── app.js                 # Express app configuration
│   │   ├── config/
│   │   │   ├── cloudinary.js      # Cloudinary client setup
│   │   │   └── db.js              # MongoDB connection
│   │   ├── controllers/           # Business logic
│   │   │   ├── auth.controller.js
│   │   │   ├── post.controller.js
│   │   │   └── comment.controller.js
│   │   ├── models/                # MongoDB schemas
│   │   │   ├── user.model.js
│   │   │   ├── post.model.js
│   │   │   ├── comment.model.js
│   │   │   └── refreshToken.model.js
│   │   ├── routes/                # API endpoints
│   │   │   ├── auth.routes.js
│   │   │   ├── post.routes.js
│   │   │   └── comment.routes.js
│   │   ├── middleware/            # Express middleware
│   │   │   ├── auth.middleware.js
│   │   │   ├── upload.middleware.js
│   │   │   └── rateLimiter.js
│   │   └── utils/                 # Helper functions
│   │       ├── generateAccessToken.js
│   │       └── generateRefreshToken.js
│   ├── server.js                  # Entry point
│   └── package.json
│
├── Frontend/
│   ├── src/
│   │   ├── App.tsx                # Root component
│   │   ├── main.tsx               # Entry point
│   │   ├── api/                   # API client functions
│   │   │   ├── auth.api.ts
│   │   │   ├── post.api.ts
│   │   │   ├── comment.api.ts
│   │   │   └── axios.ts           # Axios instance with interceptors
│   │   ├── Components/
│   │   │   ├── feed/              # Feed-related components
│   │   │   │   ├── PostCard.tsx
│   │   │   │   ├── CreatePost.tsx
│   │   │   │   ├── CommentInput.tsx
│   │   │   │   └── PostActions.tsx
│   │   │   ├── layout/            # Layout components
│   │   │   │   ├── MainLayout.tsx
│   │   │   │   └── Navbar.tsx
│   │   │   ├── sidebar/           # Sidebar sections
│   │   │   │   ├── SidebarLeft.tsx
│   │   │   │   └── SidebarRight.tsx
│   │   │   └── ui/                # Reusable UI components
│   │   │       └── Card.tsx
│   │   ├── hooks/                 # Custom React hooks
│   │   │   ├── useAuthInit.ts
│   │   │   ├── useCreatePost.ts
│   │   │   ├── usePosts.ts
│   │   │   ├── useLogin.ts
│   │   │   └── useLogout.ts
│   │   ├── Pages/                 # Page components
│   │   │   ├── Feed.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── SignUp.tsx
│   │   │   └── Error.tsx
│   │   ├── Routes/                # Routing logic
│   │   │   ├── Routes.tsx
│   │   │   ├── ProtectedRoute.tsx
│   │   │   └── PublicRoute.tsx
│   │   ├── store/                 # Zustand stores
│   │   │   └── auth.store.ts
│   │   ├── providers/             # Context/Provider components
│   │   │   └── QueryProvider.tsx
│   │   ├── App.css
│   │   └── index.css
│   ├── package.json
│   └── vite.config.ts
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- MongoDB Atlas account or local MongoDB instance
- Cloudinary account (for image uploads)

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd Backend
   npm install
   ```

2. **Create `.env` file**
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/appify
   JWT_ACCESS_SECRET=your_access_secret_key
   JWT_REFRESH_SECRET=your_refresh_secret_key
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   NODE_ENV=development
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Server runs on `http://localhost:5000`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd Frontend
   npm install
   ```

2. **Create `.env.local` file** (if needed)
   ```env
   VITE_API_BASE_URL=http://localhost:5000
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   App runs on `http://localhost:5173`

---

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh access token
- `POST /api/auth/logout` - User logout
- `GET /api/auth/me` - Get current user (protected)

### Posts
- `POST /api/posts` - Create new post (protected, multipart/form-data)
- `GET /api/posts` - Get paginated feed (protected)
  - Query: `?page=1&limit=10`
- `PUT /api/posts/:id/like` - Toggle like on post (protected)

### Comments
- `POST /api/comments/:postId` - Add comment (protected)
- `GET /api/comments/:postId` - Get comments for post (protected)
- `PUT /api/comments/:id/like` - Toggle like on comment (protected)

---

## 🔄 Data Models

### User
```javascript
{
  firstName: String (required),
  lastName: String (required),
  email: String (required, unique),
  password: String (required, hashed, not selected by default)
}
```

### Post
```javascript
{
  content: String (required),
  image: String (Cloudinary URL, optional),
  author: ObjectId (ref: User),
  visibility: String (enum: ["public", "private"], default: "public"),
  likes: [ObjectId] (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

### Comment
```javascript
{
  content: String (required),
  author: ObjectId (ref: User),
  post: ObjectId (ref: Post),
  parent: ObjectId (ref: Comment, null for top-level),
  replyTo: ObjectId (ref: User, who the reply is addressing),
  likes: [ObjectId] (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

### RefreshToken
```javascript
{
  token: String (unique),
  user: ObjectId (ref: User),
  expiresAt: Date (7 days from creation)
}
```

---

## 🛠️ Development Guide

### State Management Flow

**Authentication State** (Zustand):
```
User Action → Login/Register → API Call → Response → setAuth() → Store → Components
```

**Server State** (React Query):
```
Component Mount → useQuery/useMutation → API Call → Cache → Rendered UI
```

### Adding a New Feature

1. **Backend**: Create model → Controller → Route
2. **API Layer**: Add function in `api/` folder
3. **Hook**: Wrap API call with React Query hook
4. **Component**: Use hook and render UI
5. **Integration**: Add to routing and state management

### Error Handling
- Backend: Consistent error responses with status codes and messages
- Frontend: Axios interceptor for 401 responses triggers token refresh
- User Feedback: Toast/alert notifications for all user-facing errors

---

## 🔒 Security Measures

1. **Password Security**: Bcryptjs with salt rounds of 10
2. **JWT in httpOnly Cookies**: RefreshToken stored securely
3. **CORS Configuration**: Limited to frontend origin
4. **Rate Limiting**: Prevent brute force on auth endpoints
5. **Authorization Middleware**: Verify JWT on protected routes
6. **Password Not Selected**: Excluded from default queries

---

## 📈 Performance Optimizations

1. **Database Indexes**: Posts indexed by `(visibility, createdAt)`
2. **Lean Queries**: MongooDB `.lean()` for read-only data
3. **Pagination**: Feed paginated to reduce data transfer
4. **React Query Caching**: Automatic cache management
5. **Image Optimization**: Cloudinary handles image compression

---

## 🧪 Testing

Currently not implemented. Future additions:
- Unit tests for controllers using Jest
- Integration tests for API endpoints
- Component tests for React components using Vitest

---

## 📚 Dependencies

### Backend
- **express** - Web framework
- **mongoose** - MongoDB ODM
- **jsonwebtoken** - JWT authentication
- **bcryptjs** - Password hashing
- **cors** - Cross-origin requests
- **dotenv** - Environment variables
- **express-rate-limit** - Rate limiting
- **cookie-parser** - Cookie parsing

### Frontend
- **react** - UI library
- **react-router** - Client-side routing
- **@tanstack/react-query** - Server state management
- **zustand** - Client state management
- **axios** - HTTP client
- **tailwindcss** - CSS framework
- **typescript** - Type safety
- **vite** - Build tool

---

## 🚢 Deployment

### Backend (Heroku/Railway/Vercel)
1. Set environment variables
2. MongoDB Atlas for production database
3. Cloudinary for image hosting
4. Deploy with `npm start` or `npm run dev`

### Frontend (Vercel/Netlify)
1. Build: `npm run build`
2. Deploy `dist` folder
3. Set API base URL for production

---

## 📝 Notes & Future Improvements

### Current Implementation
- Clean separation of concerns with controllers and services
- Proper error handling and validation
- JWT security best practices
- Optimized database queries with indexes

### Future Enhancements
1. **Friend System**: Add follow/friend relationships
2. **Real-time Notifications**: WebSocket integration
3. **Search & Filter**: Full-text search on posts
4. **User Profiles**: Edit profile, avatar uploads
5. **Direct Messaging**: Real-time chat between users
6. **Analytics**: Track post engagement metrics
7. **Admin Panel**: Moderate posts and users
8. **Mobile App**: React Native version
9. **Tests**: Comprehensive test coverage
10. **Caching**: Redis for session management

---

## 📄 License

ISC

---

## 👤 Author

Built as a full-stack social media application demonstrating modern web development practices.

---

## 💡 Key Decisions Explained

### Why React Query + Zustand instead of Redux?
- React Query handles server state complexity elegantly
- Zustand is lightweight for minimal client state
- Reduces boilerplate compared to Redux
- Better for learning and smaller to medium projects

### Why Zustand instead of Context API?
- Simpler syntax and setup
- Better performance for frequent updates
- Built-in persistence middleware
- Less prop drilling

### Why JWT with Cookies instead of localStorage?
- httpOnly cookies prevent XSS attacks
- JWT in memory for Authorization header
- Refresh token rotation for long sessions
- Best practice for web security

### Why Cloudinary instead of local storage?
- Unlimited file hosting
- Automatic image optimization
- CDN distribution for faster loading
- Reduced server storage costs

---

Generated: April 2026
