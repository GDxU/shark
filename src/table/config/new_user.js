import { transToTime, NullityFormatter, bigNumberFormatter } from '@/libs/dataColumnFormatter'

export function newUserTable() {
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
    columns: [{
      title: '用户ID',
      name: 'UserID',
      sortable: true,
      template: { 'user_link': true }
    }, {
      title: '用户昵称',
      name: 'NickName',
      sortable: true,
    }, {
      title: '推广渠道',
      name: 'client_channel_id',
      sortable: true,
    }, {
      title: '平台',
      name: 'platform',
      sortable: true,
    }, {
      title: '创建时间',
      name: 'RegisterDate',
      sortable: true,
      formatter: transToTime
    }, {
      title: '创建IP',
      name: 'RegisterIP',
      sortable: true,
    }, {
      title: '金币',
      name: 'Score',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '银行金币',
      name: 'InsureScore',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '总充值',
      name: 'total_pay_amount',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '总兑现',
      name: 'total_cash_amount',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '封号状态',
      name: 'Nullity',
      sortable: true,
      formatter: NullityFormatter
    }],
    data: []
  }
}


export function serveyTable() {
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
    columns: [{
      title: '日期',
      name: 'RegisterDate',
      sortable: true,
      formatter: transToTime
    }, {
      title: '新增用户数',
      name: 'active_cnt',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '去重新增数',
      name: 'uniq_active_cnt',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '付费总金额',
      name: 'active_pay_amount',
      sortable: true,
      formatter: bigNumberFormatter
    }, {
      title: '付费总人数',
      name: 'active_pay_cnt',
      sortable: true,
      formatter: bigNumberFormatter
    }],
    data: []
  }
}
