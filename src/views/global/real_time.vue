<template>
    <div id="container">
        <h1 class="h1-title">实时数据</h1>
        <div class="cms-content">
            <el-tabs type="border-card">
                <el-tab-pane label="数据概况">
                    <el-button type="success" plain @click.native="realtime_btn">刷 新</el-button>
                    <br />
                    <br />
                    <table-option :parent-message="realtime_Msg" v-loading="realtimeloading"
                                  element-loading-text="拼命加载中"></table-option>

                    <br />
                    <el-collapse v-model="realtimeName">
                        <el-collapse-item title="用户汇总" name="11">
                            <el-button type="success" plain @click.native="summary_btn">刷 新</el-button>
                            <table-option :parent-message="summary_Msg" v-loading="summaryloading"
                                          element-loading-text="拼命加载中"></table-option>
                        </el-collapse-item>
                        <el-collapse-item title="历史概况" name="10">
                            <ele-form :config="history_survey_config" v-on:receive="history_survey_submit"
                                      :defaultdata="historySurveyHtml"></ele-form>
                            <table-option :parent-message="history_Msg" v-loading="historyloading"
                                          element-loading-text="拼命加载中"></table-option>
                        </el-collapse-item>
                        <el-collapse-item title="在线人数统计" name="12">
                            <el-button type="success" plain @click.native="online_btn">查 询</el-button>
                            <table-option :parent-message="online_Msg" v-loading="loading2"
                                          element-loading-text="拼命加载中"></table-option>
                        </el-collapse-item>
                    </el-collapse>
                </el-tab-pane>
                <el-tab-pane label="注册统计">
                    <el-collapse v-model="activeName">
                        <el-collapse-item title="曲线图" name="0">
                            <ele-form :config="reg_qx_config" v-on:receive="reg_qx_submit"
                                      :defaultdata="regQxtHtml"></ele-form>
                            <chart-option :chart-data="chartD" :chart-id="chartId"></chart-option>
                        </el-collapse-item>
                        <el-collapse-item title="数据统计" name="0">
                            <ele-form :config="register_config" v-on:receive="register_submit"
                                      :defaultdata="registerDefaultHtml"></ele-form>
                            <table-option :parent-message="register_Msg" v-on:message="registerMessage"
                                          v-loading="loading" element-loading-text="拼命加载中"></table-option>
                        </el-collapse-item>
                    </el-collapse>
                </el-tab-pane>
                <el-tab-pane label="金币分布">
                    <ele-form :config="gold_dis_config" v-on:receive="gold_dis_submit"
                              :defaultdata="goldDefaultHtml"></ele-form>
                    <table-option :parent-message="goldCoin_Msg" v-loading="goldCoinloading"
                                  element-loading-text="拼命加载中"></table-option>
                    <br />
                    <br />
                    <chart-option :chart-data="chartDCoin" :chart-id="chartIdCoin"></chart-option>
                    <div style="margin-top: 100px;"></div>
                </el-tab-pane>
                <el-tab-pane label="流失玩家">
                    <el-button type="success" plain @click.native="loss_user_btn">刷 新</el-button>
                    <table-option :parent-message="loss_Msg" v-on:message="lossMessage" v-loading="lossloading"
                                  element-loading-text="拼命加载中"></table-option>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>
<script>
//引入表格搜索
import {
    tableSearch
} from '@/libs/tableSearch'
import {
    historySurveyForm,
    regQxForm,
    registerUserForm,
    goldDisForm
} from '@/form/config/real_time'
import {
    realtimeTable,
    summaryTable,
    historySurveyTable,
    registerUserTable,
    roomUserTable,
    goldCoinTable,
    lossTable,
} from '@/table/config/real_time'
import {
    registerChart,
} from '@/chart/config/registerChart'
import {
    coinChart
} from '@/chart/config/goldCoinChart'

export default {
    name: 'real_time',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            /* 数据概况 */
            activeName: ['0'],
            loading: false,
            loading2: false,
            realtime_Msg: realtimeTable(),
            realtimeloading: false,
            realtimeName: [''],
            // 用户汇总
            summary_Msg: summaryTable(),
            // 历史概括
            history_survey_config: historySurveyForm(),
            historySurveyHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 29),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            history_Msg: historySurveyTable(),
            historyloading: false,
            /* 注册统计 */
            reg_qx_config: regQxForm(),
            chartD: registerChart(),
            chartId: 'real_time_qx_chart',
            regQxtHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 29),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            register_config: registerUserForm(),
            register_Msg: registerUserTable(),
            registerDefaultHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 29),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            /* 在线人数统计 */
            online_Msg: roomUserTable(),
            /* 金币分布 */
            gold_dis_config: goldDisForm(),
            goldDefaultHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) - 3600 * 24 * 7),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            goldCoinloading: false,
            goldCoin_Msg: goldCoinTable(),
            chartDCoin: coinChart(),
            chartIdCoin: 'goldCoin_chart',
            /* 流失玩家 */
            lossloading: false,
            loss_Msg: lossTable(),
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {
    },
    /* 需要事件调用的方法放在methods内 */
    methods: {
        /* 实时数据 */
        realtime_btn() {
            this.$res.postData(this, '/Realtime/query_realtime_info/').then((response) => {
                this.realtime_Msg.data = [];
                this.realtime_Msg.data = response;
                this.$message.success('刷新成功');
            });
        },
        // 用户汇总
        summary_btn() {
            this.summaryloading = true;
            this.$res.postData(this, '/Realtime/query_user_summary/').then((response) => {
                this.summary_Msg.data = [];
                this.summary_Msg.data = response;
                this.summaryloading = false;
                this.$message.success('刷新成功');
            });
        },
        // 历史概况数据
        history_survey_submit(arg) {
            this.historyloading = true;
            this.$res.postData(this, '/Realtime/query_history_info/', arg[0]).then((res) => {
                this.history_Msg.data = [];
                this.history_Msg.data = res.reverse();
                this.historyloading = false;
                this.$message.success('查询成功');
            })
        },
        /* 注册统计 */
        register_submit(arg) {
            this.loading = true;
            this.$res.postData(this, '/Realtime/query_register_player/', arg[0]).then((response) => {
                this.register_Msg.data = [];
                this.register_Msg.data = response;
                this.loading = false;
                this.$message.success('查询成功');
            });
        },
        /* 曲线图 */
        reg_qx_submit(arg) {
            let _self = this;
            _self.$res.postData(_self, '/Realtime/get_system_stream_info/', arg[0]).then((response) => {
                let data = {
                    login_success: [],
                    register_success: [],
                };
                response.forEach((register_data) => {
                    // let time = register_data['CollectDate'];
                    let time = parseInt((register_data['CollectDate'] + 8 * 3600)) * 1000;
                    data.login_success.push([time, register_data.GameLogonSuccess]);
                    data.register_success.push([time, register_data.GameRegisterSuccess]);
                });
                _self.chartD.series = [{
                    name: '登录人数',
                    data: data.login_success
                }, {
                    name: '注册人数',
                    data: data.register_success
                }];
            });
        },
        registerMessage(text) {
            this.register_Msg.data = tableSearch(text, this.register_Msg.data);
        },
        /* 在线人数统计 */
        online_btn() {
            this.loading2 = true;
            this.$res.postData(this, '/Realtime/query_online_player/').then((response) => {
                this.online_Msg.data = [];
                this.online_Msg.data = response;
                this.loading2 = false;
                this.$message.success('查询成功');
            });
        },
        /* 金币分布 */
        gold_dis_submit(arg) {
            this.goldCoinloading = true;
            this.$res.postData(this, '/Realtime/query_gold_coin_info/', arg[0]).then((response) => {
                this.goldCoin_Msg.data = [];
                this.goldCoin_Msg.data = response;
                this.goldCoinloading = false;
                this.$message.success('查询成功');
                this.chartDCoin.series = [{
                    type: 'pie',
                    name: '金币分布占比',
                    data: [
                        ['1千以下', response[0]['n1']],
                        ['1千-6万', response[0]['n2']],
                        ['6万-28.8万', response[0]['n3']],
                        ['28.8万-84万', response[0]['n4']],
                        ['84万-192万', response[0]['n5']],
                        ['192万-540万', response[0]['n6']],
                        ['540万-1000万', response[0]['n7']],
                        ['1000万-1亿', response[0]['n8']],
                        ['1亿-3亿', response[0]['n9']],
                        ['3亿以上', response[0]['n10']]
                    ]
                }]
            });
        },
        /* 流失玩家 */
        loss_user_btn() {
            this.lossloading = true;
            this.$res.postData(this, '/Realtime/query_loss_user_info/').then((response) => {
                this.loss_Msg.data = [];
                this.loss_Msg.data = response;
                this.lossloading = false;
                this.$message.success('查询成功');
            });
        },
        lossMessage(text) {
            this.loss_Msg.data = tableSearch(text, this.loss_Msg.data);
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        let _self = this;
        /* 实时数据 */
        _self.$res.postData(_self, '/Realtime/query_realtime_info/').then((response) => {
            _self.realtime_Msg.data = [];
            _self.realtime_Msg.data = response;
        });
        /* 用户汇总 */
        _self.$res.postData(_self, '/Realtime/query_user_summary/').then((response) => {
            _self.summary_Msg.data = [];
            _self.summary_Msg.data = response;
        });
        /* 历史概况 */
        _self.$res.postData(_self, '/Realtime/query_history_info/', {
            query_start_time: _self.historySurveyHtml.query_start_time,
            query_end_time: _self.historySurveyHtml.query_end_time
        }).then((response) => {
            _self.history_Msg.data = [];
            _self.history_Msg.data = response.reverse();
        });
        /* 注册统计 - 曲线图 */
        _self.$res.postData(_self, '/Realtime/get_system_stream_info/', {
            query_start_time: _self.regQxtHtml.query_start_time,
            query_end_time: _self.regQxtHtml.query_end_time
        }).then((response) => {
            let data = {
                login_success: [],
                register_success: [],
            };
            response.forEach((register_data) => {
                // let time = register_data['CollectDate'];
                let time = parseInt((register_data['CollectDate'] + 8 * 3600)) * 1000;
                data.login_success.push([time, register_data.GameLogonSuccess]);
                data.register_success.push([time, register_data.GameRegisterSuccess]);
            });
            _self.chartD.series = [{
                name: '登录人数',
                data: data.login_success
            }, {
                name: '注册人数',
                data: data.register_success
            }];
        });
        /* 注册统计 - 查询 */
        _self.$res.postData(_self, '/Realtime/query_register_player/', {
            query_start_time: _self.registerDefaultHtml.query_start_time,
            query_end_time: _self.registerDefaultHtml.query_end_time
        }).then((response) => {
            _self.register_Msg.data = [];
            _self.register_Msg.data = response;
        });
        /* 在线人数统计 - 查询 */
        _self.$res.postData(_self, '/Realtime/query_online_player/').then((response) => {
            _self.online_Msg.data = [];
            _self.online_Msg.data = response;
        });
        /* 金币分布 */
        _self.$res.postData(_self, '/Realtime/query_gold_coin_info/', {
            query_start_time: _self.goldDefaultHtml.query_start_time,
            query_end_time: _self.goldDefaultHtml.query_end_time
        }).then((response) => {
            _self.goldCoin_Msg.data = [];
            _self.goldCoin_Msg.data = response;
            _self.chartDCoin.series = [{
                type: 'pie',
                name: '金币分布占比',
                data: [
                    ['1千以下', response[0]['n1']],
                    ['1千-6万', response[0]['n2']],
                    ['6万-28.8万', response[0]['n3']],
                    ['28.8万-84万', response[0]['n4']],
                    ['84万-192万', response[0]['n5']],
                    ['192万-540万', response[0]['n6']],
                    ['540万-1000万', response[0]['n7']],
                    ['1000万-1亿', response[0]['n8']],
                    ['1亿-3亿', response[0]['n9']],
                    ['3亿以上', response[0]['n10']]
                ]
            }]
        });
        /* 流失玩家 */
        _self.$res.postData(_self, '/Realtime/query_loss_user_info/').then((response) => {
            _self.loss_Msg.data = [];
            _self.loss_Msg.data = response;
        });
    }
}

</script>
