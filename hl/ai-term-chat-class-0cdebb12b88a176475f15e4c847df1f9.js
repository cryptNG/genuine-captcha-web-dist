async function Sleep(n){return new Promise((e=>setTimeout(e,n)))}export default class AiTermChat extends HTMLElement{minify(n){n.preventDefault(),n.target.closest("#ai-term-chat-window").classList.add("min-size"),n.target.closest("#ai-term-chat-window").classList.remove("max-size"),n.target.closest("#ai-term-chat-window").classList.remove("mid-size")}midify(n){n.preventDefault(),n.target.closest("#ai-term-chat-window").classList.add("mid-size"),n.target.closest("#ai-term-chat-window").classList.remove("max-size"),n.target.closest("#ai-term-chat-window").classList.remove("min-size")}maxify(n){n.preventDefault(),n.target.closest("#ai-term-chat-window").classList.add("max-size"),n.target.closest("#ai-term-chat-window").classList.remove("mid-size"),n.target.closest("#ai-term-chat-window").classList.remove("min-size")}optionsChangeListeners=[]
constructor(){super(),this.apiKey="",this.apiUrl="https://ai-term.app/api/",this.showPrompt=""
const n=document.getElementById("ai-term-chat").content,e=this.attachShadow({mode:"open"}),t=document.createElement("style")
t.textContent="\n        @media (max-width: 800px)\n        {\n          .backdrop{\n            width:100dvw;\n            height:100dvh;\n            position:fixed;\n            top: 100dvh;\n            left: 0;\n            visibility: hidden;\n            background-color: #aeaeaecc;\n            backdrop-filter: blur(3px);\n          }\n\n          .backdrop.active{\n            top:0;\n\n            visibility:visible;\n          }\n        }\n\n        @media (min-width: 800px)\n        {\n          .backdrop{\n            display:none;\n          }\n        }\n        \n\n        \n        \n\n        \n        #ai-term-chat-window {\n          z-index: 9999999999;\n          \n          height: 400px;\n          width: min(400px,100dvw);\n          background: white;\n          position: fixed;\n          display:flex;\n          flex-direction: column;\n          flex-wrap: nowrap;\n          align-items: center;\n          justify-content: flex-start;\n    \n          padding: 0px;\n          box-shadow: -5px 5px 10px #00000085;\n          transition:all 0.4s ease-in-out;\n          overflow: hidden;\n          color:black;\n          \n          transition: all 0.5s ease-in-out;\n        }\n\n        @media (max-width: 800px)\n        {\n\n          #ai-term-chat-window.active {\n            display:flex;\n          }\n\n          \n          #ai-term-chat-window.active.visible {\n            opacity:1;\n          }\n\n          #ai-term-chat-window {\n            top:calc(50dvh - 200px);\n            left: calc(50dvw - min(50dvw,200px));\n            border-radius: 20px;\n            display:none;\n            opacity:0;\n          }\n\n          #ai-term-chat-window.max-size{\n            top:45px;\n          }\n        }\n\n        @media (min-width: 801px)\n        {\n          #ai-term-chat-window.active {\n            display:flex;\n          }\n\n          \n          #ai-term-chat-window.active.visible {\n            bottom:0px;\n          }\n\n          #ai-term-chat-window {\n            bottom:-440px;\n            right:0;\n            border-radius: 20px 20px 0 0;\n            display:flex;\n          }\n\n          \n\n        }\n\n        #ai-term-chat-window.mid-size{\n          height: 400px;\n        }\n\n        #ai-term-chat-window.min-size{\n          height: 50px;\n          width:50px;\n          right:0;\n        }\n\n        #ai-term-chat-window.max-size{\n          height: calc(100dvh - 95px);\n        \n        }\n\n        #ai-term-chat-window .title {\n          width: calc(100% - 19px);\n          border-radius: 20px 20px 0 0;\n          padding: 2px 5px 4px 14px;\n          color: black;\n          font-size: large;\n          font-weight: 600;\n          display: flex;\n          flex-direction: row;\n          flex-wrap: nowrap;\n          justify-content: space-between;\n          align-items: center;\n          color: black;\n          background-color: #dddddd;\n        }\n\n        #ai-term-chat-window .title .window-buttons{\n          position: relative;\n          right: 6px;\n          top: 2px;\n          background-color: white;\n          width: 21px;\n          height: 21px;\n          border-radius: 41px;\n          font-family: sans-serif;\n        }\n\n\n        #ai-term-chat-window .title .window-buttons span{\n          display: inline-block;\n          position: relative;\n          top: -2px;\n          left: 5px;\n          cursor: pointer;\n          color: #2f2f2f;\n          transform: scaleY(0.8);\n          transition: all 0.3s ease-in-out;\n        }\n\n        #ai-term-chat-window .title .window-buttons span:hover{\n          color:black;\n          text-shadow: 1px 2px 2px rgba(0,0,0,0.5);\n        }\n        .backdrop.active #ai-term-chat-window {\n          bottom: 0vh;\n        }\n\n        \n        #ai-term-chat-window form {\n          width: min(380px,95dvw);\n          display: flex;\n          flex-direction: column;\n          flex-wrap: nowrap;\n          align-items: left;\n          padding:10px 10px;\n        }\n\n        #ai-term-chat-window form label{\n          line-height:1.5rem;\n          color: cornflowerblue;\n          border-bottom: 1px solid cornflowerblue;\n        }\n\n        #ai-term-chat-window.display-prompt form .prompt-ask{\n          display: flex;\n        }\n        #ai-term-chat-window form .prompt-ask{\n          \n          flex-direction: row;\n          flex-wrap: nowrap;\n          position: absolute;\n          bottom: 10px;\n          width: min(350px,95dvw);\n          display:none;\n        }\n\n        #ai-term-chat-window form input {\n          width: 100%;\n          line-height: 1.3rem;\n          border: 0;\n          border-bottom: 1px solid cornflowerblue;\n          height: 2.5rem;\n          padding-left: 10px;\n          padding-right: 50px;\n          outline: none;\n        }\n\n        #ai-term-chat-window form input:focus {\n          outline: none;\n          border-bottom: 2px solid cornflowerblue;\n        }\n\n        input#ai-term-prompt:focus-visible {\n          outline: none;\n        }\n        input#ai-term-prompt:-internal-autofill-selected {\n          background-color:transparent;\n        }\n\n        #ai-term-chat-window form button {\n          line-height:2em;\n          background-color: transparent;\n          border:0;\n          cursor: pointer;\n          position: absolute;\n          right: -6px;\n          top: 12px;\n        }\n\n        #ai-term-chat-window form button:hover svg path{\n      \n          stroke:#4675c9 !important;\n   \n        }\n\n        #ai-term-chat-window form .textarea {\n          height: 340px;\n          line-height:1.5em;\n          margin-bottom:9px;\n          border-radius:10px;\n          border: 0px solid cornflowerblue;\n          color: black;\n          padding: 5px;\n          overflow-x: hidden;\n          overflow-y: auto;\n        }\n\n        #ai-term-chat-window.display-prompt form .textarea {\n          height: 290px;\n        }\n\n        #ai-term-chat-window form .textarea b{\n          margin-top: 0.5em;\n          color: #4675c9;\n          display: inline-block;\n        }\n        #ai-term-chat-window.max-size form .textarea{\n          height:calc(80dvh - 2.5rem - 5dvh);\n        }\n\n\n        #ai-term-chat-window form .textarea>div{\n          width:100%;\n        }\n\n        #ai-term-chat-window form .textarea>div i{\n          color:cornflowerblue;\n        }\n        ",e.appendChild(t),e.appendChild(n.cloneNode(!0))
const i=e.querySelector("input"),o=e.querySelector(".textarea")
document.querySelector("body").aiTermInputRef=e.querySelector("input")
const a=e.querySelector("#ai-term-chat-window")
document.querySelector("body").aiTermChatWindowRef=e.querySelector("#ai-term-chat-window"),a.show=async()=>{a.classList.add("active"),e.querySelector(".backdrop").classList.add("active"),await Sleep(50),a.classList.add("visible")},a.close=async()=>{a.classList.remove("visible"),await Sleep(500),e.querySelector(".backdrop").classList.remove("active"),a.classList.remove("active"),a.classList.remove("max-size"),a.classList.remove("min-size"),a.classList.add("mid-size")},e.querySelector(".window-buttons .close").addEventListener("click",(async n=>{a.close()})),e.querySelector(".backdrop").onclick=async n=>{a.close()},document.querySelector("body").aiTermButtonRef=e.querySelector("button"),document.querySelector("body").aiTermRegisterOptionChange=this.onOptionsChange
e.querySelector("form")
document.querySelector("body").aiTermButtonRef.onclick=async n=>{n.preventDefault()
let e=this.apiKey
if(""===e){const n=document.querySelector('head meta[name="ai-term_apiKey"]')
if(null===n)return void console.warn("No api-key set to ai-term-chat component. Existing!")
e=n.getAttribute("content")}if(e.length<110)return void console.warn("No valid api-key set. Existing!")
if(isNaN(e.charAt(0)))return void console.warn("Wrong package type in api-key. Existing!")
const t=1*e.charAt(0)
if(t>3)return void console.warn("No valid api-key set. Existing!")
const a=["free/dev","free/prod","std/dev","std/prod"][t]
if(""==i.value)return
let r=document.createElement("div")
r.innerHTML=`<b>${i.value}</b>`,o.appendChild(r),r=document.createElement("div"),o.appendChild(r),r.innerHTML="<i>... AI is thinking ...</i>",o.scrollTop=o.scrollHeight
try{const n=await fetch(this.apiUrl+a+"/generate",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json",Authorization:e},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({prompt:i.value})}),t=(await n.json()).response
r.innerHTML=`<em>${t}</em>`}catch(s){r.textContent="AI is overworked :-("}i.value="",o.scrollTop=o.scrollHeight}}onOptionsChange=n=>{this.optionsChangeListeners.push(n),void 0!==this.options&&n(this.options)}
updateOptions=()=>{this.optionsChangeListeners.forEach((n=>n(this.options)))}
static get observedAttributes(){return["api-key","api-url","show-prompt","options"]}attributeChangedCallback(n,e,t){"api-key"===n&&(this.apiKey=t),"api-url"===n&&(this.apiUrl=t),"options"===n&&(this.options=JSON.parse(t||{}),this.updateOptions()),"show-prompt"===n&&(this.showPrompt=t+"",""!==this.showPrompt&&"false"!==this.showPrompt?this.shadowRoot.querySelector("#ai-term-chat-window").classList.add("display-prompt"):this.shadowRoot.querySelector("#ai-term-chat-window").classList.remove("display-prompt"))}}