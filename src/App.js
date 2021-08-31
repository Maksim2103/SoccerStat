import classes from './App.module.scss';
import Loader from './components/Loader/Loader';

import { useFetchData } from './data/useFetch.Data';
import CardItemList from './components/CardItemList/CardItemList';

function App() {
  const { data, isLoading } = useFetchData();

  return <div>{isLoading ? <Loader /> : <CardItemList data={data} />}</div>;
}

export default App;
