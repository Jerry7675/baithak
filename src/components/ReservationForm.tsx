"use client";

import { FormEvent, useState } from "react";

export function ReservationForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-sm border border-[var(--line)] bg-cream p-8 text-center">
        <p className="eyebrow text-lake">Request received</p>
        <h3 className="font-display mt-3 text-3xl">We will confirm shortly</h3>
        <p className="mt-3 text-ink-soft">
          A member of the Baithak team will write to you with a table confirmation.
          Most evening seats are kept for walk-ins — come along if you are nearby.
        </p>
        <button
          type="button"
          className="eyebrow mt-8 border border-ink/30 px-5 py-3 transition hover:bg-ink hover:text-cream"
          onClick={() => setSent(false)}
        >
          Make another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <Field label="Full name" name="name" required />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Date" name="date" type="date" required />
        <Field label="Time" name="time" type="time" required />
        <label className="block">
          <span className="eyebrow text-ink/50">Guests</span>
          <select
            name="guests"
            required
            defaultValue="2"
            className="mt-2 w-full border border-[var(--line)] bg-paper px-3 py-3 outline-none focus:border-lake"
          >
            {Array.from({ length: 12 }, (_, i) => i + 1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="eyebrow text-ink/50">Notes</span>
        <textarea
          name="notes"
          rows={4}
          placeholder="Occasion, allergies, terrace preference…"
          className="mt-2 w-full border border-[var(--line)] bg-paper px-3 py-3 outline-none focus:border-lake"
        />
      </label>
      <button
        type="submit"
        className="eyebrow w-full bg-ink px-5 py-4 text-cream transition hover:bg-lake sm:w-auto"
      >
        Request a table
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow text-ink/50">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border border-[var(--line)] bg-paper px-3 py-3 outline-none focus:border-lake"
      />
    </label>
  );
}
