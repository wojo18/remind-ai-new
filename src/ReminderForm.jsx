import { useState } from 'react';

export default function ReminderForm({ onAddReminder }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAddReminder({ id: Date.now(), text });
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-b">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Dodaj przypomnienie..."
        className="border p-2 w-full"
      />
    </form>
  );
}
