/**
 * Get Secrets Manager random password parameters
 *
 * @see {@link https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetRandomPassword.html#API_GetRandomPassword_RequestParameters GetRandomPassword Request Parameters}
 */
export interface GetSecretsManagerRandomPasswordParameters {
  /**
   * List of characters that should not be in the password
   */
  readonly ExcludeCharacters?: string;
  /**
   * Whether lower-case letters should be excluded from the password
   *
   * @default false
   */
  readonly ExcludeLowercase?: boolean;
  /**
   * Whether numbers should be excluded from the password
   *
   * @default false
   */
  readonly ExcludeNumbers?: boolean;
  /**
   * Whether punctation should be excluded from the password
   *
   * @note Punctuation characters are `!`, `"`, `#`, `$`, `%`, `&`, `'`, `(`, `)`, `*`, `+`, `,`, `-`, `.`, `/`, `:`, `;`, `<`, `=`, `>`, `?`, `@`, `[`, `\\`, `]`, `^`, `_`, `\``, `{`, `|`, `}` and `~`
   * @default false
   */
  readonly ExcludePunctuation?: boolean;
  /**
   * Whether upper-case letters should be excluded from the password
   *
   * @default false
   */
  readonly ExcludeUppercase?: boolean;
  /**
   * Whether the password can include spaces
   *
   * @default false
   */
  readonly IncludeSpace?: boolean;
  /**
   * Password length
   *
   * @default 32
   */
  readonly PasswordLength?: number;
  /**
   * Whether at least one character from each included type - lower-case, upper-case, number and puncutation - must be present
   *
   * @default true
   */
  readonly RequireEachIncludedType?: boolean;
}
