// import classes from './App.module.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import TeamsPage from './pages/TeamsPage/TeamsPage';
import CalendarCompetitionsPage from './pages/CalendarCompetitionsPage/CalendarCompetitionsPage';
import CalendarTeamPage from './pages/CalendarTeamPage/CalendarTeamPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/teams/:idChampionat" component={TeamsPage} />
        <Route
          path="/calendar/:idChampionat"
          component={CalendarCompetitionsPage}
        />
        <Route path="/team/:idTeam/calendar" component={CalendarTeamPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
