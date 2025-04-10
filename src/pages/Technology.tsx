
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Technology = () => {
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
                <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/categories" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Categories</Link>
                <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
                <Link to="/technology" className="text-white px-3 py-2 rounded-md text-sm font-medium">Technology</Link>
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

      {/* Technology Header */}
      <header className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Technology Hub
          </h1>
          <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto">
            Stay ahead with the latest insights, trends, and breakthroughs in the world of technology.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Tech Article 1: Modern Web Development */}
          <Card className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src="https://source.unsplash.com/random/800x600?webdev" alt="Modern Web Development" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Modern Web Development</h3>
              <p className="text-gray-400 mb-4">
                Discover the latest frameworks, libraries, and best practices that are shaping the modern web. From responsive design to progressive web apps, learn how today's technologies create interactive experiences.
              </p>
              <Link to="/web-development" className="text-purple-400 hover:text-purple-300">Read More →</Link>
            </div>
          </Card>

          {/* Tech Article 2: AI and Machine Learning */}
          <Card className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src="https://source.unsplash.com/random/800x600?ai" alt="Artificial Intelligence" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">AI and Machine Learning</h3>
              <p className="text-gray-400 mb-4">
                Explore how artificial intelligence and machine learning are revolutionizing industries. From smart assistants to predictive analytics, uncover the trends that are driving innovation.
              </p>
              <Link to="/ai-machine-learning" className="text-purple-400 hover:text-purple-300">Read More →</Link>
            </div>
          </Card>

          {/* Tech Article 3: Cybersecurity Trends */}
          <Card className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img src="https://source.unsplash.com/random/800x600?security" alt="Cybersecurity Trends" className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Cybersecurity Trends</h3>
              <p className="text-gray-400 mb-4">
                As cyber threats become more sophisticated, staying informed about the latest security measures is crucial. Learn about emerging strategies to protect data and maintain privacy.
              </p>
              <Link to="/cybersecurity" className="text-purple-400 hover:text-purple-300">Read More →</Link>
            </div>
          </Card>
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="bg-gray-800 py-12 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Tech News</h2>
            <p className="text-gray-400 mb-8">Subscribe to our newsletter and never miss out on the latest tech insights and updates.</p>
            <form className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-white" required />
                <Button type="submit" className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  Subscribe
                </Button>
              </div>
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
                <li><Link to="/technology" className="hover:text-white">Technology</Link></li>
                <li><Link to="/design" className="hover:text-white">Design</Link></li>
                <li><Link to="/storytelling" className="hover:text-white">Writing</Link></li>
                <li><Link to="/categories" className="hover:text-white">Lifestyle</Link></li>
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

export default Technology;
