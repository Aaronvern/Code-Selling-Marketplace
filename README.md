# Code Selling Marketplace

A simple marketplace where users can **list, buy, and sell** code snippets securely.

## Features
- List code for sale
- Buy and sell securely
- User authentication
- Simple and user-friendly UI

## Tech Stack
- **Frontend:** Next.js
- **Backend:** Next.js API routes
- **Database:** MongoDB with Prisma

## Setup Instructions

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/code-marketplace.git
   cd code-marketplace
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables:**
   Create a `.env.local` file and add:
   ```env
   DATABASE_URL=mongodb+srv://your_mongo_uri_here
   NEXTAUTH_SECRET=your_random_secret
   ```

4. **Run the Development Server:**
   ```sh
   npm run dev
   ```
   App will be available at `http://localhost:3000`.


