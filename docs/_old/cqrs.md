# CQRS

The [CQRS pattern] stands for Command Query Responsibility Segregation.

The pattern sets aside the traditional CRUD - Create, Read, Update, Delete - data store in favor of a split into
separate models for commands and queries.

## Commands vs. Queries

Commands are the only way to change the application state. They do not return information.

Queries are the only way to retrieve information from application state. They do not change the state.

## Advantages

Some of the advantages of CQRS are:

- It is usually more scalable due to the separation between the command and query handling processes
- It is a good fit for event-based models, notably [Event Sourcing]
- It is also suitable to complex domains and benefits from [Domain-Driven Design]

## Drawbacks

Some of the disadvantages of CQRS are:

- It is not as straightforward as CRUD models in terms of implementation
- It implies eventual consistency due to its asynchronous aspect
- It is a different way of thinking about application design and there is a learning curve



[CQRS pattern]: https://martinfowler.com/bliki/CQRS.html
[Domain-Driven Design]: https://domainlanguage.com/ddd/
[Event Sourcing]: ./event-sourcing.md
