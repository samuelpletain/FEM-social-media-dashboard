import{a as q,t as g,j as S,k as b,l as k,e as C,h as $,q as c}from"./entry.615ee4d1.mjs";const _=q({props:{path:{type:String,required:!1,default:void 0},only:{type:Array,required:!1,default:void 0},without:{type:Array,required:!1,default:void 0},where:{type:Object,required:!1,default:void 0},sort:{type:Object,required:!1,default:void 0},limit:{type:Number,required:!1,default:void 0},skip:{type:Number,required:!1,default:void 0},locale:{type:String,required:!1,default:void 0},find:{type:String,required:!1,default:void 0}},async setup(a){const{path:t,only:r,without:n,where:i,sort:l,limit:o,skip:s,locale:d,find:f}=g(a),p=S(()=>t.value.includes("/_")),{data:y,refresh:h}=await b(`content-query-${k(a)}`,()=>{let e;return t.value?e=c(t.value):e=c(),r.value&&(e=e.only(r.value)),n.value&&(e=e.without(n.value)),i.value&&(e=e.where(i.value)),l.value&&(e=e.sort(l.value)),o.value&&(e=e.limit(o.value)),s.value&&(e=e.skip(s.value)),d.value&&(e=e.where({_locale:d.value})),f.value==="one"?e.findOne():f.value==="surround"?t.value?e.findSurround(t):(console.warn("[Content] Surround queries requires `path` prop to be set."),console.warn("[Content] Query without `path` will return regular `find()` results."),e.find()):e.find()},"$4SxX7Zuw4E");return{isPartial:p,data:y,refresh:h}},render(a){var v;const t=C(),{data:r,refresh:n,isPartial:i,path:l,only:o,without:s,where:d,sort:f,limit:p,skip:y,locale:h,find:e}=a,u={path:l,only:o,without:s,where:d,sort:f,limit:p,skip:y,locale:h,find:e};if(u.find==="one"){if(!r&&(t==null?void 0:t["not-found"]))return t["not-found"]({props:u,...this.$attrs});if(r._type&&r._type==="markdown"&&!((v=r==null?void 0:r.body)!=null&&v.children.length))return t.empty({props:u,...this.$attrs})}else if((!r||!r.length)&&t!=null&&t["not-found"])return t["not-found"]({props:u,...this.$attrs});return t!=null&&t.default?t.default({data:r,refresh:n,isPartial:i,props:u,...this.$attrs}):((w,m)=>$("pre",null,JSON.stringify({message:"You should use slots with <ContentQuery>!",slot:w,data:m},null,2)))("default",{data:r,props:u,isPartial:i})}});export{_ as default};
