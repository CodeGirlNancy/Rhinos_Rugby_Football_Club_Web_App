import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PlayerProfiles from './components/PlayerProfiles';
import MatchHighlights from './components/MatchHighlights';
import MemberZone from './components/MemberZone';
import TrainingResources from './components/TrainingResources';
import CalendarEvents from './components/CalendarEvents';
import CommunityPrograms from './components/CommunityPrograms';
import HistoricalArchives from './components/HistoricalArchives';
import RecruitmentInfo from './components/RecruitmentInfo';
import Alumni from './components/Alumni';
import TicketBooking from './components/TicketBooking';
import Predictions from './components/Predictions';
import Betting from './components/Betting';
import Sponsors from './components/Sponsors';
import MatchAnalysis from './components/MatchAnalysis';
import Map from './components/Map';
import UploadResult from './components/UploadResult';
import GameResults from './components/GameResults';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/players" component={PlayerProfiles} />
                    <Route path="/match-highlights" component={MatchHighlights} />
                    <Route path="/member-zone" component={MemberZone} />
                    <Route path="/training-resources" component={TrainingResources} />
                    <Route path="/calendar-events" component={CalendarEvents} />
                    <Route path="/community-programs" component={CommunityPrograms} />
                    <Route path="/historical-archives" component={HistoricalArchives} />
                    <Route path="/recruitment-info" component={RecruitmentInfo} />
                    <Route path="/alumni" component={Alumni} />
                    <Route path="/ticket-booking" component={TicketBooking} />
                    <Route path="/predictions" component={Predictions} />
                    <Route path="/betting" component={Betting} />
                    <Route path="/sponsors" component={Sponsors} />
                    <Route path="/match-analysis" component={MatchAnalysis} />
                    <Route path="/map" component={Map} />
                    <Route path="/upload-result" component={UploadResult} />
                    <Route path="/game-results" component={GameResults} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
