/**
 * ************************************
 *
 * @module  index.js (inside /renderer) - originally called renderer.tsx
 * @author Timothy Mai (reformatted version)
 * @date 10/14/19
 * @description main React.js component rendered by Electron, entry point to app
 * 
 * note: /renderer was called /client in original project
 *
 * ************************************
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import './styles.css';  // there was no style sheet in the original folder 
import App from './components/app.tsx';

// the below code was in the original code, but the variables aren't used anywhere
// const GOOGLE_APPLICATION_CREDENTIALS = {};
// const zone = 'us-central1-a';

ReactDOM.render(<App />, document.querySelector('#app'));
