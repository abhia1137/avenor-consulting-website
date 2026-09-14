/* Original editorial content for Avenor's service, industry and insight pages. */
window.AVENOR_CONTENT = {
  "core-banking": {
    type: "service",
    eyebrow: "Services / Core banking",
    title: "Move your banking core forward. Keep the business moving.",
    intro:
      "A banking transformation succeeds when product ambition, operational reality and platform design move together. Avenor helps shape practical modernization around Temenos Transact / T24, connected applications and the processes that depend on them.",
    image: "banking",
    highlights: [
      "Temenos Transact / T24",
      "Migration and integration",
      "Operational readiness",
    ],
    sections: [
      {
        heading: "Start with the operating model",
        body: "Before choosing a release, migration pattern or delivery sequence, establish what the bank needs to do differently. Map product structures, customer journeys, servicing processes and control points to the current platform. This creates a shared view of which capabilities belong in the core, which can sit alongside it and which dependencies must change first.",
        items: [
          "Capability and dependency assessment",
          "Product and process mapping",
          "A prioritized transformation roadmap",
        ],
      },
      {
        heading: "Make the surrounding architecture work",
        body: "The core sits within a larger banking environment. Payments, digital channels, finance, risk and reporting need reliable contracts for exchanging information. Define APIs, events, batch interfaces and reconciliation responsibilities together. Where IBM or mainframe systems remain part of the landscape, include their operating windows and constraints in the design instead of treating them as an exception.",
      },
      {
        heading: "Treat migration as a business discipline",
        body: "Data conversion requires more than a technically successful load. Agree on source ownership, transformation rules, balance validation and exception handling with business teams. Rehearse realistic migration cycles, measure the time each step takes and document clear go/no-go criteria. Product configuration, historical data and downstream accounting should be assessed as one connected transition.",
        items: [
          "Data mapping and reconciliation",
          "Migration rehearsals and cutover planning",
          "Functional and integration validation",
        ],
      },
      {
        heading: "Build confidence beyond launch",
        body: "Prepare service teams for the environment they will actually operate. Include observability, incident ownership, support procedures and knowledge transfer in the delivery plan. A useful handover explains how to diagnose a failed transaction, reconcile a broken flow and make a controlled change. The aim is a core platform that the organization can maintain and evolve with confidence.",
      },
    ],
  },
  "enterprise-integration": {
    type: "service",
    eyebrow: "Services / Enterprise integration",
    title: "Connect complex systems around a clearer architecture.",
    intro:
      "Disconnected applications create work for customers and operations teams. Avenor helps establish an integration foundation across APIs, events and data flows, with MuleSoft and existing enterprise platforms working within a coherent delivery model.",
    image: "architecture",
    highlights: [
      "MuleSoft and API architecture",
      "Events and orchestration",
      "Legacy connectivity",
    ],
    sections: [
      {
        heading: "Design around real business exchanges",
        body: "Start with the information that needs to move and the decisions it enables. Identify system ownership, required freshness, transaction boundaries and recovery expectations. A customer update, a payment instruction and an overnight reporting extract have different needs. Make those differences explicit before selecting an API, message, event or managed batch pattern.",
        items: [
          "Interface and dependency inventory",
          "Integration patterns and reference architecture",
          "A sequenced implementation backlog",
        ],
      },
      {
        heading: "Give APIs a dependable contract",
        body: "Useful APIs remain understandable as the systems behind them change. Define clear resource models, validation rules, authentication requirements and versioning policies. In a MuleSoft environment, use system, process and experience layers where they create meaningful separation. Avoid creating additional layers simply to match a diagram; each boundary should have a clear owner and purpose.",
      },
      {
        heading: "Connect the systems you have",
        body: "Modern integration must account for existing Oracle applications, IBM platforms, mainframe workloads and file-based interfaces. Understand their capacity, processing windows and failure modes. Introduce adapters and controlled service boundaries where useful, while retaining reconciliation and auditability. The transition can then progress incrementally without assuming that every source system will be replaced at the same time.",
        items: [
          "Legacy adapters and service enablement",
          "Error handling and replay design",
          "End-to-end correlation and monitoring",
        ],
      },
      {
        heading: "Make integration a maintained capability",
        body: "Publishing an endpoint is only the beginning. Establish a catalog, ownership model and support expectations that make integrations discoverable and manageable. Test contracts, document breaking-change policies and trace failures across systems. This operating discipline helps teams reuse what already exists and gives the business a clearer understanding of how connected processes behave.",
      },
    ],
  },
  payments: {
    type: "service",
    eyebrow: "Services / Payments",
    title: "Design payment journeys for clarity at every step.",
    intro:
      "Payment experiences depend on much more than the initiation screen. Avenor helps connect channels, processing platforms, banking cores and operations so that each payment has a clear path, an understandable status and an accountable owner.",
    image: "banking",
    highlights: [
      "Payment orchestration",
      "Core and channel connectivity",
      "Reconciliation and exceptions",
    ],
    sections: [
      {
        heading: "Understand the full payment lifecycle",
        body: "Map the journey from instruction capture through validation, authorization, processing, settlement and reconciliation. Identify where responsibility changes between applications or teams, and where a customer-facing status differs from the underlying financial state. These boundaries often determine whether a payment can be explained, recovered and supported when something unexpected happens.",
        items: [
          "Journey and processing-flow assessment",
          "Status and exception mapping",
          "A prioritized modernization plan",
        ],
      },
      {
        heading: "Create reliable orchestration",
        body: "Define how payment instructions are validated, routed and tracked across the environment. Consider duplicate submissions, delayed responses, retries and partial failures explicitly. APIs and events should communicate stable identifiers and meaningful states, with clear rules for which component can advance a transaction. Integration with Temenos Transact / T24 and other cores should preserve these responsibilities.",
      },
      {
        heading: "Bring operations into the design",
        body: "A technically accepted message does not necessarily mean a completed payment. Design reconciliation around the relevant financial records and processing milestones. Give operations teams searchable references, actionable exception categories and controlled resolution paths. Include approvals and audit trails where required, while keeping routine investigation understandable to the people responsible for resolving customer enquiries.",
        items: [
          "Reconciliation and investigation workflows",
          "Exception queues and operational reporting",
          "Traceability across connected applications",
        ],
      },
      {
        heading: "Validate behavior under pressure",
        body: "Test more than the happy path. Exercise timeout handling, repeat instructions, unavailable dependencies and delayed settlement information. Evaluate volumes against the expected operating profile and agree on service-level expectations with platform owners. A delivery plan should also include controlled rollout, support readiness and a practical approach to observing payment health after release.",
      },
    ],
  },
  "data-analytics": {
    type: "service",
    eyebrow: "Services / Data and analytics",
    title: "Turn fragmented data into decisions people can trust.",
    intro:
      "Better reporting starts with a dependable foundation. Avenor connects data engineering, shared business definitions and practical analytics across Power BI, Oracle, SAS and the systems that hold your operational information.",
    image: "data",
    highlights: [
      "Power BI and decision support",
      "Oracle and SAS ecosystems",
      "Data quality and governance",
    ],
    sections: [
      {
        heading: "Begin with the decision",
        body: "A dashboard is useful when its audience knows which question it answers and what action follows. Work backwards from a business decision to the measures, dimensions and source records it requires. Agree on definitions with the teams that use them, including how to handle missing values, adjustments and reporting cutoffs.",
        items: [
          "Reporting and analytics assessment",
          "Shared KPI and business definitions",
          "A prioritized data delivery roadmap",
        ],
      },
      {
        heading: "Build a traceable data foundation",
        body: "Connect source systems through repeatable ingestion and transformation processes. Define ownership, freshness expectations and validation rules at each stage. In Oracle and other enterprise data environments, account for the demands placed on operational systems as well as downstream reporting. Data lineage and reconciliation should make it possible to explain where a reported value came from.",
      },
      {
        heading: "Make analytics usable in everyday work",
        body: "Shape Power BI models and reports around consistent measures, appropriate access and clear navigation. Bring relevant SAS workloads into the wider analytics architecture with explicit inputs, outputs and ownership. A useful experience allows readers to move from an overview to the underlying detail without losing the context, filters or definitions that make a number meaningful.",
        items: [
          "Semantic models and interactive reporting",
          "Operational and management analytics",
          "Access, refresh and performance design",
        ],
      },
      {
        heading: "Prepare for more advanced use cases",
        body: "AI and predictive work depend on the same foundations as dependable reporting: accessible data, known limitations and accountable owners. Assess candidate use cases against data readiness and the decisions they will influence. Begin with a bounded problem, a measurable evaluation approach and appropriate human review, then expand only when the evidence supports it.",
      },
    ],
  },
  "cloud-modernization": {
    type: "service",
    eyebrow: "Services / Cloud modernization",
    title: "Modernize with a plan your enterprise can operate.",
    intro:
      "Moving infrastructure is one part of modernization. Avenor helps align application changes, cloud foundations and operational practices so that each migration supports a clear business purpose and a maintainable long-term environment.",
    image: "architecture",
    highlights: [
      "Application portfolio assessment",
      "Cloud and hybrid architecture",
      "Delivery and operations",
    ],
    sections: [
      {
        heading: "Choose a path for each workload",
        body: "Assess applications by business value, dependencies, operating constraints and the cost of change. Some workloads can move with limited adaptation; others benefit from restructuring, replacement or continued operation in their current environment. A useful roadmap explains why each path was chosen and sequences work around shared dependencies, contractual commitments and business change windows.",
        items: [
          "Application and dependency assessment",
          "Migration options and sequencing",
          "A practical target architecture",
        ],
      },
      {
        heading: "Establish the foundation first",
        body: "Define identity, network boundaries, environment structure, logging and deployment controls before scaling migration. Agree on who owns provisioning, access reviews, incident response and cost visibility. The foundation should support the organization's operating model while giving application teams a repeatable route to delivery. Document deliberate exceptions so they remain visible as the environment grows.",
      },
      {
        heading: "Modernize around business boundaries",
        body: "Application change works best when it follows a comprehensible business capability. Introduce service boundaries and automated delivery where they reduce friction, while retaining the transaction behavior the business relies on. Hybrid environments may continue to include Oracle databases, IBM platforms and mainframe systems. Their connectivity, latency and recovery needs should shape the migration plan from the start.",
        items: [
          "Application refactoring and service extraction",
          "Infrastructure and deployment automation",
          "Hybrid integration and data movement",
        ],
      },
      {
        heading: "Make operation part of completion",
        body: "Define what a healthy application looks like and how teams will respond when it is not healthy. Include service indicators, backup and recovery exercises, runbooks and resource visibility in acceptance criteria. Modernization is ready for handover when support teams can observe the service, diagnose common failures and make controlled changes using repeatable procedures.",
      },
    ],
  },
  "quality-engineering": {
    type: "service",
    eyebrow: "Services / Quality engineering",
    title: "Make release confidence part of how you deliver.",
    intro:
      "Quality is established through clear requirements, representative environments and useful evidence. Avenor helps embed testing across enterprise delivery, with particular attention to connected applications, financial workflows and the changes that carry the most business risk.",
    image: "team",
    highlights: [
      "Risk-based test strategy",
      "Automation and integration testing",
      "Release readiness",
    ],
    sections: [
      {
        heading: "Test the risks that matter",
        body: "Translate business outcomes and system dependencies into a focused quality strategy. Identify the transactions, data conditions and failure scenarios that could materially affect customers or operations. Define acceptance criteria before implementation and make responsibilities clear across product, engineering and testing teams. Coverage should reflect meaningful behavior, rather than simply the number of cases executed.",
        items: [
          "Quality assessment and test planning",
          "Requirements and acceptance criteria",
          "Risk and coverage mapping",
        ],
      },
      {
        heading: "Automate at the right boundaries",
        body: "Use fast, targeted checks close to the code and broader tests where systems interact. Contract tests can expose incompatible API changes, while selected end-to-end journeys confirm that connected processes still work. Keep automated checks maintainable by controlling test data and avoiding unnecessary dependence on unstable interfaces. Every recurring failure should be understandable enough for a team to investigate.",
      },
      {
        heading: "Validate the enterprise journey",
        body: "A core banking or payments release can affect channels, integration services, batch processing and reporting. Exercise those connections with representative data and explicit reconciliation checks. Include access controls, recovery behavior and performance where relevant to the change. For Temenos Transact / T24, Oracle and IBM environments, align test execution with the configuration and processing cycles being released.",
        items: [
          "Functional and integration validation",
          "Data migration and reconciliation checks",
          "Performance and resilience scenarios",
        ],
      },
      {
        heading: "Give release decisions useful evidence",
        body: "Bring together results, unresolved defects, environment limitations and operational readiness in a clear release assessment. Decision-makers need to understand what was tested, what remains uncertain and the practical consequence of each known issue. After launch, connect incident learning back to the test strategy so that quality improves with the system instead of restarting at every release.",
      },
    ],
  },
  "application-development": {
    type: "service",
    eyebrow: "Services / Application development",
    title: "Build software around the way your business works.",
    intro:
      "From customer experiences to internal operations, useful applications solve a defined problem and fit the enterprise around them. Avenor combines product thinking, application engineering and integration design to turn that intent into working software.",
    image: "team",
    highlights: [
      "Web and enterprise applications",
      "Product and experience design",
      "Integration and modernization",
    ],
    sections: [
      {
        heading: "Find the smallest valuable outcome",
        body: "Begin with the people who will use the application and the work they need to accomplish. Map the current journey, investigate friction and agree on a clear first release. A focused scope creates room to validate assumptions without losing sight of the broader product. Define success in terms of observable behavior and business usefulness.",
        items: [
          "Discovery and workflow mapping",
          "Experience design and prototypes",
          "Product scope and delivery roadmap",
        ],
      },
      {
        heading: "Design for the surrounding enterprise",
        body: "An application rarely stands alone. It needs identity, authoritative data, integration contracts and a clear relationship with existing systems. Address those boundaries early, including connections to core banking, Oracle applications, MuleSoft services or IBM platforms where relevant. Choose an architecture that the owning team can support, with enough structure to evolve without unnecessary complexity.",
      },
      {
        heading: "Deliver in reviewable increments",
        body: "Turn product scope into working slices that can be demonstrated and evaluated. Bring design, engineering and quality together throughout development so that interaction details and failure behavior receive attention alongside functionality. Use version control, automated delivery and appropriate checks to keep changes understandable. Review progress against the intended user outcome and adjust the backlog as evidence develops.",
        items: [
          "Frontend and backend engineering",
          "API and enterprise integration",
          "Testing and deployment automation",
        ],
      },
      {
        heading: "Plan for a useful life after launch",
        body: "A successful handover includes more than source code. Prepare operational documentation, ownership, monitoring and a maintainable delivery process. Make common support tasks clear and record the architectural choices that future teams will inherit. With this foundation, the application can respond to changing requirements through controlled improvements instead of becoming another difficult system to replace.",
      },
    ],
  },
  banking: {
    type: "industry",
    eyebrow: "Industries / Banking",
    title: "Connect banking ambition with the systems that deliver it.",
    intro:
      "Banks need to evolve products and experiences while keeping essential services dependable. Avenor brings a connected perspective across core banking, payments, integration and data, helping turn broad transformation programs into practical delivery priorities.",
    image: "banking",
    highlights: [
      "Core banking and payments",
      "Connected customer journeys",
      "Data and operational visibility",
    ],
    sections: [
      {
        heading: "Modernize the core in context",
        body: "A core platform decision affects far more than a technology team. Product configuration, servicing, accounting and downstream reporting need to move together. Shape Temenos Transact / T24 modernization around that wider operating context, with a clear approach to data migration, integration dependencies and the business controls that must remain effective throughout transition.",
        items: [
          "Core banking assessment and modernization",
          "Product and process alignment",
          "Migration readiness and reconciliation",
        ],
      },
      {
        heading: "Make customer journeys work end to end",
        body: "A digital experience is only as clear as the information and processes behind it. Connect channels to customer records, product services and payment systems through well-defined interfaces. Pay particular attention to status changes, handoffs and exceptions, so customers and service teams can understand what has happened and what needs to happen next.",
      },
      {
        heading: "Give operations a connected view",
        body: "Banking operations depend on timely, consistent information across transaction processing, reconciliation and management reporting. Establish shared definitions and traceable data flows rather than creating another isolated dashboard. Power BI, Oracle and SAS can each play a role in a coherent analytics environment when source ownership, refresh expectations and access requirements are explicit.",
        items: [
          "Payment and servicing integration",
          "Operational reporting and analytics",
          "Data quality and exception visibility",
        ],
      },
      {
        heading: "Deliver change at a manageable pace",
        body: "Break transformation into releases that can be tested, explained and operated. Account for dependencies on IBM or mainframe platforms, processing windows and the teams responsible for business continuity. Include release evidence, cutover rehearsals and support readiness as part of delivery. The result should be a practical route forward that fits the bank's actual environment.",
      },
    ],
  },
  "financial-services": {
    type: "industry",
    eyebrow: "Industries / Financial services",
    title: "Make complex financial operations easier to connect and manage.",
    intro:
      "Financial services organizations often operate across specialized applications, changing products and demanding information needs. Avenor helps connect these environments through purposeful application engineering, enterprise integration and dependable data foundations.",
    image: "data",
    highlights: [
      "Connected platforms",
      "Operational workflows",
      "Decision-ready information",
    ],
    sections: [
      {
        heading: "Bring the operating landscape into focus",
        body: "Start by mapping the capabilities that support customer onboarding, servicing, transaction processing and business oversight. Identify where teams re-enter information, reconcile competing records or depend on manual handoffs. This view helps distinguish a user experience problem from a data ownership or integration problem, making it easier to choose a useful first investment.",
        items: [
          "Application and workflow assessment",
          "Capability and dependency mapping",
          "A sequenced improvement roadmap",
        ],
      },
      {
        heading: "Connect specialized systems deliberately",
        body: "Different financial products can require different platforms, but shared information still needs consistent meaning. Establish clear contracts for customer, account and transaction data. APIs, events and scheduled exchanges should each have defined ownership, recovery behavior and monitoring. MuleSoft and existing enterprise integration tools can support this architecture when their responsibilities are designed around actual business flows.",
      },
      {
        heading: "Strengthen the information foundation",
        body: "Operational and management reporting should be traceable to the records it represents. Align definitions, validation rules and refresh expectations across Oracle, SAS, Power BI and other data components. Make known limitations visible, including incomplete coverage or delayed source information. This gives users the context they need to interpret measures and investigate exceptions with greater confidence.",
        items: [
          "Data engineering and reporting models",
          "Operational dashboards and investigation views",
          "Access and information ownership",
        ],
      },
      {
        heading: "Build applications that support real work",
        body: "Internal tools and customer applications should simplify a defined workflow, not reproduce organizational complexity on screen. Design around common tasks and understandable exception paths. Connect application changes to quality engineering and support readiness so that a successful demonstration becomes a maintainable service. Start with a bounded capability, validate its usefulness and extend it through reviewable releases.",
      },
    ],
  },
  insurance: {
    type: "industry",
    eyebrow: "Industries / Insurance",
    title: "Create a more connected insurance operating environment.",
    intro:
      "Insurance experiences span people, policies, documents and decisions across multiple systems. Avenor helps improve the connections between customer journeys and internal operations, with application modernization, integration and data services shaped around the insurance lifecycle.",
    image: "team",
    highlights: [
      "Policy and claims connectivity",
      "Customer and partner experiences",
      "Operational analytics",
    ],
    sections: [
      {
        heading: "Follow the lifecycle across systems",
        body: "Map how information moves through quotation, policy administration, servicing and claims. Identify where status becomes unclear, documents are separated from their context or teams need to consult multiple applications to complete a task. A connected view of the lifecycle helps prioritize changes that remove practical friction for customers, partners and operations teams.",
        items: [
          "Customer and operational journey mapping",
          "Application and interface assessment",
          "A focused modernization roadmap",
        ],
      },
      {
        heading: "Build dependable integration boundaries",
        body: "Policy, billing, claims and document systems each have their own records and responsibilities. Define what information each owns and how changes are communicated. Use APIs, events or scheduled exchanges according to the process, with clear rules for duplicates, delayed updates and failed deliveries. Include existing Oracle, IBM and mainframe environments in the architecture where they remain operationally important.",
      },
      {
        heading: "Make information useful to the reader",
        body: "Claims and servicing teams need contextual information, while managers need a consistent view of work and performance. Establish shared measures and traceable data flows before expanding reporting. Power BI and other analytics tools should present clear definitions, meaningful filters and visible refresh information. Sensitive data access should follow the roles and responsibilities of the people using it.",
        items: [
          "Operational data foundations",
          "Workload and servicing dashboards",
          "Information quality and access design",
        ],
      },
      {
        heading: "Improve one journey, then expand",
        body: "Choose a bounded workflow with clear ownership and a recognizable user outcome. Design its interactions, integration behavior and exception paths together, then validate it with representative scenarios. This creates a reviewable foundation for broader modernization. Include monitoring, documentation and support handover so that each improvement remains manageable as the wider insurance environment continues to evolve.",
      },
    ],
  },
  retail: {
    type: "industry",
    eyebrow: "Industries / Retail and consumer",
    title: "Connect customer experiences to the reality of your operations.",
    intro:
      "Retail journeys cross storefronts, payments, orders, inventory and service teams. Avenor helps make those connections clearer through application engineering, enterprise integration and analytics that reflect how the business actually operates.",
    image: "retail",
    highlights: [
      "Connected commerce",
      "Order and inventory integration",
      "Business intelligence",
    ],
    sections: [
      {
        heading: "Understand the complete customer journey",
        body: "An attractive digital storefront needs dependable information and understandable follow-through. Map the journey from discovery and checkout to fulfillment, returns and support. Identify where a customer promise depends on inventory freshness, order processing or a manual decision. This makes it possible to prioritize changes that improve the experience without creating hidden work for operations.",
        items: [
          "Customer and fulfillment journey mapping",
          "Application and dependency assessment",
          "A practical delivery roadmap",
        ],
      },
      {
        heading: "Connect the operational backbone",
        body: "Order, inventory, payment and customer systems need explicit responsibilities for shared information. Design APIs and events around stable identifiers and meaningful status changes. Include reconciliation and recovery for delayed updates, duplicate messages and unavailable dependencies. MuleSoft and existing integration platforms can support these flows while preserving the business rules held in enterprise applications such as Oracle.",
      },
      {
        heading: "Give teams a consistent view of performance",
        body: "Retail reporting becomes more useful when sales, returns, stock and fulfillment measures share clear definitions. Build traceable data flows and Power BI models that allow teams to move between an overview and the underlying detail. Show refresh timing and relevant limitations so that a dashboard does not imply a level of inventory or order certainty the sources cannot provide.",
        items: [
          "Operational and commercial reporting",
          "Data quality and shared measures",
          "Exception and fulfillment visibility",
        ],
      },
      {
        heading: "Prepare applications for changing demand",
        body: "Design application behavior around the workloads and dependency constraints the business expects. Test critical journeys, including payment failures, inventory changes and delayed order updates. Cloud modernization can be part of the answer, alongside clearer integration and better operational visibility. Deliver in controlled increments with the monitoring and support procedures needed to understand behavior after launch.",
      },
    ],
  },
  "connected-banking": {
    type: "solution",
    eyebrow: "Solution blueprint / Connected banking",
    title: "A connected architecture for banking change.",
    intro:
      "This illustrative blueprint shows how a banking core, digital channels, payments and data capabilities can work together. It is a starting point for discussion, with the final design shaped by an organization's products, systems and operating requirements.",
    image: "banking",
    highlights: [
      "An illustrative architecture",
      "Core-to-channel connectivity",
      "Incremental delivery",
    ],
    sections: [
      {
        heading: "The challenge this blueprint addresses",
        body: "A bank may have a capable core and useful digital applications while still experiencing slow change at their boundaries. Point-to-point interfaces, inconsistent status information and unclear data ownership make a single customer journey difficult to evolve. The blueprint brings those boundaries into focus so that modernization can proceed without requiring every platform to change at once.",
      },
      {
        heading: "A connected set of capabilities",
        body: "Temenos Transact / T24 or another banking core remains responsible for its defined banking records and functions. A governed integration layer connects channels, payments and surrounding enterprise applications through appropriate APIs and events. Operational data flows feed reporting and investigation views, with reconciliation linking technical processing to business outcomes.",
        items: [
          "Core banking services and product capabilities",
          "MuleSoft or an existing integration platform",
          "Payment orchestration and operational analytics",
        ],
      },
      {
        heading: "A practical sequence for implementation",
        body: "Begin with one customer or operational journey and map every system it touches. Agree on ownership, contracts, status behavior and exception handling before expanding the implementation. Validate the journey end to end, including data reconciliation and support procedures. Use what the first release reveals to refine shared patterns, then extend them to the next suitable capability.",
      },
      {
        heading: "What needs to be decided together",
        body: "The right architecture depends on product complexity, existing investments, data requirements and the bank's capacity to operate change. Discovery should establish which information must be current, where transactions are finalized and how service interruptions are handled. Any measures of success should be agreed against the organization's own baseline. This blueprint represents a possible approach, not a delivered client implementation or a claim of achieved results.",
        items: [
          "System ownership and integration boundaries",
          "Migration, controls and operational readiness",
          "Evaluation criteria for each release",
        ],
      },
    ],
  },
  "intelligent-operations": {
    type: "solution",
    eyebrow: "Solution blueprint / Intelligent operations",
    title: "Bring operational data, decisions and actions closer together.",
    intro:
      "This illustrative blueprint connects dependable data, useful analytics and controlled workflow improvements. It provides a starting point for organizations that want to reduce fragmented operational work and assess where automation or AI could be appropriate.",
    image: "data",
    highlights: [
      "An illustrative operating model",
      "Data-to-decision traceability",
      "Human review where needed",
    ],
    sections: [
      {
        heading: "Start with a recognizable operational problem",
        body: "Choose a workflow where teams spend time assembling information, investigating exceptions or passing decisions between systems. Understand the work before automating it: what starts the process, which information is trusted and who can authorize the next action. This creates a concrete foundation for improvement and prevents a new tool from simply accelerating an unclear process.",
      },
      {
        heading: "Connect the information foundation",
        body: "Bring relevant records from operational systems into traceable data flows. Oracle and other data platforms can provide structured information, SAS workloads may contribute analysis, and Power BI can present a shared operational view. Define freshness, access and quality expectations so users understand what the information represents and where its limitations remain.",
        items: [
          "Source ownership and validation rules",
          "Shared measures and investigation views",
          "Clear links between summaries and records",
        ],
      },
      {
        heading: "Introduce controlled assistance",
        body: "Automation can handle well-defined routing, notifications or repeatable data preparation. AI may be worth evaluating for bounded tasks such as summarizing approved information or assisting with classification. Establish representative evaluation cases and appropriate human review before connecting outputs to consequential actions. The blueprint does not assume that an AI component is necessary for every operational improvement.",
      },
      {
        heading: "Measure usefulness in the real workflow",
        body: "Agree on evaluation criteria using the organization's existing process as the baseline. Consider information completeness, exception resolution, user effort and the quality of decisions supported. Begin with a limited release and observe how teams actually use it. Refine ownership and recovery procedures before expanding. This is an illustrative solution concept; it does not describe a completed engagement or promise a specific operational result.",
        items: [
          "A bounded pilot and evaluation plan",
          "Operational ownership and auditability",
          "An evidence-led expansion decision",
        ],
      },
    ],
  },
  "modern-enterprise": {
    type: "solution",
    eyebrow: "Solution blueprint / Modern enterprise",
    title:
      "A practical bridge between established systems and new capabilities.",
    intro:
      "This illustrative blueprint outlines an incremental approach to enterprise modernization. It combines service boundaries, application change and operational foundations while recognizing the continuing role of valuable Oracle, IBM, mainframe and other established platforms.",
    image: "architecture",
    highlights: [
      "An illustrative modernization path",
      "Hybrid integration",
      "Operable application change",
    ],
    sections: [
      {
        heading: "Avoid treating the estate as one decision",
        body: "Enterprise applications differ in business importance, technical condition and readiness for change. Assess them as a portfolio, with explicit dependencies and ownership. Some capabilities may remain on established systems, while others can be replaced, refactored or moved. The blueprint uses this distinction to build a realistic sequence rather than assuming that one migration pattern fits every workload.",
      },
      {
        heading: "Create clear boundaries for change",
        body: "Define the services and information each platform owns. Use an integration layer to make selected capabilities accessible through governed APIs, events or managed exchanges. MuleSoft or an existing enterprise platform can help establish consistent patterns. Boundaries should preserve necessary transaction behavior while giving new applications a more stable relationship with the systems behind them.",
        items: [
          "Capability and dependency mapping",
          "API and event contracts",
          "Adapters for established applications",
        ],
      },
      {
        heading: "Build a foundation teams can operate",
        body: "Cloud and hybrid delivery need more than provisioned infrastructure. Establish identity, environment controls, automated deployment, observability and recovery procedures. Agree on operational ownership across application, platform and integration teams. A first implementation should prove that a service can be changed, released, monitored and supported within this model before the approach is extended across the portfolio.",
      },
      {
        heading: "Expand through evidence, not assumptions",
        body: "Select an initial capability with a clear business purpose and manageable dependencies. Evaluate its behavior, support demands and delivery process against agreed criteria. Use the findings to adjust the next stage, including any decisions to retain existing technology. This blueprint is an illustrative design approach, not a customer case study. Timelines, scope and expected benefits require assessment against the actual enterprise environment.",
        items: [
          "A prioritized first capability",
          "Release and operational acceptance criteria",
          "A roadmap reviewed after each stage",
        ],
      },
    ],
  },
  "core-banking-roadmap": {
    type: "insight",
    eyebrow: "Perspectives / Banking transformation",
    title: "A core banking roadmap starts outside the core.",
    intro:
      "The platform is central to a banking transformation, but it is not the whole program. A useful roadmap starts by understanding products, operational decisions and connected systems before turning those needs into a sequence of technology changes.",
    image: "banking",
    highlights: [
      "Start with business capabilities",
      "Map the dependencies",
      "Rehearse the transition",
    ],
    sections: [
      {
        heading: "Begin with what needs to change",
        body: "A requirement such as faster product introduction can conceal several different constraints. Product configuration may be difficult, approval processes may be unclear, or channels may require separate development for every variation. Map the intended outcome to the work and systems behind it. This helps distinguish changes to Temenos Transact / T24 or another core from improvements needed elsewhere.",
      },
      {
        heading: "Make the dependencies visible",
        body: "List the applications, interfaces, reports and operational processes that depend on the affected capabilities. Record who owns each dependency and what kind of change it needs. Payments, finance, customer channels and batch processing can introduce different sequencing constraints. The roadmap should explain these relationships clearly enough for business and technology teams to make tradeoffs together.",
        items: [
          "Which system owns each critical record?",
          "Which interfaces and reports consume it?",
          "Which teams must be ready for the change?",
        ],
      },
      {
        heading: "Turn migration into a repeatable exercise",
        body: "A migration plan becomes credible through rehearsal. Agree on data mapping, transformation rules and reconciliation criteria, then test the complete sequence with representative information. Record timings, exceptions and manual interventions. Each rehearsal should improve the next version of the plan, including how to make the release decision and how the organization will respond if acceptance criteria are not met.",
      },
      {
        heading: "Define readiness in operational terms",
        body: "A working platform still needs people who can operate it. Bring support procedures, monitoring, incident ownership and business training into the roadmap early. Ask whether a service team can explain a transaction's state, investigate an exception and identify the responsible owner. These practical questions connect technical completion to the bank's ability to use and maintain the new environment.",
      },
    ],
  },
  "api-led-connectivity": {
    type: "insight",
    eyebrow: "Perspectives / Enterprise integration",
    title: "API-led connectivity works when ownership is clear.",
    intro:
      "An API can make a system accessible without making an enterprise easier to change. The difference lies in the contracts, responsibilities and operating practices around it. Architecture becomes useful when those choices are explicit and maintainable.",
    image: "architecture",
    highlights: [
      "Design clear contracts",
      "Give every boundary an owner",
      "Plan for failure and change",
    ],
    sections: [
      {
        heading: "Start with a business exchange",
        body: "Describe what information needs to move and why. Establish which system owns it, how current it must be and what the receiving application can safely assume. Not every exchange needs a synchronous API. Events and scheduled processing can be appropriate when they better reflect the workflow. The pattern should follow the requirement, rather than becoming the requirement itself.",
      },
      {
        heading: "Use layers to clarify responsibility",
        body: "MuleSoft architectures often distinguish system, process and experience concerns. That separation can help protect consumers from changes in underlying platforms and keep orchestration distinct from presentation needs. Its value depends on meaningful boundaries. Each layer should own a clear responsibility; extra layers without a purpose can make a simple flow harder to understand and support.",
        items: [
          "System boundaries expose defined capabilities",
          "Process boundaries coordinate business behavior",
          "Experience boundaries serve a specific consumer need",
        ],
      },
      {
        heading: "Design the unsuccessful request",
        body: "The happy path is only part of an integration contract. Define what a timeout means, whether a request can be repeated and how a consumer discovers the final outcome. Use stable identifiers and appropriate correlation so support teams can trace a flow. Where processing spans multiple systems, make reconciliation and recovery responsibilities as explicit as the normal response.",
      },
      {
        heading: "Treat publication as the beginning",
        body: "A maintained API needs an owner, useful documentation, a versioning policy and observable behavior. Contract checks help identify incompatible changes before release. A discoverable catalog can encourage reuse, but only when teams trust what they find. Measure the architecture by how well consumers understand and safely use its capabilities, rather than by how many endpoints have been published.",
      },
    ],
  },
  "data-foundations": {
    type: "insight",
    eyebrow: "Perspectives / Data and analytics",
    title: "Before the next dashboard, agree on what the numbers mean.",
    intro:
      "A polished report cannot resolve conflicting definitions in the systems beneath it. Trustworthy analytics starts with shared meaning, traceable records and visible limitations, whether the final experience uses Power BI, SAS or another analytics tool.",
    image: "data",
    highlights: [
      "Define the measure",
      "Trace the source",
      "Make limitations visible",
    ],
    sections: [
      {
        heading: "Begin with a question someone needs answered",
        body: "A request for a dashboard should lead to a conversation about decisions. Who will read it, what do they need to understand and what action might follow? This establishes the right level of detail and frequency. It also helps avoid collecting measures because they are available when they do little to support the intended workflow.",
      },
      {
        heading: "Write the definition before the calculation",
        body: "Two teams can use the same label for different measures. Agree on inclusion rules, reporting dates, adjustments and the treatment of missing values. Document which source is authoritative and how the measure behaves under filters. A shared definition provides a reference for both implementation and review, making disagreements easier to resolve without repeatedly rebuilding the report.",
        items: [
          "Which records belong in the measure?",
          "Which date determines the reporting period?",
          "How are missing or corrected values represented?",
        ],
      },
      {
        heading: "Make the path to the source explainable",
        body: "Connect reported values to the transformations and records that produced them. In an environment spanning Oracle, SAS and Power BI, make responsibilities explicit at every stage. Reconciliation checks should compare meaningful totals and surface exceptions. When a number changes, teams should be able to distinguish a business event from a source correction or a transformation change.",
      },
      {
        heading: "Show the limits alongside the insight",
        body: "Readers need to know when information was refreshed and whether a view excludes incomplete records or unavailable sources. Present those limitations where they affect interpretation. A report earns trust by helping people understand its evidence, including what it cannot yet show. The same discipline creates a stronger starting point for predictive analysis or AI use cases built on that information.",
      },
    ],
  },
  about: {
    type: "company",
    eyebrow: "Company / About Avenor",
    title: "Thoughtful engineering for complex enterprise change.",
    intro:
      "Avenor is a technology consulting brand focused on the connections that make enterprise transformation work: between business priorities and engineering decisions, between established platforms and new applications, and between delivery teams and the people who operate their systems.",
    image: "team",
    highlights: [
      "Enterprise technology focus",
      "Practical delivery",
      "Clear working relationships",
    ],
    sections: [
      {
        heading: "A connected perspective",
        body: "A transformation rarely fits within a single application. Banking cores depend on integration, customer journeys depend on data, and new software depends on the teams that support it. Our approach considers these relationships together. We start with the outcome the organization wants to achieve, then examine the systems, information and operational responsibilities that influence it.",
      },
      {
        heading: "Where we focus",
        body: "Our service areas span core banking, payments, enterprise integration, data and analytics, cloud modernization, application development and quality engineering. The technology focus includes Temenos Transact / T24, MuleSoft, Power BI, Oracle, SAS, and IBM and mainframe environments. Product names describe areas of focus and do not imply a vendor partnership, certification or endorsement.",
        items: [
          "Banking and financial services",
          "Insurance operations and experiences",
          "Retail and connected enterprise applications",
        ],
      },
      {
        heading: "How we approach delivery",
        body: "Start by understanding the current environment and agreeing on a useful first outcome. Make dependencies, assumptions and decisions visible. Deliver in increments that can be reviewed with the people who will use and operate the result. This creates a working rhythm in which scope and technical choices can respond to evidence while remaining anchored to a clear purpose.",
      },
      {
        heading: "What a useful conversation looks like",
        body: "You do not need a completed specification to begin. A description of the business problem, the systems involved and the change you are considering is enough to frame an initial discussion. From there, the next step might be a focused assessment, an integration plan or a defined application capability. The emphasis is on making the work understandable and the proposed outcome concrete.",
      },
    ],
  },
  privacy: {
    type: "legal",
    eyebrow: "Website information / Privacy",
    title: "How information is handled on this website.",
    intro:
      "This notice describes the information handling associated with the Avenor website and its enquiry builder. The builder helps you prepare an enquiry in your browser; it does not submit a contact form or send an email.",
    image: "architecture",
    highlights: [
      "Enquiries are prepared locally",
      "Copy or download only",
      "Standard hosting requests",
    ],
    sections: [
      {
        heading: "Information you enter in the enquiry builder",
        body: "The enquiry builder processes the details you enter locally in your browser to prepare text you can review. Its actions let you copy that text or download it as a file. Using those actions does not send an email, deliver an enquiry to Avenor or create a submission in a contact-management system. Choose carefully what you include in a document you intend to share.",
      },
      {
        heading: "Copied and downloaded information",
        body: "When you copy an enquiry, the prepared text is placed on your device's clipboard. When you download it, the resulting file is handled by your browser and saved according to your browser settings. Clipboard and file behavior may depend on your device settings and other applications. If you later share the text or file, that sharing is a separate action you control.",
      },
      {
        heading: "Hosting and remote resources",
        body: "The website is hosted using Vercel. Loading a hosted page can provide the hosting service with standard request information, such as an IP address, browser information, the requested resource and request timing. Pages may also load images from remote services, which may receive similar request information when those resources are requested. Those providers' own privacy notices describe how they handle information.",
      },
      {
        heading: "Links and the scope of this notice",
        body: "Links to external websites take you to services operated separately from this site. Their information handling is governed by their own notices and settings. This notice describes the website's current enquiry preparation and resource-loading behavior; it does not cover a separate service engagement or information you independently send through another channel. Avoid including passwords, financial account details or other sensitive information in a general project enquiry.",
      },
    ],
  },
};
