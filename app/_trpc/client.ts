import { AppRouter } from '@/trpc';
import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>({});
//client side trpc setup for the queries initialises the trpc client
