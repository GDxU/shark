<template>
    <div id="container">
        <h1 class="h1-title">日报汇总</h1>
        <div class="cms-content">
            <ele-form :config="summaryConfig" v-on:receive="summarySubmit"></ele-form>
            <br />
            <br />
            <el-form :model="form" method="POST" enctype="multipart/form-data"
                     action="/Customavatar/receiveStreamImage/">
                <el-upload
                    class="upload-demo"
                    ref="upload"
                    action="/Customavatar/receiveStreamImage/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :multiple="true"
                    :auto-upload="false"
                    :on-success="uploadSuccess"
                    :on-error="uploadError">
                    <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success"
                               @click="submitUpload">上传到服务器</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form>
        </div>
    </div>
</template>

<script>
    import {
        summaryForm
    } from '@/form/config/summary'

    export default {
        name: 'summary',
        /* 组件内自行使用的数据可以在data内渲染 */
        data() {
            return {
                summaryConfig: summaryForm(),
                /* 上传自定义头像 */
                form: {
                    file: '',
                },
                formLabelWidth: '120px',
            }
        },
        /* 需要元素渲染完调用的方法放在mounted内 */
        mounted() {
        },
        /* 需要事件调用的方法放在methods内 */
        methods: {
            summarySubmit(arg) {
                this.$res.postData(this, '/Summary/set_share_info/', arg[0]).then((response) => {
                    if (response.code == 0) {
                        this.$message.success('设置成功');
                    } else {
                        this.$message.error('设置失败');
                    }
                });
            },
            /* 上传自定义头像 */
            submitUpload() {
                this.$confirm('确定上传此头像？').then(() => {
                    this.$refs.upload.submit();
                }).catch(() => {
                    this.$message.error('已取消上传');
                });
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            },
            uploadSuccess(response) {
                if (response.code == 0) {
                    this.$message.success(response.msg);
                } else {
                    this.$message.error(response.msg);
                }
            },
            uploadError(response) {
                this.$message.error(response.msg);
            }
        },
        /* 引入组件放在components */
        components: {},
        /* 计算属性放于computed内 */
        computed: {},
        created() {
            // this.$res.postData(this, '/Summary/check/').then((response) => {
            //     console.log('111');
            // });
        }
    }
    </script>

