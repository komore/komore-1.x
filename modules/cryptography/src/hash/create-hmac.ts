import { isInstanceOf } from '@komore/functional';
import { deferPromise, map, mergeMap, throwIfError } from '@komore/reactive';

import { cryptographyError } from '../cryptography.error';
import { type HashAlgorithm } from './hash-algorithm';
import { type HmacOptions } from './hmac-options';

/**
 * Creates a function that returns a hash-based message authentication code, or HMAC
 *
 * @param hmacOptions HMAC options
 * @returns Function that returns a HMAC
 */
export function createHmac(hmacOptions: HmacOptions): (value: string) => Observable<Uint8Array> {
  const { hashAlgorithm, key } = hmacOptions;
  const name = 'HMAC';
  return value =>
    importCryptoKey(name, hashAlgorithm, key).pipe(
      mergeMap(cryptoKeyToSigned(name, value)),
      map(arrayBuffer => new Uint8Array(arrayBuffer)),
      throwIfError(isInstanceOf(DOMException), e => {
        if (e.name === 'NotSupportedError') {
          return cryptographyError.unsupportedHashAlgorithn({ hashAlgorithm });
        }

        return e;
      })
    );
}

function importCryptoKey(name: string, hash: HashAlgorithm, key: string | Uint8Array): Observable<CryptoKey> {
  const keyData = typeof key === 'string' ? new TextEncoder().encode(key) : key;
  return deferPromise(() => crypto.subtle.importKey('raw', keyData, { name, hash }, false, ['sign']));
}

function cryptoKeyToSigned(name: string, value: string): (cryptoKey: CryptoKey) => Observable<ArrayBuffer> {
  const data = new TextEncoder().encode(value);
  return cryptoKey => deferPromise(() => crypto.subtle.sign(name, cryptoKey, data));
}
