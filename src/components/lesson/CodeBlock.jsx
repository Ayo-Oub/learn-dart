import './CodeBlock.css'

export default function CodeBlock({ code, filename }) {
  return (
    <div className="code-block">
      {filename && <span className="code-block__filename">{filename}</span>}
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  )
}
