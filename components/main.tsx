type InterviewQuestion = {
  question: string;
  answer: string;
};

const interviewQuestions: InterviewQuestion[] = [
  {
    question: "Tell me about yourself",
    answer:
      "I'm Jon Angelo Comia, a software developer with over nine years of experience building web applications using Next.js, React, Angular, Node.js, MongoDB, PostgreSQL, and Supabase. I have worked on enterprise platforms, content management systems, dashboards, website plugins, serverless backends, and customer-facing applications. My responsibilities have included frontend and backend development, application architecture, authentication, database design, API integrations, testing, deployment, code reviews, and production support. At the senior level, I focus not only on delivering features but also on maintainability, performance, security, and helping the team make good technical decisions.",
  },
  {
    question: "How would you architect a modern full-stack application?",
    answer:
      "I would first understand the business requirements, expected traffic, security requirements, team size, and future growth. For many applications, I would start with a modular monolith because it is easier to develop, test, deploy, and monitor than microservices. I might use Next.js for the frontend and backend-for-frontend layer, Node.js for more complex backend services, and PostgreSQL, Supabase, or MongoDB depending on the data requirements. I would organize the system into domain-focused modules, add input validation, centralized error handling, logging, monitoring, automated tests, CI/CD, and a rollback strategy.",
  },
  {
    question:
      "What is the difference between Server Components and Client Components in Next.js?",
    answer:
      "Server Components render on the server and are the default in the Next.js App Router. I use them for data fetching, accessing backend services, protecting secrets, and rendering content that does not require browser interaction. Client Components are needed when I use state, event handlers, effects, context, or browser APIs such as window and localStorage. I keep the client boundary as low as possible so the application sends less JavaScript to the browser. A common pattern is for a Server Component to fetch the data and pass serializable values to a smaller interactive Client Component.",
  },
  {
    question: "When would you use Server Actions instead of Route Handlers?",
    answer:
      "I use Server Actions for mutations that are closely connected to the Next.js interface, such as submitting forms, updating profiles, or deleting dashboard records. They reduce the need to create a separate internal API endpoint and work well with cache revalidation. I use Route Handlers when I need a reusable HTTP API, webhook endpoint, external integration, mobile client support, file response, or explicit control over HTTP methods and headers. In both cases, I validate the input, authenticate the request, check authorization, and avoid trusting values sent by the client.",
  },
  {
    question: "How do you decide between static and dynamic rendering?",
    answer:
      "I use static rendering for shared content that changes infrequently, such as landing pages, documentation, and public product information. I use dynamic rendering for personalized or request-specific content such as user dashboards, permission-based records, and frequently changing data. For content that changes occasionally, I use caching and revalidation so the application gets the performance benefits of static rendering while still keeping the content updated. I make this decision per route or per data source rather than applying one rendering strategy to the entire application.",
  },
  {
    question: "How do you optimize a Next.js application?",
    answer:
      "I start by measuring the application using bundle analysis, Core Web Vitals, server response times, network requests, and database query performance. I keep components server-side unless they require client-side behavior, dynamically import expensive components, optimize images and fonts, paginate large datasets, and prevent sequential data-fetching waterfalls. I also check for oversized API responses, unnecessary React rendering, repeated requests, and missing database indexes. I measure again after making changes to confirm that the optimization actually improved performance.",
  },
  {
    question: "How do you prevent unnecessary React re-renders?",
    answer:
      "I place state as close as possible to the components that use it and avoid putting frequently changing values into a large global context. I split large components, keep props stable, and avoid unnecessary state updates inside effects. I use React.memo, useMemo, and useCallback only when profiling shows that they solve a real performance issue because using them everywhere can make the code more complicated. I also make sure that derived values are calculated correctly instead of being stored as duplicate state.",
  },
  {
    question:
      "How would you safely break down a 4,300-line React component?",
    answer:
      "I would avoid rewriting the entire component at once because that creates a high regression risk. First, I would add tests around the most important existing behavior. I would then identify clear responsibilities such as forms, tables, modals, charts, API calls, validation, and state management. I would extract presentational components first, followed by custom hooks for stateful logic and service functions for API communication. I would make small pull requests and confirm that behavior remains unchanged after every extraction.",
  },
  {
    question: "How do React and Angular differ?",
    answer:
      "React is primarily a UI library that gives the team flexibility in choosing routing, forms, state management, and other supporting tools. Angular is a complete framework with built-in solutions for dependency injection, routing, forms, HTTP services, and application structure. I prefer React or Next.js when flexibility, server rendering, and a component-driven ecosystem are important. Angular works well for large enterprise applications where strong conventions and consistent project structure help multiple teams work together. The right choice depends on the requirements, existing codebase, and team experience.",
  },
  {
    question: "What are Angular Signals, and when would you use them?",
    answer:
      "Angular Signals are reactive values that notify their consumers when their values change. I use signals for local or feature-level state, computed values, and state that maps naturally to the component template. For complex asynchronous workflows involving cancellation, multiple events, or streams, I may still use RxJS. I do not replace every observable with a signal automatically. I decide based on whether the value represents current application state or an ongoing asynchronous stream.",
  },
  {
    question: "Explain dependency injection in Angular",
    answer:
      "Dependency injection allows a component or service to receive its dependencies instead of constructing them directly. For example, a component can inject an authentication service without knowing how that service stores sessions or communicates with the backend. This improves separation of responsibilities and makes testing easier because the real service can be replaced with a mock implementation. I normally use root-level providers for application-wide functionality and more specific providers when a dependency needs a limited lifecycle or feature-specific behavior.",
  },
  {
    question: "Explain the Node.js event loop",
    answer:
      "Node.js uses an event-driven runtime that allows it to handle many I/O operations without blocking while waiting for each operation to finish. This makes it effective for APIs, database operations, real-time applications, and external integrations. However, CPU-intensive synchronous work can block the event loop and delay every other request handled by that process. I avoid large synchronous operations inside request handlers and move CPU-heavy work to worker threads, background jobs, or another service when necessary.",
  },
  {
    question: "When would you use Worker Threads in Node.js?",
    answer:
      "I use Worker Threads for CPU-intensive JavaScript work such as large calculations, processing large files, image manipulation, or parsing large datasets. They allow the work to run outside the main event loop. I would not normally use Worker Threads for database or external API requests because Node.js already handles asynchronous I/O efficiently. For long-running operations that require retries and independent scaling, I would usually use a queue and a separate worker process.",
  },
  {
    question: "How do you design a reliable REST API?",
    answer:
      "I use clear resource names, consistent endpoints, correct HTTP methods, and meaningful status codes. I validate input at the API boundary and return a consistent error structure without exposing sensitive implementation details. For large collections, I include filtering, sorting, and pagination. I also consider authentication, authorization, rate limiting, API versioning, request correlation IDs, structured logging, and documentation. For operations that may be retried, such as payments or webhooks, I use idempotency keys or database constraints to prevent duplicate processing.",
  },
  {
    question:
      "What is the difference between authentication and authorization?",
    answer:
      "Authentication determines who the user is, while authorization determines what that user is allowed to do. For example, a session may confirm the user's identity, but the application must still determine whether that user can access a particular company, transaction, or administrative action. I enforce authorization on the server or database rather than relying only on hidden interface elements. With Supabase, I can combine authentication with PostgreSQL Row Level Security to enforce data access rules.",
  },
  {
    question: "Explain Row Level Security in Supabase",
    answer:
      "Row Level Security allows PostgreSQL to control which rows a user can select, insert, update, or delete. For example, a policy can allow users to access a record only when its user_id matches auth.uid(). I create policies for each required operation and test authenticated, unauthenticated, administrative, and cross-user scenarios. I enable RLS on tables exposed through the API and never expose the Supabase service-role key in browser code because it can bypass normal RLS policies.",
  },
  {
    question: "How do you troubleshoot a slow PostgreSQL query?",
    answer:
      "I reproduce the query with realistic data and inspect its execution plan using EXPLAIN or EXPLAIN ANALYZE. I look for sequential scans, expensive joins, unnecessary sorting, repeated subqueries, and returning more data than the application needs. I review indexes on filtering, joining, and ordering columns, but I do not index every column because indexes increase storage usage and write costs. I also check for N+1 queries, expensive RLS policies, missing pagination, and poor connection handling. After making changes, I measure the query again.",
  },
  {
    question: "Why is database connection pooling important?",
    answer:
      "Opening a new database connection for every request is expensive and can exhaust the database connection limit. A pool reuses a controlled number of connections across multiple requests. In a long-running Node.js server, I create the pool once and reuse it instead of creating it inside every request handler. In serverless environments, I use a serverless-compatible pooler because multiple short-lived function instances can otherwise create too many connections. I also configure connection limits, timeouts, error handling, and graceful shutdown.",
  },
  {
    question:
      "When would you choose MongoDB instead of a relational database?",
    answer:
      "I consider MongoDB when the application has flexible or evolving document structures, hierarchical data that maps naturally to JSON, or records that are commonly loaded as complete documents. It can work well for content, configuration, activity records, and applications where related values are usually accessed together. I prefer PostgreSQL when the system requires complex joins, strict relationships, extensive reporting, or strong relational constraints. I choose the database based on the access patterns and consistency requirements rather than selecting one database for every project.",
  },
  {
    question:
      "What is the difference between embedding and referencing in MongoDB?",
    answer:
      "Embedding stores related data inside the same document, while referencing stores the related record separately and connects it using an identifier. I embed data when it belongs to the parent, has a limited size, and is normally read or updated together with the parent. I use references when the related data is large, shared by multiple records, updated independently, or has a many-to-many relationship. The decision should be based on the application's read and write patterns because MongoDB schema design is mainly driven by how the data will be accessed.",
  },
  {
    question: "How do MongoDB indexes work?",
    answer:
      "Indexes allow MongoDB to find and sort documents without scanning every document in a collection. I create indexes for fields commonly used in filters, sorting, lookups, and uniqueness checks. For queries that use multiple fields together, I consider compound indexes and pay attention to the order of the fields. I verify index usage using explain rather than assuming the index is being used. I also avoid unnecessary indexes because each index consumes storage and adds overhead to inserts and updates.",
  },
  {
    question: "What does lean() do in Mongoose?",
    answer:
      "The lean method tells Mongoose to return plain JavaScript objects instead of full Mongoose documents. This reduces memory usage and processing overhead, which is useful for read-only queries where I do not need document methods, change tracking, virtuals, or save functionality. I commonly use lean for lists, reports, and API responses. I avoid it when I need Mongoose document behavior or when the application depends on virtual properties that are not specifically configured for lean results.",
  },
  {
    question: "How do you prevent duplicate records in MongoDB?",
    answer:
      "I enforce uniqueness at the database level using a unique index instead of relying only on an application-level check. Checking whether a record exists before inserting it is not enough because two requests can pass the check at the same time. I catch duplicate key errors and return an appropriate response to the client. For operations that may be retried, I can also store an idempotency key with a unique index to ensure that the same operation is processed only once.",
  },
  {
    question: "When would you use MongoDB transactions?",
    answer:
      "I use a transaction when multiple database operations must either all succeed or all fail together. For example, creating a transaction record and updating an associated balance may need to be atomic. I keep transactions short, avoid external API calls inside them, and handle retries where appropriate. I do not use transactions automatically for every operation because a single-document write is already atomic in MongoDB. Good document design can often reduce the need for multi-document transactions.",
  },
  {
    question: "How would you troubleshoot a slow MongoDB query?",
    answer:
      "I reproduce the query with realistic data and inspect it using explain with execution statistics. I check whether MongoDB is using an index, how many documents it examines, how many it returns, and whether it performs an in-memory sort. I review the query shape, compound index order, pagination strategy, projections, and document size. I also check for repeated populate operations, unbounded arrays, N+1 queries, and regex searches that cannot use an index effectively. I measure the query again after making changes.",
  },
  {
    question: "How do you handle database migrations with MongoDB?",
    answer:
      "Even though MongoDB has a flexible schema, application data still needs controlled migrations when the document structure changes. I create versioned migration scripts that can be reviewed, tested, and run safely in each environment. For large collections, I process documents in batches and make the migration resumable. When possible, I use a backward-compatible deployment approach where the application can temporarily support both the old and new document formats. I also take backups and define a rollback or recovery plan before changing production data.",
  },
  {
    question: "How do you prevent race conditions when updating data?",
    answer:
      "I avoid reading a value, calculating a new value in the application, and then updating it without protection because multiple requests may overwrite one another. Depending on the database, I use atomic update operators, transactions, unique constraints, row locks, or optimistic concurrency with a version field. For repeatable operations, I use idempotency keys. Client-side button disabling can improve the user experience, but business-critical protection must be enforced on the server or database.",
  },
  {
    question: "What is your testing strategy for a full-stack application?",
    answer:
      "I use unit tests for business logic, validation, formatters, and utility functions. I use component tests for important interface behavior and integration tests for API routes, authentication, database access, and interactions between modules. End-to-end tests cover the most important customer journeys, such as signing in, onboarding, submitting a transaction, or completing a payment. In CI, I run tests together with linting, type checking, and the production build. I focus on testing behavior and business risk rather than testing implementation details.",
  },
  {
    question: "How do you handle a production incident?",
    answer:
      "My first priority is reducing customer impact. I determine the severity, inspect logs and monitoring, identify the affected deployment or service, and decide whether to roll back, disable a feature, or apply a controlled fix. I communicate what is affected, what is known, and what action is being taken. I avoid making several unverified changes at once because that makes the incident harder to diagnose. After recovery, I document the root cause and add improvements such as tests, monitoring, validation, deployment safeguards, or updated runbooks.",
  },
  {
    question: "When would you choose microservices over a monolith?",
    answer:
      "I normally start with a well-structured modular monolith unless there is a clear reason to introduce distributed services. A monolith is easier to test, deploy, monitor, and keep consistent. I consider extracting a service when one part of the application has significantly different scaling requirements, release cycles, reliability needs, security boundaries, or team ownership. Microservices introduce network failures, distributed tracing, eventual consistency, and more operational work, so I accept that complexity only when the benefits clearly justify it.",
  },
  {
    question: "What makes someone a senior full-stack engineer?",
    answer:
      "A senior full-stack engineer does more than complete assigned coding tasks. They clarify incomplete requirements, identify risks, compare technical trade-offs, protect data integrity, and build systems that other developers can maintain. They can investigate issues across the browser, frontend framework, API, database, infrastructure, and third-party integrations. They also communicate clearly with product managers, designers, QA engineers, clients, and other developers. Seniority means taking ownership of outcomes and choosing the simplest reliable solution that satisfies the business requirements.",
  },
];

const nextjsQuestions: InterviewQuestion[] = [
  {
    question:
      "How do you decide between static and dynamic rendering in Next.js?",
    answer:
      "I decide based on how often the data changes and whether it depends on the current user or request. I use static rendering for shared content like marketing pages, documentation, and public product pages because it gives better performance and cheaper delivery. I use dynamic rendering for personalized dashboards, permission-based data, and anything that must always be current. For pages that change occasionally, I use caching and revalidation so I can balance freshness with speed.",
  },
  {
    question:
      "How do Server Components and Client Components differ in Next.js?",
    answer:
      "Server Components are the default in the App Router and are best for data fetching, server-side logic, and rendering content that does not need browser interaction. Client Components are used when I need state, event handlers, effects, context, or browser APIs like window and localStorage. I try to keep the client boundary as small as possible so the browser receives less JavaScript. A strong pattern is to fetch and prepare data in a Server Component, then pass only the interactive part to a smaller Client Component. The App Router is built around Server Components, Suspense, and Server Functions. :contentReference[oaicite:0]{index=0}",
  },
  {
    question: "When would you use Server Actions instead of Route Handlers?",
    answer:
      "I use Server Actions when the mutation is closely tied to the UI, such as form submissions, profile updates, or dashboard actions. They keep the mutation near the component that triggers it and work well with cache updates after a write. I use Route Handlers when I need a reusable HTTP endpoint, webhook support, external integration, file response, or explicit request and response control. In both cases, I still validate input, authenticate the request, and check authorization on the server.",
  },
  {
    question: "How do you approach data fetching in a Next.js app?",
    answer:
      "I usually fetch data as close as possible to the component that needs it, especially in Server Components. That keeps the code easier to follow and avoids passing data through too many layers. For interactive client-side features, I use client fetching only when I truly need it, such as polling, live updates, or user-triggered refreshes. I also pay attention to loading states, error handling, cache behavior, and request duplication so the UI stays predictable.",
  },
  {
    question: "How do caching and revalidation work in Next.js?",
    answer:
      "I use caching to speed up repeated reads and revalidation to keep cached content fresh. For time-based freshness, I use a revalidate window or cache lifetime based on how quickly the content becomes stale. For writes, I use tag-based invalidation when I know which data changed, and path-based invalidation when I need to refresh a specific route. For read-your-own-writes flows, I prefer immediate invalidation so the user sees their change right away. Next.js documents both the newer Cache Components model and the previous caching model, including `revalidateTag`, `updateTag`, and `revalidatePath`. :contentReference[oaicite:1]{index=1}",
  },
  {
    question: "How do you optimize a Next.js application?",
    answer:
      "I start by measuring the bottleneck instead of guessing. I look at bundle size, server response time, slow data fetching, unnecessary client rendering, and database query performance. I keep components server-side unless they truly need client behavior, dynamically import expensive features, paginate large datasets, and optimize images and fonts. I also reduce repeated requests, cache the right data, and make sure the database has the proper indexes for the app’s query patterns.",
  },
  {
    question: "How do you handle metadata and SEO in Next.js?",
    answer:
      "I use the Metadata API to define titles, descriptions, and social sharing data for each route. For static metadata, I export a metadata object from a layout or page. For data-dependent metadata, I use generateMetadata so the content can be fetched dynamically. I also use file-based conventions for favicons and OG images when that is simpler. In senior work, I treat metadata as part of the product experience, not an afterthought. The metadata object and generateMetadata are supported in Server Components, and Next.js can generate the relevant head tags automatically. :contentReference[oaicite:2]{index=2}",
  },
  {
    question: "How do you structure loading, error, and not-found states?",
    answer:
      "I design them per route segment so each major section of the app can fail or load independently. A loading state should give the user feedback quickly, an error state should be clear and recoverable when possible, and a not-found state should be intentional rather than a generic crash page. For large apps, this prevents one failing area from breaking the entire experience. Next.js file conventions support loading, error, and not-found handling at the route segment level. :contentReference[oaicite:3]{index=3}",
  },
  {
    question: "What is the role of Proxy in modern Next.js?",
    answer:
      "Proxy runs before a request is completed and is useful for request-time logic such as authentication checks, redirects, rewrites, and route matching. I use it for lightweight edge-style request decisions, not for heavy business logic or database work. Next.js now documents the middleware file convention as deprecated and renamed to Proxy, so I treat it as a request interception layer rather than a place for application logic. :contentReference[oaicite:4]{index=4}",
  },
  {
    question: "How do you secure secrets and environment variables in Next.js?",
    answer:
      "I keep sensitive values on the server and never expose them directly to the browser unless they are intentionally public. API keys, database credentials, and service-role secrets stay server-side. I only use NEXT_PUBLIC_ for values that are safe to expose in client code. I also make sure authentication and authorization are enforced on the server, not just hidden in the UI.",
  },
  {
    question: "How do you handle forms and mutations in a Next.js app?",
    answer:
      "For simple form flows, I prefer Server Actions because they keep the mutation close to the UI and reduce boilerplate. I validate the form data on the server, return clear errors, and refresh or revalidate the relevant data after a successful update. For more complex flows, I use Route Handlers, especially when the mutation must be shared by multiple clients or integrated with external systems. I also design mutations to be safe from duplicate submissions and race conditions.",
  },
  {
    question: "How do you debug a production issue in Next.js?",
    answer:
      "I start by narrowing the issue down to the route, action, or component that is failing. Then I check logs, network requests, server errors, database queries, and recent deployments to isolate the cause. I verify whether the problem is in rendering, data fetching, a server mutation, or a client-side state issue. If needed, I roll back, disable the broken feature, or apply a small fix first, then I follow up with a root-cause review and prevention plan.",
  },
  {
    question: "What is parallel routing useful for in a senior Next.js app?",
    answer:
      "Parallel routes are useful when different parts of the same layout need to render independently, such as dashboards, feeds, analytics panels, or authenticated areas. I use them when I want each section to have its own loading and error state without forcing the entire screen to wait on one slow branch. This is especially helpful for complex product surfaces where the user can still work with one part of the UI while another part loads. Next.js documents parallel routes as a way to render one or more pages simultaneously within the same layout. :contentReference[oaicite:5]{index=5}",
  },
  {
    question: "How do image optimization and performance fit into your Next.js decisions?",
    answer:
      "I use Next.js image optimization for visual stability, responsive delivery, and reducing layout shift. I still choose image sizes carefully, avoid sending huge images to small viewports, and use the right image strategy for each page. For a senior app, I look at images as part of overall performance, not just presentation. Next.js documents the Image component as an optimized extension of the HTML img element and describes its role in improving visual stability. :contentReference[oaicite:6]{index=6}",
  },
];

const backendServerDatabaseQuestions: InterviewQuestion[] = [
  {
    question: "How do you design a reliable backend API?",
    answer:
      "I start with clear resource boundaries, predictable endpoint naming, proper HTTP methods, and consistent status codes. I validate input at the API boundary, enforce authentication and authorization on the server, and return errors in a stable format. For write operations, I consider idempotency, retries, and concurrency so the API behaves safely under real traffic. I also keep the business logic separate from the transport layer so the system is easier to test and maintain.",
  },
  {
    question: "How do you structure a Node.js backend for maintainability?",
    answer:
      "I usually organize it by feature or domain rather than by file type alone. That means keeping routes, services, validation, and data access close together inside a feature module. I separate controllers or route handlers from business logic and database access so each layer has one clear responsibility. This makes the code easier to test, easier to refactor, and easier for other developers to understand.",
  },
  {
    question: "What is the Node.js event loop, and why does it matter?",
    answer:
      "The event loop lets Node.js handle many I/O operations without blocking the process while it waits for external work like database queries or network calls. This is one of the reasons Node.js works well for APIs and real-time applications. The important limitation is that CPU-heavy synchronous work can block the event loop and slow down every request on that process. For that reason, I avoid expensive synchronous work in request handlers and move heavy processing to background jobs or worker threads when needed.",
  },
  {
    question: "How do you scale a backend service?",
    answer:
      "I first look for the real bottleneck before changing the architecture. Often the problem is slow queries, excessive requests, poor caching, or blocking logic rather than the application itself. I scale vertically or horizontally depending on the workload, add caching where appropriate, use queues for background work, and make sure the database can handle the traffic pattern. I also watch logs, metrics, and request latency so scaling decisions are based on evidence rather than guesswork.",
  },
  {
    question: "When would you use a queue or background worker?",
    answer:
      "I use a queue when work does not need to finish during the user request or when it is expensive, slow, or retryable. Common examples are email sending, report generation, file processing, notifications, and integration sync jobs. Moving that work out of the request path improves response time and makes failures easier to retry safely. A queue also gives me better control over concurrency, retries, and dead-letter handling.",
  },
  {
    question: "How do you handle authentication and authorization on the server?",
    answer:
      "Authentication answers who the user is, while authorization answers what the user can do. I verify identity on the server using sessions, tokens, or provider-based authentication, then check permissions before returning or changing any sensitive data. I never trust the client to enforce business rules because the frontend can be bypassed. For database-backed systems, I often combine server-side checks with row-level security or ownership rules so sensitive data stays protected even if a route is called directly.",
  },
  {
    question: "How do you design a database schema for a new feature?",
    answer:
      "I start from the access pattern and the business rules instead of guessing the table structure first. I identify the core entities, relationships, constraints, and queries the application will need. In relational databases, I normalize when I need consistency and strong relationships, and I denormalize only when real performance or reporting needs justify it. In document databases like MongoDB, I decide carefully between embedding and referencing based on how the data is read, updated, and related.",
  },
  {
    question: "How do you choose between PostgreSQL and MongoDB?",
    answer:
      "I prefer PostgreSQL when the system needs strong relationships, joins, transactions, reporting, and strict consistency. I prefer MongoDB when the data fits naturally as documents, the schema evolves frequently, or the application usually reads and writes whole documents together. The right choice depends on the shape of the data and how the application queries it. I do not choose one because it is trendy; I choose it because it matches the problem.",
  },
  {
    question: "How do indexes improve database performance?",
    answer:
      "Indexes help the database find rows or documents without scanning the entire dataset. They are useful for frequent filters, joins, sorts, and uniqueness checks. I add indexes based on actual query patterns rather than indexing everything, because indexes use storage and can slow down writes. I also review whether the index order matches the way the query filters and sorts data, since the wrong index can still perform poorly.",
  },
  {
    question: "How do you troubleshoot a slow database query?",
    answer:
      "I reproduce the query with realistic data and inspect the execution plan to see whether the database is scanning too many rows, sorting unnecessarily, or missing an index. I check the selected columns, join conditions, filter order, and whether the query is asking for more data than the UI really needs. I also look for N+1 patterns, repeated queries, and inefficient pagination. After making a change, I measure again so I know whether the improvement is real.",
  },
  {
    question: "What is the difference between embedding and referencing in MongoDB?",
    answer:
      "Embedding stores related data inside the same document, while referencing stores related data separately and connects it with an ID. I embed when the data belongs naturally together, is usually read together, and will not grow without limit. I reference when the related data is shared, large, updated independently, or used in many different places. The best choice depends on access patterns, not just on how the data looks in the UI.",
  },
  {
    question: "How do you prevent duplicate records in a database?",
    answer:
      "I enforce uniqueness at the database level whenever possible using unique constraints or unique indexes. An application-level check is not enough because two requests can pass the check at the same time. For operations that may be retried, I also use idempotency keys or transactional logic so the same action is not processed twice. This is especially important for payments, signups, and background jobs.",
  },
  {
    question: "When do you use transactions?",
    answer:
      "I use transactions when multiple database operations must succeed or fail together as one unit. A good example is creating a record and updating a balance or inventory count in the same operation. I keep transactions short and avoid calling external services inside them because that increases lock time and failure risk. I do not use transactions for every request, only where consistency really matters.",
  },
  {
    question: "How do you handle database migrations safely?",
    answer:
      "I use versioned migrations so schema changes are reviewed, repeatable, and deployed in a controlled way. For risky changes, I try to make them backward compatible so the application can support the old and new shape during rollout. For large data changes, I process in batches rather than locking the whole table or collection. I also plan for rollback or recovery before the migration goes live.",
  },
  {
    question: "How do you monitor backend health in production?",
    answer:
      "I monitor latency, error rate, throughput, database performance, memory usage, and request volume. Logs, metrics, and traces help me understand whether an issue is in the API layer, database, infrastructure, or an external dependency. I also like to track business-level signals such as failed signups, failed payments, or job backlog because those often reveal problems earlier than infrastructure metrics alone. A backend is healthy only if it is both technically stable and producing the expected business outcome.",
  },
  {
    question: "How do you handle server-side errors without exposing sensitive details?",
    answer:
      "I catch unexpected errors, log the technical details on the server, and return a safe error message to the client. The client should know that something went wrong, but not see stack traces, secrets, or internal implementation details. I also separate validation errors from system errors so the UI can give the user a useful response. For important flows, I add correlation IDs so I can trace the failure across logs and requests.",
  },
  {
    question: "How do you decide between caching and querying live data?",
    answer:
      "I use caching when the data is expensive to compute or does not need to be perfectly fresh on every request. I use live queries when the result must always reflect the latest state, such as a user’s current permissions or a critical transaction status. The trade-off is freshness versus performance, so I choose based on business impact. For many systems, the best answer is a mix of both with clear invalidation rules.",
  },
];

const commonTechnicalInterviewQuestions: InterviewQuestion[] = [
  {
    question:
      "What were your specific roles and responsibilities on the most recent project you worked on?",
    answer: `On one of my most recent projects, I worked as a full-stack software developer responsible for both the frontend and backend parts of the application. I developed interfaces using Next.js, React, TypeScript, Tailwind CSS, and reusable UI components. On the backend, I worked with Node.js, MongoDB, authentication, email integrations, APIs, and server-side validation.

I was also involved in application architecture, database schema design, debugging, testing, code reviews, deployment, and production support. As a senior developer, I helped break requirements into manageable tasks and considered maintainability, security, performance, and the impact of technical decisions on the rest of the team.`,
  },
  {
    question:
      "What project are you most proud of, and how did you contribute to it?",
    answer: `One project I am particularly proud of was a large web platform that included customer onboarding, transaction management, dashboards, document processing, reporting, and integrations with external services.

I contributed to both the frontend and backend. I developed reusable components, implemented complex forms and validation, created API integrations, worked with database queries and authorization policies, and helped resolve production issues.

I am proud of the project because it required more than implementing isolated features. I had to understand the complete business process, coordinate with other team members, identify technical risks, and build solutions that could be maintained and extended as the platform grew.`,
  },
  {
    question: "Do you prefer to work alone or on a team?",
    answer: `I am comfortable working independently, but I generally prefer working as part of a collaborative team. I can take ownership of a feature from requirements through development, testing, deployment, and production support without requiring constant supervision.

At the same time, collaboration is important for architecture decisions, code reviews, product requirements, and identifying risks early. I enjoy discussing solutions with developers, designers, QA engineers, and product managers.

My preferred approach is to have clear individual ownership while maintaining open communication with the team. This gives developers enough focus to complete their work while ensuring that everyone is moving toward the same technical and business goals.`,
  },
  {
    question:
      "What would you do if you were asked to perform a task and weren't sure how to complete it?",
    answer: `First, I would clarify the expected result, constraints, priority, and definition of done. Sometimes the difficulty comes from an unclear requirement rather than the technical implementation itself.

I would then break the problem into smaller parts and determine which parts I already understand and which require research. I would review the existing codebase, official documentation, logs, tests, and similar implementations before deciding on an approach.

If another team member has relevant experience, I would ask a focused question and explain what I have already investigated. I would not hide the uncertainty or spend too much time going in the wrong direction. Once I understand the solution, I would document important findings so the team can solve similar problems more efficiently in the future.`,
  },
  {
    question:
      "Tell me about a time when you went above and beyond your expected tasks while working on a project.",
    answer: `While working on a feature, I noticed that the existing implementation had repeated logic, inconsistent validation, and components that had become difficult to maintain. My assigned task only required adding a new feature, but adding it directly would have increased the technical debt.

I first completed the required functionality, then carefully separated reusable logic, improved type safety, centralized validation, and reduced duplication without changing the existing behavior. I kept the changes in manageable sections so they could be reviewed and tested safely.

This made the immediate feature easier to deliver and also made future changes less risky for the rest of the team. I believe going above and beyond means improving the long-term reliability of the product without unnecessarily delaying the business requirement.`,
  },
  {
    question:
      "How would you overcome the challenge of working with a difficult co-worker on a team project?",
    answer: `I would first try to understand whether the disagreement is about technical decisions, communication style, responsibilities, or project priorities. I would speak with the person privately and focus on the problem rather than making the discussion personal.

For a technical disagreement, I would compare the options using objective criteria such as maintainability, performance, security, delivery time, and business requirements. When possible, I would use documentation, a small proof of concept, or measurable results instead of relying only on personal opinions.

If we still could not reach an agreement and the issue was blocking delivery, I would involve the appropriate technical lead or manager with a clear summary of the options and trade-offs. Once a decision was made, I would support it professionally even if it was not my original preference.`,
  },
  {
    question: "How did your education prepare you for this job?",
    answer: `My education gave me a foundation in programming concepts, problem-solving, data structures, databases, and software development principles. However, most of my preparation for a senior full-stack role has come from more than nine years of practical experience building and maintaining production applications.

Working on real projects taught me how to handle changing requirements, legacy code, security concerns, database performance, third-party integrations, deployment issues, and production incidents. It also taught me how important communication and business understanding are in software development.

I continue combining foundational knowledge with hands-on learning because technologies change, but core engineering principles such as separation of concerns, data integrity, testing, and maintainability remain important.`,
  },

  // Update this answer when you have certifications you want to mention.
  {
    question: "What technical certifications do you have?",
    answer: `My strongest qualifications come from more than nine years of hands-on software development rather than relying only on certifications. I have continuously developed my knowledge through technical documentation, practical projects, code reviews, online training, and solving real production problems.

My experience includes Next.js, React, Angular, TypeScript, Node.js, MongoDB, PostgreSQL, Supabase, authentication, API development, testing, and cloud deployments.

I am also open to completing certifications when they provide value for the role or the organization, especially in areas such as cloud infrastructure, security, or database administration.`,
  },
  {
    question:
      "How do you stay up-to-date on your technical knowledge and certifications?",
    answer: `I stay current by regularly reading official documentation, release notes, migration guides, and technical discussions related to the technologies I use. For example, I follow changes in Next.js, React, Angular, Node.js, TypeScript, MongoDB, and Supabase.

I apply new concepts through small experiments before introducing them into a production application. This helps me understand the benefits, limitations, migration effort, and possible risks rather than adopting a tool simply because it is popular.

I also learn through code reviews, production incidents, personal projects, and discussions with other developers. I focus on concepts that improve real application quality, such as performance, security, testing, accessibility, and maintainability.`,
  },
  {
    question: "What coding language are you most comfortable with?",
    answer: `The programming language I am most comfortable with is JavaScript, particularly TypeScript for production applications. I have used JavaScript throughout most of my career across frontend and backend development.

On the frontend, I have used it with Next.js, React, Angular, and AngularJS. On the backend, I have used Node.js, serverless functions, REST APIs, authentication systems, database integrations, and background processes.

I prefer TypeScript for larger applications because static typing makes data contracts clearer, improves editor support, and catches many mistakes before runtime. I am also comfortable with SQL for PostgreSQL and Supabase, particularly for joins, database functions, aggregations, indexes, and Row Level Security policies.`,
  },
  {
    question: "What is a SAN, and how is it used?",
    answer: `SAN stands for Storage Area Network. It is a dedicated high-speed network that provides servers with block-level access to shared storage.

Unlike normal file sharing, where a server accesses individual files over a network, storage provided by a SAN can appear to the operating system like a directly attached disk. It is commonly used in enterprise environments for databases, virtualization platforms, centralized storage, backups, high availability, and disaster recovery.

SANs can provide high performance and centralized storage management, but they also introduce infrastructure cost and operational complexity. In modern cloud environments, developers may use managed block-storage services without directly managing the underlying SAN infrastructure.`,
  },
  {
    question: "When is it appropriate to denormalize database design?",
    answer: `Denormalization is appropriate when measured query-performance or reporting requirements justify storing some duplicated or precomputed data. For example, a dashboard may repeatedly calculate the same totals across several large tables. Storing a carefully maintained summary could reduce joins and expensive calculations.

I would first optimize the query, review indexes, reduce unnecessary data, and inspect the execution plan before changing the data model. Denormalization improves some read operations, but it increases storage requirements and creates a risk of inconsistent data because the same information may exist in multiple places.

When I denormalize, I define one source of truth and make sure duplicated data is updated reliably through a transaction, controlled application service, database trigger, event process, or scheduled reconciliation job.`,
  },
  {
    question:
      "What is the role of continuous integration systems in the automated-build process?",
    answer: `Continuous integration automatically validates changes when developers push code or create pull requests. A CI pipeline can install dependencies, run linting, check TypeScript types, execute unit and integration tests, scan for security issues, and create a production build.

Its main purpose is to identify problems before code is merged or deployed. It also ensures that every developer's change is tested using a consistent process instead of relying only on checks performed on a local machine.

For a Next.js application, I would normally configure CI to run formatting or lint checks, TypeScript validation, automated tests, and the Next.js production build. Deployment should only proceed when the required checks pass, and the team should have a rollback strategy in case an issue still reaches production.`,
  },
];

export default function Main() {
  return (
    <main className="relative flex-1 space-y-3 bg-background p-3">
      <div className="space-y-6">
        {[...interviewQuestions, ...nextjsQuestions, ...backendServerDatabaseQuestions, ...commonTechnicalInterviewQuestions].map(({ question, answer }, index) => (
          <section
            key={question}
            className="space-y-3 rounded-lg border bg-card p-4"
          >
            <h5 className="font-bold">
              {index + 1}. {question}
            </h5>

            <p className="leading-7 text-muted-foreground">{answer}</p>
          </section>
        ))}
      </div>
    </main>
  );
}
