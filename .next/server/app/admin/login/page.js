(()=>{var e={};e.id=116,e.ids=[116],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},19121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},33873:e=>{"use strict";e.exports=require("path")},79551:e=>{"use strict";e.exports=require("url")},83466:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>c,pages:()=>u,routeModule:()=>m,tree:()=>l});var s=r(88832),n=r(33471),a=r(83127),i=r.n(a),o=r(50280),d={};for(let e in o)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let l=["",{children:["admin",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,13339)),"C:\\Users\\a1897\\Desktop\\react\\cloudician\\src\\app\\admin\\login\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,66714))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,13370)),"C:\\Users\\a1897\\Desktop\\react\\cloudician\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,59669,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,2456,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,13305,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,66714))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\a1897\\Desktop\\react\\cloudician\\src\\app\\admin\\login\\page.tsx"],c={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/admin/login/page",pathname:"/admin/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},80273:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,95679,23)),Promise.resolve().then(r.t.bind(r,95027,23)),Promise.resolve().then(r.t.bind(r,83127,23)),Promise.resolve().then(r.t.bind(r,89526,23)),Promise.resolve().then(r.t.bind(r,24994,23)),Promise.resolve().then(r.t.bind(r,42422,23)),Promise.resolve().then(r.t.bind(r,525,23))},79601:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,39323,23)),Promise.resolve().then(r.t.bind(r,66023,23)),Promise.resolve().then(r.t.bind(r,48667,23)),Promise.resolve().then(r.t.bind(r,42589,23)),Promise.resolve().then(r.t.bind(r,21550,23)),Promise.resolve().then(r.t.bind(r,55386,23)),Promise.resolve().then(r.t.bind(r,13113,23))},97118:()=>{},37286:()=>{},23942:(e,t,r)=>{Promise.resolve().then(r.bind(r,9783))},42094:(e,t,r)=>{Promise.resolve().then(r.bind(r,97323))},48209:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var s=r(9861);let n=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,s.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:n,className:o="",children:d,iconNode:l,...u},c)=>(0,s.createElement)("svg",{ref:c,...i,width:t,height:t,stroke:e,strokeWidth:n?24*Number(r)/Number(t):r,className:a("lucide",o),...u},[...l.map(([e,t])=>(0,s.createElement)(e,t)),...Array.isArray(d)?d:[d]])),d=(e,t)=>{let r=(0,s.forwardRef)(({className:r,...i},d)=>(0,s.createElement)(o,{ref:d,iconNode:t,className:a(`lucide-${n(e)}`,r),...i}));return r.displayName=`${e}`,r}},36036:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});let s=(0,r(48209).A)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},57714:(e,t,r)=>{"use strict";var s=r(7370);r.o(s,"useRouter")&&r.d(t,{useRouter:function(){return s.useRouter}})},97323:(e,t,r)=>{"use strict";r.d(t,{LoginForm:()=>c});var s=r(18652),n=r(9861),a=r(57714),i=r(5640),o=r(92154),d=r(84804),l=r(25232),u=r(36036);function c(){let[e,t]=(0,n.useState)(""),[r,c]=(0,n.useState)(""),[m,p]=(0,n.useState)(""),[f,v]=(0,n.useState)(!1),h=(0,a.useRouter)(),g=async t=>{t.preventDefault(),p(""),v(!0);try{let t=await fetch("/api/auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e,password:r})}),s=await t.json();t.ok&&s.token?(localStorage.setItem("adminUsername",e),localStorage.setItem("adminToken",s.token),document.cookie=`adminToken=${s.token}; path=/`,h.push("/admin/dashboard")):p(s.error||"用户名或密码错误")}catch(e){console.error(e),p("登录过程中发生错误，请稍后重试")}finally{v(!1)}};return(0,s.jsxs)("form",{onSubmit:g,className:"space-y-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)(d.J,{htmlFor:"username",children:"用户名"}),(0,s.jsx)(o.p,{id:"username",type:"text",value:e,onChange:e=>t(e.target.value),required:!0,className:"mt-1",disabled:f,autoComplete:"username"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)(d.J,{htmlFor:"password",children:"密码"}),(0,s.jsx)(o.p,{id:"password",type:"password",value:r,onChange:e=>c(e.target.value),required:!0,className:"mt-1",disabled:f,autoComplete:"current-password"})]}),m&&(0,s.jsx)(l.Fc,{variant:"destructive",children:(0,s.jsx)(l.TN,{children:m})}),(0,s.jsx)(i.$,{type:"submit",className:"w-full",disabled:f,children:f?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.A,{className:"mr-2 h-4 w-4 animate-spin"}),"登录中..."]}):"登录"})]})}},25232:(e,t,r)=>{"use strict";r.d(t,{Fc:()=>d,TN:()=>l});var s=r(18652),n=r(9861),a=r(13801),i=r(16515);let o=(0,a.F)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),d=n.forwardRef(({className:e,variant:t,...r},n)=>(0,s.jsx)("div",{ref:n,role:"alert",className:(0,i.cn)(o({variant:t}),e),...r}));d.displayName="Alert",n.forwardRef(({className:e,...t},r)=>(0,s.jsx)("h5",{ref:r,className:(0,i.cn)("mb-1 font-medium leading-none tracking-tight",e),...t})).displayName="AlertTitle";let l=n.forwardRef(({className:e,...t},r)=>(0,s.jsx)("div",{ref:r,className:(0,i.cn)("text-sm [&_p]:leading-relaxed",e),...t}));l.displayName="AlertDescription"},5640:(e,t,r)=>{"use strict";r.d(t,{$:()=>l});var s=r(18652),n=r(9861),a=r(94021),i=r(13801),o=r(16515);let d=(0,i.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),l=n.forwardRef(({className:e,variant:t,size:r,asChild:n=!1,...i},l)=>{let u=n?a.DX:"button";return(0,s.jsx)(u,{className:(0,o.cn)(d({variant:t,size:r,className:e})),ref:l,...i})});l.displayName="Button"},92154:(e,t,r)=>{"use strict";r.d(t,{p:()=>i});var s=r(18652),n=r(9861),a=r(16515);let i=n.forwardRef(({className:e,type:t,...r},n)=>(0,s.jsx)("input",{type:t,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",e),ref:n,...r}));i.displayName="Input"},84804:(e,t,r)=>{"use strict";r.d(t,{J:()=>u});var s=r(18652),n=r(9861),a=r(82705),i=n.forwardRef((e,t)=>(0,s.jsx)(a.sG.label,{...e,ref:t,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));i.displayName="Label";var o=r(13801),d=r(16515);let l=(0,o.F)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),u=n.forwardRef(({className:e,...t},r)=>(0,s.jsx)(i,{ref:r,className:(0,d.cn)(l(),e),...t}));u.displayName=i.displayName},16515:(e,t,r)=>{"use strict";r.d(t,{cn:()=>a});var s=r(63531),n=r(36280);function a(...e){return(0,n.QP)((0,s.$)(e))}},13339:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(48408),n=r(9783);function a(){return(0,s.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:(0,s.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[(0,s.jsx)("div",{children:(0,s.jsx)("h2",{className:"mt-6 text-center text-3xl font-extrabold text-gray-900",children:"登录到管理后台"})}),(0,s.jsx)(n.LoginForm,{})]})})}},13370:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a,metadata:()=>n});var s=r(48408);r(32353);let n={title:"Cloudician",description:"A professional web3 infrastructure provider with extensive experience in staking and validator services, PRC & node API services, security, key custody, data indexing, tool development as well as offering high-performance databases, media streaming and high-speed private data storage networks solutions."};function a({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:"font-msyahei antialiased",children:e})})}},9783:(e,t,r)=>{"use strict";r.d(t,{LoginForm:()=>s});let s=(0,r(44444).registerClientReference)(function(){throw Error("Attempted to call LoginForm() from the server but LoginForm is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\a1897\\Desktop\\react\\cloudician\\src\\components\\login-form.tsx","LoginForm")},66714:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(58857);let n=async e=>[{type:"image/x-icon",sizes:"24x24",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},32353:()=>{},82705:(e,t,r)=>{"use strict";r.d(t,{hO:()=>d,sG:()=>o});var s=r(9861),n=r(87880),a=r(94021),i=r(18652),o=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=s.forwardRef((e,r)=>{let{asChild:s,...n}=e,o=s?a.DX:t;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,i.jsx)(o,{...n,ref:r})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function d(e,t){e&&n.flushSync(()=>e.dispatchEvent(t))}}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[660,687,857,503],()=>r(83466));module.exports=s})();