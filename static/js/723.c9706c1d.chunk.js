"use strict";(self.webpackChunkmy_app_1=self.webpackChunkmy_app_1||[]).push([[723],{8723:function(s,e,a){a.r(e),a.d(e,{default:function(){return Q}});var i=a(4466),n=a(4942),t=a(885),o=a(2791),l=a(6871),c=a(1694),_=a.n(c),u=a(3504),g="Dialog_dialog__Dz58o",d="Dialog_active__FH99B",r=a(6904),m=a(184),f=function(s){var e="/dialogs/"+s.id;return(0,m.jsxs)("div",{className:g,children:[(0,m.jsx)("img",{src:null!=s.foto?s.foto:r}),(0,m.jsx)(u.OL,{to:e,className:function(s){return s.isActive?d:g},onClick:s.setIsButtonDialog,children:s.name})]})},h="Message_message_1__hNNG3",D="Message_message_2__jatoi",p="Message_message_element_1__z-+rS",j="Message_message_element_2__PyO-8",x=function(s){return(0,m.jsx)("div",{className:1===s.who?h:D,children:(0,m.jsx)("p",{className:1===s.who?p:j,children:s.message})})},v="Dialogs_dialogs__SQtyS",N="Dialogs_dialogs_item__jaASJ",b="Dialogs_messages__tkCTn",S="Dialogs_messages__module__TO+Ya",y="Dialogs_action_dialog__h7Mnh",k="Dialogs_message_area__sfReJ",A="Dialogs_send__vpfXs",B="Dialogs_send_textarea__Rxcfy",w="Dialogs_send_button__Jcm+3",M="Dialogs_dialogs_icon__V9H2h",I="Dialogs_action_dialog_icon__Qe3qR",z="Dialogs_dialogs_item__module__TT3Ds",C=a(5705),Z=a(4361),T=a(4031),J=a(1013),O=a(1582),E=function(s){var e,a=(0,o.useState)(""),i=(0,t.Z)(a,2),c=i[0],u=i[1],g=(0,l.UO)();(0,o.useEffect)((function(){null!=g.id&&u(s.dialogsData[+g.id-1].name)}),[g.id]);var d=s.dialogsData.map((function(e){return(0,m.jsx)(f,{id:e.id,name:e.name,foto:e.foto,setIsButtonDialog:s.setIsButtonDialog},e.id)})),r=s.messagesData.map((function(s){return(0,m.jsx)(x,{message:s.message,who:s.who},s.id)})),h=(0,T.D)(20),D=function(){return(0,m.jsx)("div",{children:(0,m.jsx)(C.J9,{initialValues:{message:""},onSubmit:function(e,a){var i,n=a.setSubmitting;i=e.message,s.onSendMessage(i),n(!1)},children:function(s){return(0,m.jsxs)(C.l0,{className:A,children:[(0,m.jsx)(C.gN,{className:B,name:"message",component:Z.g,placeholder:"Enter your post",validate:h,onKeyDown:function(e){if(13===e.keyCode&&e.ctrlKey){var a="".concat(s.values.message,"\n");s.setFieldValue("message",a,!0)}else"Enter"===e.key&&s.handleSubmit()}}),(0,m.jsx)("button",{type:"submit",disabled:s.isSubmitting,className:w,children:"Send"})]})}})})},p="";return p=""!=c?"Dialog with ".concat(c):"Dialogs",(0,O.Z)(p),(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)("div",{className:_()(N,(0,n.Z)({},z,s.isButtonDialog&&s.sizeApp<=767)),children:d}),(0,m.jsxs)("div",{className:_()(b,(e={},(0,n.Z)(e,z,!s.isButtonDialog&&s.sizeApp<=767),(0,n.Z)(e,S,s.sizeApp<=767),e)),children:[(0,m.jsxs)("div",{className:I,children:[s.sizeApp<=767?(0,m.jsx)("img",{onClick:s.changeIsButtonDialog,className:M,src:J}):null,(0,m.jsx)("div",{className:y,children:c})]}),(0,m.jsx)("div",{className:k,children:r}),(0,m.jsx)(D,{})]})]})},F=a(8687),R=a(1413),V=a(7781),q=a(1354),H=a(2577),K=a(4517),Q=(0,V.qC)((0,F.$j)((function(s){return{dialogsData:(0,q.M9)(s),messagesData:(0,q.p0)(s),newMessage:(0,q.bU)(s),isButtonDialog:(0,H.X2)(s),sizeApp:(0,H.Ie)(s)}}),(function(s){return{onSendMessage:function(e){s((0,i.k)(e))},setIsButtonDialog:function(){s((0,K.T0)())},changeIsButtonDialog:function(){s((0,K.u6)())}}})),(function(s){return(0,F.$j)((function(s){return{isAuth:s.auth.isAuth}}))((function(e){return e.isAuth?(0,m.jsx)(s,(0,R.Z)({},e)):(0,m.jsx)(l.Fg,{to:"/login"})}))}))(E)},1013:function(s,e,a){s.exports=a.p+"static/media/dialogIcon.b49311ced3bb94328d50.png"}}]);
//# sourceMappingURL=723.c9706c1d.chunk.js.map