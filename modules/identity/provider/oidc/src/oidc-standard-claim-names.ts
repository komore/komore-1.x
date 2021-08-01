/**
 * OpenID Connect standard claim names
 * @see {@link https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims Standard Claims}
 */
export const oidcStandardClaimNames = [
  /**
   * End-User address
   */
  'address',
  /**
   * End-User birthday
   */
  'birthdate',
  /**
   * End-User e-mail address
   */
  'email',
  /**
   * Boolean indicating whether the End-User e-mail address has been verified
   */
  'email_verified',
  /**
   * End-User surname(s) or last name(s)
   */
  'family_name',
  /**
   * End-User gender
   */
  'gender',
  /**
   * End-User given name(s) or first name(s)
   */
  'given_name',
  /**
   * End-User locale
   */
  'locale',
  /**
   * End-user middle name(s)
   */
  'middle_name',
  /**
   * End-User full name, in displayable form
   */
  'name',
  /**
   * End-user casual name
   */
  'nickname',
  /**
   * End-user profile picture URL
   */
  'picture',
  /**
   * End-User phone number
   */
  'phone_number',
  /**
   * Boolean indicating whether the End-User phone number has been verified'
   */
  'phone_number_verified',
  /**
   * End-user shorthand name when referred to at the Relying Party
   */
  'preferred_username',
  /**
   * End-User profile page URL
   */
  'profile',
  /**
   * End-User identifier at the Issuer
   */
  'sub',
  /**
   * Time the End-User information was last updated, in seconds since epoch
   */
  'updated_at',
  /**
   * End-user web page or blog URL
   */
  'website',
  /**
   * End-User time zone
   */
  'zoneinfo'
] as const;
