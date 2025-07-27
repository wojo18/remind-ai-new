export default function ReminderList({ reminders }) {
  if (reminders.length === 0) {
    return <p className="p-4 text-center text-gray-500">Brak przypomnień</p>;
  }

  return (
    <ul className="p-4">
      {reminders.map((reminder) => (
        <li key={reminder.id} className="border-b py-2">
          {reminder.text}
        </li>
      ))}
    </ul>
  );
}
