<template>
    <div id="container">
        <h1 class="h1-title">看牌抢庄</h1>
        <div class="cms-content">
            <el-collapse v-model="activeName">
                <el-collapse-item title="曲线图" name="0">
                    <ele-form :config="lookcard_qx_config" v-on:receive="lookcard_qx_submit" :defaultdata="qxdefaultHtml"></ele-form>
                    <chart-option :chart-data="chartD" :chart-id="chartId"></chart-option>
                </el-collapse-item>
                <el-collapse-item title="单局记录" name="1">
                    <ele-form :config="lookcard_single_config" v-on:receive="lookcard_single_submit" :defaultdata="defaultTime"></ele-form>
                    <table-option :parent-message="look_card_single_Msg" v-on:message="lookCardMessage" v-loading="loading" element-loading-text="拼命加载中"></table-option>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>
<script>
//引入表格搜索
import {
    tableSearch
} from '@/libs/tableSearch'
import {
    lookcardSingleFrom,
    lookcardQxForm
} from '@/form/config/look_cards'
import {
    lookcardSingleTable
} from '@/table/config/look_cards'
import {
    lookcardChart
} from '@/chart/config/lookcardChart'
export default {
    name: 'look_card',
    /* 组件内自行使用的数据可以在data内渲染 */
    data() {
        return {
            loading: false,
            activeName: '',
            /* 曲线图 */
            lookcard_qx_config: lookcardQxForm(),
            chartD: lookcardChart(),
            chartId: 'lookcard_qx_chart',
            qxdefaultHtml: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            },
            /* 单局记录 */
            lookcard_single_config: lookcardSingleFrom(),
            look_card_single_Msg: lookcardSingleTable(),
            defaultTime: {
                query_start_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8))),
                query_end_time: parseInt(((new Date().getTime() + (3600 * 8 * 1000) - (new Date().getTime() + (3600 * 8 * 1000)) % (3600 * 24 * 1000)) / 1000 - (3600 * 8)) + 3600 * 24 - 1),
            }
        }
    },
    /* 需要元素渲染完调用的方法放在mounted内 */
    mounted() {},
    /* 需要事件调用的方法放在methods内 */
    methods: {
        /* 曲线图 */
        lookcard_qx_submit(arg) {
            let _self = this;
            _self.$res.postData(_self, '/Lookcards/lookCard_single/', {
                KindID: 10004,
                query_start_time: arg[0].query_start_time,
                query_end_time: arg[0].query_end_time
            }).then((response) => {
                let data = {
                    human_cnt: [],
                    robot_cnt: [],
                    Waste: [],
                    tax: [],
                };
                response.forEach((single_data) => {
                    let time = parseInt((single_data['InsertTime'] + 8 * 3600)) * 1000;
                    data.human_cnt.push([time, single_data.UserCount]);
                    data.robot_cnt.push([time, single_data.AndroidCount]);
                    data.Waste.push([time, single_data.Waste]);
                    data.tax.push([time, single_data.Revenue]);
                });
                _self.chartD.series = [{
                    name: '真人在线',
                    data: data.human_cnt,
                    visible: true
                }, {
                    name: '机器人在线',
                    data: data.robot_cnt,
                    visible: true
                }, {
                    name: '真人盈亏',
                    data: data.Waste,
                    visible: true
                }, {
                    name: '税收',
                    data: data.tax,
                    visible: true
                }];
            });
        },
        /* 单局记录 */
        lookcard_single_submit(arg) {
            let _self = this;
            _self.loading = true;
            _self.$res.postData(_self, '/Lookcards/lookCard_single/', {
                KindID: 10004,
                query_start_time: arg[0].query_start_time,
                query_end_time: arg[0].query_end_time
            }).then((response) => {
                _self.look_card_single_Msg.data = [];
                _self.look_card_single_Msg.data = response;
                _self.loading = false;
                _self.$message.success('查询成功');
            });
        },
        /* 搜搜功能 */
        lookCardMessage(text) {
            this.look_card_single_Msg.data = tableSearch(text, this.look_card_single_Msg.data);
        }
    },
    /* 引入组件放在components */
    components: {},
    /* 计算属性放于computed内 */
    computed: {},
    created() {
        /* 单局记录 */
        let _self = this;
        _self.$res.postData(_self, '/Lookcards/lookCard_single/', {
            KindID: 10004,
            query_start_time: _self.defaultTime.query_start_time,
            query_end_time: _self.defaultTime.query_end_time
        }).then((response) => {
            _self.look_card_single_Msg.data = [];
            _self.look_card_single_Msg.data = response;
        });

        /* 曲线图 */
        _self.$res.postData(_self, '/Lookcards/lookCard_single/', {
            KindID: 10004,
            query_start_time: _self.qxdefaultHtml.query_start_time,
            query_end_time: _self.qxdefaultHtml.query_end_time
        }).then((response) => {
            let data = {
                human_cnt: [],
                robot_cnt: [],
                Waste: [],
                tax: [],
            };
            response.forEach((single_data) => {
                let time = parseInt((single_data['InsertTime'] + 8 * 3600)) * 1000;
                data.human_cnt.push([time, single_data.UserCount]);
                data.robot_cnt.push([time, single_data.AndroidCount]);
                data.Waste.push([time, single_data.Waste]);
                data.tax.push([time, single_data.Revenue]);
            });
            _self.chartD.series = [{
                name: '真人在线',
                data: data.human_cnt,
                visible: true
            }, {
                name: '机器人在线',
                data: data.robot_cnt,
                visible: true
            }, {
                name: '真人盈亏',
                data: data.Waste,
                visible: true
            }, {
                name: '税收',
                data: data.tax,
                visible: true
            }];
        });
        /* 获取游戏房间 */
        let baseqxConfig = lookcardQxForm();
        if (!window.roomInfo) {
            let roominfo_list = new Promise((resolve, reject) => {
                _self.$res.getSingleData(_self, '/Cmsbase/room_info/').then((response) => {
                    if (response) {
                        resolve(response);
                    } else {
                        reject('error');
                    }
                });
            });
            roominfo_list.then((response) => {
                window.roomInfo = response;
                fillRoomList(response);
            }, () => {
                _self.$message.error('获取游戏房间列表失败');
            });
        } else {
            fillRoomList(window.roomInfo);
        }

        function fillRoomList(response) {
            response.map((k, v) => {
                if (v >= 0) {
                    baseqxConfig.formEle[1].options.push({
                        value: k.ServerID,
                        label: k.ServerName + '-' + k.ServerID
                    });
                }
            });
            _self.lookcard_qx_config = _self.$res.deepClone(baseqxConfig);
        }
    }
}

</script>
