"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[691],{1046:function(e,t,n){n.d(t,{w_:function(){return s}});var r=n(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=r.createContext&&r.createContext(o),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},a.apply(this,arguments)},l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function c(e){return e&&e.map((function(e,t){return r.createElement(e.tag,a({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return r.createElement(u,a({attr:a({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var n,o=e.attr,i=e.size,c=e.title,s=l(e,["attr","size","title"]),u=i||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==i?r.createElement(i.Consumer,null,(function(e){return t(e)})):t(o)}},7135:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var r=n(7294),o=n(917),i=n(9),a=n(5444),l=function(){return(0,a.useStaticQuery)("904150326").allMdx.nodes},c=n(4942);var s=n(1496),u=n(7591),m=n(6852),p=i.default.article.withConfig({displayName:"PostGalleryItem__Container",componentId:"sc-1yn8b3x-0"})(["position:relative;width:360px;height:400px;display:flex;flex-direction:column;@media ","{height:auto;}&:hover .post-item-copy-button{display:inherit;@media ","{display:none;}}&:hover .post-item-thumbnail{transform:scale(1.1);@media ","{transform:none;}}"],(function(e){return e.theme.device.mobile}),(function(e){return e.theme.device.mobile}),(function(e){return e.theme.device.mobile})),d=i.default.button.attrs({className:"post-item-copy-button"}).withConfig({displayName:"PostGalleryItem__CopyButton",componentId:"sc-1yn8b3x-1"})(["display:none;position:absolute;z-index:2;top:12px;right:12px;padding:4px 8px;border:none;background-color:","cc;color:",";font-size:",";border-radius:4px;cursor:pointer;&:hover{background-color:","cc;}"],(function(e){return e.theme.colors.gray7}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.sizes.small}),(function(e){return e.theme.colors.gray6})),f=i.default.div.withConfig({displayName:"PostGalleryItem__ThumbnailWrapper",componentId:"sc-1yn8b3x-2"})(["width:100%;height:200px;overflow:hidden;border-radius:4px;"]),g=(0,i.default)(s.Z).attrs({className:"post-item-thumbnail"}).withConfig({displayName:"PostGalleryItem__Thumbnail",componentId:"sc-1yn8b3x-3"})(["width:100%;height:100%;object-fit:cover;transition:all 0.25s;"]),h=i.default.div.withConfig({displayName:"PostGalleryItem__PostInfoWrapper",componentId:"sc-1yn8b3x-4"})(["flex:1;display:flex;flex-direction:column;padding:16px 0px;box-sizing:border-box;height:fit-content;"]),y=i.default.div.withConfig({displayName:"PostGalleryItem__PostContentWrapper",componentId:"sc-1yn8b3x-5"})(["flex:1;"]),x=i.default.div.withConfig({displayName:"PostGalleryItem__Tags",componentId:"sc-1yn8b3x-6"})(["width:100%;& > * + *{margin-left:8px;}"]),b=i.default.h2.withConfig({displayName:"PostGalleryItem__Title",componentId:"sc-1yn8b3x-7"})(["display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;font-size:",";font-weight:bold;margin:",";"],(function(e){return e.theme.sizes.medium}),(function(e){var t;return null!==(t=e.margin)&&void 0!==t?t:"0"})),w=i.default.p.withConfig({displayName:"PostGalleryItem__Description",componentId:"sc-1yn8b3x-8"})(["display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;color:",";text-overflow:ellipsis;margin:",";font-size:",";"],(function(e){return e.theme.colors.gray3}),(function(e){var t;return null!==(t=e.margin)&&void 0!==t?t:"0"}),(function(e){return e.theme.sizes.small})),v=i.default.span.withConfig({displayName:"PostGalleryItem__Date",componentId:"sc-1yn8b3x-9"})(["font-size:",";color:",";"],(function(e){return e.theme.sizes.small}),(function(e){return e.theme.colors.gray4})),_=function(e){var t=e.post,n=(0,r.useState)(!1),o=n[0],i=n[1],l=(0,m.Z)().siteUrl,c=t.frontmatter.tags.map((function(e,t){return r.createElement(u.Z,{key:t,tag:e})}));return r.createElement(a.Link,{to:"/post/"+t.slug},r.createElement(p,null,r.createElement(d,{onClick:function(e){e.preventDefault(),navigator.clipboard.writeText(l+"/post/"+t.slug),i(!0),setTimeout((function(){i(!1)}),3e3)}},o?"Copied":"Copy URL"),t.frontmatter.thumbnail?r.createElement(r.Fragment,null,r.createElement(f,null,r.createElement(g,{fluid:t.frontmatter.thumbnail.childImageSharp.fluid})),r.createElement(h,null,r.createElement(y,null,r.createElement(x,null,c),r.createElement(b,{margin:"16px 0px 8px 0px"},t.frontmatter.title),r.createElement(w,{margin:"0px 0px 8px 0px"},t.frontmatter.description)),r.createElement(v,null,t.frontmatter.date))):r.createElement(h,null,r.createElement(y,null,r.createElement(b,{margin:"0px 0px 8px 0px"},t.frontmatter.title),r.createElement(w,{margin:"8px 0px 16px 0px"},t.frontmatter.description),r.createElement(x,null,c)),r.createElement(v,null,t.frontmatter.date))))},C=(0,i.keyframes)(["from{opacity:0;transform:translateY(80px);}to{opacity:1;transform:translateY(0px);}"]),E=i.default.section.withConfig({displayName:"PostGalleryView__Container",componentId:"sc-1wb02qm-0"})(["display:grid;row-gap:48px;animation:"," 1s;grid-template-columns:repeat(3,1fr);column-gap:calc(("," - 360px * 3) / 2);@media ","{column-gap:calc("," - 360px * 2);grid-template-columns:repeat(2,1fr);}@media ","{justify-items:center;grid-template-columns:repeat(1,1fr);}"],C,(function(e){return e.theme.inner.desktop}),(function(e){return e.theme.device.tablet}),(function(e){return e.theme.inner.tablet}),(function(e){return e.theme.device.mobile})),I=function(e){var t=e.posts.map((function(e){return r.createElement(_,{key:e.id,post:e})}));return r.createElement(E,null,t)},P=i.default.article.withConfig({displayName:"PostListItem__Container",componentId:"sc-1xj91ym-0"})(["display:flex;align-items:center;justify-content:space-between;padding:40px 0;"]),N=i.default.div.withConfig({displayName:"PostListItem__ContentWrapper",componentId:"sc-1xj91ym-1"})(["flex:8;"]),j=i.default.h2.withConfig({displayName:"PostListItem__Title",componentId:"sc-1xj91ym-2"})(["font-size:",";font-weight:bold;color:",";"],(function(e){return e.theme.sizes.medium}),(function(e){return e.theme.colors.gray7})),k=i.default.p.withConfig({displayName:"PostListItem__Date",componentId:"sc-1xj91ym-3"})(["font-size:",";color:",";"],(function(e){return e.theme.sizes.regular}),(function(e){return e.theme.colors.gray5})),O=i.default.p.withConfig({displayName:"PostListItem__Description",componentId:"sc-1xj91ym-4"})(["font-size:",";color:",";margin-top:4px;"],(function(e){return e.theme.sizes.regular}),(function(e){return e.theme.colors.gray5})),z=i.default.div.withConfig({displayName:"PostListItem__Tags",componentId:"sc-1xj91ym-5"})(["display:flex;gap:8px;"]),L=i.default.div.withConfig({displayName:"PostListItem__DateTagWrapper",componentId:"sc-1xj91ym-6"})(["display:flex;gap:16px;margin-top:16px;"]),S=i.default.div.withConfig({displayName:"PostListItem__ThumbnailWrapper",componentId:"sc-1xj91ym-7"})(["flex:2;overflow:hidden;border-radius:4px;"]),D=(0,i.default)(s.Z).withConfig({displayName:"PostListItem__Thumbnail",componentId:"sc-1xj91ym-8"})(["width:100%;height:100%;"]),G=function(e){var t=e.post,n=t.frontmatter.tags.map((function(e,t){return r.createElement(u.Z,{key:t,tag:e})}));return r.createElement(a.Link,{to:"/post/"+t.slug},r.createElement(P,null,r.createElement(N,null,r.createElement(j,null,t.frontmatter.title),r.createElement(O,null,t.frontmatter.description),r.createElement(L,null,r.createElement(k,null,t.frontmatter.date),r.createElement(z,null,n))),t.frontmatter.thumbnail?r.createElement(S,null,r.createElement(D,{fluid:t.frontmatter.thumbnail.childImageSharp.fluid})):null))},T=i.default.section.withConfig({displayName:"PostListView__Container",componentId:"sc-17m6s9s-0"})([""]),W=i.default.div.withConfig({displayName:"PostListView__GroupByYearContainer",componentId:"sc-17m6s9s-1"})(["margin-bottom:20px;"]),Y=i.default.div.withConfig({displayName:"PostListView__YearHadingSection",componentId:"sc-17m6s9s-2"})(["display:flex;align-items:center;gap:28px;"]),F=i.default.h2.withConfig({displayName:"PostListView__YearHeading",componentId:"sc-17m6s9s-3"})(["font-size:",";font-weight:bold;color:",";padding-bottom:12px;"],(function(e){return e.theme.sizes.xxLarge}),(function(e){return e.theme.colors.gray3})),V=i.default.div.withConfig({displayName:"PostListView__YearGroupDivider",componentId:"sc-17m6s9s-4"})(["background:",";height:4px;width:100%;"],(function(e){return e.theme.colors.gray1})),Z=["viewFormat"];function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var q={gallery:I,list:function(e){var t=function(e){return e.reduce((function(e,t){var n=new Date(t.frontmatter.date.replace(/\./gi,"-").slice(0,-1)).getFullYear();return n in e?(e[n].push(t),e):(e[n]=[t],e)}),{})}(e.posts),n=Object.entries(t).map((function(e){var t=e[0],n=e[1];return r.createElement(W,{key:t},t===(new Date).getFullYear().toString()?null:r.createElement(Y,null,r.createElement(F,{key:t},t),r.createElement(V,null)),n.map((function(e){return r.createElement(G,{key:e.id,post:e})})))})).reverse();return r.createElement(T,null,n)}},U=function(e){var t=e.viewFormat,n=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,Z);return q[t](function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n))},H=i.default.div.withConfig({displayName:"EmptyPost__Container",componentId:"sc-1bkf1su-0"})(["margin-top:40px;"]),R=i.default.h1.withConfig({displayName:"EmptyPost__Title",componentId:"sc-1bkf1su-1"})(["font-size:",";text-align:center;color:",";"],(function(e){return e.theme.sizes.medium}),(function(e){return e.theme.colors.gray3})),K=function(e){var t=e.description;return r.createElement(H,null,r.createElement(R,null,t))},M=n(6199),Q=i.default.section.withConfig({displayName:"PostContainer__Container",componentId:"sc-jguthm-0"})(["margin-bottom:80px;"]),A=i.default.section.withConfig({displayName:"PostContainer__SearchContainer",componentId:"sc-jguthm-1"})(["display:flex;align-items:center;justify-content:space-between;margin-bottom:40px;width:100%;"]),J=i.default.span.withConfig({displayName:"PostContainer__NumberOfPosts",componentId:"sc-jguthm-2"})(["font-size:",";color:",";font-weight:bold;"],(function(e){return e.theme.sizes.small}),(function(e){return e.theme.colors.gray5})),X=i.default.input.withConfig({displayName:"PostContainer__SearchInput",componentId:"sc-jguthm-3"})(["border:1px solid ",";background-color:",";border-radius:8px;height:32px;padding:4px 8px;box-sizing:border-box;width:200px;outline:none;color:",";&:focus{border-color:",";}"],(function(e){return e.theme.colors.gray2}),(function(e){return e.theme.colors.gray0}),(function(e){return e.theme.colors.gray6}),(function(e){return e.theme.colors.gray3})),$=i.default.div.withConfig({displayName:"PostContainer__PostToolsWrapper",componentId:"sc-jguthm-4"})(["display:flex;align-items:center;gap:16px;"]),ee=i.default.div.withConfig({displayName:"PostContainer__ViewFormatButtonWrapper",componentId:"sc-jguthm-5"})(["display:flex;algin-items:center;gap:8px;margin:12px 0;.selected{color:",";background-color:",";}"],(function(e){return e.theme.colors.gray6}),(function(e){return e.theme.colors.gray2})),te=i.default.button.withConfig({displayName:"PostContainer__ViewFormatButton",componentId:"sc-jguthm-6"})(["display:flex;align-items:center;justify-content:center;width:24px;height:24px;font-size:16px;border:none;background-color:transparent;color:",";cursor:pointer;border-radius:4px;"],(function(e){return e.theme.colors.gray3})),ne=function(){var e=(0,r.useState)("list"),t=e[0],n=e[1],o=(0,r.useState)(""),i=o[0],a=o[1],c=l();(0,r.useEffect)((function(){var e,t,n=(e=location.search,t="q",new URLSearchParams(e).get(t));null!==n&&a(n)}),[]),(0,r.useEffect)((function(){""===i?history.pushState({},"","/"):history.pushState({},"","?q="+i)}),[i]);var s,u,m=""!==i?c.filter((function(e){return function(e,t){var n=e.frontmatter,r=n.title,o=n.tags;return!!r.toLowerCase().includes(t.toLowerCase())||o.some((function(e){return e.toLowerCase().includes(t.toLowerCase())}))}(e,i)})):c;return r.createElement(Q,null,r.createElement(A,null,r.createElement(J,null,(s=""===i?"전체 글":"'"+i+"' 검색 결과",u=m.length,s+" ("+u+")")),r.createElement($,null,r.createElement(ee,null,r.createElement(te,{className:"list"===t?"selected":"",onClick:function(){return n("list")}},r.createElement(M.KfY,null)),r.createElement(te,{className:"gallery"===t?"selected":"",onClick:function(){return n("gallery")}},r.createElement(M.idP,null))),r.createElement(X,{placeholder:"검색어를 입력하세요.",value:i,onChange:function(e){var t=e.target;return a(t.value)}}))),m.length>0?r.createElement(U,{posts:m,viewFormat:t}):r.createElement(K,{description:""===i?"작성된 글이 없습니다.":"'"+i+"'에 대한 검색 결과가 없습니다"}))},re=function(){var e=(0,m.Z)().description;return r.createElement(o.Z,{path:"/",title:"홈",description:e},r.createElement(ne,null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-a65e67b997ddcdc9eb4f.js.map