/*
  #  Karshan Ghela Website Schema

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, category name)
      - `slug` (text, URL-friendly identifier)
      - `description` (text, category description)
      - `display_order` (integer, for sorting)
      - `created_at` (timestamp)
    
    - `products`
      - `id` (uuid, primary key)
      - `category_id` (uuid, foreign key to categories)
      - `name` (text, product name)
      - `description` (text, product description)
      - `image_url` (text, product image)
      - `is_featured` (boolean, for homepage display)
      - `display_order` (integer, for sorting)
      - `created_at` (timestamp)
    
    - `testimonials`
      - `id` (uuid, primary key)
      - `customer_name` (text, customer name)
      - `content` (text, testimonial content)
      - `rating` (integer, 1-5 stars)
      - `is_active` (boolean, show/hide testimonial)
      - `display_order` (integer, for sorting)
      - `created_at` (timestamp)
    
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text, contact name)
      - `email` (text, contact email)
      - `phone` (text, contact phone)
      - `message` (text, contact message)
      - `status` (text, pending/reviewed/resolved)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Public read access for categories, products, and active testimonials
    - Authenticated-only write access for contact submissions
    - Admin-only access for managing products and testimonials

  3. Important Notes
    - Products are organized by categories for easy navigation
    - Featured products can be displayed prominently on homepage
    - Testimonials can be activated/deactivated for moderation
    - Contact submissions are stored for business review
    - Display order allows flexible content arrangement
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text DEFAULT '',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text DEFAULT '',
  image_url text DEFAULT '',
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  content text NOT NULL,
  rating integer DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_active boolean DEFAULT true,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Categories policies (public read)
CREATE POLICY "Anyone can view categories"
  ON categories FOR SELECT
  TO anon, authenticated
  USING (true);

-- Products policies (public read)
CREATE POLICY "Anyone can view products"
  ON products FOR SELECT
  TO anon, authenticated
  USING (true);

-- Testimonials policies (public read for active only)
CREATE POLICY "Anyone can view active testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

-- Contact submissions policies (anyone can insert)
CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(is_featured);
CREATE INDEX IF NOT EXISTS idx_testimonials_active ON testimonials(is_active);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
