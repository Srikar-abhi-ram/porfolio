import { Fragment } from "react";

const STRONG = /^\*\*([\s\S]+?)\*\*$/;

export function EmText({ text, className }: { text: string; className?: string }) {
  const segments = text.split(/(\*\*[^*]+?\*\*)/g);
  return (
    <span className={className}>
      {segments.map((seg, i) => {
        const m = seg.match(STRONG);
        if (m) {
          return (
            <strong key={i} className="font-semibold text-violet-200">
              {m[1]}
            </strong>
          );
        }
        return <Fragment key={i}>{seg}</Fragment>;
      })}
    </span>
  );
}
