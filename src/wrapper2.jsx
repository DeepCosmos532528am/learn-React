import Wrapper from './wrapper.jsx'

function Wrapper2() {//Child component
    return <div>
        {/* <h1>This is the Wrapper2 JSX component</h1> */}
        <Wrapper> {/**returning the h1 component to the Wrapper Component. It will render full Wrapper Component and the returned child component at the place where we want to show it in Wrapper Component using the children prop*/}

            <h1>returned from Wrapper2 compo to Wrapper1 compo</h1>
        </Wrapper>

        <Wrapper color="blue"><hr />
            <h1>Kya haal h?</h1></Wrapper>

        <Wrapper><hr />
            <h1>mast h</h1></Wrapper>

        <Wrapper color='orange'><hr />
            <h1>Pakka</h1></Wrapper>

        <Wrapper><hr />
            <h1>Hum pucche pakka!!!</h1></Wrapper>

        <Wrapper><hr />
            <h1>Baigan!!</h1></Wrapper>

{/**Demonstration by creating Reusable component */}


    </div>


}
export default Wrapper2;