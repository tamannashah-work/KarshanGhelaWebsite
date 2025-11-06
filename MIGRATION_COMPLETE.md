# MongoDB Migration Complete

## Overview

The Karshan Ghela website has been successfully migrated from Supabase to MongoDB Atlas. This document outlines the changes made and how to use the new system.

## What Changed

### Removed
- ❌ All Supabase code and dependencies (`@supabase/supabase-js`)
- ❌ `src/lib/supabase.js` - Supabase client helper
- ❌ Direct database queries from frontend components

### Added
- ✅ MongoDB Atlas integration via `mongodb` driver
- ✅ Express.js backend API server (`server.js`)
- ✅ REST API endpoints for all data operations
- ✅ Database seeding script (`seedData.js`)
- ✅ Structured seed data file (`supabase_data.json`)
- ✅ API abstraction layer (`src/api/`)

## New Architecture

```
┌─────────────────┐         HTTP Requests          ┌──────────────────┐
│                 │ ───────────────────────────────▶│                  │
│  React Frontend │         (port 5173)             │  Express Backend │
│     (Vite)      │◀─────────────────────────────── │   (port 3001)    │
│                 │         JSON Responses          │                  │
└─────────────────┘                                 └──────────────────┘
                                                              │
                                                              │ MongoDB Driver
                                                              ▼
                                                    ┌──────────────────┐
                                                    │   MongoDB Atlas  │
                                                    │  (Cloud Database)│
                                                    └──────────────────┘
```

## File Structure

```
project/
├── server.js                      # Express.js backend server
├── seedData.js                    # Database seeding script
├── supabase_data.json            # Initial data for seeding
├── MONGODB_SETUP.md              # Detailed setup instructions
├── .env                          # Environment variables
├── .env.example                  # Environment template
└── src/
    ├── api/                      # Frontend API layer
    │   ├── products.js           # Product endpoints
    │   ├── categories.js         # Category endpoints
    │   ├── testimonials.js       # Testimonial endpoints
    │   └── contact.js            # Contact form endpoint
    └── components/
        ├── Contact.jsx           # Updated to use API
        ├── Testimonials.jsx      # Updated to use API
        └── Products.jsx          # Updated to use API
```

## API Endpoints

### Products
- `GET /api/products` - Get all products with categories
- `GET /api/products/featured` - Get featured products only

### Categories
- `GET /api/categories` - Get all categories

### Testimonials
- `GET /api/testimonials` - Get active testimonials

### Contact
- `POST /api/contact` - Submit contact form

### Health Check
- `GET /api/health` - Server health status

## Environment Variables

```env
# MongoDB Connection
VITE_MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/?retryWrites=true&w=majority

# API Configuration
VITE_API_URL=http://localhost:3001
```

## Database Collections

### categories
Stores product categories with emoji and ordering.

Fields:
- `name` - Category name (e.g., "Whole Spices")
- `slug` - URL-friendly identifier
- `description` - Category description
- `emoji` - Display emoji
- `display_order` - Sort order

### products
Stores all products with images and recipes.

Fields:
- `name` - Product name
- `description` - Product description
- `image_url` - Product image path
- `recipe_url` - Optional recipe image
- `category_id` - Reference to category
- `is_featured` - Featured on homepage
- `display_order` - Sort order
- `created_at` - Timestamp

### testimonials
Stores customer reviews and ratings.

Fields:
- `customer_name` - Customer name
- `content` - Testimonial text
- `rating` - 1-5 stars
- `is_active` - Published status
- `display_order` - Sort order

### contact_submissions
Stores contact form submissions.

Fields:
- `name` - Contact name
- `email` - Contact email
- `phone` - Phone number
- `message` - Message content
- `status` - pending/reviewed/resolved
- `created_at` - Timestamp

### recipes
Stores recipe information.

Fields:
- `name` - Recipe name
- `image_url` - Recipe image path

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env` and add your MongoDB Atlas connection string.

### 3. Seed Database
```bash
npm run seed
```

### 4. Run Backend Server
```bash
npm run server
```

### 5. Run Frontend (in separate terminal)
```bash
npm run dev
```

### 6. Build for Production
```bash
npm run build
```

## Component Updates

### Contact Component
**Before (Supabase):**
```javascript
import { supabase } from '../lib/supabase';

const { error } = await supabase
  .from('contact_submissions')
  .insert([formData]);
```

**After (MongoDB API):**
```javascript
import { submitContactForm } from '../api/contact';

await submitContactForm(formData);
```

### Testimonials Component
**Before (Supabase):**
```javascript
import { supabase } from '../lib/supabase';

const { data } = await supabase
  .from('testimonials')
  .select('*')
  .eq('is_active', true);
```

**After (MongoDB API):**
```javascript
import { getActiveTestimonials } from '../api/testimonials';

const data = await getActiveTestimonials();
```

### Products Component
**Before (Static Data):**
```javascript
import { productCategories } from '../data/products';

const products = productCategories.flatMap(cat => cat.items);
```

**After (MongoDB API):**
```javascript
import { getAllProducts } from '../api/products';

const products = await getAllProducts();
```

## Data Migration

All existing product and recipe data has been preserved and structured in `supabase_data.json`:

- **16 Categories** - All spice and product categories
- **40+ Products** - Complete product catalog with images
- **18 Recipes** - Recipe cards and images
- **3 Testimonials** - Sample customer reviews

## Performance Optimizations

1. **Database Indexes** - Created on commonly queried fields
2. **Connection Pooling** - MongoDB connection reuse
3. **Error Handling** - Comprehensive try-catch blocks
4. **Loading States** - Frontend loading indicators
5. **Image Fallbacks** - Placeholder for missing images

## Production Deployment

### Backend (Express Server)
Deploy to: Heroku, Railway, Render, or any Node.js platform

Requirements:
- Node.js 16+
- Set environment variables
- Port configuration (defaults to 3001)

### Frontend (React)
Deploy to: Vercel, Netlify, or any static host

Requirements:
- Update `VITE_API_URL` to backend URL
- Run `npm run build`
- Deploy `dist/` folder

### Database
- Use production MongoDB Atlas cluster
- Enable authentication
- Whitelist production IPs
- Set up backups

## Testing

### Test Backend API
```bash
# Health check
curl http://localhost:3001/api/health

# Get products
curl http://localhost:3001/api/products

# Get categories
curl http://localhost:3001/api/categories
```

### Test Frontend
1. Start both servers
2. Visit http://localhost:5173
3. Check browser console for errors
4. Test contact form submission
5. Verify products load correctly

## Troubleshooting

### Backend Won't Start
- Check MongoDB connection string in `.env`
- Verify port 3001 is not in use
- Check MongoDB Atlas IP whitelist

### Frontend Can't Connect
- Ensure backend is running on port 3001
- Check `VITE_API_URL` in `.env`
- Look for CORS errors in browser console

### No Data Displayed
- Run seed script: `npm run seed`
- Check backend logs for errors
- Verify MongoDB collections contain data

## Next Steps

1. ✅ Migration Complete
2. ⏭️ Test all features thoroughly
3. ⏭️ Add production MongoDB cluster
4. ⏭️ Deploy backend server
5. ⏭️ Deploy frontend application
6. ⏭️ Update production environment variables

## Support

For detailed MongoDB setup instructions, see `MONGODB_SETUP.md`

For MongoDB Atlas help: https://docs.atlas.mongodb.com/
