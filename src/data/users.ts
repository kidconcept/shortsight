// ─────────────────────────────────────────────────────────────
//  Auth configuration — edit this file to manage access.
// ─────────────────────────────────────────────────────────────

// Password hash — to change the password run:
//   echo -n "yournewpassword" | shasum -a 256
// then paste the result here.
export const PASSWORD_HASH = 'db071f0016bb3d5de2851f37c7577162930b1a28346f29f5a22a7b66bcbfde50';

// Authorized usernames (case-insensitive). Add or remove as needed.
export const AUTHORIZED_USERS: string[] = [
  'morganstanley',
  'crux',
  'swordfish',
];
