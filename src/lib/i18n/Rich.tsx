/** Renders `**bold**` markup inside translated strings as <strong> spans. */
export function Rich({
  text,
  className = "font-semibold text-ink",
}: {
  text: string;
  className?: string;
}) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className={className}>
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
