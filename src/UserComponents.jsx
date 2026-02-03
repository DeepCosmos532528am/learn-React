// Here we will see Why need to import and export Components
//Make new file for components (UserComponents.jsx created)
//Export Component- (i)Default export (ii)Named export (iii)Multiple export
//Import Component- (i)Default import (ii)Named import (iii)Multiple import


function Login() {
    return (<div>
        <h1>This is the Login form </h1>
    </div>)
}
export default Login //This is the Default export,This is the main component of any file, it can only be one in one .jsx 


export function ProfileImage() { //here export keyword shows, these are not the default component and are named export
    return (<div>
        <h1>This is the Profile Image</h1>
    </div>)
}

export function LoginButton() { //here export keyword shows, these are not the default component and are named export
    return (<div>
        <h1>This is a Login Button</h1>
    </div>)
}

//Look we can export the simple variable or function as well via named export...

export const userKey = "currentKey "

export function changeUserKey(userKey) {
    return userKey = "key-changed"
}

//Accha wese pata/yaad h na ki, ye humne html nahi JSX likha h!😅

// ==================== ADDITIONAL NOTES ====================

// 1. **When to Use Default vs Named Exports:**
//    - **Default Export** is typically used when you are exporting one thing (e.g., a single component, function, or class).
//      - Example: export default MyComponent;
//    - **Named Export** is used when you want to export multiple items from the same file, and you need to reference them by their names.
//      - Example: export { MyComponent, AnotherComponent };

// 2. **Import Aliases:**
//    - You can **rename imports** using `as` for better clarity or avoid naming conflicts.
//      - Example: import { ProfileImage as UserImage } from './UserComponents.jsx';
//    - This allows you to avoid conflicts between imports with the same name.

import { ProfileImage as UserImage } from './UserComponents.jsx';  // Renaming import

// 3. **Importing Styles** (Common in React):
//    - You can import **CSS files** or **CSS Modules** to style your components.
//    - Example (CSS file): import './App.css';
//    - Example (CSS Modules): import styles from './App.module.css'; 

// 4. **Exporting from Index.js** (Common practice in larger projects):
//    - You can simplify imports by exporting components from an `index.js` file in the `components` folder.
//      - Example in `components/index.js`: export { default as Login } from './Login';
//      - This allows importing components like: `import { Login } from './components';`

// 5. **Exporting Named Function vs Anonymous Function**:
//    - You can export **named functions** or **anonymous functions** directly.
//    - Named export example: export function changeUserKey() { ... }
//    - Anonymous export example: export default function() { ... }

// 6. **Common Import Mistakes:**
//    - Forgetting curly braces when importing named exports: `import { Component } from './file'`
//    - Using the wrong file extension or path (always ensure `.jsx` or `.js` is correct based on your setup).
//    - Mixing default and named imports incorrectly:
//      - Correct: `import Login, { ProfileImage } from './UserComponents.jsx';`
//      - Incorrect: `import { Login, ProfileImage } from './UserComponents.jsx';`
//      - The default export must be imported without curly braces.

// ==================== ADDITIONAL EXAMPLE ====================
