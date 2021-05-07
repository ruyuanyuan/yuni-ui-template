<template>
    <YuniContent pNum='20'>
        <div class='yun-page'>
            <div class='page-title'>循环滚动</div>
            <div class='page-content'>
                <YuniCard>
                    <h2>纵向滚动(循环)</h2>
                    <YuniScroll step='30' height='300' scrollId='myscrll1'>
                        <ul>
                            <li class='yun-li' v-for="i in 10" :key='i'>{{i}}</li>
                        </ul>
                    </YuniScroll>
                    <h2>横向滚动(循环)</h2>
                    <YuniScroll step='30' height='300' direction='inline'>
                        <ul class='inline'>
                            <li class='yun-li' v-for="i in 10" :key='i'>{{i}}</li>
                        </ul>
                    </YuniScroll>
                </YuniCard>
            </div>
        </div>
        <code class='yuni-code' v-highlight>
                <pre class='yuni-pre'>
<code>
&lt;YuniCard&gt;
&nbsp;&nbsp;&lt;h2&gt;纵向滚动(循环)&lt;/h2&gt;
&nbsp;&nbsp;&lt;YuniScroll&nbsp;step='30'&nbsp;height='300'&nbsp;scrollId='myscrll1'&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class='yun-li'&nbsp;v-for="i&nbsp;in&nbsp;10"&nbsp;:key='i'&gt;\{\{i\}\}&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
    &lt;/YuniScroll&gt;
&nbsp;  &lt;h2&gt;横向滚动(循环)&lt;/h2&gt;
&nbsp;&nbsp;&lt;YuniScroll&nbsp;step='30'&nbsp;height='300'&nbsp;direction='inline'&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;ul&nbsp;class='inline'&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;li&nbsp;class='yun-li'&nbsp;v-for="i&nbsp;in&nbsp;10"&nbsp;:key='i'&gt;\{\{i\}\}&lt;/li&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/ul&gt;
&nbsp;&nbsp;&lt;/YuniScroll&gt;
&lt;/YuniCard&gt;

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
                       <td>step</td>
                       <td>滚动速度</td>
                       <td>String/Number</td>
                       <td></td>
                       <td>30</td>
                   </tr>
                   <tr>
                       <td>height</td>
                       <td>高度</td>
                       <td>String/Number</td>
                       <td>-</td>
                       <td>300</td>
                   </tr>
                   <tr>
                       <td>direction</td>
                       <td>方向</td>
                       <td>String</td>
                       <td>vertical/inline</td>
                       <td>vertical</td>
                   </tr>
                   <tr>
                       <td>scrollId</td>
                       <td>唯一ID</td>
                       <td>String</td>
                       <td>-</td>
                       <td>scroll0</td>
                   </tr>
               </tbody>
           </table>
    </YuniContent>
</template>
<script>
// import YuniContent from "@/components/YuniContent";
// import YuniCard from '@/components/YuniCard';
// import YuniAnimate from '@/components/YuniAnimate';
import YuniScroll from '@/components/YuniScroll';
export default {
    components:{
        // YuniContent,
        // YuniCard
        YuniScroll
    }
}
</script>
<style lang="scss" scoped>
.yun-li{
    line-height: 40px;
    text-align: center;
    border:1px solid #dfdfdf;
}
h2{
    margin: 15px 0;
}
.inline{
    display: flex;
    .yun-li{
        width:160px;
        height:300px;
        line-height: 300px;
        text-align: center;
        border:1px solid #dfdfdf;
    }
}
</style>