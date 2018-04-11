export function activityForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "活动类型",
            "placeholder": "请选择活动类型",
            "type": "select",
            "options": [],
            "name": "ActivityID",
            "span": 6
        }, {
            "label": "任务类型",
            "placeholder": "请选择任务类型",
            "type": "select",
            "options": [],
            "name": "TaskID",
            "span": 6
        }]
    }
}

export function addActivityDialogForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "选择时间",
            "placeholder": "请选择开始时间和结束时间",
            "type": "timeRange",
            "name": "query",
            "span": 18,
            "offset": 3,
            // "rules": [{ type: 'date', "required": true, "message": "请选择时间", "trigger": "change" }]
        }, {
            "label": "积分ID",
            "placeholder": "请填写积分ID/不能重复",
            "type": "text",
            "name": "PointID",
            "span": 18,
            "offset": 3,
            "rules": [{
                "required": true,
                "message": "请填写积分ID/不能重复",
                "trigger": "blur"
            }]
        }, {
            "label": "描述",
            "placeholder": "请填写描述",
            "type": "text",
            "name": "Describe",
            "span": 18,
            "offset": 3,
            "rules": { "required": true, "message": "请填写描述", "trigger": "blur" }
        }]
    }
}

//活动列表
// export function activityListForm() {
//     return {
//         "inline": true,
//         "btnSpan": 6,
//         "btns": [{
//             "name": "query",
//             "title": "查 询",
//             "valid": false
//         }],
//         "formEle": [{
//             "label": "活动类型",
//             "placeholder": "请选择活动类型",
//             "type": "select",
//             "options": [],
//             "name": "ActivityID",
//             "span": 6
//         }, {
//             "label": "任务类型",
//             "placeholder": "请选择任务类型",
//             "type": "select",
//             "options": [],
//             "name": "TaskID",
//             "span": 6
//         }]
//     }
// }

export function addTaskDialogForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "活动ID",
            "placeholder": "请选择活动ID",
            "type": "select",
            "options": [],
            "name": "ActivityID",
            "span": 12,
            // "rules": [{ "required": true, "message": "请选择活动ID", "trigger": "blur" }]
        }, {
            "label": "积分任务",
            "placeholder": "请选择积分任务",
            "type": "select",
            "options": [],
            "name": "PointTaskTypeID",
            "span": 12,
            // "rules": [{ "required": true, "message": "请选择积分任务", "trigger": "blur" }]
        }, {
            "name": "row",
            "span": 24
        }, {
            "label": "目标数量",
            "placeholder": "请输入目标数量",
            "type": "text",
            "name": "TargetAmount",
            "span": 12,
            "rules": { "required": true, "message": "请输入目标数量", "trigger": "blur" }
        }, {
            "label": "奖励积分",
            "placeholder": "请输入奖励积分数量",
            "type": "text",
            "name": "PointAmount",
            "span": 12,
            "rules": { "required": true, "message": "请输入奖励积分数量", "trigger": "blur" }
        }, {
            "name": "row",
            "span": 24
        }, {
            "label": "日次数",
            "placeholder": "每日限制次数（不限次填0）",
            "type": "text",
            "name": "DayLimitCount",
            "span": 12,
            "rules": { "required": true, "message": "每日限制次数（不限次填0）", "trigger": "blur" }
        }, {
            "label": "周次数",
            "placeholder": "每周限制次数（不限次填0）",
            "type": "text",
            "name": "WeekLimitCount",
            "span": 12,
            "rules": { "required": true, "message": "每周限制次数（不限次填0）", "trigger": "blur" }
        }, {
            "name": "row",
            "span": 24
        }, {
            "label": "总次数",
            "placeholder": "总的限制次数（不限次填0）",
            "type": "text",
            "name": "TotalLimitCount",
            "span": 12,
            "rules": { "required": true, "message": "总的限制次数（不限次填0）", "trigger": "blur" }
        }]
    }
}

export function editTaskDialogForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "活动ID",
            "placeholder": "请选择活动ID",
            "type": "select",
            "options": [],
            "name": "ActivityID",
            "span": 12,
            "disabled": true
        }, {
            "label": "积分任务",
            "placeholder": "请选择积分任务",
            "type": "select",
            "options": [],
            "name": "PointTaskTypeID",
            "span": 12,
            "disabled": true
        }, {
            "name": "row",
            "span": 24
        }, {
            "label": "目标数量",
            "placeholder": "请输入目标数量",
            "type": "text",
            "name": "TargetAmount",
            "span": 12,
        }, {
            "label": "奖励积分",
            "placeholder": "请输入奖励积分数量",
            "type": "text",
            "name": "PointAmount",
            "span": 12,
        }, {
            "name": "row",
            "span": 24
        }, {
            "label": "日次数",
            "placeholder": "每日限制次数（不限次填0）",
            "type": "text",
            "name": "DayLimitCount",
            "span": 12,
        }, {
            "label": "周次数",
            "placeholder": "每周限制次数（不限次填0）",
            "type": "text",
            "name": "WeekLimitCount",
            "span": 12,
        }, {
            "name": "row",
            "span": 24
        }, {
            "label": "总次数",
            "placeholder": "总的限制次数（不限次填0）",
            "type": "text",
            "name": "TotalLimitCount",
            "span": 12,
        }]
    }
}

export function tempDialogForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "活动ID",
            "placeholder": "请输入活动ID",
            "type": "text",
            "name": "ActivityID",
            "span": 6,
            // "offset": 1,
        }, {
            "label": "活动名",
            "placeholder": "请输入活动名",
            "type": "text",
            "name": "ActivityName",
            "span": 6,
            // "offset": 1,
        }, {
            "label": "分类",
            "placeholder": "请选择分类",
            "type": "select",
            "name": "Classify",
            "options": [{
                value: 1,
                label: '活动'
            }, {
                value: 2,
                label: '公告'
            }],
            "span": 6,
            // "offset": 1,
        }, {
            "label": "排序",
            "placeholder": "排序",
            "type": "text",
            "name": "SortID",
            "span": 6,
            // "offset": 1,
        }, {
            "row": 24
        }, {
            "label": "开始时间",
            "placeholder": "请选择开始时间",
            "type": "time",
            "name": "StartTime",
            "span": 6,
            // "offset": 1,
        }, {
            "label": "结束时间",
            "placeholder": "请选择结束时间",
            "type": "time",
            "name": "EndTime",
            "span": 6,
            // "offset": 1,
        }, {
            "label": "背景图",
            "placeholder": "请输入背景图的url",
            "type": "text",
            "name": "BgImage",
            "span": 6,
            // "offset": 1,
        }, {
            "label": "设备类型",
            "placeholder": "请选择可见的设备类型",
            "type": "select",
            "name": "DeviceType",
            "options": [{
                value: 1,
                label: '全部'
            }, {
                value: 2,
                label: 'IOS'
            }, {
                value: 3,
                label: 'Android'
            }],
            "span": 6,
            // "offset": 1,
        }, {
            "row": 24
        }, {
            "label": "帐号类型",
            "placeholder": "请选择可见的帐号类型",
            "type": "select",
            "name": "AccountType",
            "options": [{
                value: 1,
                label: '全部'
            }, {
                value: 2,
                label: '微信帐号'
            }, {
                value: 3,
                label: 'QQ帐号'
            }, {
                value: 4,
                label: '手机账号'
            }, {
                value: 5,
                label: '游客帐号'
            }],
            "span": 6,
            // "offset": 1,
        }, {
            "label": "渠道",
            "placeholder": "请选择可见的渠道",
            "type": "select",
            "name": "ChannelID",
            "options": [],
            "span": 6,
            // "offset": 1,
        }, {
            "label": "累计充值",
            "placeholder": "累计充值额度区间 例如：[1000, 2000]",
            "type": "text",
            "name": "Recharge",
            "span": 6,
            // "offset": 1,
        }, {
            "label": "玩家ID",
            "placeholder": "玩家ID 例如：118,124,131,134",
            "type": "text",
            "name": "PlayerID",
            "span": 6,
            // "offset": 1,
        }, {
            "row": 24
        }, {
            "label": "配置图片",
            "placeholder": "请输入配置图片的url",
            "type": "text",
            "name": "ImageUrl",
            "span": 6,
            // "offset": 1,
        }, {
            "label": "跳转页面",
            "placeholder": "请输入游戏内跳转页面",
            "type": "text",
            "name": "LocationUrl",
            "span": 6,
            // "offset": 1,
        }, {
            "label": "Web跳转",
            "placeholder": "请输入web跳转url",
            "type": "text",
            "name": "WebUrl",
            "span": 6,
            // "offset": 1,
        }, {
            "label": "按钮样式",
            "placeholder": "按钮样式（1,2,3,4,5等等）",
            "type": "text",
            "name": "BtnStyle",
            "span": 6,
            // "offset": 1,
        }, {
            "row": 4
        }, {
            "label": "按钮文字",
            "placeholder": "按钮文字",
            "type": "text",
            "name": "BtnWords",
            "span": 6,
            // "offset": 1,
        }, {
            "label": "标签显示",
            "placeholder": "是否显示标签（1-不显示，2-显示）",
            "type": "select",
            "name": "IsTab",
            "span": 6,
            // "offset": 1,
            "options": [{
                value: 1,
                label: '不显示'
            }, {
                value: 2,
                label: '显示'
            }]
        }, {
            "label": "标签类型",
            "placeholder": "标签的类型（1,2,3,4等等）",
            "type": "select",
            "name": "TabType",
            "span": 6,
            // "offset": 1,
            "options": []
        }, {
            "label": "规则显示",
            "placeholder": "规则按钮显示（1-不显示，2-显示）",
            "type": "select",
            "name": "RuleBtn",
            "span": 6,
            // "offset": 1,
            "options": [{
                value: 1,
                label: '不显示'
            }, {
                value: 2,
                label: '显示'
            }]
        }, {
            "row": 4
        }, {
            "label": "注册时间",
            "placeholder": "请选择可见的注册时间段",
            "type": "timeRange",
            "name": "query",
            "span": 8,
            // "offset": 1,
        }, ]
    }
}

export function tempDialogForm2() {
    return {
        "inline": true,
        "formEle": [{
            "label": "活动ID",
            "placeholder": "请输入活动ID",
            "type": "text",
            "name": "ActivityID",
            "span": 6,
        }, {
            "label": "活动名",
            "placeholder": "请输入活动名",
            "type": "text",
            "name": "ActivityName",
            "span": 6,
        }, {
            "label": "分类",
            "placeholder": "请选择分类",
            "type": "select",
            "name": "Classify",
            "options": [{
                value: 1,
                label: '活动'
            }, {
                value: 2,
                label: '公告'
            }],
            "span": 6,
        }, {
            "label": "排序",
            "placeholder": "排序",
            "type": "text",
            "name": "SortID",
            "span": 6,
        }, {
            "row": 24
        }, {
            "label": "开始时间",
            "placeholder": "请选择开始时间",
            "type": "time",
            "name": "StartTime",
            "span": 6,
        }, {
            "label": "结束时间",
            "placeholder": "请选择结束时间",
            "type": "time",
            "name": "EndTime",
            "span": 6,
        }, {
            "label": "背景图",
            "placeholder": "请输入背景图的url",
            "type": "text",
            "name": "BgImage",
            "span": 6,
        }, {
            "label": "设备类型",
            "placeholder": "请选择可见的设备类型",
            "type": "select",
            "name": "DeviceType",
            "options": [{
                value: 1,
                label: '全部'
            }, {
                value: 2,
                label: 'IOS'
            }, {
                value: 3,
                label: 'Android'
            }],
            "span": 6,
        }, {
            "row": 24
        }, {
            "label": "帐号类型",
            "placeholder": "请选择可见的帐号类型",
            "type": "select",
            "name": "AccountType",
            "options": [{
                value: 1,
                label: '全部'
            }, {
                value: 2,
                label: '微信帐号'
            }, {
                value: 3,
                label: 'QQ帐号'
            }, {
                value: 4,
                label: '手机账号'
            }, {
                value: 5,
                label: '游客帐号'
            }],
            "span": 6,
        }, {
            "label": "渠道",
            "placeholder": "请选择可见的渠道",
            "type": "select",
            "name": "ChannelID",
            "options": [],
            "span": 6,
        }, {
            "label": "累计充值",
            "placeholder": "累计充值额度区间 例如：[1000, 2000]",
            "type": "text",
            "name": "Recharge",
            "span": 6,
        }, {
            "label": "玩家ID",
            "placeholder": "玩家ID 例如：118,124,131,134",
            "type": "text",
            "name": "PlayerID",
            "span": 6,
        }, {
            "row": 24
        }, {
            "label": "Bannar",
            "placeholder": "请输入Bannar的url",
            "type": "text",
            "name": "Bannar",
            "span": 6,
        }, {
            "label": "标签显示",
            "placeholder": "是否显示标签（1-不显示，2-显示）",
            "type": "select",
            "name": "IsTab",
            "span": 6,
            "options": [{
                value: 1,
                label: '不显示'
            }, {
                value: 2,
                label: '显示'
            }]
        }, {
            "label": "标签类型",
            "placeholder": "标签的类型（1,2,3,4等等）",
            "type": "select",
            "name": "TabType",
            "span": 6,
            "options": []
        }, {
            "label": "规则按钮",
            "placeholder": "规则按钮（1-不显示，2-显示）",
            "type": "select",
            "name": "RuleBtn",
            "span": 6,
            "options": [{
                value: 1,
                label: '不显示'
            }, {
                value: 2,
                label: '显示'
            }]
        }, {
            "row": 24
        }, {
            "label": "注册时间",
            "placeholder": "请选择可见的注册时间段",
            "type": "timeRange",
            "name": "query",
            "span": 6,
        }]
    }
}

export function tempDialogForm3() {
    return {
        "inline": true,
        "formEle": [{
            "label": "活动ID",
            "placeholder": "请输入活动ID",
            "type": "text",
            "name": "ActivityID",
            "span": 6,
        }, {
            "label": "活动名",
            "placeholder": "请输入活动名",
            "type": "text",
            "name": "ActivityName",
            "span": 6,
        }, {
            "label": "分类",
            "placeholder": "请选择分类",
            "type": "select",
            "name": "Classify",
            "options": [{
                value: 1,
                label: '活动'
            }, {
                value: 2,
                label: '公告'
            }],
            "span": 6,
        }, {
            "label": "排序",
            "placeholder": "排序",
            "type": "text",
            "name": "SortID",
            "span": 6,
        }, {
            "row": 24
        }, {
            "label": "开始时间",
            "placeholder": "请选择开始时间",
            "type": "time",
            "name": "StartTime",
            "span": 6,
        }, {
            "label": "结束时间",
            "placeholder": "请选择结束时间",
            "type": "time",
            "name": "EndTime",
            "span": 6,
        }, {
            "label": "背景图",
            "placeholder": "请输入背景图的url",
            "type": "text",
            "name": "BgImage",
            "span": 6,
        }, {
            "label": "设备类型",
            "placeholder": "请选择可见的设备类型",
            "type": "select",
            "name": "DeviceType",
            "options": [{
                value: 1,
                label: '全部'
            }, {
                value: 2,
                label: 'IOS'
            }, {
                value: 3,
                label: 'Android'
            }],
            "span": 6,
        }, {
            "row": 24
        }, {
            "label": "帐号类型",
            "placeholder": "请选择可见的帐号类型",
            "type": "select",
            "name": "AccountType",
            "options": [{
                value: 1,
                label: '全部'
            }, {
                value: 2,
                label: '微信帐号'
            }, {
                value: 3,
                label: 'QQ帐号'
            }, {
                value: 4,
                label: '手机账号'
            }, {
                value: 5,
                label: '游客帐号'
            }],
            "span": 6,
        }, {
            "label": "渠道",
            "placeholder": "请选择可见的渠道",
            "type": "select",
            "name": "ChannelID",
            "options": [],
            "span": 6,
        }, {
            "label": "累计充值",
            "placeholder": "累计充值额度区间 例如：[1000, 2000]",
            "type": "text",
            "name": "Recharge",
            "span": 6,
        }, {
            "label": "玩家ID",
            "placeholder": "玩家ID 例如：[118,124,131,134]",
            "type": "text",
            "name": "PlayerID",
            "span": 6,
        }, {
            "row": 24
        }, {
            "label": "Bannar",
            "placeholder": "请输入Bannar的url",
            "type": "text",
            "name": "Bannar",
            "span": 6,
        }, {
            "label": "标签显示",
            "placeholder": "是否显示标签（1-不显示，2-显示）",
            "type": "select",
            "name": "IsTab",
            "span": 6,
            "options": [{
                value: 1,
                label: '不显示'
            }, {
                value: 2,
                label: '显示'
            }]
        }, {
            "label": "标签类型",
            "placeholder": "标签的类型（1,2,3,4等等）",
            "type": "select",
            "name": "TabType",
            "span": 6,
            "options": []
        }, {
            "label": "规则按钮",
            "placeholder": "规则按钮（1-不显示，2-显示）",
            "type": "select",
            "name": "RuleBtn",
            "span": 6,
            "options": [{
                value: 1,
                label: '不显示'
            }, {
                value: 2,
                label: '显示'
            }]
        }, {
            "row": 24
        }, {
            "label": "注册时间",
            "placeholder": "请选择可见的注册时间段",
            "type": "timeRange",
            "name": "query",
            "span": 6,
        }]
    }
}

export function tempDialogForm4Notice1() {
    return {
        "inline": true,
        "formEle": [{
            "label": "公告ID",
            "placeholder": "请输入公告ID",
            "type": "text",
            "name": "NoticeID",
            "span": 6,
        }, {
            "label": "公告名",
            "placeholder": "请输入公告名",
            "type": "text",
            "name": "NoticeName",
            "span": 6,
        }, {
            "label": "分类",
            "placeholder": "请选择分类",
            "type": "select",
            "name": "Classify",
            "options": [{
                value: 1,
                label: '活动'
            }, {
                value: 2,
                label: '公告'
            }],
            "span": 6,
        }, {
            "label": "排序",
            "placeholder": "排序",
            "type": "text",
            "name": "SortID",
            "span": 6,
        }, {
            "row": 24
        }, {
            "label": "开始时间",
            "placeholder": "请选择开始时间",
            "type": "time",
            "name": "StartTime",
            "span": 6,
        }, {
            "label": "结束时间",
            "placeholder": "请选择结束时间",
            "type": "time",
            "name": "EndTime",
            "span": 6,
        }, {
            "label": "背景图",
            "placeholder": "请输入背景图的url",
            "type": "text",
            "name": "BgImage",
            "span": 6,
        }, {
            "label": "设备类型",
            "placeholder": "请选择可见的设备类型",
            "type": "select",
            "name": "DeviceType",
            "options": [{
                value: 1,
                label: '全部'
            }, {
                value: 2,
                label: 'IOS'
            }, {
                value: 3,
                label: 'Android'
            }],
            "span": 6,
        }, {
            "row": 24
        }, {
            "label": "帐号类型",
            "placeholder": "请选择可见的帐号类型",
            "type": "select",
            "name": "AccountType",
            "options": [{
                value: 1,
                label: '全部'
            }, {
                value: 2,
                label: '微信帐号'
            }, {
                value: 3,
                label: 'QQ帐号'
            }, {
                value: 4,
                label: '手机账号'
            }, {
                value: 5,
                label: '游客帐号'
            }],
            "span": 6,
        }, {
            "label": "渠道",
            "placeholder": "请选择可见的渠道",
            "type": "select",
            "name": "ChannelID",
            "options": [],
            "span": 6,
        }, {
            "label": "累计充值",
            "placeholder": "累计充值额度区间 例如：[1000, 2000]",
            "type": "text",
            "name": "Recharge",
            "span": 6,
        }, {
            "label": "玩家ID",
            "placeholder": "玩家ID 例如：[118,124,131,134]",
            "type": "text",
            "name": "PlayerID",
            "span": 6,
        }, {
            "row": 24
        }, {
            "label": "公告标题",
            "placeholder": "公告标题",
            "type": "text",
            "name": "Title",
            "span": 6,
        }, {
            "label": "按钮样式",
            "placeholder": "按钮样式（1,2,3,4,5等等）",
            "type": "text",
            "name": "BtnStyle",
            "span": 6,
        }, {
            "label": "按钮文字",
            "placeholder": "按钮文字",
            "type": "text",
            "name": "BtnWords",
            "span": 6,
        }, {
            "label": "标签显示",
            "placeholder": "是否显示标签（1-不显示，2-显示）",
            "type": "select",
            "name": "IsTab",
            "span": 6,
            "options": [{
                value: 1,
                label: '不显示'
            }, {
                value: 2,
                label: '显示'
            }]
        }, {
            "row": 24
        }, {
            "label": "标签类型",
            "placeholder": "标签的类型（1,2,3,4等等）",
            "type": "select",
            "name": "TabType",
            "span": 6,
            "options": []
        }, {
            "label": "注册时间",
            "placeholder": "请选择可见的注册时间段",
            "type": "timeRange",
            "name": "query",
            "span": 6,
        }, ]
    }
}

export function tempDialogForm4Notice2() {
    return {
        "inline": true,
        "formEle": [{
            "label": "公告ID",
            "placeholder": "请输入公告ID",
            "type": "text",
            "name": "NoticeID",
            "span": 6,
        }, {
            "label": "公告名",
            "placeholder": "请输入公告名",
            "type": "text",
            "name": "NoticeName",
            "span": 6,
        }, {
            "label": "分类",
            "placeholder": "请选择分类",
            "type": "select",
            "name": "Classify",
            "options": [{
                value: 1,
                label: '活动'
            }, {
                value: 2,
                label: '公告'
            }],
            "span": 6,
        }, {
            "label": "排序",
            "placeholder": "排序",
            "type": "text",
            "name": "SortID",
            "span": 6,
        }, {
            "row": 24
        }, {
            "label": "开始时间",
            "placeholder": "请选择开始时间",
            "type": "time",
            "name": "StartTime",
            "span": 6,
        }, {
            "label": "结束时间",
            "placeholder": "请选择结束时间",
            "type": "time",
            "name": "EndTime",
            "span": 6,
        }, {
            "label": "背景图",
            "placeholder": "请输入背景图的url",
            "type": "text",
            "name": "BgImage",
            "span": 6,
        }, {
            "label": "设备类型",
            "placeholder": "请选择可见的设备类型",
            "type": "select",
            "name": "DeviceType",
            "options": [{
                value: 1,
                label: '全部'
            }, {
                value: 2,
                label: 'IOS'
            }, {
                value: 3,
                label: 'Android'
            }],
            "span": 6,
        }, {
            "row": 24
        }, {
            "label": "帐号类型",
            "placeholder": "请选择可见的帐号类型",
            "type": "select",
            "name": "AccountType",
            "options": [{
                value: 1,
                label: '全部'
            }, {
                value: 2,
                label: '微信帐号'
            }, {
                value: 3,
                label: 'QQ帐号'
            }, {
                value: 4,
                label: '手机账号'
            }, {
                value: 5,
                label: '游客帐号'
            }],
            "span": 6,
        }, {
            "label": "渠道",
            "placeholder": "请选择可见的渠道",
            "type": "select",
            "name": "ChannelID",
            "options": [],
            "span": 6,
        }, {
            "label": "累计充值",
            "placeholder": "累计充值额度区间 例如：[1000, 2000]",
            "type": "text",
            "name": "Recharge",
            "span": 6,
        }, {
            "label": "玩家ID",
            "placeholder": "玩家ID 例如：118,124,131,134",
            "type": "text",
            "name": "PlayerID",
            "span": 6,
        }, {
            "row": 24
        }, {
            "label": "公告标题",
            "placeholder": "公告标题",
            "type": "text",
            "name": "Title",
            "span": 6,
        }, {
            "label": "按钮样式",
            "placeholder": "按钮样式（1,2,3,4,5等等）",
            "type": "text",
            "name": "BtnStyle",
            "span": 6,
        }, {
            "label": "按钮文字",
            "placeholder": "按钮文字",
            "type": "text",
            "name": "BtnWords",
            "span": 6,
        }, {
            "label": "标签显示",
            "placeholder": "是否显示标签（1-不显示，2-显示）",
            "type": "select",
            "name": "IsTab",
            "span": 6,
            "options": [{
                value: 1,
                label: '不显示'
            }, {
                value: 2,
                label: '显示'
            }]
        }, {
            "row": 24
        }, {
            "label": "标签类型",
            "placeholder": "标签的类型（1,2,3,4等等）",
            "type": "select",
            "name": "TabType",
            "span": 6,
            "options": []
        }, {
            "label": "注册时间",
            "placeholder": "请选择可见的注册时间段",
            "type": "timeRange",
            "name": "query",
            "span": 6,
        }, ]
    }
}

export function tempDialogForm4Notice3() {
    return {
        "inline": true,
        "formEle": [{
            "label": "公告ID",
            "placeholder": "请输入公告ID",
            "type": "text",
            "name": "NoticeID",
            "span": 6,
        }, {
            "label": "公告名",
            "placeholder": "请输入公告名",
            "type": "text",
            "name": "NoticeName",
            "span": 6,
        }, {
            "label": "分类",
            "placeholder": "请选择分类",
            "type": "select",
            "name": "Classify",
            "options": [{
                value: 1,
                label: '活动'
            }, {
                value: 2,
                label: '公告'
            }],
            "span": 6,
        }, {
            "label": "排序",
            "placeholder": "排序",
            "type": "text",
            "name": "SortID",
            "span": 6,
        }, {
            "row": 24
        }, {
            "label": "开始时间",
            "placeholder": "请选择开始时间",
            "type": "time",
            "name": "StartTime",
            "span": 6,
        }, {
            "label": "结束时间",
            "placeholder": "请选择结束时间",
            "type": "time",
            "name": "EndTime",
            "span": 6,
        }, {
            "label": "背景图",
            "placeholder": "请输入背景图的url",
            "type": "text",
            "name": "BgImage",
            "span": 6,
        }, {
            "label": "设备类型",
            "placeholder": "请选择可见的设备类型",
            "type": "select",
            "name": "DeviceType",
            "options": [{
                value: 1,
                label: '全部'
            }, {
                value: 2,
                label: 'IOS'
            }, {
                value: 3,
                label: 'Android'
            }],
            "span": 6,
        }, {
            "row": 24
        }, {
            "label": "帐号类型",
            "placeholder": "请选择可见的帐号类型",
            "type": "select",
            "name": "AccountType",
            "options": [{
                value: 1,
                label: '全部'
            }, {
                value: 2,
                label: '微信帐号'
            }, {
                value: 3,
                label: 'QQ帐号'
            }, {
                value: 4,
                label: '手机账号'
            }, {
                value: 5,
                label: '游客帐号'
            }],
            "span": 6,
        }, {
            "label": "渠道",
            "placeholder": "请选择可见的渠道",
            "type": "select",
            "name": "ChannelID",
            "options": [],
            "span": 6,
        }, {
            "label": "累计充值",
            "placeholder": "累计充值额度区间 例如：[1000, 2000]",
            "type": "text",
            "name": "Recharge",
            "span": 6,
        }, {
            "label": "玩家ID",
            "placeholder": "玩家ID 例如：118,124,131,134",
            "type": "text",
            "name": "PlayerID",
            "span": 6,
        }, {
            "row": 24
        }, {
            "label": "配置图片",
            "placeholder": "请输入配置图片的url",
            "type": "text",
            "name": "ImageUrl",
            "span": 6,
        }, {
            "label": "跳转页面",
            "placeholder": "请输入游戏内跳转页面",
            "type": "text",
            "name": "LocationUrl",
            "span": 6,
        }, {
            "label": "Web跳转",
            "placeholder": "请输入web跳转url",
            "type": "text",
            "name": "WebUrl",
            "span": 6,
        }, {
            "label": "公告标题",
            "placeholder": "公告标题",
            "type": "text",
            "name": "Title",
            "span": 6,
        }, {
            "row": 24
        }, {
            "label": "按钮样式",
            "placeholder": "按钮样式（1,2,3,4,5等等）",
            "type": "text",
            "name": "BtnStyle",
            "span": 6,
        }, {
            "label": "按钮文字",
            "placeholder": "按钮文字",
            "type": "text",
            "name": "BtnWords",
            "span": 6,
        }, {
            "label": "标签显示",
            "placeholder": "是否显示标签（1-不显示，2-显示）",
            "type": "select",
            "name": "IsTab",
            "span": 6,
            "options": [{
                value: 1,
                label: '不显示'
            }, {
                value: 2,
                label: '显示'
            }]
        }, {
            "label": "标签类型",
            "placeholder": "标签的类型（1,2,3,4等等）",
            "type": "select",
            "name": "TabType",
            "span": 6,
            "options": []
        }, {
            "row": 24
        }, {
            "label": "注册时间",
            "placeholder": "请选择可见的注册时间段",
            "type": "timeRange",
            "name": "query",
            "span": 6,
        }]
    }
}

export function task2DialogForm() {
    return {
        "inline": true,
        "formEle": [{
            "label": "活动ID",
            "placeholder": "必须与模板的活动ID一致",
            "type": "text",
            "name": "ActivityID",
            "span": 6,
            "offset": 2,
        }, {
            "label": "任务ID",
            "placeholder": "请输入任务ID",
            "type": "text",
            "name": "TaskID",
            "span": 6,
            "offset": 1
        }, {
            "label": "排序",
            "placeholder": "请输入排序ID",
            "type": "text",
            "name": "SortID",
            "span": 6,
            "offset": 1,
        }, {
            "rows": 24
        }, {
            "label": "任务说明",
            "placeholder": "任务说明",
            "type": "textarea",
            "name": "TaskDesc",
            "span": 20,
            "offset": 2,
            "rows": 4
        }, {
            "rows": 24
        }, {
            "label": "任务类型",
            "placeholder": "任务类型",
            "type": "select",
            "name": "TaskType",
            "options": [],
            "span": 6,
            "offset": 2
        }, {
            "label": "任务数量",
            "placeholder": "任务数量",
            "type": "text",
            "name": "TaskNum",
            "span": 6,
            "offset": 1
        }, {
            "label": "任务编号",
            "placeholder": "前置任务编号",
            "type": "text",
            "name": "FrontTask",
            "span": 6,
            "offset": 1
        }, {
            "rows": 24
        }, {
            "label": "按钮跳转",
            "placeholder": "前往按钮跳转（数字）",
            "type": "text",
            "name": "Jump",
            "span": 6,
            "offset": 2
        }, {
            "label": "充值额度",
            "placeholder": "累计充值额度可见区间[100, 1000]",
            "type": "text",
            "name": "Recharge",
            "span": 6,
            "offset": 1
        }, {
            "label": "日次数",
            "placeholder": "每日限制次数（不限次填写0）",
            "type": "text",
            "name": "DayLimitCount",
            "span": 6,
            "offset": 1
        }, {
            "rows": 24
        }, {
            "label": "周次数",
            "placeholder": "每周限制次数（不限次填写0）",
            "type": "text",
            "name": "WeekLimitCount",
            "span": 6,
            "offset": 2
        }, {
            "label": "总次数",
            "placeholder": "总限制次数（不限次填写0）",
            "type": "text",
            "name": "TotalLimitCount",
            "span": 6,
            "offset": 1
        }]
    }
}