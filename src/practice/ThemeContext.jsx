import { createContext, useContext, useState, useMemo } from "react";

// 1. Context Object: Ye sirf ek 'Empty Container' hai (Khali balti). 
// Is line par koi data feed nahi hua hai.
export const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const name = "Sachin";

    function toggleThemeMode() {
        setIsDarkMode(!isDarkMode);
    }

    // Button as a component/slot
    const btn = <button onClick={toggleThemeMode}>Switch Theme</button>;     

    // 2. Optimization (useMemo): 
    // Yahan hum decide karte hain ki 'Global Value' kya hogi.
    // useMemo ensures ki jab tak name ya isDarkMode na badle, 
    // tab tak 'contextValue' ka memory reference same rahega.
    const contextValue = useMemo(() => {
        return { 
            name,           // Global Property 1
            isDarkMode,     // Global Property 2
            switchButton: btn // Global Property 3 (UI element)
        };
    }, [isDarkMode, name]); 
    // Dependency array: Inke badalne par hi naya object banega.

    return (
        /* 3. VALUE FEEDING POINT: 
           Asliyat mein data yahan 'feed' hota hai value attribute ke zariye.
           Ab jo bhi 'children' is tag ke beech mein aayenge, 
           unke liye ye data 'GLOBAL' ban jayega. */
        <ThemeContext.Provider value={contextValue}>
            <div style={{ border: '2px dotted gray', padding: '10px', marginTop:"10px" }}>
                <small>Provider Area (Global scope starts here)</small>
                {/* <h1> yahan local hai, but Context ka part hai */}
                <h1>{name}'s App</h1>
                
                {children} {/* DisplayText aur baaki components yahan aayenge */}
            </div>
        </ThemeContext.Provider>
    );
}

// Ek naya EXTRA component jo same global data use karega
function AdminPanel() {
    // Bina props pass kiye direct data access (Global power)
    const { name, isDarkMode } = useContext(ThemeContext);
    return (
        <div style={{ border: "1px solid red", marginTop: "20px", padding: "10px" }}>
            <h4>Admin Panel</h4>
            <p>Logged in as: {name}</p>
            <p>System Status: {isDarkMode ? "Night Mode Active" : "Day Mode Active"}</p>
        </div>
    );
}

function DisplayText() {
    // 4. CONSUMING DATA: Destructuring deep level tak kaam karti hai.
    // Humne contextValue object se specific keys nikaal li.
    const { isDarkMode, switchButton, name } = useContext(ThemeContext);

    const styleComponents = {
        backgroundStyle: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black"
    };

    return (
        <div style={{ 
            width: "100vw", 
            color: styleComponents.color, 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            flexDirection: "column", 
            gap: "20px" 
        }}>
            <div style={{
                width: "100%", 
                backgroundColor: styleComponents.backgroundStyle,
                height: "50px",
                transition: "0.3s" // Thoda smooth effect
            }}></div>
            
            {switchButton}
            <h3>Current User: {name}</h3>

            {/* AdminPanel ko yahan call kiya, ye bhi context use karega */}
        </div>
    );
}

// 5. WRAPPER: Sabko binding karne wala parent
function Wrapper() {
    return (
        <ThemeProvider>
            {/* DisplayText ab 'children' ban gaya hai */}
            <DisplayText />
            <AdminPanel />

        </ThemeProvider>
    );
}

export default Wrapper;