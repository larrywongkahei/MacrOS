import './App.css';
import DashboardContainer from './containers/dashboardContainers/DashboardContainer';
import JournalContainer from './containers/journalContainers/JournalContainer';
import OnboardingContainer from './containers/onboardingContainers/OnboardingContainer';

function App() {
  return (
    <div>
    <DashboardContainer />
    <JournalContainer />
    <OnboardingContainer />
    </div>
  )
}

export default App;
