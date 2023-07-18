import Cards from './components/Cards/Cards';
import MainLayout from './layouts/MainLayout';

const App = () => {
  return (
    <div className="App">
      <MainLayout>
        <Cards />
      </MainLayout>
    </div>
  );
};

export default App;
