//引入数据处理方法
import {
    transToTime,
    gameInfoFormatter,
    roomInfoFormatter,
    isAndroidFormatter,
    bigNumberFormatter
} from '@/libs/dataColumnFormatter'

export function realtimeTable() {
    return {
        columns: [
            {
                title: '实时在线',
                name: 'OnlineNum'
            }, {
                title: '总新增',
                name: 'TodayRegister'
            }, {
                title: '总活跃',
                name: 'TodayActive'
            }, {
                title: '付费人数',
                name: 'TodayChiz'
            }, {
                title: '付费金额',
                name: 'TodayRec'
            }, {
                title: '付费率',
                name: 'TodayRate'
            }, {
                title: '兑换人数',
                name: 'TodayDuih'
            }, {
                title: '兑换积分',
                name: 'TodayExc',
                formatter: bigNumberFormatter
            }, {
                title: '兑换金额',
                name: 'TodayExcNum'
            }
        ],
        data: []
    }
}

export function summaryTable() {
    return {
        columns: [
            {
                title: '总注册人数',
                name: 'TotalRegister'
            }, {
                title: '总充值额',
                name: 'TotalRecharge'
            }, {
                title: '总充值人数',
                name: 'TotalPayNum'
            }, {
                title: '总付费率',
                name: 'TotalRate'
            }, {
                title: '总兑现积分',
                name: 'TotalExchange',
                formatter: bigNumberFormatter
            }, {
                title: '总兑现人数',
                name: 'TotalExcNum'
            }, {
                title: '总兑换金额',
                name: 'TodayExcNum'
            }
        ],
        data: []
    }
}

export function historySurveyTable() {
    return {
        //分页
        pagination: false,
        columns: [
            {
                title: '日期',
                name: 'RegisterDate'
            }, {
                title: '总新增',
                name: 'TotalRegister'
            }, {
                title: '付费总人数',
                name: 'TotalChiz'
            }, {
                title: '付费总金额',
                name: 'TotalRec'
            }, {
                title: '兑换总人数',
                name: 'TotalDuih'
            }, {
                title: '兑换总积分',
                name: 'TotalExc',
                formatter: bigNumberFormatter
            }, {
                title: '兑换总金额',
                name: 'TotalExcNum'
            }
        ],
        data: []
    }
}

export function registerUserTable() {
    return {
        //导出按钮
        export: true,
        //搜索内容
        search: true,
        //生成索引
        index: false,
        //行选择框
        select: false,
        //分页
        pagination: true,
        //是否为服务器分页
        serverPagination: false,
        //默认排序
        defaultSort: {
            prop: ''
        },
        //表头配置
        columns: [
            {
                title: '注册时间',
                name: 'RegisterDate',
                sortable: true,
                formatter: transToTime
            }, {
                title: '玩家ID',
                name: 'UserID',
                sortable: true,
                template: {
                    'user_link': true
                }
            }, {
                title: '昵称',
                name: 'NickName',
                sortable: true
            }, {
                title: '经验',
                name: 'Experience',
                sortable: true
            }, {
                title: '等级',
                name: 'GrowLevelID',
                sortable: true
            }, {
                title: '玩家类型',
                name: 'IsAndroid',
                sortable: true,
                formatter: isAndroidFormatter
            }, {
                title: '注册IP',
                name: 'RegisterIP',
                sortable: true
            }, {
                title: '注册手机号',
                name: 'RegisterMobile',
                sortable: true
            }, {
                title: '注册机器',
                name: 'RegisterMachine',
                sortable: true
            }, {
                title: '绑定手机号',
                name: 'InsureMobile',
                sortable: true
            }
        ],
        data: []
    }
}

export function roomUserTable() {
    return {
        columns: [{
            title: '在线总人数',
            name: 'TotalOnline',
        }, {
            title: '大厅在线人数',
            name: 'datingOnline'
        }, {
            title: '看牌抢庄在线人数',
            name: 'douniuOnline',
        }, {
            title: '百人场在线人数',
            name: 'brnnOnline',
        }, {
            title: '时时彩在线人数',
            name: 'sslOnline',
        }, {
            title: '拼拼乐在线人数',
            name: 'pplOnline',
        }, {
            title: '翻翻乐在线人数',
            name: 'fflOnline',
        }],
        data: []
    }
}

export function lossTable() {
    return {
        //导出按钮
        export: true,
        //搜索内容
        search: true,
        //生成索引
        index: false,
        //行选择框
        select: false,
        //分页
        pagination: true,
        //是否为服务器分页
        serverPagination: false,
        //默认排序
        defaultSort: {
            prop: ''
        },
        //表头配置
        columns: [
            {
                title: '最后登录时间',
                name: 'LastLogonDate',
                sortable: true,
                formatter: transToTime
            }, {
                title: '玩家ID',
                name: 'UserID',
                sortable: true,
                template: {
                    'user_link': true
                }
            }, {
                title: '昵称',
                name: 'NickName',
                sortable: true
            }, {
                title: '经验',
                name: 'Experience',
                sortable: true
            }, {
                title: '等级',
                name: 'GrowLevelID',
                sortable: true
            }, {
                title: '注册时间',
                name: 'RegisterDate',
                sortable: true,
                formatter: transToTime
            }, {
                title: '注册IP',
                name: 'RegisterIP',
                sortable: true
            }, {
                title: '注册手机号',
                name: 'RegisterMobile',
                sortable: true
            }, {
                title: '注册机器',
                name: 'RegisterMachine',
                sortable: true
            }
        ],
        data: []
    }
}

export function goldCoinTable() {
    return {
        columns: [
            {
                title: '1千以下',
                name: 'n1'
            }, {
                title: '1千-6万',
                name: 'n2'
            }, {
                title: '6万-28.8万',
                name: 'n3'
            }, {
                title: '28.8万-84万',
                name: 'n4'
            }, {
                title: '84万-192万',
                name: 'n5'
            }, {
                title: '192万-540万',
                name: 'n6'
            }, {
                title: '540万-1000万',
                name: 'n7'
            }, {
                title: '1000万-1亿',
                name: 'n8'
            }, {
                title: '1亿-3亿',
                name: 'n9'
            }, {
                title: '3亿以上',
                name: 'n10'
            }
        ],
        data: []
    }
}
