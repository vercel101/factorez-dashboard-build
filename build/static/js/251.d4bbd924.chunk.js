(self.webpackChunkfactorez_dashboard=self.webpackChunkfactorez_dashboard||[]).push([[251],{5905:function(e,r,n){"use strict";var t=n(9439),a=n(2791),s=n(6747),i=n(6856),l=n(9126),c=n(548),d=n(6773),o=n(9055),u=n(184);r.Z=function(e){var r=e.details,n=e.actionClose,x=e.save,p=(e.changeHandler,e.vendorHandler,e.isViewSaveLoading),h=(0,a.useState)(null),m=(0,t.Z)(h,2),b=m[0],j=m[1],f=(0,a.useState)(null),N=(0,t.Z)(f,2),g=N[0],v=N[1];return(0,u.jsx)("div",{className:"fixed z-20 top-0 left-0 right-0 bottom-0 bg-[#00000088] ",children:(0,u.jsx)("div",{className:"w-1/2 bg-white mt-5 absolute m-auto right-0 left-0 rounded-md",children:(0,u.jsxs)("div",{className:"p-3 w-full",children:[(0,u.jsxs)("div",{className:"flex items-center justify-between border-b mb-4 pb-2",children:[(0,u.jsx)("h1",{className:"text-xl font-bold  ",children:"Vendor Information"}),(0,u.jsx)("button",{className:"bg-teal-100 p-1 rounded",title:"Cancel & Close Model",onClick:function(){return n()},children:(0,u.jsx)(i.FU5,{size:20})})]}),(0,u.jsxs)(s.mQ,{className:"mt-1 pb-3",children:[(0,u.jsxs)(s.td,{className:"flex text-base font-medium text-center w-full select-none",children:[(0,u.jsx)(s.OK,{selectedClassName:"bg-teal-100 dark:bg-teal-800 bg-teal-100 border-x-teal-100 border-t-teal-100 border-b-4 border-blue-500",className:"cursor-pointer p-3 w-full  outline-none border",children:"Besic Details"}),(0,u.jsx)(s.OK,{selectedClassName:"bg-teal-100 dark:bg-teal-800 bg-teal-100 border-x-teal-100 border-t-teal-100 border-b-4 border-blue-500",className:"cursor-pointer p-3 w-full border border-x-0 outline-none",children:"Document Details"}),(0,u.jsx)(s.OK,{selectedClassName:"bg-teal-100 dark:bg-teal-800 bg-teal-100 border-x-teal-100 border-t-teal-100 border-b-4 border-blue-500",className:"cursor-pointer p-3 w-full border  outline-none",children:"Bank Account"})]}),(0,u.jsx)(s.x4,{children:(0,u.jsxs)("div",{className:"max-h-[400px] overflow-y-scroll scrollbar-auto mt-5 pe-1",children:[(0,u.jsx)("table",{className:"dark:border-neutral-500 border w-full",children:(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{className:"border-b",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[140px] min-w-[140px] p-2",children:"Firm Name"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.firmName})]}),(0,u.jsxs)("tr",{className:"border-b ",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[140px] min-w-[140px] p-2",children:"Brand Name"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.brand_id&&r.brand_id.length>0&&r.brand_id[0].brand_name})]}),(0,u.jsxs)("tr",{className:"border-b ",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[140px] min-w-[140px] p-2",children:"GST Number"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.gstNo})]}),(0,u.jsxs)("tr",{className:"border-b ",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[140px] min-w-[140px] p-2",children:"Owner Name"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.representativeName})]}),(0,u.jsxs)("tr",{className:"border-b ",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[140px] min-w-[140px] p-2",children:"Email"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.emailId})]}),(0,u.jsxs)("tr",{className:"border-b ",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[140px] min-w-[140px] p-2",children:"Mobile Number"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.mobileNo})]}),(0,u.jsxs)("tr",{className:"border-b ",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[140px] min-w-[140px] p-2",children:"Alt Mobile No"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.altMobileNo})]}),(0,u.jsxs)("tr",{className:"border-b ",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[140px] min-w-[140px] p-2",children:"Pickup State"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.pickupState})]}),(0,u.jsxs)("tr",{className:"border-b ",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[140px] min-w-[140px] p-2",children:"Pickup City"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.pickupCity})]}),(0,u.jsxs)("tr",{className:"border-b ",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[140px] min-w-[140px] p-2",children:"Pickup Pincode"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.pickupPincode})]}),(0,u.jsxs)("tr",{className:"border-b ",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[140px] min-w-[140px] p-2",children:"Invoice Address"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.invoiceAddress})]}),(0,u.jsxs)("tr",{className:"border-b ",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[140px] min-w-[140px] p-2",children:"Pickup Address"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.pickupAddress})]})]})}),(0,u.jsx)("div",{className:"mt-2 mb-10 grid grid-cols-2 gap-3",children:(0,u.jsxs)("div",{className:"flex items-center w-full",children:[(0,u.jsx)("span",{className:"w-full border p-2",children:"Brand Logo"}),(0,u.jsxs)("a",{href:r.brand_id&&r.brand_id.length>0?r.brand_id[0].brandLogo:"",target:"_blank",className:"bg-blue-500 border border-blue-500 cursor-pointer text-white p-2 inline-flex items-center",children:[(0,u.jsx)(l.i5$,{className:"me-2",size:20})," Preview"]})]})})]})}),(0,u.jsx)(s.x4,{children:(0,u.jsxs)("div",{className:"mt-5 grid grid-cols-2 gap-3 items-center justify-between",children:[(0,u.jsxs)("div",{className:"flex items-center w-full",children:[(0,u.jsx)("span",{className:"w-full border p-2",children:"Brand Registration Doc"}),(0,u.jsxs)("a",{href:r.document_id?r.document_id.brandRegDoc:"",target:"_blank",className:"bg-blue-500 border border-blue-500 text-white p-2 inline-flex items-center",children:[(0,u.jsx)(l.i5$,{className:"me-2",size:20})," Preview"]})]}),(0,u.jsxs)("div",{className:"flex items-center w-full",children:[(0,u.jsx)("span",{className:"w-full border p-2",children:"GST certificate"}),(0,u.jsxs)("a",{href:r.document_id?r.document_id.gstRegDoc:"",target:"_blank",className:"bg-blue-500 border border-blue-500 text-white p-2 inline-flex items-center",children:[(0,u.jsx)(l.i5$,{className:"me-2",size:20})," Preview"]})]})]})}),(0,u.jsxs)(s.x4,{children:[(0,u.jsx)("div",{className:"max-h-[600px] overflow-y-scroll scrollbar-auto mt-5 pe-1",children:(0,u.jsx)("table",{className:"dark:border-neutral-500 border w-full",children:(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{className:"border-b",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[200px] min-w-[140px] p-2",children:"Account Holder Name"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.bank_id&&r.bank_id.acHolderName})]}),(0,u.jsxs)("tr",{className:"border-b ",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[140px] min-w-[140px] p-2",children:"Account Number"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.bank_id&&r.bank_id.acNo})]}),(0,u.jsxs)("tr",{className:"border-b ",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[140px] min-w-[140px] p-2",children:"Bank Name"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.bank_id&&r.bank_id.bankName})]}),(0,u.jsxs)("tr",{className:"border-b ",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[140px] min-w-[140px] p-2",children:"Branch"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.bank_id&&r.bank_id.branch})]}),(0,u.jsxs)("tr",{className:"border-b ",children:[(0,u.jsx)("th",{className:"border-r dark:border-neutral-500 pe-3  text-start w-[140px] min-w-[140px] p-2",children:"IFSC Code"}),(0,u.jsx)("td",{className:"text-start ps-2",children:r.bank_id&&r.bank_id.ifsc})]})]})})}),(0,u.jsx)("div",{className:"my-10 grid grid-cols-2 gap-3",children:(0,u.jsxs)("div",{className:"flex items-center w-full",children:[(0,u.jsx)("span",{className:"w-full border p-2",children:"Cancelled Cheque"}),(0,u.jsxs)("a",{href:r.bank_id?r.bank_id.cancelledCheque:"",target:"_blank",className:"bg-blue-500 border border-blue-500 text-white p-2 inline-flex items-center",children:[(0,u.jsx)(l.i5$,{className:"me-2",size:20})," Preview"]})]})})]})]}),(0,u.jsxs)("div",{className:" flex items-center justify-start space-x-1 border-t-2 pt-2",children:[(0,u.jsx)(c.I,{defaultValue:r.marginInPercentage&&r.marginInPercentage,onChange:function(e){return v(e.target.value)},type:"number",placeholder:"Margin value %",size:"sm",width:"150px"}),(0,u.jsxs)(d.P,{width:"200px",onChange:function(e){return j(e.target.value)},defaultValue:b,value:null===b?r.status:b,size:"sm",children:[(0,u.jsx)("option",{disabled:"Pending"!==b&&!0,value:"Pending",children:"Pending"}),(0,u.jsx)("option",{value:"Rejected",children:"Rejected"}),(0,u.jsx)("option",{value:"Approved",children:"Approved"})]}),(0,u.jsx)(o.z,{isLoading:p,loadingTex:"Please wait",borderRadius:0,size:"sm",onClick:function(){null===g&&null===b||x({vendorStatus:b,vendorMargin:g},r._id)},colorScheme:"messenger",children:"Save Changes"}),(0,u.jsx)(o.z,{borderRadius:0,size:"sm",onClick:function(){return n()},colorScheme:"red",children:"Cancel"})]})]})})})}},8251:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return K}});var t=n(1413),a=n(7762),s=n(3433),i=n(4165),l=n(5861),c=n(9439),d=n(2791),o=n(9126),u=n(6856),x=n(9129),p=n(4873),h=n(3858),m=n(5905),b=n(9434),j=(n(4262),n(9048)),f=n(9055),N=n(9853),g=n(9450),v=n(2872),k=n(5497),w=n(4475),C=n(4627),_=n(1666),T=n(5494),y=n(758),Z=n(7227),S=n(2008),I=n(5510),z=n(1364),A=n(2940),P=n(8733),V=n(7588),D=n(5606),R=n(548),B=n(2966),E=n(3513),O=n(3524),M=n(1692),H=n(7943),L=n(184),q=function(e){var r=e.filterText,n=e.onFilter,t=e.onClear;return(0,L.jsx)("div",{className:"flex items-center",children:(0,L.jsxs)(M.B,{children:[(0,L.jsx)(R.I,{w:"400px",placeholder:"Search by product, SKU or Seller Name",value:r,onChange:n}),(0,L.jsx)(H.x,{children:(0,L.jsx)(u.lTq,{size:30,color:"green.500",onClick:t,className:"cursor-pointer hover:bg-blue-50 p-1 rounded-md"})})]})})},F=n(9935),G=n(7489);var K=function(e){var r=e.tokenReducer,n=e.userInfoReducer,M=(0,j.p)(),H=(0,d.useState)([]),K=(0,c.Z)(H,2),U=K[0],$=K[1],Q=((0,b.I0)(),(0,d.useState)(!1)),W=(0,c.Z)(Q,2),J=W[0],X=W[1],Y=(0,d.useState)(!1),ee=(0,c.Z)(Y,2),re=ee[0],ne=ee[1],te=(0,d.useState)(!1),ae=(0,c.Z)(te,2),se=ae[0],ie=ae[1],le=(0,d.useState)(""),ce=(0,c.Z)(le,2),de=ce[0],oe=ce[1],ue=(0,d.useState)({firmName:"",gstNo:"",representativeName:"",emailId:"",password:"",mobileNo:"",altMobileNo:"",pickupState:"",pickupCity:"",pickupPincode:"",invoiceAddress:"",pickupAddress:""}),xe=(0,c.Z)(ue,2),pe=xe[0],he=xe[1],me=(0,d.useState)([{brand_id:"",brand_name:""}]),be=(0,c.Z)(me,2),je=be[0],fe=be[1],Ne=(0,d.useState)({bank_id:"",acHolderName:"",acNo:"",bankName:"",branch:"",ifsc:""}),ge=(0,c.Z)(Ne,2),ve=ge[0],ke=ge[1],we=(0,d.useState)({cancelledCheque:"",gstRegDoc:"",brandRegDoc:""}),Ce=(0,c.Z)(we,2),_e=Ce[0],Te=Ce[1],ye=(0,d.useState)({flag:!1,data:null}),Ze=(0,c.Z)(ye,2),Se=Ze[0],Ie=Ze[1],ze=d.useState(""),Ae=(0,c.Z)(ze,2),Pe=Ae[0],Ve=Ae[1],De=d.useState(!1),Re=(0,c.Z)(De,2),Be=Re[0],Ee=Re[1],Oe=function(e){var r=e.onExport;return(0,L.jsx)(f.z,{colorScheme:"whatsapp",leftIcon:(0,L.jsx)(O.c2j,{size:25}),onClick:function(e){return r(e.target.value)},children:"Export"})},Me=[{name:"Vendor ID",selector:function(e){return e.vendor_unique_id},width:"120px"},{name:(0,L.jsx)("span",{className:"whitespace-normal",children:"Firm Name"}),selector:function(e){return e.firmName}},{name:(0,L.jsx)("span",{className:"whitespace-normal",children:"Name"}),selector:function(e){return(0,L.jsx)("span",{className:"whitespace-normal",children:e.representativeName})}},{name:(0,L.jsx)("span",{className:"whitespace-normal",children:"Margin %"}),selector:function(e){return e.marginInPercentage&&e.marginInPercentage},width:"100px"},{name:"Mobile Number",selector:function(e){return(0,L.jsx)("span",{className:"whitespace-normal",children:e.mobileNo})},width:"150px"},{name:(0,L.jsx)("span",{className:"whitespace-normal",children:"Email ID"}),selector:function(e){return(0,L.jsx)("span",{className:"whitespace-normal",children:e.emailId})}},{name:(0,L.jsx)("span",{className:"whitespace-normal",children:"Dt. Added"}),selector:function(e){return(0,h.localDate)(e.createdAt)},width:"130px"},{name:(0,L.jsx)("span",{className:"whitespace-normal",children:"Approved By"}),selector:function(e){return e.actionTakenBy?e.actionTakenBy.name:"NoAction"}},{name:"Status",selector:function(e){return(0,L.jsx)(N.C,{py:1,variant:"solid",colorScheme:"Approved"===e.status?"whatsapp":"Rejected"===e.status?"red":"facebook",children:e.status})},width:"130px"},{name:"Action",width:"80px",selector:function(e){return(0,L.jsxs)(g.J,{placement:"left",styleConfig:{popper:{maxWidth:"unset",width:"unset"}},children:[(0,L.jsx)(v.x,{children:(0,L.jsx)("button",{className:"focus:outline-none",children:(0,L.jsx)(o.FQA,{size:35,className:" border dark:border-neutral-500 cursor-pointer py-1 rounded-md hover:bg-teal-100 dark:hover:bg-teal-800"})})}),(0,L.jsx)(k.h,{children:(0,L.jsx)(w.y,{className:"bg-white rounded shadow-md",children:(0,L.jsx)(C.b,{children:(0,L.jsxs)("div",{className:"flex items-center",children:[(0,L.jsx)(x.Lr9,{size:30,color:"green",className:"m-2 cursor-pointer",title:"Information",onClick:function(){return Ge(e._id,e)}}),"Seller"!==n.userType&&(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(u.zmo,{size:30,color:"blue",className:"m-2 cursor-pointer",title:"Edit Product",onClick:function(){return Ke(e._id,e)}})})]})})})})]})}}],He=U.filter((function(e){var r=null;return(e.firmName.toLowerCase().includes(Pe.toLowerCase())||e.representativeName.toLowerCase().includes(Pe.toLowerCase())||e.vendor_unique_id.includes(Pe.toLowerCase())||e.mobileNo.includes(Pe.toLowerCase()))&&(r=e),r})),Le=d.useMemo((function(){return(0,L.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,L.jsx)(q,{onFilter:function(e){return Ve(e.target.value)},onClear:function(){He&&(Ee(!Be),Ve(""))},filterText:Pe}),(0,L.jsx)(Oe,{onExport:function(){return function(e){var r=document.createElement("a"),n=(0,G.convertVendorArrayOfObjectsToCSV)(e);null!=n&&(n.match(/^data:text\/csv/i)||(n="data:text/csv;charset=utf-8,".concat(n)),r.setAttribute("href",encodeURI(n)),r.setAttribute("download","vendors.csv"),r.click())}(He)}})]})}),[Pe,He,Be]),qe=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.CB)().then((function(e){console.log(e.data),$(e.data.data)})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Fe=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(n,t){return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ie(!0),e.next=3,(0,p.YA)(n,r,t).then((function(e){console.log(e.data),M({position:"top",status:"success",isClosable:!0,title:e.data.message}),qe(),Ie({flag:!1,data:null})})).catch((function(e){console.log(e);var r=e.response?e.response.data.message:e.message;M({title:"Error",description:r,isClosable:!0,status:"error",position:"top"})}));case 3:ie(!1);case 4:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),Ge=function(e,r){Ie({flag:!0,data:r}),console.log(e)},Ke=function(e,r){console.log(r),oe(r),X(!0)},Ue=function(){var e=(0,l.Z)((0,i.Z)().mark((function e(n){var t,s,l,c,d,o,u,x,h,m,b,j,f;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(t=new FormData,s=0,l=Object.keys(pe);s<l.length;s++)c=l[s],pe[c]&&t.append(c,pe[c]);for(d=0,o=Object.keys(ve);d<o.length;d++)u=o[d],ve[u]&&t.append(u,ve[u]);x=(0,a.Z)(je);try{for(x.s();!(h=x.n()).done;)(m=h.value).brand_id&&(t.append("brand_id",m.brand_id),t.append("brand_name",m.brand_name))}catch(i){x.e(i)}finally{x.f()}for(b=0,j=Object.keys(_e);b<j.length;b++)f=j[b],_e[f]&&t.append(f,_e[f]);return ne(!0),e.next=9,(0,p.gx)(t,n,r).then((function(e){console.log(e.data),M({title:"Success",description:e.data.message,isClosable:!0,status:"success",position:"top"}),$e(),X(!1),qe()})).catch((function(e){console.log(e);var r=e.response?e.response.data.message:e.message;M({title:"Error",description:r,isClosable:!0,status:"error",position:"top"})}));case 9:ne(!1);case 10:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),$e=function(){he({firmName:"",gstNo:"",representativeName:"",emailId:"",password:"",mobileNo:"",altMobileNo:"",pickupState:"",pickupCity:"",pickupPincode:"",invoiceAddress:"",pickupAddress:""}),fe([{brand_id:"",brand_name:""}]),ke({bank_id:"",acHolderName:"",acNo:"",bankName:"",branch:"",ifsc:""}),Te({cancelledCheque:"",gstRegDoc:"",brandRegDoc:""})};return(0,d.useEffect)((function(){qe()}),[]),(0,L.jsxs)("div",{className:"bg-gray-50 dark:bg-gray-800",children:[(0,L.jsxs)(_.u_,{size:"2xl",isOpen:J,onClose:function(){return X(!1)},children:[(0,L.jsx)(T.Z,{}),(0,L.jsxs)(y.h,{children:[(0,L.jsx)(Z.x,{children:"Edit Vendor Info"}),(0,L.jsx)(S.o,{}),(0,L.jsx)(I.f,{children:de&&(0,L.jsx)("div",{className:"h-[450px] overflow-y-auto shadow-sm",children:(0,L.jsx)(z.i,{children:(0,L.jsxs)(A.p,{children:[(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,width:"200px",children:"Firm Name"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",defaultValue:de.firmName,onChange:function(e){return he((function(r){return(0,t.Z)((0,t.Z)({},r),{},{firmName:e.target.value})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"Brand Name"}),(0,L.jsx)(D.Td,{p:1,children:de.brand_id.map((function(e,r){return(0,L.jsx)(R.I,{size:"xs",defaultValue:e.brand_name,onChange:function(n){return t=r,a=e._id,i=n.target.value,void fe((function(e){var r=(0,s.Z)(e);return r[t]={brand_id:a,brand_name:i},r}));var t,a,i}},e._id)}))})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"GST Number"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",defaultValue:de.gstNo,onChange:function(e){return he((function(r){return(0,t.Z)((0,t.Z)({},r),{},{gstNo:e.target.value})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"Owner Name"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",defaultValue:de.representativeName,onChange:function(e){return he((function(r){return(0,t.Z)((0,t.Z)({},r),{},{representativeName:e.target.value})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"Email"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",defaultValue:de.emailId,onChange:function(e){return he((function(r){return(0,t.Z)((0,t.Z)({},r),{},{emailId:e.target.value})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"Mobile Number"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",defaultValue:de.mobileNo,onChange:function(e){return he((function(r){return(0,t.Z)((0,t.Z)({},r),{},{mobileNo:e.target.value})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"Alt Mobile Number"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",defaultValue:de.altMobileNo,onChange:function(e){return he((function(r){return(0,t.Z)((0,t.Z)({},r),{},{altMobileNo:e.target.value})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"Pickup State"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",defaultValue:de.pickupState,onChange:function(e){return he((function(r){return(0,t.Z)((0,t.Z)({},r),{},{pickupState:e.target.value})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"Pickup City"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",defaultValue:de.pickupCity,onChange:function(e){return he((function(r){return(0,t.Z)((0,t.Z)({},r),{},{pickupCity:e.target.value})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"Pickup Pincode"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",defaultValue:de.pickupPincode,onChange:function(e){return he((function(r){return(0,t.Z)((0,t.Z)({},r),{},{pickupPincode:e.target.value})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"Invoice Address"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",defaultValue:de.invoiceAddress,onChange:function(e){return he((function(r){return(0,t.Z)((0,t.Z)({},r),{},{invoiceAddress:e.target.value})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"Pickup Address"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",defaultValue:de.pickupAddress,onChange:function(e){return he((function(r){return(0,t.Z)((0,t.Z)({},r),{},{pickupAddress:e.target.value})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"Account Holder Name"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",defaultValue:de.bank_id.acHolderName,onChange:function(e){return ke((function(r){return(0,t.Z)((0,t.Z)({},r),{},{acHolderName:e.target.value,bank_id:de.bank_id._id})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"Account Number"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",defaultValue:de.bank_id.acNo,onChange:function(e){return ke((function(r){return(0,t.Z)((0,t.Z)({},r),{},{acNo:e.target.value,bank_id:de.bank_id._id})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"Bank Name"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",defaultValue:de.bank_id.bankName,onChange:function(e){return ke((function(r){return(0,t.Z)((0,t.Z)({},r),{},{bankName:e.target.value,bank_id:de.bank_id._id})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"Branch"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",defaultValue:de.bank_id.branch,onChange:function(e){return ke((function(r){return(0,t.Z)((0,t.Z)({},r),{},{branch:e.target.value,bank_id:de.bank_id._id})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"IFSC"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",defaultValue:de.bank_id.ifsc,onChange:function(e){return ke((function(r){return(0,t.Z)((0,t.Z)({},r),{},{ifsc:e.target.value,bank_id:de.bank_id._id})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"Cancel Cheque"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{type:"file",size:"xs",onChange:function(e){return Te((function(r){return(0,t.Z)((0,t.Z)({},r),{},{cancelledCheque:e.target.files[0]})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"Brand Doc"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{type:"file",size:"xs",onChange:function(e){return Te((function(r){return(0,t.Z)((0,t.Z)({},r),{},{brandRegDoc:e.target.files[0]})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"GST Doc"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{type:"file",size:"xs",onChange:function(e){return Te((function(r){return(0,t.Z)((0,t.Z)({},r),{},{gstRegDoc:e.target.files[0]})}))}})})]}),(0,L.jsxs)(P.Tr,{children:[(0,L.jsx)(V.Th,{px:0,py:1,children:"NEW PASSWORD"}),(0,L.jsx)(D.Td,{p:1,children:(0,L.jsx)(R.I,{size:"xs",onChange:function(e){return he((function(r){return(0,t.Z)((0,t.Z)({},r),{},{password:e.target.value})}))}})})]})]})})})}),(0,L.jsxs)(B.m,{children:[(0,L.jsx)(f.z,{isLoading:re,loadingText:"Please wait",size:"sm",mr:3,colorScheme:"yellow",onClick:function(){return Ue(de._id)},children:"Save Changes"}),(0,L.jsx)(f.z,{size:"sm",colorScheme:"red",variant:"outline",onClick:function(){X(!1),$e()},children:"Cancel"})]})]})]}),Se.flag&&(0,L.jsx)(m.Z,{isViewSaveLoading:se,changeHandler:function(e,r,n){console.log(e,r,n)},save:Fe,details:Se.data,actionClose:function(){return Ie({data:null,flag:!1})}}),(0,L.jsx)(E.ZP,{columns:Me,data:He,selectableRows:!0,pagination:!0,paginationComponentOptions:{rowsPerPageText:"No of Rows",rangeSeparatorText:"Total Records",selectAllRowsItem:!0,selectAllRowsItemText:"HSN code"},paginationResetDefaultPage:Be,subHeader:!0,onSelectedRowsChange:function(e){console.log(e)},subHeaderComponent:Le,customStyles:F.X,subHeaderAlign:"left"})]})}},7489:function(e,r,n){var t=n(3858).localDate,a=["product_name","sku_code","hsn_code","seller_price","sellingGST","margin","qty_in_hand","color_id","categoryId","subCatId","status","brandId","vendor_id","createdAt"],s=["Product Name","SKU Code","HSN Code","Seller Price","Selling GST","Margin","Qty in Hand","Color","Category","Sub Category","Status","Brand","Seller","Create Date"],i=["firmName","gstNo","representativeName","emailId","mobileNo","brand_id","vendor_unique_id","status","createdAt","marginInPercentage","actionTakenBy"],l=["Firm Name","GST No","Seller Name","Email ID","Mobile No","Brand Name","Seller Unique ID","Status","Create Date","Action Taken By","Margin in %"];e.exports={convertProductArrayOfObjectsToCSV:function(e){var r;if(0===e.length)return null;var n=Object.keys(e[0]);return r="",r+=s.join(","),r+="\n",e.forEach((function(e){var s=0;n.forEach((function(n){console.log(n),a.includes(n)&&(s>0&&(r+=","),r+="color_id"===n?e[n].colorName:"categoryId"===n?e[n].category_name:"subCatId"===n?e[n].subcategory_name:"brandId"===n?e[n].brand_name:"vendor_id"===n?e[n].firmName:"createdAt"===n?t(e[n]):e[n],s++)})),r+="\n"})),r},convertVendorArrayOfObjectsToCSV:function(e){var r;if(0===e.length)return null;var n=Object.keys(e[0]);return r="",r+=l.join(","),r+="\n",e.forEach((function(e){var a=0;n.forEach((function(n){if(i.includes(n)){if(a>0&&(r+=","),"brand_id"===n){var s="";e[n].forEach((function(e){return s+="".concat(e.brand_name," | ")})),console.log("BB",s),r+=s||"-"}else"actionTakenBy"===n?(console.log("Name",e[n].name),e[n].name?r+=e[n].name:r+="-"):"createdAt"===n?e[n]?r+=t(e[n]):r+="-":e[n]?r+=e[n]:r+="-";a++}})),r+="\n"})),r}}}}]);
//# sourceMappingURL=251.d4bbd924.chunk.js.map