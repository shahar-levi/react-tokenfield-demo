import React, {useState} from 'react';
import './App.css';
import {TokenField} from "react-tokenfield";
import 'react-tokenfield/dist/index.css';


function App() {
    const [token, setTokens] = useState(['foo', 'bar', 'baz']);
    return (
        <div className="App">
            <TokenField tokens={token} delimiters=' ;,' onChange={({tokens}) => setTokens(tokens)}/>
            <code style={{whiteSpace:'pre-line'}}>
                {`import React, {useState} from 'react';
                import './App.css';
                import {TokenField} from "react-tokenfield";
                import 'react-tokenfield/dist/index.css';


                function App() {
                const [token, setTokens] = useState(['foo', 'bar', 'baz']);
                return (
                <div className="App">
                <TokenField tokens={token} delimiters=' ;,' onChange={({tokens}) => setTokens(tokens)}/>
                </div>
                );
            }

                export default App;`}
            </code>
        </div>
    );
}

export default App;
