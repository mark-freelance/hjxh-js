export interface PddResult {
  success: boolean;
  errorCode: number;
  errorMsg: string | number;
  result: any;
}

export interface PddUserInfo {
  hasLogin: boolean
  id: number
  userId: number
  mallId: number
  isAdUser: boolean
  mallOwner: boolean
  mall: {
    logo: string
    mallId: number
    mall_id: number
    mall_name: string
  }
}

export interface PddUserInfoResult extends PddResult {
  result: PddUserInfo
}

