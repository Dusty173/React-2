### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router? 
    React Router lets us handle routing in a way that we can create Single page applications

- What is a single page application?
    An app that allows navigation without refreshing the page.

- What are some differences between client side and server side routing?
    Server Side routing completes a full req/res cycle in which page/html data is sent from a server and received by the client to be displayed.
    Client Side routing uses the browser to re-render a page only where it is required, and not completely refresh the page.

- What are two ways of handling redirects with React Router? When would you use each?
    We can use the `History Library` and push onto history, or we can use the `<Redirect />` component. 
    Redirect will override the current location in the history stack so a user cannot go back to the page we're redirecting from. history.push will push a new entry onto the stack, possibly allowing a user to go back to the page we're redirecting from.
 
- What are two different ways to handle page-not-found user experiences using React Router? 
    One way is to have a catch-all Route at the bottom/end of a Switch and render a 404page, another way is to use a Redirect when a route isn't found to send someone to a 404 page or back to the homepage.

- How do you grab URL parameters from within a component using React Router?
    you would use the `useParams` hook.

- What is context in React? When would you use it?
    Context is a way to pass data down through a component tree with Prop drilling, you would use it when multiple components require some sort of context (styles, other forms of state, etc) but it may not be required by every component.

- Describe some differences between class-based components and function
  components in React.

    A class base component requires us to extend from React, and then create a constructor function with `this.something` etc, and a render function that returns a React element.
    A function base component does not require an extensions, allows easier syntax for using State, not render method is required because we just return JSX.


- What are some of the problems that hooks were designed to solve?
    Ease of reuse with stateful logic between components, Complex components become easier to understand as we can split logic into separate files.