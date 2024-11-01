import React from 'react';
import { BookOpen, Phone, Video, Users } from 'lucide-react';

function ResourceHub() {
  const resources = [
    {
      title: 'Emergency Support',
      description: 'Immediate help is available 24/7. You\'re not alone.',
      icon: Phone,
      link: '#',
      urgent: true,
    },
    {
      title: 'Online Counseling',
      description: 'Schedule a virtual session with licensed professionals.',
      icon: Video,
      link: '#',
    },
    {
      title: 'Support Groups',
      description: 'Join peer-led groups focused on specific topics.',
      icon: Users,
      link: '#',
    },
    {
      title: 'Self-Help Library',
      description: 'Access guides, articles, and worksheets.',
      icon: BookOpen,
      link: '#',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8">
      <div className="grid gap-8 md:grid-cols-2">
        {resources.map((resource, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl p-6 shadow-lg ${
              resource.urgent ? 'border-2 border-red-500' : ''
            }`}
          >
            <div className="flex items-start gap-4">
              <resource.icon className={`w-8 h-8 ${
                resource.urgent ? 'text-red-500' : 'text-indigo-600'
              }`} />
              <div>
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className={`inline-block px-4 py-2 rounded-lg ${
                    resource.urgent
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  } text-white transition-colors`}
                >
                  Access Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Recommended Reading</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {[
            'Managing Academic Stress',
            'Building Healthy Relationships',
            'Sleep Hygiene Tips',
            'Mindfulness for Students',
          ].map((title, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <BookOpen className="w-6 h-6 text-indigo-600" />
              <span className="font-medium">{title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResourceHub;