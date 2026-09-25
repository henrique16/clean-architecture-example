# Clean Architecture Example
### Practical example of clean architecture using TypeScript. Technology should be a detail, not the foundation of the software.

Even without connecting to a database or creating the publishing service, we were able to implement the use case logic using the repository and service interfaces as contracts.

This allows us to test the entire use case logic using in-memory data and a fake publishing service. Later, we can choose the technologies we want to use and implement the infrastructure layer that fulfills the contracts defined by the repository and service interfaces.

Notice that the use case has no dependency on any specific technology. It only depends on the contract interfaces, which protects the layer. If we need to replace a technology in the future, the interface contracts remain unchanged. We only need to update the infrastructure layer and configure the new technology in the composition layer.

#### How would you implement the repository and use case layers?
