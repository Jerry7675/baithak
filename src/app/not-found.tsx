import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-paper px-6 pt-24 text-center">
      <p className="eyebrow text-lake">404</p>
      <h1 className="font-display mt-4 text-5xl">This table is empty</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        The page you asked for has wandered off along the Lakeside strip.
      </p>
      <Link
        href="/"
        className="eyebrow mt-8 bg-ink px-6 py-3 text-cream transition hover:bg-lake"
      >
        Back home
      </Link>
    </section>
  );
}
