# Routes

โปรเจกต์นี้ใช้ TanStack Start ซึ่งทำงานแบบ **File-based routing** 
ทุกไฟล์ `.tsx` ในโฟลเดอร์นี้คือกำหนด Route ของระบบ
ห้ามสร้างโฟลเดอร์ `src/pages/` หรือ `app/layout.tsx` เด็ดขาด (นั่นเป็นมาตรฐานของ Next.js/Remix)

## Conventions

| File | URL |
| --- | --- |
| `index.tsx` | `/` |
| `about.tsx` | `/about` |
| `users/index.tsx` | `/users` |
| `users/$id.tsx` | `/users/:id` (Dynamic Segment) |
| `__root.tsx` | App Shell (ครอบทุกหน้า ต้องมี `<Outlet />` เสมอ) |

**หมายเหตุ:** ไฟล์ `routeTree.gen.ts` จะถูกสร้างโดยอัตโนมัติ ห้ามแก้ไขด้วยตัวเอง