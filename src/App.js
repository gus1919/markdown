import { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
const [text, setText] = useState(`
# Welcome to Markdown Previewer
## Fun with React
[title](https://www.example.com)
\`code\`
\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

- first
- second
- third


> Dorothy followed her through many of the beautiful rooms in her castle.



![alt text](image.jpg)

**bold text**
`);

marked.setOptions({
  breaks: true
 })

  return (
    <div className="App">
      <textarea 
      id="editor" 
      onChange = {(event) => {
  setText(event.target.value);
  }} 
  value={text}
  ></textarea>
<div 
id="preview" 
dangerouslySetInnerHTML={{
  __html: marked.parse(text),
}}>
  </div>
    </div>
  );
}

export default App;
