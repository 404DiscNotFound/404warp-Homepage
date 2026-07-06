export default function WikiContentRenderer({ content }) {
  return (
    <div className="space-y-4">
      {content.map((block, i) => {
        switch (block.type) {
          case 'paragraph':
            return <p key={i} className="text-muted-foreground leading-relaxed">{block.text}</p>;
          case 'heading':
            return <h3 key={i} className="text-lg font-heading font-bold text-white mt-6 mb-2">{block.text}</h3>;
          case 'list':
            return (
              <ul key={i} className="space-y-2">
                {block.items.map((item, j) => (
                  <li key={j} className="flex gap-2 text-muted-foreground">
                    <span className="text-cyan-400 flex-shrink-0 mt-0.5">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case 'code':
            return (
              <pre key={i} className="bg-black/60 border border-white/5 rounded-xl p-4 overflow-x-auto custom-scrollbar">
                <code className="text-sm font-mono text-cyan-300 whitespace-pre">{block.code}</code>
              </pre>
            );
          case 'table':
            return (
              <div key={i} className="overflow-x-auto custom-scrollbar rounded-xl border border-white/5">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.02]">
                      {block.headers.map((h, j) => (
                        <th key={j} className="text-left py-2 px-3 text-cyan-400 font-mono text-xs uppercase tracking-wider">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, j) => (
                      <tr key={j} className="border-b border-white/5">
                        {row.map((cell, k) => (
                          <td key={k} className={`py-2 px-3 ${k === 0 ? 'font-mono text-cyan-300' : 'text-muted-foreground'}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}