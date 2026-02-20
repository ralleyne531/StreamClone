
import './App.css';

function App() {

  return (
  <>
    <header>
        <li><ul className="nav">
                <li><i class="fa-regular fa-file-image"></i></li>
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
    <main>
        <div className="sidebar">
            LOREM
        </div>
        <div className="container"><video controls src="src/assets/video/black_screen.mp4"></video></div>
        <div className="chat">
            IPSUM
        </div>
    </main>
  </>
  )
}

export default App
