import React from 'react';
import { ArrowRight, Award, BarChart3, Calendar, CheckCircle, Clock, Database, DollarSign, FileText, Heart, MessageSquare, Shield, Star, Users } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="px-4 py-20 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          AI-Powered System to Grow Your Revenue
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Streamline your clinic's daily operations, efficiently manage appointments, billing, and patient records—all in one easy-to-use platform.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center">
          Start Now <ArrowRight className="ml-2 h-5 w-5" />
        </button>
        
        {/* Trusted By Section */}
        <div className="mt-16">
          <p className="text-gray-500 mb-4">Trusted by</p>
          <div className="flex justify-center items-center space-x-12">
            <div className="text-gray-400 font-semibold">AWS</div>
            <div className="text-gray-400 font-semibold">Nation Newspaper</div>
            <div className="text-gray-400 font-semibold">YC Startup School</div>
            <div className="text-gray-400 font-semibold">OpenAI</div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <FeatureCard
              icon={<Users className="h-8 w-8 text-blue-500" />}
              title="Grow Your Practice"
              description="Unlock your clinic's potential with tools designed to boost patient acquisition and ensure a smooth patient journey."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-blue-500" />}
              title="Better Reporting"
              description="Gain deeper insights into your clinic's performance with comprehensive analytics and real-time tracking."
            />
            <FeatureCard
              icon={<DollarSign className="h-8 w-8 text-blue-500" />}
              title="Faster Payments"
              description="Streamline billing processes and improve cash flow with our efficient payment collection system."
            />
            <FeatureCard
              icon={<Heart className="h-8 w-8 text-blue-500" />}
              title="Improve Retention"
              description="Keep patients coming back with personalized follow-ups and automated reminders."
            />
            <FeatureCard
              icon={<Calendar className="h-8 w-8 text-blue-500" />}
              title="Reduce No-Shows"
              description="Cut no-shows by 30% with smart reminders and convenient rescheduling options."
            />
            <FeatureCard
              icon={<Database className="h-8 w-8 text-blue-500" />}
              title="Easy Records Access"
              description="Quickly retrieve and manage detailed patient histories and treatment plans in real-time."
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <blockquote className="text-2xl font-medium text-gray-900 mb-8">
            "At first, I was sceptical about changing our systems because I thought it would take too long to implement, but it happened in just a couple of clicks, and I'm so impressed with Niah AI. It has revolutionized our business and doubled our productivity!"
          </blockquote>
          <cite className="text-gray-600 not-italic">
            — Dr. Sean Malkin, Dentist & Owner
          </cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Experience Growth and Efficiency Like Never Before!
          </h2>
          <p className="text-xl mb-8">
            See how our AI-powered platform can transform your dental clinic.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Demo
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Niah</h3>
              <p className="text-sm">AI-powered dental practice management system</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Features</h4>
              <ul className="space-y-2 text-sm">
                <li>Practice Management</li>
                <li>Patient Records</li>
                <li>Billing & Payments</li>
                <li>Analytics</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>Documentation</li>
                <li>Support</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Security</li>
                <li>Compliance</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
            © {new Date().getFullYear()} Niah. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;