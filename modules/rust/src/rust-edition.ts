import { type rustEditions } from './rust-editions';

/**
 * Rust edition
 */
export type RustEdition = (typeof rustEditions)[number];
