import { Spark } from './Icons';

export default function Marquee({ words }: { words: string[] }) {
  const row = [...words, ...words];
  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {row.map((word, i) => (
          <span className="marquee__item" key={`${word}-${i}`}>
            <span>{word}</span>
            <Spark className="marquee__spark" />
          </span>
        ))}
      </div>
    </div>
  );
}
