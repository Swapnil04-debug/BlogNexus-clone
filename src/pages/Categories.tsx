
import React from 'react';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Laptop, 
  Palette, 
  PenTool, 
  Heart, 
  Camera, 
  Globe, 
  Coffee, 
  BookOpen
} from "lucide-react";

// Category type definition
interface Category {
  name: string;
  slug: string;
  icon: React.ReactNode;
  postCount: number;
  description: string;
  color: string;
}

const Categories = () => {
  // Categories data
  const categories: Category[] = [
    {
      name: "Technology",
      slug: "/technology",
      icon: <Laptop className="h-8 w-8" />,
      postCount: 42,
      description: "The latest in tech innovations, programming, and digital transformation.",
      color: "from-blue-400 to-indigo-600"
    },
    {
      name: "Design",
      slug: "/categories/design",
      icon: <Palette className="h-8 w-8" />,
      postCount: 38,
      description: "Insights on UI/UX, graphic design, and creative processes.",
      color: "from-pink-400 to-rose-600"
    },
    {
      name: "Writing",
      slug: "/categories/writing",
      icon: <PenTool className="h-8 w-8" />,
      postCount: 56,
      description: "Advice for writers, storytelling techniques, and content creation.",
      color: "from-amber-400 to-orange-600"
    },
    {
      name: "Lifestyle",
      slug: "/categories/lifestyle",
      icon: <Heart className="h-8 w-8" />,
      postCount: 64,
      description: "Wellness, personal development, and balanced living.",
      color: "from-emerald-400 to-green-600"
    },
    {
      name: "Photography",
      slug: "/categories/photography",
      icon: <Camera className="h-8 w-8" />,
      postCount: 29,
      description: "Photography tips, gear reviews, and visual storytelling.",
      color: "from-cyan-400 to-teal-600"
    },
    {
      name: "Travel",
      slug: "/categories/travel",
      icon: <Globe className="h-8 w-8" />,
      postCount: 47,
      description: "Destinations, travel guides, and adventure stories.",
      color: "from-purple-400 to-violet-600"
    },
    {
      name: "Food",
      slug: "/categories/food",
      icon: <Coffee className="h-8 w-8" />,
      postCount: 33,
      description: "Recipes, culinary experiences, and food culture.",
      color: "from-red-400 to-rose-600"
    },
    {
      name: "Business",
      slug: "/categories/business",
      icon: <BookOpen className="h-8 w-8" />,
      postCount: 51,
      description: "Entrepreneurship, marketing, and professional growth.",
      color: "from-gray-400 to-slate-600"
    }
  ];

  // Featured categories (top 4)
  const featuredCategories = categories.slice(0, 4);

  return (
    <Layout>
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Explore Categories
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-3xl">
            Dive into our collection of categories covering everything from technology and design to lifestyle and beyond.
          </p>
          
          {/* Featured Categories */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold mb-8">Featured Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCategories.map((category) => (
                <Link to={category.slug} key={category.slug}>
                  <Card className="bg-gray-800 rounded-lg overflow-hidden h-full transition-transform hover:scale-105 border-0">
                    <div className={`h-3 w-full bg-gradient-to-r ${category.color}`}></div>
                    <div className="p-6">
                      <div className="mb-4 bg-gray-700/50 w-16 h-16 rounded-full flex items-center justify-center text-white">
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-purple-400 font-medium">{category.postCount} Posts</span>
                        <span className="text-gray-400">→</span>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
          
          <Separator className="my-12 bg-gray-700" />
          
          {/* All Categories */}
          <section>
            <h2 className="text-2xl font-bold mb-8">All Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category) => (
                <Link to={category.slug} key={category.slug}>
                  <div className="bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition-all hover:bg-gray-700 flex items-center gap-4 border border-gray-700">
                    <div className={`bg-gradient-to-br ${category.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{category.name}</h3>
                      <p className="text-sm text-gray-400">{category.postCount} Posts</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          
          {/* Popular Tags Section */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Popular Tags</h2>
            <div className="flex flex-wrap gap-3">
              {["JavaScript", "React", "UX Design", "Programming", "AI", "Machine Learning", 
                "Writing Tips", "Productivity", "Health", "Fitness", "Travel", "Photography", 
                "Food", "Recipes", "Career Advice", "Personal Finance", "Marketing", "SEO", 
                "Social Media", "Leadership"].map((tag) => (
                <Link 
                  to={`/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`} 
                  key={tag}
                  className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full text-sm transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
