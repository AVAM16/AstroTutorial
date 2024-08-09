import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button class="tw-bg-slate-400 tw-text-black tw-rounded-md tw-p-2 tw-drop-shadow-md"
        onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}