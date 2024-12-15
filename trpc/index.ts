import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { privateProcedure, publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from '@/db';
import { z } from 'zod';
export const appRouter = router({
  // entry point for all the  routers
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    console.log(user, 'user in the router');

    if (!user.id || !user.email) throw new TRPCError({ code: 'UNAUTHORIZED' });

    // check if the user is in the database
    const dbUser = await db.user.findFirst({
      where: { id: user.id },
    });
    if (!dbUser) {
      // CREATE THE USER IN DB
      await db.user.create({
        data: { id: user.id, email: user.email },
      });
    }
    // end of the authcallback function
    return {
      success: true,
      message: 'User authenticated successfully',
      user: {
        id: user.id,
        email: user.email,
      },
    };
  }),
  getUserFiles: privateProcedure.query(async ({ ctx }) => {
    const { userId } = ctx;
    // gettting the userId from the trpc==>index.ts where privaeProcedure defined and get the userId from there

    return await db.file.findMany({ where: { userId } });
  }),
  // private Procedure has the user and userId and we get it by the ctx[context]
  deleteFile: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;
      const file = await db.file.findFirst({
        where: { id: input.id, userId },
      });
      // trpc know here what data is comes and then pass it tot he dashboard.tsx componenet
      if (!file) throw new TRPCError({ code: 'NOT_FOUND' });
      await db.file.delete({
        where: { id: input.id },
      });
      return file;
    }),
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
