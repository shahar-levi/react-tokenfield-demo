import React, {useState} from 'react';
import './App.css';
import {TokenField} from "react-tokenfield";
import 'react-tokenfield/dist/index.css';

import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Demo1() {
    const [token, setTokens] = useState(['foo', 'bar', 'baz']);
    return (

            <div className='Box'>
            <p>
                <h3>Key Features</h3>
                <ul>
                    <li> Select All with Ctrl+A</li>
                    <li> Copy & paste tokens with Ctrl+C and Ctrl+V</li>
                    <li> Keyboard navigation, delete tokens with keyboard (arrow keys, Tab/Shift + Tab)</li>
                    <li> Customizable token renderer</li>
                    <li> Validation using regular expression</li>
                    <li> Customizable token delimiters</li>
                    <li> Customizable token style</li>
                </ul>
            </p>
            <h3>Code Sample</h3>
            <SyntaxHighlighter language="javascript" style={docco}>
                {
                    `import React, {useState} from 'react';
                import {TokenField} from "react-tokenfield";
                import 'react-tokenfield/dist/index.css';


                function App() {
                    const [token, setTokens] = useState(['foo', 'bar', 'baz']);
                    return (
                            <div className="App">
                                 <TokenField tokens={token} delimiters=' ;,'     
                                  autoFocus = {true}                      
                                  onChange={({tokens}) => setTokens(tokens)}/>
                            </div>
                         );
                }

              export default App;`
                }
            </SyntaxHighlighter>
            <h3>Demo</h3>
                <TokenField    autoFocus = {true}  tokens={token} delimiters=';,' onChange={({tokens}) => setTokens(tokens)}/>
            </div>
    );
}

export default Demo1;
