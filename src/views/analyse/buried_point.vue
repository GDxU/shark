<template>
    <div id="container">
        <h1 class="h1-title">埋点数据</h1>
        <div class="cms-content">
            <el-tabs type="border-card">
                <el-tab-pane label="登录"></el-tab-pane>
                <el-tab-pane label="大厅"></el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'buried_point',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {}
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {},
        /* 需要事件调用的方法放在methods内 */
        methods: {},
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {}
    }
</script>


