# Event Sourcing

The [Event Sourcing pattern] TODO

## Event

An event is something that has happened already. When following [Domain-Driven Design] approach, events should use verbs
in the past tense, as they are part of the [Ubiquitous Language].

In most traditional applications...

## Command

## TODO

- Domain: entire set of events for a specific domain, e.g. all user events, all article events, etc.
- Aggregate: cluster of related events in a domain, e.g. all events for a specific user, all events for a specific article, etc.
- Event: something that happens to a domain entity
- Projection: data built from a set of events, asynchronously, to help with queries

[Domain-Driven Design]
[Event Sourcing pattern]: https://martinfowler.com/eaaDev/EventSourcing.html
[Ubiquitous Language]: TODO
