
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    toast.success("Message sent successfully! We'll get back to you soon.");
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Layout>
      <div className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Contact Us</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p className="text-gray-300">
                1234 Innovation Drive<br />
                San Francisco, CA 94103<br />
                United States
              </p>
            </Card>
            
            <Card className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-gray-300 mb-1">info@blognexus.com</p>
              <p className="text-gray-300">support@blognexus.com</p>
            </Card>
            
            <Card className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-gray-300 mb-1">+1 (555) 123-4567</p>
              <p className="text-gray-300">Mon-Fri: 9am to 5pm PST</p>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-gray-700 border-gray-600 text-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-gray-700 border-gray-600 text-white h-32"
                    required
                  />
                </div>
                
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="h-[400px]">
              <h2 className="text-2xl font-bold mb-6">Find Us</h2>
              <div className="w-full h-full bg-gray-700 rounded-lg overflow-hidden">
                {/* This would be where you'd embed a map (e.g., Google Maps) */}
                <div className="w-full h-full flex items-center justify-center bg-gray-800">
                  <p className="text-gray-400">Map Embed Placeholder</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">How do I create an account?</h3>
                <p className="text-gray-300">
                  You can create an account by clicking the "Sign Up" button in the top right corner of any page.
                  Follow the prompts to complete your registration.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">How can I contribute content to BlogNexus?</h3>
                <p className="text-gray-300">
                  After creating an account, you can submit content for review by visiting your dashboard and 
                  clicking on "Create New Post." Our editorial team will review your submission.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Do you offer partnership opportunities?</h3>
                <p className="text-gray-300">
                  Yes! We're always open to partnerships with brands and creators that align with our values.
                  Please email us at partnerships@blognexus.com with your proposal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
