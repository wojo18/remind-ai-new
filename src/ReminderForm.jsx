import { useState } from 'react';

export default function ReminderForm({ onAddReminder }) {
  const [text, setText] = useState('');
  const [datetime, setDatetime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !datetime) return;
    onAddReminder({ text, datetime });
    setText('');
    setDatetime('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input
        type="text"
        placeholder="Wpisz przypomnienie"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <input
        type="datetime-local"
        value={datetime}
        onChange={(e) => setDatetime(e.target.value)}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Dodaj przypomnienie
      </button>
    </form>
  );
}