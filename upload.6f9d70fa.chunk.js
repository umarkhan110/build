"use strict";(self.webpackChunkjm_portfolio_backend=self.webpackChunkjm_portfolio_backend||[]).push([[3650],{17316:($,L,t)=>{t.r(L),t.d(L,{default:()=>xt});var e=t(67294),E=t(49656),o=t(97132),C=t(15482),n=t(68547),B=t(185),F=t(71893),R=t(80129),D=t(17034),V=t(36989),N=t(49066),G=t(41580),H=t(70004),c=t(41451),A=t(63237),h=t(12028),v=t(75515),x=t(74571),Z=t(11047),J=t(4585),Y=t(78114),ae=t(29729),k=t(50738),ze=t(33012),We=t(78971),Ke=t(11900),je=t(92585),Qe=t(24652),$e=t(11357),Ve=t(27954),He=t(45697),p=t.n(He);const oe=({pagination:s})=>e.createElement(G.x,{paddingTop:6},e.createElement(Z.k,{alignItems:"flex-end",justifyContent:"space-between"},e.createElement(n.PageSizeURLQuery,null),e.createElement(n.PaginationURLQuery,{pagination:s})));oe.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},oe.propTypes={pagination:p().shape({page:p().number,pageCount:p().number,pageSize:p().number,total:p().number})};var se=t(7681),y=t(49826),Ne=t(15537),j=t(29728),Ge=t(20022),Je=t(2967);const ve=({selected:s,onSuccess:r})=>{const{formatMessage:i}=(0,o.useIntl)(),[d,u]=(0,e.useState)(!1),{isLoading:g,remove:O}=(0,Je.K)(),M=async()=>{await O(s),r()};return e.createElement(e.Fragment,null,e.createElement(j.z,{variant:"danger-light",size:"S",startIcon:e.createElement(Ge.default,null),onClick:()=>u(!0)},i({id:"global.delete",defaultMessage:"Delete"})),e.createElement(n.ConfirmDialog,{isConfirmButtonLoading:g,isOpen:d,onToggleDialog:()=>u(!1),onConfirm:M}))};ve.propTypes={selected:p().arrayOf(y.pw,y.nx).isRequired,onSuccess:p().func.isRequired};var Xe=t(32605),Ye=t(80831),ke=t(41609),we=t.n(ke),qe=t(11276),_e=t(88655),pe=t(42866),he=t(59946),et=t(24969),tt=t(36856),nt=t(64777),ye=t(23724),X=t(55994),m=t(57197);const at=()=>{const s=(0,n.useNotification)(),r=(0,ye.useQueryClient)(),i=(0,m.IF)("actions/bulk-move"),{post:d}=(0,n.useFetchClient)(),u=({destinationFolderId:M,filesAndFolders:f})=>{const T=f.reduce((P,l)=>{const{id:z,type:I}=l,Q=I==="asset"?"fileIds":"folderIds";return P[Q]||(P[Q]=[]),P[Q].push(z),P},{});return d(i,{...T,destinationFolderId:M})},g=(0,ye.useMutation)(u,{onSuccess(M){const{data:{data:f}}=M;f?.files?.length>0&&(r.refetchQueries([X.Z,"assets"],{active:!0}),r.refetchQueries([X.Z,"asset-count"],{active:!0})),r.refetchQueries([X.Z,"folders"],{active:!0}),s({type:"success",message:{id:(0,m.OB)("modal.move.success-label"),defaultMessage:"Elements have been moved successfully."}})}});return{...g,move:(M,f)=>g.mutateAsync({destinationFolderId:M,filesAndFolders:f})}};var ot=t(66951),st=t(20796);const le=({onClose:s,selected:r,currentFolder:i})=>{const{formatMessage:d}=(0,o.useIntl)(),{data:u,isLoading:g}=(0,st.v)(),{move:O}=at();if(!u)return null;const M=async(P,{setErrors:l})=>{try{await O(P.destination.value,r),s()}catch(z){const I=(0,n.getAPIInnerErrors)(z,{getTrad:m.OB}),Q=Object.entries(I).reduce((q,[W,S])=>(q[W||"destination"]=S.defaultMessage,q),{});we()(Q)||l(Q)}},f=()=>{s()};if(g)return e.createElement(pe.P,{onClose:f,labelledBy:"title"},e.createElement(he.f,null,e.createElement(Z.k,{justifyContent:"center",paddingTop:4,paddingBottom:4},e.createElement(_e.a,null,d({id:(0,m.OB)("content.isLoading"),defaultMessage:"Content is loading."})))));const T={destination:{value:i?.id||"",label:i?.name||u[0].label}};return e.createElement(pe.P,{onClose:f,labelledBy:"title"},e.createElement(Ye.Formik,{validateOnChange:!1,onSubmit:M,initialValues:T},({values:P,errors:l,setFieldValue:z})=>e.createElement(n.Form,{noValidate:!0},e.createElement(et.x,null,e.createElement(v.Z,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title"},d({id:(0,m.OB)("modal.folder.move.title"),defaultMessage:"Move elements to"}))),e.createElement(he.f,null,e.createElement(qe.r,{gap:4},e.createElement(x.P,{xs:12,col:12},e.createElement(se.K,{spacing:1},e.createElement(nt.Q,{htmlFor:"folder-destination"},d({id:(0,m.OB)("form.input.label.folder-location"),defaultMessage:"Location"})),e.createElement(ot.Z,{options:u,onChange:I=>{z("destination",I)},defaultValue:P.destination,name:"destination",menuPortalTarget:document.querySelector("body"),inputId:"folder-destination",error:l?.destination,ariaErrorMessage:"destination-error"}),l.destination&&e.createElement(v.Z,{variant:"pi",as:"p",id:"folder-destination-error",textColor:"danger600"},l.destination))))),e.createElement(tt.m,{startActions:e.createElement(j.z,{onClick:f,variant:"tertiary",name:"cancel"},d({id:"cancel",defaultMessage:"Cancel"})),endActions:e.createElement(j.z,{type:"submit",loading:g},d({id:"modal.folder.move.submit",defaultMessage:"Move"}))}))))};le.defaultProps={currentFolder:void 0},le.propTypes={onClose:p().func.isRequired,currentFolder:y.nx,selected:p().arrayOf(y.nx,y.pw).isRequired};const re=({selected:s,onSuccess:r,currentFolder:i})=>{const{formatMessage:d}=(0,o.useIntl)(),[u,g]=(0,e.useState)(!1),O=()=>{g(!1),r()};return e.createElement(e.Fragment,null,e.createElement(j.z,{variant:"secondary",size:"S",startIcon:e.createElement(Xe.Z,null),onClick:()=>g(!0)},d({id:"global.move",defaultMessage:"Move"})),u&&e.createElement(le,{currentFolder:i,onClose:O,selected:s}))};re.defaultProps={currentFolder:void 0},re.propTypes={onSuccess:p().func.isRequired,currentFolder:y.nx,selected:p().arrayOf(y.pw,y.nx).isRequired};const ie=({selected:s,onSuccess:r,currentFolder:i})=>{const{formatMessage:d}=(0,o.useIntl)();return e.createElement(se.K,{horizontal:!0,spacing:2,paddingBottom:5},e.createElement(v.Z,{variant:"epsilon",textColor:"neutral600"},d({id:(0,Ne.Z)("list.assets.selected"),defaultMessage:"{numberFolders, plural, one {1 folder} other {# folders}} - {numberAssets, plural, one {1 asset} other {# assets}} selected"},{numberFolders:s.filter(({type:u})=>u==="folder").length,numberAssets:s.filter(({type:u})=>u==="asset").length})),e.createElement(ve,{selected:s,onSuccess:r}),e.createElement(re,{currentFolder:i,selected:s,onSuccess:r}))};ie.defaultProps={currentFolder:void 0},ie.propTypes={onSuccess:p().func.isRequired,currentFolder:y.nx,selected:p().arrayOf(y.pw,y.nx).isRequired};var lt=t(65169),de=t(96315),rt=t(70088);const it=({isFiltering:s,canCreate:r,canRead:i})=>s?{id:"list.assets-empty.title-withSearch",defaultMessage:"There are no elements with the applied filters"}:i?r?{id:"list.assets.empty-upload",defaultMessage:"Upload your first assets..."}:{id:"list.assets.empty",defaultMessage:"Media Library is empty"}:{id:"header.actions.no-permissions",defaultMessage:"No permissions to view"},Me=({canCreate:s,isFiltering:r,canRead:i,onActionClick:d})=>{const{formatMessage:u}=(0,o.useIntl)(),g=it({isFiltering:r,canCreate:s,canRead:i});return e.createElement(rt.i,{icon:i?null:lt.default,action:s&&!r&&e.createElement(j.z,{variant:"secondary",startIcon:e.createElement(de.default,null),onClick:d},u({id:(0,m.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})),content:u({...g,id:(0,m.OB)(g.id)})})};Me.propTypes={canCreate:p().bool.isRequired,canRead:p().bool.isRequired,isFiltering:p().bool.isRequired,onActionClick:p().func.isRequired};var w=t(98101),dt=t(89597),ct=t(51386),ut=t(45219),Ce=t(97581);const mt=()=>{const s=(0,e.useRef)(null),[r,i]=(0,e.useState)(!1),{formatMessage:d}=(0,o.useIntl)(),{trackUsage:u}=(0,n.useTracking)(),[{query:g},O]=(0,n.useQueryParams)(),M=g?.filters?.$and||[],f=()=>i(l=>!l),T=l=>{O({filters:{$and:l},page:1})},P=l=>{u("didFilterMediaLibraryElements",{location:"content-manager",filter:Object.keys(l[l.length-1])[0]}),O({filters:{$and:l},page:1})};return e.createElement(e.Fragment,null,e.createElement(j.z,{variant:"tertiary",ref:s,startIcon:e.createElement(dt.Z,null),onClick:f,size:"S"},d({id:"app.utils.filters",defaultMessage:"Filters"})),r&&e.createElement(ut.Z,{displayedFilters:Ce.Z,filters:M,onSubmit:P,onToggle:f,source:s}),e.createElement(ct.Z,{appliedFilters:M,filtersSchema:Ce.Z,onRemoveFilter:T}))};var gt=t(67838),ft=t(23620),Et=t(67109),vt=t(67851);const ce=({breadcrumbs:s,canCreate:r,folder:i,onToggleEditFolderDialog:d,onToggleUploadAssetDialog:u})=>{const{formatMessage:g}=(0,o.useIntl)(),{pathname:O}=(0,E.useLocation)(),[{query:M}]=(0,n.useQueryParams)(),f={...M,folder:i?.parent?.id??void 0};return e.createElement(gt.T,{title:g({id:(0,m.OB)("plugin.name"),defaultMessage:"Media Library"}),subtitle:s&&i&&e.createElement(vt.O,{as:"nav",label:g({id:(0,m.OB)("header.breadcrumbs.nav.label"),defaultMessage:"Folders navigation"}),breadcrumbs:s,currentFolderId:i?.id}),navigationAction:i&&e.createElement(ft.r,{startIcon:e.createElement(Et.Z,null),to:`${O}?${(0,R.stringify)(f,{encode:!1})}`},g({id:(0,m.OB)("header.actions.folder-level-up"),defaultMessage:"Back"})),primaryAction:r&&e.createElement(se.K,{horizontal:!0,spacing:2},e.createElement(j.z,{startIcon:e.createElement(de.default,null),variant:"secondary",onClick:d},g({id:(0,m.OB)("header.actions.add-folder"),defaultMessage:"Add new folder"})),e.createElement(j.z,{startIcon:e.createElement(de.default,null),onClick:u},g({id:(0,m.OB)("header.actions.add-assets"),defaultMessage:"Add new assets"})))})};ce.defaultProps={breadcrumbs:!1,folder:null},ce.propTypes={breadcrumbs:p().oneOfType([y.Fv,p().bool]),canCreate:p().bool.isRequired,folder:y.nx,onToggleEditFolderDialog:p().func.isRequired,onToggleUploadAssetDialog:p().func.isRequired};var pt=t(73817),ht=t(44466),yt=t(31817),Mt=t(42047),Ct=t(16838);const Lt=(0,F.default)(G.x)`
  height: ${32/16}rem;
  display: flex;
  align-items: center;
`,Le=(0,F.default)(v.Z)`
  max-width: 100%;
`,Ae=(0,F.default)(G.x)`
  svg {
    path {
      fill: ${({theme:s})=>s.colors.neutral500};
    }
  }
`,At=()=>{const{push:s}=(0,E.useHistory)(),{canRead:r,canCreate:i,canUpdate:d,canCopyLink:u,canDownload:g,isLoading:O}=(0,yt.y)(),M=(0,e.useRef)(),{formatMessage:f}=(0,o.useIntl)(),{pathname:T}=(0,E.useLocation)(),{trackUsage:P}=(0,n.useTracking)(),[{query:l},z]=(0,n.useQueryParams)(),I=Boolean(l._q||l.filters),[Q,q]=(0,n.usePersistentState)(y.uf.view,y.Uk.GRID),W=Q===y.Uk.GRID,{data:S,isLoading:Ot,errors:Ft}=(0,pt.L)({skipWhen:!r,query:l}),{data:Dt,isLoading:Pt,errors:Tt}=(0,ht.j)({enabled:r&&S?.pagination?.page===1&&!(0,m.rV)(l),query:l}),{data:ue,isLoading:Be,error:St}=(0,Mt.W)(l?.folder,{enabled:r&&!!l?.folder});St?.response?.status===404&&s(T);const _=Dt?.map(a=>({...a,type:"folder",folderURL:(0,m.Km)(T,l,a.id),isSelectable:d}))??[],b=_?.length||0,ee=S?.results?.map(a=>({...a,type:"asset",isSelectable:d}))||[],U=ee?.length??0,It=S?.pagination?.total,Re=Be||Pt||O||Ot,[bt,Ut]=(0,e.useState)(!1),[Zt,xe]=(0,e.useState)(!1),[Oe,me]=(0,e.useState)(void 0),[ge,Fe]=(0,e.useState)(void 0),[K,{selectOne:te,selectAll:De}]=(0,n.useSelectionState)(["type","id"],[]),Pe=K?.length>0&&K?.length!==U+b,fe=()=>Ut(a=>!a),Te=({created:a=!1}={})=>{a&&l?.page!=="1"&&z({...l,page:1}),xe(ne=>!ne)},Se=(a,ne)=>{a.target.checked&&P("didSelectAllMediaLibraryElements"),De(ne)},Ie=a=>{P("didSortMediaLibraryElements",{location:"upload",sort:a}),z({sort:a})},be=a=>{Fe(a),xe(!0)},zt=a=>{Fe(null),Te(a),M.current&&M.current.focus()},Ue=a=>{a===U&&S.pagination.page===S.pagination.pageCount&&S.pagination.page>1&&z({...l,page:S.pagination.page-1})},Wt=()=>{De(),Ue(K.length)};return(0,n.useFocusWhenNavigate)(),e.createElement(D.A,null,e.createElement(B.o,{"aria-busy":Re},e.createElement(ce,{breadcrumbs:!Be&&(0,m.M4)(ue,{pathname:T,query:l}),canCreate:i,onToggleEditFolderDialog:Te,onToggleUploadAssetDialog:fe,folder:ue}),e.createElement(V.Z,{startActions:e.createElement(e.Fragment,null,d&&W&&(U>0||b>0)&&e.createElement(Lt,{paddingLeft:2,paddingRight:2,background:"neutral0",hasRadius:!0,borderColor:"neutral200"},e.createElement(c.C,{"aria-label":f({id:(0,m.OB)("bulk.select.label"),defaultMessage:"Select all folders & assets"}),indeterminate:Pe,value:(U>0||b>0)&&K.length===U+b,onChange:a=>Se(a,[...ee,..._])})),r&&W&&e.createElement(Ve.Z,{onChangeSort:Ie}),r&&e.createElement(mt,null)),endActions:e.createElement(e.Fragment,null,e.createElement(n.CheckPermissions,{permissions:Ct.Z.configureView},e.createElement(Ae,{paddingTop:1,paddingBottom:1},e.createElement(h.h,{forwardedAs:E.Link,to:{pathname:`${T}/configuration`,search:(0,R.stringify)(l,{encode:!1})},icon:e.createElement(Y.Z,null),label:f({id:"app.links.configure-view",defaultMessage:"Configure the view"})}))),e.createElement(Ae,{paddingTop:1,paddingBottom:1},e.createElement(h.h,{icon:W?e.createElement(k.Z,null):e.createElement(ae.Z,null),label:f(W?{id:"view-switch.list",defaultMessage:"List View"}:{id:"view-switch.grid",defaultMessage:"Grid View"}),onClick:()=>q(W?y.Uk.LIST:y.Uk.GRID)})),e.createElement(n.SearchURLQuery,{label:f({id:(0,m.OB)("search.label"),defaultMessage:"Search for an asset"}),trackedEvent:"didSearchMediaLibraryElements",trackedEventDetails:{location:"upload"}}))}),e.createElement(N.D,null,K.length>0&&e.createElement(ie,{currentFolder:ue,selected:K,onSuccess:Wt}),Re&&e.createElement(n.LoadingIndicatorPage,null),(Ft||Tt)&&e.createElement(n.AnErrorOccurred,null),b===0&&U===0&&e.createElement(Me,{canCreate:i,canRead:r,isFiltering:I,onActionClick:fe}),r&&!W&&(U>0||b>0)&&e.createElement($e.b,{assetCount:U,folderCount:b,indeterminate:Pe,onChangeSort:Ie,onChangeFolder:a=>s((0,m.Km)(T,l,a)),onEditAsset:me,onEditFolder:be,onSelectOne:te,onSelectAll:Se,rows:[..._,...ee],selected:K,shouldDisableBulkSelect:!d,sortQuery:l?.sort??""}),r&&W&&e.createElement(e.Fragment,null,b>0&&e.createElement(Qe.a,{title:(I&&U>0||!I)&&f({id:(0,m.OB)("list.folders.title"),defaultMessage:"Folders ({count})"},{count:b})||""},_.map(a=>{const Kt=!!K.filter(({type:Ee})=>Ee==="folder").find(Ee=>Ee.id===a.id),Ze=(0,m.Km)(T,l,a?.id);return e.createElement(x.P,{col:3,key:`folder-${a.id}`},e.createElement(w.Ac,{ref:ge&&a.id===ge.id?M:void 0,ariaLabel:a.name,id:`folder-${a.id}`,to:Ze,startAction:te&&a.isSelectable?e.createElement(w.MM,{"data-testid":`folder-checkbox-${a.id}`,value:Kt,onChange:()=>te(a)}):null,cardActions:e.createElement(h.h,{icon:e.createElement(J.Z,null),"aria-label":f({id:(0,m.OB)("list.folder.edit"),defaultMessage:"Edit folder"}),onClick:()=>be(a)})},e.createElement(w.Bu,null,e.createElement(w.u6,{to:Ze},e.createElement(Z.k,{as:"h2",direction:"column",alignItems:"start",maxWidth:"100%"},e.createElement(Le,{fontWeight:"semiBold",ellipsis:!0},a.name,e.createElement(A.T,null,":")),e.createElement(Le,{as:"span",textColor:"neutral600",variant:"pi",ellipsis:!0},f({id:(0,m.OB)("list.folder.subtitle"),defaultMessage:"{folderCount, plural, =0 {# folder} one {# folder} other {# folders}}, {filesCount, plural, =0 {# asset} one {# asset} other {# assets}}"},{folderCount:a.children.count,filesCount:a.files.count})))))))})),U>0&&b>0&&e.createElement(G.x,{paddingTop:6,paddingBottom:4},e.createElement(H.i,null)),U>0&&e.createElement(je.r,{assets:ee,onEditAsset:me,onSelectAsset:te,selectedAssets:K.filter(({type:a})=>a==="asset"),title:(!I||I&&b>0)&&S?.pagination?.page===1&&f({id:(0,m.OB)("list.assets.title"),defaultMessage:"Assets ({count})"},{count:It})||""})),S?.pagination&&e.createElement(oe,{pagination:S.pagination}))),bt&&e.createElement(ze.x,{onClose:fe,trackedLocation:"upload",folderId:l?.folder}),Zt&&e.createElement(We.f,{onClose:zt,folder:ge,parentFolderId:l?.folder,location:"upload"}),Oe&&e.createElement(Ke.s,{onClose:a=>{a===null&&Ue(1),me(void 0)},asset:Oe,canUpdate:d,canCopyLink:u,canDownload:g,trackedLocation:"upload"}))};var Bt=t(60862);const Rt=(0,e.lazy)(()=>t.e(9514).then(t.bind(t,87532))),xt=()=>{const{config:{isLoading:s,isError:r,data:i}}=(0,Bt.Z)(),[{rawQuery:d},u]=(0,n.useQueryParams)(),{formatMessage:g}=(0,o.useIntl)(),O=g({id:(0,m.OB)("plugin.name"),defaultMessage:"Media Library"});return(0,e.useEffect)(()=>{s||r||d||u({sort:i.sort,page:1,pageSize:i.pageSize})},[s,r,i,d,u]),(0,n.useFocusWhenNavigate)(),e.createElement(B.o,{"aria-busy":s},e.createElement(C.Helmet,{title:O}),s&&e.createElement(n.LoadingIndicatorPage,null),d?e.createElement(e.Suspense,{fallback:e.createElement(n.LoadingIndicatorPage,null)},e.createElement(E.Switch,null,e.createElement(E.Route,{exact:!0,path:`/plugins/${X.Z}`,component:At}),e.createElement(E.Route,{exact:!0,path:`/plugins/${X.Z}/configuration`,render:()=>e.createElement(Rt,{config:i})}))):null)}},36989:($,L,t)=>{t.d(L,{Z:()=>R});var e=t(67294),E=t(45697),o=t(71893),C=t(41580),n=t(11047);const B=(0,o.default)(n.k)`
  & > * + * {
    margin-left: ${({theme:D})=>D.spaces[2]};
  }

  margin-left: ${({pullRight:D})=>D?"auto":void 0};
`,F=(0,o.default)(B)`
  flex-shrink: 0;
`,R=({startActions:D,endActions:V})=>D||V?e.createElement(C.x,{paddingLeft:10,paddingRight:10},e.createElement(C.x,{paddingBottom:4},e.createElement(n.k,{justifyContent:"space-between",alignItems:"flex-start"},D&&e.createElement(B,{wrap:"wrap"},D),V&&e.createElement(F,{pullRight:!0},V)))):null;R.defaultProps={endActions:void 0,startActions:void 0},R.propTypes={endActions:E.node,startActions:E.node}},49066:($,L,t)=>{t.d(L,{D:()=>C});var e=t(67294),E=t(45697),o=t(41580);const C=({children:n})=>e.createElement(o.x,{paddingLeft:10,paddingRight:10},n);C.propTypes={children:E.node.isRequired}},67838:($,L,t)=>{t.d(L,{T:()=>N});var e=t(67294),E=t(71893),o=t(45697),C=t(75515),n=t(41580),B=t(11047);const F=c=>{const A=(0,e.useRef)(null),[h,v]=(0,e.useState)(!0),x=([Z])=>{v(Z.isIntersecting)};return(0,e.useEffect)(()=>{const Z=A.current,J=new IntersectionObserver(x,c);return Z&&J.observe(A.current),()=>{Z&&J.disconnect()}},[A,c]),[A,h]};var R=t(98402);const D=(c,A)=>{const h=(0,R.useCallbackRef)(A);(0,e.useLayoutEffect)(()=>{const v=new ResizeObserver(h);return Array.isArray(c)?c.forEach(x=>{x.current&&v.observe(x.current)}):c.current&&v.observe(c.current),()=>{v.disconnect()}},[c,h])},V=()=>{const c=(0,e.useRef)(null),[A,h]=(0,e.useState)(null),[v,x]=F({root:null,rootMargin:"0px",threshold:0});return D(v,()=>{v.current&&h(v.current.getBoundingClientRect())}),(0,e.useEffect)(()=>{c.current&&h(c.current.getBoundingClientRect())},[c]),{containerRef:v,isVisible:x,baseHeaderLayoutRef:c,headerSize:A}},N=c=>{const{containerRef:A,isVisible:h,baseHeaderLayoutRef:v,headerSize:x}=V();return e.createElement(e.Fragment,null,e.createElement("div",{style:{height:x?.height},ref:A},h&&e.createElement(H,{ref:v,...c})),!h&&e.createElement(H,{...c,sticky:!0,width:x?.width}))};N.displayName="HeaderLayout";const G=(0,E.default)(n.x)`
  width: ${c=>c.width}px;
`,H=e.forwardRef(({navigationAction:c,primaryAction:A,secondaryAction:h,subtitle:v,title:x,sticky:Z,width:J,...Y},ae)=>{const k=typeof v=="string";return Z?e.createElement(G,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:J,zIndex:4,"data-strapi-header-sticky":!0},e.createElement(B.k,{justifyContent:"space-between"},e.createElement(B.k,null,c&&e.createElement(n.x,{paddingRight:3},c),e.createElement(n.x,null,e.createElement(C.Z,{variant:"beta",as:"h1",...Y},x),k?e.createElement(C.Z,{variant:"pi",textColor:"neutral600"},v):v),h?e.createElement(n.x,{paddingLeft:4},h):null),e.createElement(B.k,null,A?e.createElement(n.x,{paddingLeft:2},A):void 0))):e.createElement(n.x,{ref:ae,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:c?6:8,background:"neutral100","data-strapi-header":!0},c?e.createElement(n.x,{paddingBottom:2},c):null,e.createElement(B.k,{justifyContent:"space-between"},e.createElement(B.k,null,e.createElement(C.Z,{as:"h1",variant:"alpha",...Y},x),h?e.createElement(n.x,{paddingLeft:4},h):null),A),k?e.createElement(C.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},v):v)});H.displayName="BaseHeaderLayout",H.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},H.propTypes={navigationAction:o.node,primaryAction:o.node,secondaryAction:o.node,sticky:o.bool,subtitle:o.oneOfType([o.string,o.node]),title:o.string.isRequired,width:o.number},N.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},N.propTypes={navigationAction:o.node,primaryAction:o.node,secondaryAction:o.node,subtitle:o.oneOfType([o.string,o.node]),title:o.string.isRequired}},17034:($,L,t)=>{t.d(L,{A:()=>F});var e=t(67294),E=t(45697),o=t(71893),C=t(41580);const n=(0,o.default)(C.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:R})=>R?"auto 1fr":"1fr"};
`,B=(0,o.default)(C.x)`
  overflow-x: hidden;
`,F=({sideNav:R,children:D})=>e.createElement(n,{hasSideNav:Boolean(R)},R,e.createElement(B,{paddingBottom:10},D));F.defaultProps={sideNav:void 0},F.propTypes={children:E.node.isRequired,sideNav:E.node}},185:($,L,t)=>{t.d(L,{o:()=>n});var e=t(67294),E=t(45697),o=t(71893);const C=o.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,n=({labelledBy:B,...F})=>{const R=B||"main-content-title";return e.createElement(C,{"aria-labelledby":R,id:"main-content",tabIndex:-1,...F})};n.defaultProps={labelledBy:void 0},n.propTypes={labelledBy:E.string}},67109:($,L,t)=>{t.d(L,{Z:()=>E});var e=t(85893);function E(o){return(0,e.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,e.jsx)("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"})})}},78114:($,L,t)=>{t.d(L,{Z:()=>E});var e=t(85893);function E(o){return(0,e.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,e.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 00-.374.68v1.65a.797.797 0 00.384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 00.216.744l1.167 1.166a.801.801 0 00.744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 00.679.374h1.649a.797.797 0 00.686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 00.744-.216l1.166-1.167a.803.803 0 00.216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 00.374-.679v-1.649a.796.796 0 00-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 00-.216-.744l-1.166-1.173a.802.802 0 00-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 00-.68-.374h-1.65a.797.797 0 00-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 00-.744.216L2.921 4.094a.802.802 0 00-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8zM12 17a5 5 0 100-10 5 5 0 000 10z",fill:"#212134"})})}}}]);
