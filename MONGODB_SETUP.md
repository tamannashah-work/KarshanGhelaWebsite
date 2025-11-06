# MongoDB Atlas Setup Guide

This guide will help you set up MongoDB Atlas for the Karshan Ghela website.

## Prerequisites

- Node.js installed (v16 or higher)
- npm or yarn package manager
- A MongoDB Atlas account (free tier works fine)

## Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account or log in
3. Create a new cluster (M0 Free tier is sufficient for development)

## Step 2: Configure Database Access

1. In your MongoDB Atlas dashboard, go to **Database Access**
2. Click **Add New Database User**
3. Create a username and password
4. Set **Database User Privileges** to "Read and write to any database"
5. Click **Add User**

## Step 3: Configure Network Access

1. Go to **Network Access** in the left sidebar
2. Click **Add IP Address**
3. For development, you can click **Allow Access from Anywhere** (0.0.0.0/0)
   - For production, add your specific IP addresses
4. Click **Confirm**

## Step 4: Get Connection String

1. Go to **Database** in the left sidebar
2. Click **Connect** on your cluster
3. Choose **Connect your application**
4. Select **Driver**: Node.js
5. Copy the connection string (it looks like):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
6. Replace `<username>` with your database username
7. Replace `<password>` with your database password

## Step 5: Configure Environment Variables

1. Create a `.env` file in the project root (copy from `.env.example`)
2. Add your MongoDB connection string and API URL:
   ```
   VITE_MONGO_URI=mongodb+srv://your_username:your_password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   MONGO_URI=mongodb+srv://your_username:your_password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   VITE_API_URL=http://localhost:3001
   ```

## Step 6: Seed the Database

Run the seed script to populate your MongoDB database with initial data:

```bash
node seedData.js
```

This will:
- Create the `karshan_store` database
- Create collections: `categories`, `products`, `recipes`, `testimonials`, `contact_submissions`
- Insert sample data from `supabase_data.json`
- Create indexes for optimized queries

You should see output like:
```
✅ Connected to MongoDB Atlas
📦 Seeding Categories...
✅ Inserted 16 categories
📦 Seeding Products...
✅ Inserted 40 products
📦 Seeding Recipes...
✅ Inserted 18 recipes
📦 Seeding Testimonials...
✅ Inserted 3 testimonials
🎉 Database seeding completed successfully!
```

## Step 7: Run the Application

The application requires both a backend server and frontend to run:

### Terminal 1 - Start the Backend Server:
```bash
npm run server
```

You should see:
```
Server running on http://localhost:3001
Connected to MongoDB Atlas
```

### Terminal 2 - Start the Frontend:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` and connect to the backend API at `http://localhost:3001`.

## Database Collections

### categories
- Stores product categories (Whole Spices, Ground Spices, etc.)
- Fields: name, slug, description, emoji, display_order

### products
- Stores all products with their details
- Fields: name, description, image_url, recipe_url, category_id, is_featured, display_order

### recipes
- Stores recipe information
- Fields: name, image_url

### testimonials
- Stores customer testimonials
- Fields: customer_name, content, rating, is_active, display_order

### contact_submissions
- Stores contact form submissions
- Fields: name, email, phone, message, status, created_at

## Troubleshooting

### Connection Issues

If you get connection errors:
1. Verify your IP address is whitelisted in Network Access
2. Check that your username and password are correct in the connection string
3. Make sure your connection string is properly URL-encoded (special characters in password may need encoding)

### Missing Data

If no products appear:
1. Verify the seed script ran successfully
2. Check MongoDB Atlas Collections browser to see if data was inserted
3. Look at browser console for any error messages

### Environment Variables Not Loading

Make sure:
1. The `.env` file is in the project root directory
2. Environment variable names start with `VITE_` for frontend access
3. Restart the dev server after changing `.env`

## Architecture

This application uses a client-server architecture:

- **Frontend**: React application (Vite) running on port 5173
- **Backend**: Express.js API server on port 3001
- **Database**: MongoDB Atlas (cloud)

The frontend makes HTTP requests to the backend API, which handles all MongoDB operations.

## Production Deployment

For production:
1. Deploy the backend server (Express.js) to a Node.js hosting platform (e.g., Heroku, Railway, Render)
2. Deploy the frontend (React) to a static hosting service (e.g., Vercel, Netlify)
3. Update `VITE_API_URL` in production to point to your backend server URL
4. Use a dedicated production MongoDB cluster (not free tier)
5. Enable authentication and encryption
6. Set up proper network restrictions (whitelist specific IPs)
7. Use environment variables from your hosting platform
8. Consider setting up database backups

## Support

For MongoDB Atlas specific issues, visit:
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [MongoDB Community Forums](https://www.mongodb.com/community/forums/)
