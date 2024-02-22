<template>
    <div>
        <a-form ref="formRef" :model="formModel" v-bind="$attrs">
            <a-form-item
                :name="item.field"
                :label="item.label"
                v-for="item in formSchema"
                :key="item.field"
                v-bind="item.formItemProps"    
            >
            <component
                :is="componentsMap[item.component]" 
                v-bind="item.componentProps"  
                v-model:value="formModel[item.field]" 
            ></component>

            </a-form-item>
        </a-form>   
    </div>
</template>
<script lang="ts" setup>
import {ref,reactive,onMounted,watch} from 'vue'
import { componentsMap } from "@/congf/config.js";
const props = defineProps({
  // 表单项配置
  schema: {
    type: Array,
    default: () => [],
  },
  // 表单model配置，一般用于默认值、回显数据
  model: {
    type: Object,
    default: () => ({}),
  },
});
const formRef = ref(null);
const formModel = ref({})
const formSchema = ref([]);
const initForm = () =>{
    formSchema.value = props.schema.map((x:any) => {
    return {
      ...x,
    };
  });

  // model初始数据
  formModel.value = props.schema.reduce((pre:any, cur:any) => {
    if (!pre[cur.field]) {
      // 表单初始数据(默认值)
      pre[cur.field] = cur.value;
      return pre;
    }
  }, {});
}
onMounted(()=>{
    initForm()
})
watch(()=>props.model,(newVal:any)=>{
    formModel.value = { ...formModel.value, ...newVal };
},{immediate:true,deep:true})

// 表单验证
const validateFields = () => {
  return new Promise((resolve, reject) => {
    formRef.value
      .validateFields()
      .then((formData) => {
        resolve(formData);
      })
      .catch((err) => reject(err));
  });
};

// 表单重置
const resetFields = (isInit = true) => {
  // 是否清空默认值
  if (isInit) {
    formModel.value = {};
  }
  formRef.value.resetFields();
};


// 暴露方法
defineExpose({
  validateFields,
  resetFields,
});
</script> 