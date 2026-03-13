import { useState } from "react";
import type { Npc } from "../types/NPC";

type NpcFormValues = {
  name: string;
  role: string;
  location: string;
  personality: string;
  motivation: string;
  secret: string;
};

type Props = {
  initialValues?: NpcFormValues;
  onSubmit: (values: NpcFormValues) => Promise<void> | void;
  onCancel: () => void;
  submitLabel: string;
};

export default function NpcForm({
  initialValues,
  onSubmit,
  onCancel,
  submitLabel,
}: Props) {
  const [formData, setFormData] = useState<NpcFormValues>(
    initialValues ?? {
      name: "",
      role: "",
      location: "",
      personality: "",
      motivation: "",
      secret: "",
    }
  );

  const [submitting, setSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await onSubmit(formData);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <h3 className="mb-5 text-2xl font-semibold text-white">{submitLabel}</h3>

      <div className="grid gap-4 md:grid-cols-2">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="rounded-xl border border-white/10 bg-[#1a2446] px-4 py-3 text-white placeholder:text-white/40 outline-none"
        />
        <input
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="Role"
          required
          className="rounded-xl border border-white/10 bg-[#1a2446] px-4 py-3 text-white placeholder:text-white/40 outline-none"
        />
        <input
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Location"
          className="rounded-xl border border-white/10 bg-[#1a2446] px-4 py-3 text-white placeholder:text-white/40 outline-none"
        />
        <input
          name="personality"
          value={formData.personality}
          onChange={handleChange}
          placeholder="Personality"
          className="rounded-xl border border-white/10 bg-[#1a2446] px-4 py-3 text-white placeholder:text-white/40 outline-none"
        />
      </div>

      <div className="mt-4 space-y-4">
        <textarea
          name="motivation"
          value={formData.motivation}
          onChange={handleChange}
          placeholder="Motivation"
          rows={3}
          className="w-full rounded-xl border border-white/10 bg-[#1a2446] px-4 py-3 text-white placeholder:text-white/40 outline-none"
        />
        <textarea
          name="secret"
          value={formData.secret}
          onChange={handleChange}
          placeholder="Secret"
          rows={3}
          className="w-full rounded-xl border border-white/10 bg-[#1a2446] px-4 py-3 text-white placeholder:text-white/40 outline-none"
        />
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="rounded-xl bg-violet-600 px-5 py-3 font-medium text-white hover:bg-violet-500 disabled:opacity-60"
        >
          {submitting ? "Saving..." : submitLabel}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-white/10 bg-white/10 px-5 py-3 font-medium text-white hover:bg-white/15"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}