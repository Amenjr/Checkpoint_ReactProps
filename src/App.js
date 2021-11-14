import Prof from './Profile/Profile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const handleClick = (x)=> {
    alert("the name of the profile user is"+" "+x);
  };
  return (
    <div className="App">
      <Prof    handleClick={handleClick} fullname="Ben Jaafer Amen" bio="éléve ingénieur en 2eme année génie informatique. je suis sérieux et motivé et je veux améliorer mes experiences et mes compétences" profession="Ingénieur informatique"  button><img src="./245496021_387651376323300_8971701906004155102_n.jpg" alt="photo"></img></Prof>
    </div>
  );
}
export default App;
