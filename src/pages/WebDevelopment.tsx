
import React from 'react';
import Layout from '@/components/Layout';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const WebDevelopment = () => {
  return (
    <Layout>
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/technology" className="inline-flex items-center text-purple-400 hover:text-purple-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Technology Hub
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Modern Web Development</h1>
          
          <div className="flex items-center text-sm text-gray-400 mb-6">
            <span>Technology</span>
            <span className="mx-2">•</span>
            <span>8 min read</span>
            <span className="mx-2">•</span>
            <span>Published April 2, 2025</span>
          </div>
          
          <img 
            src="https://source.unsplash.com/random/1200x600?webdev" 
            alt="Modern Web Development" 
            className="w-full h-auto rounded-lg mb-8 object-cover shadow-lg"
          />
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              The landscape of web development is constantly evolving, with new frameworks, libraries, and methodologies 
              emerging at a rapid pace. This article explores the current state of modern web development and what lies ahead.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">The Rise of JavaScript Frameworks</h2>
            <p className="text-gray-300 mb-4">
              JavaScript frameworks have revolutionized how we build for the web. React, Angular, and Vue.js have become 
              the backbone of modern web applications, each with its own philosophy and approach to building user interfaces.
            </p>
            <p className="text-gray-300 mb-4">
              React, developed by Facebook, has gained immense popularity due to its component-based architecture and 
              virtual DOM, which optimizes rendering performance. Its ecosystem has expanded to include state management 
              solutions like Redux and Recoil, and meta-frameworks like Next.js that provide server-side rendering capabilities.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">The JAMstack Architecture</h2>
            <p className="text-gray-300 mb-4">
              JAMstack (JavaScript, APIs, and Markup) represents a modern web development architecture that aims to make 
              websites faster, more secure, and easier to scale. By pre-rendering pages and serving them directly from a CDN,
              JAMstack sites eliminate the need for server-side processing at runtime.
            </p>
            <p className="text-gray-300 mb-4">
              This approach has led to the rise of static site generators like Gatsby, Next.js, and Astro, which combine 
              the benefits of static sites with the dynamic capabilities of modern web applications.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Web Performance Optimization</h2>
            <p className="text-gray-300 mb-4">
              With mobile usage continuing to rise, optimizing web performance has become more critical than ever. 
              Techniques like code splitting, lazy loading, and image optimization are essential for delivering a good 
              user experience across devices and network conditions.
            </p>
            <p className="text-gray-300 mb-4">
              Google's Core Web Vitals initiative has further emphasized the importance of performance metrics like 
              Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) in determining 
              search rankings.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">CSS Evolution</h2>
            <p className="text-gray-300 mb-4">
              CSS has evolved significantly with features like CSS Grid, Flexbox, and Custom Properties (variables) 
              making complex layouts more manageable. Utility-first CSS frameworks like Tailwind CSS have gained popularity 
              by providing low-level utility classes that can be composed to build custom designs without leaving your HTML.
            </p>
            <p className="text-gray-300 mb-4">
              CSS-in-JS solutions like styled-components and Emotion have also become popular in the React ecosystem, 
              allowing developers to write component-scoped styles directly in their JavaScript code.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">The Future of Web Development</h2>
            <p className="text-gray-300 mb-4">
              Looking ahead, several trends are shaping the future of web development:
            </p>
            <ul className="list-disc pl-5 mt-2 mb-6 text-gray-300 space-y-2">
              <li>WebAssembly (Wasm) is enabling high-performance code to run in browsers, opening up new possibilities for web applications.</li>
              <li>Progressive Web Apps (PWAs) continue to bridge the gap between web and native experiences.</li>
              <li>Edge computing is moving computation closer to users, reducing latency and improving performance.</li>
              <li>AI-assisted coding tools are enhancing developer productivity and accessibility.</li>
              <li>Headless CMS solutions are providing flexible content management for modern web architectures.</li>
            </ul>
            <p className="text-gray-300 mb-4">
              As these technologies mature, web development will continue to evolve, providing more powerful tools and 
              methodologies for building the next generation of web experiences.
            </p>
            
            <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4">About the Author</h3>
              <div className="flex items-center">
                <img src="https://source.unsplash.com/random/100x100?man" alt="Author" className="w-14 h-14 rounded-full mr-4" />
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-gray-400 text-sm">Senior Web Developer with over 10 years of experience building modern web applications. Passionate about performance optimization and user experience.</p>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-12 bg-gray-700" />
          
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Getting Started with React Hooks</h4>
                <p className="text-gray-300 mb-4">Learn how React Hooks are changing the way we build functional components...</p>
                <Button variant="link" className="text-purple-400 p-0 hover:text-purple-300">
                  Read More
                </Button>
              </Card>
              <Card className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">The Ultimate Guide to CSS Grid</h4>
                <p className="text-gray-300 mb-4">Master modern CSS layouts with this comprehensive guide to CSS Grid...</p>
                <Button variant="link" className="text-purple-400 p-0 hover:text-purple-300">
                  Read More
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WebDevelopment;
