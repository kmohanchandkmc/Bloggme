# BloggMe 📝

BloggMe is a full-stack blog web application where users can read blogs without logging in, and registered users can create and update their own blog posts.

## 🔧 Tech Stack

- **Frontend**: React (with Vite), Next.js
- **Backend**: Express.js (Node.js)
- **Database**: MySQL

## 🌐 Features

- ✅ Public access to browse blogs without login
- 🔐 User login system
- ✍️ Authenticated users can create, edit, and update their blog posts
- ⚡ Fast development with Vite on frontend
- 🔗 REST API integration between frontend and backend

## 🚀 Running the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/kmohanchandkmc/bloggme.git
cd bloggme
```

### 2. Backend Setup

```bash
cd server
npm install
```


- Start the backend server:

```bash
npm start
```

The backend will run on: [http://localhost:8800](http://localhost:8800)

### 3. Frontend Setup

```bash
cd ../client
npm install
```

- Start the frontend:

```bash
npm run dev
```

The frontend will run on: [http://localhost:5173](http://localhost:5173) (default Vite port)

> Make sure the backend is running before using the frontend.

## 📂 Folder Structure

```
bloggme/
│
├── backend/           # Express.js server and API
│
├── frontend/          # React (Vite) + Next.js client
│
└── README.md          # Project description
```

## 📌 Notes

- Ensure MySQL server is running and the database `bloggme` is created.
- You may import sample blog data if required.
- CORS is handled in backend for local development.

## 📃 License

This project is licensed under the MIT License. See the LICENSE file for more information.

---

Happy blogging with **BloggMe**! 🚀

