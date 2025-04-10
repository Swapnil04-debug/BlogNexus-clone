import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="fixed w-full bg-gray-800/90 backdrop-blur-sm z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-purple-500">BlogNexus</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/categories" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Categories</Link>
                <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                <Link to="/technology" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Technology</Link>
              </div>
            </div>
            <div className="flex items-center">
              <button id="theme-toggle" className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600">
                <i className="fas fa-moon"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Welcome to BlogNexus
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#featured-posts" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300">
              Explore Posts
            </a>
            <a href="#newsletter" className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors duration-300">
              Subscribe
            </a>
          </div>
          {/* Technology Link Button */}
          <div className="mt-8">
            <Link to="/technology" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
              Visit Technology Hub
            </Link>
          </div>
        </div>
      </header>

      {/* Featured Posts Section */}
      <section id="featured-posts" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Post Card 1 */}
          <Card className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link to="/web-development">
              <img src="https://source.unsplash.com/random/800x600?technology" alt="Blog post" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span>Technology</span>
                  <span className="mx-2">•</span>
                  <span>5 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">The Future of Web Development</h3>
                <p className="text-gray-400 mb-4">Explore the latest trends and technologies shaping the future of web development...</p>
                <div className="flex items-center">
                  <img src="https://source.unsplash.com/random/40x40?portrait" alt="Author" className="w-10 h-10 rounded-full" />
                  <div className="ml-3">
                    <p className="text-sm font-medium">John Doe</p>
                    <p className="text-xs text-gray-400">Posted on March 15, 2024</p>
                  </div>
                </div>
              </div>
            </Link>
          </Card>

          {/* Post Card 2 */}
          <Card className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link to="/design">
              <img src="https://source.unsplash.com/random/800x600?design" alt="Blog post" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span>Design</span>
                  <span className="mx-2">•</span>
                  <span>4 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">UI/UX Design Principles</h3>
                <p className="text-gray-400 mb-4">Learn the fundamental principles that make great user interfaces and experiences...</p>
                <div className="flex items-center">
                  <img src="https://source.unsplash.com/random/40x40?woman" alt="Author" className="w-10 h-10 rounded-full" />
                  <div className="ml-3">
                    <p className="text-sm font-medium">Jane Smith</p>
                    <p className="text-xs text-gray-400">Posted on March 14, 2024</p>
                  </div>
                </div>
              </div>
            </Link>
          </Card>

          {/* Post Card 3 */}
          <Card className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Link to="/storytelling">
              <img src="https://source.unsplash.com/random/800x600?writing" alt="Blog post" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-2">
                  <span>Writing</span>
                  <span className="mx-2">•</span>
                  <span>6 min read</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">The Art of Storytelling</h3>
                <p className="text-gray-400 mb-4">Master the craft of storytelling and engage your readers with compelling narratives...</p>
                <div className="flex items-center">
                  <img src="https://source.unsplash.com/random/40x40?man" alt="Author" className="w-10 h-10 rounded-full" />
                  <div className="ml-3">
                    <p className="text-sm font-medium">Mike Johnson</p>
                    <p className="text-xs text-gray-400">Posted on March 13, 2024</p>
                  </div>
                </div>
              </div>
            </Link>
          </Card>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Explore Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link to="/category-technology" className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors duration-300">
              <i className="fas fa-microchip text-3xl text-purple-400 mb-2"></i>
              <h3 className="font-semibold">Technology</h3>
              <p className="text-sm text-gray-400">24 Posts</p>
            </Link>
            <Link to="/category-design" className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors duration-300">
              <i className="fas fa-palette text-3xl text-purple-400 mb-2"></i>
              <h3 className="font-semibold">Design</h3>
              <p className="text-sm text-gray-400">18 Posts</p>
            </Link>
            <Link to="/category-writing" className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors duration-300">
              <i className="fas fa-pen-fancy text-3xl text-purple-400 mb-2"></i>
              <h3 className="font-semibold">Writing</h3>
              <p className="text-sm text-gray-400">32 Posts</p>
            </Link>
            <Link to="/category-lifestyle" className="bg-gray-700 p-6 rounded-lg text-center hover:bg-gray-600 transition-colors duration-300">
              <i className="fas fa-heart text-3xl text-purple-400 mb-2"></i>
              <h3 className="font-semibold">Lifestyle</h3>
              <p className="text-sm text-gray-400">28 Posts</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-400 mb-8">Subscribe to our newsletter for the latest posts and updates.</p>
            <form className="max-w-md mx-auto flex gap-4">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-purple-500" required/>
              <Button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-purple-500 mb-4">BlogNexus</h3>
              <p className="text-gray-400">Your digital reading space for the latest insights and stories.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/categories" className="hover:text-white">Categories</Link></li>
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/category-technology" className="hover:text-white">Technology</Link></li>
                <li><Link to="/category-design" className="hover:text-white">Design</Link></li>
                <li><Link to="/category-writing" className="hover:text-white">Writing</Link></li>
                <li><Link to="/category-lifestyle" className="hover:text-white">Lifestyle</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4 text-gray-400">
                <a href="#" className="hover:text-white"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
                <a href="#" className="hover:text-white"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            &copy; 2025 BlogNexus. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
