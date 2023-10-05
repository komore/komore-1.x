# komore Graph

At its core, komore uses graphs that describe how to process elements.

## Concepts

Before going into details, defining the terms

### Stream

A stream is an active process that moves and transforms messages, from upstream to downstream.

### Message

A message is the processing unit of a stream.

## Defining streams

komore defines a representation of a stream using the following abstractions:

- A **source** is an operator with *exactly one output*, emitting messages towards downstream operators
- A **sink** is an operator with *exactly one input*, accepting messages from upstream operators
- A **flow** is an operator with *exactly one input and output*, transforming elements that flow through it

These abstractions can appear similar to their lower-level RxJS counterparts:

- A **source** is based on *observables*
- A **sink** is based on *subscribers*
- A **flow** is based on *operator functions*

It should be noted, however, that those higher-level abstractions come with more specific requirements.

In practice, the graph nomenclature should be used for higher-level graphs and the RxJS nomenclature for lower-level pipelines.

## Source

A source is an operator with exactly one output.

## Flow

## Sink

## Materialization
