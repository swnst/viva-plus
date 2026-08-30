import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useLenis } from "@/lib/lenis";
import "@/lib/i18n";

function NotFoundComponent() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-[#FFF8F9] px-4">
      <div className="max-w-md text-center bg-white p-8 rounded-3xl border border-rose-100 shadow-soft-rose">
        <h1 className="text-7xl font-bold text-rose-500 font-display">404</h1>
        <h2 className="mt-4 text-xl font-bold text-rose-950">ไม่พบหน้าที่ต้องการ</h2>
        <p className="mt-2 text-sm text-rose-900/70">
          หน้าที่คุณกำลังค้นหาไม่มีอยู่หรือถูกย้ายไปแล้ว
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gradient-cta px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 shadow-soft-rose"
          >
            กลับสู่หน้าหลัก Viva Plus
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
    <div className="flex min-h-svh items-center justify-center bg-[#FFF8F9] px-4">
      <div className="max-w-md text-center bg-white p-8 rounded-3xl border border-rose-100 shadow-soft-rose">
        <h1 className="text-xl font-bold text-rose-950">
          เกิดข้อผิดพลาดในการโหลดหน้าเว็บ
        </h1>
        <p className="mt-2 text-sm text-rose-900/70">
          โปรดลองใหม่อีกครั้ง หรือกลับสู่หน้าหลัก
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-gradient-cta px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 shadow-soft-rose cursor-pointer"
          >
            ลองใหม่
          </button>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full border border-rose-200 bg-white px-6 py-2.5 text-sm font-semibold text-rose-950 transition-colors hover:bg-rose-50"
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
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-400 via-rose-500 to-rose-600 origin-left z-[9999]"
    />
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useRouterState({ select: (s) => s.location.pathname });

  // Initialize Lenis Smooth Scroll
  useLenis();

  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <AnimatePresence mode="wait">
        <motion.div
          key={location}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </QueryClientProvider>
  );
}