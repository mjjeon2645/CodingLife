import ReactDOM from 'react-dom/client';
import App from './App';

export default function main() {
  const element = document.getElementById('root');

  if (!element) {
    return;
  }

  const root = ReactDOM.createRoot(element);

  root.render(<App />);
}

main();
