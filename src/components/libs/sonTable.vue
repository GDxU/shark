<template>
    <div class="child-table">
        <el-table :data="tableData" border style="width: 100%; margin-top: 20px;">
            <el-table-column v-for="col in tblCols" :key="col.name" :prop="col.name" :label="col.title"
                             :sortable="col.sortable" :formatter="col.formatter">
                <template scope="scope">
                    <div v-if="col.template">
                        <el-button v-for="btn in col.template.btns" size="small" :disabled="btn.disabled"
                                   :key="btn.name" :type="btn.type"
                                   @click="outPutRow(scope.$index, scope.row, btn.funcName, scope)">{{btn.name}}</el-button>
                    </div>
                    <div v-if="col.template&&col.template.user_link">
                        <a :href="pathname+'#/users/user_info?userid='+scope.row[col.name]" target="_blank"
                           :style="{'color':'#20A0FF'}">{{scope.row[col.name]}}</a>
                    </div>
                    <!--<div v-if="col.template&&col.template.img" style="text-align: center">-->
                        <!--<img :src="" alt="" height="100px">-->
                    <!--</div>-->
                    <div v-if="!col.template">
                        {{col.formatter ? col.formatter(scope.row, '', scope.row[col.name]) : scope.row[col.name]}}
                    </div>
                </template>
                <el-table-column v-for="sub_col in col.sub" :key="sub_col.name" :prop="sub_col.name"
                                 :label="sub_col.title" :sortable="sub_col.sortable" :formatter="sub_col.formatter">
                    <template scope="scope">
                        <div v-if="sub_col.template">
                            <el-button v-for="btn in sub_col.template.btns" size="small" :disabled="btn.disabled"
                                       :key="btn.name" :type="btn.type"
                                       @click="outPutRow(scope.$index, scope.row,btn.funcName,scope)">{{btn.name}}</el-button>
                        </div>
                        <div v-if="sub_col.template&&sub_col.template.user_link">
                            <a :href="pathname+'#/users/user_info?userid='+scope.row[sub_col.name]" target="_blank"
                               style="color:#20A0FF;">{{scope.row[sub_col.name]}}</a>
                        </div>
                        <!--<div v-if="sub_col.template&&sub_col.template.img" style="text-align: center">-->
                            <!--<img :src="" alt="" height="100px">-->
                        <!--</div>-->
                        <div v-if="!sub_col.template">
                            {{sub_col.formatter?sub_col.formatter(scope.row,'',scope.row[sub_col.name]):scope.row[sub_col.name]}}
                        </div>
                    </template>
                </el-table-column>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: 'table-option',
    data() {
        return {
            pathname: location.pathname,
        }
    },
    props: ['cols', 'scope'],
    methods: {
        /*! 数据行按钮方法 */
        outPutRow() {
            let arg = Array.prototype.slice.call(arguments);
            arg[arg.length] = this.scope.$index;
            this.$emit('outputrow', arg);
        }
    },
    computed: {
        /*! 数据渲染 */
        tableData: function () {
            if (!this.scope) {
                return [];
            }
            return this.scope.row.children
        },
        tblCols: function () {
            return this.cols;
        }
    },
    components: {}
}

</script>
<style>
.el-table__expanded-cell {
    padding: 15px;
    padding-top: 0;
}

</style>
