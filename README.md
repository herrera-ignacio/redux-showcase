# Redux Showcase

- [Redux Showcase](#redux-showcase)
  - [Must Know](#must-know)
    - [What Is Redux?](#what-is-redux)
    - [What about Flux?](#what-about-flux)
    - [And what's the difference?](#and-whats-the-difference)
    - [Three Fundamental Principles](#three-fundamental-principles)
      - [Single Source of Truth](#single-source-of-truth)
      - [State is read-only](#state-is-read-only)
      - [Changes are made with pure functions](#changes-are-made-with-pure-functions)
  - [Design Patterns](#design-patterns)
    - [Classic](#classic)
  - [Further Reference](#further-reference)

## Must Know

### What Is Redux?

Redux is a pattern and library for **managing and updating application state**, using events called "*actions*". It serves as a **centralized** store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a *predictable fashion*.

![redux-flow](./redux-flow.gif)

### What about Flux?

![](2021-12-27-11-00-00.png)

>  **Unidirectional data flow** is one of the integral concepts of Flux: All data must flow in only one direction, and is a significant part of what keeps everything so predictable.

* **Actions**: Representations of the ways users can interact with the application.

* **Dispatcher**: Receives an action and forwards it to each of the application's store.

* **Stores**: Structures which hold the application's state, as well as the logic around how to update that state.

* **Views**: What the user sees and interacts with. They are the interface for displaying the data from the stores, as well as for sending actions back to the stores through the dispatcher.

### And what's the difference?

![](2021-12-27-11-02-31.png)

Redux data flow looks like this:

![](2021-12-27-11-02-09.png)

* **No Dispatcher**: Redux has a single store, so there is only a single destination to broadcast new actions to, thus eliminating the need for a dispatcher.

* **A Single, Less Convoluted Store**: All application's state is located within a centralized store which acts as the application's single source of truth. Additionally, the store's responsibilities have been reduced, it is now only responsible for containing the state, and is no longer in charge of determining how to adjust its state in response to actions. That logic has been delegated to reducers.

* **Reducers**: Pure functions which accept the current state and a given action as arguments, and which output either the unmodified state or a new, edited copy of the state. Redux considers state to be immutable.

### Three Fundamental Principles

1. Single Source of Truth
2. State is read-only
3. Changes are made with pure functions

#### Single Source of Truth

> The global state of your application is stored in an object tree within a single store.

This makes it easy to create universal apps, as the state from your server can be serialized and hydrated into the client with no extra coding effort.

#### State is read-only

> The only way to change the state is to emit an action, an object describing what happened.

This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state. Because all changes are centralized and happen ony by one in a strict order, there are no subtle race conditions to watch out for.

As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

#### Changes are made with pure functions

> To specify how the state tree is transformed by actions, you write pure reducers.

Reducers are just pure functions that take the previous state and an action, and return the next state (a new one, instead of mutating the previous state). Because reducers are just functions, you can control the order in which they are called, pass additional data, or even make reusable reducers for common tasks such as pagination.

## Design Patterns

> All examples are based on React+Typescript, see [Quick Start Reference](https://react-redux.js.org/tutorials/typescript-quick-start). 

### Classic

## Further Reference

* [Flux notes](https://github.com/herrera-ignacio/architect-handbook#flux--redux)
* [Redux notes](https://github.com/herrera-ignacio/architect-handbook#technology-specifics)

