"use client";

// Status badge for host/listing stories.
// Note: this component was imported but missing in the original repo; recreated here.

const STYLES = {
  DRAFT: { label: "Draft", classes: "bg-gray-100 text-gray-700 border-gray-300" },
  PENDING: { label: "Pending review", classes: "bg-amber-100 text-amber-800 border-amber-300" },
  PUBLISHED: { label: "Published", classes: "bg-green-100 text-green-800 border-green-300" },
  REJECTED: { label: "Rejected", classes: "bg-red-100 text-red-800 border-red-300" },
  ARCHIVED: { label: "Archived", classes: "bg-slate-100 text-slate-600 border-slate-300" },
};

export default function StoryStatusBadge({ status, size = "normal" }) {
  const s = STYLES[(status || "").toUpperCase()] || {
    label: status || "Unknown",
    classes: "bg-gray-100 text-gray-600 border-gray-300",
  };
  const sizeClasses =
    size === "small" ? "text-xs px-2 py-0.5" : "text-sm px-2.5 py-1";
  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium ${sizeClasses} ${s.classes}`}
    >
      {s.label}
    </span>
  );
}
