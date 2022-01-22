const uriAttributes=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),ARIA_ATTRIBUTE_PATTERN=/^aria-[\w-]*$/i,SAFE_URL_PATTERN=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,DATA_URL_PATTERN=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,allowedAttribute=(e,t)=>{const o=e.nodeName.toLowerCase();if(t.includes(o))return!uriAttributes.has(o)||Boolean(SAFE_URL_PATTERN.test(e.nodeValue)||DATA_URL_PATTERN.test(e.nodeValue));const r=t.filter(e=>e instanceof RegExp);for(let e=0,t=r.length;e<t;e++)if(r[e].test(o))return!0;return!1};export const DefaultAllowlist={"*":["class","dir","id","lang","role",ARIA_ATTRIBUTE_PATTERN],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};export function sanitizeHtml(e,t,o){if(!e.length)return e;if(o&&"function"==typeof o)return o(e);const r=(new window.DOMParser).parseFromString(e,"text/html"),i=[].concat(...r.body.querySelectorAll("*"));for(let e=0,o=i.length;e<o;e++){const o=i[e],r=o.nodeName.toLowerCase();if(!Object.keys(t).includes(r)){o.remove();continue}const n=[].concat(...o.attributes),s=[].concat(t["*"]||[],t[r]||[]);n.forEach(e=>{allowedAttribute(e,s)||o.removeAttribute(e.nodeName)})}return r.body.innerHTML}