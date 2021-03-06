import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import login from '@/views/login'

/* 最新版 start */

import index from "@/views/index";
/* 我的桌面 */

// 游戏总览
import summary from "@/views/global/summary";
/* 日报汇总 */
import real_time from "@/views/global/real_time";
/* 实时数据 */

//数据分析
import user_analysis from "@/views/analyse/user_analysis";
/* 用户分析 */
import look_cards from "@/views/analyse/look_cards";
/* 看牌抢庄 */
import mini_game from "@/views/analyse/mini_game";
/* 小游戏 */
import rank from "@/views/analyse/rank";
/* 排行榜 */
import pay_analysis from "@/views/analyse/pay_analysis";
/* 付费分析 */
import miniactivity from '@/views/analyse/miniactivity';
/* 任务分析 */
import buried_point from "@/views/analyse/buried_point";
/* 埋点数据 */
import product_consume from "@/views/analyse/product_consume";
/* 产出消耗 */
import buy_item from "@/views/analyse/buy_item";
/* 道具购买分析 */

// 用户管理
import user_info from "@/views/users/user_info";
/* 用户信息 */
import risk_manage from "@/views/users/risk_manage";
/* 封禁管理 */
import blacklist from "@/views/users/blacklist";
/* 黑名单 */
import int_account from "@/views/users/int_account";
/* 内部帐号 */

// 渠道管理
import channel_master from "@/views/channel/channel_master";
/* 渠道商管理 */
import channel_analyze from "@/views/channel/channel_analyze";
/* 渠道分析 */
import channel_config from "@/views/channel/channel_config";
/* 渠道管理 */

// 支付管理
import payment_order from "@/views/pay/payment_order";
/* 支付订单 */
import pay_statistics from "@/views/pay/pay_statistics";
/* 充值统计 */

// 兑换管理
import numeric_table from "@/views/exchange/numeric_table";
/* 数值表 */
import exchange_audit from "@/views/exchange/exchange_audit";
/* 兑换审核 */
import exchange_record from "@/views/exchange/exchange_record";
/* 兑换记录 */
import kami from "@/views/exchange/kami";
/* 卡密 */

// 客服工具
import notice from "@/views/kefu/notice";
/* 走马灯 */
import mail from "@/views/kefu/mail";
/* 系统邮件 */
import feedback from "@/views/kefu/feedback";
/* 问题反馈 */
import report from "@/views/kefu/report";
/* 举报管理 */
import realname from "@/views/kefu/realname";
/* 实名认证 */
import avatar from "@/views/kefu/avatar";
/* 自定义头像 */

// 鹰眼系统
import eye from "@/views/hawkeye/eye";

// 游戏配置
import json_push from "@/views/deploy/json_push";
/* 系统表推送 */
import push from '@/views/deploy/push';
/* 离线推送 */
import robot from '@/views/deploy/robot';
/* AI配置 */
import match_config from "@/views/deploy/match_config";
/* 比赛配置 */
import lookCards_config from "@/views/deploy/lookCards_config";
/* 看牌抢庄配置 */
import task_config from "@/views/deploy/task_config";
/* 任务配置 */
import activity_config from "@/views/deploy/activity_config";
/* 活动配置 */
import popup_config from "@/views/deploy/popup_config";
/* 弹窗配置 */
import indulge from '@/views/deploy/indulge';
/* 防沉迷系统 */
import shop_config from "@/views/deploy/shop_config";
/* 商城订单配置 */
import shield from "@/views/deploy/shield";
/* 游戏屏蔽 */

// 后台管理
import account from "@/views/cms/account";
/* 权限/账号管理 */
import loger from "@/views/cms/loger";
/* 操作日志 */
import team from "@/views/cms/team";
/* 团队原则 */

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
    routes: [{
        path: '/login',
        name: 'login',
        component: login
    }, {
        path: '/',
        name: 'index',
        component: index
    }, {
        path: '/global/summary',
        name: 'summary',
        component: summary
    }, {
        path: '/global/real_time',
        name: 'real_time',
        component: real_time
    }, {
        path: '/analyse/user_analysis',
        name: 'user_analysis',
        component: user_analysis
    }, {
        path: '/analyse/look_cards',
        name: 'look_cards',
        component: look_cards
    }, {
        path: '/analyse/mini_game',
        name: 'mini_game',
        component: mini_game
    }, {
        path: '/analyse/rank',
        name: 'rank',
        component: rank
    }, {
        path: '/analyse/pay_analysis',
        name: 'pay_analysis',
        component: pay_analysis
    }, {
        path: '/analyse/miniactivity',
        name: 'miniactivity',
        component: miniactivity
    }, {
        path: '/analyse/product_consume',
        name: 'product_consume',
        component: product_consume
    }, {
        path: '/analyse/buy_item',
        name: 'buy_item',
        component: buy_item
    }, {
        path: '/analyse/buried_point',
        name: 'buried_point',
        component: buried_point
    }, {
        path: '/users/user_info',
        name: 'user_info',
        component: user_info
    }, {
        path: '/users/risk_manage',
        name: 'risk_manage',
        component: risk_manage
    }, {
        path: '/users/blacklist',
        name: 'blacklist',
        component: blacklist
    }, {
        path: '/users/int_account',
        name: 'int_account',
        component: int_account
    }, {
        path: '/channel/channel_analyze',
        name: 'channel_analyze',
        component: channel_analyze
    }, {
        path: '/channel/channel_master',
        name: 'channel_master',
        component: channel_master
    }, {
        path: '/channel/channel_config',
        name: 'channel_config',
        component: channel_config
    }, {
        path: '/pay/payment_order',
        name: 'payment_order',
        component: payment_order
    }, {
        path: '/pay/pay_statistics',
        name: 'pay_statistics',
        component: pay_statistics
    }, {
        path: '/exchange/numeric_table',
        name: 'numeric_table',
        component: numeric_table
    }, {
        path: '/exchange/exchange_audit',
        name: 'exchange_audit',
        component: exchange_audit
    }, {
        path: '/exchange/exchange_record',
        name: 'exchange_record',
        component: exchange_record
    }, {
        path: '/exchange/kami',
        name: 'kami',
        component: kami
    }, {
        path: '/hawkeye/eye',
        name: 'eye',
        component: eye
    }, {
        path: '/deploy/push',
        name: 'push',
        component: push
    }, {
        path: '/deploy/robot',
        name: 'robot',
        component: robot
    }, {
        path: '/deploy/match_config',
        name: 'match_config',
        component: match_config
    }, {
        path: '/deploy/lookCards_config',
        name: 'lookCards_config',
        component: lookCards_config
    }, {
        path: '/deploy/task_config',
        name: 'task_config',
        component: task_config
    }, {
        path: '/deploy/activity_config',
        name: 'activity_config',
        component: activity_config
    }, {
        path: '/deploy/popup_config',
        name: 'popup_config',
        component: popup_config
    }, {
        path: '/deploy/indulge',
        name: 'indulge',
        component: indulge
    }, {
        path: '/deploy/shop_config',
        name: 'shop_config',
        component: shop_config
    }, {
        path: '/deploy/shield',
        name: 'shield',
        component: shield
    }, {
        path: '/kefu/notice',
        name: 'notice',
        component: notice
    }, {
        path: '/kefu/mail',
        name: 'mail',
        component: mail
    }, {
        path: '/kefu/feedback',
        name: 'feedback',
        component: feedback
    }, {
        path: '/kefu/report',
        name: 'report',
        component: report
    }, {
        path: '/kefu/realname',
        name: 'realname',
        component: realname
    }, {
        path: '/kefu/avatar',
        name: 'avatar',
        component: avatar
    }, {
        path: '/cms/account',
        name: 'account',
        component: account
    }, {
        path: '/deploy/json_push',
        name: 'json_push',
        component: json_push
    }, {
        path: '/cms/loger',
        name: 'loger',
        component: loger
    }, {
        path: '/cms/team',
        name: 'team',
        component: team
    }]
});
/* 最新版 end */
