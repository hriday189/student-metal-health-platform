import React, { useState } from 'react';
import { Brain, Calendar, MessageCircle, Shield, BookOpen, Menu, X } from 'lucide-react';
import MoodTracker from './components/MoodTracker';
import ResourceHub from './components/ResourceHub';
import JournalSection from './components/JournalSection';
import Navbar from './components/Navbar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setActiveSection={setActiveSection} />
      
      <main className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
        {activeSection === 'home' && (
          <div className="space-y-12">
            <section className="text-center py-16 md:py-24">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Your Mental Wellness Journey Starts Here
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A safe space for students to track, understand, and improve their mental well-being
              </p>
            </section>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <Brain className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Mood Tracking</h3>
                <p className="text-gray-600">Monitor your emotional well-being with our intuitive mood tracking tools</p>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <MessageCircle className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Connect with counselors and support groups anytime, anywhere</p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <BookOpen className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Resource Library</h3>
                <p className="text-gray-600">Access a curated collection of mental health resources and guides</p>
              </div>
            </div>

            <section className="bg-white rounded-xl p-8 md:p-12 shadow-lg mt-12">
              <h2 className="text-3xl font-bold mb-8 text-center">How We Support You</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
                  alt="Students supporting each other"
                  className="rounded-lg shadow-md"
                />
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Privacy First</h3>
                      <p className="text-gray-600">Your data is encrypted and your privacy is our top priority</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Flexible Scheduling</h3>
                      <p className="text-gray-600">Book sessions that fit your schedule</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeSection === 'mood' && <MoodTracker />}
        {activeSection === 'resources' && <ResourceHub />}
        {activeSection === 'journal' && <JournalSection />}
      </main>
    </div>
  );
}

export default App;