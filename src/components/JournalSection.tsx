import React, { useState } from 'react';
import { BookOpen, Calendar, Save } from 'lucide-react';

function JournalSection() {
  const [entries] = useState([
    {
      date: '2024-03-10',
      title: 'Finding Balance',
      preview: 'Today was a challenging but rewarding day...',
    },
    {
      date: '2024-03-09',
      title: 'Small Victories',
      preview: 'I managed to complete all my assignments...',
    },
  ]);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="grid gap-8 md:grid-cols-[300px,1fr]">
        {/* Entries List */}
        <div className="bg-white rounded-xl p-6 shadow-lg h-fit">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-indigo-600" />
            <h2 className="text-xl font-bold">Journal Entries</h2>
          </div>
          <div className="space-y-4">
            {entries.map((entry, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                  <Calendar className="w-4 h-4" />
                  {entry.date}
                </div>
                <h3 className="font-semibold mb-1">{entry.title}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{entry.preview}</p>
              </div>
            ))}
          </div>
        </div>

        {/* New Entry Form */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Entry Title"
              className="w-full text-xl font-bold border-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
            />
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
              <Calendar className="w-4 h-4" />
              {new Date().toLocaleDateString()}
            </div>
          </div>

          <textarea
            className="w-full h-64 p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent mb-4"
            placeholder="Write your thoughts here..."
          />

          <div className="flex justify-end">
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
              <Save className="w-4 h-4" />
              Save Entry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JournalSection;