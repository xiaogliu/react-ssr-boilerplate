import Link from 'next/link';

export default function About() {
  return (
    <div>
      <p>This is the about page</p>
      <Link href="/index">
        <button>index page</button>
      </Link>
    </div>
  );
}
