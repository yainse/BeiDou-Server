export type RoleType = '' | '*' | 'admin' | 'user';
export interface UserState {
  id?: number;
  name?: string;
  pin?: string;
  pic?: string;
  loggedin?: number;
  lastlogin?: string;
  createdat?: string;
  birthday?: string;
  banned?: boolean;
  banreason?: string;
  macs?: string;
  nxCredit?: number;
  maplePoint?: number;
  nxPrepaid?: number;
  characterslots?: number;
  gender?: number;
  tempban?: string;
  greason?: string;
  tos?: boolean;
  sitelogged?: string;
  webadmin?: boolean;
  nick?: string;
  mute?: boolean;
  email?: string;
  ip?: string;
  rewardpoints?: number;
  votepoints?: number;
  hwid?: string;
  language?: number;
  role: RoleType;
  avatar: undefined,
}
