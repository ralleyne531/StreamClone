import users from './assets/profiles.json'
import profileImg0 from './assets/img/profile_icons/profile_Img0.png'
import {useEffect, useState} from "react";
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
            <p>Following</p>
            <ul id="following">
                {users.map((user) => (<li key={user.id}><img src={profileImg0} alt="profile icon" id="pfp"/> <span>{user.username}</span></li>))}
            </ul>
            <p>Suggested Channels</p>
        </div>
        <div className="container"><video controls src="src/assets/video/black_screen.mp4" muted autoPlay playsInline ></video></div>
        <div className="chat">
            <div className="chatbox">
            <input type={"text"}/>
            <button type={"submit"}><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
    </main>
  </>
    )
}

export default App
