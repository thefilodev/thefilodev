"use client";

export default function Main() {
  return (
    <main className="relative flex-1 bg-background p-3 space-y-3">
<header className="masthead">
  <div className="wrap">
    <p className="eyebrow">Interview Prep · 30-min Recruiter Screen</p>
    <h1>Doneverse — Senior Full-Stack Engineer</h1>
    <div className="stack">
      <span>React</span><span>React Native</span><span>Node.js</span><span>TypeScript</span><span>PostgreSQL</span>
    </div>

    <div className="battle">
      <div className="strat">
        <h3><span className="tag-gap">▲</span> The one real gap — React Native</h3>
        <p>Not on your resume, but listed as required. Don't bluff. "Web-first so far, haven't shipped RN to the stores — but React + TS is deep and it's the same model, so I'd ramp fast." Honesty reads senior.</p>
      </div>
      <div className="strat">
        <h3><span className="tag-edge">◆</span> Your edge — hardening AI-generated code</h3>
        <p>The JD's core theme. You've been doing exactly this on Campaignr — validation, auth, secrets, N+1s, tests. Few candidates can speak to it from real recent work. Lead with it.</p>
      </div>
      <div className="strat">
        <h3><span style="color:var(--accent-ink)">₱</span> Salary — go in anchored</h3>
        <p>Company has a low-comp reputation. Decide an X–Y band before the call. Deflection line: "What range is the role budgeted for?" Don't give a single number first.</p>
      </div>
    </div>
  </div>
</header>

<nav className="jump">
  <div className="wrap jump-inner">
    <a href="#fit">Fit</a>
    <a href="#js">JS Core</a>
    <a href="#react">React</a>
    <a href="#ts">TypeScript</a>
    <a href="#node">Node</a>
    <a href="#pg">Postgres</a>
    <a href="#rn">RN</a>
    <a href="#test">Testing</a>
    <a href="#arch">Architecture</a>
    <a href="#sec">Security</a>
    <a href="#pay">Payments</a>
    <a href="#git">Git</a>
    <button className="reveal-btn" id="revealAll" aria-pressed="false">Reveal all</button>
  </div>
</nav>

<section id="fit">
  <div className="sec-head"><span className="sec-num">01</span><h2>Initial / Fit Questions</h2><span className="count">10 scripts</span></div>
  <p className="sec-note">Rehearse these out loud. Answers are drawn from your actual resume — swap in real numbers where you can.</p>

  <div className="script">
    <p className="q">Tell me about yourself</p>
    <div className="say">"I'm a full-stack developer with 9 years of experience, mostly building React and Next.js apps with Node and TypeScript on PostgreSQL. Most recently at Stairpay I owned a resident portal and a listings management platform end-to-end. Before that at Twenty7tec I built a large-scale communication platform and reusable web plugins for UK clients. All my roles have been remote with US and UK teams. Lately I've been building my own SaaS, which keeps me hands-on with modern React tooling and productionizing AI-assisted code. This role stood out because it's exactly that kind of work — owning features and hardening real products."</div>
    <p className="coach">~75 seconds. Lead with strengths, not chronology. End on why this role.</p>
  </div>

  <div className="script">
    <p className="q">Why this role / Doneverse?</p>
    <div className="say">"Two things — the ownership, since the JD talks about engineering judgment mattering and owning features end-to-end, which is how I like to work. And the AI-generated code angle: I've been building a SaaS where a lot of scaffolding is AI-assisted, so debugging and productionizing that code is fresh for me, and that's central to this role."</div>
  </div>

  <div className="script">
    <p className="q">Why did you leave Stairpay / what are you doing now?</p>
    <div className="say">"My time at Stairpay wrapped up earlier this year. Since then I've been building a full-stack SaaS to stay sharp — a landing page builder with a dual-portal architecture, Stripe payments, and role-based access. It's kept me deep in Next.js, auth, and production concerns — the most relevant recent work to this role."</div>
    <p className="coach">Turns the gap into initiative. Don't apologize for it.</p>
  </div>

  <div className="script">
    <p className="q">Walk me through a project you owned end-to-end</p>
    <div className="say">"At Stairpay I built the Resident Portal in Next.js and Supabase. Residents needed one place to self-serve documents, payments, affordability checks, and property info. I scoped it with the PM, designed the Postgres data model, built the auth and server logic, and shipped it — consolidating things residents used to email support about into one self-service platform."</div>
  </div>

  <div className="script">
    <p className="q">Tell me about improving code someone else wrote</p>
    <div className="say">"At Captivate Chat I took over a chatbot widget and chat platform built on Angular and progressively migrated the frontend to React. The codebase had grown messy, so I refactored incrementally — keeping it shippable the whole time rather than a big-bang rewrite — while adding features clients needed."</div>
    <p className="coach">Directly answers the JD's "maintain and improve code written by others."</p>
  </div>

  <div className="script">
    <p className="q">What's your React Native experience?</p>
    <div className="say">"My production mobile experience has been web-first — I haven't shipped a React Native app to the stores yet. But my React and TypeScript are deep, and RN shares the same component model, so I'd ramp quickly. I'd rather be upfront than oversell it."</div>
    <p className="coach">If you've touched RN even in side projects, say so specifically.</p>
  </div>

  <div className="script">
    <p className="q">Salary expectations?</p>
    <div className="say">"I'm looking in the range of [X to Y] depending on the full package. What range is the role budgeted for?"</div>
    <p className="coach">Decide X–Y first. Senior remote for US/AU clients can sit above local averages. If pushed for one number, deflect once and ask their range.</p>
  </div>

  <div className="script">
    <p className="q">Comfortable with permanent work-from-home?</p>
    <div className="say">"Yes — every role for the last 9 years has been fully remote with overseas teams, so I have a reliable setup and I'm used to async work across time zones."</div>
  </div>

  <div className="script">
    <p className="q">Notice period / availability?</p>
    <div className="say">Answer honestly and simply. If you can start soon, say so — it's a plus.</div>
  </div>

  <div className="script">
    <p className="q">What are you looking for in your next role?</p>
    <div className="say">"Ownership and technical influence — owning features from concept to deployment, making real architecture decisions, and working on products that ship to real users. Which is what this role describes."</div>
  </div>
</section>

<section id="js">
  <div className="sec-head"><span className="sec-num">02</span><h2>JavaScript Fundamentals</h2><span className="count">10 Q</span></div>
  <p className="sec-note">Click a question to reveal the answer — quiz yourself first.</p>

  <details className="qa"><summary><span className="chev">›</span>What is a closure?</summary>
    <div className="answer"><p>A function that keeps access to variables from its lexical scope even after the outer function has returned. Used for private state, callbacks, and memoization.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>== vs === ?</summary>
    <div className="answer"><p><code>==</code> compares with type coercion; <code>===</code> is strict, no coercion. Default to <code>===</code> to avoid surprising conversions.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Explain hoisting.</summary>
    <div className="answer"><p>Declarations are moved to the top of their scope. <code>var</code> and function declarations are hoisted (var initialized to <code>undefined</code>); <code>let</code>/<code>const</code> are hoisted but sit in a "temporal dead zone" until declared, so accessing them early throws.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Promises vs async/await?</summary>
    <div className="answer"><p>async/await is syntactic sugar over promises — cleaner sequential-looking code. Still promises underneath; use try/catch for errors and <code>Promise.all</code> for concurrency.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Microtasks vs macrotasks?</summary>
    <div className="answer"><p>Promise callbacks and <code>queueMicrotask</code> are microtasks; <code>setTimeout</code>/I/O are macrotasks. The microtask queue drains completely after each task, before the next macrotask — which is why a resolved promise runs before a 0ms timeout.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How is <code>this</code> determined?</summary>
    <div className="answer"><p>By the call site: method call → the object; plain call → undefined/global; arrow functions inherit <code>this</code> lexically; <code>call</code>/<code>apply</code>/<code>bind</code> set it explicitly.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Shallow vs deep copy?</summary>
    <div className="answer"><p>Shallow (<code>{`{...obj}`}</code>, <code>Object.assign</code>) copies the top level only — nested objects stay shared by reference. Deep copy duplicates everything (<code>structuredClone</code>, or the JSON round-trip for simple data).</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What is event delegation?</summary>
    <div className="answer"><p>Attach one listener to a parent and read <code>event.target</code> to handle events from many/dynamic children — fewer listeners, works for elements added later.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Difference between map, filter, reduce?</summary>
    <div className="answer"><p><code>map</code> transforms each item (same length), <code>filter</code> keeps items passing a test, <code>reduce</code> folds the array into a single value (sum, object, grouping).</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Implement debounce.</summary>
    <div className="answer"><pre><code>{`function debounce(fn, ms){
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}`}</code></pre><p>Debounce waits until calls stop for <code>ms</code>; throttle instead runs at most once per <code>ms</code>.</p></div></details>
</section>

<section id="react">
  <div className="sec-head"><span className="sec-num">03</span><h2>React &amp; Next.js</h2><span className="count">16 Q</span></div>
  <p className="sec-note">Your strongest area — know these cold.</p>

  <details className="qa"><summary><span className="chev">›</span>Server Components vs Client Components (App Router)?</summary>
    <div className="answer"><p>Server Components render on the server, ship no JS, and can hit the backend directly — but no state/effects/browser APIs. Client Components (<code>"use client"</code>) handle interactivity. Keep components server by default and push interactivity to small leaf client components.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What causes a hydration error and how do you fix it?</summary>
    <div className="answer"><p>The server HTML must match the client's first render. Reading <code>window</code>/<code>localStorage</code>, <code>Date.now()</code>, or random values during render causes a mismatch. Fix: defer client-only values behind a <code>mounted</code> flag in <code>useEffect</code>, use <code>suppressHydrationWarning</code>, or <code>next-themes</code> for dark mode.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>SSR vs SSG vs ISR vs CSR?</summary>
    <div className="answer"><p>CSR renders in the browser; SSR renders per request on the server; SSG renders at build time; ISR is SSG that re-generates on a schedule (<code>revalidate</code>). Choose by how fresh the data must be vs how cacheable it is.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>useMemo vs useCallback?</summary>
    <div className="answer"><p><code>useMemo</code> memoizes a computed value; <code>useCallback</code> memoizes a function reference. Use to avoid expensive recomputation or keep stable references for memoized children/effect deps. Don't over-apply — memoization has its own cost.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How does React decide what to re-render?</summary>
    <div className="answer"><p>A state/prop change re-renders the component and its subtree. React diffs the new virtual DOM against the old (reconciliation) and commits only the differences. <code>key</code> helps match list items; <code>React.memo</code>/<code>useMemo</code>/<code>useCallback</code> trim unnecessary child renders.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Common useEffect mistakes?</summary>
    <div className="answer"><p>Wrong dependency arrays (stale closures or infinite loops), missing cleanup for subscriptions/timers, and using effects for values you could derive during render. Rule: if you can compute it during render, don't use an effect.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Why does the <code>key</code> prop matter?</summary>
    <div className="answer"><p>It gives list items a stable identity so React reuses DOM nodes instead of recreating them. Array index as key breaks on reorder/insert — use a stable unique id.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Data fetching in the App Router?</summary>
    <div className="answer"><p>Fetch directly inside async Server Components — no client waterfall. Next extends <code>fetch</code> with caching and revalidation. For client interactivity, React Query or SWR.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What are Server Actions?</summary>
    <div className="answer"><p>Async functions marked <code>"use server"</code> that you call from components to run mutations on the server without hand-writing an API route — good for form submissions with progressive enhancement.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How does Next.js middleware help with auth?</summary>
    <div className="answer"><p>Middleware runs before a request completes, at the edge — ideal for checking a session/token and redirecting unauthenticated users before the page renders. Enforce protected routes centrally there rather than per-page.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Controlled vs uncontrolled components?</summary>
    <div className="answer"><p>Controlled: React state is the source of truth (<code>value</code> + <code>onChange</code>). Uncontrolled: the DOM holds the value, read via ref. React Hook Form uses refs (uncontrolled) to cut re-renders on large forms.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Context API vs a state library?</summary>
    <div className="answer"><p>Context suits low-frequency global values (theme, auth). It re-renders all consumers on change, so it's poor for high-frequency state — use Zustand/Redux there. Server data is usually better handled by React Query than global client state.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What is an error boundary?</summary>
    <div className="answer"><p>A component (class-based or via a library) that catches render errors in its children and shows fallback UI instead of crashing the whole tree. Pair with logging.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What does Suspense do?</summary>
    <div className="answer"><p>It shows a fallback while async children (data or lazy components) load. In Next, it enables streaming — fast parts of the page render while slow parts stream in.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>When would you write a custom hook?</summary>
    <div className="answer"><p>To extract and reuse stateful logic across components — e.g. <code>useDebounce</code>, <code>useAuth</code>, <code>useFetch</code>. It's just a function starting with "use" that calls other hooks.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What is a React portal?</summary>
    <div className="answer"><p>Renders children into a different DOM node outside the parent hierarchy while keeping React context — used for modals, tooltips, and toasts that must escape overflow/z-index constraints.</p></div></details>
</section>

<section id="ts">
  <div className="sec-head"><span className="sec-num">04</span><h2>TypeScript</h2><span className="count">11 Q</span></div>

  <details className="qa"><summary><span className="chev">›</span>type vs interface?</summary>
    <div className="answer"><p><code>interface</code> is for object shapes, supports declaration merging and <code>extends</code>. <code>type</code> is more flexible — unions, intersections, mapped/conditional types. Interface for public object contracts, type for unions/composition.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>any vs unknown?</summary>
    <div className="answer"><p><code>any</code> disables checking. <code>unknown</code> is the type-safe top type — you must narrow before use. Prefer <code>unknown</code> for uncertain shapes (API responses, catch clauses).</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Give a use of generics.</summary>
    <div className="answer"><pre><code>{`function first&lt;T&gt;(arr: T[]): T | undefined {
  return arr[0];
}`}</code></pre><p>Generics keep code reusable while preserving the caller's specific type instead of collapsing to <code>any</code>.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Useful utility types?</summary>
    <div className="answer"><p><code>Partial</code>, <code>Required</code>, <code>Pick</code>, <code>Omit</code>, <code>Record</code>, <code>ReturnType</code>. Great for deriving DTOs/patch types from a base model without duplicating shapes.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What is a discriminated union?</summary>
    <div className="answer"><pre><code>{`type Result =
  | { status: 'ok'; data: string }
  | { status: 'error'; message: string };`}</code></pre><p>Checking the shared literal (<code>status</code>) narrows to the right branch — safer than optional fields everywhere.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>keyof and typeof?</summary>
    <div className="answer"><p><code>keyof T</code> gives a union of a type's keys; <code>typeof value</code> gets the type of a runtime value. Combined — <code>keyof typeof obj</code> — you derive key unions from a constant object.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What are mapped types?</summary>
    <div className="answer"><p>Types built by iterating keys of another type: <code>{`{ [K in keyof T]: ... }`}</code>. Utility types like <code>Partial</code> are mapped types under the hood.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Type guards / narrowing?</summary>
    <div className="answer"><p>Runtime checks that narrow a type — <code>typeof</code>, <code>instanceof</code>, <code>in</code>, or a custom predicate <code>function isCat(x): x is Cat</code>. After the check, TS treats the value as the narrower type.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What does <code>as const</code> do?</summary>
    <div className="answer"><p>Makes a literal deeply readonly and narrows it to its exact value rather than the widened type (e.g. <code>'GET'</code> instead of <code>string</code>). Useful for config objects and action types.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Enums vs union types?</summary>
    <div className="answer"><p>String-literal unions (<code>'admin' | 'user'</code>) are usually preferred — zero runtime cost, readable. Enums emit runtime objects and numeric enums have footguns.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What is the non-null assertion (<code>!</code>)?</summary>
    <div className="answer"><p><code>value!</code> tells TS a value isn't null/undefined. Use sparingly — it silences the compiler rather than proving safety, so prefer a real check when you can.</p></div></details>
</section>

<section id="node">
  <div className="sec-head"><span className="sec-num">05</span><h2>Node.js &amp; Express</h2><span className="count">11 Q</span></div>

  <details className="qa"><summary><span className="chev">›</span>How does Node handle concurrency if it's single-threaded?</summary>
    <div className="answer"><p>JS runs on one thread, but I/O is non-blocking — Node hands I/O to libuv/the OS and a thread pool, then runs your callbacks when results arrive. The event loop processes phases (timers, poll, check…). CPU-bound work blocks it, so offload to worker threads or a queue.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What is Express middleware?</summary>
    <div className="answer"><p>Functions with <code>(req, res, next)</code> that run in order on the request pipeline — auth, logging, parsing, validation, error handling. <code>next()</code> passes control along.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Handling errors in async routes?</summary>
    <div className="answer"><p>Async errors don't reach Express automatically. Wrap handlers in try/catch calling <code>next(err)</code> (or an async-wrapper helper), and finish with a centralized error middleware <code>(err, req, res, next)</code>.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>process.nextTick vs setImmediate?</summary>
    <div className="answer"><p><code>nextTick</code> callbacks run before the event loop continues (highest priority, can starve I/O if abused). <code>setImmediate</code> runs on the next loop iteration's check phase. Prefer <code>setImmediate</code> for "run soon without blocking."</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>JWT vs session auth?</summary>
    <div className="answer"><p>Sessions store state server-side — easy to revoke, needs a store. JWTs are stateless and scale horizontally but are harder to revoke early. Store tokens in httpOnly cookies (not localStorage) to limit XSS. Common pattern: short access token + refresh token.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How do you scale a Node app?</summary>
    <div className="answer"><p>Run multiple processes (cluster module or a process manager like PM2) to use all CPU cores, put them behind a load balancer, keep state external (DB/Redis) so instances are stateless, and offload heavy work to queues.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What is CORS?</summary>
    <div className="answer"><p>Browsers block cross-origin requests by default. The server opts in by returning <code>Access-Control-Allow-Origin</code> (and related) headers. It's enforced by the browser, not the server.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How do you keep secrets out of code?</summary>
    <div className="answer"><p>Environment variables from a gitignored <code>.env</code> locally and a secret manager in prod. Validate them at startup (e.g. with Zod) so misconfiguration fails fast.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What are streams and why use them?</summary>
    <div className="answer"><p>They process data in chunks instead of buffering it all in memory — essential for large files, uploads, and piping. Keeps memory flat and starts work before all data arrives.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How do you implement rate limiting?</summary>
    <div className="answer"><p>Track requests per key (IP or user) in a fast store like Redis with a sliding or fixed window, reject over the limit with 429. Middleware like <code>express-rate-limit</code> handles the common case.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What is graceful shutdown?</summary>
    <div className="answer"><p>On <code>SIGTERM</code>, stop accepting new connections, let in-flight requests finish, close DB/pool connections, then exit — so deploys don't drop live requests.</p></div></details>
</section>

<section id="pg">
  <div className="sec-head"><span className="sec-num">06</span><h2>PostgreSQL &amp; Databases</h2><span className="count">15 Q</span></div>

  <details className="qa"><summary><span className="chev">›</span>How do indexes work, and when do they hurt?</summary>
    <div className="answer"><p>Usually a B-tree that turns full scans into fast lookups. Costs: slower writes, more storage. Won't help low-selectivity columns or when you wrap the column in a function. In composite indexes, column order matters (leftmost-prefix rule).</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What is the N+1 query problem?</summary>
    <div className="answer"><p>Fetching a list (1 query) then querying per item in a loop (N queries). Fix with a JOIN, an <code>IN (...)</code> batch, ORM eager loading, or a DataLoader batcher.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How do you debug a slow query?</summary>
    <div className="answer"><p><code>EXPLAIN ANALYZE</code> to see the plan and real timings — look for sequential scans on big tables, bad row estimates, expensive sorts. Then add/adjust indexes, rewrite, or reduce rows scanned.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Explain transactions / ACID.</summary>
    <div className="answer"><p>A transaction groups statements so they all commit or all roll back. ACID = Atomicity, Consistency, Isolation, Durability. Use them when multiple writes must stay consistent (deduct balance + create record together).</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>JOIN types?</summary>
    <div className="answer"><p>INNER (matches only), LEFT (all left + matches), RIGHT (mirror), FULL (all from both). Most app queries are INNER or LEFT.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Normalization vs denormalization?</summary>
    <div className="answer"><p>Normalization removes duplication and keeps data consistent (more JOINs). Denormalization duplicates for faster reads (drift risk). Start normalized; denormalize hot read paths selectively.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What is connection pooling?</summary>
    <div className="answer"><p>Reusing a fixed set of DB connections across requests, since opening one is expensive. Critical in serverless, where many instances can exhaust connection limits — hence PgBouncer / the Supabase pooler.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What is Row Level Security?</summary>
    <div className="answer"><p>Postgres policies that decide which rows a user can read/write at the DB level based on their auth identity. Great for multi-tenant apps — rules live in the database, not just the app.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What is a CTE?</summary>
    <div className="answer"><p>A <code>WITH</code> clause that names a subquery for readability and reuse within one statement; also supports recursion (trees, hierarchies).</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What are window functions?</summary>
    <div className="answer"><p>They compute across a set of rows related to the current row without collapsing them — <code>ROW_NUMBER</code>, <code>RANK</code>, running totals, per-group ranking. Unlike <code>GROUP BY</code>, rows are preserved.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How do you do an upsert?</summary>
    <div className="answer"><p><code>INSERT ... ON CONFLICT (key) DO UPDATE SET ...</code> — insert or update in one atomic statement.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>UUID vs serial primary keys?</summary>
    <div className="answer"><p>UUIDs avoid enumeration and merge conflicts and suit distributed systems, but are larger and less cache-friendly. Serial/identity ints are smaller, ordered, faster to index. Pick per needs.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What are isolation levels?</summary>
    <div className="answer"><p>Read Committed (Postgres default), Repeatable Read, and Serializable — increasing consistency at the cost of concurrency. Higher levels prevent anomalies like phantom reads but risk more serialization failures.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>When would you use JSONB?</summary>
    <div className="answer"><p>For flexible/semi-structured data you still want to query and index (GIN indexes). Don't use it to avoid modeling well-known relational data — you lose constraints and clarity.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How do you handle schema migrations?</summary>
    <div className="answer"><p>Version-controlled, incremental migration files run in order (Prisma Migrate, Knex, etc.), tested in staging, and applied in CI. Make destructive changes backwards-compatible and roll out in steps.</p></div></details>
</section>

<section id="rn">
  <div className="sec-head"><span className="sec-num">07</span><h2>React Native</h2><span className="count">7 Q</span></div>
  <p className="sec-note">Your growth area — competent, honest answers. Don't overclaim depth.</p>

  <details className="qa"><summary><span className="chev">›</span>How does RN differ from React web?</summary>
    <div className="answer"><p>Same React model, but it renders native views (<code>&lt;View&gt;</code>, <code>&lt;Text&gt;</code>) instead of DOM, styles via a JS StyleSheet (flexbox, no CSS/HTML), and uses native navigation/APIs. Logic and hooks transfer; the UI layer and platform concerns differ.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Expo vs bare React Native?</summary>
    <div className="answer"><p>Expo is managed tooling — faster setup, over-the-air updates, a big API set, but limits on custom native modules. Bare gives full native control at the cost of more setup. Many teams start on Expo and eject only if needed.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Platform-specific code?</summary>
    <div className="answer"><p><code>Platform.OS</code> checks, or <code>.ios.tsx</code>/<code>.android.tsx</code> file extensions that RN resolves automatically.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Performance considerations?</summary>
    <div className="answer"><p>Use virtualized <code>FlatList</code>/<code>SectionList</code> for big lists, memoize rows, keep heavy work off the JS thread, and minimize re-renders. The new architecture (Fabric/JSI) reduces old bridge overhead.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How is navigation handled?</summary>
    <div className="answer"><p>Typically React Navigation — stack, tab, and drawer navigators — or Expo Router for file-based routing similar to Next.js.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Local storage in RN?</summary>
    <div className="answer"><p>AsyncStorage for simple key-value data; MMKV for faster storage; SecureStore/Keychain for tokens and secrets.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How do you handle different screen sizes?</summary>
    <div className="answer"><p>Flexbox layouts, the <code>Dimensions</code>/<code>useWindowDimensions</code> API, percentage and flex sizing, and safe-area handling for notches. Test on multiple device sizes.</p></div></details>
</section>

<section id="test">
  <div className="sec-head"><span className="sec-num">08</span><h2>Testing</h2><span className="count">7 Q</span></div>

  <details className="qa"><summary><span className="chev">›</span>Unit vs integration vs e2e?</summary>
    <div className="answer"><p>Unit = one unit in isolation. Integration = several pieces together (component + hook + mocked API). E2e = the full app in a real browser/device (Playwright/Cypress/Detox). Favor many fast unit/integration tests, fewer e2e.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Testing Library philosophy?</summary>
    <div className="answer"><p>Test behavior the user experiences, not implementation details — query by role/text, assert on what renders. Tests then survive refactors.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What do you test first?</summary>
    <div className="answer"><p>Critical paths and business logic — auth, payments, data transforms, edge cases — over trivial getters. Prioritize where a bug hurts most.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Is 100% coverage the goal?</summary>
    <div className="answer"><p>No — coverage measures lines executed, not correctness. High coverage on meaningless assertions is false comfort. Aim for meaningful tests on important paths, not a number.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How do you test async code?</summary>
    <div className="answer"><p><code>await</code> the result or use <code>findBy</code>/<code>waitFor</code> queries that retry until the async update lands. Mock network calls so tests stay fast and deterministic.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What is snapshot testing — and its risk?</summary>
    <div className="answer"><p>It saves rendered output and flags changes. Useful for stable UI, but large snapshots get rubber-stamped on update and stop catching real regressions. Keep them small and intentional.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Jest vs Vitest?</summary>
    <div className="answer"><p>Same testing model; Vitest is faster and native to Vite/ESM projects, Jest is the long-standing default with a huge ecosystem. Choose based on your build tooling.</p></div></details>
</section>

<section id="arch">
  <div className="sec-head"><span className="sec-num">09</span><h2>System Design &amp; Architecture</h2><span className="count">13 Q</span></div>

  <details className="qa"><summary><span className="chev">›</span>How would you harden an AI-generated prototype for production? <em>(JD's core theme)</em></summary>
    <div className="answer"><p>Read it end-to-end to grasp intent. Then: add input validation and error handling, pull hardcoded secrets into env, add auth/authorization checks, fix N+1s and missing indexes, add tests on critical paths, set up types + linting, and add logging/monitoring. Refactor incrementally so it stays shippable — not a big-bang rewrite.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How do you approach a messy/unfamiliar codebase?</summary>
    <div className="answer"><p>Map entry points and data flow, get it running locally, make one small safe change to build confidence, add tests around an area before refactoring, and improve in small reviewable PRs. Don't rewrite what you don't yet understand.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How do you design RBAC?</summary>
    <div className="answer"><p>Define roles and permissions, attach roles to users, enforce checks in middleware/server actions — never trust the client. For data isolation, enforce at the DB layer too (Postgres RLS). Keep permission logic centralized and auditable.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How do you make an API scale?</summary>
    <div className="answer"><p>Add indexes and fix slow queries, cache hot reads (Redis/CDN), paginate large lists, use connection pooling, add rate limiting, and move slow work to background jobs. Measure before optimizing.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>REST API design best practices?</summary>
    <div className="answer"><p>Resource nouns, correct verbs and status codes, consistent error shapes, pagination/filtering on collections, versioning, and validation on every input. Keep responses predictable.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Caching strategies — and the hard part?</summary>
    <div className="answer"><p>Cache-aside (read-through), CDN for static assets, in-memory/Redis for hot data. The hard part is invalidation — use TTLs, event-based busting on writes, or versioned keys so stale data doesn't linger.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What is idempotency and why does it matter?</summary>
    <div className="answer"><p>A repeated request has the same effect as one request. Vital for payments and retries — clients send an idempotency key so a network retry doesn't double-charge or double-create.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>When would you use a message queue?</summary>
    <div className="answer"><p>To decouple slow or spiky work from the request cycle — emails, image processing, webhooks. The API enqueues and returns fast; workers process asynchronously and retry on failure.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Horizontal vs vertical scaling?</summary>
    <div className="answer"><p>Vertical = bigger machine (simple, capped, single point of failure). Horizontal = more machines behind a load balancer (needs stateless services, scales further). Most web apps scale horizontally.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What are read replicas?</summary>
    <div className="answer"><p>Read-only DB copies that offload heavy reads from the primary. Watch for replication lag — send reads that must be current to the primary.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What are feature flags for?</summary>
    <div className="answer"><p>Toggle features without deploying — gradual rollouts, A/B tests, and instant kill switches if something breaks in production.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How do you handle a production incident?</summary>
    <div className="answer"><p>Stop the bleeding first (rollback / flag off), communicate status, diagnose with logs/monitoring, fix, verify, then run a blameless postmortem so it doesn't recur.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How do you keep code quality high across a team?</summary>
    <div className="answer"><p>Shared lint/format/TS config, meaningful PR reviews, tests in CI, clear conventions, and docs for non-obvious decisions. Automate standards so they don't rely on memory.</p></div></details>
</section>

<section id="sec">
  <div className="sec-head"><span className="sec-num">10</span><h2>Security</h2><span className="count">5 Q</span></div>

  <details className="qa"><summary><span className="chev">›</span>Core web security concerns?</summary>
    <div className="answer"><p>SQL injection (parameterized queries), XSS (escape output, avoid <code>dangerouslySetInnerHTML</code>), CSRF (tokens / SameSite cookies), secrets in env not code, HTTPS everywhere, server-side input validation, and least-privilege access. Roughly the OWASP Top 10.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How do you prevent SQL injection?</summary>
    <div className="answer"><p>Never concatenate user input into SQL — use parameterized queries / prepared statements (or a query builder/ORM that does). The input is treated as data, never executable SQL.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How do you store passwords?</summary>
    <div className="answer"><p>Hash with a slow, salted algorithm (bcrypt/argon2) — never plain text or fast hashes. Better still, offload auth to a provider (Supabase Auth, Auth0) so you don't handle raw passwords at all.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Why validate input on the server if the client already does?</summary>
    <div className="answer"><p>Client validation is UX only — anyone can bypass it and hit your API directly. The server is the trust boundary, so validate every input there (e.g. with Zod) regardless of client checks.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>localStorage vs cookies for auth tokens?</summary>
    <div className="answer"><p>localStorage is readable by any JS, so it's exposed to XSS. Prefer httpOnly, Secure, SameSite cookies so tokens aren't reachable from scripts, paired with CSRF protection.</p></div></details>
</section>

<section id="pay">
  <div className="sec-head"><span className="sec-num">11</span><h2>Payments &amp; Integrations</h2><span className="count">4 Q</span></div>
  <p className="sec-note">You've built Stripe auth-plus-capture on Campaignr — these are yours to win.</p>

  <details className="qa"><summary><span className="chev">›</span>Authorization vs capture in card payments?</summary>
    <div className="answer"><p>Authorization places a hold on funds without moving them; capture actually collects, later. Ideal for deposits or bookings — you authorize up front and capture (fully or partially) once you're sure, or release the hold if you cancel.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>How do webhooks work, and what do you watch for?</summary>
    <div className="answer"><p>The provider calls your endpoint on events (e.g. <code>payment_intent.succeeded</code>). Verify the signature, respond fast (do heavy work async), and handle idempotently — the same event can arrive more than once.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>Why never trust the amount from the client?</summary>
    <div className="answer"><p>A user can tamper with client-side values. Always compute and create the charge amount on the server from trusted data (the DB), so the price can't be manipulated in the browser.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What is Zod and where do you use it?</summary>
    <div className="answer"><p>A runtime schema-validation library that also infers TS types from one schema. Validate untrusted input — form data, API bodies, env vars, webhook payloads — so bad data is rejected at the boundary with real type safety.</p></div></details>
</section>

<section id="git">
  <div className="sec-head"><span className="sec-num">12</span><h2>Git &amp; Workflow</h2><span className="count">4 Q</span></div>

  <details className="qa"><summary><span className="chev">›</span>Merge vs rebase?</summary>
    <div className="answer"><p>Merge preserves history with a merge commit; rebase rewrites commits onto a new base for a linear history. Don't rebase shared/pushed branches — it rewrites history others rely on.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>A bad commit shipped to production — what do you do?</summary>
    <div className="answer"><p>If it broke things, <code>git revert</code> to safely undo it with a new commit (rather than rewriting shared history), redeploy, then fix forward. For a fast rollback, redeploy the previous known-good build.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What makes a good pull request?</summary>
    <div className="answer"><p>Small and focused, a clear description of what and why, passing tests/CI, and self-review first. Easier to review well means fewer bugs slip through.</p></div></details>

  <details className="qa"><summary><span className="chev">›</span>What's in a CI/CD pipeline?</summary>
    <div className="answer"><p>On push/PR: install, lint, type-check, run tests, build. On merge to main: deploy (often to staging first, then production), sometimes behind an approval. GitHub Actions is a common runner.</p></div></details>
</section>

<section id="checklist">
  <div className="sec-head"><span className="sec-num">13</span><h2>Pre-call checklist</h2></div>
  <div className="check">
    <ul>
      <li><span className="box"></span>75-second intro rehearsed out loud</li>
      <li><span className="box"></span>React Native honesty answer ready</li>
      <li><span className="box"></span>Salary range decided (X–Y) + deflection line</li>
      <li><span className="box"></span>End-to-end project story — Stairpay portal</li>
      <li><span className="box"></span>"Improved others' code" story — Captivate Angular→React</li>
      <li><span className="box"></span>Hard-bug story — the hydration error</li>
      <li><span className="box"></span>3–4 questions ready to ask them</li>
      <li><span className="box"></span>Quiet space, stable internet, resume open</li>
    </ul>
  </div>
</section>

<footer className="wrap">Study tool · self-quiz mode · tap any question to reveal · "Reveal all" to read straight through</footer>



      <h5 className="font-bold">Why should we hire you?</h5>
      <p>
        I bring more than nine years of frontend development experience building production web applications with React, Next.js, TypeScript, and modern frontend technologies. I focus on creating intuitive user experiences, writing maintainable code, and collaborating effectively with designers, product managers, and backend developers. I believe my experience in property-related financial applications makes me well suited to contribute to Bridgit.
      </p>

      <h5 className="font-bold">What are your strengths?</h5>
      <p>
        One of my biggest strengths is building intuitive and user-friendly interfaces. I enjoy translating complex business requirements into simple user experiences. I&apos;m also adaptable, enjoy learning new technologies, and communicate well with cross-functional teams to deliver high-quality products.
      </p>

      <h5 className="font-bold">What is your biggest weakness?</h5>
      <p>
        Earlier in my career, I tended to spend extra time refining small UI details because I wanted everything to be perfect. Over time, I&apos;ve learned to balance quality with delivery by prioritizing business requirements and iterating based on user feedback instead of aiming for perfection on the first release.
      </p>

      <h5 className="font-bold">Describe yourself in three words.</h5>
      <p>
        Adaptable, collaborative, and detail-oriented.
      </p>

      <h5 className="font-bold">Why did you choose frontend development?</h5>
      <p>
        I enjoy seeing the direct impact of my work on users. Frontend development allows me to combine problem-solving with creativity by building interfaces that are both functional and enjoyable to use. I find it rewarding to create applications that help users accomplish their goals efficiently.
      </p>

      <h5 className="font-bold">What motivates you?</h5>
      <p>
        I enjoy solving problems and continuously improving my skills. It&apos;s rewarding to build features that simplify complex workflows and provide a better experience for users. I also enjoy learning from teammates and working on products that have a meaningful impact.
      </p>

      <h5 className="font-bold">Tell me about a challenging project.</h5>
      <p>
        One of the more challenging projects I worked on involved building complex onboarding and application forms that collected financial and property information. The forms contained conditional logic, validation, and multiple steps. My focus was on making the process intuitive and easy to complete while maintaining performance and code quality.
      </p>

      <h5 className="font-bold">Tell me about a time you worked under pressure.</h5>
      <p>
        There were times when we had tight deadlines to deliver new features or bug fixes. I prioritized the most important tasks, communicated progress with the team, and focused on delivering a stable solution first before making additional improvements. Staying organized and communicating clearly helped us meet our deadlines.
      </p>

      <h5 className="font-bold">Tell me about a disagreement with a teammate.</h5>
      <p>
        Whenever there&apos;s a disagreement, I try to understand the reasoning behind the other person&apos;s perspective before offering my own. I prefer discussing the pros and cons of each approach and making decisions based on what&apos;s best for the product and the users rather than personal preference.
      </p>

      <h5 className="font-bold">How do you handle feedback?</h5>
      <p>
        I appreciate constructive feedback because it helps me improve. Whether it&apos;s during code reviews or design discussions, I listen carefully, ask questions when needed, and apply the feedback to improve both the feature and my own skills.
      </p>

      <h5 className="font-bold">Tell me about a mistake you made.</h5>
      <p>
        Early in my career, I underestimated the time required for a feature because I focused only on the implementation and not on testing or edge cases. Since then, I&apos;ve become more thorough when estimating work by considering development, testing, review, and unexpected issues.
      </p>

      <h5 className="font-bold">How do you prioritize your work?</h5>
      <p>
        I prioritize tasks based on business impact, urgency, and dependencies. I make sure critical issues and customer-facing problems are addressed first while communicating with the team if priorities change.
      </p>

      <h5 className="font-bold">How do you work with designers?</h5>
      <p>
        I like to collaborate with designers early in the process. We discuss requirements, review designs together, clarify edge cases, and ensure the final implementation matches the intended user experience while remaining technically practical.
      </p>

      <h5 className="font-bold">How do you work with backend developers?</h5>
      <p>
        I communicate frequently to make sure API contracts are clear before implementation. If there are any changes or limitations, we discuss them early to avoid blockers. I also test integrations thoroughly to ensure the frontend and backend work seamlessly together.
      </p>

      <h5 className="font-bold">Where do you see yourself in five years?</h5>
      <p>
        I see myself continuing to grow as a senior engineer, taking on more technical ownership, mentoring other developers, and contributing to architectural decisions while building products that make a real impact for users.
      </p>

      <h5 className="font-bold">Do you have any questions for us?</h5>
      <p>
        Yes. I&apos;d love to know more about how the frontend team is structured, how engineers collaborate with product and design, what the biggest technical challenges are for the team today, and what success looks like for someone in this role during the first six months.
      </p>

      <hr />

      <h5 className="font-bold">What is React?</h5>
      <p>
        React is a JavaScript library for building user interfaces. It uses a component-based architecture, allowing developers to build reusable UI components that manage their own state and efficiently update the DOM using the Virtual DOM.
      </p>

      <h5 className="font-bold">Why do you use React?</h5>
      <p>
        I use React because it allows me to build reusable, maintainable, and scalable user interfaces. Its component-based architecture makes code easier to organize, test, and reuse, while its ecosystem provides excellent support for routing, forms, state management, and performance optimization.
      </p>

      <h5 className="font-bold">What is JSX?</h5>
      <p>
        JSX is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript. It makes components easier to read and understand. JSX is transpiled into React.createElement() calls before being executed by the browser.
      </p>

      <h5 className="font-bold">What is the Virtual DOM?</h5>
      <p>
        The Virtual DOM is a lightweight copy of the real DOM. When state changes, React updates the Virtual DOM first, compares it with the previous version using a diffing algorithm, and updates only the parts of the real DOM that changed. This improves performance.
      </p>

      <h5 className="font-bold">What is the difference between the Virtual DOM and the Real DOM?</h5>
      <p>
        The Real DOM is the actual browser DOM and updating it is relatively expensive. The Virtual DOM is an in-memory representation that React uses to determine the minimum number of changes required before updating the Real DOM.
      </p>

      <h5 className="font-bold">What are components?</h5>
      <p>
        Components are reusable pieces of UI. They encapsulate their own logic and presentation, making applications easier to maintain and scale.
      </p>

      <h5 className="font-bold">What&apos;s the difference between functional and class components?</h5>
      <p>
        Functional components are simpler, use Hooks for state and lifecycle management, and are the standard approach in modern React. Class components use lifecycle methods and this.state, but they are rarely used in new React applications.
      </p>

      <h5 className="font-bold">What is state?</h5>
      <p>
        State is data that belongs to a component and can change over time. When state changes, React automatically re-renders the component to reflect the updated data.
      </p>

      <h5 className="font-bold">What are props?</h5>
      <p>
        Props are read-only values passed from a parent component to a child component. They allow components to communicate and make reusable components configurable.
      </p>

      <h5 className="font-bold">What&apos;s the difference between props and state?</h5>
      <p>
        Props are passed into a component and cannot be modified by that component. State is managed within the component and can be updated using state setters, causing the component to re-render.
      </p>

      <h5 className="font-bold">What is useState?</h5>
      <p>
        useState is a React Hook that allows functional components to manage local state. It returns the current state value and a setter function used to update that state.
      </p>

      <h5 className="font-bold">What is useEffect?</h5>
      <p>
        useEffect is used for side effects such as fetching data, subscribing to events, updating the document title, or interacting with APIs. It runs after the component renders and can optionally clean up resources when the component unmounts.
      </p>

      <h5 className="font-bold">When does useEffect run?</h5>
      <p>
        Without a dependency array, it runs after every render. With an empty dependency array, it runs only once after the initial render. When dependencies are provided, it runs whenever one of those dependencies changes.
      </p>

      <h5 className="font-bold">What is the cleanup function in useEffect?</h5>
      <p>
        The cleanup function is returned from useEffect and runs before the effect executes again or when the component unmounts. It&apos;s commonly used to remove event listeners, clear timers, or cancel subscriptions.
      </p>

      <h5 className="font-bold">What is useMemo?</h5>
      <p>
        useMemo memoizes the result of an expensive calculation so it doesn&apos;t run on every render. It only recalculates when one of its dependencies changes. I use it only when there&apos;s a measurable performance benefit.
      </p>

      <h5 className="font-bold">What is useCallback?</h5>
      <p>
        useCallback memoizes a function instead of a value. It keeps the same function reference between renders, which is useful when passing callbacks to memoized child components or when functions are dependencies of other Hooks.
      </p>

      <h5 className="font-bold">What&apos;s the difference between useMemo and useCallback?</h5>
      <p>
        useMemo memoizes a computed value, while useCallback memoizes a function. Internally, useCallback is essentially a specialized version of useMemo for functions.
      </p>

      <h5 className="font-bold">What is useRef?</h5>
      <p>
        useRef stores a mutable value that persists across renders without causing re-renders. It&apos;s commonly used to access DOM elements, store previous values, or hold timers and other mutable references.
      </p>

      <h5 className="font-bold">What is React.memo?</h5>
      <p>
        React.memo is a higher-order component that prevents unnecessary re-renders by only re-rendering when the component&apos;s props change. It&apos;s useful for optimizing components that receive the same props frequently.
      </p>

      <h5 className="font-bold">When would you use React.memo?</h5>
      <p>
        I use React.memo for components that are expensive to render and often receive the same props. Before using it, I verify that it actually improves performance because unnecessary memoization can increase complexity.
      </p>

      <h5 className="font-bold">What is conditional rendering?</h5>
      <p>
        Conditional rendering displays different UI based on a condition. Common techniques include if statements, the ternary operator, and logical && operators.
      </p>

      <h5 className="font-bold">What are controlled components?</h5>
      <p>
        Controlled components have their input values managed by React state. Every change updates the component&apos;s state, making validation and form handling much easier.
      </p>

      <h5 className="font-bold">What are uncontrolled components?</h5>
      <p>
        Uncontrolled components manage their own internal state using the DOM. They are accessed using refs and are less common in modern React applications.
      </p>

      <h5 className="font-bold">Why do list items need keys?</h5>
      <p>
        Keys help React identify which items have changed, been added, or removed. Stable and unique keys improve rendering performance and prevent UI inconsistencies.
      </p>

      <h5 className="font-bold">Why shouldn&apos;t you use array indexes as keys?</h5>
      <p>
        Array indexes can cause incorrect UI updates when items are inserted, removed, or reordered because React may associate state with the wrong item. Stable unique IDs are preferred.
      </p>

      <h5 className="font-bold">How do parent and child components communicate?</h5>
      <p>
        Parents pass data to children through props. Children communicate back to parents by calling callback functions passed as props.
      </p>

      <h5 className="font-bold">How do sibling components communicate?</h5>
      <p>
        Sibling components usually communicate by lifting state up to their common parent. For larger applications, shared state can also be managed using Context or a state management library such as Zustand.
      </p>

      <h5 className="font-bold">What is Context API?</h5>
      <p>
        Context API allows data to be shared across multiple components without passing props through every level. It&apos;s useful for global data such as themes, authentication, or language preferences.
      </p>

      <h5 className="font-bold">When would you use Context instead of Zustand?</h5>
      <p>
        I use Context for relatively static global data like themes or authenticated users. For more complex shared application state with frequent updates, I prefer Zustand because it&apos;s lightweight, avoids unnecessary re-renders, and scales well.
      </p>

      <h5 className="font-bold">How do you optimize React performance?</h5>
      <p>
        I optimize performance by avoiding unnecessary re-renders, memoizing expensive computations only when needed, lazy loading components, optimizing images, virtualizing large lists, paginating data, and keeping components focused and reusable.
      </p>

      <h5 className="font-bold">How do you structure a React application?</h5>
      <p>
        I prefer organizing projects by feature rather than by file type. Each feature contains its own components, hooks, services, validation, and types. Shared components, utilities, and layouts are kept in common folders to encourage reuse and maintainability.
      </p>

      <h5 className="font-bold">How do you build reusable components?</h5>
      <p>
        I keep components focused on a single responsibility, make them configurable through props, avoid embedding business logic into presentation components, and design them so they can be reused across multiple features.
      </p>

      <h5 className="font-bold">How do you handle forms?</h5>
      <p>
        I typically use React Hook Form together with Zod. React Hook Form provides excellent performance with minimal re-renders, while Zod offers type-safe validation that integrates well with TypeScript.
      </p>

      <h5 className="font-bold">How do you fetch API data?</h5>
      <p>
        I usually fetch data inside useEffect for straightforward cases or use dedicated data-fetching libraries depending on the project. I handle loading states, error states, and cleanup to provide a smooth user experience.
      </p>

      <h5 className="font-bold">How do you handle errors in React?</h5>
      <p>
        I validate user input, catch API errors, display user-friendly error messages, and log unexpected issues for debugging. For larger applications, I also use React Error Boundaries to prevent the entire application from crashing.
      </p>

      <h5 className="font-bold">What are Error Boundaries?</h5>
      <p>
        Error Boundaries are React components that catch JavaScript errors during rendering, in lifecycle methods, and in child components. They display a fallback UI instead of allowing the application to crash.
      </p>

      <h5 className="font-bold">Tell me about a React feature you&apos;re proud of building.</h5>
      <p>
        One feature I&apos;m particularly proud of was building complex multi-step onboarding and application forms for Shared Ownership residents. The forms included conditional validation, financial calculations, and property information. I focused on making the experience intuitive while keeping the code modular, reusable, and maintainable.
      </p>

      <hr />

      <h5 className="font-bold">What is Next.js?</h5>
      <p>
        Next.js is a React framework that provides features such as file-based routing, Server-Side Rendering (SSR), Static Site Generation (SSG), API routes, image optimization, middleware, and performance optimizations. It helps developers build production-ready React applications more efficiently.
      </p>

      <h5 className="font-bold">Why do you use Next.js instead of React?</h5>
      <p>
        React is a library for building user interfaces, while Next.js is a framework built on top of React. Next.js provides routing, server rendering, SEO improvements, performance optimizations, API routes, and a better project structure, allowing developers to focus more on building features.
      </p>

      <h5 className="font-bold">What&apos;s the difference between React and Next.js?</h5>
      <p>
        React focuses on building UI components, whereas Next.js adds features like routing, rendering strategies, API routes, middleware, and optimizations. React is the foundation, while Next.js provides the application framework.
      </p>

      <h5 className="font-bold">What is Server-Side Rendering (SSR)?</h5>
      <p>
        SSR renders the page on the server for every request before sending the HTML to the browser. It is useful for dynamic content that needs to be up to date and improves SEO because search engines receive fully rendered HTML.
      </p>

      <h5 className="font-bold">When would you use SSR?</h5>
      <p>
        I use SSR when the content changes frequently and needs to be fresh for every request, such as dashboards, authenticated pages, personalized content, or frequently changing product information.
      </p>

      <h5 className="font-bold">What is Static Site Generation (SSG)?</h5>
      <p>
        SSG generates HTML at build time. Since the pages are already generated before deployment, they load very quickly and are ideal for content that rarely changes.
      </p>

      <h5 className="font-bold">When would you use SSG?</h5>
      <p>
        I use SSG for pages that don&apos;t change often, such as marketing pages, blogs, documentation, company information, or landing pages.
      </p>

      <h5 className="font-bold">What is Client-Side Rendering (CSR)?</h5>
      <p>
        CSR renders the page in the browser after JavaScript has loaded. The browser downloads a minimal HTML page and React builds the UI. It is suitable for highly interactive applications where SEO is less important.
      </p>

      <h5 className="font-bold">When would you use CSR?</h5>
      <p>
        I use CSR for authenticated dashboards, internal applications, admin panels, or pages that depend heavily on user interaction and don&apos;t require SEO.
      </p>

      <h5 className="font-bold">What is Incremental Static Regeneration (ISR)?</h5>
      <p>
        ISR combines the benefits of SSG and SSR. Pages are generated statically but can be regenerated after a specified interval without rebuilding the entire application.
      </p>

      <h5 className="font-bold">When would you use ISR?</h5>
      <p>
        ISR is useful when content changes occasionally, such as property listings, product catalogs, or news articles. It keeps pages fast while ensuring content remains reasonably up to date.
      </p>

      <h5 className="font-bold">What are Server Components?</h5>
      <p>
        Server Components execute on the server and send only the rendered HTML to the client. They reduce the amount of JavaScript sent to the browser, improve performance, and can directly access databases or backend services without exposing sensitive code.
      </p>

      <h5 className="font-bold">What are Client Components?</h5>
      <p>
        Client Components run in the browser and support interactivity such as state, event handlers, and React Hooks like useState and useEffect. They are declared by adding the {`"use client"`} directive at the top of the file.
      </p>

      <h5 className="font-bold">When should you use a Server Component?</h5>
      <p>
        I use Server Components when rendering static or data-driven content that doesn&apos;t require browser interactivity. They improve performance by reducing the amount of JavaScript sent to the client.
      </p>

      <h5 className="font-bold">When should you use a Client Component?</h5>
      <p>
        I use Client Components whenever the page requires state management, event handlers, animations, forms, or browser APIs.
      </p>

      <h5 className="font-bold">Can Server Components use useState or useEffect?</h5>
      <p>
        No. Server Components cannot use React Hooks such as useState, useEffect, or browser APIs because they execute on the server. If those features are required, the component must be a Client Component.
      </p>

      <h5 className="font-bold">What is the App Router?</h5>
      <p>
        The App Router is the modern routing system introduced in Next.js. It uses the app directory and supports nested layouts, Server Components, loading states, error handling, and streaming by default.
      </p>

      <h5 className="font-bold">What are layouts in the App Router?</h5>
      <p>
        Layouts allow multiple pages to share the same UI, such as navigation bars or sidebars. Unlike traditional page layouts, they persist across navigation, reducing unnecessary re-renders.
      </p>

      <h5 className="font-bold">What is loading.tsx?</h5>
      <p>
        loading.tsx provides an automatic loading UI while a route or Server Component is fetching data. It improves the user experience by displaying a loading state without additional code.
      </p>

      <h5 className="font-bold">What is error.tsx?</h5>
      <p>
        error.tsx acts as an error boundary for a route. If an error occurs while rendering that route, Next.js displays the error component instead of crashing the application.
      </p>

      <h5 className="font-bold">What is not-found.tsx?</h5>
      <p>
        not-found.tsx is displayed whenever Next.js cannot find the requested route or when the notFound() function is called.
      </p>

      <h5 className="font-bold">How do you fetch data in Next.js?</h5>
      <p>
        In the App Router, I typically fetch data inside Server Components using async/await. For interactive pages or client-side updates, I fetch data inside Client Components using useEffect or a data-fetching library depending on the project&apos;s requirements.
      </p>

      <h5 className="font-bold">What is hydration?</h5>
      <p>
        Hydration is the process where React attaches JavaScript functionality to the HTML generated by the server. After hydration, the page becomes fully interactive.
      </p>

      <h5 className="font-bold">What is a hydration error?</h5>
      <p>
        A hydration error occurs when the HTML rendered on the server doesn&apos;t match what React renders on the client. Common causes include using Math.random(), Date.now(), or browser APIs during server rendering.
      </p>

      <h5 className="font-bold">What are API Routes?</h5>
      <p>
        API Routes allow developers to build backend endpoints directly inside a Next.js application. They are useful for handling form submissions, authentication, database operations, or integrating third-party services.
      </p>

      <h5 className="font-bold">Have you used API Routes?</h5>
      <p>
        Yes. I&apos;ve used API routes to handle server-side logic, communicate securely with external services, and keep sensitive information such as API keys on the server instead of exposing them to the client.
      </p>

      <h5 className="font-bold">What is middleware in Next.js?</h5>
      <p>
        Middleware runs before a request reaches a route. It is commonly used for authentication, authorization, redirects, localization, and request rewriting.
      </p>

      <h5 className="font-bold">Have you used middleware?</h5>
      <p>
        Yes. I&apos;ve used middleware primarily to protect authenticated routes by checking whether a user is logged in before allowing access to certain pages.
      </p>

      <h5 className="font-bold">How do you protect pages in Next.js?</h5>
      <p>
        Protected pages can be implemented using middleware, server-side authentication checks, or client-side redirects depending on the application&apos;s authentication strategy.
      </p>

      <h5 className="font-bold">What is image optimization?</h5>
      <p>
        Next.js provides the Image component, which automatically optimizes images by resizing, lazy loading, and serving modern image formats when supported. This improves performance and Core Web Vitals.
      </p>

      <h5 className="font-bold">What is code splitting?</h5>
      <p>
        Code splitting loads only the JavaScript required for the current page instead of downloading the entire application. Next.js performs automatic code splitting, resulting in faster page loads.
      </p>

      <h5 className="font-bold">What is lazy loading?</h5>
      <p>
        Lazy loading delays loading components until they are actually needed. This reduces the initial bundle size and improves page performance.
      </p>

      <h5 className="font-bold">How do you optimize a Next.js application?</h5>
      <p>
        I optimize Next.js applications by using Server Components where appropriate, optimizing images with the Image component, lazy loading heavy components, minimizing client-side JavaScript, using caching strategies, and selecting the appropriate rendering method such as SSR, SSG, or ISR.
      </p>

      <h5 className="font-bold">Explain SSR, CSR, SSG, and ISR in simple terms.</h5>
      <p>
        SSR builds the page every time someone visits it. CSR builds the page in the browser after JavaScript loads. SSG builds the page once during deployment. ISR builds the page once and updates it automatically after a specified interval. The choice depends on how frequently the data changes and whether SEO is important.
      </p>

      <h5 className="font-bold">Which rendering strategy would you choose for Bridgit?</h5>
      <p>
        It depends on the page. Marketing pages would benefit from SSG or ISR because they&apos;re SEO-friendly and fast. Authenticated dashboards would use CSR since they depend on user-specific data. Pages requiring fresh server data, such as loan information or personalized content, could use SSR. I generally choose the rendering strategy based on the page&apos;s purpose and performance requirements.
      </p>

      <hr />

      <h5 className="font-bold">What is TypeScript?</h5>
      <p>
        TypeScript is a superset of JavaScript that adds static typing. It helps catch errors during development, improves code maintainability, and provides better IDE support through features like autocomplete and type checking.
      </p>

      <h5 className="font-bold">Why do you use TypeScript?</h5>
      <p>
        I use TypeScript because it helps prevent runtime errors by catching issues during development. It also makes code easier to understand, improves refactoring, and provides better documentation through types.
      </p>

      <h5 className="font-bold">What is the difference between TypeScript and JavaScript?</h5>
      <p>
        JavaScript is dynamically typed, while TypeScript adds static typing. TypeScript code is compiled into JavaScript before it runs in the browser or Node.js.
      </p>

      <h5 className="font-bold">What is the difference between type and interface?</h5>
      <p>
        Both are used to describe the shape of data. I generally use interfaces for defining object contracts, especially when they may be extended or implemented by classes. I use types for unions, intersections, tuples, primitive aliases, and more complex type compositions. In most React applications, either can describe component props, but types are often more flexible.
      </p>

      <h5 className="font-bold">When would you use interface?</h5>
      <p>
        I use interfaces when defining the structure of objects, API responses, or component contracts that may need to be extended. They work well for object-oriented designs and are easier to merge through declaration merging.
      </p>

      <h5 className="font-bold">When would you use type?</h5>
      <p>
        I use types for unions, intersections, mapped types, utility types, tuples, function signatures, and aliases. They provide greater flexibility when composing complex types.
      </p>

      <h5 className="font-bold">Can a type extend another type?</h5>
      <p>
        Yes. Types can be combined using intersections with the & operator, while interfaces extend other interfaces using the extends keyword.
      </p>

      <h5 className="font-bold">What is a union type?</h5>
      <p>
        A union type allows a variable to have one of several possible types using the | operator.
      </p>

      <pre><code>{`type Status = "loading" | "success" | "error";`}</code></pre>

      <h5 className="font-bold">What is an intersection type?</h5>
      <p>
        An intersection combines multiple types into one using the & operator.
      </p>

      <pre><code>{`
        type User = {
          name: string;
}

        type Employee = {
          salary: number;
}

        type Staff = User & Employee;
      `}</code></pre>

      <h5 className="font-bold">What is any?</h5>
      <p>
        The any type disables TypeScript&apos;s type checking. I avoid using it unless absolutely necessary because it removes the benefits of static typing.
      </p>

      <h5 className="font-bold">What is unknown?</h5>
      <p>
        Unknown is a safer version of any. Values must be type-checked before they can be used, making code much safer.
      </p>

      <h5 className="font-bold">What&apos;s the difference between any and unknown?</h5>
      <p>
        Any bypasses all type checking, while unknown requires narrowing before the value can be used.
      </p>

      <h5 className="font-bold">What is never?</h5>
      <p>
        The never type represents values that never occur, such as functions that always throw an error or have an infinite loop.
      </p>

      <h5 className="font-bold">What is void?</h5>
      <p>
        Void represents a function that doesn&apos;t return a value.
      </p>

      <pre><code>{`
        function logMessage(): void {
          console.log("Hello");
}
      `}</code></pre>

      <h5 className="font-bold">What are Generics?</h5>
      <p>
        Generics allow functions, interfaces, and classes to work with multiple data types while maintaining type safety and avoiding code duplication.
      </p>

      <pre><code>{`
        function identity<T>(value: T): T {
  return value;
}
      `}</code></pre>

      <h5 className="font-bold">Why use Generics?</h5>
      <p>
        Generics create reusable functions and components without sacrificing type safety. They make code more flexible while preserving accurate type information.
      </p>

      <h5 className="font-bold">What is keyof?</h5>
      <p>
        The keyof operator creates a union of an object&apos;s property names.
      </p>

      <pre><code>{`
        interface User {
          name: string;
          age: number;
        }

        type Keys = keyof User;
        // "name" | "age"
      `}</code></pre>

      <h5 className="font-bold">What is typeof?</h5>
      <p>
        The typeof operator extracts the type of an existing variable.
      </p>

      <pre><code>{`
        const user = {
          name: "Jon"
}

        type User = typeof user;
      `}</code></pre>

      <h5 className="font-bold">What is Record?</h5>
      <p>
        Record creates an object type with specified keys and values.
      </p>

      <pre><code>{`
        type Users = Record<string, number>;
      `}</code></pre>

      <h5 className="font-bold">What is Partial?</h5>
      <p>
        Partial makes every property in a type optional. It&apos;s commonly used when updating existing objects.
      </p>

      <pre><code>{`
        interface User {
          name: string;
        age: number;
        }

        type UpdateUser = Partial<User>;
      `}</code></pre>

      <h5 className="font-bold">What is Required?</h5>
      <p>
        Required makes all optional properties mandatory.
      </p>

      <h5 className="font-bold">What is Pick?</h5>
      <p>
        Pick creates a new type by selecting specific properties from another type.
      </p>

      <pre><code>{`
        type UserName = Pick<User, "name">;
      `}</code></pre>

      <h5 className="font-bold">What is Omit?</h5>
      <p>
        Omit creates a new type by removing specific properties.
      </p>

      <pre><code>{`
        type UserWithoutAge = Omit<User, "age">;
      `}</code></pre>

      <h5 className="font-bold">What is Readonly?</h5>
      <p>
        Readonly makes properties immutable after they are assigned.
      </p>

      <h5 className="font-bold">What are Enums?</h5>
      <p>
        Enums provide a way to define a set of named constants. However, in modern React applications I often prefer string literal unions because they generate less JavaScript and provide similar type safety.
      </p>

      <h5 className="font-bold">What are Literal Types?</h5>
      <p>
        Literal types restrict values to specific strings, numbers, or booleans.
      </p>

      <pre><code>{`
        type Role = "admin" | "user";
      `}</code></pre>

      <h5 className="font-bold">What is Optional Chaining?</h5>
      <p>
        Optional chaining allows safe access to nested properties without causing runtime errors if an intermediate property is undefined.
      </p>

      <pre><code>{`
        user?.address?.city
      `}</code></pre>

      <h5 className="font-bold">What is Nullish Coalescing?</h5>
      <p>
        The ?? operator returns the right-hand value only when the left-hand value is null or undefined.
      </p>

      <pre><code>{`
        const name = user.name ?? "Guest";
      `}</code></pre>

      <h5 className="font-bold">What is Type Narrowing?</h5>
      <p>
        Type narrowing allows TypeScript to determine a more specific type through checks such as typeof, instanceof, or custom type guards.
      </p>

      <h5 className="font-bold">What is a Type Guard?</h5>
      <p>
        A type guard is a runtime check that narrows a variable to a more specific type.
      </p>

      <pre><code>{`
        if (typeof value === "string") {
          console.log(value.toUpperCase());
        }
      `}</code></pre>

      <h5 className="font-bold">What is an Interface used for in React?</h5>
      <p>
        Interfaces are commonly used to define component props, API responses, and shared object structures to improve type safety and documentation.
      </p>

      <h5 className="font-bold">How do you type React props?</h5>
      <p>
        I usually define a Props interface or type and assign it to the component.
      </p>

      <pre><code>{`
        interface ButtonProps {
          label: string;
          onClick: () => void;
        }

        function Button({label, onClick}: ButtonProps) {
          return (
            <button onClick={onClick}>
              {label}
            </button>
          );
        }
      `}</code></pre>

      <h5 className="font-bold">How do you type useState?</h5>
      <p>
        TypeScript usually infers the type automatically, but for nullable or complex values I explicitly define the type.
      </p>

      <pre><code>{`
        const [user, setUser] = useState<User | null>(null);
      `}</code></pre>

      <h5 className="font-bold">How do you type API responses?</h5>
      <p>
        I create interfaces or types that match the API response so TypeScript can validate the returned data and provide autocomplete throughout the application.
      </p>

      <h5 className="font-bold">What TypeScript features do you use most?</h5>
      <p>
        In my daily work I frequently use interfaces, types, generics, utility types such as Partial and Pick, union types, optional chaining, nullish coalescing, and strongly typed React props.
      </p>

      <h5 className="font-bold">What are the biggest benefits of TypeScript?</h5>
      <p>
        TypeScript catches errors early, improves maintainability, enhances developer productivity with better tooling, makes refactoring safer, and serves as documentation through explicit types.
      </p>

      <h5 className="font-bold">Do you always use interface over type?</h5>
      <p>
        No. I choose the one that best fits the situation. I generally use interfaces for object shapes and types for unions, intersections, and more complex type compositions. The important thing is maintaining consistency across the codebase.
      </p>

      <hr />

      <h5 className="font-bold">How do you structure a large frontend application?</h5>
      <p>
        I prefer organizing applications by feature rather than by file type. Each feature contains its own components, hooks, services, validation, types, and utilities. Shared UI components, layouts, and common hooks live in shared folders. This structure keeps related code together and makes the application easier to scale and maintain.
      </p>

      <h5 className="font-bold">How do you build reusable components?</h5>
      <p>
        I design components to have a single responsibility and make them configurable through props instead of hardcoding behavior. I also separate presentation from business logic whenever possible, allowing components to be reused across multiple features.
      </p>

      <h5 className="font-bold">What makes a good React component?</h5>
      <p>
        A good React component is reusable, easy to understand, focused on a single responsibility, well-typed with TypeScript, and avoids unnecessary complexity. It should also be easy to test and maintain.
      </p>

      <h5 className="font-bold">How do you avoid prop drilling?</h5>
      <p>
        For small applications, prop drilling is acceptable. As applications grow, I use Context for simple global state and Zustand for more complex shared state to avoid passing props through multiple component levels.
      </p>

      <h5 className="font-bold">Why do you use Zustand?</h5>
      <p>
        I like Zustand because it&apos;s lightweight, easy to learn, requires very little boilerplate, and performs well. It allows me to manage global state without the complexity of larger state management libraries.
      </p>

      <h5 className="font-bold">When would you choose Context over Zustand?</h5>
      <p>
        I use Context for relatively static global values such as themes or authenticated users. For frequently changing shared state or more complex business logic, I prefer Zustand because it minimizes unnecessary re-renders and scales better.
      </p>

      <h5 className="font-bold">How do you handle forms?</h5>
      <p>
        I typically use React Hook Form together with Zod. React Hook Form provides excellent performance by minimizing re-renders, while Zod gives me type-safe validation and keeps validation logic clean and reusable.
      </p>

      <h5 className="font-bold">Why React Hook Form?</h5>
      <p>
        It performs very well because it relies on uncontrolled components internally, reducing unnecessary re-renders. It also integrates seamlessly with TypeScript and validation libraries such as Zod.
      </p>

      <h5 className="font-bold">Why Zod?</h5>
      <p>
        Zod provides a single source of truth for validation while integrating closely with TypeScript. It keeps validation logic consistent between forms and improves maintainability.
      </p>

      <h5 className="font-bold">How do you handle API calls?</h5>
      <p>
        I keep API logic separate from UI components whenever possible. I handle loading states, error states, retries where appropriate, and ensure users receive clear feedback throughout the request lifecycle.
      </p>

      <h5 className="font-bold">How do you handle loading states?</h5>
      <p>
        I always provide visual feedback such as skeleton loaders, loading indicators, or disabled buttons while data is loading so users know the application is working.
      </p>

      <h5 className="font-bold">How do you handle errors?</h5>
      <p>
        I validate inputs before submission, catch API errors gracefully, display user-friendly error messages, and log unexpected issues for debugging. The goal is to help users recover instead of showing technical errors.
      </p>

      <h5 className="font-bold">How do you optimize frontend performance?</h5>
      <p>
        I optimize performance by avoiding unnecessary re-renders, memoizing expensive computations only when needed, lazy loading large components, optimizing images, reducing bundle sizes, paginating large datasets, and minimizing unnecessary API calls.
      </p>

      <h5 className="font-bold">How do you reduce unnecessary re-renders?</h5>
      <p>
        I avoid recreating objects and functions unnecessarily, use React.memo for expensive components, use useCallback and useMemo only when there&apos;s a measurable performance benefit, and keep component state as localized as possible.
      </p>

      <h5 className="font-bold">How do you handle authentication?</h5>
      <p>
        Authentication usually involves storing user sessions securely, protecting routes, validating user permissions, and redirecting unauthenticated users appropriately. In Next.js, I&apos;ve used middleware and protected routes to restrict access.
      </p>

      <h5 className="font-bold">How do you protect frontend routes?</h5>
      <p>
        I typically protect routes using authentication middleware or server-side checks. If a user isn&apos;t authenticated, they&apos;re redirected to the login page before accessing protected content.
      </p>

      <h5 className="font-bold">How do you work with designers?</h5>
      <p>
        I like to collaborate with designers early by reviewing mockups, discussing edge cases, and clarifying interactions before development begins. Throughout implementation, I communicate any technical constraints and work together to find practical solutions.
      </p>

      <h5 className="font-bold">How do you work with backend developers?</h5>
      <p>
        I communicate early to confirm API contracts, expected request and response formats, validation requirements, and error handling. This reduces integration issues later in development.
      </p>

      <h5 className="font-bold">How do you review code?</h5>
      <p>
        I look for readability, maintainability, performance, potential bugs, consistency with coding standards, and whether the implementation solves the business requirement in the simplest way possible.
      </p>

      <h5 className="font-bold">What do you look for during a pull request?</h5>
      <p>
        I check for code quality, naming consistency, reusable logic, edge cases, TypeScript correctness, unnecessary complexity, and whether the solution follows existing project patterns.
      </p>

      <h5 className="font-bold">How do you debug frontend issues?</h5>
      <p>
        I first reproduce the issue consistently, inspect the browser console and network requests, use React Developer Tools, verify state updates, and narrow down the root cause before implementing a fix.
      </p>

      <h5 className="font-bold">Tell me about a difficult bug you fixed.</h5>
      <p>
        One issue involved data not updating correctly because of asynchronous state changes after an API response. I reproduced the issue, inspected the request flow, identified stale state, and updated the state management logic to ensure the UI reflected the latest data consistently.
      </p>

      <h5 className="font-bold">How do you estimate tasks?</h5>
      <p>
        I break features into smaller tasks, consider development, testing, reviews, and edge cases, then estimate based on complexity and dependencies. I also communicate uncertainty early if requirements are still evolving.
      </p>

      <h5 className="font-bold">How do you prioritize work?</h5>
      <p>
        I prioritize based on business value, customer impact, urgency, and dependencies. Critical production issues always take priority, followed by planned feature work.
      </p>

      <h5 className="font-bold">How do you ensure a good user experience?</h5>
      <p>
        I focus on creating intuitive navigation, clear feedback, understandable forms, responsive layouts, fast loading times, and presenting the right amount of information without overwhelming users.
      </p>

      <h5 className="font-bold">How do you approach responsive design?</h5>
      <p>
        I build mobile-first layouts using flexible grids, responsive utilities, and reusable components. I test across different screen sizes to ensure a consistent experience on desktop, tablet, and mobile devices.
      </p>

      <h5 className="font-bold">How do you improve accessibility?</h5>
      <p>
        I use semantic HTML, proper form labels, keyboard navigation, accessible buttons, sufficient color contrast, and ARIA attributes when appropriate. Accessibility is something I consider throughout development rather than adding it at the end.
      </p>

      <h5 className="font-bold">What is semantic HTML?</h5>
      <p>
        {`Semantic HTML uses meaningful elements such as <header>, <main>, <section>, <article>, and <footer> instead of generic divs. It improves accessibility, SEO, and code readability.`}
      </p>

      <h5 className="font-bold">How do you keep your code maintainable?</h5>
      <p>
        I keep functions and components small, follow consistent naming conventions, avoid duplication, extract reusable logic into hooks or utilities, and write code that&apos;s easy for other developers to understand.
      </p>

      <h5 className="font-bold">Tell me about a feature you&apos;re most proud of.</h5>
      <p>
        I&apos;m particularly proud of building complex onboarding and staircasing workflows for Shared Ownership residents. The process involved collecting financial and property information through intuitive multi-step forms while ensuring a smooth user experience. I focused on making the interface easy to understand, responsive, and maintainable despite the complexity of the business requirements.
      </p>

      <h5 className="font-bold">What does being a Senior Frontend Engineer mean to you?</h5>
      <p>
        To me, being a senior engineer is about more than writing code. It means taking ownership of features, making sound technical decisions, collaborating effectively with cross-functional teams, mentoring other developers when possible, and building maintainable solutions that provide real value to users and the business.
      </p>

      <hr />


      <h5 className="font-bold">Tell me about your previous role at StairPay.</h5>
      <p>
        At StairPay, I developed and maintained frontend features for two connected web applications using Next.js, React, TypeScript, Tailwind CSS, and Supabase. One application was the Resident Portal, where residents could manage their Shared Ownership information and submit staircasing applications. The other was the Housing Association platform, where staff managed developments, property units, listings, enquiries, and resident applications.
      </p>

      <h5 className="font-bold">What was your main responsibility?</h5>
      <p>
        My primary responsibility was developing frontend features and translating business requirements into responsive, user-friendly interfaces. I built reusable components, complex forms, dashboards, and integrated frontend functionality with Supabase and backend APIs.
      </p>

      <h5 className="font-bold">What technologies did you use?</h5>
      <p>
        I mainly used Next.js, React, TypeScript, Tailwind CSS, React Hook Form, Zod, Supabase, Highcharts, Git, and GitHub. Depending on the project, I also worked with REST APIs and modern frontend development practices.
      </p>

      <h5 className="font-bold">What is a Housing Association?</h5>
      <p>
        Housing Associations are non-profit organizations in the UK that own, manage, and develop affordable housing. They help people access homes through schemes such as Shared Ownership while managing properties and supporting residents throughout their home ownership journey.
      </p>

      <h5 className="font-bold">What is Shared Ownership?</h5>
      <p>
        Shared Ownership is a housing scheme where residents purchase a percentage of a property, typically between 25% and 75%, and pay rent on the remaining share owned by the Housing Association. Residents can gradually increase their ownership through a process called staircasing.
      </p>

      <h5 className="font-bold">What is staircasing?</h5>
      <p>
        Staircasing is the process of buying additional shares in a Shared Ownership property. As residents purchase more shares, the percentage they own increases and the rent paid to the Housing Association decreases. Eventually, depending on the property, they may own 100% of the home.
      </p>

      <h5 className="font-bold">Why did residents enter mortgage information?</h5>
      <p>
        Mortgage information was collected because it was required to assess affordability. The platform considered factors such as mortgage payments, outstanding balances, household expenses, and income to help determine whether a resident could afford to purchase additional shares.
      </p>

      <h5 className="font-bold">What information did residents provide?</h5>
      <p>
        Residents entered their Shared Ownership details, property information, mortgage details, household bills, and other financial information required for affordability calculations and staircasing applications.
      </p>

      <h5 className="font-bold">What did the Resident Portal do?</h5>
      <p>
        The Resident Portal allowed residents to manage their Shared Ownership profile, complete affordability information, track monthly expenses, use staircasing calculators, and submit staircasing applications directly to their Housing Association.
      </p>

      <h5 className="font-bold">What did the Housing Association platform do?</h5>
      <p>
        The platform allowed Housing Association staff to manage resident applications, assign case managers, monitor application progress, manage developments and units, publish listings, review enquiries, and oversee the entire staircasing process.
      </p>

      <h5 className="font-bold">What are developments?</h5>
      <p>
        Developments are housing projects or residential sites. Each development contains multiple property units that can be listed, sold, or managed by the Housing Association.
      </p>

      <h5 className="font-bold">What are units?</h5>
      <p>
        Units are the individual properties within a development. For example, a development may be an apartment complex, while each apartment inside it is considered a unit.
      </p>

      <h5 className="font-bold">What was the biggest technical challenge?</h5>
      <p>
        One of the biggest challenges was building complex multi-step forms with conditional validation and calculations. Different users had different situations, so the forms needed to dynamically show or hide fields while keeping validation accurate and maintaining a smooth user experience.
      </p>

      <h5 className="font-bold">How did you improve the user experience?</h5>
      <p>
        I focused on creating responsive layouts, simplifying complex workflows, breaking long forms into manageable steps, providing clear validation messages, and presenting information in a way that was easy for users to understand without feeling overwhelmed.
      </p>

      <h5 className="font-bold">Did you build reusable components?</h5>
      <p>
        Yes. I built reusable form components, tables, dialogs, buttons, cards, layouts, and shared UI elements that were used across multiple features. This improved consistency and reduced duplicated code throughout the application.
      </p>

      <h5 className="font-bold">Why did you choose React Hook Form?</h5>
      <p>
        React Hook Form provides excellent performance because it minimizes unnecessary re-renders. It also integrates well with Zod and TypeScript, making complex forms easier to build and maintain.
      </p>

      <h5 className="font-bold">Why did you use Zod?</h5>
      <p>
        Zod provided type-safe validation while keeping validation rules centralized and easy to maintain. It integrated naturally with React Hook Form and reduced duplicated validation logic.
      </p>

      <h5 className="font-bold">Why did you use Supabase?</h5>
      <p>
        Supabase gave us authentication, PostgreSQL, storage, and APIs in a single platform. It allowed us to build features quickly while reducing backend infrastructure work and integrating easily with our frontend applications.
      </p>

      <h5 className="font-bold">Did you work with authentication?</h5>
      <p>
        Yes. I worked with Supabase Authentication to manage user sessions, protected routes, login flows, and access control within the application.
      </p>

      <h5 className="font-bold">Did you work with APIs?</h5>
      <p>
        Yes. I integrated frontend features with Supabase APIs and backend endpoints, handled asynchronous requests, managed loading and error states, and ensured data was presented correctly to users.
      </p>

      <h5 className="font-bold">Tell me about Twenty7Tec.</h5>
      <p>
        At Twenty7Tec, I worked on websites, plugins, and mortgage-related calculators used within the UK mortgage industry. My role focused primarily on frontend development, implementing responsive interfaces, and integrating calculator functionality into client websites.
      </p>

      <h5 className="font-bold">Did you work on lending systems?</h5>
      <p>
        I wasn&apos;t directly involved in building lending platforms, but I worked on mortgage-related calculators and became familiar with concepts such as affordability, mortgages, bridging loans, and commercial loans. That experience gave me a good understanding of the terminology used in the property and finance industry.
      </p>

      <h5 className="font-bold">Tell me about your WordPress experience.</h5>
      <p>
        I developed custom WordPress websites by converting designs into responsive, user-friendly pages. I also customized themes, integrated plugins, and ensured the websites were optimized for performance and usability.
      </p>

      <h5 className="font-bold">Tell me about your Shopify experience.</h5>
      <p>
        I worked on Shopify storefront customization by implementing responsive user interfaces, modifying themes, and improving the customer shopping experience while maintaining consistency with the client&apos;s branding.
      </p>

      <h5 className="font-bold">What project are you most proud of?</h5>
      <p>
        I&apos;m most proud of the Resident Portal because it simplified a complex financial process for users. The platform collected affordability information, property details, mortgage data, and guided residents through the staircasing journey using intuitive forms and a clear user experience.
      </p>

      <h5 className="font-bold">Why do you think your experience fits Bridgit?</h5>
      <p>
        Although my previous role focused on Shared Ownership rather than lending, there is significant overlap in the property and financial domains. I&apos;ve worked with mortgages, affordability calculations, property information, customer onboarding, and complex financial forms. I believe that experience provides a strong foundation for learning Bridgit&apos;s products and contributing quickly.
      </p>

      <h5 className="font-bold">What did you learn from StairPay?</h5>
      <p>
        I learned how to translate complex business requirements into simple, user-friendly applications. I also improved my skills in React, Next.js, TypeScript, frontend architecture, collaboration with cross-functional teams, and building products within the property and financial technology space.
      </p>

      <h5 className="font-bold">If we hire you, what can you contribute?</h5>
      <p>
        I can contribute strong frontend development experience, a focus on building intuitive user experiences, and the ability to quickly understand complex business domains. I&apos;m comfortable collaborating across teams, delivering production-ready features, and continuously learning new technologies and business processes.
      </p>


      <hr />
    </main>
  );
}
