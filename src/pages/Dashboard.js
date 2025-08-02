import React from 'react';

const fakeBots = [
  { id: 1, name: 'WhatsApp Bot #1', status: 'Online' },
  { id: 2, name: 'Telegram Bot Alpha', status: 'Offline' },
  { id: 3, name: 'Discord Bot 3000', status: 'Online' },
];

export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6">Your Bots</h2>
      <ul className="space-y-4">
        {fakeBots.map(bot => (
          <li
            key={bot.id}
            className={`p-4 rounded shadow-md flex justify-between items-center
              ${
                bot.status === 'Online'
                  ? 'bg-green-100 dark:bg-green-900'
                  : 'bg-red-100 dark:bg-red-900'
              }`}
          >
            <span className="font-semibold">{bot.name}</span>
            <span
              className={`font-bold ${
                bot.status === 'Online' ? 'text-green-700 dark:text-green-300' : 'text-red-700 dark:text-red-300'
              }`}
            >
              {bot.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
