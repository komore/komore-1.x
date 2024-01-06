import { type IncomingMessage } from 'node:http';

export function incomingMessageToProtocol(incomingMessage: IncomingMessage): string {
  const { socket } = incomingMessage;
  const secure = 'encrypted' in socket && socket.encrypted;
  // TODO: ws/wss
  return secure ? 'https' : 'http';
}
