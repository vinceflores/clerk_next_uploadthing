# Next.js Template

This template provides a starting point for building web applications with Next.js, Clerk for authentication, Uploadthing for file uploads, ShadCN UI for styled components, and Prisma for database management.

## Features

- **Next.js**: A React framework for server-side rendering and building static websites.
- **Clerk**: User authentication and management.
- **Uploadthing**: Seamless file upload handling.
- **ShadCN UI**: Pre-styled and customizable UI components.
- **Prisma**: Type-safe database client for data modeling and querying.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js) or an alternative package manager like Yarn, pnpm, or Bun.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/nextjs-template.git
   cd nextjs-template
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Running the Development Server

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Editing the Project

- Modify the main entry point at `app/page.tsx`.
- The project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize and load the [Geist](https://vercel.com/font) font family by Vercel.

## Configuration

### Clerk Setup

1. Create a Clerk account at [Clerk](https://clerk.dev/).
2. Obtain your Clerk API keys.
3. Add the following environment variables to your `.env.local` file:

   ```env
   NEXT_PUBLIC_CLERK_FRONTEND_API=your-frontend-api-key
   CLERK_API_KEY=your-backend-api-key
   ```

### Uploadthing Setup

1. Sign up for Uploadthing at [Uploadthing](https://uploadthing.com/).
2. Obtain your API key and configure it in `.env.local`:

   ```.env.local
   UPLOADTHING_API_KEY=your-uploadthing-api-key
   ```

### ShadCN UI

- Customize the UI components in the `components/ui` directory.
- Refer to the [ShadCN UI documentation](https://shadcn.dev/) for detailed usage and customization.

### Prisma Setup

1. If you are not using `SQlite`. Configure your database connection in the `.env` file, separate from `.env.local`:

   ```env
   DATABASE_URL=your-database-connection-url
   ```

2. Define your schema in `prisma/schema.prisma` and run migrations:

   ```bash
   npx prisma migrate dev
   ```

3. Use Prisma Client in your application:

   ```typescript
   import { prisma } from "@/lib/prisma-singleton";

   // Example usage
   const users = await prisma.user.findMany();
   ```

## Learn More

To learn more about the technologies used in this template, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Clerk Documentation](https://clerk.dev/docs) - Learn about user authentication with Clerk.
- [Uploadthing Documentation](https://docs.uploadthing.com/) - Learn how to handle file uploads.
- [ShadCN UI Documentation](https://shadcn.dev/) - Explore and customize UI components.
- [Prisma Documentation](https://www.prisma.io/docs/) - Learn about data modeling and querying with Prisma.

## Deployment

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Connect your repository to Vercel.
3. Follow the Vercel deployment guide: [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## Contributing

Feel free to submit issues and pull requests to improve this template. Your contributions are always welcome!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
