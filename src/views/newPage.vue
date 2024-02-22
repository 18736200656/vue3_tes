<template>
    <div style="padding:200px">
        <DynamicForm ref="formRef" :model="model" :schema="schema" :labelCol="{span:4}" :wrapperCol="{span:20}"/>
        <div style="display: flex;justify-content:center">
            <a-button @click="handleReset(true)">重置(全部清空)</a-button>
            <a-button @click="handleReset(false)" style="margin-left:50px">重置</a-button>
            <a-button type="primary" style="margin-left: 50px" @click="handleSubmit">提交</a-button>
        </div>
    </div>
</template>
<script setup lang="ts">
    import  DynamicForm from '@/components/dynamicForm.vue'
    import { ref ,reactive} from "vue";
    import dayjs from "dayjs";

    
    const formRef = ref(null);

    const schema = reactive([
        {
            label: "姓名",
            field: "name",
            component: "Text",
            componentProps: {
                allowClear: true,
                showCount: true,
                maxlength: 20,
                style: {
                    width: "500px",
                },
            },
            formItemProps: {
                rules: [
                    {
                        required: true,
                        message: "请输入姓名",
                        trigger: "blur",
                    },
                ],
            },
        },
        {
            label: "性别",
            field: "sex",
            component: "Radio",
            componentProps: {
              options: [
                  { value: 1, label: "男" },
                  { value: 2, label: "女" },
                  { value: 3, label: "保密" },
              ],  
            },
            formItemProps: {
              rules: [
                  {
                    required: true,
                    message: "请选择性别",
                    trigger: "blur",
                  },
              ],
            },
            value: 1,
        },
        {
            label: "生日",
            field: "birthday",
            component: "DatePicker",
            formItemProps: {
            rules: [
                {
                required: true,
                message: "生日日期不能为空",
                trigger: "blur",
                },
            ],
            },
        },
        {
            label: "兴趣",
            field: "hobby",
            component: "Checkbox",
            componentProps: {
            options: [
                { value: 1, label: "足球" },
                { value: 2, label: "篮球" },
                { value: 3, label: "排球" },
            ],
            },
        },
        {
            label: "国家",
            field: "country",
            component: "Select",
            componentProps: {
            allowClear: true,
            options: [
                { value: 1, label: "中国" },
                { value: 2, label: "美国" },
                { value: 3, label: "俄罗斯" },
            ],
            },
        },
        {
            label: "简介",
            field: "desc",
            component: "Textarea",
            componentProps: {
            allowClear: true,
            autoSize: {
                minRows: 4,
                maxRows: 4,
            },
            maxlength: 200,
            showCount: true,
            },
        },
    ])
  const model = reactive({name:'百里守约'});
  const handleSubmit =async () =>{
    const  formData = await formRef.value.validateFields();
    if(formData.birthday){
        formData.birthday = dayjs(formData.birthday).format("YYYY-MM-DD");
        console.log('提交信息：',formData)
    }
  }
  const handleReset = (isInit:boolean) =>{
    console.log(formRef.value,'==========')
    formRef.value.resetFields(isInit)
  }
</script>
<style>

</style>