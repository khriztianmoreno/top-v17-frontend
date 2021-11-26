import HelloWorld from './components/HelloWorld';

import './App.scss';

const profile = {
  name: 'Khriztian Moreno',
  age: 32,
  isTeacher: true,
  hobbies: ['coding', 'reading', 'listening to music'],
};

const boleano = true;

const App = () => (
  <div className="App">
    <HelloWorld
      name="3463464564564564"
      age={32}
      isTeacher={boleano}
      hobbies={['coding', '🥳', 'listening to music']}
      profile={profile}
      sayHello={() => console.log('Hello')}
    >
      <div>
        <h1>title</h1>
      </div>
    </HelloWorld>

    <HelloWorld />
  </div>
);
export default App;
