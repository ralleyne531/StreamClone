
import './App.css';

function App() {

  return (
    <header>
        <li><ul className="nav">
                <li>icon</li>
                <li>following</li>
                <li>browse</li>
                <li><i class="fa-solid fa-caret-down"></i></li>
            </ul>
        </li>
        <li className="search"><input type={"text"}/>
            <button type={"submit"}><i class="fa-solid fa-magnifying-glass"></i></button>
        </li>
        <li><div className="profile">
            <i className="fa-solid fa-circle-user"></i>
        </div>
        </li>
    </header>
  )
}

export default App
