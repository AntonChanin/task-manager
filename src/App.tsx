import Column from './components/ui/Column';
import Card from './components/ui/Paper';
import Title from './components/ui/Title';
import './App.css';
import Paper from './components/ui/Paper';
import Button from './components/ui/Button';
import Article from './components/ui/Article';

function App() {
  return (
    <div className="App">
      <div className="flex-col bg-blue-400 p-4 font-sans w-full h-full">
        <Title className="my-2 w-max text-white text-2xl" value="Welcome board" />
        <div className="flex">
          <Column value="Basics">
            <Paper>
              <Button className="opacity-0 flex ml-auto hover:opacity-100 absolute top-0 right-0" value={'edit'} variant="thirdy" />
              <Article value={`
                create mode 100644 postcss.config.cjs
                create mode 100644 src/store/index.ts
                create mode 100644 tailwind.config.cjs
              `} />
            </Paper>
          </Column>
          <Column />
        </div>     
      </div>    
    </div>
  );
};

export default App;
