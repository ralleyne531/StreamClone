
import './App.css';

function App() {

  return (
    <header>
        <li><ul className="nav">
                <li>icon</li>
                <li>following</li>
                <li>browse</li>
                <li>etc</li>
            </ul>
        </li>
        <li><input type={"text"}/>
            <button type={"submit"}>Submit</button>
        </li>
        <li><div className="profile">
            <p>misc info</p>
            <p>profile icon</p>
        </div></li>
    </header>
  )
}

export default App
