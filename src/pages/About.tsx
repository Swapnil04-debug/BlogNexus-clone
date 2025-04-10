
import React from 'react';
import Layout from '@/components/Layout';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <Layout>
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">About BlogNexus</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Mission</h2>
              <p className="text-gray-300">
                BlogNexus aims to create a space where writers and readers can connect through meaningful content. 
                We believe in the power of knowledge sharing and storytelling to bring people together.
              </p>
            </Card>
            
            <Card className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Vision</h2>
              <p className="text-gray-300">
                We envision a platform that empowers creators to share their expertise while providing readers with 
                valuable insights across various topics and industries.
              </p>
            </Card>
            
            <Card className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-purple-400">Our Values</h2>
              <p className="text-gray-300">
                Quality, authenticity, and diversity are at the core of everything we do. We're committed to 
                maintaining a platform that celebrates diverse perspectives and voices.
              </p>
            </Card>
          </div>
          
          <Separator className="my-12 bg-gray-700" />
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4">
              BlogNexus was founded in 2023 by a group of writers, developers, and designers who saw a need for a 
              better digital reading experience. Frustrated with existing platforms that prioritized algorithms over 
              quality content, we set out to build something different.
            </p>
            <p className="text-gray-300 mb-4">
              What started as a small project has grown into a community of thousands of writers and millions of 
              readers across the globe. We've maintained our commitment to putting quality content first and fostering 
              genuine connections between creators and their audiences.
            </p>
            <p className="text-gray-300">
              Today, BlogNexus continues to evolve with new features and improvements based on feedback from our 
              community. We're proud of what we've built together and excited about the journey ahead.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <img 
                  src="https://source.unsplash.com/random/200x200?portrait=1" 
                  alt="Team Member" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-xl">Sarah Johnson</h3>
                <p className="text-purple-400">Founder & CEO</p>
              </div>
              <div className="text-center">
                <img 
                  src="https://source.unsplash.com/random/200x200?portrait=2" 
                  alt="Team Member" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-xl">Michael Chen</h3>
                <p className="text-purple-400">CTO</p>
              </div>
              <div className="text-center">
                <img 
                  src="https://source.unsplash.com/random/200x200?portrait=3" 
                  alt="Team Member" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-xl">Alicia Rodriguez</h3>
                <p className="text-purple-400">Editor in Chief</p>
              </div>
              <div className="text-center">
                <img 
                  src="https://source.unsplash.com/random/200x200?portrait=4" 
                  alt="Team Member" 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-xl">David Okafor</h3>
                <p className="text-purple-400">Head of Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
