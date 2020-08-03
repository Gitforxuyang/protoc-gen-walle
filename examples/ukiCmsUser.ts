/**
 * 自动生成 请勿修改
 * Mon Aug 03 2020 11:24:38 GMT+0800 (GMT+08:00)
 */

import { Service } from 'egg'
import { proto as ukiCmsUser } from '../../proto/ukiCmsUser'
export interface Account{
    token: string
    expire: number
    issuedAt: number
    accid: string
}
export interface Risk{
    cheatLevel: number
}
export interface Block{
    status: number
    relieveTime: number
}
export interface Forbid{
    status: number
    relieveTime: number
    count: number
}
export interface Report{
    count: number
    totalReportCount: number
}
export interface Device{
    ukiDevice: string
    phoneType: string
    phoneBrand: string
    os: string
}
export interface App{
    version: string
    channel: number
}
export interface Topic{
    createdAt: number
    id: string
}
export interface Level{
    level: number
    exp: number
}
export interface Logout{
    status: number
    createdAt: number
}
export interface User{
    id: string
    name: string
    ukiId: string
    password: string
    sex: number
    phone: string
    birth: string
    starSign: string
    registeredAt: number
    registeredCity: string
    wantSex: number
    signature: string
    recentLoginAt: number
    recentLoginType: string
    city: string
    robot: number
    position: number[]
    account: (Account|null)
    risk: (Risk|null)
    avatarUrl: string
    block: (Block|null)
    forbid: (Forbid|null)
    ucoin: number
    report: (Report|null)
    device: (Device|null)
    app: (App|null)
    topic: Topic[]
    diamond: number
    giftAmount: number
    diamondAmount: number
    level: (Level|null)
    medalCount: number
    freeze: number
    secretCode: string
    logout: (Logout|null)
}
export interface GetUserReq{
    uid: string[]
    ukiId: string[]
    userId: string[]
    phone: string[]
}
export interface GetUserResp{
    users: User[]
}
export interface EmptyResp{
}
export interface Nil{
}
export interface PostIdentityReq{
    name: string
    manageId: string
}
export interface GetIdentityReq{
    name: string
    startTime: number
    endTime: number
    page: number
    size: number
}
export interface IdentityEntity{
    id: string
    name: string
    count: number
    level: number
    createdAt: number
    updatedAt: number
}
export interface GetIdentityResp{
    items: IdentityEntity[]
    total: number
}
export interface PutIdentityReq{
    id: string
    name: string
    manageId: string
}
export interface DelIdentityReq{
    id: string
    manageId: string
}
export interface IdentitySort{
    id: string
    level: number
}
export interface PutIdentitySortReq{
    items: IdentitySort[]
    manageId: string
}
export interface PostAuthUserItem{
    ukiId: string
}
export interface PostAuthUserReq{
    identityId: string
    items: PostAuthUserItem[]
    manageId: string
}
export interface GetAuthUserReq{
    identityName: string
    startTime: number
    endTime: number
    page: number
    size: number
    ukiId: string
}
export interface AuthUserItem{
    ukiId: string
    uid: string
    name: string
    identify: IdentityEntity[]
    createdAt: number
}
export interface GetAuthUserResp{
    items: AuthUserItem[]
    total: number
}
export interface DelAuthUserReq{
    uid: string
    ids: string[]
    manageId: string
}
export interface PostUserHandleRecordReq{
    userId: string
    type: number
    content: string
    from: string
    manageId: string
}
export interface GetUserHandleRecordReq{
    userId: string
    type: number[]
}
export interface UserHandleRecord{
    type: number
    content: string
    createdAt: number
    createdBy: string
    from: string
}
export interface GetUserHandleRecordResp{
    records: UserHandleRecord[]
}
export interface GetUsersReq{
    userIds: string[]
    ukiIds: string[]
    phones: string[]
}
export interface CmsUser{
    id: string
    name: string
    ukiId: string
    sex: number
    phone: string
    signature: string
    birth: string
    registeredAt: number
    city: string
    avatarUrl: string
    partyScore: number
    partyForbidTime: number
    partyIdentity: number
    forbid: number
    forbidCount: number
    band: number
    level: number
    uid: string
}
export interface GetUsersResp{
    items: CmsUser[]
}
export interface PutPartyStateReq{
    change: number
    forbidTime: number
    userId: string
    manegeId: string
    page: string
}
export interface PutUserForbidReq{
    userId: string
    page: string
    handler: string
    from: number
    custom: number
    forbidDuration: number
}
export interface PutUserBandReq{
    userId: string
    page: string
    handler: string
    from: number
}
export interface PutUserLevelReq{
    userId: string
    page: string
    handler: string
    from: number
}
export interface PutUserInfoReq{
    userId: string
    name: boolean
    sign: boolean
    page: string
    handler: string
}
export interface GetUserOneReq{
    uid: string
    userId: string
    ukiId: string
    phone: string
}
export interface GetUnionMemberReq{
    uid: string
}
export interface GetUnionMembersReq{
    uids: string[]
}
export interface OneUnionMember_Union{
    id: string
    type: number
}
export interface OneUnionMember{
    uid: string
    type: number
    unionMemberType: number
    union: (OneUnionMember_Union|null)
}
export interface GetUnionMembersResp{
    items: OneUnionMember[]
}
export interface TaskReq{
    id: number
}
export interface TaskResp{
    msg: string
}
export interface SelectIdentityResp_Content{
    type: number
    text: string
}
export interface SelectIdentityResp{
    items: SelectIdentityResp_Content[]
}

export default class UkiCmsUserService extends Service {
                
    public async getUserInfo(data: ukiCmsUser.IGetUserReq): Promise<ukiCmsUser.IGetUserResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'getUserInfo',
            {
                data,
            },
        )
        return result
    } 

    public async postIdentity(data: ukiCmsUser.IPostIdentityReq): Promise<ukiCmsUser.IEmptyResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'postIdentity',
            {
                data,
            },
        )
        return result
    } 

    public async getIdentity(data: ukiCmsUser.IGetIdentityReq): Promise<ukiCmsUser.IGetIdentityResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'getIdentity',
            {
                data,
            },
        )
        return result
    } 

    public async putIdentity(data: ukiCmsUser.IPutIdentityReq): Promise<ukiCmsUser.IEmptyResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'putIdentity',
            {
                data,
            },
        )
        return result
    } 

    public async delIdentity(data: ukiCmsUser.IDelIdentityReq): Promise<ukiCmsUser.IEmptyResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'delIdentity',
            {
                data,
            },
        )
        return result
    } 

    public async putIdentitySort(data: ukiCmsUser.IPutIdentitySortReq): Promise<ukiCmsUser.IEmptyResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'putIdentitySort',
            {
                data,
            },
        )
        return result
    } 

    public async postAuthUser(data: ukiCmsUser.IPostAuthUserReq): Promise<ukiCmsUser.IEmptyResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'postAuthUser',
            {
                data,
            },
        )
        return result
    } 

    public async getAuthUser(data: ukiCmsUser.IGetAuthUserReq): Promise<ukiCmsUser.IGetAuthUserResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'getAuthUser',
            {
                data,
            },
        )
        return result
    } 

    public async delAuthUser(data: ukiCmsUser.IDelAuthUserReq): Promise<ukiCmsUser.IEmptyResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'delAuthUser',
            {
                data,
            },
        )
        return result
    } 

    public async postUserHandleRecord(data: ukiCmsUser.IPostUserHandleRecordReq): Promise<ukiCmsUser.IEmptyResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'postUserHandleRecord',
            {
                data,
            },
        )
        return result
    } 

    public async getUserHandleRecord(data: ukiCmsUser.IGetUserHandleRecordReq): Promise<ukiCmsUser.IGetUserHandleRecordResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'getUserHandleRecord',
            {
                data,
            },
        )
        return result
    } 

    public async getUsers(data: ukiCmsUser.IGetUsersReq): Promise<ukiCmsUser.IGetUsersResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'getUsers',
            {
                data,
            },
        )
        return result
    } 

    public async getUserOne(data: ukiCmsUser.IGetUserOneReq): Promise<ukiCmsUser.ICmsUser> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'getUserOne',
            {
                data,
            },
        )
        return result
    } 

    public async putPartyState(data: ukiCmsUser.IPutPartyStateReq): Promise<ukiCmsUser.IEmptyResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'putPartyState',
            {
                data,
            },
        )
        return result
    } 

    public async putUserForbid(data: ukiCmsUser.IPutUserForbidReq): Promise<ukiCmsUser.IEmptyResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'putUserForbid',
            {
                data,
            },
        )
        return result
    } 

    public async putUserBand(data: ukiCmsUser.IPutUserBandReq): Promise<ukiCmsUser.IEmptyResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'putUserBand',
            {
                data,
            },
        )
        return result
    } 

    public async putUserLevel(data: ukiCmsUser.IPutUserLevelReq): Promise<ukiCmsUser.IEmptyResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'putUserLevel',
            {
                data,
            },
        )
        return result
    } 

    public async putUserInfo(data: ukiCmsUser.IPutUserInfoReq): Promise<ukiCmsUser.IEmptyResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'putUserInfo',
            {
                data,
            },
        )
        return result
    } 

    public async putUserUnForbid(data: ukiCmsUser.IPutUserForbidReq): Promise<ukiCmsUser.IEmptyResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'putUserUnForbid',
            {
                data,
            },
        )
        return result
    } 

    public async putUserUnBand(data: ukiCmsUser.IPutUserBandReq): Promise<ukiCmsUser.IEmptyResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'putUserUnBand',
            {
                data,
            },
        )
        return result
    } 

    public async putUserUnLevel(data: ukiCmsUser.IPutUserLevelReq): Promise<ukiCmsUser.IEmptyResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'putUserUnLevel',
            {
                data,
            },
        )
        return result
    } 

    public async getUnionMembers(data: ukiCmsUser.IGetUnionMembersReq): Promise<ukiCmsUser.IGetUnionMembersResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'getUnionMembers',
            {
                data,
            },
        )
        return result
    } 

    public async getUnionMember(data: ukiCmsUser.IGetUnionMemberReq): Promise<ukiCmsUser.IOneUnionMember> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'getUnionMember',
            {
                data,
            },
        )
        return result
    } 

    public async task(data: ukiCmsUser.ITaskReq): Promise<ukiCmsUser.ITaskResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'task',
            {
                data,
            },
        )
        return result
    } 

    public async selectIdentity(data: ukiCmsUser.INil): Promise<ukiCmsUser.ISelectIdentityResp> {
        const { ctx } = this
        const result = await ctx.grpcInvoker(
            'ukiCmsUser',
            'CmsuserService',
            'selectIdentity',
            {
                data,
            },
        )
        return result
    } 
}
