import{c as f,R as r,j as a}from"./index-762cf129.js";import{m as p,I as j,f as m,a as h,n as N}from"./formatNumber-a5a481b5.js";var C=f("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]]);const w=e=>a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{children:"总计:"}),a.jsx("span",{children:m(e.table.getRowModel().rows.reduce((i,s)=>i+s.getValue(e.column.id),0),"decimal")})]}),x=e=>a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{children:"小计:"}),m(e.getValue(),"decimal")]});function y(e){const{table:i,getValue:s}=e,n=s(),[u,o]=r.useState(n),d=t=>{var c,g;const l=t.target.value;(g=(c=i.options.meta)==null?void 0:c.changeRow)==null||g.call(c,{...e,value:l,validate:b=>Number(b.value)>1e3?"值不能大于1000":""})};return r.useEffect(()=>{o(n)},[n]),a.jsx("input",{className:"input input-ghost input-xs w-full",value:u,onChange:t=>o(t.target.value),onBlur:d,onClick:t=>t.stopPropagation()})}function v(e){const{table:i,getValue:s}=e,n=s(),[u,o]=r.useState(n),d=t=>{var c,g;const l=t.target.value;o(l),(g=(c=i.options.meta)==null?void 0:c.changeRow)==null||g.call(c,{...e,value:l==="男"?"m":"f"})};return r.useEffect(()=>{o(n)},[n]),a.jsxs("select",{className:"select select-ghost select-xs w-full",value:u,onChange:d,onClick:t=>t.stopPropagation(),children:[a.jsx("option",{value:"男",children:"男"}),a.jsx("option",{value:"女",children:"女"})]})}const R=[{id:"ID",header:"ID",accessorKey:"id"},{header:"数据类型",columns:[{id:"枚举",size:100,minSize:100,accessorFn:e=>e.enum==="m"?"男":"女",accessorKey:"enum",meta:{align:"center",showFilterList:!0},filterFn:"equalsString",header:e=>a.jsx("span",{className:"text-secondary",children:"枚举"}),aggregatedCell:""},{id:"布尔",size:100,minSize:100,accessorFn:e=>e.boolean?"是":"否",accessorKey:"boolean",meta:{align:"center",showFilterList:!0},filterFn:"equalsString",cell:v,header:e=>a.jsx("span",{className:"text-secondary",children:"布尔"}),aggregatedCell:""},{id:"整数",meta:{align:"right"},accessorFn:e=>e.integer,header:e=>a.jsx("span",{className:"text-secondary",children:"整数"}),cell:e=>m(e.getValue(),"integer"),aggregatedCell:x,footer:w},{id:"数字百分比",accessorKey:"percent",meta:{align:"right"},header:e=>a.jsx("span",{className:"text-secondary",children:"数字百分比"}),cell:e=>m(e.getValue(),"percent"),aggregatedCell:""},{id:"数字",accessorKey:"number",meta:{align:"right"},header:e=>a.jsx("span",{className:"text-secondary",children:"数字"}),cell:e=>m(e.getValue(),"decimal"),aggregatedCell:x},{id:"字符串数字",accessorKey:"stringNumber",meta:{align:"right"},header:e=>a.jsx("span",{className:"text-secondary",children:"字符串数字"})},{id:"日期转字符串",accessorFn:e=>h(e.birthdate,"date"),meta:{align:"center"},header:e=>a.jsx("span",{className:"text-secondary",children:"日期"})},{id:"日期时间转字符串",accessorFn:e=>h(e.birthdate,"datetime"),meta:{align:"center"},header:e=>a.jsx("span",{className:"text-secondary",children:"日期时间"})},{id:"Date对象",accessorKey:"birthdate",header:e=>a.jsx("span",{className:"text-secondary",children:"Date对象"}),cell:e=>a.jsx("div",{className:"text-center",children:h(e.getValue(),"time")}),aggregatedCell:""}]},{header:"个人信息",columns:[{id:"姓名",accessorFn:e=>`${e.firstName}${e.lastName}`,header:"姓名"},{id:"年龄",accessorKey:"age",header:()=>"年龄",cell:y,aggregationFn:"mean",aggregatedCell:({getValue:e})=>a.jsxs("div",{className:"flex justify-between",children:[a.jsx("span",{children:"平均:"}),a.jsx("span",{children:Math.round(e()*100)/100})]})}]}],S={enableVirtualized:!1,enablePagination:!1,enableColumnReorder:!0,enableColumnResizing:!0,enableSorting:!0,enableTree:!1,enableGrouping:!1,enableFilters:!0,filterFromLeafRows:!1,enableHiding:!0,enableRowSelection:!0,enableMultiRowSelection:!0,enableSubRowSelection:!1,enableClickRowSelection:!1,selectAllForAllPages:!1,enableCompactStyle:!0,enableStickyHeader:!0,enableAutoRowNumber:!1,enableExport:!0};function F(){const[e,i]=r.useState([]);r.useEffect(()=>{i(p(10))},[]);const s=r.useRef(null),n=()=>{s.current.addRow(N())},u=()=>{s.current.deleteRow()},o=()=>{try{const l=s.current.getChanges();console.log(l)}catch(l){t(l.message)}},[d,t]=r.useState("");return a.jsxs("div",{className:"flex-1 overflow-hidden flex flex-col",children:[a.jsx("div",{className:"text-xs",children:"布尔列和年龄列允许编辑"}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx("button",{className:"btn btn-primary btn-sm",onClick:n,children:"新增"}),a.jsx("button",{className:"btn btn-warning btn-sm",onClick:u,children:"删除"}),a.jsx("button",{className:"btn btn-info btn-sm",onClick:o,children:"保存"}),"(打开浏览器的开发工具(F12)的console中查看将要保存的数据)"]}),a.jsx(j,{ref:s,data:e,columns:R,getRowId:l=>l.id,...S}),a.jsx("div",{className:`toast toast-top toast-end ${d?"":"hidden"}`,children:a.jsx("div",{className:"alert alert-error",children:a.jsxs("div",{children:[a.jsx("button",{className:"btn btn-circle btn-xs",children:a.jsx(C,{size:16,onClick:()=>t("")})}),a.jsx("span",{children:d})]})})})]})}F.displayName="Editable";export{F as Component};
