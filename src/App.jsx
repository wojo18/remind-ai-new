import { useState, useEffect } from 'react';
import ReminderForm from './ReminderForm';
import ReminderList from './ReminderList';

export default function App() {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('reminders')) || [];
    setReminders(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  const addReminder = (reminder) => {
    setReminders([...reminders, reminder]);
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-center p-4">📅 Remind-AI</h1>
      <ReminderForm onAddReminder={addReminder} />
      <ReminderList reminders={reminders} />
    </div>
  );
}
