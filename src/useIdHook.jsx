import { useActionState } from "react";


// # 🆔 React 19: useId Hook - Complete Interview Guide (Hinglish)

// ## 1. What is useId? (Simple Definition)
// `useId` ek React hook hai jo **Unique IDs** generate karne ke liye kaam aata hai. Ye IDs "stable" hoti hain, yani client aur server dono side par same rehti hain.

// ## 2. Why use it? (Interview Perspective)
// Pehle hum IDs manually likhte the (jaise `id="email"`), par ismein do bade problems aate the:
// 1. **ID Collision:** Agar ek hi page par same component do baar use ho jaye, toh dono ki ID same ho jati thi, jo HTML rules ke khilaf hai.
// 2. **SSR Mismatch:** Server-side rendering mein server koi aur ID generate karta tha aur client kuch aur, jisse app crash ho jati thi.

// **`useId` in dono problems ko solve karta hai.**

// ## 3. Real-World Working Demo (Code)
// Is code ko copy karke aap check kar sakte hain. Ye ek reusable input component ka example hai.


import { useId } from "react";

function CustomInput({ label, type = "text" }) {
  // Generate a unique ID for this specific instance
  const id = useId();
  console.log(id ,"Each time unique")
  return (
    <div style={{ marginBottom: "15px", display: "flex", flexDirection: "column" }}>
      {/* Label aur Input ko connect karne ke liye 'id' use ho rahi hai */}
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={`Enter ${label}`} />
    </div>
  );
}

export default CustomInput


/**. Key Interview Q&A (Real Questions)
 * 
 * # 🆔 React useId: Deep Dive Interview Reasons (Hinglish)

---

### Q1: Kya hum useId ko list ki 'key' prop mein use kar sakte hain?
**Answer:** Bilkul Nahi! ❌
**Detailed Reason:** React mein `key` ka maqsad hota hai **Data ko identify karna**. Agar aapki list shuffle hoti hai ya koi item delete hota hai, toh React `key` ko dekh kar decide karta hai ki kaunsa element move hua hai. 
`useId` ek "Stable ID" deta hai jo component ke **position (instance)** par depend karti hai, na ki uske **content** par.

**Agar aisa kar diya toh kya hoga?**
- **Performance Drop:** Agar aap list mein ek naya item beech mein add karoge, toh `useId` se bani saari keys change ho sakti hain. React ko lagega saari list nayi hai aur woh puri list ko "Re-mount" karega.
- **Bugs (State Loss):** Agar aapke list item mein koi input field hai, toh re-render hote hi purana focus aur data gayab ho jayega kyunki React purane component ko delete karke naya bana dega.



---

### Q2: useId ki ID ka format :r0: jaisa kyun hota hai?
**Answer:** Iska main reason hai **Safety** aur **Accessibility Standard**.
**Detailed Reason:** HTML IDs hamesha letter se shuru honi chahiye agar aap CSS selectors (`#id`) use kar rahe ho. Par React ise `:` (colon) se shuru karta hai.

**Aisa kyun kiya gaya?**
- **Isolation:** Ye ensure karne ke liye ki developer galti se bhi in IDs ko CSS styling ya `document.querySelector` ke liye use na kare. 
- **Purpose:** Inka kaam sirf Frontend par `label` aur `input` ko link karna (Accessibility) hai, na ki styling dena.

---

### Q3: Multiple IDs ke liye ek hi useId call kyun karein?
**Answer:** Performance aur Clean Code ke liye.
**Detailed Reason:** Ek component mein agar 5 inputs hain, toh 5 baar `useId()` call karna memory waste hai.

**Best Practice:** Ek base ID generate karo `const baseId = useId()` aur use prefix ke saath use karo:
- `${baseId}-email`
- `${baseId}-password`

**Iska fayda:** Ye ensure karta hai ki ek hi component ke saare related IDs ek common "namespace" share karte hain, jisse debugging asaan ho jati hai.



---

### Q4: Java Full Stack (JFS) mein iska real significance kya hai?
**Answer:** Server-Side Rendering (SSR) Consistency.
**Detailed Reason:** Jab aap Java (Spring Boot) ke saath React use karte ho aur Server-Side Rendering (SSR) karte ho (jaise Next.js ya Hydration mein), toh server HTML generate karta hai aur browser use "hydrate" karta hai.

**Agar useId nahi hota toh kya hota?**
- Server ne ID generate ki `id="123"`.
- Client (Browser) ne JavaScript run ki aur ID generate ki `id="456"`.
- **Hydration Mismatch:** Browser console errors se bhar jayega ki "Server and Client IDs don't match!". User ko UI tuti hui dikh sakti hai. `useId` guarantee deta hai ki dono side par ID hamesha same rahegi.

---

### 💡 Sachin ke liye Summary Tip:
Interview mein agar interviewer fasaane ki koshish kare, toh bas ek line bol dena:
*"Sir, `useId` is for **Accessibility (A11y)** and **SSR Stability**, not for **Data Identification** or **Styling**."* Ye sunte hi interviewer samajh jayega ki aapko "Top 10%" wali knowledge hai.

5. Summary Notes (Hinglish)
Problem: Manual IDs se "ID duplication" aur "Server-Client mismatch" hota tha.

Solution: useId unique, stable IDs deta hai.

Rules: - Ise hamesha top-level par call karein.

Loops ya conditions ke andar call na karein.

List keys ke liye use na karein.

Best for: Accessibility (htmlFor, aria-describedby). */