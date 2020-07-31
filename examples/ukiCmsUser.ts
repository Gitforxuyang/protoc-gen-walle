/**
 * 自动生成 请勿修改
 * Fri Jul 31 2020 14:26:47 GMT+0800 (GMT+08:00)
 */

import { Service } from 'egg'
import { proto as ukiCmsUser } from '../../proto/ukiCmsUser'

export default class ukiCmsUserService extends Service {

    public async getUserInfo(
        data: ukiCmsUser.IGetUserReq,
    ): Promise<ukiCmsUser.IGetUserResp> {
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

    public async postIdentity(
        data: ukiCmsUser.IPostIdentityReq,
    ): Promise<ukiCmsUser.IEmptyResp> {
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

    public async getIdentity(
        data: ukiCmsUser.IGetIdentityReq,
    ): Promise<ukiCmsUser.IGetIdentityResp> {
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

    public async putIdentity(
        data: ukiCmsUser.IPutIdentityReq,
    ): Promise<ukiCmsUser.IEmptyResp> {
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

    public async delIdentity(
        data: ukiCmsUser.IDelIdentityReq,
    ): Promise<ukiCmsUser.IEmptyResp> {
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

    public async putIdentitySort(
        data: ukiCmsUser.IPutIdentitySortReq,
    ): Promise<ukiCmsUser.IEmptyResp> {
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

    public async postAuthUser(
        data: ukiCmsUser.IPostAuthUserReq,
    ): Promise<ukiCmsUser.IEmptyResp> {
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

    public async getAuthUser(
        data: ukiCmsUser.IGetAuthUserReq,
    ): Promise<ukiCmsUser.IGetAuthUserResp> {
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

    public async delAuthUser(
        data: ukiCmsUser.IDelAuthUserReq,
    ): Promise<ukiCmsUser.IEmptyResp> {
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

    public async postUserHandleRecord(
        data: ukiCmsUser.IPostUserHandleRecordReq,
    ): Promise<ukiCmsUser.IEmptyResp> {
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

    public async getUserHandleRecord(
        data: ukiCmsUser.IGetUserHandleRecordReq,
    ): Promise<ukiCmsUser.IGetUserHandleRecordResp> {
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

    public async getUsers(
        data: ukiCmsUser.IGetUsersReq,
    ): Promise<ukiCmsUser.IGetUsersResp> {
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

    public async getUserOne(
        data: ukiCmsUser.IGetUserOneReq,
    ): Promise<ukiCmsUser.ICmsUser> {
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

    public async putPartyState(
        data: ukiCmsUser.IPutPartyStateReq,
    ): Promise<ukiCmsUser.IEmptyResp> {
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

    public async putUserForbid(
        data: ukiCmsUser.IPutUserForbidReq,
    ): Promise<ukiCmsUser.IEmptyResp> {
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

    public async putUserBand(
        data: ukiCmsUser.IPutUserBandReq,
    ): Promise<ukiCmsUser.IEmptyResp> {
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

    public async putUserLevel(
        data: ukiCmsUser.IPutUserLevelReq,
    ): Promise<ukiCmsUser.IEmptyResp> {
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

    public async putUserInfo(
        data: ukiCmsUser.IPutUserInfoReq,
    ): Promise<ukiCmsUser.IEmptyResp> {
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

    public async putUserUnForbid(
        data: ukiCmsUser.IPutUserForbidReq,
    ): Promise<ukiCmsUser.IEmptyResp> {
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

    public async putUserUnBand(
        data: ukiCmsUser.IPutUserBandReq,
    ): Promise<ukiCmsUser.IEmptyResp> {
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

    public async putUserUnLevel(
        data: ukiCmsUser.IPutUserLevelReq,
    ): Promise<ukiCmsUser.IEmptyResp> {
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

    public async getUnionMembers(
        data: ukiCmsUser.IGetUnionMembersReq,
    ): Promise<ukiCmsUser.IGetUnionMembersResp> {
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

    public async getUnionMember(
        data: ukiCmsUser.IGetUnionMemberReq,
    ): Promise<ukiCmsUser.IOneUnionMember> {
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

    public async task(
        data: ukiCmsUser.ITaskReq,
    ): Promise<ukiCmsUser.ITaskResp> {
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

    public async selectIdentity(
        data: ukiCmsUser.INil,
    ): Promise<ukiCmsUser.ISelectIdentityResp> {
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
