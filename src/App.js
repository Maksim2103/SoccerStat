import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import TeamsPage from './pages/TeamsPage/TeamsPage';
import CalendarCompetitionsPage from './pages/CalendarCompetitionsPage/CalendarCompetitionsPage';
import CalendarTeamPage from './pages/CalendarTeamPage/CalendarTeamPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box padding={3}>
        <Switch>
          <Route path="/" component={MainPage} exact />
          <Route path="/teams/:idChampionat" component={TeamsPage} />
          <Route
            path="/calendar/:idChampionat"
            component={CalendarCompetitionsPage}
          />
          <Route path="/team/:idTeam/calendar" component={CalendarTeamPage} />
        </Switch>
      </Box>
    </BrowserRouter>
  );
}

export default App;
