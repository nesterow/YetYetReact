## YetYet Another React
Super mega awesome yet-yet another waste of my skills.

## Stack
- TypeScript
- React
- Redux, redux-observable, RxJs
- JSS, React-JSS


## Architecture

1. Redux Store
- All asyncronous actions are dispatched trough [Epic Middlewares](https://redux-observable.js.org/docs/basics/Epics.html)

2. Views
- Components use redux-connected HOC
- No components depend on asyncrouns calls or promises. All actions are dispatched syncronously
- You can easily integrate views into another redux-driven applications

3. Services
- Todo API service provides a factory for connecting more API providers
- Todo API uses localStorage, the async delays are random

4. Styles
Maybe some day in the future. The idea is that you use SCSS only for writing skins, default styles be shipped within components. 


