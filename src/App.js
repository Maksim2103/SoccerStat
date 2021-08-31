import classes from './App.module.scss';
import Loader from './components/Loader/Loader';

import { useFetchData } from './data/useFetch.Data';
import MainLayout from './Layouts/MainLayout/MainLayout';

function App() {
  const { data, isLoading } = useFetchData();

  return <div>{isLoading ? <Loader /> : <MainLayout data={data} />}</div>;
}

export default App;
