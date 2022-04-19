// import React from 'react';
// import ReactDOM from 'react-dom';
// function App() {
//   return 'hola mundo';
// }
// ReactDOM.render(<App />, document.getElementById('root'));
// implementacion vieja

import App from './components/App';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const App = () => {
//   return 'hola mundo';
// };

root.render(<App />);
