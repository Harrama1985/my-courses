# Resume — شنو اتفقنا عليه

ملف باش chat جديد يكمل من هنا. قراه قبل ما تكتب درس.
التفاصيل ديال الأسلوب كاينة فـ `NOTES.md`. السبب ديال التعلم فـ `MISSION.md`.

## شكون

- Frontend: React، Next.js، JavaScript، TypeScript، HTML/CSS، REST، Git.
- عندها شوية Node.js. ما نبداوش syntax ديال JS من الصفر.
- الـ server والـ evals: Node.js. Python خارج.
- اللغة ديال الشرح: دارجة مغربية، حروف عربية، بسيطة.
- المصطلح التقني يبقى إنجليزي. ما يتترجمش.

## المصدر

الخريطة من الريبو:

https://github.com/Hendrixer/ai-engineering-fundamentals

المنتج: `canvas` ديال Excalidraw + `chat` كيولي `agent` كيرسم بـ `elements`، ماشي `image`.
الملاحظات الإنجليزية فـ `lessons/*/index.md` ديال الريبو. نشرح بالدارجة والرسوم. ما ننسخوش النص.

فصل Node.js زيدناه حنا، قبل Cloudflare، حيت الـ server ديالها Node.
Cloudflare Workers ماشي نفس Node. الفرق يتشرح ملي نوصلو للـ agent.

## English بشوية

الدارجة للجملة. كل درس كيزيد دفعة صغيرة ديال كلمات English، زيادة على المصطلح التقني.
اللائحة والمعاني فـ `ENGLISH.md`. ما نكتبوش فقرة إنجليزية.

الدفعة ديال الدرس 3: `run` `start` `stop` `terminal` `command` `folder` `same` `cd` `print` `error` `first` `then` `because` `top` `Enter`.

## القاعدة ديال الكلمات

الدارجة للجملة. الكلمة التقنية بالإنجليزية داخل:

`<bdi class="t" dir="ltr">function</bdi>`

الصفحة `dir="rtl"`. الـ code داخل `<pre dir="ltr">`.
ما تحطّش إنجليزية عريانة وسط جملة عربية.

| ما تقولش | قولي |
|---|---|
| دالة | `function` |
| متصفح | `browser` |
| لوحة | `canvas` |
| شات | `chat` |
| موديل | `model` |
| أداة / أدوات | `tool` / `tools` |
| عنصر / عناصر | `element` / `elements` |
| سيرفر | `server` |
| ملف | `file` |
| كود | `code` |
| حقل | `field` |
| مفتاح | `key` |
| نداء | `call` |
| سياق | `context` |
| صفحة | `page` |
| شبكة | `network` |
| مكتبة | `library` |
| إطار | `framework` |
| بورت | `port` |
| مكوّن | `component` |
| مستطيل | `rectangle` |
| سهم | `arrow` |
| نص | `text` |
| صورة | `image` |
| كورس | `course` |
| رسالة | `message` |
| طلب | `request` |
| جواب | `response` |
| مستخدم | `user` |
| بيانات | `data` |
| زر | `button` |
| شاشة | `screen` |
| تطبيق | `app` |
| واجهة | `UI` |
| مثال | `example` |
| لائحة | `list` |
| عنوان | `label` |
| رقم ديال القياس | `score` |
| شكل | `schema` |

إلا بقات كلمة تقنية بالدارجة، بدّلها. هي طلبات الحد الأقصى.

## كيفاش الدرس كيتبنى

مفهوم واحد. بطيء. مقارنة مع React / Next.js.
الترتيب: شنو كنتعلمو، علاش، دارجة، تشبيه، رسم، خطوات، code صغير، مقارنة React، example واقعي، تمرين (الحل مخبّي)، quiz، تحدي، أغلاط، recap.

الألوان: Frontend أزرق، Backend أخضر، Database أصفر، Model بنفسجي، API أحمر، Data برتقالي.

## الفكرة ديال الدرس 1

الـ `model` محرّك جاهز. هي كتركّب الطوموبيل: `context`، `tools`، `evals`، `reliability`.
الـ `tool` هي `function`. الـ `model` كيرجّع `data`. الـ `canvas` كيرسم.
الحلقة: Build → Eval → Improve → Eval. `change` واحد من بعد القياس.

## فين وصلنا

جاهزين:

- `index.html` — خريطة 12 درس ديال الريبو + فصل Node
- `lessons/0002-build-measure-improve.html` — lesson 1، تعاود بالتفصيل
- `lessons/0003-nodejs-vs-browser.html` — lesson 2: Node runtime، ماشي language جديدة
- `lessons/0004-run-a-node-file.html` — الدرس 3: `node file.js` من الـ terminal، same folder، print ثم stop
- `reference/run-a-file.html` — ورقة قصيرة ديال نفس الفكرة
- `ENGLISH.md` — كلمات English ديال كل درس
- `assets/course.css` و `assets/course.js`
- `NOTES.md` ، `RESOURCES.md` ، `MISSION.md`

ما زال ما تكتبوش: Cloudflare Agent، chat experience، evals، scorers، context، tools المتقدمة، RAG، Gen UI، human-in-the-loop، architectures، data flywheel.

## الجاي

الدرس الجاي: `npm`. مفهوم واحد. شنو كيدير فالـ project، بحال اللي كتعرفيه من Next.js. من بعد HTTP، من بعد env. Cloudflare Agent من بعد هاد الثلاثة.
ما نعاودوش «شنو هو AI Engineer» ولا «Node ماشي language» إلا بان سوء فهم.
كل درس كيزيد دفعة English صغيرة، وكتتسجّل فـ `ENGLISH.md`.
