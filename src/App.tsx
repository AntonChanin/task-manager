import Column from './components/ui/Column';
import Card from './components/ui/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <Column>
        <Card article={{ value: `
          create mode 100644 postcss.config.cjs
          create mode 100644 src/store/index.ts
          create mode 100644 tailwind.config.cjs
        `, styles: { className: '' }}} actionBar={{}} />
      </Column>
    </div>
  );
};

export default App;
