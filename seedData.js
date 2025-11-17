import { MongoClient } from 'mongodb';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MONGO_URI = process.env.VITE_MONGO_URI || process.env.MONGO_URI;
const DB_NAME = 'KarshanGhela';

async function seedDatabase() {
  let client;

  try {
    console.log('🔄 Starting database seeding...');

    if (!MONGO_URI) {
      throw new Error('MONGO_URI or VITE_MONGO_URI environment variable is not defined');
    }

    client = new MongoClient(MONGO_URI);
    await client.connect();
    console.log('✅ Connected to MongoDB Atlas');

    const db = client.db(DB_NAME);

    const dataPath = path.join(__dirname, 'supabase_data.json');
    const rawData = fs.readFileSync(dataPath, 'utf8');
    const data = JSON.parse(rawData);

    console.log('\n📦 Seeding Categories...');
    const categoriesCollection = db.collection('categories');
    await categoriesCollection.deleteMany({});
    const categoryResult = await categoriesCollection.insertMany(data.categories);
    console.log(`✅ Inserted ${categoryResult.insertedCount} categories`);

    const categoryMap = {};
    const insertedCategories = await categoriesCollection.find({}).toArray();
    insertedCategories.forEach(cat => {
      categoryMap[cat.slug] = cat._id;
    });

    console.log('\n📦 Seeding Products...');
    const productsWithCategoryIds = data.products.map(product => {
      const { category_slug, ...rest } = product;
      return {
        ...rest,
        category_id: categoryMap[category_slug],
        created_at: new Date()
      };
    });

    const productsCollection = db.collection('products');
    await productsCollection.deleteMany({});
    const productResult = await productsCollection.insertMany(productsWithCategoryIds);
    console.log(`✅ Inserted ${productResult.insertedCount} products`);

    console.log('\n📦 Seeding Recipes...');
    const recipesCollection = db.collection('recipes');
    await recipesCollection.deleteMany({});
    const recipeResult = await recipesCollection.insertMany(data.recipes);
    console.log(`✅ Inserted ${recipeResult.insertedCount} recipes`);

    console.log('\n📦 Seeding Testimonials...');
    const testimonialsCollection = db.collection('testimonials');
    await testimonialsCollection.deleteMany({});
    const testimonialResult = await testimonialsCollection.insertMany(data.testimonials);
    console.log(`✅ Inserted ${testimonialResult.insertedCount} testimonials`);

    console.log('\n🔍 Creating indexes...');
    await productsCollection.createIndex({ category_id: 1 });
    await productsCollection.createIndex({ is_featured: 1 });
    await productsCollection.createIndex({ name: 'text', description: 'text' });
    await categoriesCollection.createIndex({ slug: 1 }, { unique: true });
    await testimonialsCollection.createIndex({ is_active: 1 });
    console.log('✅ Indexes created successfully');

    console.log('\n🎉 Database seeding completed successfully!');
    console.log(`\n📊 Summary:`);
    console.log(`   Categories: ${categoryResult.insertedCount}`);
    console.log(`   Products: ${productResult.insertedCount}`);
    console.log(`   Recipes: ${recipeResult.insertedCount}`);
    console.log(`   Testimonials: ${testimonialResult.insertedCount}`);

  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
      console.log('\n🔌 MongoDB connection closed');
    }
  }
}

seedDatabase();
