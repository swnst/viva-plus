import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    Outlet,
    Link,
    createRootRouteWithContext,
    useRouter,
    useRouterState,
    HeadContent,
    Scripts,
} from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import type { ReactNode } from "react";

import appCss from "../style.css?url";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";

import faviconUrl from "@/assets/my-icon.svg";

function NotFoundComponent() {
    return (
        <div className="flex min-h-svh items-center justify-center bg-background px-4">
            <div className="max-w-md text-center">
                <h1 className="text-7xl font-bold text-foreground font-display">404</h1>
                <h2 className="mt-4 text-xl font-semibold text-foreground">ไม่พบหน้าที่ต้องการ</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                    หน้าที่คุณกำลังค้นหาไม่มีอยู่หรือถูกย้ายไปแล้ว
                </p>
                <div className="mt-6">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        กลับหน้าหลัก
                    </Link>
                </div>
            </div>
        </div>
    );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
    console.error("Root Error Boundary Caught:", error);
    const router = useRouter();

    return (
        <div className="flex min-h-svh items-center justify-center bg-background px-4">
            <div className="max-w-md text-center">
                <h1 className="text-xl font-semibold tracking-tight text-foreground">
                    เกิดข้อผิดพลาดในการโหลดหน้าเว็บ
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                    โปรดลองใหม่อีกครั้ง หรือกลับสู่หน้าหลัก
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                    <button
                        onClick={() => {
                            router.invalidate();
                            reset();
                        }}
                        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 cursor-pointer"
                    >
                        ลองใหม่
                    </button>
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                    >
                        กลับหน้าหลัก
                    </Link>
                </div>
            </div>
        </div>
    );
}

/* ── Scroll Progress Bar ── */
function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

    return (
        <motion.div
            style={{ scaleX }}
            className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-gold origin-left z-50"
        />
    );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
    head: () => ({
        meta: [
            { charSet: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
            { title: "VivaPlus" },
            { name: "description", content: "ViVa+ เครื่องดื่มเพื่อสุขภาพจากผลไม้ไทยแท้ เสาวรส มะม่วงหาวมะนาวโห่ ใบชาเขียวไทย" },
            { property: "og:title", content: "VivaPlus" },
            { property: "og:description", content: "เครื่องดื่มเพื่อสุขภาพจากผลไม้ไทยแท้ โดย TCP" },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary_large_image" },
        ],
        links: [
            { rel: "stylesheet", href: appCss },
            { rel: "icon", href: faviconUrl, type: "image/svg+xml" },
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Work+Sans:wght@300;400;500;600;700&family=IBM+Plex+Sans+Thai:wght@300;400;500;600;700&display=swap" },
        ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
    return (
        <html lang="th">
            <head>
                <HeadContent />
            </head>
            <body className="antialiased min-h-svh flex flex-col">
                {children}
                <Scripts />
            </body>
        </html>
    );
}

function RootComponent() {
    const { queryClient } = Route.useRouteContext();
    const location = useRouterState({ select: (s) => s.location.pathname });

    return (
        <QueryClientProvider client={queryClient}>
            <Preloader />
            <CustomCursor />
            <ScrollProgress />
            <AnimatePresence mode="wait">
                <motion.div
                    key={location}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                    <Outlet />
                </motion.div>
            </AnimatePresence>
        </QueryClientProvider>
    );
}