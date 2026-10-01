# AI Engineering Fundamentals — Resources

مصادر موثوقة. كنشرو منها، ماشي من فيديو مدفوع.

## Knowledge

- [Repo: Hendrixer/ai-engineering-fundamentals](https://github.com/Hendrixer/ai-engineering-fundamentals)
  الخريطة العملية: 12 درس، لوحة Excalidraw + agent. الملاحظات فـ `lessons/*/index.md`. نشرح بالدارجة، ما ننسخوش النص.
- [12-Factor Agents](https://github.com/humanlayer/12-factor-agents)
  مبادئ الـ agent: tools، context، evals، control flow. Use for: الدرس 1 ومن بعد المعمارية.
- [Introduction to Node.js](https://nodejs.org/learn/getting-started/introduction-to-nodejs)
  Node هو runtime: نفس JS، خارج browser. Use for: درس Node مقابل browser.
- [Run Node.js scripts from the command line](https://nodejs.org/learn/command-line/run-nodejs-scripts-from-the-command-line)
  `node app.js` من نفس الـ folder. Use for: درس run a file. ما نشرحوش shebang ولا `node --run` فهاد الدرس.
- [Node.js About](https://nodejs.org/en/about)
  event loop و I/O غير حاجز. Use for: علاش Node مناسب لـ APIs و streaming.
- [Cloudflare Agents](https://developers.cloudflare.com/agents/)
  الـ runtime الرسمي: Agent class، state، WebSockets، tools. Use for: فصل Cloudflare Agent و Chat.
- [Build a chat agent](https://developers.cloudflare.com/agents/getting-started/build-a-chat-agent/)
  `AIChatAgent` + tools + approval. Use for: فصل Chat Experience.
- [Chat agents: AIChatAgent و useAgentChat](https://developers.cloudflare.com/agents/communication-channels/chat/chat-agents/)
  الـ API الحالي للواجهة. Use for: ربط React بالـ agent.
- [Add agents to an existing project](https://developers.cloudflare.com/agents/getting-started/add-to-existing-project/)
  كيفاش تزيدي agent لتطبيق موجود. Use for: الهدف العملي ديال الكورس.
- [Chip Huyen — The AI Engineering Stack](https://newsletter.pragmaticengineer.com/p/the-ai-engineering-stack)
  تعريف التخصص: بناء تطبيقات فوق foundation models. Use for: Introduction.
- [OpenAI — Working with evals](https://developers.openai.com/api/docs/guides/evals)
  علاش evals ضرورية لتطبيقات LLM. Use for: Evals & Scoring. نتحقق قبل كل درس لأن المنصة كتتحرّك.
- [Upstash Vector + AI SDK](https://upstash.com/docs/vector/integrations/ai-sdk)
  RAG بـ TypeScript و vector index. Use for: فصل RAG.
- [Upstash embedding models](https://upstash.com/docs/vector/features/embeddingmodels)
  كيفاش النص كيولي vector. Use for: شرح embeddings وقت RAG.
- [Vercel AI SDK](https://ai-sdk.dev/docs/introduction)
  `useChat` / structured output / tools من جهة TypeScript. Use for: مقارنة مع `useAgentChat`.

## Wisdom (Communities)

- [Cloudflare Discord / Developers](https://discord.cloudflare.com/)
  أسئلة runtime و Workers. Use for: أخطاء deploy و bindings.

## Gaps

- ما كنستعملوش transscript ديال Frontend Masters كمصدر. الخريطة العامة برك. إلا خاص تفصيل من المحاضرة، نرجعو للـ docs الرسمية فوق.
