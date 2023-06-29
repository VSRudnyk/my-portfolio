import Header from './components/Header';
import AnimatedRoutes from './components/AnimatedRoutes';

function App() {
  const personalDetails = {
    name: 'Vladimir Rudnyk',
    location: 'Kyiv, Ukraine',
    email: 'v.rudnyk@gmail.com',
    availability: 'Open for work',
    brand:
      'Developer with experience in team leadership and team development in GoIT team projects. Experience working in SCRUM teams with 1-week sprints and retrospectives after the project. Strengths:  confidence, results-oriented, excellent problem-solving and interpersonal skills. Successfully completed programming courses. Gained skills in JavaScript, React, React-Native, HTML, CSS, and Node.js, in teamwork on several team projects. Well-developed qualities such as the ability to work in a team, responsibility, self-confidence, and a good sense of humor. I am constantly learning something new and developing my programming skills.',
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
