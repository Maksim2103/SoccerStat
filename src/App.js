import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CompetionsCalendar from './pages/CompetionsCalendar/CompetionsCalendar';
import TeamsList from './pages/TeamsList/TeamsList';
import TeamCalendar from './pages/TeamCalendar/TeamCalendar';
import MainPage from './pages/MainPage/MainPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/calendar" component={CompetionsCalendar} />
        <Route path="/teams" component={TeamsList} />
        <Route path="/team/calendar" component={TeamCalendar} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
