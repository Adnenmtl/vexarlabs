import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { verifyRecaptchaToken, isRecaptchaValid } from "./recaptcha";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  recaptcha: router({
    verify: publicProcedure
      .input(z.object({
        token: z.string(),
        action: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const result = await verifyRecaptchaToken(input.token);
        const isValid = isRecaptchaValid(result, 0.5);
        
        return {
          success: isValid,
          score: result.score,
          action: result.action,
          errorCodes: result['error-codes'],
        };
      }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),
});

export type AppRouter = typeof appRouter;
