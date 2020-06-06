export interface Banner extends Uri {
  _id: string;
  fid: string;
}

export interface UserInfo {
  avatarUrl: string;
  city: string;
  country: string;
  // 未知，男，女
  gender: 0 | 1 | 2;
  language: string;
  nickName: string;
  province: string;
}

export type StoryStatus = "none" | "doing" | "pause" | "publicity" | "done";

export interface Card {
  // 用户 OPENID
  _id: string;
  value: string;
  created: number;
  updated: number;
}
export interface Story {
  _id: string;
  name: string;
  status?: StoryStatus;
  cards?: Card[];
  quantity?: number;
  appoint?: number;
}

export interface User {
  _id: string;
  name: string;
  thumbnail: string;
  gender: 0 | 1 | 2;
  userinfo?: UserInfo;
}

export interface Stakeholder {
  _id: string;
  role: Role;
  name?: string;
  thumbnail?: string;
  gender?: 0 | 1 | 2;
}

export type Role = "owner" | "member" | "onlooker";

export enum RoleName {
  "owner" = "房主",
  "member" = "参与",
  "onlooker" = "旁观"
}

export enum StakeholderRoleAlias {
  "owner" = "旁观（其他房主功能不受影响）",
  "member" = "参与",
  "onlooker" = "旁观"
}

type ScaleModeType = "arithmetic-mean" | "trimmed-mean" | "median" | "mode";

type ScaleModerateType = "one" | "two" | "floor" | "round" | "ceil";

export enum ScaleMode {
  "arithmetic-mean" = "算术平均数",
  "trimmed-mean" = "切尾平均数",
  "median" = "中位数",
  "mode" = "众数"
}

export enum ScaleModerate {
  "one" = "保留一位小数",
  "two" = "保留二位小数",
  "floor" = "向下取整",
  "round" = "取接近值",
  "ceil" = "向上取整"
}

export const ScaleModes = [
  ScaleMode["arithmetic-mean"],
  ScaleMode["trimmed-mean"],
  ScaleMode.median,
  ScaleMode.mode
];

export const ScaleModerates = [
  ScaleModerate.floor,
  ScaleModerate.round,
  ScaleModerate.ceil,
  ScaleModerate.one,
  ScaleModerate.two
];

export const ScaleModeValues: ScaleModeType[] = [
  "arithmetic-mean",
  "trimmed-mean",
  "median",
  "mode"
];

export const ScaleModerateValues: ScaleModerateType[] = [
  "floor",
  "round",
  "ceil",
  "one",
  "two"
];

export interface Room {
  _id: string;
  name: string;
  owner: string;
  stories: Story[];
  created: number;
  mode: ScaleModeType;
  moderate: ScaleModerateType;
  stakeholders?: Stakeholder[];
}

export interface RoomModel extends Room {
  count: number;
  total: number;
  role: Role;
}
