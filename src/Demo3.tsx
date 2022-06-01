import React, {useState} from 'react';
import './App.css';
import {TokenField, TokenState} from "react-tokenfield";
import 'react-tokenfield/dist/index.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs';


function Demo3() {
    const [tokens] = useState<string[]>([
        "shahar.levi@me.com",
        "john.smith@google.com",
        "invalid-email"
    ]);

    const emailPattern: string =
        "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";


    function getTokenStyle(state: TokenState) {
        return {
            outline: 'none',
            backgroundColor: state.selected ? '#f1f1f1' : 'transparent',
            color: state.invalid ? '#f00' : '#333',
            border: '1px solid #ccc',
            textDecoration: state.invalid ? 'line-through' : 'none',
            borderRadius: '20px',
            padding: 0,
        };
    }

    return (

        <div className='Box'>
            <h1>Customize TokenField</h1>
            <h3>Code Sample</h3>
            <SyntaxHighlighter language="javascript" style={docco}>
                {
                    `
                    import React, {useState} from 'react';
                    import {TokenField} from "react-tokenfield";
                    import 'react-tokenfield/dist/index.css';


                    function App() {
                            const [tokens] = useState<string[]>([
                                                                "shahar.levi@me.com",
                                                                "john.smith@google.com",
                                                                "invalid-email"
                                                             ]);
                
                
                    const emailPattern: string =
                        "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}$";
                    
                
                    function getTokenStyle(state: TokenState) {
                        return {
                            outline: 'none',
                            backgroundColor: 'transparent',
                            color: state.invalid ? '#f00' : '#333',
                            border: '1px solid #ccc',
                            fontWeight: state.selected ? 'bold' : 'normal',
                            textDecoration: state.invalid ? 'line-through' : 'none',
                            borderRadius: 0,
                            padding: 0,
                        };
                    }
                    return (
                     <TokenField
                            placeholder={'Type an email address'}
                            autoFocus={false}
                            tokenFieldCSS={{
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                padding: '15px',
                                background: '#fff',
                                resize: 'none',
                                gap: '2px',
                                height: '200px'
                            }}
                            getTokenCSS={getTokenStyle}
                            showRemoveButton={false}
                            pattern={emailPattern}
                            delimiters={' ;,'}
                            tokens={tokens}
                        />
                         );
                }

              export default App;`
                }
            </SyntaxHighlighter>
            <h3>Demo</h3>
            <TokenField
                placeholder={'Type an email address'}
                autoFocus={false}
                tokenFieldCSS={{
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    padding: '15px',
                    background: '#fff',
                    resize: 'none',
                    gap: '2px',
                    height: '200px'
                }}
                getTokenCSS={getTokenStyle}
                showRemoveButton={false}
                pattern={emailPattern}
                delimiters={' ;,'}
                tokens={tokens}
            />
        </div>
    );
}

export default Demo3;
