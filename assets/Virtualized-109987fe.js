import{R as l,j as a}from"./index-4045ce2f.js";import{m as d,I as m}from"./makeData-615d9bb5.js";const g=new Intl.NumberFormat("zh-Hans-CN"),n=new Intl.NumberFormat("zh-Hans-CN",{minimumFractionDigits:2}),u=new Intl.NumberFormat("zh-Hans-CN",{style:"percent",minimumFractionDigits:2,maximumFractionDigits:2}),s=(e,t)=>{switch(t){case"integer":return g.format(e);case"percent":return u.format(e);case"decimal":default:return n.format(e)}},c=new Intl.DateTimeFormat("zh-Hans-CN",{hour12:!1,year:"numeric",month:"2-digit",day:"2-digit"}),h=new Intl.DateTimeFormat("zh-Hans-CN",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"}),o=new Intl.DateTimeFormat("zh-Hans-CN",{hour12:!1,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),f=(e,t)=>{switch(t){case"date":return c.format(e).replace(/\//g,"-");case"datetime":return o.format(e).replace(/\//g,"-");case"time":return h.format(e)}},x=e=>a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{children:"总计:"}),a.jsx("span",{children:n.format(e.table.getRowModel().rows.reduce((t,r)=>t+r.getValue(e.column.id),0))})]}),i=e=>a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{children:"小计:"}),n.format(e.getValue())]}),b=[{id:"ID",header:"ID",accessorKey:"id"},{header:"数据类型",columns:[{id:"枚举",size:100,minSize:100,accessorFn:e=>e.enum==="m"?"男":"女",accessorKey:"enum",meta:{align:"center",showFilterList:!0},filterFn:"equalsString",header:e=>a.jsx("span",{className:"text-secondary",children:"枚举"}),aggregatedCell:""},{id:"布尔",size:100,minSize:100,accessorFn:e=>e.boolean?"是":"否",accessorKey:"boolean",meta:{align:"center",showFilterList:!0},filterFn:"equalsString",header:e=>a.jsx("span",{className:"text-secondary",children:"布尔"}),aggregatedCell:""},{id:"整数",meta:{align:"right"},accessorFn:e=>e.integer,header:e=>a.jsx("span",{className:"text-secondary",children:"整数"}),cell:e=>s(e.getValue(),"integer"),aggregatedCell:i,footer:x},{id:"数字百分比",accessorKey:"percent",meta:{align:"right"},header:e=>a.jsx("span",{className:"text-secondary",children:"数字百分比"}),cell:e=>s(e.getValue(),"percent"),aggregatedCell:""},{id:"数字",accessorKey:"number",meta:{align:"right"},header:e=>a.jsx("span",{className:"text-secondary",children:"数字"}),cell:e=>s(e.getValue(),"decimal"),aggregatedCell:i},{id:"字符串数字",accessorKey:"stringNumber",meta:{align:"right"},header:e=>a.jsx("span",{className:"text-secondary",children:"字符串数字"})},{id:"日期转字符串",accessorFn:e=>c.format(e.birthdate).replace(/\//g,"-"),meta:{align:"center"},header:e=>a.jsx("span",{className:"text-secondary",children:"日期"})},{id:"日期时间转字符串",accessorFn:e=>o.format(e.birthdate).replace(/\//g,"-"),meta:{align:"center"},header:e=>a.jsx("span",{className:"text-secondary",children:"日期时间"})},{id:"Date对象",accessorKey:"birthdate",header:e=>a.jsx("span",{className:"text-secondary",children:"Date对象"}),cell:e=>a.jsx("div",{className:"text-center",children:f(e.getValue(),"time")}),aggregatedCell:""}]},{header:"个人信息",columns:[{id:"姓名",accessorFn:e=>`${e.firstName}${e.lastName}`,header:"姓名",meta:{showFilterList:!0}},{id:"年龄",accessorKey:"age",header:()=>"年龄",aggregationFn:"mean",aggregatedCell:({getValue:e})=>a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{children:"平均:"}),a.jsx("span",{children:Math.round(e()*100)/100})]})}]}],p={enableVirtualized:!0,enablePagination:!1,enableColumnReorder:!0,enableColumnResizing:!0,enableSorting:!0,enableTree:!1,enableGrouping:!1,enableFilters:!0,filterFromLeafRows:!1,enableHiding:!0,enableRowSelection:!1,enableMultiRowSelection:!1,enableSubRowSelection:!1,enableClickRowSelection:!1,selectAllForAllPages:!1,enableCompactStyle:!0,enableStickyHeader:!0,enableAutoRowNumber:!1,enableExport:!1};function F(){const[e,t]=l.useState([]);return l.useEffect(()=>{t(d(1e4))},[]),a.jsxs("div",{className:"flex-1 overflow-hidden flex flex-col",children:[a.jsx("div",{children:"这个例子加载了1万行数据"}),a.jsx(m,{data:e,columns:b,getRowId:r=>r.id,...p})]})}F.displayName="Basic";export{F as Component};
