# Glossary

The komore framework and documentation uses a number of terms that need to be properly understood in order to take
advantage of the features offered by each module.

This glossary attempts to cover all of them with a concise description.

More in-depth information about each term is also provided via links to third-party sources.

### Aggregate

TODO.

### Bounded Context

A bounded context is a coherent, conceptual limit where a [domain model] is applicable.

A bounded context has its own [ubiquitous language] used to describe its [domain model].

A bounded context may have relationships with other bounded context. Those are defined in a [context map].

### Command

A command describes an attempt to modify the state of a [bounded context].

### Context Map

A context map describes the relationships between [bounded contexts].

- [What is strategic design]

### Domain-Driven Design

TODO.

### Domain Model

TODO.

### Event

An event describes a change made to the state of a [bounded context].

### Event Store

TODO.

### Ubiquitous Language

A ubiquitous language is a common, rigorous language between developers and users that should leave no ambiguity over
the meaning of each term.

- [Developing the ubiquitous language] <i>thedomaindrivendesign.io</i>
- [Martin Fowler: Ubiquitous Language] <i>martinfowler.com</i>



[bounded context]: #Bounded-Context
[bounded contexts]: #Bounded-Context
[context map]: #Context-Map
[domain]: #Domain
[event]: #Event
[ubiquitous language]: #Ubiquitous-Language
[Developing the ubiquitous language]: https://thedomaindrivendesign.io/developing-the-ubiquitous-language/
[Martin Fowler: Ubiquitous Language]: https://martinfowler.com/bliki/UbiquitousLanguage.html
[What is strategic design]: https://thedomaindrivendesign.io/what-is-strategic-design/