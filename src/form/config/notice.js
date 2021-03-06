export function noticeForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "create",
            "title": "新建推送",
            "valid": true
        }],
        "formEle": [{
            "label": "前往场景",
            "placeholder": "请选择需要前往的场景",
            "type": "select",
            "name": "jumpID",
            "options": [],
            "span": 6,
        }, {
            "label": "显示场合",
            "placehoder": "请选择需要推送的场合",
            "type": "select",
            "name": "showPlace",
            "options": [{
                "value": "0",
                "label": "全部场景"
            }, {
                "value": "1",
                "label": "大厅场景"
            }, {
                "value": "2",
                "label": "游戏场景"
            }],
            "span": 6
        }, {
            "label": "选择游戏",
            "placeholder": "请选择游戏，可以多选",
            "type": "select",
            "name": "gameKindID",
            "options": [],
            'multiple': true,
            "span": 6
        }, {
            "label": "游戏房间",
            "placeholder": "请选择游戏房间，可以多选",
            "type": "select",
            "name": "gameServerID",
            "options": [],
            'multiple': true,
            "span": 6
        }, {
            "row": 24
        }, {
            "label": "渠道",
            "placeholder": "请选择发送的渠道",
            "type": "select",
            "options": [{
                value: 10001,
                label: '自渠道'
            }, {
                value: 10002,
                label: '应用宝'
            }, {
                value: 10003,
                label: '新浪微博'
            }, {
                value: 10004,
                label: '网易新闻'
            }, {
                value: 10005,
                label: '讯飞'
            }],
            "name": "channel_id",
            'multiple': true,
            "span": 6
        }, {
            "label": "帐号类型",
            "placeholder": "请选择帐号类型",
            "type": "select",
            "options": [{
                value: 1,
                label: '微信帐号'
            }, {
                value: 2,
                label: 'QQ帐号'
            }, {
                value: 3,
                label: '手机账号'
            }, {
                value: 4,
                label: '游客账号'
            }],
            "name": "account_id",
            'multiple': true,
            "span": 6
        }, {
            "label": "玩家ID",
            "placeholder": "指定玩家ID可见[118,120,115,150]",
            "type": "text",
            "name": "UserID",
            "span": 6
        }, {
            "label": "充值区间",
            "placeholder": "累计充值额度可见区间[100,10000]",
            "type": "text",
            "name": "payArea",
            "span": 6
        }, {
            "row": 24
        }, {
            "label": "间隔时间(秒)",
            "placeholder": "请输入间隔时间（秒为单位）",
            "type": "text",
            "name": "intervalTime",
            "span": 6,
            "rules": [{
                "required": true,
                "message": "请输入间隔时间（秒为单位）",
                "trigger": "blur"
            }]
        }, {
            "label": "开始时间",
            "placeholder": "请选择开始时间",
            "type": "time",
            "name": "startTime",
            "span": 6,
            "rules": [{
                "required": true,
                "type": 'number',
                "message": "请选择开始时间",
                "trigger": "change"
            }]
        }, {
            "label": "结束时间",
            "placeholder": "请选择结束时间",
            "type": "time",
            "name": "endTime",
            "span": 6,
            "rules": [{
                "required": true,
                "type": 'number',
                "message": "请选择结束时间",
                "trigger": "change"
            }]
        }, {
            "label": "滚动时长",
            "placeholder": "请输入滚动时长",
            "type": "text",
            "name": "rollTime",
            "span": 6
        }, {
            "row": 24
        }, {
            "label": "注册时间",
            "placeholder": "注册时间段可见",
            "type": "timeRange",
            "name": "query",
            "span": 8
        }]
    }
}

export function noticeListForm() {
    return {
        "inline": true,
        "btnSpan": 6,
        "btns": [{
            "name": "query",
            "title": "查 询",
            "valid": false
        }],
        "formEle": [{
            "label": "选择时间",
            "placeholder": "请选择查询时间",
            "type": "timeRange",
            "name": "query",
            "span": 6
        }, {
            "label": "推送场合",
            "placeholder": "请选择推送场合",
            "type": "select",
            "name": "showPlace",
            "options": [{
                "value": "0",
                "label": "全部场景"
            }, {
                "value": "1",
                "label": "大厅场景"
            }, {
                "value": "2",
                "label": "游戏场景"
            }],
            "span": 6
        }]
    }
}