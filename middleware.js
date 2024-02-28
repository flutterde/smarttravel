import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
    publicRoutes: ["/", "/dashboard", "/auth"],
  // publicRoutes: (req) => !req.url.includes(""),
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
