import { feature, todo } from '@komore/testing';

feature('Controller to response progress chunks', {
  'returns a function that emits the value read from the reader and enqueues it into the controller': todo(),
  'returns a function that completes the observer and closes the controller if the reader is done': todo(),
  'returns a function that emits an error when reading from the reader fails': todo(),
});
