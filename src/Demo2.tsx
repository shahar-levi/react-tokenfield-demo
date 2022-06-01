import React, {useState} from 'react';
import './App.css';
import {TokenField} from "react-tokenfield";
import 'react-tokenfield/dist/index.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {Details} from "react-tokenfield/dist/TokenField/TokenField";

function Demo2() {
    const [tokens, setTokens] = useState<string[]>([
        "shahar.levi@me.com",
        "john.smith@google.com",
        "invalid-email"
    ]);
    const [invalid, setInvalid] = useState<string[]|undefined>([]);


    const emailPattern: string =
        "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";

    const handleChange = ({tokens, invalid}: Details) => {
        setTokens(tokens);
        setInvalid(invalid);
    };
    return (

        <div className='Box'>
            <h1>Email Validation Using Regex</h1>
            <h3>Code Sample</h3>
            <SyntaxHighlighter language="javascript" style={docco}>
                {
                    `
                    import React, {useState} from 'react';
                    import {TokenField} from "react-tokenfield";
                    import 'react-tokenfield/dist/index.css';
                    import {Details} from "react-tokenfield/dist/TokenField/TokenField";


                    function App() {
                     const [tokens, setTokens] = useState<string[]>([
                        "shahar.levi@me.com",
                        "john.smith@google.com",
                        "invalid-email"
                    ]);
                    const [invalid, setInvalid] = useState<string[]|undefined>([]);
                
                
                    const emailPattern: string =
                        "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}$";
                
                    const handleChange = ({tokens, invalid}: Details) => {
                        setTokens(tokens);
                        setInvalid(invalid);
                    };
                    
                    return (
                            <div className="App">
                                   <TokenField
                                    autoFocus = {false}
                                    onChange={handleChange}
                                    pattern={emailPattern}
                                    delimiters={' ;,'}
                                    tokens={tokens}
                                    />
                                    <h2>Invalid Email address</h2>
                                    <ul>
                                       {
                                            invalid && invalid.length ?
                                            invalid.map(token => (
                                                <li key={token}>{token}</li>
                                            )) : 'No invalid email address'
                                        }
                                    </ul>
                            </div>
                         );
                }

              export default App;`
                }
            </SyntaxHighlighter>
            <h3>Demo</h3>
            <TokenField
                autoFocus={false}
                onChange={handleChange}
                pattern={emailPattern}
                delimiters={' ;,'}
                tokens={tokens}
            />
            <h4>Invalid Email address</h4>
            <ul>
                {
                    invalid && invalid.length ? invalid.map(token => (
                        <li key={token}>{token}</li>
                    )) : 'No invalid email address'
                }
            </ul>
        </div>
    );
}

export default Demo2;
