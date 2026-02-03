import Login from './UserComponents.jsx' //This is how the 
import { ProfileImage } from './UserComponents.jsx'; //This is how the named exports are imported, just wrap in curl braces
import { LoginButton } from './UserComponents.jsx'
//This is how the named exports are imported, just wrap in curl braces. Rest all is same

// can all use the inline importing as: import Login, {ProfileImage, LoginButton} from './UserComponents.jsx'

import {userKey, changeUserKey} from './UserComponents.jsx'

function App() {
  return (<div>
    <Login />
    <ProfileImage />
    <LoginButton />
    <h1>The current user-key is: {userKey}</h1>
    <h1>The function changed the key from {userKey} to {changeUserKey()}  </h1>
  </div>)
}

export default App;  