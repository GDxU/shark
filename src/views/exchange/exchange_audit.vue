<template>
    <div id="container">
        <h1 class="h1-title">兑换审核</h1>
        <div class="cms-content">
            <el-button type="success" plain @click.native="btnExchangeAudit">查 询</el-button>
            <table-option :parent-message="order_Msg" v-on:message="orderMessage" v-on:outputrow="order_recieveRow" v-loading="loading" element-loading-text="拼命加载中"></table-option>
        </div>
        <!-- 兑换订单 详情 提示框 -->
        <el-dialog title="详情" width="95%" :visible.sync="xiangqingDialog">
            <table-option :parent-message="xiangqingDialog_Msg"></table-option>
        </el-dialog>
        <!-- 兑换订单 审核 提示框 -->
        <el-dialog title="审核" width="95%" :visible.sync="shenheDialog">
            <table-option :parent-message="xiangqingDialog_Msg"></table-option>
            <div slot="footer" class="dialog-footer">
                <el-button type="danger" @click.native="not_examine">不通过</el-button>
                <el-button type="success" @click.native="examine">通 过</el-button>
            </div>
        </el-dialog>
        <!-- 兑换订单 单号 提示框 -->
        <el-dialog title="快递单号" width="30%" :visible.sync="danhaoDialog">
            <ele-form :config="danhaoDialogConfig" v-on:receive="danhaoDialogSubmit" :eventname="danhaoDialogEvent"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="danhaoDialog = false">取 消</el-button>
                <el-button type="primary" @click="danhaoSubmitName">确 定</el-button>
            </div>
        </el-dialog>
        <!-- 兑换订单 编辑 提示框 -->
        <el-dialog title="编辑" width="30%" :visible.sync="editDialog">
            <ele-form :config="editDialogConfig" v-on:receive="editDialogSubmit" :eventname="editDialogEvent" :defaultdata="editDialogHtml"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="editDialog = false">取 消</el-button>
                <el-button type="primary" @click="editSubmitName">确 定</el-button>
            </div>
        </el-dialog>

        <el-dialog title="话费充值处理备注"  width="30%" :visible.sync="orderDialog">
            <ele-form :config="orderDialogConfig" v-on:receive="orderDialogSubmit" :eventname="orderSubmitEvent" :defaultdata="orderDialogHtml"></ele-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="orderDialog = false">取 消</el-button>
                <el-button type="primary" @click="OrderSubmitName">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    //引入表格搜索
    import {
        tableSearch
    } from '@/libs/tableSearch'
    import {
        danhaoDialogForm,
        editDialogForm,
        orderDialogForm
    } from '@/form/config/exchange_audit'
    import {
        exchangeOrderTable,
        xiangqingDialogTable
    } from '@/table/config/exchange_audit'
    export default {
        name: 'exchange_audit',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                htmlArg: {},
                loading: false,
                order_Msg: exchangeOrderTable(),
                /* 话费处理备注弹窗 */
                orderDialog: false,
                orderDialogConfig: orderDialogForm(),
                orderSubmitEvent: false,
                orderDialogHtml: {},
                /* 详情 */
                xiangqingDialog: false,
                xiangqingDialog_Msg: xiangqingDialogTable(),
                /* 审核 */
                shenheDialog: false,
                /* 单号 */
                danhaoDialog: false,
                danhaoDialogConfig: danhaoDialogForm(),
                danhaoDialogEvent: false,
                /* 编辑 */
                editDialog: false,
                editDialogConfig: editDialogForm(),
                editDialogEvent: false,
                editDialogHtml: {},
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {
            // 查询
            btnExchangeAudit() {
                this.loading = true;
                this.$res.postData(this, '/Exchange/query_audit_list/').then((response) => {
                    this.order_Msg.data = response.map((val) => {
                        let res = val;
                        val.OrderStatus == '4' && val.itemType == '2' && (res['充 值' + '_show'] = true);
                        val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                        val.OrderStatus == '4' && val.itemType == '3' && (res['单 号' + '_show'] = true);
                        val.OrderStatus == '2' && val.itemType == '3' && (res['编 辑' + '_show'] = true);
                        return res;
                    });
                    this.loading = false;
                    this.$message.success('查询成功');
                });
            },
            orderMessage(text) {
                this.order_Msg.data = tableSearch(text, this.order_Msg.data);
            },
            order_recieveRow(arg) {
                this.htmlArg = arg[1];
                switch (arg[2]) {
                    /* 详情 */
                    case 'detail':
                        this.xiangqingDialog = true;
                        this.xiangqingDialog_Msg.data = [];
                        this.xiangqingDialog_Msg.data.push(arg[1]);
                        break;
                        /* 审核 */
                    case 'shenhe':
                        this.shenheDialog = true;
                        this.xiangqingDialog_Msg.data = [];
                        this.xiangqingDialog_Msg.data.push(arg[1]);
                        break;
                        /* 单号 */
                    case 'danhao':
                        this.danhaoDialog = true;
                        break;
                        /* 编辑 */
                    case 'edit':
                        this.editDialog = true;
                        this.editDialogHtml = arg[1];
                        break;
                        /* 充值 */
                    case 'handle':
                        this.orderDialog = true;
                        this.orderDialogHtml = arg[1];
                }
            },
            orderDialogSubmit(arg) {
                this.orderSubmitEvent = false;
                /* 直充 */
                let CompanyID = '1491';
                let InterfacePwd = 'umbe5j';
                let Mobile = arg[0].MobilePhone;
                let Amount = '100';
                let OrderID = arg[0].OrderNum;
                let OrderSource = 1;
                let Key = hex_md5(CompanyID + InterfacePwd + Mobile + Amount + OrderID + '9js8ky');
                this.$res.postData(this, '/Changty/http_get/', {
                    url: 'http://wr.800617.com:6001/submit.aspx' + '?CompanyID=' + CompanyID + '&InterfacePwd=' + InterfacePwd + '&Mobile=' + Mobile + '&Amount=' + Amount + '&OrderID=' + OrderID + '&OrderSource=' + OrderSource + '&Key=' + Key
                }).then((response) => {
                    switch (response.code) {
                        case '0000':
                            // 充值成功
                            this.orderDialog = false;
                            this.$res.postData(this, '/Exchange/query_audit_list/').then((response) => {
                                this.order_Msg.data = response.map((val) => {
                                    let res = val;
                                    val.OrderStatus == '4' && val.itemType == '2' && (res['充 值' + '_show'] = true);
                                    val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                                    val.OrderStatus == '4' && val.itemType == '3' && (res['单 号' + '_show'] = true);
                                    val.OrderStatus == '2' && val.itemType == '3' && (res['编 辑' + '_show'] = true);
                                    return res;
                                });
                            });
                            this.$message.success(response.msg);
                            break;
                        case '1001':
                            // 参数不完整
                            this.$message.error(response.msg);
                            break;
                        case '1002':
                            // 手机号不正确
                            this.$message.error(response.msg);
                            break;
                        case '1003':
                            // 金额不正确
                            this.$message.error(response.msg);
                            break;
                        case '1004':
                            // 账户不存在
                            this.$message.error(response.msg);
                            break;
                        case '1005':
                            // 密码不正确
                            this.$message.error(response.msg);
                            break;
                        case '1006':
                            // IP鉴权失败
                            this.$message.error(response.msg);
                            break;
                        case '1007':
                            // md5 key验证不正确
                            this.$message.error(response.msg);
                            break;
                        case '2001':
                            // 账户已暂停
                            this.$message.error(response.msg);
                            break;
                        case '2002':
                            // 账户余额异常
                            this.$message.error(response.msg);
                            break;
                        case '2003':
                            // 联通智能网号码（运营商要求，该号码只支持20、30、50、100、300元五个面值）
                            this.$message.error(response.msg);
                            break;
                        case '2004':
                            // 订单号重复
                            this.$message.error(response.msg);
                            break;
                        case '2005':
                            // 余额不足
                            this.$message.error(response.msg);
                            break;
                        case '2006':
                            // 该产品未开通
                            this.$message.error(response.msg);
                            break;
                        case '9999':
                            // 系统错误
                            this.$message.error(response.msg);
                            break;
                    }
                });
            },
            OrderSubmitName() {
                this.orderSubmitEvent = 'submitEvent';
            },
            /* 审核不通过 */
            not_examine() {
                this.$confirm('此操作将会设置不通过审核状态，是否继续？', '温馨提示', {
                    confirmButtonText: '确 定',
                    cancelButtonText: '取 消',
                    type: 'warning'
                }).then(() => {
                    this.$res.postData(this, '/Exchange/examine/', {
                        examine: 0,
                        order_id: this.htmlArg.OrderID
                    }).then((response) => {
                        this.shenheDialog = false;
                        this.$res.postData(this, '/Exchange/query_audit_list/').then((response) => {
                            this.order_Msg.data = response.map((val) => {
                                let res = val;
                                val.OrderStatus == '4' && val.itemType == '2' && (res['充 值' + '_show'] = true);
                                val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                                val.OrderStatus == '4' && val.itemType == '3' && (res['单 号' + '_show'] = true);
                                val.OrderStatus == '2' && val.itemType == '3' && (res['编 辑' + '_show'] = true);
                                return res;
                            });
                        });
                        this.$message.error('审核不通过');
                    });
                }).catch(() => {
                    this.shenheDialog = false;
                    this.$message.error('已取消');
                });
            },
            /* 审核通过 */
            examine() {
                this.$confirm('此操作将会设置通过审核，是否继续？', '温馨提示', {
                    confirmButtonText: '确 定',
                    cancelButtonText: '取 消',
                    type: 'warning'
                }).then(() => {
                    this.$res.postData(this, '/Exchange/examine/', {
                        examine: 1,
                        order_id: this.htmlArg.OrderID
                    }).then((response) => {
                        this.shenheDialog = false;
                        this.$res.postData(this, '/Exchange/query_audit_list/').then((response) => {
                            this.order_Msg.data = response.map((val) => {
                                let res = val;
                                val.OrderStatus == '4' && val.itemType == '2' && (res['充 值' + '_show'] = true);
                                val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                                val.OrderStatus == '4' && val.itemType == '3' && (res['单 号' + '_show'] = true);
                                val.OrderStatus == '2' && val.itemType == '3' && (res['编 辑' + '_show'] = true);
                                return res;
                            });
                        });
                        this.$message.success('通过审核');
                    });
                }).catch(() => {
                    this.shenheDialog = false;
                    this.$message.error('已取消');
                });
            },
            /* 单号 */
            danhaoDialogSubmit(arg) {
                let param = {
                    order_id: this.htmlArg.OrderID,
                    KuaiDiNumber: arg[0].KuaiDiNumber,
                    KuaiDiName: arg[0].KuaiDiName
                };
                this.$res.postData(this, '/Exchange/update_examine_info/', param).then((response) => {
                    this.danhaoDialog = false;
                    this.danhaoDialogEvent = false;
                    this.$res.postData(this, '/Exchange/query_audit_list/').then((response) => {
                        this.order_Msg.data = response.map((val) => {
                            let res = val;
                            val.OrderStatus == '4' && val.itemType == '2' && (res['充 值' + '_show'] = true);
                            val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                            val.OrderStatus == '4' && val.itemType == '3' && (res['单 号' + '_show'] = true);
                            val.OrderStatus == '2' && val.itemType == '3' && (res['编 辑' + '_show'] = true);
                            return res;
                        });
                    });
                    this.$message.success('设置成功');
                });
            },
            danhaoSubmitName() {
                this.danhaoDialogEvent = 'submitEvent';
            },
            /* 编辑 */
            editDialogSubmit(arg) {
                let param = {
                    order_id: arg[0].OrderID,
                    KuaiDiNumber: arg[0].KuaiDiNumber,
                    KuaiDiName: arg[0].KuaiDiName
                };
                this.$res.postData(this, '/Exchange/edit_examine_info/', param).then((response) => {
                    this.$res.postData(this, '/Exchange/query_audit_list/').then((response) => {
                        this.order_Msg.data = response.map((val) => {
                            let res = val;
                            val.OrderStatus == '4' && val.itemType == '2' && (res['充 值' + '_show'] = true);
                            val.OrderStatus == '0' && (res['审 核' + '_show'] = true);
                            val.OrderStatus == '4' && val.itemType == '3' && (res['单 号' + '_show'] = true);
                            val.OrderStatus == '2' && val.itemType == '3' && (res['编 辑' + '_show'] = true);
                            return res;
                        });
                    });
                    this.editDialog = false;
                    this.editDialogEvent = false;
                    this.$message.success('编辑成功');
                });
            },
            editSubmitName() {
                this.editDialogEvent = 'submitEvent';
            },
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
            let baseOrderConfig = exchangeOrderTable();
            baseOrderConfig.columns[baseOrderConfig.columns.length - 1].template = {
                btns: [{
                    name: '审 核',
                    type: 'warning',
                    funcName: 'shenhe',
                    if: true,
                }, {
                    name: '充 值',
                    type: 'primary',
                    funcName: 'handle',
                    if: true,
                }, {
                    name: '单 号',
                    type: 'info',
                    funcName: 'danhao',
                    if: true,
                }, {
                    name: '编 辑',
                    type: 'danger',
                    funcName: 'edit',
                    if: true
                }]
            };
        }
    }
</script>
