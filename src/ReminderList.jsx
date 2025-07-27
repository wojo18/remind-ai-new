export default function ReminderList({ reminders }) {
  return (
    <ul className="p-4 space-y-2">
      {reminders.map((reminder, index) => (
        <li key={index} className="p-2 border rounded shadow">
          <div className="font-bold">{reminder.text}</div>
          <div className="text-sm text-gray-600">{new Date(reminder.datetime).toLocaleString()}</div>
        </li>
      ))}
    </ul>
  );
}