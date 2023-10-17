import { useState } from "react";
import "./styles.css";

export function SearchInput() {
  const [title, setTitle] = useState("")

  const tags = ["torah", "tanaj", "brithadasha", "profecias", "sanidad"]

  return <div className="input-container">
    <input className="input" type="text" placeholder="Buscar..." value={title} onChange={(e) => {setTitle(e.target.value)}} />
    <ul class="tags">
      {tags.map((tag, i) => <small key={i}>{`#${tag}`}</small>)}
    </ul>
    {title}
  </div>;
}