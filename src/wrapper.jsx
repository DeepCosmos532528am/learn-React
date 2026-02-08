//here we will learn about the concept of children props in React. The children prop is a special prop that allows you to pass elements or components as children to a component. It is used to create reusable components that can wrap other components or elements.

//In this example, we have a Wrapper component that takes in children as a prop. The children prop is used to render any elements or components that are passed as children to the Wrapper component. In the Wrapper2 component, we are passing an h1 element as a child to the Wrapper component. The Wrapper component will render the h1 element at the place where we want to show it using the children prop.

function Wrapper({children, color="red"}){//Child component with default color red if color prop is not passed from the parent component.
    return (
    <div style={{color:color, border:"2px solid red", margin:"10px", padding:"10px"}}>
        
        {children}
    </div>)
}

export default Wrapper;