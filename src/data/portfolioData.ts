export interface Project {
  id: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  architecture: string;
  techStack: string[];
  keyDecisions: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  swaggerUrl: string;
  status: "live" | "demo" | "planned";
  endpoints: { method: string; path: string; desc: string }[];
  databaseModel: { entity: string; attributes: string; relations: string }[];
  challenges: { challenge: string; solution: string }[];
  performance: string[];
}

export const PERSONAL_INFO = {
  name: "Arnab Saha",
  role: "Backend Engineer",
  headline: "Java Backend Engineer | Spring Boot | Microservices | Cloud",
  experienceSummary: "~2 years",
  location: "Kolkata, India",
  company: "Accenture — Associate Software Engineer",
  bio: "Building scalable backend systems, reliable APIs and cloud-native services.",
  email: "reach.arnab.saha@gmail.com",
  github: "https://github.com/Arnab-Saha-2506",
  linkedin: "https://www.linkedin.com/in/arnab-saha-8b829b189/",
  resumePdf: "/ArnabSaha_Resume.pdf",
};

export const ENGINEERING_METRICS = [
  {
    value: 15,
    suffix: "+",
    label: "High-Availability Microservices",
    description: "Production RESTful services engineered with Java 17/21 and Spring Boot.",
    tag: "Scale",
  },
  {
    value: 10,
    suffix: "K+",
    label: "Synchronous Req / Minute",
    description: "High-throughput traffic processed with low-latency stability.",
    tag: "Throughput",
  },
  {
    value: 22,
    suffix: "%",
    label: "Query & API Latency Reduction",
    description: "Achieved via application log analysis, JPA/Hibernate optimization and custom indexing.",
    tag: "Performance",
  },
  {
    value: 100,
    suffix: "K+",
    label: "Subscribers Supported",
    description: "Enterprise user base served reliably across distributed services.",
    tag: "Impact",
  },
  {
    value: 5,
    suffix: "+",
    label: "Monolithic Utilities Containerized",
    description: "Packaged into isolated Docker containers with 40% setup time reduction.",
    tag: "DevOps",
  },
  {
    value: 20,
    suffix: "+",
    label: "Quarterly Downtime Hours Avoided",
    description: "Prevented through automated workflows, log debugging, and resilient error recovery.",
    tag: "Reliability",
  },
];

export const EXPERIENCE_ITEMS = [
  {
    company: "Accenture",
    role: "Associate Software Engineer",
    duration: "Aug 2024 – Jul 2026",
    location: "Kolkata, India",
    type: "Full-Time",
    overview:
      "Engineered high-availability distributed backend systems, automated deployment pipelines, and optimized relational data pipelines for enterprise-scale workloads.",
    highlights: [
      "Engineered 15+ high-availability RESTful microservices using Java 17/21 and Spring Boot.",
      "Worked on systems processing 10,000+ synchronous requests/minute with strict SLA adherence.",
      "Reduced query/API latency by approximately 22% through application log analysis, JPA/Hibernate optimization, and custom composite indexing.",
      "Dockerized 5+ monolithic client utilities, standardizing environments across teams.",
      "Reduced deployment setup time by approximately 40% through containerized reproducible baselines.",
      "Automated operational/deployment workflows reducing manual touchpoints and runtime errors.",
      "Resolved critical production issues using distributed logs, thread dumps, and live debugging.",
      "Actively participated in rigorous code reviews, API contract governance, and Agile delivery sprints.",
    ],
    techStack: [
      "Java 17/21",
      "Spring Boot",
      "Spring Data JPA",
      "Hibernate",
      "REST APIs",
      "Docker",
      "Microsoft Azure",
      "MySQL",
      "Git",
      "CI/CD",
    ],
  },
];

export const SKILL_CATEGORIES = [
  {
    name: "Backend",
    highlight: true,
    skills: [
      { name: "Java", level: "Primary", desc: "Core Java, OOP, Streams, Concurrency, Virtual Threads, JVM Internals" },
      { name: "Spring Boot", level: "Primary", desc: "Microservices architecture, Dependency Injection, Actuator, Configuration" },
      { name: "Spring Security", level: "Advanced", desc: "Role-based access control, Filter chain customization, OAuth2 resource server" },
      { name: "REST APIs", level: "Advanced", desc: "Idempotent design, OpenAPI specs, JSON Schema, HTTP status semantics" },
      { name: "JPA & Hibernate", level: "Advanced", desc: "Entity lifecycle, N+1 query elimination, fetch strategies, 2nd-level caching" },
      { name: "JWT", level: "Advanced", desc: "Stateless session validation, token rotation, cryptographic verification" },
      { name: "Microservices", level: "Advanced", desc: "Service discovery, API gateway pattern, asynchronous inter-service messaging" },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", level: "Primary", desc: "Schema normalization, EXPLAIN execution plans, B-Tree & composite indexing, ACID" },
      { name: "MongoDB", level: "Advanced", desc: "Document modeling, aggregation pipelines, replica set querying" },
    ],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      { name: "Microsoft Azure", level: "Advanced", desc: "Azure App Services, Container Instances, Blob Storage, monitoring alerts" },
      { name: "Docker", level: "Advanced", desc: "Multi-stage Dockerfiles, minimal base images, container networking, compose" },
      { name: "CI/CD", level: "Proficient", desc: "Automated build, test verification, container registry publishing" },
      { name: "Git", level: "Advanced", desc: "Branching strategies, rebase workflows, pull request reviews" },
    ],
  },
  {
    name: "Programming",
    skills: [
      { name: "Java", level: "Core", desc: "Primary production language (Java 17/21 LTS)" },
      { name: "C++", level: "Proficient", desc: "Low-level memory awareness, data structures, algorithms foundations" },
      { name: "SQL", level: "Advanced", desc: "Complex joins, window functions, query plan analysis, schema migrations" },
    ],
  },
  {
    name: "Engineering",
    skills: [
      { name: "DSA", level: "Advanced", desc: "Algorithmic complexity, tree/graph traversals, cache-friendly data layouts" },
      { name: "System Design", level: "Advanced", desc: "Layered architecture, high availability, fault tolerance, connection pools" },
      { name: "API Design", level: "Advanced", desc: "Clean contract design, predictable error models, versioning, pagination" },
      { name: "Database Optimization", level: "Advanced", desc: "Index profiling, eliminating full table scans, query rewrites" },
      { name: "Performance Tuning", level: "Advanced", desc: "JVM memory profiling, latency bottleneck analysis, connection leak audit" },
      { name: "Debugging", level: "Advanced", desc: "Log correlation, thread dump inspection, root cause analysis" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "pujapath",
    name: "PujaPath",
    tagline: "Kolkata Durga Puja Discovery & Navigation Platform",
    problem:
      "Navigating Kolkata during Durga Puja involves over 3,000 pandals scattered across the metropolis, creating massive transit congestion and difficulty in discovering pandals by transit hubs and metro corridors.",
    solution:
      "Engineered a resilient Spring Boot backend providing fast geospatial search, pandal categorization, metro station transit mappings, and route discovery for pandal hoppers across Kolkata.",
    architecture:
      "Tiered Clean Architecture: Client -> REST Controller -> Service Layer (Geospatial & Filtering Logic) -> Spring Data JPA Repository -> MySQL with Spatial / B-Tree Indexing.",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "MySQL",
      "REST API",
      "Cloud Deployment",
    ],
    keyDecisions: [
      "Designed relational schema separating Pandal entities from Metro Stations with indexed join tables for O(1) zone lookups.",
      "Implemented Haversine geospatial distance calculation in repository queries to return pandals sorted by radial distance from nearest metro stations.",
      "Created structured DTO projection layer to prevent over-fetching and eliminate lazy-initialization exceptions.",
      "Added in-memory response caching for hot regional clusters to handle high concurrent spikes during festival peaks.",
    ],
    githubUrl: "https://github.com/Arnab-Saha-2506/PujaParikrama",
    liveDemoUrl: "https://pujapath.pages.dev",
    swaggerUrl: "https://pujapath-me23.onrender.com/swagger-ui/index.html",
    status: "live",
    endpoints: [
      { method: "GET", path: "/api/v1/pandals?zone=NORTH&limit=20", desc: "Fetch pandals filtered by zone with pagination" },
      { method: "GET", path: "/api/v1/pandals/nearby?lat=22.5726&lng=88.3639&radiusKm=3", desc: "Radial geospatial search near user or metro" },
      { method: "GET", path: "/api/v1/pandals/{id}", desc: "Fetch detailed pandal metadata, history, and closest metro egress" },
      { method: "GET", path: "/api/v1/metro/stations", desc: "List all operational metro hubs with mapped pandal counts" },
    ],
    databaseModel: [
      { entity: "Pandal", attributes: "id (PK), name, zone, latitude, longitude, crowd_tier, description", relations: "Many-to-One -> MetroStation" },
      { entity: "MetroStation", attributes: "id (PK), station_name, line_color, latitude, longitude", relations: "One-to-Many -> Pandal" },
      { entity: "RouteWaypoints", attributes: "id (PK), pandal_id, step_order, instruction", relations: "Many-to-One -> Pandal" },
    ],
    challenges: [
      {
        challenge: "High query latency on distance calculations when scanning all pandal records.",
        solution: "Introduced bounding-box pre-filtering in SQL with indexed latitude/longitude boundaries prior to calculating exact Haversine distance."
      },
      {
        challenge: "Simultaneous read bursts during festival evenings causing connection pool exhaustion.",
        solution: "Configured HikariCP pool metrics and enabled read-only transactional boundaries with HTTP cache-control headers."
      }
    ],
    performance: [
      "Under 45ms average response time for paginated regional queries",
      "Zero N+1 queries across pandal-to-metro relationship mappings",
      "Indexed geo-coordinates preventing full table scans across 3,000+ entries"
    ]
  },
  {
    id: "slotify",
    name: "Slotify",
    tagline: "High-Concurrency Appointment Scheduling Backend",
    problem:
      "Scheduling systems face serious concurrency pitfalls: multiple clients attempting to book the exact same time slot simultaneously, timezone mismatch errors, and fragmented booking windows.",
    solution:
      "Built a Calendly-inspired scheduling engine with strict transactional isolation, dynamic slot generation based on provider availability masks, and atomic locking to completely eliminate double bookings.",
    architecture:
      "Microservice Pattern: Dockerized Spring Boot service with JPA optimistic/pessimistic locking mechanisms, scheduled cleanup daemon, and MySQL persistence.",
    techStack: [
      "Java",
      "Spring Boot",
      "JPA / Hibernate",
      "MySQL",
      "REST API",
      "Docker",
    ],
    keyDecisions: [
      "Enforced DB-level pessimistic locking (`PESSIMISTIC_WRITE`) during the slot reservation confirmation transaction to prevent concurrent race conditions.",
      "Implemented UTC standardization at the persistence layer paired with user timezone offset conversion at the API boundary.",
      "Engineered dynamic slot generation algorithms based on provider weekly schedule patterns minus active bookings and buffer times.",
      "Added idempotency key checks in booking headers to prevent accidental duplicate client submits.",
    ],
    githubUrl: "https://github.com/Arnab-Saha-2506/Slotify",
    liveDemoUrl: "https://slotify-fe.vercel.app/",
    swaggerUrl: "https://slotify-api-zjzu.onrender.com/swagger-ui/index.html",
    status: "live",
    endpoints: [
      { method: "GET", path: "/api/v1/schedules/{providerId}/available-slots?date=2026-10-01&tz=Asia/Kolkata", desc: "Dynamic available slot calculation" },
      { method: "POST", path: "/api/v1/bookings/reserve", desc: "Atomic slot reservation with idempotency token" },
      { method: "POST", path: "/api/v1/bookings/{bookingId}/confirm", desc: "Finalize booking and lock calendar window" },
      { method: "DELETE", path: "/api/v1/bookings/{bookingId}/cancel", desc: "Release slot back to availability pool" },
    ],
    databaseModel: [
      { entity: "ProviderSchedule", attributes: "id (PK), provider_id, day_of_week, start_time, end_time, slot_duration_min", relations: "One-to-Many -> TimeSlot" },
      { entity: "Booking", attributes: "id (PK), booking_ref (UNIQUE), provider_id, client_email, status, start_utc, end_utc, version", relations: "Many-to-One -> ProviderSchedule" },
      { entity: "SlotReservationLock", attributes: "id (PK), slot_hash (UNIQUE), expires_at, locked_by_session", relations: "Transient lock table" },
    ],
    challenges: [
      {
        challenge: "Simultaneous double-booking attempts occurring in the millisecond window between reading slot status and writing booking row.",
        solution: "Applied database transaction with `SELECT ... FOR UPDATE` row locks combined with unique composite constraints on `(provider_id, start_utc)`."
      },
      {
        challenge: "Daylight saving time transitions causing slot shifts for cross-continental scheduling.",
        solution: "Stored all timestamps in pure UTC with `Instant` types, doing timezone arithmetic strictly via `ZoneId` in domain service logic."
      }
    ],
    performance: [
      "100% elimination of double-booking race conditions under load test simulations",
      "Dynamic slot generation executed in under 20ms for full-month lookups",
      "Containerized with Alpine JRE for sub-300MB deployment footprint"
    ]
  }
];

export const EDUCATION = {
  degree: "B.Tech in Electronics & Communication Engineering",
  institution: "Narula Institute of Technology",
  period: "2020 – 2024",
  location: "Kolkata, India",
  focus: "Core foundations in Computer Science, Data Structures, Algorithms, DBMS, and Distributed Systems.",
};
