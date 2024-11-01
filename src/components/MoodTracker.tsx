import React, { useState } from 'react';
import { SmilePlus } from 'lucide-react';

function MoodTracker() {
  const [mood, setMood] = useState<number | null>(null);
  const moods = [
    { value: 1, label: 'Very Low', color: 'bg-red-500' },
    { value: 2, label: 'Low', color: 'bg-orange-500' },
    { value: 3, label: 'Neutral', color: 'bg-yellow-500' },
    { value: 4, label: 'Good', color: 'bg-green-500' },
    { value: 5, label: 'Excellent', color: 'bg-emerald-500' },
  ];

  return (
    <div className="max-w-4xl mx-auto py-8">
      <div className="bg-white rounded-xl p-8 shadow-lg">
        <div className="flex items-center gap-4 mb-8">
          <SmilePlus className="w-8 h-8 text-indigo-600" />
          <h2 className="text-2xl font-bold">Daily Mood Check-in</h2>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">How are you feeling today?</h3>
            <div className="flex flex-wrap gap-4">
              {moods.map((m) => (
                <button
                  key={m.value}
                  onClick={() => setMood(m.value)}
                  className={`px-6 py-3 rounded-lg transition-all ${
                    mood === m.value
                      ? `${m.color} text-white scale-105`
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-lg font-semibold mb-4">
              What's on your mind? (Optional)
            </label>
            <textarea
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              rows={4}
              placeholder="Share your thoughts..."
            />
          </div>

          <button
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Save Entry
          </button>
        </div>
      </div>
    </div>
  );
}

export default MoodTracker;