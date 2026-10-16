# Royal Class Group (Next.js)

Next.js App Router recreation of the [Royal Class Group](https://royal-class-group.base44.app) Base44 React site.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Home
- `/business-center` — Business Centres
- `/properties` — Properties
- `/investments` — Investments
- `/about` — About
- `/contact` — Contact

## Source note

Design, copy, colors, fonts, and assets were ported from the live Base44 app bundle (`appId: 69aa803e3e7f04cf85d0eb74`). To pull the original Vite/React source instead:

```bash
npx base44 login
npx base44 eject --app-id 69aa803e3e7f04cf85d0eb74 -p ../base44-react -y
```
