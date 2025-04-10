
import React from 'react';
import Layout from '@/components/Layout';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Design = () => {
  return (
    <Layout>
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/categories" className="inline-flex items-center text-purple-400 hover:text-purple-300">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Categories
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">UI/UX Design Principles</h1>
          
          <div className="flex items-center text-sm text-gray-400 mb-6">
            <span>Design</span>
            <span className="mx-2">•</span>
            <span>6 min read</span>
            <span className="mx-2">•</span>
            <span>Published April 1, 2025</span>
          </div>
          
          <img 
            src="https://source.unsplash.com/random/1200x600?uidesign" 
            alt="UI/UX Design" 
            className="w-full h-auto rounded-lg mb-8 object-cover shadow-lg"
          />
          
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              Great user interfaces and experiences don't happen by accident. They're the result of applying 
              well-established design principles with a deep understanding of user needs. This article explores 
              the fundamental principles that guide effective UI/UX design.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">The Importance of User-Centered Design</h2>
            <p className="text-gray-300 mb-4">
              At the heart of effective UI/UX design is the principle of user-centered design. This approach focuses on 
              understanding the needs, wants, limitations, and context of the end user at every stage of the design process.
            </p>
            <p className="text-gray-300 mb-4">
              By conducting user research, creating user personas, and mapping user journeys, designers can gain 
              valuable insights that inform their design decisions. This empathetic approach ensures that the final 
              product actually serves its intended audience rather than just looking visually appealing.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Visual Hierarchy and Information Architecture</h2>
            <p className="text-gray-300 mb-4">
              Visual hierarchy refers to the arrangement of elements in a way that implies importance. It influences 
              the order in which the human eye perceives what it sees. By using size, color, contrast, proximity, 
              and negative space strategically, designers can guide users' attention to the most important elements first.
            </p>
            <p className="text-gray-300 mb-4">
              Similarly, information architecture involves organizing, structuring, and labeling content in an 
              effective and sustainable way. A well-designed information architecture helps users understand where 
              they are, what they've found, what's around, and what to expect.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Consistency and Standards</h2>
            <p className="text-gray-300 mb-4">
              Consistency in design creates familiarity and reduces the learning curve for users. This applies to 
              visual elements (like colors, typography, and spacing), interaction patterns, and language.
            </p>
            <p className="text-gray-300 mb-4">
              Design systems have emerged as a way to maintain consistency across products and teams. They provide 
              a single source of truth for design elements and patterns, ensuring a cohesive user experience while 
              allowing teams to work more efficiently.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Accessibility and Inclusive Design</h2>
            <p className="text-gray-300 mb-4">
              Accessibility is not just a nice-to-have feature but a fundamental aspect of good design. Designing 
              for accessibility means ensuring that products can be used by people with a wide range of abilities 
              and disabilities.
            </p>
            <p className="text-gray-300 mb-4">
              This includes considerations for visual impairments (through proper color contrast and support for 
              screen readers), motor impairments (through appropriate target sizes and keyboard navigation), 
              cognitive disabilities (through clear language and consistent patterns), and more.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Feedback and Affordances</h2>
            <p className="text-gray-300 mb-4">
              Providing clear feedback to users about the results of their actions is crucial for a good user 
              experience. This can take many forms, from visual changes when hovering over a button to loading 
              indicators, error messages, and success notifications.
            </p>
            <p className="text-gray-300 mb-4">
              Affordances refer to the qualities of an object that define its possible uses or make clear how 
              it can be used. In digital interfaces, this means designing elements that intuitively communicate 
              their function. For example, buttons should look clickable, and sliders should appear movable.
            </p>
            
            <div className="mt-12 p-6 bg-gray-800 rounded-lg border border-gray-700">
              <h3 className="text-xl font-bold mb-4">About the Author</h3>
              <div className="flex items-center">
                <img src="https://source.unsplash.com/random/100x100?woman" alt="Author" className="w-14 h-14 rounded-full mr-4" />
                <div>
                  <p className="font-medium">Jane Smith</p>
                  <p className="text-gray-400 text-sm">UI/UX Designer with a background in cognitive psychology. Specializes in creating intuitive, accessible interfaces for web and mobile applications.</p>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-12 bg-gray-700" />
          
          <div className="mt-8">
            <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Color Theory for Digital Designers</h4>
                <p className="text-gray-300 mb-4">Learn how to use color effectively to create visually appealing and accessible designs...</p>
                <Button variant="link" className="text-purple-400 p-0 hover:text-purple-300">
                  Read More
                </Button>
              </Card>
              <Card className="bg-gray-800 p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">Typography Fundamentals</h4>
                <p className="text-gray-300 mb-4">Master the art of typography to enhance readability and visual hierarchy in your designs...</p>
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

export default Design;
