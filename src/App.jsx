import './app.scss';
import Accueil from './components/Accueil/Accueil'
import Presentation from './components/Presentation/Presentation'
import LearningGame from './components/LearningGame/LearningGame'
import MecaAuto from './components/MecaAuto/MecaAuto'
import MentorGoal from './components/MentorGoal/MentorGoal'
import MyClickerGame from './components/MyClickerGame/MyClickerGame'
import RestaurantAdvisor from './components/RestaurantAdvisor/RestaurantAdvisor'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="app">
      <div className="sections">
        <Accueil />
        <Presentation />
        <MentorGoal />
        <MecaAuto />
        <MyClickerGame />
        <LearningGame />
        <RestaurantAdvisor />
        <Footer />
      </div>
    </div>
  );
}

export default App;
