import { ListenOptions } from 'net';

export type ServerConfiguration = Readonly<{
  http?: Readonly<{
    listen?: ListenOptions;
  }>;
}>;
