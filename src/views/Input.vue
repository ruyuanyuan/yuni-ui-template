<template>
    <YuniContent pNum='20'>
        <div class='page-title'>输入框组件</div>
        <div class='page-content'>
            <YuniCard title='输入框'>
               <YuniInput type='text'></YuniInput>
               <YuniInput type='text' width='200'></YuniInput>
               <YuniInput type='text' width='200' radius='8'></YuniInput>
               <YuniInput type='text' width='200' radius='8' color='#666'></YuniInput>
               <YuniInput type='text' width='200' radius='8' borderColor='#ccc' placeholder="请输入"></YuniInput>
               <YuniInput type='number' width='200' radius='8' borderColor='#efefef' placeholder="请输入数字"></YuniInput>
            </YuniCard>
            <code class='yuni-code' v-highlight>
                <pre class='yuni-pre'>
<code>
 &nbsp;&lt;YuniInput&nbsp;type='text'&gt;&lt;/YuniInput&gt;
 &nbsp;&lt;YuniInput&nbsp;type='text'&nbsp;width='200'&gt;&lt;/YuniInput&gt;
 &nbsp;&lt;YuniInput&nbsp;type='text'&nbsp;width='200'&nbsp;radius='8'&gt;&lt;/YuniInput&gt;
 &nbsp;&lt;YuniInput&nbsp;type='text'&nbsp;width='200'&nbsp;radius='8'&nbsp;color='#666'&gt;&lt;/YuniInput&gt;
 &nbsp;&lt;YuniInput&nbsp;type='text'&nbsp;width='200'&nbsp;radius='8'&nbsp;borderColor='#ccc'&nbsp;placeholder="请输入"&gt;&lt;/YuniInput&gt;
 &nbsp;&lt;YuniInput&nbsp;type='number'&nbsp;width='200'&nbsp;radius='8'&nbsp;borderColor='#efefef'&nbsp;placeholder="请输入数字"&gt;&lt;/YuniInput&gt;
</code>
                </pre>
            </code>
           <table class='yuni-table'>
               <thead>
                   <th>参数</th>
                   <th style='width:300px'>说明</th>
                   <th>类型</th>
                   <th>可选值</th>
                   <th>默认值</th>
               </thead>
               <tbody>
                    <tr>
                       <td>type</td>
                       <td>类型</td>
                       <td>String</td>
                       <td>text/number</td>
                       <td>text</td>
                   </tr>
                   <tr>
                       <td>width</td>
                       <td>宽度</td>
                       <td>String/Number</td>
                       <td>-</td>
                       <td>240</td>
                   </tr>
                   <tr>
                       <td>height</td>
                       <td>高度</td>
                       <td>String/Number</td>
                       <td>-</td>
                       <td>36</td>
                   </tr>
                   <tr>
                       <td>radius</td>
                       <td>圆角</td>
                       <td>String/Number</td>
                       <td>-</td>
                       <td>4</td>
                   </tr>
                   <tr>
                       <td>color</td>
                       <td>文字颜色</td>
                       <td>String</td>
                       <td>-</td>
                       <td>#666</td>
                   </tr>
                   <tr>
                       <td>borderColor</td>
                       <td>边框颜色</td>
                       <td>String</td>
                       <td>-</td>
                       <td>#ddd</td>
                   </tr>
               </tbody>
           </table>
        </div>
    </YuniContent>
</template>
<script>
// import YuniContent from "@/components/YuniContent";
// import YuniCard from '@/components/YuniCard'
import YuniInput from '@/components/YuniInput'
export default {
    components:{
        // YuniContent,
        // YuniCard,
        YuniInput
    }
}
</script>
<style lang='scss' scoped>

</style>