# EPIC iO Frontend Challenge

This challenge it was started using the following architecture and methodologies and technical decisions.

- Hexagonal Architecture (Frontend focused):

The Hexagonal Architecture is based on layers like an onion and proposes three base layers, Domain, Application, and Infrastructure. In this case, I focused on the Video as the main Entity (and unique) of the application. Also implemented on the other layers is the implementation of Video repository and controllers inside the infrastructure as well to be used on the Infrastructure too but on use cases and UI.

```javascript
./src
.../domain
.../application
....../useCases

.../infrastructure
....../ui
....../repositories
....../controllers

```



Using this approach the domain folder does know-how will be implemented, and the application layer only can access to domain but doesn't know how the infrastructure will be implemented encouraging the segregation of the responsibilities



- Atomic Design



In this case, Atomic Design provides another way to focus the build and organize the component composition. Getting the possibility to extend reuse and restyle from de main style component resource like Material-UI the components to be used on the solution from de Atoms as minimal components from de Material UI to Organism like the main page using those Molecules components based on the challenge requiments.

```javascript
./infrastructure
..../ui
....../Atoms
....../Molecules
....../Organism

```



- State, context and styling

This challenge uses a ContextAPI implementation to figure out the requirements. In this ContextAPI configuration, it's established and initialized inside de application layer, and some hooks consume them from the infrastructure UI layer. T
he Styling uses de Material UI base, and also a styled-components in some specific implementations to extend the UI functionality 

```javascript
./application
.../context
.../hooks
./infrastructure
.../Atoms
.../Molecules
.../Organism
```
