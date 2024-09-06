"use strict";(self.webpackChunknox_blog=self.webpackChunknox_blog||[]).push([[226],{5869:function(e,t,n){n.d(t,{p:function(){return p},A:function(){return E}});var l=n(758),r=n(9396),a=n(5373),c=n(1345),o=n(8944),i=n(7894);var m=e=>{let{post:t}=e;return null};const u=["16px","8px","4px"].map((e=>`rgba(0, 0, 0, 0.1) 0px ${e} ${e} 0px`));var s=e=>{let{data:{post:t},children:n}=e;return(0,r.Y)(c.A,null,(0,r.Y)(a.DZ,{as:"h1",variant:"styles.h1"},t.title),(0,r.Y)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,r.Y)("time",null,t.date),t.tags&&(0,r.Y)(l.Fragment,null," — ",(0,r.Y)(o.A,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,r.Y)("span",null,t.timeToRead," min read")),(0,r.Y)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:u.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,r.Y)(m,{post:t}))};const p=e=>{var t,n,l;let{data:{post:a}}=e;return(0,r.Y)(i.A,{title:a.title,description:a.description?a.description:a.excerpt,image:a.banner?null===(t=a.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(l=n.resize)||void 0===l?void 0:l.src:void 0,pathname:a.slug,canonicalUrl:a.canonicalUrl})};function E(e){let{...t}=e;return l.createElement(s,t)}},8944:function(e,t,n){var l=n(9396),r=n(758),a=n(8960),c=n(4952),o=n(7535);t.A=e=>{let{tags:t}=e;const{tagsPath:n,basePath:i}=(0,c.A)();return(0,l.Y)(r.Fragment,null,t.map(((e,t)=>(0,l.Y)(r.Fragment,{key:e.slug},!!t&&", ",(0,l.Y)(a.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.A)(`/${i}/${n}/${e.slug}`)},e.name)))))}},7894:function(e,t,n){var l=n(758),r=n(8960),a=n(4824);t.A=e=>{let{title:t="",description:n="",pathname:c="",image:o="",children:i=null,canonicalUrl:m=""}=e;const u=(0,a.A)(),{siteTitle:s,siteTitleAlt:p,siteUrl:E,siteDescription:g,siteImage:d,author:x,siteLanguage:h}=u,f={title:t?`${t} | ${s}`:p,description:n||g,url:`${E}${c||""}`,image:`${E}${o||d}`};return l.createElement(l.Fragment,null,l.createElement("html",{lang:h}),l.createElement("title",null,f.title),l.createElement("meta",{name:"description",content:f.description}),l.createElement("meta",{name:"image",content:f.image}),l.createElement("meta",{property:"og:title",content:f.title}),l.createElement("meta",{property:"og:url",content:f.url}),l.createElement("meta",{property:"og:description",content:f.description}),l.createElement("meta",{property:"og:image",content:f.image}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:image:alt",content:f.description}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:title",content:f.title}),l.createElement("meta",{name:"twitter:url",content:f.url}),l.createElement("meta",{name:"twitter:description",content:f.description}),l.createElement("meta",{name:"twitter:image",content:f.image}),l.createElement("meta",{name:"twitter:image:alt",content:f.description}),l.createElement("meta",{name:"twitter:creator",content:x}),l.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),l.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),l.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),m?l.createElement("link",{rel:"canonical",href:m}):null,i)}},2807:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o.p},default:function(){return i}});var l=n(758),r=n(9694);function a(e){const t=Object.assign({h1:"h1",ul:"ul",li:"li",a:"a",hr:"hr",h2:"h2",p:"p",strong:"strong",em:"em",pre:"pre",code:"code",ol:"ol",h3:"h3"},(0,r.RP)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Contents"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"#what-is-go-context"},"Go Context คืออะไร")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"#basic-usage"},"การใช้งานเบื้องต้น")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"#method-in-go-context"},"Method ใน Go Context")),"\n",l.createElement(t.li,null,l.createElement(t.a,{href:"#summary"},"สรุปการใช้งาน Context")),"\n"),"\n",l.createElement(t.hr),"\n",l.createElement("span",{id:"what-is-go-context"},l.createElement(t.h2,null,"Go Context คืออะไร")),"\n",l.createElement(t.p,null,"ลองนึกภาพว่าเราเล่นต่อเลโก้กันอยู่ เราสร้างบ้านหลังใหญ่ มีสวนสวย มีสระว่ายน้ำ แต่ถ้าไม่มีพื้นรองฐาน บ้านของเราจะพังทลายลงมาง่ายๆ"),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Go Context")," ก็เหมือนกับพื้นรองฐานของโปรแกรมภาษา Go ช่วยให้โปรแกรมทำงานได้",l.createElement(t.em,null,"เสถียร รวดเร็ว และเข้าใจง่าย")," ข้อมูลสำคัญต่างๆ ที่โปรแกรมต้องการจะถูกเก็บไว้ใน Context เหมือนกับเก็บของไว้ในกล่อง ช่วยให้หาของได้ง่ายและไม่หาย"),"\n",l.createElement(t.p,null,"ลองจินตนาการว่าโปรแกรมของเราเหมือนกับหุ่นยนต์ที่ทำงานต่างๆ มากมาย หุ่นยนต์แต่ละตัวต้องการข้อมูลที่แตกต่างกัน บางตัวต้องการรู้ว่าผู้ใช้กดปุ่มอะไร บางตัวต้องการรู้ว่าเวลาปัจจุบันคือกี่โมง"),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Go Context")," ช่วยให้หุ่นยนต์เหล่านี้สื่อสารกันง่ายขึ้น โดยไม่ต้องส่งข้อมูลไปมาเอง หุ่นยนต์แต่ละตัวสามารถดึงข้อมูลที่ต้องการจาก Context เหมือนกับหยิบของจากกล่อง ช่วยให้ทำงานได้รวดเร็วและมีประสิทธิภาพ"),"\n",l.createElement(t.hr),"\n",l.createElement("span",{id:"basic-usage"},l.createElement(t.h2,null,"การใช้งานเบื้องต้น")),"\n",l.createElement(t.p,null,"ตัวอย่างการใช้งาน Context กับ net/http ระหว่าง 2 Service"),"\n",l.createElement(t.p,null,"ลองจินตนาการว่าเรามี 2 เว็บเซิร์ฟเวอร์:"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Service A"),": ให้บริการข้อมูลผู้ใช้"),"\n",l.createElement(t.li,null,l.createElement(t.strong,null,"Service B"),": แสดงโปรไฟล์ผู้ใช้"),"\n"),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Service A")," จะดึงข้อมูลผู้ใช้จากฐานข้อมูลและส่งไปยัง Service B"),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Service B")," จะใช้ข้อมูลผู้ใช้เพื่อแสดงโปรไฟล์"),"\n",l.createElement(t.p,null,"เราสามารถใช้ Go Context เพื่อส่งข้อมูลผู้ใช้ระหว่าง 2 Service ดังนี้"),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Service A:")),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},'package main\n\nimport (\n    "context"\n    "encoding/json"\n    "fmt"\n    "net/http"\n)\n\ntype ProfileData struct {\n    ID string\n    Name string\n    Email string\n}\n\nfunc main() {\n    http.HandleFunc("/", getUserProfileHandler)\n    http.ListenAndServe(":8080", nil)\n}\n\nfunc getUserProfileHandler(w http.ResponseWriter, r *http.Request) {\n    // ดึง User ID จาก URL\n    userID := r.URL.Query().Get("userID")\n    if userID == "" {\n        http.Error(w, "missing userID in query parameter", http.StatusBadRequest)\n        return\n    }\n\n    // สร้าง Context ใหม่\n    ctx := context.WithValue(r.Context(), "userID", userID)\n\n    // ส่ง Request ไปยัง Service B\n    resp, err := http.Get(ctx, "http://localhost:8081/profile")\n    if err != nil {\n        http.Error(w, err.Error(), http.StatusInternalServerError)\n        return\n    }\n\n    defer resp.Body.Close()\n\n    if resp.StatusCode != http.StatusOK {\n        http.Error(w, "failed to get profile from Service B", resp.StatusCode)\n        return\n    }\n\n    // อ่านข้อมูลผู้ใช้จาก Service B\n    var profileData UserData\n    if err := json.NewDecoder(resp.Body).Decode(&profileData); err != nil {\n        http.Error(w, err.Error(), http.StatusInternalServerError)\n        return\n    }\n\n    // แสดงข้อมูล profileData\n    fmt.Fprintf(w, "Name: %s\\nEmail: %s", profileData.Name, profileData.Email)\n}\n')),"\n",l.createElement(t.p,null,l.createElement(t.strong,null,"Service B:")),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},'package main\n\nimport (\n    "context"\n    "encoding/json"\n    "fmt"\n    "net/http"\n)\n\ntype ProfileData struct {\n    ID string\n    Name string\n    Email string\n}\n\nfunc main() {\n    http.HandleFunc("/profile", getProfileHandler)\n    http.ListenAndServe(":8081", nil)\n}\n\nfunc getProfileHandler(w http.ResponseWriter, r *http.Request) {\n    // ดึง User ID จาก Context\n    userID, ok := context.Value(r.Context(), "userID").(string)\n    if !ok {\n        http.Error(w, "missing userID in context", http.StatusBadRequest)\n        return\n    }\n\n    // ดึงข้อมูล user จาก database (สมมติ)\n    profileData, err := getUserProfile(userID)\n    if err != nil {\n        http.Error(w, err.Error(), http.StatusInternalServerError)\n        return\n    }\n\n    // แปลงข้อมูล profileData เป็น JSON\n    jsonData, err := json.Marshal(profileData)\n    if err != nil {\n        http.Error(w, err.Error(), http.StatusInternalServerError)\n        return\n    }\n\n    // ส่ง jsonData ไปยัง Client\n    w.Header().Set("Content-Type", "application/json")\n    w.Write(jsonData)\n}\n\nfunc getUserProfile(id string) (ProfileData,error){\n    // ดึงข้อมูล user จาก database\n    return ProfileData{\n        ID: id,\n        Name: "John Doe",\n        Email: "john.doe@gmail.comp",\n    },nil\n}\n\n')),"\n",l.createElement(t.hr),"\n",l.createElement("span",{id:"method-in-go-context"},l.createElement(t.h2,null,"Method ใน Go Context")),"\n",l.createElement(t.ol,null,"\n",l.createElement(t.li,null,l.createElement(t.code,null," context.WithValue(ctx context.Context, key interface{}, value interface{}) context.Context")),"\n"),"\n",l.createElement(t.p,null,"ใช้สำหรับเพิ่มค่าใหม่ลงใน Context"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"ctx คือ Context ที่ต้องการเพิ่มค่า"),"\n",l.createElement(t.li,null,"key คือ key ของค่า"),"\n",l.createElement(t.li,null,"value คือค่าที่จะเพิ่ม"),"\n",l.createElement(t.li,null,"ฟังก์ชันนี้ return Context ใหม่กลับมา"),"\n"),"\n",l.createElement(t.p,null,"ตัวอย่างการใช้งาน"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},'ctx := context.WithValue(context.Background(), "userID", "user123")\n')),"\n",l.createElement(t.ol,{start:"2"},"\n",l.createElement(t.li,null,l.createElement(t.code,null,"context.Value(ctx context.Context, key interface{}) interface{}"),"\nดึงค่าจาก Context"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"ctx คือ Context ที่ต้องการดึงค่า"),"\n",l.createElement(t.li,null,"key คือ key ของค่า"),"\n",l.createElement(t.li,null,"ฟังก์ชันนี้ส่งค่าที่ดึงมา หรือ nil ถ้าไม่มีค่า"),"\n"),"\n",l.createElement(t.p,null,"ตัวอย่างการใช้งาน"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},'userID, ok := context.Value(ctx, "userID").(string)\nif !ok {\n   fmt.Println("missing userID in context")\n} else {\n   fmt.Println("userID:", userID)\n}\n')),"\n",l.createElement(t.ol,{start:"3"},"\n",l.createElement(t.li,null,l.createElement(t.code,null,"context.WithTimeout(ctx context.Context, timeout time.Duration) (context.Context, context.CancelFunc)"),"\nสร้าง Context ใหม่ที่มี timeout"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"ctx คือ Context เริ่มต้น"),"\n",l.createElement(t.li,null,"timeout คือระยะเวลา timeout"),"\n",l.createElement(t.li,null,"ฟังก์ชันนี้ return Context ใหม่และ context.CancelFunc กลับมา"),"\n"),"\n",l.createElement(t.p,null,"ตัวอย่างการใช้งาน"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},"ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)\ndefer cancel()\n")),"\n",l.createElement(t.ol,{start:"4"},"\n",l.createElement(t.li,null,l.createElement(t.code,null,"context.Background() context.Context"),"\nเป็น Context เริ่มต้นที่ว่างเปล่า ไม่มีค่าใดๆ และไม่สามารถยกเลิกได้ มักใช้เป็น Context เริ่มต้นสำหรับโปรแกรม Go"),"\n"),"\n",l.createElement(t.p,null,"ตัวอย่างการใช้งาน"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},'   // สร้าง Context ใหม่โดยใช้ context.Background() เป็น Context เริ่มต้น\n   ctx := context.Background()\n\n   // สร้าง Value ใหม่ ด้วย key และ value โดย ใช้ context.WithValue()\n   ctx2 := context.WithValue(ctx, "key", "value")\n\n   fmt.Println(context.Value(ctx2, "key")) // แสดงค่า "value"\n')),"\n",l.createElement(t.ol,{start:"5"},"\n",l.createElement(t.li,null,l.createElement(t.code,null,"context.Done(ctx context.Context) <-chan struct{}"),"\nเป็นฟังก์ชันที่ส่ง channel ที่จะปิดเมื่อ Context ถูกยกเลิก"),"\n"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"รอจนกว่า Context จะถูกยกเลิก: โปรแกรมจะรอจนกว่า Context จะถูกยกเลิกก่อนที่จะดำเนินการต่อ"),"\n",l.createElement(t.li,null,"ใช้สำหรับงานที่ต้องทำงานเมื่อ Context ถูกยกเลิก: สามารถใช้ channel ที่ส่งกลับมาเพื่อทำงานที่ต้องทำงานเมื่อ Context ถูกยกเลิก"),"\n"),"\n",l.createElement(t.p,null,"ตัวอย่างการใช้งาน"),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-go"},'    // สร้าง Context ใหม่โดยใช้ context.WithCancel()\n   ctx, cancel := context.WithCancel(context.Background())\n\n   // ทำงานบางอย่างใน goroutine แยก\n   go func() {\n       <-ctx.Done() // รอจนกว่า Context จะถูกยกเลิก\n       fmt.Println("Context has been canceled")\n   }()\n\n   // รอ 5 วินาที\n   time.Sleep(5 * time.Second)\n\n   // ยกเลิก Context\n   cancel()\n\n   // รอให้ goroutine ทำงานเสร็จ\n   time.Sleep(1 * time.Second)\n')),"\n",l.createElement(t.hr),"\n",l.createElement("span",{id:"summary"},l.createElement(t.h2,null,"สรุปการใช้งาน Context")),"\n",l.createElement(t.h3,null,"ประโยชน์"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"การสื่อสารระหว่าง Middleware และ Handler: ช่วยให้ Middleware ส่งข้อมูลไปยัง Handler โดยไม่ต้องใช้ global variables หรือ arguments ของ function"),"\n",l.createElement(t.li,null,"การจัดการ Error: ช่วยให้ Middleware ส่ง Error ไปยัง Handler โดยไม่ต้องใช้ return values หรือ exceptions"),"\n",l.createElement(t.li,null,"การยกเลิก Request: ช่วยให้ Client สามารถยกเลิก Request ได้โดยไม่ต้องรอจนกว่า Request จะเสร็จสิ้น"),"\n",l.createElement(t.li,null,"การตั้งค่า Timeout: ช่วยให้ตั้งค่าเวลาสูงสุดที่ Request สามารถทำงานได้"),"\n",l.createElement(t.li,null,"การ Dependency Injection: ช่วยให้ inject dependencies ไปยัง Middleware และ Handler"),"\n",l.createElement(t.li,null,"การแบ่ง Code: ช่วยให้แบ่ง Code ออกเป็นโมดูลแยกต่างหากและสื่อสารกันผ่าน Context"),"\n"),"\n",l.createElement(t.h3,null,"Use Case"),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"Web Application: ใช้ Context เพื่อส่งข้อมูลระหว่าง Middleware และ Handler จัดการ Error ยกเลิก Request ตั้งค่า Timeout และ inject dependencies"),"\n",l.createElement(t.li,null,"Microservice: ใช้ Context เพื่อสื่อสารระหว่างไมโครเซอร์วิส จัดการ Error ยกเลิก Request ตั้งค่า Timeout และ inject dependencies"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,r.RP)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},o=n(5869);function i(e){return l.createElement(o.A,e,l.createElement(c,e))}o.A}}]);
//# sourceMappingURL=component---480800170-content-file-path-content-posts-what-is-go-context-index-mdx-edc4fc249176134d8993.js.map