import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { publicProcedure, router } from './trpc';
import { TRPCError } from '@trpc/server';
import { db } from '@/db';

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
});
// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
