import{c as y,R as d,j as t}from"./index-4045ce2f.js";import{m as C,I as F,n as D}from"./makeData-615d9bb5.js";var R=y("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);const v=new Intl.NumberFormat("zh-Hans-CN"),x=new Intl.NumberFormat("zh-Hans-CN",{minimumFractionDigits:2}),S=new Intl.NumberFormat("zh-Hans-CN",{style:"percent",minimumFractionDigits:2,maximumFractionDigits:2}),f=(e,s)=>{switch(s){case"integer":return v.format(e);case"percent":return S.format(e);case"decimal":default:return x.format(e)}},j=new Intl.DateTimeFormat("zh-Hans-CN",{hour12:!1,year:"numeric",month:"2-digit",day:"2-digit"}),I=new Intl.DateTimeFormat("zh-Hans-CN",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"}),w=new Intl.DateTimeFormat("zh-Hans-CN",{hour12:!1,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}),k=(e,s)=>{switch(s){case"date":return j.format(e).replace(/\//g,"-");case"datetime":return w.format(e).replace(/\//g,"-");case"time":return I.format(e)}},K=e=>t.jsxs("div",{className:"flex justify-between",children:[t.jsx("span",{children:"总计:"}),t.jsx("span",{children:x.format(e.table.getRowModel().rows.reduce((s,n)=>s+n.getValue(e.column.id),0))})]}),N=e=>t.jsxs("div",{className:"flex justify-between",children:[t.jsx("span",{children:"小计:"}),x.format(e.getValue())]});function z(e){const{table:s,row:n,column:l,getValue:m}=e,c=m(),[r,o]=d.useState(c),i=()=>{var a,u,g,p,h,b;if(n.original[l.columnDef.accessorKey]!==r){if(Number(r)>1e3){(u=(a=s.options.meta)==null?void 0:a.setErrorRow)==null||u.call(a,{rowId:n.id,field:l.columnDef.accessorKey,errorMsg:"值不能大于1000"});return}else(p=(g=s.options.meta)==null?void 0:g.setErrorRow)==null||p.call(g,{rowId:n.id,field:l.columnDef.accessorKey,errorMsg:""});(b=(h=s.options.meta)==null?void 0:h.updateData)==null||b.call(h,{table:s,rowId:n.id,field:l.columnDef.accessorKey,value:r})}};return d.useEffect(()=>{o(c)},[c]),t.jsx("input",{className:"input input-ghost input-xs w-full",value:r,onChange:a=>o(a.target.value),onBlur:i,onClick:a=>a.stopPropagation()})}function V(e){const{table:s,row:n,column:l,getValue:m}=e,c=m(),[r,o]=d.useState(c),i=()=>{var a,u;n.original[l.columnDef.accessorKey]!==r&&((u=(a=s.options.meta)==null?void 0:a.updateData)==null||u.call(a,{table:s,rowId:n.id,field:l.columnDef.accessorKey,value:r==="男"?"m":"f"}))};return d.useEffect(()=>{o(c)},[c]),t.jsxs("select",{className:"select select-ghost select-xs w-full",value:r,onChange:a=>o(a.target.value),onBlur:i,onClick:a=>a.stopPropagation(),children:[t.jsx("option",{value:"男",children:"男"}),t.jsx("option",{value:"女",children:"女"})]})}const E=[{id:"ID",header:"ID",accessorKey:"id"},{header:"数据类型",columns:[{id:"枚举",size:100,minSize:100,accessorFn:e=>e.enum==="m"?"男":"女",accessorKey:"enum",meta:{align:"center",showFilterList:!0},filterFn:"equalsString",header:e=>t.jsx("span",{className:"text-secondary",children:"枚举"}),aggregatedCell:""},{id:"布尔",size:100,minSize:100,accessorFn:e=>e.boolean?"是":"否",accessorKey:"boolean",meta:{align:"center",showFilterList:!0},filterFn:"equalsString",cell:V,header:e=>t.jsx("span",{className:"text-secondary",children:"布尔"}),aggregatedCell:""},{id:"整数",meta:{align:"right"},accessorFn:e=>e.integer,header:e=>t.jsx("span",{className:"text-secondary",children:"整数"}),cell:e=>f(e.getValue(),"integer"),aggregatedCell:N,footer:K},{id:"数字百分比",accessorKey:"percent",meta:{align:"right"},header:e=>t.jsx("span",{className:"text-secondary",children:"数字百分比"}),cell:e=>f(e.getValue(),"percent"),aggregatedCell:""},{id:"数字",accessorKey:"number",meta:{align:"right"},header:e=>t.jsx("span",{className:"text-secondary",children:"数字"}),cell:e=>f(e.getValue(),"decimal"),aggregatedCell:N},{id:"字符串数字",accessorKey:"stringNumber",meta:{align:"right"},header:e=>t.jsx("span",{className:"text-secondary",children:"字符串数字"})},{id:"日期转字符串",accessorFn:e=>j.format(e.birthdate).replace(/\//g,"-"),meta:{align:"center"},header:e=>t.jsx("span",{className:"text-secondary",children:"日期"})},{id:"日期时间转字符串",accessorFn:e=>w.format(e.birthdate).replace(/\//g,"-"),meta:{align:"center"},header:e=>t.jsx("span",{className:"text-secondary",children:"日期时间"})},{id:"Date对象",accessorKey:"birthdate",header:e=>t.jsx("span",{className:"text-secondary",children:"Date对象"}),cell:e=>t.jsx("div",{className:"text-center",children:k(e.getValue(),"time")}),aggregatedCell:""}]},{header:"个人信息",columns:[{id:"姓名",accessorFn:e=>`${e.firstName}${e.lastName}`,header:"姓名"},{id:"年龄",accessorKey:"age",header:()=>"年龄",cell:z,aggregationFn:"mean",aggregatedCell:({getValue:e})=>t.jsxs("div",{className:"flex justify-between",children:[t.jsx("span",{children:"平均:"}),t.jsx("span",{children:Math.round(e()*100)/100})]})}]}],H={enableVirtualized:!1,enablePagination:!1,enableColumnReorder:!0,enableColumnResizing:!0,enableSorting:!0,enableTree:!1,enableGrouping:!1,enableFilters:!0,filterFromLeafRows:!1,enableHiding:!0,enableRowSelection:!0,enableMultiRowSelection:!0,enableSubRowSelection:!1,enableClickRowSelection:!1,selectAllForAllPages:!1,enableCompactStyle:!0,enableStickyHeader:!0,enableAutoRowNumber:!1,enableExport:!0};function M(){const[e,s]=d.useState([]);d.useEffect(()=>{s(C(10))},[]);const n=d.useRef(null),l=()=>{n.current.addRow(D())},m=()=>{n.current.deleteRow()},c=()=>{try{const i=n.current.getChanges();console.log(i)}catch(i){o(i.message)}},[r,o]=d.useState("");return t.jsxs("div",{className:"flex-1 overflow-hidden flex flex-col",children:[t.jsx("div",{className:"text-xs",children:"布尔列和年龄列允许编辑"}),t.jsxs("div",{className:"flex gap-2",children:[t.jsx("button",{className:"btn btn-primary btn-sm",onClick:l,children:"新增"}),t.jsx("button",{className:"btn btn-warning btn-sm",onClick:m,children:"删除"}),t.jsx("button",{className:"btn btn-info btn-sm",onClick:c,children:"保存"}),"(打开浏览器的开发工具(F12)的console中查看将要保存的数据)"]}),t.jsx(F,{ref:n,data:e,columns:E,getRowId:i=>i.id,...H}),t.jsx("div",{className:`toast toast-top toast-end ${r?"":"hidden"}`,children:t.jsx("div",{className:"alert alert-error",children:t.jsxs("div",{children:[t.jsx("button",{className:"btn btn-circle btn-xs",children:t.jsx(R,{size:16,onClick:()=>o("")})}),t.jsx("span",{children:r})]})})})]})}M.displayName="Editable";export{M as Component};
