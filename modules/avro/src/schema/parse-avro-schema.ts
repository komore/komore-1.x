import { parse, type Type } from 'avsc';

import { deferValue } from '@komore/reactive';

import { type AvroSchema } from './avro-schema';

/**
 * Parses an Avro schema
 *
 * @param schema Schema string
 * @returns Avro schema
 * @template T Schema type
 */
export function parseAvroSchema<T>(schema: string): AvroSchema<T> {
  const avroSchema = parse(schema) as Type;

  return {
    valueToBuffer: value => deferValue(() => avroSchema.toBuffer(value)),
  };
}
