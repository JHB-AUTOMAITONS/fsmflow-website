import type { BlogBlock } from './blog'

/**
 * Article bodies for the five solution-supporting posts.
 *
 * Inline links use `[anchor text](/internal-path)` and are rendered by BlogArticle.
 * Only describe what FSMFlow's nine modules actually do (see features.ts) — no invented
 * integrations, statistics, customers or pricing.
 */

const p = (text: string): BlogBlock => ({ type: 'p', text })
const h2 = (text: string): BlogBlock => ({ type: 'h2', text })
const h3 = (text: string): BlogBlock => ({ type: 'h3', text })
const ul = (...items: string[]): BlogBlock => ({ type: 'ul', items })
const callout = (text: string): BlogBlock => ({ type: 'callout', text })

/* -------------------------------------------------------------------------- */
/* HVAC                                                                        */
/* -------------------------------------------------------------------------- */

export const HVAC_ARTICLE: BlogBlock[] = [
  p(
    'Ask an AC service owner what keeps them awake and the answer is rarely the technical work. It is the coordination: which technician is free, who has the right spare part, which customer called twice, and whose AMC expired last week without anyone noticing. HVAC technician management is the discipline of keeping all of that visible, so the team spends its day on service rather than on phone calls.',
  ),
  p(
    'This guide walks through the practical side of managing HVAC technicians, service jobs and AMC (annual maintenance contract) renewals in an Indian service business, from the first customer call to the renewal reminder a year later. It is useful whether you run a team of five or fifty, and whether you use software or not.',
  ),
  h2('Why HVAC technician management gets hard as you grow'),
  p(
    'With two technicians, the owner remembers everything. With ten, memory fails, and the cracks appear in the same places in almost every AC service company:',
  ),
  ul(
    'Job details travel by WhatsApp message, so the technician arrives without the unit model, the complaint history or the customer’s landmark.',
    'Dispatch is decided by whoever answers the phone, with no clear view of who is already across town.',
    'Spare parts are discovered missing at the customer’s door, which means a second visit and an unhappy customer.',
    'Visit notes end up in a notebook, so the next technician repeats the same diagnosis.',
    'AMC dates sit in a spreadsheet that is opened only when someone remembers to open it.',
  ),
  p(
    'None of these is a skills problem. They are information problems, and they are solved by agreeing on one place where every job, customer and contract lives.',
  ),
  h2('Step 1: Give every service job one record'),
  p(
    'Start with the job itself. A good job record answers five questions before the technician leaves the office: who is the customer, where exactly is the site, which unit needs attention, what was reported, and what happened on earlier visits. When this is captured once at the time of the call, dispatch becomes a decision rather than a research task.',
  ),
  p(
    'Whether it is a breakdown call, a seasonal servicing visit or a new installation, use the same record structure and only change the checklist. This is what a [work order management system](/features/work-order-management-software) does: it keeps the request, assignment, status, notes and completion proof attached to the same job, so nobody has to reconstruct the story from chat threads.',
  ),
  h2('Step 2: Dispatch by skill, location and workload'),
  p(
    'Good dispatch weighs three things together. Skill comes first: not every technician is equally comfortable with VRF systems, split ACs or cassette units. Location matters next, because the difference between a nearby technician and one stuck in traffic on the other side of the city is an hour of billable time. Workload completes the picture, since a technician with five visits already scheduled should not quietly receive a sixth.',
  ),
  p(
    'Many teams handle this with a whiteboard or a shared sheet. That can work until emergencies arrive. When a compressor failure comes in at 11 am, the dispatcher needs to see the day’s plan and move one visit without breaking three others. [Employee and technician scheduling](/features/employee-management-software) tools exist for exactly this moment.',
  ),
  h3('Keep emergency and planned work separate'),
  p(
    'Emergency repairs and planned maintenance visits compete for the same technicians. A simple rule helps: protect a fixed share of each technician’s day for planned AMC visits, and let emergencies use the remaining capacity first. If emergencies consistently eat into the planned share, that is a signal to hire or to rebalance territories, and it is visible only if you track it.',
  ),
  h2('Step 3: Equip the technician in the field'),
  p(
    'A technician’s phone is the most useful tool on the van if it carries the right information. The ideal [field service app](/features/field-service-app) shows the day’s jobs in order, the customer’s address and contact, the unit history, and a checklist for the visit. It also lets the technician record what was done, attach photos of the unit before and after, and collect the customer’s confirmation.',
  ),
  p(
    'This is not about monitoring people. It is about removing the end-of-day paperwork and the “I forgot to note the gas pressure” problem. When updates are made at the site, the office sees real status instead of guesses, and customers who call asking “when will the technician arrive?” get a real answer.',
  ),
  h2('Step 4: Carry the right spare parts'),
  p(
    'Repeat visits caused by missing parts are the quietest profit leak in HVAC service. Capacitors, contactors, sensors, PCBs and refrigerant gas are small items with big consequences when absent. Three habits make a visible difference:',
  ),
  ul(
    'Set a minimum stock level for the common parts each technician should carry.',
    'Record which parts were used on which job, so the next restock is based on facts.',
    'Review repeat-visit jobs weekly and ask whether a part was the cause.',
  ),
  p(
    'Linking parts to jobs is the core of [spare parts inventory software](/features/inventory-management-software). Even if you start with a simple weekly count, the principle is the same: stock should be tied to the work that consumes it.',
  ),
  h2('Step 5: Run AMC renewals as a routine, not a rescue'),
  p(
    'AMC contracts are the steadiest income an HVAC business can build, and also the easiest to lose by neglect. A renewal is rarely lost because the customer was unhappy. It is lost because the contract ended, nobody called, and a competitor did.',
  ),
  h3('What a reliable renewal process contains'),
  ul(
    'A single list of all contracts with start date, end date, covered units and number of included visits.',
    'Scheduled preventive maintenance visits created in advance, not after the customer complains.',
    'Reminders well before expiry, so that the renewal conversation happens while the service relationship is warm.',
    'A quotation ready to send, built from the previous contract rather than from scratch.',
    'A record of what was serviced, so the customer can see the value they received.',
  ),
  p(
    'Tracking this inside your service system, next to the equipment and the visit history, is what [warranty and AMC management software](/features/warranty-management-software) is built for. When the contract, the units and the visits live together, the renewal reminder writes itself.',
  ),
  callout(
    'A quick test: pick any AMC customer and ask how many of their contracted visits were completed this year. If the answer takes more than a minute to find, the renewal process is depending on memory.',
  ),
  h2('Step 6: Measure a few numbers every week'),
  p(
    'You do not need a dozen dashboards. A short weekly review of the following is enough to catch problems early:',
  ),
  ul(
    'Jobs completed against jobs assigned, per technician.',
    'Repeat visits within a short window of an earlier visit.',
    'Planned AMC visits completed versus due.',
    'Contracts expiring in the next 30 and 60 days.',
    'Quotations sent but not yet approved.',
  ),
  p(
    'The aim is not to rank technicians. It is to notice which numbers moved and ask why. [Reporting software](/features/reporting-software) helps by building these views from the same job data, so you are not copying numbers between sheets.',
  ),
  h2('Choosing software for HVAC technician management'),
  p(
    'If you decide the spreadsheet stage is over, judge any HVAC service platform on practical questions rather than long feature lists:',
  ),
  ul(
    'Can a dispatcher assign and re-assign a job in a few taps, and does the technician see it immediately?',
    'Does the technician’s phone work well on a weak signal inside a basement or plant room?',
    'Can you attach AMC contracts to specific units and customers, with visit schedules and reminders?',
    'Does it link parts used to jobs?',
    'Can you get a quote out from the same system that holds the customer and unit history?',
    'Is the team likely to actually use it, given their comfort with phones?',
  ),
  p(
    'FSMFlow is built around these workflows for AC and HVAC teams. You can read how the pieces fit together on the [HVAC field service software](/solutions/hvac-field-service-software) page, or look at the [pricing page](/pricing) for plan details.',
  ),
  h2('Frequently asked questions'),
  h3('What is the best way to manage HVAC technicians?'),
  p(
    'Give each job a single record, dispatch by skill, location and current workload, and let technicians update the job from their phones. Review a few weekly numbers such as repeat visits and completed AMC visits instead of relying on impressions.',
  ),
  h3('How do I stop missing AMC renewals?'),
  p(
    'Keep every contract in one list with its end date and covered units, set reminders well ahead of expiry, and prepare the renewal quotation from the previous contract. Review contracts expiring in the next 30 to 60 days each week.',
  ),
  h3('Do small AC service businesses need software?'),
  p(
    'Not always on day one. A well-kept shared sheet can work for a handful of technicians. Software starts to pay off when dispatch, spare parts and AMC tracking begin to depend on one person’s memory or when customers repeat themselves because history is missing.',
  ),
  h3('How can I reduce repeat visits for AC repairs?'),
  p(
    'Capture the unit history and complaint before dispatch, equip technicians with commonly needed parts, and review repeat-visit jobs every week to see whether a missing part, an incomplete diagnosis or a rushed schedule was the cause.',
  ),
  h2('Bringing it together'),
  p(
    'Managing HVAC technicians, service jobs and AMC renewals comes down to the same idea: make the information visible in one place and keep it current as work happens. Start with one improvement, such as a proper job record or a weekly renewal review, and build from there.',
  ),
  p(
    'If you would like to see how this looks in a real workflow, [book a demo](/demo) and we will walk through it with your kind of HVAC business in mind.',
  ),
]

/* -------------------------------------------------------------------------- */
/* CCTV                                                                        */
/* -------------------------------------------------------------------------- */

export const CCTV_ARTICLE: BlogBlock[] = [
  p(
    'CCTV installation looks simple from outside: mount the cameras, run the cables, set up the recorder, hand over. Anyone who has run an installation business knows the reality. Survey notes get lost, the camera count changes on site, the crew is short of a connector, the customer disputes what was agreed, and a year later nobody can say whose AMC is about to lapse.',
  ),
  p(
    'This article is about the operational side of the business: how to manage CCTV installation jobs, ongoing maintenance and AMC (annual maintenance contract) renewals so that the work is repeatable as you add crews and customers. It also sets out a practical CCTV AMC format, meaning the sections a maintenance contract should cover, so the contract you sign and the visits you schedule match.',
  ),
  h2('Where CCTV installation businesses lose time and money'),
  p('Most problems appear at the handoffs between stages, not in the technical work itself:'),
  ul(
    'The survey is done by one person, the quotation by another, and the installation by a third crew that never saw the site.',
    'Camera positions and cable routes exist only in a phone gallery or a notebook.',
    'Changes on site are agreed verbally and appear later as a billing argument.',
    'Installed equipment, serial numbers and warranty dates are not recorded in any way that can be searched.',
    'AMC visits depend on someone remembering to call.',
  ),
  p(
    'The fix is to treat the whole journey as one connected record: survey, quotation, installation, handover and service. Each stage adds information, and the next stage starts from it.',
  ),
  h2('Stage 1: Site survey that the crew can actually use'),
  p(
    'A useful survey captures more than the camera count. Record the entry points and areas to cover, the type of camera suited to each spot, approximate cable lengths, power availability, where the recorder will sit, and any access constraints such as working hours or ladders needed. Add photos of each location.',
  ),
  p(
    'The important detail is where this lives. If the survey is attached to the job and not to someone’s phone, the quotation is based on it, and the installation crew works from it. A [work order management](/features/work-order-management-software) approach does exactly this: one job record that travels from survey to completion.',
  ),
  h2('Stage 2: Quote quickly and clearly'),
  p(
    'Speed matters in CCTV sales. A customer who asked three installers for quotes usually responds to the first clear one. A good quotation lists cameras by type, the recorder and storage capacity, cabling and accessories, installation labour, and the warranty terms, in a format the customer can compare.',
  ),
  p(
    'Building these from a standard list of items, rather than retyping each time, shortens the turnaround and reduces errors. [Quotation software](/features/quotation-software) lets you prepare the quote, get approval, and carry the accepted items directly into the installation job so nothing is re-entered.',
  ),
  h3('Handle changes on site openly'),
  p(
    'It is common for the customer to ask for two more cameras once the work starts. Record the change on the job, note the revised quantity, and get acknowledgement before continuing. A short written trail prevents most end-of-project disputes.',
  ),
  h2('Stage 3: Run the installation like a project'),
  p(
    'For each installation, the crew should know the following before leaving the office: the site address and contact, the materials to carry, the camera list with locations, and the handover checklist. A mobile [field service app](/features/field-service-app) puts this in the technician’s hand, allows photos and notes during the work, and lets the crew mark progress.',
  ),
  p('A handover checklist usually covers:'),
  ul(
    'Every camera showing a usable picture from the recorder.',
    'Recording schedule and storage duration explained to the customer.',
    'Remote viewing configured, where the customer wants it.',
    'Passwords handed over in the way agreed with the customer.',
    'Customer sign-off recorded on the job.',
  ),
  h2('Stage 4: Record what you installed'),
  p(
    'This stage is the one most installers skip, and it is the one that makes maintenance and renewals manageable. For each customer site, keep a list of installed cameras and recorders with model, serial number, installation date and warranty end date. When a camera fails eight months later, the technician arrives knowing exactly what is on the wall.',
  ),
  p(
    '[Asset management software](/features/asset-management-software) keeps this history attached to the customer and site, together with every service visit. It turns a vague “we installed something there” into a searchable record.',
  ),
  h2('A practical CCTV AMC format: what the contract should cover'),
  p(
    'A CCTV AMC is a paid service contract under which you keep a customer’s cameras and recorder in working order for a period, usually a year. There is no single mandatory layout, and the wording is your business decision, ideally reviewed by a professional for legal and tax points such as GST. What matters operationally is that the same facts appear in the contract, in your schedule and in your records. A clear AMC format usually has these sections:',
  ),
  ul(
    'Parties and site: customer name, site address and a contact person.',
    'Contract period: start date, end date and renewal terms.',
    'Covered equipment: cameras, recorder, storage, power supplies and cabling, listed with model and serial number where available.',
    'Type of AMC: comprehensive (parts included) or non-comprehensive (labour only, parts charged separately), stated in plain words.',
    'Scheduled visits: how many preventive visits, and what each one checks.',
    'Breakdown support: how complaints are logged, the expected response time, and what counts as an emergency.',
    'Exclusions: for example damage from power surges, tampering, theft or changes made by others.',
    'Charges and payment terms: amount, billing schedule and what happens on late payment.',
    'Report and sign-off: the service report the customer receives after each visit.',
  ),
  p(
    'Once the format is settled, the contract becomes a checklist for operations. Each covered camera should exist as an asset record, each promised visit should exist as a scheduled job, and each visit should end in a report. Gaps between the paper and the system are where complaints begin.',
  ),
  h2('Stage 5: Manage maintenance and AMC renewals'),
  p(
    'Maintenance contracts are the recurring part of a CCTV business. A typical AMC includes a set number of preventive visits to clean lenses, check recording, verify storage health and test cameras, plus priority attendance when something fails. The business risk is not unhappy customers; it is silent expiry.',
  ),
  h3('A simple AMC routine that works'),
  ul(
    'Keep a list of all contracts with start date, end date, covered equipment and visits included.',
    'Create the planned visits in advance, so they appear in the schedule automatically.',
    'Review contracts expiring in the next 30 to 60 days every week.',
    'Contact the customer before expiry with a quotation based on the existing contract.',
    'After each visit, record what was checked and the condition of the equipment.',
  ),
  p(
    'Tracking warranty and AMC status per site is what [warranty management software](/features/warranty-management-software) is for. It brings the warranty period, the AMC contract and the scheduled visits into one view and reminds you before a contract lapses.',
  ),
  callout(
    'Warranty and AMC are different things. Warranty is the manufacturer’s or installer’s obligation for a defined period. AMC is a paid service contract. Keeping them as separate fields on each asset avoids confusion about what the customer is entitled to.',
  ),
  h2('What to look for in software for a CCTV installation business'),
  p(
    'Some searches for “CCTV software” lead to video management or camera viewing applications. Those are tools for watching footage. The software discussed here is different: it manages the business of installing and servicing CCTV, not the cameras themselves. When evaluating that kind of system, ask:',
  ),
  ul(
    'Can a survey be recorded on the job and reused for the quotation and installation?',
    'Does it keep equipment, serial numbers and warranty dates per customer site?',
    'Can it schedule AMC visits and remind you before renewal?',
    'Can technicians update jobs and upload photos from their phones?',
    'Can you see pending quotations, open jobs and upcoming renewals in one place?',
  ),
  p(
    'FSMFlow is designed around this workflow; see the [CCTV software page](/solutions/cctv-software) for how survey, quotation, installation and service fit together.',
  ),
  h2('Frequently asked questions'),
  h3('How do I manage CCTV installation jobs across multiple crews?'),
  p(
    'Use one job record for each installation containing the survey, quotation, camera list, checklist and customer contact. Assign it to a crew, let them update progress from their phones, and review open jobs daily.',
  ),
  h3('What should a CCTV AMC format include?'),
  p(
    'Common elements are the parties and site, contract period, covered equipment, whether it is comprehensive or non-comprehensive, the number and content of preventive visits, breakdown support, exclusions, charges and a service report after each visit. Have the final wording reviewed for legal and tax points.',
  ),
  h3('What is the difference between comprehensive and non-comprehensive CCTV AMC?'),
  p(
    'In general, a comprehensive AMC covers labour and replacement parts within the agreed terms, while a non-comprehensive AMC covers labour and visits only, with parts charged separately. State which one applies, and what is excluded, in the contract itself.',
  ),
  h3('How can I track warranty and AMC dates for every customer?'),
  p(
    'Record the installation date and warranty end date for each camera and recorder, store the AMC start and end dates against the site, and review contracts due within 30 to 60 days every week. A system that sends reminders helps because it removes dependence on memory.',
  ),
  h3('Is a spreadsheet enough for a small CCTV business?'),
  p(
    'For a very small operation, yes, if it is kept up to date. Problems begin when several people edit it, when site history needs photos and notes, or when renewals slip. That is typically when moving to a purpose-built system becomes worthwhile.',
  ),
  h2('In summary'),
  p(
    'A well-run CCTV business is one where the survey becomes the quotation, the quotation becomes the installation, the installation becomes the asset record, and the asset record drives maintenance and renewals. Fix the handoffs and the rest follows.',
  ),
  p('To see this workflow in action, [book a demo](/demo) and tell us about your installation and service setup.'),
]

/* -------------------------------------------------------------------------- */
/* Solar                                                                       */
/* -------------------------------------------------------------------------- */

export const SOLAR_ARTICLE: BlogBlock[] = [
  p(
    'Solar installation is a long sales cycle followed by a project with many moving parts. A rooftop customer may speak with you for weeks before deciding. Once they say yes, there are site surveys, designs, material procurement, installation, approvals and handover. Then, for years afterwards, comes service. Each stage needs information from the one before, and each is a place where deals and projects go quiet.',
  ),
  p(
    'This guide covers solar installation project management from the first enquiry to after-sales, with practical steps an Indian rooftop or EPC solar business can adopt, with or without software.',
  ),
  h2('The solar business has two jobs: selling and delivering'),
  p(
    'Many solar companies are good at one of these and struggle with the other. Selling requires follow-up discipline across a lengthy decision period. Delivering requires coordination of crews, materials and customer expectations across a defined project. A system that connects the two prevents the common handoff problem where the sales promise is not what the installation team understood.',
  ),
  h2('Step 1: Capture and follow up on every lead'),
  p(
    'Enquiries arrive from many places: website forms, calls, referrals, channel partners and walk-ins. If they are tracked in different phones and notebooks, follow-ups are missed, and in solar, follow-up is often the difference between winning and losing a deal.',
  ),
  p('A workable lead process has a few simple parts:'),
  ul(
    'One list of all enquiries, with source, contact details, location and the type of system they are considering.',
    'A clear stage for each lead, such as new, survey scheduled, quotation sent, negotiating, won or lost.',
    'A next action and a date against every open lead.',
    'A reason recorded for every lost lead, so you learn from them.',
  ),
  p(
    'This is the core of a [sales CRM](/features/sales-crm-software): the pipeline, the follow-up reminders and the history of conversations in one place. For solar, where a decision can take weeks, reminders matter more than almost anything else.',
  ),
  h2('Step 2: Make the site survey count'),
  p(
    'The survey turns an interested lead into an accurate quotation. Useful survey information includes roof type and condition, available shadow-free area, orientation and tilt, the electrical connection and load, the location for inverter and meters, and cable routing. Photos and measurements should be attached to the lead or project, not saved on the surveyor’s phone.',
  ),
  p(
    'Assigning surveys as scheduled jobs helps too. A survey that is on someone’s calendar and tracked to completion happens; a survey that was “to be arranged” often does not. Using [work order management](/features/work-order-management-software) for surveys gives each one an owner, a date and a recorded outcome.',
  ),
  h2('Step 3: Quote clearly and compare fairly'),
  p(
    'Customers comparing solar proposals often compare the headline price while ignoring differences in components and scope. A clear quotation helps you stand out. It should list the system capacity, panels and inverter, mounting structure, cabling and protection equipment, installation, and what documentation or liaison work is included. State assumptions plainly.',
  ),
  p(
    'Preparing quotations from standard items, and revising them as the customer’s requirements change, is easier with [quotation software](/features/quotation-software). When the customer accepts, the approved quotation should become the basis of the installation project, so no one re-enters it.',
  ),
  h2('Step 4: Run each solar installation as a managed project'),
  p(
    'Once a quotation is accepted, the work shifts from persuasion to execution. Break the project into stages that your team recognises, and track each one. A common sequence is:',
  ),
  ul(
    'Final design and material list confirmed.',
    'Materials ordered and received.',
    'Structure and panel installation.',
    'Electrical connection and commissioning.',
    'Documentation, customer handover and payment milestones.',
  ),
  p(
    'Your actual stages will depend on your business and local requirements, so use the ones that match how you work. The point is that every project has visible status, an owner, and a list of what is blocking it. A weekly look at all projects that have not moved in several days will highlight the bottlenecks quickly.',
  ),
  h3('Keep materials and crews coordinated'),
  p(
    'Delays often come from simple coordination failures: panels arrive but the structure is missing, or the crew is booked on another site. Tracking materials against projects with [inventory management](/features/inventory-management-software) and giving crews their schedule in a [field service app](/features/field-service-app) reduces idle days.',
  ),
  h2('Step 5: Plan for after-sales service from day one'),
  p(
    'A solar installation creates a long relationship. Customers will have questions about generation, cleaning, inverter alerts and warranty. For the business, after-sales is both an obligation and an opportunity: maintenance contracts, cleaning visits and referrals all begin here.',
  ),
  p('Record, for each installed system:'),
  ul(
    'The customer, site and system capacity.',
    'Panels, inverter and other components with serial numbers where available.',
    'Installation date and warranty periods for each component.',
    'Any maintenance contract and its visit schedule.',
    'Service visits carried out and issues resolved.',
  ),
  p(
    'This is a natural fit for [asset management](/features/asset-management-software) and [warranty management](/features/warranty-management-software). When a customer calls about an inverter fault, you can see what was installed, whether it is under warranty, and what happened on earlier visits.',
  ),
  callout(
    'Solar warranties vary by component and manufacturer. Record the actual terms from your supplier documents rather than assuming a standard period.',
  ),
  h2('What to look for in solar business software'),
  p(
    'Solar companies often search for a “CRM” and then discover that a CRM alone does not cover surveys, installation and service. Before choosing a tool, think about the full journey and ask:',
  ),
  ul(
    'Does it combine lead tracking with project and service management, or will you maintain two systems?',
    'Can surveys be scheduled, assigned and recorded with photos?',
    'Can a quotation be turned into an installation project without re-entry?',
    'Can you track materials and crews against each project?',
    'Does it hold component and warranty records for after-sales service?',
    'Will your sales and site teams realistically use it daily on their phones?',
  ),
  p(
    'FSMFlow brings these together for solar teams; the [solar software page](/solutions/solar-software) explains how leads, surveys, installations and service connect in one system.',
  ),
  h2('Frequently asked questions'),
  h3('How do I manage solar leads effectively?'),
  p(
    'Keep every enquiry in one list with source, stage and a dated next action. Review leads without a next action each week, and record the reason when a lead is lost. Consistent follow-up matters because solar decisions often take weeks.',
  ),
  h3('What should be recorded during a solar site survey?'),
  p(
    'Roof type and condition, usable area, shading, orientation, electrical connection details, inverter and meter location, and photos. Attach all of it to the lead or project so the quotation and installation crew use the same information.',
  ),
  h3('How do I track multiple solar installation projects?'),
  p(
    'Use the same stages for every project, assign an owner, and keep status, materials and blockers visible in one view. Review projects that have not moved recently during a weekly meeting.',
  ),
  h3('Do I need a CRM or project management software for a solar business?'),
  p(
    'Most solar businesses need both functions: lead tracking for sales and project and service tracking for delivery. Using a single system for both avoids re-entering information at handoff.',
  ),
  h2('Closing thoughts'),
  p(
    'Strong solar operations are built on consistent habits: every lead has a next step, every survey is recorded, every quotation becomes a project, and every installed system is tracked for service. Software helps when it supports those habits without adding paperwork.',
  ),
  p('If you would like to see how FSMFlow fits a solar workflow, [book a demo](/demo) and we will go through it together.'),
]

/* -------------------------------------------------------------------------- */
/* Construction                                                                */
/* -------------------------------------------------------------------------- */

export const CONSTRUCTION_ARTICLE: BlogBlock[] = [
  p(
    'On a construction site, information moves slowly and decisions move fast. The engineer on site needs materials today; the owner in the office wants to know whether the milestone will be met; the client wants a progress update; and the accounts team needs to know what was actually done before raising a bill. Construction site management is largely the work of keeping those four groups looking at the same facts.',
  ),
  p(
    'This article looks at practical ways for Indian contractors and small-to-mid-size construction businesses to manage site jobs, field teams and project updates, starting with habits that cost nothing and moving on to what software can add.',
  ),
  h2('Why construction site management slips'),
  p(
    'Large contractors run on dedicated project management systems and trained planners. Smaller contractors usually run on phone calls, WhatsApp groups and a notebook kept by the supervisor. That works, until it does not. Typical points of failure include:',
  ),
  ul(
    'Instructions given verbally to a crew that are later remembered differently.',
    'Material shortages found at the start of the day rather than the evening before.',
    'Progress updates sent to clients inconsistently, or not at all.',
    'Extra work done on site that never reaches the bill.',
    'Quotations and site records that live in different places.',
  ),
  p(
    'The aim is not heavy bureaucracy. It is a light, consistent structure that makes the information in the supervisor’s head available to everyone else.',
  ),
  h2('Start with a clear job record for each site task'),
  p(
    'Break each project into jobs that a crew can own: for instance, “first-floor shuttering”, “electrical conduit, block B” or “waterproofing, terrace”. Each job should have an owner, a start and expected finish, the scope in a few lines, the materials required and a status. This is the same discipline as [work order management](/features/work-order-management-software): a defined unit of work that can be assigned, tracked and closed.',
  ),
  p(
    'A good test is whether a new supervisor could pick up the job card and understand what is expected without a phone call. If yes, your record is detailed enough.',
  ),
  h3('Keep scope changes visible'),
  p(
    'Variations are normal in construction; unrecorded variations are expensive. When the client asks for something extra, add it to the job as a note or a separate job, with the date and who requested it. That record becomes the basis for the revised quotation and protects both sides.',
  ),
  h2('Organise field teams around the day’s plan'),
  p(
    'Crews work best when they know the next day’s plan before they leave the site. A short evening routine helps: the supervisor confirms tomorrow’s jobs, checks that materials are available, and assigns people. In a larger business, the office does this centrally using [team and workforce management](/features/employee-management-software) to see who is assigned where and avoid double-booking a skilled worker.',
  ),
  p(
    'Mobile access changes the picture considerably. When supervisors can open their jobs on a phone, mark progress and upload photos from the site, the office stops chasing for updates. A [field service app](/features/field-service-app) is designed for this kind of workflow: jobs in, progress and photos out.',
  ),
  h2('Control materials before they control the schedule'),
  p(
    'Material delays are one of the most common causes of slipping timelines. A few habits help even without software: list the materials against each job, mark what is on site, what is ordered and what is needed, and review the list a day or two ahead.',
  ),
  p(
    'As you scale across multiple sites, central visibility becomes valuable. [Inventory management](/features/inventory-management-software) lets you see stock levels, record issues to specific jobs and notice shortages earlier, so that purchasing becomes planned rather than reactive.',
  ),
  h2('Send project updates that clients value'),
  p(
    'Clients do not usually want long reports. They want to know three things: what was done, what is next and whether anything is blocking progress. A short, regular update with a few photos is often enough. When photos and status notes are captured as the work happens, producing the update takes minutes rather than an evening.',
  ),
  p('A simple update could include:'),
  ul(
    'Work completed since the last update.',
    'Work planned for the coming week.',
    'Decisions or approvals needed from the client.',
    'Any delays and their cause.',
    'Photos of key progress points.',
  ),
  p(
    'Regular updates also reduce disputes. A client who has seen the progress month by month is less likely to challenge a stage payment.',
  ),
  h2('Connect enquiries, quotations and site work'),
  p(
    'Contractors often manage the sales side, the site side and the billing side separately. The cost is re-entry and misunderstanding: what was quoted is not exactly what the crew understood, and what the crew did is not exactly what is billed.',
  ),
  p(
    'Tracking enquiries and follow-ups in a [sales CRM](/features/sales-crm-software), preparing estimates with [quotation software](/features/quotation-software), and then converting the accepted quotation into site jobs creates a continuous thread from first call to final invoice. Each stage inherits the information from the one before.',
  ),
  callout(
    'If your team already uses a separate accounting package, keep it. The goal here is to run the site operations and the customer record well, not to replace your accounts.',
  ),
  h2('Measure what matters weekly'),
  p(
    'You can keep reporting simple. Pick a small set of numbers and look at them on the same day every week:',
  ),
  ul(
    'Jobs completed on time versus delayed, by site.',
    'Open variations not yet quoted or approved.',
    'Material shortages recorded in the last week.',
    'Payments pending from clients, and for how long.',
    'Enquiries and quotations awaiting a response.',
  ),
  p(
    '[Reporting software](/features/reporting-software) can assemble these from the underlying job data. The benefit is not the chart; it is that the numbers are consistently defined from week to week, so changes are meaningful.',
  ),
  h2('Choosing software for construction site management'),
  p(
    'Construction software ranges from enterprise suites to lightweight field tools. For a contractor managing site work and customers, evaluate on practical points:',
  ),
  ul(
    'Can supervisors use it comfortably on a phone, including uploading photos?',
    'Does it keep enquiries, quotations, jobs and payments connected?',
    'Can you assign and track jobs across several sites?',
    'Can you track materials against jobs?',
    'Is setup quick enough for your team to adopt it without long training?',
  ),
  p(
    'FSMFlow is designed for contractors and service teams who work at customer locations. The [construction management software page](/solutions/construction-management-software) shows how enquiries, quotations, site work, crews and payments are connected.',
  ),
  h2('Frequently asked questions'),
  h3('How can a small contractor manage multiple construction sites?'),
  p(
    'Use the same job structure for every site, assign an owner to each job, review status daily and materials a day ahead, and collect progress updates with photos from the supervisors’ phones. Central visibility of all sites in one place makes the owner’s weekly review much easier.',
  ),
  h3('What should be included in a construction progress update?'),
  p(
    'Work completed, work planned, approvals needed, delays with their reasons, and a few photographs. Keep it short and send it on a regular schedule.',
  ),
  h3('How do I track extra work requested by clients?'),
  p(
    'Record each variation on the job when it is requested, with the date and the requester, and prepare a revised quotation or approval note before the extra work starts. This keeps the final bill consistent with the work done.',
  ),
  h3('Do I need project management software or field service software?'),
  p(
    'It depends on the scale and complexity of your projects. Contractors who run many small-to-medium jobs across sites and need to coordinate crews, materials, customers and payments often find a field-service style system a good fit. Very large projects may need specialised planning tools in addition.',
  ),
  h2('The takeaway'),
  p(
    'Good construction site management comes down to clear jobs, a visible daily plan, early awareness of material needs and steady communication with the client. Adopt these habits first; software then makes them easier to sustain as the number of sites grows.',
  ),
  p('To see how this could work for your business, [book a demo](/demo) and share how your sites and teams are organised today.'),
]

/* -------------------------------------------------------------------------- */
/* General service business                                                    */
/* -------------------------------------------------------------------------- */

export const SERVICE_BUSINESS_ARTICLE: BlogBlock[] = [
  p(
    'If you run a small service business, you probably started with a notebook, a phone and a good reputation. Maybe it is a pest control firm, an RO and water purifier service, an appliance repair team or a facility maintenance crew. At some point the notebook stops being enough, and you start searching for the best field service management software for a small business.',
  ),
  p(
    'The trouble is that most lists of software are written for large companies or by the vendors themselves. This guide is different: it is a practical checklist for choosing, written for owners of small Indian service businesses who want to avoid paying for features they will never use.',
  ),
  h2('What field service management software actually does'),
  p(
    'Field service management (FSM) software helps a business that sends people to customer locations to plan, carry out and follow up on that work. In practice, it usually covers:',
  ),
  ul(
    'Customer and site records, including the equipment you service.',
    'Job creation, scheduling and assignment to technicians.',
    'A mobile app for technicians to see and update jobs.',
    'Quotations, invoices and payment tracking.',
    'Service contracts, warranty and recurring visits.',
    'Parts or inventory tracking.',
    'Reports on what is done, pending and due.',
  ),
  p(
    'Not every business needs every item on this list. The right choice is the one that handles your biggest daily headaches well.',
  ),
  h2('Signs it is time to move beyond notebooks and spreadsheets'),
  p('You do not need software the day you start. These are signs that you may be ready:'),
  ul(
    'Customers call to ask whether someone is coming, and you have to ring around to find out.',
    'The same customer details are written in three places.',
    'You miss repeat visits or contract renewals because dates are scattered.',
    'You cannot say which technician did what last week without asking.',
    'Quotes and invoices take hours to prepare.',
    'You are growing and cannot be on every job any more.',
  ),
  p(
    'If two or three of these sound familiar, the cost of disorganisation is probably already higher than the cost of a tool.',
  ),
  h2('Choosing the best field service management software: a practical checklist'),
  h3('1. Start with your own workflow'),
  p(
    'Write down how a job moves today: enquiry, quotation, scheduling, visit, completion, payment, follow-up. Mark the two steps where things most often go wrong. The software you choose should make those steps easier first. Everything else is a bonus.',
  ),
  h3('2. Check how technicians will use it'),
  p(
    'A tool that office staff like but technicians avoid will fail. Ask to see the technician experience on a mid-range Android phone. Is the job list clear? Can they add notes and photos easily? Does it handle patchy internet? A good [field service app](/features/field-service-app) should be simple enough to use between visits without training manuals.',
  ),
  h3('3. Look at scheduling and dispatch'),
  p(
    'Can you see all technicians and jobs in one view and move a job when plans change? Scheduling is where most small teams feel the pain first. [Employee and technician scheduling](/features/employee-management-software) features should make it faster to assign work, not slower.',
  ),
  h3('4. Make sure quotes and payments are covered'),
  p(
    'Getting paid is part of the job. See whether you can prepare a quotation, convert it to a job and track payment status within the same system. [Quotation software](/features/quotation-software) that links to the job avoids the double entry that causes billing mistakes.',
  ),
  h3('5. Ask about contracts, warranty and repeat work'),
  p(
    'Many small service businesses live on repeat work: yearly service contracts, periodic visits and warranty claims. If that describes you, check that the software tracks contract dates, schedules recurring visits and reminds you before renewals. That is the territory of [warranty and AMC management](/features/warranty-management-software).',
  ),
  h3('6. Think about parts and equipment'),
  p(
    'If you carry spares or service customer equipment, look for [inventory management](/features/inventory-management-software) and [asset records](/features/asset-management-software). If your work is purely labour-based, you can skip these and keep the system simpler.',
  ),
  h3('7. Confirm the reports are useful'),
  p(
    'Reports should answer the questions you ask every week: how many jobs were completed, what is pending, which payments are overdue, and what renewals are coming up. Simple, clear [reports](/features/reporting-software) beat elaborate dashboards you never open.',
  ),
  h3('8. Check price clarity and support'),
  p(
    'Ask what is included in each plan, how pricing changes as you add users, and what support is available during onboarding. Be wary of hidden extras. You can review FSMFlow plans on the [pricing page](/pricing).',
  ),
  callout(
    'Before you sign up for anything, run a trial with one real week of your jobs. A demo with sample data tells you much less than your own customers, technicians and routes do.',
  ),
  h2('Features small businesses often over-buy'),
  p(
    'Larger platforms include modules that sound impressive but add complexity for a small team: advanced route optimisation, multi-branch hierarchies, elaborate approval flows. These are valuable at scale. For a team of five to twenty, they can slow adoption. Prioritise the daily essentials and make sure the system can grow if you need more later.',
  ),
  h2('How to roll it out without disrupting work'),
  ul(
    'Choose a start date during a quieter period rather than your busiest week.',
    'Enter your active customers and open jobs first, not your whole history.',
    'Begin with one team or one service line and expand once it is stable.',
    'Hold a short session with technicians and listen to their feedback in the first week.',
    'Keep the old method running in parallel for a few days, then retire it.',
  ),
  p(
    'Most adoption failures come from rushing or from technicians who were never asked. A gradual rollout avoids both.',
  ),
  h2('Where FSMFlow fits'),
  p(
    'FSMFlow is built for Indian service businesses that send people to customer locations, from AC and CCTV teams to solar, construction and general service businesses. If your business is not one of these specific trades, the [service business management software page](/solutions/service-business-management-software) explains how the modules work for a general service team. For a broader overview, visit the [FSMFlow home page](/).',
  ),
  h2('Frequently asked questions'),
  h3('What is the best field service management software for a small business?'),
  p(
    'There is no single best option. The best choice is the one that solves your biggest daily problems, is easy for technicians to use, and fits your budget. Shortlist two or three tools, test them with real jobs and decide based on what your team actually uses.',
  ),
  h3('How much does field service software cost?'),
  p(
    'Pricing varies widely and is usually based on the number of users and the features included. Ask each vendor for a clear breakdown, including onboarding and support, rather than comparing headline numbers alone.',
  ),
  h3('Can a small team of five technicians use field service software?'),
  p(
    'Yes. Many tools work well for small teams, and the benefits, such as fewer missed visits and quicker billing, often appear early. Choose a simple system and avoid features you do not need.',
  ),
  h3('Do technicians need smartphones for field service software?'),
  p(
    'Most modern field service tools use a mobile app, so technicians typically need an Android or iOS phone with internet access. Check how the app behaves with weak connectivity before committing.',
  ),
  h2('Making the decision'),
  p(
    'Choosing field service software for a small business is less about finding the most powerful tool and more about finding the one your team will actually use. Start with your workflow, test with real jobs, and grow into more features over time.',
  ),
  p('If you would like to see whether FSMFlow suits your service business, [book a demo](/demo) and we will walk through your use case.'),
]

/* -------------------------------------------------------------------------- */
/* What is field service management (beginner's guide)                       */
/* -------------------------------------------------------------------------- */

export const WHAT_IS_FSM_ARTICLE: BlogBlock[] = [
  p(
    'If a technician has ever visited your home to fix an AC, install a CCTV camera, service a solar panel or repair an appliance, you have already seen field service management in action — you just saw the customer-facing half of it. So what is field service management? In short, it is how a business plans, assigns and tracks the work its technicians do at customer locations, from the first enquiry to the final invoice.',
  ),
  p(
    'This guide is written for anyone new to the term: a service business owner, an office manager who just inherited the scheduling WhatsApp group, or someone comparing software for the first time. We will cover what field service management means, how the process actually works, its real benefits and challenges, and where software fits in.',
  ),
  h2('What is field service management, in practice?'),
  p(
    'Field service management is the set of processes a business uses to coordinate work that happens away from its office — at a customer’s home, site or premises — rather than at a fixed location like a shop or a clinic.',
  ),
  p('That covers a wide range of trades, including:'),
  ul(
    'HVAC and AC servicing, installation and AMC visits',
    'CCTV and security camera installation and maintenance',
    'Solar panel installation and after-sales service',
    'Construction and contracting site work',
    'Appliance repair, plumbing, electrical and pest control',
    'Any business that sends people out to do work, rather than waiting for customers to walk in',
  ),
  p(
    'In every one of these, the same questions repeat: who should go, when, with what parts and information, and how does the business know the job was done properly and get paid for it? Field service management is the answer to those questions, whether it is handled on paper, in spreadsheets, or in dedicated software.',
  ),
  h2('How does field service management work?'),
  p(
    'At a basic level, field service management connects three things that otherwise live in separate places: the customer and their request, the technician who does the work, and the record of what happened. When those three stay connected — instead of scattered across phone calls, notebooks and chat messages — the business can see its field service operations clearly instead of guessing.',
  ),
  p(
    'It does not require expensive tools to start. A small business can manage this with a shared spreadsheet and a group chat. The ideas below describe the same process whether you run it manually or with software — the difference is mostly how much manual effort it takes to keep it accurate.',
  ),
  h2('The field service management process, step by step'),
  p('Most field service work follows a similar sequence, whatever the trade:'),
  ul(
    'Enquiry or lead — a customer calls, messages or submits a form describing what they need.',
    'Scheduling and dispatch — the request is turned into a job and assigned to a technician based on skill, location and availability.',
    'Preparation — the technician checks the job details, the site history (if there is one) and which spare parts or tools to carry.',
    'The visit — the technician travels to site, carries out the work, and records what was done, often with photos or notes.',
    'Completion and sign-off — the customer confirms the work, and the job is marked complete.',
    'Invoicing and payment — a quotation or invoice is raised based on the work and parts used.',
    'Follow-up — for contracts like AMC or warranty work, the next visit is scheduled and reminders are set so renewals are not missed.',
  ),
  p(
    'Written out, this looks straightforward. In a real business handling dozens of jobs a week across several technicians, the hard part is keeping every step accurate and visible without someone having to chase each one individually. That is what a [work order management system](/features/work-order-management-software) is built to hold together — the request, the assignment, the technician’s updates and the completion record, all attached to the same job.',
  ),
  h2('Key benefits of field service management'),
  p(
    'Businesses that manage field service deliberately — rather than reactively — tend to see the same set of benefits:',
  ),
  ul(
    'Faster response times, because dispatch is a quick decision instead of a round of phone calls to find out who is free.',
    'Fewer repeat visits, because the technician arrives with the right job details and the parts the visit is likely to need.',
    'Better field service technician productivity, since less of the day is lost to paperwork, waiting for instructions, or travelling to the wrong address.',
    'More accurate billing, because the parts and time used on a job are recorded while the work is fresh rather than reconstructed later.',
    'Stronger customer relationships, since customers get clear updates and do not have to repeat their issue on every call.',
    'Visibility for the owner or manager, who can see what is actually happening across the team instead of relying on individual updates.',
  ),
  p(
    'None of these benefits depend on having the biggest or most expensive system. They depend on the business agreeing on one process and sticking to it — software just makes that process easier to keep up as the team grows.',
  ),
  h2('Common challenges in field service operations'),
  p('The same handful of problems shows up across almost every field service business as it grows past a handful of technicians:'),
  ul(
    'Manual, phone-based scheduling that depends on one person remembering who is free and where.',
    'Information that lives in someone’s head or a notebook, so the next technician on a job starts from zero.',
    'Spare parts or stock that run out mid-visit because nobody tracked what was used on the last job.',
    'Paperwork completed at the end of the day from memory, instead of on-site while details are accurate.',
    'No easy way to see which jobs are overdue, which contracts are expiring, or which technician is overloaded.',
  ),
  p(
    'These are not failures of the technicians doing the work. They are gaps in the process connecting the office, the technician and the customer — and they get wider, not smaller, as a business adds more jobs and more people.',
  ),
  h2('How software helps manage field service operations'),
  p(
    'Field service management software exists to close those gaps without hiring more office staff to manage them. In practice, it usually covers a few connected pieces:',
  ),
  ul(
    'A shared view of jobs, so dispatch is based on real availability instead of memory.',
    'A [field service app](/features/field-service-app) technicians use on-site to see job details and record what was done.',
    'Stock tracking through [inventory management software](/features/inventory-management-software), so parts used on a job are linked back to it.',
    'Quotations and invoices built with [quotation software](/features/quotation-software), using the same job and customer details rather than starting from scratch.',
    'Simple [reporting](/features/reporting-software) that shows completed jobs, repeat visits and pending renewals without manual spreadsheet work.',
  ),
  callout(
    'Software is not the starting point — the process is. If a business has not agreed on how a job moves from enquiry to invoice, moving that confusion into an app just makes it digital, not better. Fix the process first, then let software remove the manual effort of running it.',
  ),
  p(
    'If you are past the point where a spreadsheet and a group chat can keep up, a dedicated platform built for this kind of work — one that holds jobs, technicians, customers, parts and invoices together, such as [FSMFlow’s service business management software](/solutions/service-business-management-software) — is usually the next step, rather than adding more manual checks to the existing process.',
  ),
  h2('Frequently asked questions'),
  h3('What is field service management in simple terms?'),
  p(
    'It is how a business organises work that happens at a customer’s location rather than its own premises — deciding who goes, when, with what information, and recording what happened so the job can be billed and followed up correctly.',
  ),
  h3('What industries use field service management?'),
  p(
    'Any business that sends people to customer sites: HVAC and AC servicing, CCTV and security installation, solar installation, construction and contracting, plumbing, electrical work, appliance repair, pest control and similar trades.',
  ),
  h3('What is the difference between field service management and a CRM?'),
  p(
    'A CRM focuses on tracking leads, contacts and the sales relationship. Field service management covers what happens after the sale too — scheduling the visit, equipping the technician, tracking parts used, and completing and billing the job. Some platforms, including FSMFlow, combine both.',
  ),
  h3('Do small businesses really need field service management software?'),
  p(
    'Not immediately. A small team can run this process on a shared sheet and a phone. It usually becomes worth adopting software once missed appointments, repeat visits or billing delays start costing more time than learning a new tool would take.',
  ),
  h3('How do I get started with field service management if I currently use notebooks or spreadsheets?'),
  p(
    'Start by writing down your actual process end to end — enquiry, scheduling, the visit, completion and invoicing — and agree on it as a team. Once that is consistent, decide which step causes the most repeated problems, and look for a tool that fixes that step specifically rather than replacing everything at once.',
  ),
]

/* -------------------------------------------------------------------------- */
/* Preventive maintenance guide (Sri Lanka)                                    */
/* -------------------------------------------------------------------------- */

export const PREVENTIVE_MAINTENANCE_ARTICLE: BlogBlock[] = [
  p(
    'Equipment rarely fails at a convenient time. An air conditioner stops on the hottest afternoon of the week, a CCTV recorder is found to have stopped recording only when footage is needed, and a solar inverter fault goes unnoticed for weeks. Each failure disrupts the customer, and each one pulls your technicians away from the work they had planned.',
  ),
  p(
    'Preventive maintenance is the discipline that reduces these surprises. This guide explains what it is, how it differs from reactive maintenance, and how a service business in Sri Lanka can build a practical preventive maintenance schedule, a working checklist and the maintenance records to support both.',
  ),
  h2('What Is Preventive Maintenance?'),
  p(
    'Preventive maintenance is routine, planned work carried out on equipment before it fails, so that wear and faults are found during a scheduled visit instead of an emergency call. It is often called planned maintenance. The work itself is usually simple: inspect, clean, test, adjust and replace consumable parts.',
  ),
  p('There are two common ways to decide when that work happens:'),
  ul(
    'Time-based: a task is due at a fixed interval, such as every three months or once a year.',
    'Usage- or condition-based: a task is due after a certain amount of running time, or when an inspection shows that something needs attention.',
  ),
  p(
    'Most service businesses start with time-based planning, because it is easy to explain and easy to schedule. It is also what many service contracts, including AMCs (annual maintenance contracts), promise: a set number of planned visits a year.',
  ),
  h2('Why Preventive Maintenance Matters for Service Businesses'),
  p(
    'The benefits are practical rather than dramatic:',
  ),
  ul(
    'Fewer emergency callouts, because problems are found early while the repair is still small and the part can be ordered in advance.',
    'A more predictable workload, because planned visits can be scheduled in advance and spread across the week.',
    'Steadier income from service contracts, as long as the visits you promised are actually delivered.',
    'Cleaner maintenance records, which make warranty questions and repeat faults easier to answer, and let customers see the care they are paying for.',
  ),
  callout(
    'Preventive maintenance lowers the chance of failure; it does not remove it. Say this plainly when you sell a service contract, so that customers expect fewer breakdowns, not none.',
  ),
  h2('Preventive Maintenance vs Reactive Maintenance'),
  p(
    'Reactive maintenance means fixing equipment after it has failed. Every service business does some of it, because some faults cannot be predicted. The problem starts when reactive work is the only kind of equipment maintenance a team does.',
  ),
  ul(
    'Trigger: reactive work starts with a breakdown call; preventive work starts with a schedule.',
    'Timing: reactive work is urgent and unpredictable; preventive work can be planned around the customer’s operating hours.',
    'Customer experience: reactive work is judged on how fast you arrive; preventive work is judged on how rarely you are needed at short notice.',
  ),
  p(
    'The aim is balance. Keep capacity free for genuine emergencies, and protect planned visits so urgent calls do not push them out week after week.',
  ),
  h2('How to Create a Preventive Maintenance Schedule'),
  p(
    'A preventive maintenance schedule needs to be complete, realistic and visible to the whole team. Work through these steps in order.',
  ),
  h3('1. List every piece of equipment you look after'),
  p(
    'Start with an equipment list. For each item, note the customer, site, equipment type, model, serial number, installation date and warranty or contract status. If you cannot say what you are maintaining, you cannot plan how often to maintain it.',
  ),
  h3('2. Decide the tasks and the frequency'),
  p(
    'For each equipment type, agree the tasks and how often they are due. Use the manufacturer’s guidance as the starting point and adjust with your own experience of the site. Do not copy a frequency from another business without checking that it suits the equipment and its environment.',
  ),
  h3('3. Prioritise by how much a failure would hurt'),
  p(
    'The cooling for a server room, the CCTV at a warehouse entrance or the refrigeration at a clinic deserves more attention than a spare office unit. Give critical equipment shorter intervals and earlier calendar slots.',
  ),
  h3('4. Turn the plan into dated visits'),
  p(
    'This is where plans most often stop. Convert each task into a dated visit with a technician, an expected duration and the parts to carry. Group visits by area to reduce travel, and check for public holidays and closures. Many sites slow down or close around the Sinhala and Tamil New Year in April, for example, so plan those visits early or move them.',
  ),
  h3('5. Confirm with the customer'),
  p(
    'Tell the customer a few days ahead, confirm access, and ask about any problems since the last visit. It saves wasted trips and gives you useful information before you arrive.',
  ),
  h3('6. Record the visit and review the schedule'),
  p(
    'After each visit, record what was checked, found and replaced, and what you recommend next. Review the schedule every few months: if a unit keeps failing between visits, its interval or task list needs to change.',
  ),
  h2('Preventive Maintenance Checklist for Service Teams'),
  p(
    'A preventive maintenance checklist keeps every visit to the same standard, whoever attends. Start with a general structure, then add equipment-specific steps.',
  ),
  h3('Before the visit'),
  ul(
    'Review the equipment record and the notes from the previous visit.',
    'Confirm the appointment and site access with the customer.',
    'Collect the parts, tools and safety equipment for the job.',
  ),
  h3('During the visit'),
  ul(
    'Inspect the equipment visually and note anything unusual.',
    'Carry out the cleaning, testing and adjustment steps on the checklist.',
    'Take before-and-after photos where they help to show the condition of the equipment.',
    'Note anything that needs a quotation, such as a worn part or a recommended repair.',
  ),
  h3('After the visit'),
  ul(
    'Update the maintenance record and service history for the equipment.',
    'Share a short service report with the customer and get their acknowledgement.',
    'Schedule the next visit and any follow-up work.',
  ),
  h3('Examples of equipment-specific steps'),
  p(
    'These are starting points only. Always follow the manufacturer’s instructions and the safety rules that apply to the equipment and the site.',
  ),
  ul(
    'Air conditioning: check and clean filters, inspect coils, clear the drain line, check electrical connections and review cooling performance. See [HVAC field service software](/solutions/hvac-field-service-software) for how this fits into a wider job workflow.',
    'CCTV: clean lenses and housings, confirm each camera view, check that the recorder is actually recording, review storage health and inspect connectors and power supplies. See [CCTV software](/solutions/cctv-software) for how survey, installation and service records connect.',
    'Solar: check panels for dirt and new shading, inspect mounting and cabling visually, review inverter alerts and logs, and leave electrical protection checks to suitably qualified staff. See [solar software](/solutions/solar-software) for after-sales service.',
  ),
  h2('Common Preventive Maintenance Planning Mistakes'),
  ul(
    'No equipment list, so some customers are visited often and others are forgotten.',
    'The schedule lives in someone’s head or a chat thread. When that person is away, planned work stops.',
    'Planned visits give way to emergencies every time, with no rule for rescheduling them.',
    'Findings are written down but never followed up, so the same fault is recorded visit after visit.',
    'Maintenance records are incomplete, which makes it hard to settle a warranty question or explain a repeat fault.',
  ),
  h2('How Software Can Support Preventive Maintenance'),
  p(
    'A well-kept spreadsheet can carry a small team a long way. Software helps once customers, technicians and sites outgrow what one person can hold in their head. Four areas matter most.',
  ),
  h3('Equipment records and service history'),
  p(
    'Planned visits depend on knowing what is installed and what has been done. [Asset management software](/features/asset-management-software) keeps each unit’s model, serial number, warranty and AMC status and complete service history in one place, with next-service dates showing what is coming up.',
  ),
  h3('Maintenance scheduling and job assignment'),
  p(
    'Maintenance scheduling means every planned visit becomes a job with a date, a technician and a status. With [work order management software](/features/work-order-management-software), each job can carry a checklist, the parts used, photos and a service report. For customers on service contracts, [warranty and AMC management software](/features/warranty-management-software) tracks scheduled visits and renewals alongside the contract.',
  ),
  h3('Checklists on the technician’s phone'),
  p(
    'A [field service app](/features/field-service-app) puts the day’s jobs, equipment details and checklist on the technician’s phone, so notes and photos are captured on site.',
  ),
  h3('Reports that show whether the plan is working'),
  p(
    '[Reporting software](/features/reporting-software) turns completed jobs into figures you can review, such as jobs done, technician productivity and AMC renewals, so you can see whether planned visits are actually being delivered.',
  ),
  h2('How Sri Lankan Service Businesses Can Improve Maintenance Planning'),
  p(
    'A few habits suit service businesses in Sri Lanka particularly well.',
  ),
  ul(
    'Start small. Pick one equipment type, such as air conditioning at a few hotel, clinic or factory sites, and run a proper schedule for three months before widening it. Sites with many similar units suit a shared checklist.',
    'Plan around the calendar. Schedule outdoor work, such as solar panel checks and outdoor CCTV inspections, with the monsoon periods in mind, and allow for public holidays when sites are closed.',
    'Cluster visits by area. Travel time is a real cost when customers are spread across Colombo and other towns, so group planned visits geographically.',
    'Pay attention to the environment. Humid or coastal sites can be harder on equipment, so ask whether the intervals and cleaning steps for those sites need to be tighter.',
    'Measure a few numbers. Track planned visits completed against planned visits due, repeat visits for the same fault, and emergency callouts from contract customers.',
  ),
  p(
    'Related reading: [HVAC technician management and AMC renewals](/blog/hvac-technician-management-amc-renewals), [CCTV AMC format and management](/blog/cctv-amc-format-installation-service-renewals) and [solar installation project management](/blog/solar-installation-project-management).',
  ),
  h2('Frequently asked questions'),
  h3('What is the difference between preventive and reactive maintenance?'),
  p(
    'Preventive maintenance is planned work done before equipment fails, on a schedule. Reactive maintenance is repair work done after a breakdown. Most service businesses need both, but a healthy balance keeps emergencies from taking over the calendar.',
  ),
  h3('How often should preventive maintenance be done?'),
  p(
    'It depends on the equipment, how heavily it is used and the environment it runs in. Start from the manufacturer’s guidance, then adjust using your own service history. Critical equipment and harsher sites usually need shorter intervals.',
  ),
  h3('What should a preventive maintenance record include?'),
  p(
    'The equipment and site, the date, the technician, the tasks completed, readings or observations, parts replaced, problems found and the recommended next step. Keeping these in one place builds the service history you will want for warranty questions and repeat faults.',
  ),
  h3('Do small service businesses need software for planned maintenance?'),
  p(
    'Not on day one. A shared spreadsheet and a standard checklist can work for a small team. Software becomes useful when customers, sites and technicians outgrow what one person can track, or when planned visits keep slipping.',
  ),
  h3('Is preventive maintenance the same as an AMC?'),
  p(
    'Not exactly. Preventive maintenance is the work. An AMC (annual maintenance contract) is a commercial agreement that usually promises a set number of planned visits for a year. What each AMC covers is defined in its own terms.',
  ),
  h2('Putting Preventive Maintenance Into Practice'),
  p(
    'Preventive maintenance works when you know what equipment you are responsible for, planned visits sit on a calendar with a named technician, and every visit leaves a record. Start with the equipment list and one checklist, then build the schedule around them.',
  ),
  p(
    'FSMFlow’s approach to maintenance-led service work is summarised on the [field service management software for Sri Lanka](/field-service-management-software-sri-lanka) page. If you want to see how scheduled visits, checklists, service history and reports can sit together for your own team, [book a demo](/demo) and we will walk through it using the equipment you look after.',
  ),
]

/* -------------------------------------------------------------------------- */
/* Field service dispatch software (Malaysia)                                  */
/* -------------------------------------------------------------------------- */

export const DISPATCH_SOFTWARE_ARTICLE: BlogBlock[] = [
  p(
    'Field service dispatch software helps a service business decide which technician goes to which job, and then keeps that decision visible until the work is finished. For Malaysian companies sending technicians between homes, shops, offices and industrial sites, that decision is made many times a week, often through phone calls, chat groups or memory.',
  ),
  p(
    'The cost shows up in familiar ways. The nearest technician is not the one who gets the job, two visits clash, a customer waits for an arrival nobody confirmed, and the office cannot say where a job stands. This article explains what dispatch software does, how it improves service efficiency, which features matter, and how to choose one for an AC, CCTV, solar or maintenance team.',
  ),
  h2('What Is Field Service Dispatch Software?'),
  p(
    'Field service dispatch software, sometimes called service dispatch software, is a tool for assigning jobs to technicians who work at customer locations and tracking those jobs until completion. At its core it combines a queue of jobs, a view of who is available and what they are skilled at, and status updates sent back from the field.',
  ),
  p(
    'People often use three terms as if they meant the same thing. They do not, and the difference helps you decide what you actually need.',
  ),
  {
    type: 'table',
    caption: 'Dispatch management compared with technician scheduling and field service management',
    head: ['Term', 'The question it answers', 'Example'],
    rows: [
      ['Dispatch management', 'Who should take this job right now?', 'A breakdown call arrives at 11 am and you reassign the nearest qualified technician.'],
      ['Technician scheduling', 'Who is booked where over the coming days and weeks?', 'A quarterly servicing round for a set of customers is planned across the month.'],
      ['Field service management', 'How does the whole service business run, from enquiry to payment?', 'Quotations, jobs, equipment records, AMC contracts, parts and reports in one system.'],
    ],
  },
  p(
    'Dispatch and scheduling are parts of the wider practice, which our guide to [what field service management is](/blog/what-is-field-service-management) covers. This article stays with the dispatch end: allocating technicians and following jobs through the day.',
  ),
  h2('Why Malaysian Service Businesses Need Better Dispatch Management'),
  p(
    'Service teams in Malaysia often cover a spread of customers: condominiums and shop lots in one part of a city, factories in another, and sites in nearby towns. In dense urban areas such as the Klang Valley, a short distance on a map can still be a long drive, so the order of visits matters. Demand also arrives in bursts, for example when customers want servicing finished before a festive holiday, or when heavy rain forces outdoor work to be moved.',
  ),
  p('Without a shared system, the same problems repeat:'),
  ul(
    'Technician allocation depends on whoever the dispatcher remembers is free.',
    'Two jobs are booked for the same technician at the same time.',
    'A job sits unassigned for hours because the message was missed.',
    'Technicians criss-cross the city because visits are not grouped by area.',
    'Customers miss or lose confidence in appointments when nobody confirms the arrival.',
    'The office cannot answer “where is my technician?” without making a call.',
  ),
  p(
    'Picture an AC servicing company with a dozen technicians. A customer in Petaling Jaya reports a faulty unit at 10 am. The dispatcher phones three technicians to find out who is nearby and free, and by the time the job is assigned the customer has called twice. Better dispatch management shortens exactly this loop.',
  ),
  h2('How Field Service Dispatch Software Improves Service Efficiency'),
  p(
    'Dispatch software does not make technicians work faster. It removes the waiting and searching around the work.',
  ),
  h3('Faster Job Assignment'),
  p(
    'The job is entered once, with the customer, site and problem. The dispatcher can then see who is free and who has the right skills, assign the job, and the technician receives it on their phone straight away. In FSMFlow this assignment step is part of [work order management](/features/work-order-management-software).',
  ),
  h3('Better Technician Scheduling'),
  p(
    'Good scheduling uses real information about each person: their skills, service area, leave and current workload. When those sit in one place, a VRF fault can go to the VRF engineer and an installation to the installation lead, and visits in the same area can be grouped to cut travel. FSMFlow keeps these details in its [technician scheduling and workload tools](/features/employee-management-software).',
  ),
  h3('Improved Job Tracking and Visibility'),
  p(
    'Field service job tracking means every job has a status that is true. In FSMFlow, jobs move through assigned, en route, in progress and completed as the technician updates them, and the office can see who is on a job, who is travelling and who is free. That replaces the status calls that interrupt everybody’s day.',
  ),
  h3('Fewer Scheduling Conflicts and Delays'),
  p(
    'When the whole team works from one shared schedule, double bookings become visible before they happen. If an urgent job arrives, the dispatcher can see which visit to move and tell the customer, instead of finding out about the clash when someone fails to turn up.',
  ),
  h3('Better Customer Communication'),
  p(
    'Customers mostly want to know when someone is coming and what was done. When the office has an accurate status, staff can answer honestly. Technicians can also call the customer from the job screen, and at the end of the visit the customer signs on the phone and a service report is generated from the checklist, parts and photos. This article does not claim automatic customer notifications, which should be confirmed in a demo.',
  ),
  h2('Industries in Malaysia That Can Benefit from Dispatch Software'),
  h3('AC and HVAC Service Providers'),
  p(
    'AC companies juggle urgent breakdown calls with planned servicing, and the two compete for the same technicians. Matching the job to the skill (split unit, VRF or chiller) prevents repeat visits. For more on running the team side, see our guide to [HVAC technician management](/blog/hvac-technician-management-amc-renewals) and the [HVAC field service software](/solutions/hvac-field-service-software) page.',
  ),
  h3('CCTV Installation and Maintenance Companies'),
  p(
    'CCTV businesses run installation crews and maintenance visits at the same time. Dispatch software helps assign crews, keep service visits on the calendar and record what was done at each site. See [CCTV software](/solutions/cctv-software).',
  ),
  h3('Solar Service Businesses'),
  p(
    'Solar companies manage installation projects and after-sales service visits. Outdoor work depends on the weather, so being able to see the schedule and move a visit quickly matters. The [solar software](/solutions/solar-software) page explains how leads, installation and service connect.',
  ),
  h3('Construction and Maintenance Teams'),
  p(
    'Contractors and building maintenance teams run several crews across several sites. A shared view of who is where reduces calls between the office and the site. See [construction management software](/solutions/construction-management-software).',
  ),
  h2('Key Features to Look for in Field Service Dispatch Software'),
  p('Test any product against these points rather than a long feature list:'),
  ul(
    'A single job queue, so new jobs and unassigned work are easy to see.',
    'Technician profiles with skills, service areas and availability, so allocation is not guesswork.',
    'A mobile app that technicians can use easily, with job details, directions and status updates.',
    'A live view of who is free, travelling or on a job.',
    'Job history tied to the customer and the equipment, so the technician arrives informed.',
    'Reports on jobs completed and technician workload, so you can see whether dispatch is improving. FSMFlow’s [reporting software](/features/reporting-software) covers jobs, revenue and technician productivity.',
  ),
  h2('How to Choose the Right Dispatch Software for Your Business'),
  p(
    'Start with your own workflow, not a vendor’s demo: write down how a job moves from first call to completion and mark the two places it most often goes wrong. Then:',
  ),
  ul(
    'Run a trial with a real week of your own jobs, customers and technicians.',
    'Ask the dispatcher and two or three technicians to try it and give honest feedback.',
    'Check how the app behaves on a typical phone and on a weak mobile signal, such as inside a basement car park or plant room.',
    'Ask for clear pricing, what support is included, and how pricing changes as your team grows.',
    'Begin with one team or service line, then expand once it is working.',
  ),
  h2('How FSMFlow Can Help Manage Field Service Operations'),
  p(
    'FSMFlow is field service management software built around the daily work of service teams. For dispatch, that means creating and assigning jobs by technician skill and availability, sending them to the technician’s phone, following status from assigned to completed, and keeping checklists, photos, parts and customer sign-off on the job. The [field service app](/features/field-service-app) is where technicians see and update that work, and the [service business management software](/solutions/service-business-management-software) page shows how it fits a general service team.',
  ),
  p(
    'If you need anything specific to Malaysia, such as local tax invoicing or payment methods, ask about it during a demo; this article does not claim such features.',
  ),
  h2('Frequently Asked Questions'),
  h3('What is field service dispatch software?'),
  p(
    'It is software that helps a service business assign jobs to technicians, schedule their visits and follow each job until completion. It usually includes a view of availability and skills and a mobile app for technicians.',
  ),
  h3('What is the difference between dispatch and technician scheduling?'),
  p(
    'Dispatch decides who takes a job now, often at short notice. Technician scheduling plans who is booked when over days or weeks. Most teams need both, and good software connects them.',
  ),
  h3('Do small service teams need dispatch software?'),
  p(
    'Not always. A small team can manage with a shared calendar and clear habits. Software starts to help when jobs, technicians and sites outgrow what one person can track, or when missed appointments and double bookings become regular.',
  ),
  h3('Can dispatch software work for AC, CCTV and solar companies?'),
  p(
    'Yes, because the core workflow is the same: take the job, assign the right person, track progress and record the result. The checklists, equipment and visit types differ by trade.',
  ),
  h2('Conclusion'),
  p(
    'Field service dispatch software gives Malaysian service teams a shared, accurate picture of jobs and technicians, which means faster assignment, fewer clashes and clearer answers for customers. Start by mapping how your own jobs are dispatched today, fix the biggest gap first, and judge any tool by how well your team can use it.',
  ),
  p(
    'For a summary of how FSMFlow fits a Malaysian service operation, see [field service management software in Malaysia](/field-service-management-software-malaysia). To see how job assignment, technician scheduling and live job status work together, [book a demo](/demo) and bring a typical week of jobs.',
  ),
]

/* -------------------------------------------------------------------------- */
/* Computerized maintenance management software (South Africa)                 */
/* -------------------------------------------------------------------------- */

export const CMMS_ARTICLE: BlogBlock[] = [
  p(
    'Computerized maintenance management software gives maintenance teams one place to record equipment, plan work and see what has been done. For many South African businesses, that place is still a mix of spreadsheets, paper job cards and WhatsApp messages. Breakdowns are handled as they arrive, equipment history lives in people’s heads, and nobody can say which service visits are overdue until something fails.',
  ),
  p(
    'This guide explains what computerized maintenance management software (often shortened to CMMS) does, how it works, which features matter, and how to evaluate a solution for a South African maintenance, facilities or field service team.',
  ),
  h2('What Is Computerized Maintenance Management Software?'),
  p(
    'Computerized maintenance management software is a tool that centralises maintenance information so that work can be planned, assigned, tracked and reported. IBM describes a CMMS as [“a software solution that helps organizations automate and enhance their core maintenance operations”](https://www.ibm.com/ph-en/topics/what-is-a-cmms), and lists work order management, preventive maintenance scheduling, spare parts inventory, mobile access and reporting among its core features.',
  ),
  p(
    'If you have searched for “what is maintenance management software”, this is the answer in one line: a shared record of your equipment and the work done on it, plus the tools to schedule that work and measure the results. “CMMS”, “maintenance management software” and “maintenance management system” are used almost interchangeably.',
  ),
  h2('How Does a CMMS Work?'),
  p('Most systems are built around two things: assets and work.'),
  ul(
    'Assets are the equipment you maintain, such as a generator, a chiller, a conveyor or a set of CCTV cameras. Each has a record with details like model, location and service history.',
    'Work is every task linked to an asset: a breakdown request, a scheduled inspection, a repair. Each task becomes a work order that moves from request to assignment to completion.',
  ),
  p('A typical cycle looks like this:'),
  ul(
    'Step 1: a fault is reported or a scheduled task falls due.',
    'Step 2: a work order is created against the asset.',
    'Step 3: it is assigned to a technician, who sees it on a phone or tablet.',
    'Step 4: the technician records what was done, the parts used and any notes.',
    'Step 5: the asset’s history is updated, and managers can report on the result.',
  ),
  p('The value is in the last step. Every job adds to a record that makes the next decision better informed.'),
  h2('Why South African Businesses Need Maintenance Management Software'),
  p('Maintenance problems are not unique to South Africa, but a few practical realities make a shared system more valuable:'),
  ul(
    'Spread-out sites and teams. Many businesses maintain equipment across several sites, towns or customer premises. Keeping everyone on the same job list by phone and chat gets harder as the team grows.',
    'Mixed equipment. Older machines sit beside newer ones, with different service needs, spares and histories.',
    'Power and connectivity. Power interruptions and patchy mobile coverage are part of operational planning in many workplaces, so a system should be judged on how it copes when connectivity is poor.',
    'Safety duties. Under section 8 of the Occupational Health and Safety Act 85 of 1993, [employers must provide and maintain, as far as is reasonably practicable, a safe working environment](https://www.acts.co.za/occupational-health-/8__general_duties_of_employers_to_their_employees), which includes systems of work, plant and machinery. A maintenance system does not make a business compliant by itself, but clear records of inspections and repairs support good practice. For specific obligations, take advice from a qualified safety professional.',
  ),
  h2('Key Features to Look for in a CMMS'),
  p('Use the table below as a starting checklist, then add what is specific to your operation.'),
  {
    type: 'table',
    caption: 'CMMS features and the questions to ask a vendor about each',
    head: ['Feature', 'What it does', 'Question to ask a vendor'],
    rows: [
      ['Work order management', 'Creates, assigns and tracks every job', 'Can I see the status of every job at a glance?'],
      ['Asset records and history', 'Stores equipment details and past work', 'Can a technician see the full history before arriving?'],
      ['Preventive maintenance scheduling', 'Plans recurring tasks and visits', 'Can schedules repeat by time, and can I move a visit easily?'],
      ['Spare parts and inventory', 'Links parts to jobs and tracks stock', 'Can I see stock by location and set minimum levels?'],
      ['Mobile access', 'Lets technicians update jobs on site', 'How does the app behave with weak or no signal?'],
      ['Reporting', 'Turns job data into figures', 'Which reports come as standard, and can I export them?'],
      ['Contract and warranty tracking', 'Tracks cover dates and renewals', 'Will I be reminded before cover lapses?'],
    ],
  },
  h2('Benefits of Computerized Maintenance Management Software'),
  p('The benefits are practical, and they depend on how consistently the team uses the system:'),
  ul(
    'Better visibility. Everyone sees open, overdue and completed work in one place.',
    'More planned work. Recurring tasks are scheduled in advance, which shifts effort from emergency repairs towards preventive maintenance. Our [preventive maintenance guide](/blog/preventive-maintenance-guide-sri-lanka) explains how to build a schedule and checklist.',
    'Useful history. Repeat faults and recurring parts failures become visible instead of being rediscovered.',
    'Clearer accountability. Each job has an owner, a status and a record of what was done.',
    'Less admin. Notes, parts and photos are captured once, not rewritten later.',
  ),
  h2('CMMS vs Spreadsheets and Manual Maintenance Tracking'),
  p('Spreadsheets are a reasonable start, and for a very small team they can be enough. The differences appear as work and people grow.'),
  {
    type: 'table',
    caption: 'Spreadsheets and paper compared with maintenance management software',
    head: ['Area', 'Spreadsheets and paper', 'Maintenance management software'],
    rows: [
      ['Job status', 'Updated by hand, often late', 'Updated by the technician as work happens'],
      ['Equipment history', 'Scattered across files and chats', 'Held against each asset'],
      ['Reminders', 'Depend on someone remembering', 'Scheduled and visible'],
      ['Multiple users', 'Version clashes and overwritten cells', 'One shared record'],
      ['Reporting', 'Built manually each time', 'Generated from job data'],
    ],
  },
  p('The honest test is simple: if finding what was done to a machine last time takes more than a minute, your records are costing you time.'),
  h2('Where Fleet Maintenance Management Software Fits'),
  p(
    'Some readers searching for fleet maintenance management software are looking for something more specific: tools built around vehicles, such as service intervals based on mileage. A general CMMS can track vehicles as assets, but dedicated fleet tools often go deeper on vehicle-specific needs. If vehicles are your main concern, evaluate fleet tools separately; if vehicles are one part of a wider maintenance operation, check whether a single system can cover both.',
  ),
  h2('How to Choose the Right Maintenance Management Software in South Africa'),
  ul(
    'Map your current process. Write down how a job moves from report to completion and mark where it stalls.',
    'List must-haves and nice-to-haves. Be specific, such as “technicians must update jobs from a phone”.',
    'Test with real work. Run a trial using your own equipment, sites and team, not a sample dataset.',
    'Involve the people who will use it. Technicians who find it slow will stop using it.',
    'Check connectivity behaviour. Ask exactly what happens when the signal drops.',
    'Understand pricing and support. Ask what is included, how cost changes as you add users, and what onboarding help exists.',
    'Start small. Begin with one site or team and expand once it works.',
  ),
  h3('Common mistakes to avoid'),
  ul(
    'Buying a system far larger than your needs, then not using most of it.',
    'Skipping data clean-up, so the new system starts with unreliable records.',
    'Not agreeing who updates what, so records go stale.',
    'Judging by a demo alone instead of a trial with your own jobs.',
    'Ignoring mobile use, even though most maintenance work happens away from a desk.',
  ),
  h2('How FSMFlow Can Help Field Service and Maintenance Teams'),
  p(
    'FSMFlow is a field service management platform, built mainly for AC and HVAC service businesses and relevant to CCTV, solar, construction and other teams that send technicians to customer or site locations. It is not presented as a full enterprise CMMS, so it suits some maintenance operations better than others.',
  ),
  p('Where your maintenance work involves technicians, scheduled visits and service jobs, these parts of FSMFlow are relevant:'),
  ul(
    '[Work order management software](/features/work-order-management-software) to create, assign and track jobs, with checklists, parts, photos and a service report attached.',
    'Equipment records that keep model, serial number, warranty and AMC status and service history together.',
    '[Warranty and AMC management](/features/warranty-management-software) to track contract dates, scheduled visits and renewals.',
    'Inventory tracking for warehouse and van stock, with low-stock alerts against minimum levels you set.',
    '[Reporting software](/features/reporting-software) to review jobs, technician productivity and AMC renewals.',
  ),
  p(
    'If your needs centre on a large industrial plant, sensor-based predictive maintenance or specialist fleet tools, evaluate those requirements separately. FSMFlow’s website does not claim them. We also do not claim South African customers, local offices or country-specific integrations; ask about anything specific to your business, including how the mobile app behaves with weak connectivity, in a demo. For a general service team, see the [service business management software](/solutions/service-business-management-software) page.',
  ),
  h2('Frequently Asked Questions'),
  h3('What is computerized maintenance management software?'),
  p(
    'It is software that stores equipment records, schedules maintenance, issues and tracks work orders, and reports on completed work, so maintenance is planned and visible instead of reactive.',
  ),
  h3('How does CMMS software help maintenance teams?'),
  p(
    'It gives them one shared job list, equipment history on hand, reminders for recurring work and reports on what was done, which reduces missed tasks and repeat questions.',
  ),
  h3('What features should I look for in maintenance management software?'),
  p('Work orders, asset records and history, preventive scheduling, spare parts tracking, mobile access and reporting. Test how each works with your own jobs.'),
  h3('Is CMMS software suitable for small businesses?'),
  p(
    'Often yes, provided the system is simple enough for the team to use and priced for your size. A small team can start with one site and a few core features.',
  ),
  h3('How is maintenance management software different from a spreadsheet?'),
  p(
    'A spreadsheet stores data you enter by hand. Maintenance software links jobs, equipment, people and parts, updates status as work happens and generates reports from that data.',
  ),
  h2('Conclusion'),
  p(
    'Computerized maintenance management software helps South African maintenance and service teams replace scattered records with a shared, current picture of equipment and work. Start by mapping your process, shortlist systems against your real needs, and trial them with your own jobs. If your maintenance work is carried out by field technicians on scheduled visits and service jobs, [book an FSMFlow demo](/demo) to see whether it fits.',
  ),
]

/* -------------------------------------------------------------------------- */
/* Web based maintenance management software (Nigeria)                         */
/* -------------------------------------------------------------------------- */

export const WEB_MAINTENANCE_NIGERIA_ARTICLE: BlogBlock[] = [
  p(
    'Web based maintenance management software lets a maintenance team plan, assign and track work from a browser, with equipment records and job history kept in one shared place. For businesses in Nigeria that manage plant, buildings, vehicles or customer equipment, that matters most when maintenance still runs on phone calls, paper job cards and spreadsheets that only one person updates.',
  ),
  p(
    'The usual result is unplanned downtime, requests that wait too long, and no clear record of what was done to an asset last time. This guide explains what browser-based maintenance software does, which features to look for, how it compares with manual methods, and how to evaluate FSMFlow as an option.',
  ),
  h2('What Is Web Based Maintenance Management Software?'),
  p(
    'It is software for organising maintenance work that you use through a web browser after logging in, instead of installing a program on one computer. The maintenance information sits in a central system that authorised people can open from any supported device with an internet connection.',
  ),
  p('In practice, it usually brings together:'),
  ul(
    'Centralised maintenance information, such as assets, customers, sites and past work.',
    'Work order tracking, from the first request to completion.',
    'Team collaboration, so managers and technicians work from the same job list.',
    'Maintenance reporting, built from the work that has been recorded.',
  ),
  h3('Browser-based vs installed software'),
  p(
    'Installed software lives on a particular computer, so the data is usually available only where that computer is. Browser-based software keeps data in a central system, so an office team and technicians in the field can see the same records. The trade-off is that you need an internet connection, so check how a system behaves when connectivity is poor.',
  ),
  h2('Why Nigerian Businesses Need Maintenance Management Software'),
  p(
    'Not every business faces the same problems, but these are common where maintenance is coordinated informally:',
  ),
  ul(
    'Unplanned equipment downtime, because routine checks are not scheduled or are forgotten.',
    'Delayed maintenance requests, since requests arrive by call or message and wait for someone to notice.',
    'Manual record-keeping, which makes service history hard to find.',
    'Difficulty tracking assets, such as which unit is where and when it was last serviced.',
    'Poor coordination between technicians and managers, with status known only after a phone call.',
  ),
  p(
    'In some workplaces, power interruptions and variable mobile data coverage also affect how teams work. That is a reason to test any system under your own conditions before committing.',
  ),
  h2('Key Features to Look for in Maintenance Management Software'),
  h3('Work Order Management'),
  p(
    'Work order management software turns a maintenance request into a tracked job. Each work order records what needs doing, where, who is responsible, how urgent it is and whether it is open, in progress or done. That makes priorities visible and removes the guesswork about who is handling what. See FSMFlow’s [work order management software](/features/work-order-management-software) for how this works there.',
  ),
  h3('Preventive Maintenance Scheduling'),
  p(
    'Preventive maintenance software schedules recurring work, such as monthly inspections or quarterly servicing, and reminds the team before it falls due. Planned visits can find a worn part before it fails, which helps reduce unexpected breakdowns, although no system removes failures completely. For a practical method, read our [preventive maintenance guide](/blog/preventive-maintenance-guide-sri-lanka).',
  ),
  h3('Asset and Equipment Tracking'),
  p(
    'A central asset record holds the details of each piece of equipment and every job done on it. Technicians arrive knowing the history, and managers can spot repeat faults. [Asset management software](/features/asset-management-software) in FSMFlow keeps model, serial number, warranty and AMC status with the service history.',
  ),
  h3('Technician and Team Management'),
  p(
    'Look for a way to assign jobs by skill and availability and to see who is on a job, travelling or free. This cuts the calls needed to coordinate a team and makes it easier to move work when plans change.',
  ),
  h3('Maintenance Reports and Performance Tracking'),
  p('Reports should answer practical questions:'),
  ul(
    'How many jobs were completed, and how many are overdue?',
    'Which equipment keeps returning with the same fault?',
    'Are planned visits being delivered on schedule?',
  ),
  h3('Browser-Based Access'),
  p(
    'Authorised users should be able to open the system in a supported browser, and technicians should have a simple way to update jobs on site. Ask the vendor which browsers and devices are supported, and how access is controlled for different users.',
  ),
  h2('Web Based Maintenance Management Software vs. Traditional Maintenance Methods'),
  p('Spreadsheets and paper can work for a very small operation. The gaps show as the number of assets, sites and people grows. Capabilities vary between products, so treat the right-hand column as typical, not guaranteed.'),
  {
    type: 'table',
    caption: 'Traditional maintenance methods compared with web based maintenance management software',
    head: ['Area', 'Spreadsheets, paper and chat', 'Web-based maintenance software (typical)'],
    rows: [
      ['Maintenance records', 'Scattered across files and notebooks', 'Held centrally against each asset'],
      ['Work order tracking', 'Status found by asking around', 'Status updated as work progresses'],
      ['Preventive maintenance scheduling', 'Depends on someone remembering', 'Recurring schedules with reminders'],
      ['Team coordination', 'Calls and messages', 'One shared job list'],
      ['Reporting', 'Compiled by hand', 'Generated from recorded jobs'],
      ['Accessibility', 'Tied to a person or a device', 'Available to authorised users via a browser'],
    ],
  },
  h2('How Web-Based Maintenance Software Relates to CMMS'),
  p(
    'CMMS (computerized maintenance management system) is the traditional name for software that organises assets, work orders, schedules and service records. Browser-delivered maintenance software generally does the same job, so the terms often overlap. Systems built for large industrial plants are also called CMMS, and those should be assessed separately. For the full definition and a feature checklist, see our [CMMS guide](/blog/computerized-maintenance-management-software-south-africa).',
  ),
  h2('How to Choose the Right Maintenance Management Software in Nigeria'),
  p('Judge each option against your own operation using this list:'),
  ul(
    'Business and industry requirements: does it fit how your team actually works?',
    'Essential features: work orders, schedules, asset records and reports.',
    'Ease of use: will technicians and managers use it every day?',
    'Browser and mobile compatibility: confirm supported browsers and devices.',
    'Reporting: can you see overdue work and recurring faults?',
    'Implementation and training: how long does set-up take, and what help is provided?',
    'Pricing transparency: what is included and how does cost change as you grow?',
    'Customer support: how do you reach the vendor, and when?',
    'Data security and access controls: who can see and change what?',
  ),
  p('Run a trial using real jobs and equipment, and involve the people who will use it daily.'),
  h2('How FSMFlow Can Help Businesses Manage Maintenance'),
  p(
    'FSMFlow is a cloud-based field service management platform for service businesses that send technicians to customer or site locations, such as AC and HVAC, CCTV, solar and construction teams. It is not presented as a full industrial CMMS, so it suits maintenance carried out by field teams through scheduled visits and service jobs.',
  ),
  p('Connecting FSMFlow to the problems above:'),
  ul(
    'Work orders carry the assignee, status, checklist, parts, photos and a service report, which tackles delayed requests and unclear status.',
    'Equipment records keep service history, warranty and AMC status together, which helps with asset tracking.',
    'Scheduled visits and [warranty and AMC tracking](/features/warranty-management-software) support planned maintenance.',
    'Technicians use the [field service app](/features/field-service-app) to update jobs from their phones.',
    '[Reporting software](/features/reporting-software) shows jobs, technician productivity and AMC renewals.',
  ),
  p(
    'We have not described Nigeria-specific features, local integrations, naira pricing or Nigerian customers here, because the website does not claim them. Ask about anything specific to your business in a demo. You can also read about [field service management software for Nigeria](/field-service-management-software-nigeria).',
  ),
  h2('Frequently Asked Questions'),
  h3('What is web-based maintenance management software?'),
  p(
    'It is software for planning and tracking maintenance that you use through a web browser. Work orders, asset records and reports sit in one central system that authorised users can access.',
  ),
  h3('How does maintenance management software help businesses in Nigeria?'),
  p(
    'It replaces scattered calls, messages and paper with one shared record of requests, jobs and equipment history. That makes status visible and planned work easier to schedule. Results depend on how consistently the team uses it.',
  ),
  h3('What is the difference between CMMS and maintenance management software?'),
  p(
    'The terms are used almost interchangeably. CMMS stands for computerized maintenance management system, and most web based maintenance management software performs the same role through a browser.',
  ),
  h3('How does preventive maintenance software help reduce equipment downtime?'),
  p(
    'It schedules recurring inspections and servicing and reminds the team, so faults are found during planned visits. It reduces the chance of unexpected failures but cannot prevent every one.',
  ),
  h3('What features should businesses look for in maintenance management software?'),
  p('Work order tracking, preventive scheduling, asset records, technician assignment, reporting and simple access for field staff. Test each with your own jobs.'),
  h3('How can a business get started with FSMFlow?'),
  p(
    'The simplest way is to [book a demo](/demo) and describe your maintenance workflow. You can also [contact the team](/contact) with questions first.',
  ),
  h2('Conclusion'),
  p(
    'Web based maintenance management software helps Nigerian businesses organise requests, equipment records and planned work in one place, so managers and technicians share the same picture. Start by mapping how maintenance jobs move today, then test options against that process with your own jobs.',
  ),
  p(
    'If your maintenance is done by field technicians on scheduled visits and service jobs, [book an FSMFlow demo](/demo) to see whether it fits.',
  ),
]

/* -------------------------------------------------------------------------- */
/* Mobile field service management software (India)                            */
/* -------------------------------------------------------------------------- */

export const MOBILE_FSM_ARTICLE: BlogBlock[] = [
  p(
    'Most service businesses start by coordinating jobs through phone calls, WhatsApp groups and a notebook. It works for a few technicians. Then jobs get double-booked, customer details sit in different places, and nobody can say whether a visit has actually started. Mobile field service management software puts jobs, technicians and customer records in one system, with an app in the technician’s hand.',
  ),
  p(
    'This guide explains what it is, which features to evaluate, how it helps different trades, and how to choose a solution that suits a growing AC, CCTV, solar or construction service business.',
  ),
  h2('What Is Mobile Field Service Management Software?'),
  p(
    'Mobile field service management software is a system for planning, assigning and tracking work done at customer locations, with a mobile app that technicians use in the field. The office and the technicians work from the same job records instead of passing information by phone.',
  ),
  p('In practice it usually covers:'),
  ul(
    'Service requests and work orders, from the first enquiry to completion.',
    'Technician scheduling and assignment.',
    'Customer and equipment information, including service history.',
    'Job progress updates from the field.',
    'Coordination between office staff and technicians.',
  ),
  p(
    'It is narrower than a full business suite. It focuses on the work itself: who is going where, what needs doing, and what happened. For a wider definition, see our guide to [what field service management is](/blog/what-is-field-service-management).',
  ),
  h2('Why Do Service Businesses Need Mobile Field Service Software?'),
  p('The problems are usually operational, not technical:'),
  ul(
    'Service requests are missed or answered late because they arrive by call or message.',
    'Assigning a technician means phoning around to see who is free.',
    'Nobody has a clear view of which jobs are pending, running or done.',
    'Customer and service records are scattered across phones, registers and sheets.',
    'Reports are compiled by hand at the end of the week.',
    'Managing several technicians across locations depends on one coordinator.',
    'Recurring maintenance visits are remembered, not scheduled.',
  ),
  p(
    'Software does not fix these by itself. It helps when the team actually records work in it, so the information is current. Used consistently, it makes status visible and removes many routine calls.',
  ),
  h2('Key Features to Look for in a Field Service Management App'),
  p('A field service management app should cover the daily flow of a job. Judge each feature by how well it works with your own jobs.'),
  h3('Service request and work order management'),
  p(
    'Every request becomes a work order with a customer, site, problem, priority, assignee and status. Look for a clear path from request to completion. FSMFlow’s [work order management software](/features/work-order-management-software) follows this model.',
  ),
  h3('Technician scheduling and assignment'),
  p(
    'You should see who is free and who has the right skills before assigning. Our [technician scheduling and workload tools](/features/employee-management-software) show how skills and availability can be kept in one place.',
  ),
  h3('Customer and service history'),
  p(
    'Technicians do better when they know the customer’s equipment and past visits before they arrive. [Asset management software](/features/asset-management-software) keeps this history with each unit.',
  ),
  h3('Job status tracking'),
  p('Statuses should be updated by the technician as the job moves, so the office sees real progress without calling.'),
  h3('Mobile access for field technicians'),
  p('Check that technicians can open jobs, follow a checklist and record results from a phone, and ask how the app behaves with a weak signal.'),
  h3('Preventive maintenance and AMC management'),
  p(
    'If you sell annual maintenance contracts (AMCs), look for contract dates, scheduled visits and renewal reminders. See [warranty and AMC management](/features/warranty-management-software).',
  ),
  h3('Service reports and dashboards'),
  p('Look for reports on jobs completed, technician workload and renewals due, built from recorded work and not compiled by hand.'),
  h3('Communication between office and technicians'),
  p(
    'Updates should travel through the job itself: status changes, notes, photos and sign-off. Ask the vendor exactly which communication features exist, instead of assuming messaging is included.',
  ),
  h2('How Mobile Workforce Management Software Helps Field Teams'),
  p(
    'Mobile workforce management software helps managers, office staff and technicians work from the same information. For field teams, the practical gains are:',
  ),
  ul(
    'Access to job details on the phone, instead of a call or message.',
    'Clear assignments, so each technician knows what is theirs today.',
    'Job status updates that reach the office as work progresses.',
    'Better visibility into pending and completed work.',
    'Less dependence on one coordinator’s memory.',
    'A more organised day, because visits can be sequenced by area.',
  ),
  p(
    'If dispatch is your main pain point, our guide to [field service dispatch software](/blog/field-service-dispatch-software-malaysia) goes deeper on assignment and scheduling.',
  ),
  h2('Benefits of a Field Service Technician App'),
  p('A good field service technician app should make the technician’s day easier, not add paperwork. From their side, the benefits are:'),
  ul(
    'Viewing the day’s assigned jobs in one list.',
    'Seeing customer and equipment details before arriving.',
    'Updating job progress as they travel, arrive and start work.',
    'Recording what was done, parts used and photos, where the app supports it.',
    'Fewer calls to the office to ask for addresses, history or next steps.',
    'A clearer handover to the operations team at the end of each job.',
  ),
  p('You can see how FSMFlow handles this on the [field service app](/features/field-service-app) page.'),
  h2('How Different Industries Can Use Mobile Field Service Software'),
  h3('AC and HVAC Service Companies'),
  p(
    'AC firms juggle breakdown calls with planned servicing, especially before summer. Mobile software helps assign the right technician to a split AC or VRF fault, and keeps maintenance visits scheduled. See [HVAC field service software](/solutions/hvac-field-service-software).',
  ),
  h3('CCTV Installation and Maintenance Companies'),
  p(
    'CCTV teams manage installation jobs, maintenance requests and AMC visits. Keeping service history by site and camera helps technicians arrive prepared. See [CCTV software](/solutions/cctv-software).',
  ),
  h3('Solar Installation and Service Companies'),
  p(
    'Solar businesses coordinate site visits, installation crews and later maintenance requests. A shared job record keeps follow-up service visible. See [solar software](/solutions/solar-software).',
  ),
  h3('Construction and On-Site Service Businesses'),
  p(
    'Contractors assign work to crews across sites and need progress updates without constant calls. See [construction management software](/solutions/construction-management-software).',
  ),
  h2('Manual Field Service Management vs. Mobile Software'),
  p('Manual methods can work for a very small team. The differences grow with the number of jobs and technicians.'),
  {
    type: 'table',
    caption: 'Manual field service management compared with mobile field service software',
    head: ['Area', 'Manual (calls, chats, registers)', 'Mobile field service software'],
    rows: [
      ['Job assignment', 'By phone or message, hard to confirm', 'Assigned in the system; the technician sees it on the phone'],
      ['Customer records', 'Spread across notebooks and phones', 'Kept in one record with service history'],
      ['Technician coordination', 'Depends on the coordinator', 'Shared schedule and job list'],
      ['Service status tracking', 'Found by asking', 'Updated as the job progresses'],
      ['Reporting', 'Compiled by hand', 'Generated from recorded jobs'],
      ['Access to field information', 'Through calls to the technician', 'Notes, photos and sign-off on the job'],
      ['Operational visibility', 'Limited to what people remember', 'A live view of pending and completed work'],
    ],
  },
  p('Software does not remove every problem. Results depend on how consistently the team records work.'),
  h2('How to Choose the Right Mobile Field Service Management Software'),
  p('Use this checklist when comparing options:'),
  ul(
    'Ease of use: will technicians and office staff use it every day?',
    'Mobile accessibility: which phones are supported, and how does it behave with a weak signal?',
    'Required features: work orders, scheduling, service history, AMC tracking and reports.',
    'Industry suitability: does it fit AC, CCTV, solar or construction workflows?',
    'Team size and workflows: will it suit you now and as you add technicians?',
    'Reporting requirements: can you see pending work, workload and renewals?',
    'Integration requirements: list what you need and ask directly, instead of assuming.',
    'Pricing and scalability: what is included and how does cost change as you grow?',
    'Vendor support and onboarding: who helps set up and train the team?',
  ),
  p(
    'Run a trial with real jobs and involve the dispatcher and a few technicians. Our guide on [choosing field service software for a small business](/blog/best-field-service-management-software-small-business) adds more detail.',
  ),
  h2('Why Consider FSMFlow for Your Field Service Operations?'),
  p(
    'FSMFlow is field service management software for Indian service businesses, built first for AC and HVAC teams and relevant to CCTV, solar, construction and other teams that send people to customer locations. Its verified capabilities map to the problems above:',
  ),
  ul(
    'Work orders with an assignee, status, checklist, parts, photos and a service report.',
    'Assignment by technician skill and availability, with the job appearing on the technician’s phone.',
    'Statuses that move from assigned to en route, in progress and completed as the technician updates them.',
    'A field service app showing jobs, directions, customer and unit details, checklists, and customer sign-off.',
    'Equipment records with warranty, AMC status and service history, plus scheduled visits and renewals.',
    'Reporting on jobs, technician productivity and AMC renewals.',
  ),
  p(
    'We have not described integrations, pricing or customer results here, because they should be confirmed directly. For a general service team, see [service business management software](/solutions/service-business-management-software). To see FSMFlow on your own workflow, [request a demo](/demo).',
  ),
  h2('Frequently Asked Questions'),
  h3('What is mobile field service management software?'),
  p(
    'It is software for planning, assigning and tracking work at customer locations, with a mobile app that technicians use to see and update jobs.',
  ),
  h3('How does a field service management app help service businesses?'),
  p(
    'It gives the office and technicians one shared record of jobs, customers and equipment, so assignment and status are visible without repeated calls.',
  ),
  h3('Can field service software help manage AC and HVAC technicians?'),
  p(
    'Yes. It can assign jobs by skill and availability, track status and keep maintenance visits scheduled. The result depends on consistent use by the team.',
  ),
  h3('What should businesses look for in a field service technician app?'),
  p(
    'A clear job list, customer and equipment details, simple status updates, a checklist, photos and sign-off, and reliable behaviour on a weak mobile signal.',
  ),
  h3('Is mobile field service management software suitable for small businesses?'),
  p(
    'Often yes, if it is simple enough for the team to adopt and priced for your size. Small teams can start with core features such as work orders and scheduling.',
  ),
  h3('How can a company choose the right field service management solution?'),
  p(
    'Map your current workflow, list must-have features, trial two or three options with real jobs, and involve the people who will use it daily.',
  ),
  h2('Conclusion'),
  p(
    'Choosing mobile field service management software is about giving your office and technicians one shared, current picture of the work. Start from your own workflow, test with real jobs, and judge each option on how well your team can use it.',
  ),
  p(
    'To see how FSMFlow handles jobs, technicians and service history, [request a demo](/demo) or explore the [field service app](/features/field-service-app).',
  ),
]

/* -------------------------------------------------------------------------- */
/* Service report format (India)                                               */
/* -------------------------------------------------------------------------- */

export const SERVICE_REPORT_FORMAT_ARTICLE: BlogBlock[] = [
  p(
    'A service report is the written record of a visit: what the customer reported, what the technician found, what was done and what still needs attention. Without a consistent service report format, every technician writes it differently, details go missing, and nobody can tell what happened the last time someone visited.',
  ),
  p(
    'This guide sets out the fields a good service report should contain, with practical templates for AC, CCTV and solar service businesses, and explains how to keep reports consistent as your team grows.',
  ),
  h2('What Is a Service Report Format?'),
  p(
    'A service report format is a standard structure for documenting a service visit. It lists the same sections in the same order every time: who the customer is, what equipment was serviced, what was found, what was done and what comes next.',
  ),
  p(
    'The format matters more than the wording. When every technician fills in the same fields, the office can read any report quickly, compare visits over time and spot repeat problems.',
  ),
  h2('Why Is a Standardised Service Report Important?'),
  p('A consistent format helps in practical ways:'),
  ul(
    'Consistent documentation, so reports from different technicians look and read alike.',
    'Better communication between technicians and office staff, because the office does not need to call to ask what was done.',
    'Easier access to previous service records when the same customer calls again.',
    'A clearer service history for each customer and each piece of equipment.',
    'Better maintenance planning, since recommendations and follow-ups are written down instead of remembered.',
  ),
  p('None of this guarantees fewer faults. It makes your work visible and easier to follow up.'),
  h2('Essential Fields Every Service Report Should Include'),
  p('Some fields are essential for almost every business. Others are optional and depend on your trade and workflow.'),
  {
    type: 'table',
    caption: 'Essential and optional fields in a service report',
    head: ['Field', 'Why it matters', 'Essential or optional'],
    rows: [
      ['Report number or job reference', 'Lets you find the report later and link it to the job', 'Essential'],
      ['Customer name and contact details', 'Identifies who the work was for', 'Essential'],
      ['Service location', 'Records the exact site, especially for customers with several premises', 'Essential'],
      ['Equipment or asset details', 'Shows what was serviced: type, model, serial number or position', 'Essential'],
      ['Service date and time', 'Gives the visit a clear place in the history', 'Essential'],
      ['Technician details', 'Shows who attended', 'Essential'],
      ['Reported issue or service request', 'States what the customer asked for', 'Essential'],
      ['Inspection findings', 'Records what the technician actually observed', 'Essential'],
      ['Work performed', 'Describes what was done, specifically', 'Essential'],
      ['Parts or materials used', 'Supports billing and stock records', 'Where applicable'],
      ['Outstanding issues and recommendations', 'Flags what is not fixed or should be done next', 'Essential'],
      ['Follow-up requirements', 'Sets the next visit or action and who owns it', 'Where applicable'],
      ['Customer acknowledgement', 'Confirms the customer has seen the work', 'Optional, depending on workflow'],
    ],
  },
  h2('AC Service Report Format: Example'),
  p(
    'An AC service report format should capture the unit as well as the visit. Here is a template you can adapt. The entries in the right column are examples of the kind of detail to write, not required values.',
  ),
  {
    type: 'table',
    caption: 'Sample AC service report template',
    head: ['Section', 'What to record', 'Example entry'],
    rows: [
      ['Customer and site', 'Name, phone number, address, contact person on site', 'Office unit on the first floor, front desk contact'],
      ['AC unit details', 'Type, brand, model, serial number, location', 'Split AC, indoor unit in the conference room'],
      ['Reported problem', 'What the customer described', 'Not cooling properly, water dripping from the indoor unit'],
      ['Inspection observations', 'What the technician found', 'Dirty filters, blocked drain line'],
      ['Work performed', 'Cleaning, repair or adjustment done', 'Filters cleaned, drain line cleared, operation checked'],
      ['Parts used', 'Item and quantity, if any', 'None'],
      ['Recommendations', 'Advice for the customer', 'Schedule the next routine service'],
      ['Follow-up', 'Next action and date', 'Planned service visit'],
    ],
  },
  p(
    'Many businesses also keep an AC maintenance checklist for routine servicing, which we cover below. The report records the outcome of the visit, while the checklist guides the steps. Our [preventive maintenance guide](/blog/preventive-maintenance-guide-sri-lanka) explains how to build a checklist and schedule.',
  ),
  h2('CCTV Service Report Format: Example'),
  p(
    'A CCTV service report format should identify each camera and recorder and note what was checked. Leave out AC-style fields such as refrigerant or filters, which do not apply.',
  ),
  {
    type: 'table',
    caption: 'Sample CCTV service report template',
    head: ['Section', 'What to record', 'Example entry'],
    rows: [
      ['Customer and site', 'Name, address, contact person', 'Showroom, ground floor entrance'],
      ['System identification', 'Recorder model, camera count, camera names or positions', 'Recorder in the back office, camera at the main entrance'],
      ['Reported issue', 'What the customer reported', 'One camera shows no picture'],
      ['Inspection findings', 'Camera view, recording status, storage, connectors, power', 'Loose connector at the camera end'],
      ['Work completed', 'Repair, replacement or cleaning done', 'Connector re-fixed, picture restored'],
      ['Unresolved issues', 'Anything still pending', 'Another camera needs a new power supply'],
      ['Recommended next steps', 'Advice and follow-up', 'Quote for the power supply, schedule a revisit'],
    ],
  },
  p(
    'If your business sells AMCs, the report is also the proof that contracted visits were delivered. See our guide to the [CCTV AMC format and renewals](/blog/cctv-amc-format-installation-service-renewals).',
  ),
  h2('Solar Service Report Format: Example'),
  p(
    'A solar service report format records the system and the visit. Describe observations in words, and do not invent readings or performance figures. Record only what was actually measured or seen.',
  ),
  {
    type: 'table',
    caption: 'Sample solar service report template',
    head: ['Section', 'What to record', 'Example entry'],
    rows: [
      ['Site and system details', 'Customer, site, system type, main components', 'Rooftop system at a small office'],
      ['Reported issue', 'What the customer noticed', 'Inverter showing a warning'],
      ['Inspection observations', 'Panels, mounting, cabling, inverter indication', 'Dust on panels, warning displayed on the inverter'],
      ['Maintenance performed', 'Cleaning and checks done', 'Panels cleaned, connections visually checked'],
      ['Faults or concerns identified', 'Anything abnormal', 'Warning remains, needs further diagnosis'],
      ['Recommended follow-up', 'Next steps', 'Further inspection by a qualified technician'],
    ],
  },
  p(
    'Electrical checks on a solar system should be done by suitably qualified staff, following the manufacturer’s guidance. For the project side, see [solar installation project management](/blog/solar-installation-project-management).',
  ),
  h2('Field Service Report Format for Other Businesses'),
  p(
    'The same structure works for electrical service providers, equipment maintenance companies and other teams that visit customer sites. Start from the essential fields above, then add what your trade needs: for example, equipment readings, safety checks, or the test performed.',
  ),
  p(
    'Keep one field service report format for the business, with small trade-specific sections, instead of a separate layout for every technician. That keeps records comparable across jobs.',
  ),
  h2('Service Report vs Job Sheet vs Maintenance Checklist'),
  p('These three documents are often mixed up, but they do different jobs.'),
  {
    type: 'table',
    caption: 'Service report compared with job sheet and maintenance checklist',
    head: ['Document', 'Purpose', 'When it is used'],
    rows: [
      ['Job sheet or work order', 'Instructs and tracks the job: who, where, what, when', 'Before and during the visit'],
      ['Maintenance checklist', 'Lists the steps to carry out, such as an AC maintenance checklist for filters and drain lines', 'During the visit'],
      ['Service report', 'Records what was found, done and recommended', 'At the end of the visit'],
    ],
  },
  p(
    'In short, the job sheet says what to do, the checklist guides how, and the service report records what happened. Our guide to [technician management and AMC renewals](/blog/hvac-technician-management-amc-renewals) shows how these fit into a team’s daily work.',
  ),
  h2('How FSMFlow Helps You Manage Service Reports Digitally'),
  p(
    'Handling reports on paper or in chat creates familiar problems: customer and service records are scattered, coordinating several technicians takes constant calls, follow-ups are done by hand, nobody sees job progress, and recurring maintenance is hard to track.',
  ),
  p(
    'FSMFlow is field service management software that keeps these in one workflow. Based on what its website describes, it can help in the following ways.',
  ),
  h3('Organising service jobs and customer information'),
  p(
    'Each request becomes a work order with the customer, site, problem, assignee and status. See [work order management software](/features/work-order-management-software).',
  ),
  h3('Improving field team coordination'),
  p(
    'Jobs are assigned by skill and availability and appear on the technician’s phone. Status moves from assigned to en route, in progress and completed as the technician updates it, so the office can follow progress.',
  ),
  h3('Capturing the report from the job'),
  p(
    'Technicians follow a checklist, record parts and photos, and take the customer’s sign-off on the phone. FSMFlow’s website says a service report is generated from the checklist, parts and photos on the job. See the [field service app](/features/field-service-app).',
  ),
  h3('Maintaining service history'),
  p(
    'Each completed visit is saved against the unit that was serviced, so teams can look back at previous visits and repeat issues. See [asset management software](/features/asset-management-software).',
  ),
  h3('Coordinating preventive maintenance'),
  p(
    'Scheduled AMC and maintenance visits appear on the calendar and are assigned like any other job, with a checklist and a report. See [warranty and AMC management](/features/warranty-management-software).',
  ),
  h3('Reducing manual coordination and supporting growth'),
  p(
    'With records in one place, the team depends less on spreadsheets and repeated calls. That matters more as customers, technicians and service requests increase.',
  ),
  p(
    'We have not described PDF export, offline use or automatic customer notifications, because the website does not state them. Ask about them in a demo. To see how this works for your trade, explore the [HVAC](/solutions/hvac-field-service-software), [CCTV](/solutions/cctv-software) and [solar](/solutions/solar-software) pages, or [request a demo](/demo).',
  ),
  h2('Common Service Reporting Mistakes to Avoid'),
  ul(
    'Missing customer or equipment information. Make the unit and site mandatory fields.',
    'Vague descriptions such as “serviced” or “checked”. Ask technicians to state what was done.',
    'Incomplete inspection findings. Use a checklist so nothing is skipped.',
    'Missing follow-up recommendations. Add a required field for next steps.',
    'Inconsistent formats between technicians. Use one standard template.',
    'Delayed documentation. Complete the report on site, while details are fresh.',
  ),
  h2('Frequently Asked Questions'),
  h3('What is a service report format?'),
  p('It is a standard structure for recording a service visit, so every report has the same sections: customer, equipment, findings, work done and follow-up.'),
  h3('What details should a service report include?'),
  p('Job reference, customer and site, equipment, date, technician, reported issue, findings, work done, parts used, recommendations and follow-up. Customer acknowledgement is optional.'),
  h3('How do I prepare an AC service report?'),
  p('Record the customer, site and unit details, the reported problem, what you observed, the work performed, parts used and any recommendation or follow-up.'),
  h3('What should a CCTV service report contain?'),
  p('The site, recorder and camera identification, the reported issue, findings, work completed, unresolved issues and next steps.'),
  h3('What is the difference between a service report and a job sheet?'),
  p('A job sheet or work order instructs and tracks the job. A service report records what was found and done at the end of the visit.'),
  h3('How can service businesses manage reports digitally?'),
  p('Use one template, record the work on site, and keep reports linked to the customer and equipment. A field service system can hold the job, checklist and report together.'),
  h2('Conclusion'),
  p(
    'A consistent service report format makes your work easier to follow, check and repeat. Choose the essential fields, adapt them for AC, CCTV or solar work, and make sure every technician completes the same sections on every visit.',
  ),
  p(
    'If you want to move reports from paper and chat into one workflow, [request a demo](/demo) to see how FSMFlow handles jobs, checklists, service history and reports.',
  ),
]

/* -------------------------------------------------------------------------- */
/* Service contract management software (India)                               */
/* -------------------------------------------------------------------------- */

export const SERVICE_CONTRACT_ARTICLE: BlogBlock[] = [
  p(
    'Service contracts are some of the steadiest income a service business has, and some of the easiest to lose. A renewal date passes unnoticed, a quarterly visit slips to once a year, and the customer quietly signs with someone else. Service contract management software keeps contracts, renewal dates and scheduled visits in one place, so that these things stop depending on memory and Excel sheets.',
  ),
  p(
    'This guide explains what service contract management involves, the problems it solves, the features to look for, how to run renewals, and how to choose a tool. It is written for AC, CCTV, solar, electrical and other field service businesses.',
  ),
  h2('What Is Service Contract Management?'),
  p(
    'Service contract management is the practice of recording each customer agreement, keeping track of what it covers, and making sure the promised service is delivered and renewed on time. Many businesses also call it service agreement management.',
  ),
  p('A few practical examples:'),
  ul(
    'An AC company has a yearly contract with a clinic for four visits across six units.',
    'A CCTV installer maintains cameras for a showroom and visits twice a year.',
    'A solar business offers an annual maintenance plan with cleaning and inspection visits.',
  ),
  p(
    'In India, many of these are called AMCs (annual maintenance contracts). An AMC is one common type of service contract, usually covering planned maintenance visits for a year. The exact terms differ from business to business, so what is covered should always be written in the contract itself.',
  ),
  h2('Why Do Service Businesses Need Service Contract Management Software?'),
  p('Spreadsheets and notebooks work with a handful of contracts. As the list grows, the same problems appear:'),
  ul(
    'Missed contract renewals, because end dates are buried in a sheet nobody opens.',
    'Forgotten customer follow-ups, since the renewal call depends on one person remembering.',
    'Missed scheduled maintenance visits, so contracted service quietly turns into a visit when something breaks.',
    'Manual Excel tracking, with several versions and no single source of truth.',
    'Poor customer communication, because staff cannot say quickly what a customer is entitled to.',
    'Difficulty tracking contract history, such as which visits were done and what was found.',
  ),
  p(
    'Service contract software does not guarantee renewals. It makes the dates and obligations visible, so your team can act early.',
  ),
  h2('Important Features of Service Contract Management Software'),
  p('Use this list when evaluating tools. Not every product covers all of it.'),
  h3('Contract records and key dates'),
  ul(
    'Centralised contract records: customer, units covered, number of visits and contract value in one place.',
    'Contract start and expiry dates, clearly visible.',
    'Contract status tracking, such as active, due for renewal or expired.',
  ),
  h3('Visits and renewals'),
  ul(
    'Renewal reminders ahead of the expiry date.',
    'Scheduled service visits created from the contract and shown on a calendar.',
    'Technician assignment, so each visit has a named person.',
  ),
  h3('Context and visibility'),
  ul(
    'Customer and equipment details linked to the contract.',
    'Service history showing visits done and visits remaining.',
    'Reports and dashboards on renewals due and visits completed.',
  ),
  h2('How to Manage AMC and Service Contract Renewals'),
  p('Service contract renewal management works best as a routine with clear steps, not a last-minute rescue.'),
  ul(
    'Step 1: keep every contract in one list with start date, end date, covered units and visits included.',
    'Step 2: review contracts ending in the next 60 to 90 days every week.',
    'Step 3: check what was delivered. How many visits were completed, and were there repeat faults?',
    'Step 4: prepare the renewal quotation from the existing contract, with any changes in scope or price.',
    'Step 5: contact the customer early, while the service relationship is fresh.',
    'Step 6: record the outcome, and if renewed, schedule the new year’s visits straight away.',
  ),
  p(
    'For example, an AC company reviewing contracts before summer can renew them while customers are thinking about cooling. For an industry-specific version, see our guides to [CCTV AMC format and renewals](/blog/cctv-amc-format-installation-service-renewals) and [HVAC technician management and AMC renewals](/blog/hvac-technician-management-amc-renewals).',
  ),
  p(
    'Here is how it plays out. An AC company has 40 contracts and reviews them every Monday. A clinic’s contract ends in 45 days, so the team checks that all four visits were completed, notes that one unit needed repeated attention, and sends a renewal quotation that recommends a repair first. The customer decides with the full history in front of them, instead of finding out the contract lapsed after the next breakdown.',
  ),
  h3('Common contract tracking mistakes'),
  ul(
    'Keeping start dates but not end dates, so expiry surprises the team.',
    'Recording the contract but not scheduling the visits it promises.',
    'Waiting until the last week to contact the customer about renewal.',
    'Not recording what each visit found, so there is nothing to discuss at renewal.',
  ),
  h2('Service Contract Management for Different Industries'),
  h3('HVAC and AC maintenance'),
  p(
    'Contracts for clinics, offices and housing societies drive repeat work. HVAC service software and HVAC maintenance software should track the units covered, the visit schedule and the renewal date together. See [HVAC field service software](/solutions/hvac-field-service-software).',
  ),
  h3('CCTV AMC services'),
  p('Camera and recorder lists, scheduled checks and renewals matter most. See [CCTV software](/solutions/cctv-software).'),
  h3('Solar maintenance contracts'),
  p('Cleaning and inspection visits repeat through the year, so the schedule matters as much as the contract. See [solar software](/solutions/solar-software).'),
  h3('Electrical equipment maintenance'),
  p('Electrical contractors often service panels, generators or building systems on a recurring basis, which makes visit tracking and history important.'),
  h3('Commercial equipment servicing'),
  p('Businesses servicing kitchen equipment, refrigeration or office machines need each asset tied to its contract and warranty.'),
  h2('Manual Contract Tracking vs Software-Based Management'),
  {
    type: 'table',
    caption: 'Manual service contract tracking compared with software-based management',
    head: ['Area', 'Manual (Excel, notebooks)', 'Software-based'],
    rows: [
      ['Contract records', 'Scattered across files', 'Held in one central place'],
      ['Renewal tracking', 'Depends on someone checking dates', 'Contracts nearing expiry can be flagged'],
      ['Scheduled visits', 'Remembered or kept on a separate sheet', 'Created from the contract and scheduled'],
      ['Customer follow-up', 'Ad hoc calls', 'Easier to plan from a renewal list'],
      ['Service history', 'Found by searching old files', 'Linked to the contract and equipment'],
      ['Reporting', 'Built by hand', 'Generated from recorded data'],
    ],
  },
  p('Software only helps if the team keeps records current. Capabilities also differ between products.'),
  h2('How to Choose the Right Service Contract Management Software'),
  ul(
    'Fit with your contracts: can it record units covered, visit counts, dates and value?',
    'Renewals: does it flag contracts before they expire?',
    'Scheduling: do contract visits become jobs with a technician?',
    'Ease of use: will office staff and technicians use it daily?',
    'Mobile access: can technicians see and update visits on a phone?',
    'Reporting: can you see renewals due and visits completed?',
    'Integrations: list what you need and ask directly.',
    'Pricing and support: understand what is included and how onboarding works.',
  ),
  p('Trial it with a real batch of your own contracts before committing.'),
  h2('How FSMFlow Helps Service Businesses Manage Their Operations'),
  p(
    'FSMFlow is field service management software for Indian service businesses, built first for AC and HVAC teams. Its [warranty and AMC management](/features/warranty-management-software) feature is the main destination for contract tracking: an AMC record holds the units covered, visits per year, start and end dates and contract value, and contracts nearing their end are flagged so you can quote a renewal before cover lapses.',
  ),
  p('Contract management connects to the rest of the workflow:'),
  ul(
    'Scheduled visits appear on the calendar and are assigned to technicians like any other job, using [work order management](/features/work-order-management-software).',
    'Technicians see their jobs and complete checklists in the [field service app](/features/field-service-app).',
    'Customer and equipment records, with service history, show what was done on earlier visits.',
    'Reporting shows jobs and AMC renewals.',
  ),
  p(
    'We have not described pricing or integrations here. To see FSMFlow on your own contracts, [request a demo](/demo), or read about the [service business management software](/solutions/service-business-management-software) for general service teams.',
  ),
  h2('Frequently Asked Questions'),
  h3('What is service contract management software?'),
  p(
    'It is software that records service contracts, tracks their dates and renewals, schedules the visits they promise and keeps the history.',
  ),
  h3('How does service contract software work?'),
  p(
    'You record each contract with its customer, covered equipment, visits and dates. The software shows what is due, flags contracts nearing expiry and links visits to technicians and jobs.',
  ),
  h3('What is the difference between AMC and a service contract?'),
  p(
    'An AMC is a common type of service contract, usually for planned maintenance over a year. “Service contract” is the broader term, and the exact scope depends on what each agreement states.',
  ),
  h3('How can businesses track contract renewals?'),
  p(
    'Keep all contracts in one list with end dates, review those ending in the next 60 to 90 days weekly, and prepare the renewal quotation early. Software can flag contracts nearing expiry.',
  ),
  h3('Can HVAC companies manage service contracts using software?'),
  p(
    'Yes. HVAC companies can track units covered, scheduled visits and renewal dates, and assign visits to technicians, so contracted service is not missed.',
  ),
  h3('What should I look for in service contract management software?'),
  p('Contract records, renewal flags, scheduled visits, technician assignment, service history, reports and ease of use for the team.'),
  h2('Conclusion'),
  p(
    'Good service contract management software gives your team a clear view of which contracts are active, which are about to expire and which visits are due. Start by listing your contracts in one place, set a weekly renewal review, and test any tool with your own data.',
  ),
  p(
    'To see how FSMFlow handles contracts, scheduled visits and service history, explore [warranty and AMC management](/features/warranty-management-software) or [request a demo](/demo).',
  ),
]

/* -------------------------------------------------------------------------- */
/* Service request management (India)                                          */
/* -------------------------------------------------------------------------- */

export const SERVICE_REQUEST_MANAGEMENT_ARTICLE: BlogBlock[] = [
  p(
    'Every service job starts as a request: a phone call about a dripping AC, a message about a camera that has gone offline, a website enquiry for a rooftop solar quote. What happens to that request in the next few hours decides whether the customer is kept or lost. Service request management is the process of capturing each request, assigning it, tracking it and closing it properly.',
  ),
  p(
    'This guide explains how service businesses can manage requests from first contact to completed job, which features support that process, and how to choose service management software that fits an AC, CCTV, solar or construction team.',
  ),
  h2('What Is Service Request Management?'),
  p(
    'Service request management is how a business handles customer requests for work: recording the request, deciding who does it and when, keeping the customer informed, and capturing what was done. In IT departments the term has a specific meaning. For a field service business, it simply means getting every request into one system and following it through to a finished job and a paid invoice.',
  ),
  p(
    'It sits at the front of field service management. Dispatch, technician scheduling and billing all depend on the request being recorded correctly in the first place. For the wider picture, see [what field service management is](/blog/what-is-field-service-management).',
  ),
  h2('Why Do Service Businesses Need Better Request Handling?'),
  p('Most service businesses begin with calls, WhatsApp messages and a notebook. As volume grows, these problems appear:'),
  ul(
    'Manual job scheduling: someone phones around to find a free technician.',
    'Technician coordination: instructions are given verbally and remembered differently.',
    'Scattered customer information: addresses, equipment and history sit in phones and registers.',
    'Missed service appointments: a request is noted but never scheduled.',
    'Delayed quotations and invoices: the details have to be re-typed or recalled later.',
    'Difficulty tracking operations: the owner cannot see which requests are open, in progress or complete.',
  ),
  p(
    'None of these is a skills problem. They come from information living in too many places. A single record for each request fixes most of them.',
  ),
  h2('Essential Features for Managing Service Requests'),
  p('Look for software that follows a request through the whole journey. Here is what each step needs.'),
  h3('Customer management'),
  p(
    'Each request should attach to a customer record with contact details, sites and equipment, so staff do not ask the same questions again. FSMFlow keeps customers, sites and equipment with every past visit in its [asset management software](/features/asset-management-software).',
  ),
  h3('Capturing enquiries and service requests'),
  p(
    'Requests arrive from calls, website forms, referrals and walk-ins. A good system logs each with its source and a next step. FSMFlow’s [sales CRM software](/features/sales-crm-software) logs enquiries and sets follow-up reminders.',
  ),
  h3('Job and work order management'),
  p(
    'Once a request is accepted, it becomes a job with a checklist, parts and a status. See [work order management software](/features/work-order-management-software).',
  ),
  h3('Technician assignment, scheduling and dispatch'),
  p(
    'The office should see who is free and who has the right skills before assigning. Technician management software of this kind lets you keep skills, service areas and leave in one place, and service scheduling software works best when skills, availability and workload sit in one view. See [technician scheduling and workload tools](/features/employee-management-software), and our guide to [field service dispatch software](/blog/field-service-dispatch-software-malaysia).',
  ),
  h3('Quotations and invoices'),
  p(
    'Delays often happen between the request and the quotation. FSMFlow’s [quotation software](/features/quotation-software) can turn an approved quotation into a job and an invoice from the same line items.',
  ),
  h3('Inventory and spare parts'),
  p(
    'Parts used on a job should be recorded against it. See [inventory management software](/features/inventory-management-software) for warehouse and van stock.',
  ),
  h3('Reports and analytics'),
  p(
    'Reports should show open requests, completed jobs and technician workload without manual compilation. See [reporting software](/features/reporting-software).',
  ),
  h2('A Service Request from Call to Invoice: A Worked Example'),
  p('Here is how one request might move through a well-organised system, using an AC company as an example.'),
  ul(
    'A clinic calls on Monday morning: one indoor unit is not cooling. The coordinator logs the request against the clinic’s record, which already lists its six units.',
    'The request is marked urgent, because patients are waiting in that room.',
    'The dispatcher checks who is free and has split AC experience, and assigns a technician. The job appears on the technician’s phone.',
    'The technician travels, arrives and starts work, updating the status as they go. The office sees this without a call.',
    'The fault needs a part. The technician records it on the job, and a quotation for the extra work is prepared.',
    'The customer approves the quotation. The job is closed, an invoice is raised and the visit is added to the unit’s history.',
  ),
  p(
    'Nothing in this flow is complicated. The difference is that every step is recorded in the same place, so no one has to ask what happened.',
  ),
  h2('How to Prioritise and Triage Incoming Requests'),
  p(
    'Not every request is equally urgent. A simple triage rule keeps the queue under control, especially during busy seasons:',
  ),
  ul(
    'Urgent: equipment is down and business or safety is affected, such as a failed cooling unit in a clinic or a CCTV outage at a bank branch.',
    'Scheduled: planned servicing and contract visits, booked for a date.',
    'Routine: minor faults and general enquiries that can wait for the next available slot.',
    'Quotation requests: new work, to be answered quickly with a site visit or an estimate.',
  ),
  p(
    'Write these categories down and use them the same way every day. When urgent work consistently crowds out planned visits, that is a signal about capacity, not just about bad luck.',
  ),
  h2('Common Service Request Mistakes to Avoid'),
  ul(
    'Taking requests by phone but not logging them straight away.',
    'Recording the problem but not the site or the equipment.',
    'Assigning work without checking the technician’s skills or existing schedule.',
    'Never telling the customer when to expect someone.',
    'Closing a job without noting what was done, which leaves nothing for the next visit.',
    'Re-typing the same details into the quotation, then the invoice.',
  ),
  h2('How Service Management Software Helps Different Industries'),
  h3('HVAC service businesses'),
  p(
    'AC companies get breakdown calls and planned servicing requests at once, with demand peaking before summer. A single request queue helps the dispatcher decide what is urgent and who goes where. See [HVAC field service software](/solutions/hvac-field-service-software).',
  ),
  h3('CCTV installation and maintenance companies'),
  p(
    'Requests range from new installations to a camera that has stopped recording. Linking each request to the customer’s site and equipment history speeds up diagnosis. See [CCTV software](/solutions/cctv-software).',
  ),
  h3('Solar installation and service companies'),
  p(
    'Solar firms handle enquiries for new systems and later service requests for existing ones. Keeping both in one place avoids losing the follow-up. See [solar software](/solutions/solar-software).',
  ),
  h3('Construction and maintenance businesses'),
  p(
    'Contractors receive site requests, variations and maintenance calls across locations. A shared request list helps assign crews and track progress. See [construction management software](/solutions/construction-management-software).',
  ),
  h2('Manual Service Management vs Software-Based Management'),
  {
    type: 'table',
    caption: 'Manual service request handling compared with software-based management',
    head: ['Area', 'Manual (calls, chats, registers)', 'Software-based'],
    rows: [
      ['Scheduling', 'Phoning around to find a free technician', 'Shared schedule showing availability'],
      ['Job tracking', 'Status found by asking', 'Status updated as the job progresses'],
      ['Customer records', 'Scattered across phones and notebooks', 'One record with history'],
      ['Technician coordination', 'Verbal instructions', 'Job details on the technician’s phone'],
      ['Billing', 'Details re-typed into quotes and invoices', 'Quotation can carry through to the job and invoice'],
      ['Reporting', 'Compiled by hand', 'Generated from recorded jobs'],
    ],
  },
  p('Software does not fix everything. Results depend on the team recording work consistently.'),
  h2('How to Choose the Right Service Management System'),
  p('Use these criteria when comparing service business software:'),
  ul(
    'Ease of use: will office staff and technicians use it daily?',
    'Mobile accessibility: can technicians see and update jobs on a phone?',
    'Job management: does a request become a trackable job easily?',
    'Scheduling and dispatch: can you see availability and skills?',
    'Reporting: can you see open work and technician workload?',
    'Scalability: will it still suit you with more technicians and customers?',
    'Pricing and support: what is included, and who helps with setup? See [pricing](/pricing) for FSMFlow plans.',
  ),
  p(
    'Run a trial with real requests. For small teams, our guide to [choosing field service software for a small business](/blog/best-field-service-management-software-small-business) adds more detail.',
  ),
  h2('How FSMFlow Helps Manage Service Business Operations'),
  p(
    'FSMFlow is field service management software for Indian service businesses, built first for AC and HVAC teams. On its website, the workflow for handling a request looks like this:',
  ),
  ul(
    'Log enquiries from calls, website forms, referrals and walk-ins, with follow-up reminders.',
    'Create a quotation from the lead, and convert the won deal into a job where the customer, site and scope carry over.',
    'Assign the job to a technician by skill and availability, and see it on their phone in the field service app.',
    'Follow status from assigned to en route, in progress and completed.',
    'Turn the approved quotation into an invoice, and record advances and part-payments.',
    'Review jobs and renewals in reports.',
  ),
  p(
    'This kind of service business automation removes re-typing and chasing. It does not replace judgement, and we have not described integrations or customer results here. For the full overview, see FSMFlow’s [service business management software](/solutions/service-business-management-software) page, the [homepage](/), or [book a demo](/demo).',
  ),
  h2('Frequently Asked Questions'),
  h3('What is service business management software?'),
  p(
    'It is software that helps a service business run its daily work: customers, requests, jobs, technicians, quotations, invoices and reports, in one system. It is sometimes called service management software.',
  ),
  h3('Who needs service management software?'),
  p(
    'Any business that sends people to customer locations, such as AC, CCTV, solar, electrical and construction teams, especially once calls and notebooks stop being enough.',
  ),
  h3('What features should service business software include?'),
  p(
    'Customer records, request capture, work orders, technician assignment and scheduling, quotations and invoices, inventory tracking and reports.',
  ),
  h3('How does service management software help technicians?'),
  p(
    'They see assigned jobs, customer and site details, and checklists on a phone, and update progress without repeated calls to the office.',
  ),
  h3('Can service businesses manage work orders using software?'),
  p(
    'Yes. Each request can become a work order with an assignee, status, checklist and parts, and the office can follow it to completion.',
  ),
  h3('Is service management software suitable for HVAC companies?'),
  p(
    'Yes. HVAC teams handle breakdown calls and planned servicing together, which makes shared scheduling and job history especially useful.',
  ),
  h3('Can small service businesses use management software?'),
  p(
    'Often yes, if it is simple enough for the team and priced for their size. Small teams can start with requests, jobs and scheduling.',
  ),
  h3('How do I choose the right service business management software?'),
  p(
    'Map your workflow, list must-have features, check mobile access and reporting, and trial two or three options of service business software with real requests.',
  ),
  h2('Conclusion'),
  p(
    'Good service request management means no request is lost, every job has an owner, and the office can see where work stands. Start by recording every request in one place, then add scheduling, quotations and reports as the business grows.',
  ),
  p(
    'If you want to see this flow in practice, [book a FSMFlow demo](/demo) and bring a few typical requests.',
  ),
]

/* -------------------------------------------------------------------------- */
/* AC service management software: how to choose                              */
/* -------------------------------------------------------------------------- */

export const AC_SERVICE_SOFTWARE_ARTICLE: BlogBlock[] = [
  p(
    'It is the first week of April. The phone has not stopped since morning, three customers have sent the same “AC not cooling” message on WhatsApp, two technicians are standing at the same site, and nobody can say whose AMC expired last month. Many AC and HVAC companies in India run like this for years, and it works until volume grows. That is when AC service management software stops being optional and starts deciding whether the business grows or just gets busier.',
  ),
  p(
    'The market is crowded and most feature lists look alike. This guide covers what the software does, the problems it solves, ten features to check, a manual-versus-digital comparison and a practical way to choose.',
  ),
  h2('What Is AC Service Management Software?'),
  p(
    'AC service management software is a system that keeps every part of an AC or HVAC service business in one place: customers and their equipment, service requests, technician schedules, job cards, spare parts, quotations, invoices, AMC (annual maintenance contract) records and reports. It is a specialised form of field service management software, the wider category explained in our guide to [what field service management is](/blog/what-is-field-service-management), tuned for the way AC work actually happens.',
  ),
  p('In a typical day, it works like this:'),
  ul(
    'A request arrives by phone, website or referral and is logged against the customer and the AC unit.',
    'The office creates a job and assigns a technician by skill and availability.',
    'The technician opens the job on a phone, follows the checklist, records parts and photos, and takes the customer’s sign-off.',
    'The job closes into a quotation or invoice, and the visit becomes part of the unit’s history.',
    'The next AMC visit and the renewal date are already on the calendar.',
  ),
  p(
    'It suits AC installation and repair companies, HVAC contractors, dealers who offer installation and after-sales service, and any business with several technicians or AMC customers. You will also see it called HVAC service management software, AC service software, AC repair management software, AC technician management software or HVAC business management software. The labels differ, but the job is the same.',
  ),
  h2('Common Challenges Faced by AC Service Businesses'),
  p('Almost every AC company that outgrows notebooks hits the same problems:'),
  ul(
    'Too many request channels: calls, WhatsApp messages and walk-ins all land in different places, so requests get missed in peak summer.',
    'Technician scheduling and assignment: the dispatcher decides from memory, without a clear view of skills, location or workload.',
    'Missed customer appointments: a promised slot is never written anywhere, and the customer calls again.',
    'Untracked ongoing jobs: the owner asks where a job stands and the only way to find out is to phone the technician.',
    'AMC renewals: expiry dates sit in a sheet nobody opens until a competitor has already called the customer.',
    'Spare parts: a capacitor or PCB is missing at the site, which means a second visit and an unhappy customer.',
    'Quotations and billing: figures are re-typed from notes days later, and pending payments are chased from memory.',
    'Customer service history: a new technician arrives without knowing what the last one found.',
  ),
  p('These are information problems, not skills problems. They ease when every job, customer and contract lives in one record.'),
  callout(
    'Looking to simplify your AC service operations? Explore FSMFlow and manage your service business more efficiently. [Book a Demo](/demo)',
  ),
  h2('10 Essential Features to Look for in AC Service Management Software'),
  p('Use this list as a filter. The product need not be the biggest, but it should cover these basics well.'),
  h3('1. Customer and lead management'),
  p(
    'Every enquiry should be logged with its source and a follow-up date, then linked to the customer’s sites and units. Example: a housing society asks for a quote on 12 split ACs in March; without a reminder, the lead is forgotten by April. Look for [sales CRM](/features/sales-crm-software) and [customer and equipment records](/features/asset-management-software) that carry straight into the job.',
  ),
  h3('2. Service request management'),
  p(
    'Calls, website forms and walk-ins should land in one queue with an urgency and a status. A compressor failure at a clinic should not sit behind a routine servicing request. For the full process, see our guide to [service request management](/blog/service-request-management-for-service-businesses).',
  ),
  h3('3. Technician scheduling and assignment'),
  p(
    'Good HVAC scheduling software shows who is free, what each technician is skilled at and how loaded their day is. Example: a VRF fault should go to the engineer who knows VRF systems, not just the nearest person. Look for [technician profiles and scheduling](/features/employee-management-software) that make that decision quick.',
  ),
  h3('4. Digital job cards and work orders'),
  p(
    'HVAC work order management software gives each job an assignee, status, checklist, parts list and photos, replacing paper job cards that get lost or wet. See [work order management software](/features/work-order-management-software), and our [service report format](/blog/service-report-format-ac-cctv-solar) guide for what to record.',
  ),
  h3('5. Mobile app for field technicians'),
  p(
    'The technician should see the day’s jobs, directions, unit details and history, update status, and take customer sign-off on a phone. Test it on your technicians’ own phones, because an app that is slow or confusing will simply not be used. Read more on the [field service app](/features/field-service-app) and in our guide to [mobile field service management software](/blog/mobile-field-service-management-software).',
  ),
  h3('6. AMC and preventive maintenance management'),
  p(
    'AMC management software should record the units covered, visits per year and validity dates, create the scheduled visits, and flag renewals before they lapse. Example: a hospital contract with four visits a year should show which are done and which are due. See [warranty and AMC management](/features/warranty-management-software) and our guide to [service contract management software](/blog/service-contract-management-software).',
  ),
  h3('7. Spare parts and inventory management'),
  p(
    'Look for warehouse and van stock in one view, parts linked to the jobs that use them, and low-stock alerts for fast movers such as capacitors, gas and PCBs. That is how repeat visits caused by missing parts get reduced. See [inventory management software](/features/inventory-management-software).',
  ),
  h3('8. Quotation and invoice management'),
  p(
    'You should be able to build an estimate with parts and labour, send it for approval, turn it into a job and an invoice, and record advances and part-payments. Ask whether invoices fit your GST needs. See [quotation software](/features/quotation-software).',
  ),
  h3('9. Real-time job tracking and status updates'),
  p(
    'AC service tracking software lets the office see each job move from assigned to en route, in progress and completed, without a single phone call.',
  ),
  h3('10. Reports and business performance analytics'),
  p(
    'A short list of numbers is enough: jobs completed, repeat visits, technician workload, revenue, AMC renewals due and pending payments. They should come from the work your team already records, not from copying between sheets. See [reporting software](/features/reporting-software).',
  ),
  callout(
    'Want to see how these ten features work together in one flow? Explore FSMFlow and manage your service business more efficiently. [Book a Demo](/demo)',
  ),
  h2('Manual AC Service Management vs Digital Software'),
  {
    type: 'table',
    caption: 'Manual AC service management compared with digital AC service management software',
    head: ['Area', 'Manual (calls, chats, registers)', 'AC service management software'],
    rows: [
      ['Service request tracking', 'Requests spread across calls, chats and notebooks', 'One queue with urgency and status'],
      ['Technician allocation', 'Decided from memory or by phoning around', 'Assigned by skill, availability and workload'],
      ['Job card management', 'Paper cards that get lost or filled in late', 'Digital job card with checklist, parts and photos'],
      ['AMC reminders', 'Dates in a sheet someone has to remember to open', 'Scheduled visits and renewal alerts'],
      ['Inventory tracking', 'Stock discovered missing at the site', 'Warehouse and van stock linked to jobs'],
      ['Billing', 'Details re-typed from notes after the visit', 'Quotation carries into the job and invoice'],
      ['Reports', 'Compiled by hand at month end', 'Built from recorded jobs'],
      ['Customer history', 'Scattered across phones and registers', 'One record per customer and unit'],
    ],
  },
  p('Software does not fix everything. The gain comes from agreeing on one place where work is recorded and using it every day.'),
  h2('How to Choose the Right AC Service Management Software'),
  p('Feature lists look similar, so judge each option against your own business:'),
  ul(
    'Business size and requirements: a five-technician shop needs jobs, scheduling, quotations and AMC. A multi-branch company also needs roles and branch-wise reports. ',
    'Ease of use: if office staff and technicians need long training, adoption will stall. Ask a technician to try it.',
    'Mobile accessibility: check the technician app on real phones and in real locations, such as a basement or plant room with weak signal. ',
    'Automation capabilities: reminders, status updates and quotation-to-invoice should happen without retyping.',
    'Customization: can you set up your own job types, checklists and unit details for split, cassette or VRF systems?',
    'Scalability: will it still work when you double the technicians or add a branch?',
    'Data security: ask who can see what, how access is controlled by role, how data is backed up and whether you can export it if you leave.',
    'Integration capabilities: ask plainly what it connects with, such as accounting tools, and what it does not. Do not assume.',
    'Pricing and support: understand how pricing is calculated, often per technician, what onboarding is included and when support is available.',
  ),
  h3('Test before you buy'),
  p(
    'Take two or three shortlisted tools and run the same five real jobs through each, including one AMC customer and one emergency call. Let a technician use the app without help. Our guide to [choosing field service software for a small business](/blog/best-field-service-management-software-small-business) adds a trial checklist.',
  ),
  h2('Benefits of Using AC Service Management Software'),
  p('When a team uses it consistently, the benefits are mostly about control and consistency:'),
  ul(
    'Fewer missed calls and appointments, because every request has a record and an owner.',
    'Faster dispatch, because skills, location and workload are visible.',
    'Fewer repeat visits, because parts are linked to jobs and history is on hand.',
    'Steadier AMC revenue, because visits and renewals are tracked ahead of time.',
    'Cleaner billing, because quotations flow into jobs and invoices.',
    'Better visibility, because staff and owners can answer “when will the technician arrive?” without calling anyone.',
  ),
  p('These depend on how consistently your team records work.'),
  h2('Why AC Service Companies Should Consider FSMFlow'),
  p(
    'FSMFlow is field service management software for Indian service businesses, built first for AC and HVAC teams. Here is how its modules answer the challenges above, based on what the product offers today:',
  ),
  ul(
    'Requests and leads: log enquiries from calls, website forms and referrals with follow-up reminders, then turn a won deal into a quotation and a job.',
    'Jobs and technicians: create work orders with checklists, parts, photos and a service report, and assign them by skill and availability.',
    'Technician app: technicians see jobs, directions, customer and unit history, record parts and photos, take the customer’s signature, and move each job from assigned to en route, in progress and completed.',
    'AMC and warranty: each contract records the customer, units, validity and visit schedule, and renewals are flagged before they lapse.',
    'Spare parts: warehouse and van stock, parts linked to jobs and low-stock alerts.',
    'Quotations and billing: estimates become jobs and invoices, with advances and part-payments recorded against them.',
    'Reports: jobs, revenue, technician productivity, AMC renewals and pending payments.',
  ),
  p(
    'The full flow, from enquiry to payment and the next visit, is on the [HVAC field service software](/solutions/hvac-field-service-software) page. For a deeper look at day-to-day dispatch and renewals, read [HVAC technician management and AMC renewals](/blog/hvac-technician-management-amc-renewals). If you have questions about plans, see [pricing](/pricing).',
  ),
  callout(
    'Looking to simplify your AC service operations? Explore FSMFlow and manage your service business more efficiently. [Book a Demo](/demo)',
  ),
  h2('Frequently Asked Questions'),
  h3('What is the best software for AC service businesses?'),
  p(
    'There is no single best option. The right one covers jobs, technician scheduling, AMC tracking, spare parts and billing, and is simple enough for your team to use daily. Shortlist two or three and test them with real jobs.',
  ),
  h3('How does AC service management software work?'),
  p(
    'It records each request against a customer and unit, turns it into a job, assigns a technician, tracks the job through completion, and carries the work into a quotation or invoice. AMC visits, spare parts and reports run from the same data.',
  ),
  h3('Can AC service software manage multiple technicians?'),
  p(
    'Yes. It lets you keep technician profiles and skills, assign jobs by availability and workload, and see who is doing what. This is one of its core uses.',
  ),
  h3('Can I manage AMC contracts using service management software?'),
  p(
    'Yes, if it includes contract records. Check that it stores units covered, visit schedules and validity dates, creates scheduled visits and flags renewals ahead of expiry.',
  ),
  h3('Is AC service management software suitable for small businesses?'),
  p(
    'Often, yes, provided it is simple and priced for your size. A small team can begin with jobs, scheduling and quotations, then add AMC and inventory as it grows.',
  ),
  h3('Can technicians update job status using a mobile app?'),
  p(
    'Yes. With a field service app, technicians update status as they travel, arrive and finish, record parts and photos, and take customer sign-off. The office sees each change without a phone call.',
  ),
  h3('How does HVAC software improve customer service?'),
  p(
    'Staff see the customer’s full history, can give a realistic arrival time, and are less likely to miss an appointment or a renewal. Customers repeat themselves less often.',
  ),
  h3('What should I check before purchasing AC service management software?'),
  p(
    'Check ease of use, the technician app on real phones, AMC and inventory features, data security, integrations, pricing and support. Then trial it with your own jobs.',
  ),
  h2('Conclusion'),
  p(
    'The right AC service management software removes the daily guesswork: which request is open, who is going, which part is needed and when a contract ends. Choose by testing against your real workflow, not by counting features. Focus on the basics: jobs, technicians, a usable mobile app, AMC tracking, spare parts and billing.',
  ),
  p(
    'FSMFlow is built around these needs for AC and HVAC teams. If you would like to see it with your own workflow, [book a FSMFlow demo](/demo) and bring a few typical jobs and an AMC contract.',
  ),
]

/* -------------------------------------------------------------------------- */
/* Technician scheduling software                                             */
/* -------------------------------------------------------------------------- */

export const TECHNICIAN_SCHEDULING_ARTICLE: BlogBlock[] = [
  p(
    'A compressor failure comes in at 11 am. The nearest technician is across the city, another is on leave, and a third has three visits booked that nobody wrote down. The dispatcher starts phoning around. Twenty minutes later the customer is still waiting and two jobs overlap. Technician scheduling software exists to prevent exactly this: it keeps every job, technician and time slot in one shared view, so assigning work becomes a decision instead of a guess.',
  ),
  p(
    'This guide explains what technician scheduling software is, the scheduling problems it solves, how it improves service business operations, the features that matter, and how AC, CCTV, solar and contracting businesses use it.',
  ),
  h2('What Is Technician Scheduling Software?'),
  p(
    'Technician scheduling software is a tool for planning which technician does which job, when and where. It holds technician profiles, skills, availability and workload next to the jobs waiting to be done, so the person scheduling can spot conflicts before they happen. It is often a core part of wider [field service management software](/blog/what-is-field-service-management), and you may also see it called field technician scheduling software, field service scheduling software or job scheduling software. It differs from generic employee scheduling software, which plans shifts and hours, because it plans jobs, skills and travel.',
  ),
  p('In practice, it works like this:'),
  ul(
    'A job is created with the customer, site, priority and preferred time.',
    'The scheduler sees each technician’s skills, leave and current workload.',
    'The job is assigned and appears on the technician’s phone.',
    'Status updates flow back to the office as the work progresses.',
  ),
  p(
    'Any business that sends people to customer sites needs it once scheduling lives in one person’s head: AC and HVAC firms, CCTV installers, solar companies, electricians, plumbers and maintenance contractors.',
  ),
  h3('Manual scheduling vs automated scheduling'),
  p(
    'Manual scheduling runs on phone calls, chat messages, notebooks and whiteboards. Automated, or software-based, scheduling keeps a shared schedule that updates as jobs change. The word “automated” covers a range: some tools suggest assignments on their own, while others show the right information and leave the final choice to the dispatcher. Both beat the whiteboard, but ask which one you are buying. Technician dispatch software focuses on assigning urgent work right now, while scheduling plans ahead; our guide to [field service dispatch software](/blog/field-service-dispatch-software-malaysia) explains the difference.',
  ),
  h2('Common Technician Scheduling Challenges Faced by Service Businesses'),
  ul(
    'Manual job allocation: an AC dispatcher phones three technicians to find who can take a breakdown call, and the answer is already stale.',
    'Scheduling conflicts: a CCTV survey is booked at the same hour as an installation for the same technician.',
    'Uneven workloads: one technician has six visits while a colleague has two, because nobody could see the totals.',
    'Missed customer appointments: a slot promised on the phone is never written down, and the customer calls again.',
    'Delays in job completion: a solar installation stalls because the site inspection was never scheduled.',
    'Lack of real-time job updates: the office cannot tell whether a job is finished without calling the technician.',
    'Multiple service locations: a contractor with crews at several sites cannot see who is where.',
    'Poor communication between office and technicians: instructions are given verbally, so the technician arrives without the unit details or the earlier fault history.',
  ),
  p('These are information problems, not skills problems, and they grow with every technician you add.'),
  callout(
    'Looking to simplify technician scheduling and manage your service operations more efficiently? Explore FSMFlow and take control of your field service business. [Book a Demo](/demo)',
  ),
  h2('How Technician Scheduling Software Improves Service Business Operations'),
  p('Used consistently, scheduling software improves daily operations in eight practical ways.'),
  h3('Automated Technician Assignment'),
  p(
    'Good assignment follows three facts: skills, availability and workload. Software puts all three on one screen so a VRF fault goes to the VRF engineer, not just the closest person. Where a tool supports automatic suggestions, that speeds things up further. Where it does not, the dispatcher still decides, but with the facts in front of them.',
  ),
  h3('Better Job Scheduling and Planning'),
  p(
    'A daily and weekly view lets you plan ahead instead of reacting. A simple routine works well: confirm tomorrow’s jobs each evening, place planned work such as AMC visits and installations first, and keep room for breakdown calls. That is the core of how to schedule field service technicians without constant firefighting.',
  ),
  h3('Improved Technician Productivity'),
  p(
    'Productivity improves when technicians spend less time waiting for instructions and less time on end-of-day paperwork. With the job details already on the phone, the technician can go straight to work. We do not quote percentage gains here, because results depend on how consistently the team records work.',
  ),
  h3('Real-Time Job Status Tracking'),
  p(
    'Jobs move through assigned, en route, in progress and completed as the technician updates them. The office can see open, ongoing and finished work at a glance, and a customer asking “where is he?” gets an answer from the screen.',
  ),
  h3('Reduced Scheduling Conflicts'),
  p(
    'When everyone books against one shared schedule, double bookings show up before the day starts. Marking leave and days off also stops jobs being assigned to someone who is not there.',
  ),
  h3('Improved Customer Appointment Management'),
  p(
    'Service appointment scheduling software gives every request a record, a priority and a time window, so fewer appointments slip through. Staff can offer a realistic arrival time because they can see what the technician already has on.',
  ),
  h3('Better Workload Distribution'),
  p(
    'Workforce scheduling software that shows jobs per technician per day lets a manager rebalance before one person is overloaded and another is idle. This also makes performance reviews fairer, because they rest on records.',
  ),
  h3('Faster Communication Between Office and Field Teams'),
  p(
    'When job information sits in one place, there are fewer repeat calls and manual follow-ups. Changes reach the technician’s phone, and updates reach the office without anyone asking.',
  ),
  h2('Essential Features to Look for in Technician Scheduling Software'),
  p('Whether it is sold as technician management software or service technician management software, a good tool should cover this list:'),
  ul(
    'Centralized scheduling dashboard: one place to see all jobs and technicians, so nothing depends on memory.',
    'Technician availability management: leave, days off and working areas, so jobs go to people who can actually take them.',
    'Job assignment and dispatch: assign by skill and workload, and change plans quickly when an emergency arrives.',
    'Calendar-based scheduling: a day and week view that makes gaps and double bookings obvious.',
    'Mobile app access: technicians see jobs and update status from the field. See our guide to [mobile field service management software](/blog/mobile-field-service-management-software).',
    'Service request management: requests are logged and turned into jobs. See [service request management](/blog/service-request-management-for-service-businesses).',
    'Job status updates: live status from assignment to completion.',
    'Customer information management: contact details, site and equipment history, linked to each job.',
    'Work order and job card management: checklists, parts and photos on every job. See [work order management software](/features/work-order-management-software).',
    'Performance and productivity reports: jobs completed and workload per technician, built from recorded work.',
  ),
  callout(
    'Want to see these features working together? Explore FSMFlow and take control of your field service business. [Book a Demo](/demo)',
  ),
  h2('Manual Technician Scheduling vs Software-Based Scheduling'),
  {
    type: 'table',
    caption: 'Manual technician scheduling compared with software-based scheduling',
    head: ['Area', 'Manual (calls, chats, whiteboards)', 'Scheduling software'],
    rows: [
      ['Job assignment', 'Decided by phoning around', 'Assigned from a shared view of skills and workload'],
      ['Technician availability', 'Remembered, or checked by calling', 'Leave and days off recorded on the schedule'],
      ['Scheduling conflicts', 'Found when two jobs clash on the day', 'Double bookings visible in advance'],
      ['Appointment tracking', 'Slots noted in chats or notebooks', 'Every appointment on a calendar'],
      ['Job status updates', 'Found by asking the technician', 'Updated from the technician’s phone'],
      ['Team communication', 'Verbal instructions and repeated calls', 'Job details held in one record'],
      ['Workload management', 'Unclear until someone complains', 'Jobs per technician visible each day'],
      ['Reporting and performance', 'Compiled by hand, if at all', 'Built from recorded jobs'],
    ],
  },
  h2('How Different Service Industries Benefit from Technician Scheduling Software'),
  h3('AC and HVAC service businesses'),
  p(
    'AC teams juggle installation appointments, breakdown calls, preventive maintenance and AMC (annual maintenance contract) visits at once, with demand peaking before summer. Skills matter, since split, VRF and chiller work differ. Grouping AMC visits by area saves travel. See [HVAC field service software](/solutions/hvac-field-service-software) and our guide to [HVAC technician management](/blog/hvac-technician-management-amc-renewals).',
  ),
  h3('CCTV installation companies'),
  p(
    'Installation crews, site surveys and maintenance visits are spread across many customer locations. A shared schedule keeps a survey from clashing with an installation and shows which crew can take a service call. See [CCTV software](/solutions/cctv-software).',
  ),
  h3('Solar installation companies'),
  p(
    'Solar work runs through site visits, installation days, inspections and later maintenance. Scheduling each stage on one calendar stops a project from stalling between steps. See [solar software](/solutions/solar-software).',
  ),
  h3('Construction and maintenance contractors'),
  p(
    'Contractors assign crews to sites and handle follow-up maintenance calls at the same time. A single view of who is where helps coordinate site-based jobs and project-related tasks. See [construction management software](/solutions/construction-management-software).',
  ),
  h2('How to Choose the Right Technician Scheduling Software'),
  ul(
    'Business size and team requirements: a small team needs jobs, a schedule and a phone app. A larger one also needs branch views and roles. Buy for the team you will have soon.',
    'Ease of use: if the office or technicians need long training, adoption will stall. Let a technician try it.',
    'Mobile accessibility: test the app on real phones, in the places your team works.',
    'Scheduling flexibility: can you move a job quickly when an emergency comes in?',
    'Automation capabilities: ask what is automatic, such as notifications or suggestions, and what is still manual.',
    'Real-time updates: does the office see status changes as they happen?',
    'Integration capabilities: ask plainly what it connects with, and what it does not.',
    'Scalability: will it cope with more technicians, customers and locations?',
    'Data security: ask about role-based access, backups and whether you can export your data.',
    'Pricing and customer support: understand how pricing is calculated, often per technician, and what onboarding and support are included.',
  ),
  p(
    'Run a trial with a real week’s jobs, including one emergency. For smaller teams, our guide to [field service software for small businesses](/blog/best-field-service-management-software-small-business) adds a checklist.',
  ),
  h2('Why Service Businesses Should Consider FSMFlow'),
  p(
    'FSMFlow is field service management software for Indian service businesses, built first for AC and HVAC teams. Here is how its scheduling and job features address the problems above, based on what the product offers today:',
  ),
  ul(
    'Technician profiles: name, role, service area and skills such as split AC, VRF or chiller on one record, so the right person is picked for the job.',
    'Schedule grid: each technician’s jobs on a weekly view, with gaps and double bookings visible before the day starts.',
    'Availability and workload: leave and days off recorded, and jobs per technician shown so you can rebalance.',
    'Work orders: jobs with priority, time window, checklist, parts and photos, assigned to a technician and sent to their phone.',
    'Status and team view: jobs move from assigned to en route, in progress and completed, and the team view shows who is on a job, travelling or free.',
    'Reports: jobs completed and workload per technician, from the work already recorded.',
  ),
  p(
    'You assign each job with skills, leave and workload in front of you. FSMFlow does not describe automatic assignment, so ask about that in a demo if it matters to you. For the details, see [employee and technician scheduling](/features/employee-management-software), the [field service app](/features/field-service-app) and [reporting](/features/reporting-software).',
  ),
  callout(
    'Looking to simplify technician scheduling and manage your service operations more efficiently? Explore FSMFlow and take control of your field service business. [Book a Demo](/demo)',
  ),
  h2('Frequently Asked Questions'),
  h3('What is technician scheduling software?'),
  p(
    'It is software for planning which technician handles which job and when. It keeps technician skills, availability and workload alongside the job list, so assignments are made with full information.',
  ),
  h3('How does technician scheduling software work?'),
  p(
    'Jobs are created with customer, site and priority. A scheduler assigns them to technicians, who see them on their phones and update status. The office sees progress without calling.',
  ),
  h3('What is the best software for managing field technicians?'),
  p(
    'No single tool suits everyone. Look for scheduling, a technician mobile app, job tracking and reports, then trial two or three options with your own jobs.',
  ),
  h3('Can technician scheduling software manage multiple technicians?'),
  p(
    'Yes. Managing several technicians at once is its main purpose. You can see who is available, who is on a job and how loaded each person is.',
  ),
  h3('How does scheduling software improve technician productivity?'),
  p(
    'It cuts waiting, repeated calls and paperwork, because job details reach the technician’s phone and updates flow back automatically. Results depend on consistent use.',
  ),
  h3('Can small service businesses use technician scheduling software?'),
  p(
    'Often, yes. A small team can start with jobs, a schedule and a phone app, and add more as it grows. Choose a tool that is simple and priced for your size.',
  ),
  h3('What is the difference between technician scheduling and field service management software?'),
  p(
    'Technician scheduling plans who works when. Field service management software is broader and also covers customers, quotations, invoices, inventory, contracts and reports. Scheduling is usually one part of it.',
  ),
  h3('What features should I look for in technician scheduling software?'),
  p(
    'Look for a central schedule, availability management, assignment, a mobile app, job status updates, customer records, work orders and reports. Then check ease of use and support.',
  ),
  h2('Conclusion'),
  p(
    'Organised technician scheduling keeps jobs from clashing, appointments from slipping and technicians from being overloaded. Technician scheduling software does this by putting jobs, people and status in one place, so the office stops chasing updates and the field team stops waiting for instructions.',
  ),
  p(
    'FSMFlow combines scheduling with work orders, a technician app and reports for service businesses. To see it with your own team and jobs, [book a FSMFlow demo](/demo).',
  ),
]

/* -------------------------------------------------------------------------- */
/* Solar installation software: buyer's guide                                 */
/* -------------------------------------------------------------------------- */

export const SOLAR_SOFTWARE_BUYERS_ARTICLE: BlogBlock[] = [
  p(
    'A solar business rarely has one problem. It has a dozen small ones running at once: enquiries waiting for a callback, a site survey nobody booked, a crew arriving without inverter cables, and last year’s customers whose AMC visit is overdue. As installation volume grows, memory and WhatsApp stop being a system. That is when solar installation software becomes worth the effort, because it keeps leads, projects, crews, materials and service visits in one place.',
  ),
  p(
    'This guide explains what solar installation software does, the problems it solves, the features to check, how it compares with manual management, and how to choose for your type of business.',
  ),
  h2('What Is Solar Installation Software?'),
  p(
    'Solar installation software is a system that helps a solar business run its day-to-day operations: customer enquiries, site visits, quotations, installation projects, technician schedules, materials, maintenance contracts and billing. Depending on the product, you may see it called solar business management software, solar installation management software or solar service management software.',
  ),
  p('In a typical flow, it works like this:'),
  ul(
    'An enquiry is logged with a follow-up date, then moves to a site visit and a quotation.',
    'A won quotation becomes an installation project with stages, tasks, an owner and a crew.',
    'Materials are tracked against the project, and the crew updates progress from site.',
    'After handover, the plant is recorded with its warranty and AMC (annual maintenance contract), and service visits are scheduled.',
  ),
  p(
    'It suits rooftop installers, EPC contractors, dealers who also offer after-sales service, and maintenance and AMC providers, especially those running more than one crew.',
  ),
  h3('Project management vs field service management'),
  p(
    'Project management follows a one-off build through stages, tasks and deadlines. Solar field service management software handles recurring work: service requests, technician scheduling, spare parts, contracts and billing. Solar businesses need both, because the installation is a project and the next twenty years are service. Our guide to [what field service management is](/blog/what-is-field-service-management) explains the second half in detail.',
  ),
  h2('Common Challenges Faced by Solar Installation and Service Businesses'),
  ul(
    'Multiple customer enquiries: leads from ads, referrals and dealers sit in different phones, so follow-ups are missed.',
    'Site visits and inspections: surveys are agreed on a call and never put on a calendar.',
    'Tracking installation projects: nobody can say which of ten rooftops is blocked, or why.',
    'Assigning technicians and teams: crews are allocated by phone, and two sites expect the same team.',
    'Schedules and deadlines: commissioning dates slip because earlier stages overran unnoticed.',
    'Materials and spare parts: panels arrive, but the structure or cable does not.',
    'Customer service requests: a cleaning or inverter-fault call is noted on paper and forgotten.',
    'Maintenance and AMC contracts: renewal dates sit in a sheet that nobody opens.',
    'Pending and completed jobs: the owner has to ring each supervisor to find out.',
    'Quotations, invoices and payments: figures are re-typed, and stage payments are chased from memory.',
  ),
  p('For a rooftop business with several crews, any three of these can eat a whole week.'),
  callout(
    'Looking to manage your solar installation and service operations more efficiently? Explore FSMFlow and organize your field service business in one place. [Book a Demo](/demo)',
  ),
  h2('Essential Features to Look for in Solar Installation Software'),
  h3('Customer and lead management'),
  p(
    'Log every enquiry with its source, a next step and a date. Solar decisions take weeks, so reminders decide who wins. Look for [sales CRM](/features/sales-crm-software) that turns a won lead into a quotation and a job.',
  ),
  h3('Site visit and inspection management'),
  p(
    'Surveys and inspections should be scheduled jobs with notes and photos, not verbal promises. The quotation then rests on recorded roof and electrical details.',
  ),
  h3('Solar installation project management'),
  p(
    'Each site should be a project with stages, tasks, owners and completion status, so you can see what is blocked. This is the heart of solar project management software and solar installation project tracking software. For the process side, read our guide to [solar installation project management](/blog/solar-installation-project-management).',
  ),
  h3('Technician scheduling and assignment'),
  p(
    'Assign installation and service jobs by skill and availability, and see double bookings before the day starts. Solar technician management software should show who is free, who is on leave and how loaded each person is. See [technician scheduling](/blog/technician-scheduling-software-for-service-businesses).',
  ),
  h3('Work order and job card management'),
  p(
    'Installation and maintenance jobs need a checklist, parts, photos and a status. Solar work order management software gives each job one record. See [work order management](/features/work-order-management-software).',
  ),
  h3('Inventory and spare parts management'),
  p(
    'Track panels, inverters, structures and cable, and link material to projects before the crew leaves. Where a tool supports it, low-stock alerts help you reorder in time. See [inventory management](/features/inventory-management-software).',
  ),
  h3('AMC and maintenance management'),
  p(
    'Solar AMC management software and solar maintenance management software should record each plant’s warranty and AMC, schedule cleaning and inspection visits, and flag renewals ahead. That is how you manage solar maintenance contracts without a spreadsheet. See [warranty and AMC management](/features/warranty-management-software) and our guide to [service contract management software](/blog/service-contract-management-software).',
  ),
  h3('Quotation and invoice management'),
  p(
    'Prepare quotations by system size, get approval, turn them into invoices and record stage payments. See [quotation software](/features/quotation-software).',
  ),
  h3('Mobile access for field teams'),
  p(
    'Crews should see site details and checklists, add photos and update progress on a phone. Test it with your own crews. See the [field service app](/features/field-service-app).',
  ),
  h3('Reports and business analytics'),
  p(
    'Look for projects by stage, pending jobs, revenue and dues, built from recorded work. See [reporting software](/features/reporting-software).',
  ),
  callout(
    'Want to see how these features work together for a solar business? Explore FSMFlow and organize your field service business in one place. [Book a Demo](/demo)',
  ),
  h2('How Solar Installation Software Improves Business Operations'),
  p('Used consistently, it changes day-to-day operations in these ways:'),
  ul(
    'Better coordination between office and field teams, because both see the same job record.',
    'Improved installation scheduling, with crews and dates visible in one place.',
    'Centralized customer information, so no one asks the same questions twice.',
    'Better visibility into project progress, including what is blocked.',
    'Fewer manual follow-ups, since status is updated at the source.',
    'Better service request management, with every request logged and assigned.',
    'Organized maintenance operations, with visits scheduled ahead.',
    'Better resource use, because crews and materials are planned against projects.',
    'Clearer customer communication, as staff can answer status questions from the record.',
    'More organized reporting, built from the work already recorded.',
  ),
  p('These gains depend on your team recording work consistently. No tool does that for them.'),
  h2('Manual Management vs Solar Business Management Software'),
  {
    type: 'table',
    caption: 'Manual solar business management compared with software-based management',
    head: ['Business activity', 'Manual management', 'Software-based management'],
    rows: [
      ['Customer management', 'Paper and spreadsheets', 'Centralized digital records'],
      ['Site visit scheduling', 'Manual coordination', 'Organized scheduling'],
      ['Project tracking', 'Manual follow-ups', 'Centralized job tracking'],
      ['Technician assignment', 'Phone calls and messages', 'Organized job allocation'],
      ['Maintenance tracking', 'Manual reminders', 'Digital service records'],
      ['Inventory', 'Spreadsheet records', 'Centralized inventory tracking, where supported'],
      ['Billing', 'Separate records', 'Organized quotation and invoice records'],
      ['Reporting', 'Manual preparation', 'Digital reports, where supported'],
    ],
  },
  h2('How Different Solar Businesses Can Benefit from Management Software'),
  h3('Rooftop solar installation companies'),
  p(
    'Rooftop firms handle many small projects at once. Software keeps enquiries, site visits, installation dates and project progress together, so a surveyed home does not wait because the quotation was forgotten.',
  ),
  h3('Solar EPC companies'),
  p(
    'EPC teams run larger sites with several crews and material lots. Solar EPC software helps with project coordination, work allocation and a single view of which sites are on track.',
  ),
  h3('Solar maintenance and repair businesses'),
  p(
    'Repair calls arrive unpredictably. A service request queue, technician scheduling, job cards and a record of past visits mean the technician arrives knowing what is installed.',
  ),
  h3('Solar AMC service providers'),
  p(
    'Recurring visits are the business. Customer records, visit schedules and renewal reminders keep contracts from lapsing, which matters when AMC is steady repeat income.',
  ),
  h2('How to Choose the Best Software for Your Solar Business'),
  p('Judge each option against how your business actually works:'),
  ul(
    'Business requirements: a rooftop installer needs leads, quotations, projects and AMC. An EPC firm adds multi-site coordination. A service-only business can start with jobs and contracts.',
    'Ease of use: if crews and office staff need long training, adoption will stall.',
    'Customer management: contacts, sites and system details should sit in one record.',
    'Project and job tracking: can you see stages, owners and blockers?',
    'Technician scheduling: can you see availability, skills and workload?',
    'Mobile accessibility: test it on your crews’ phones, on real sites.',
    'Maintenance and AMC management: does it schedule visits and flag renewals?',
    'Inventory management: can you link panels, inverters and cable to projects?',
    'Reporting: can you see pending work, revenue and dues without spreadsheets?',
    'Scalability and pricing: understand how pricing is calculated, often per user, and whether it will cope with more crews.',
    'Data security: ask about role-based access, backups and data export.',
    'Customer support: ask about onboarding and when help is available.',
  ),
  p(
    'Run a trial with two live projects and one AMC customer. For smaller teams, our guide to [field service software for small businesses](/blog/best-field-service-management-software-small-business) adds a checklist.',
  ),
  h2('Why Solar Service Businesses Should Consider FSMFlow'),
  p(
    'FSMFlow is field service management software for Indian service businesses, with a dedicated page for solar EPC and installation teams. Based on what the product offers today, it supports:',
  ),
  ul(
    'Leads: a pipeline with follow-up reminders, and one-step conversion of a won deal into a quotation and a job.',
    'Quotations and billing: estimates by system size, approval, invoices and payment records.',
    'Jobs and projects: work orders with stages, tasks, checklists, photos and a status, assigned to a technician.',
    'Technician assignment: profiles with skills, availability and workload to assign from.',
    'Inventory: stock of panels, inverters, structures and cable linked to projects.',
    'AMC and service: warranty and AMC records, scheduled O&M visits and renewal reminders.',
    'Reports: projects by stage, revenue and pending payments.',
  ),
  p(
    'FSMFlow runs the business side of solar. It does not design systems or calculate generation, so keep using your design tool and record the details on the quotation and project. For the full workflow, see [solar software](/solutions/solar-software).',
  ),
  callout(
    'Looking to manage your solar installation and service operations more efficiently? Explore FSMFlow and organize your field service business in one place. [Book a Demo](/demo)',
  ),
  h2('Frequently Asked Questions'),
  h3('What is the best software for solar installation companies?'),
  p(
    'There is no single best option. Choose software that covers leads, quotations, projects, crews, materials and AMC, is simple for your team, and fits your size. Trial two or three with real projects.',
  ),
  h3('What software do solar installation businesses need?'),
  p(
    'Most need lead and quotation management, project tracking, technician scheduling, inventory, AMC and reports. Many also keep a separate design tool for system design.',
  ),
  h3('How does solar installation software help manage projects?'),
  p(
    'It gives each site a record with stages, tasks, owners, materials and photos, so you can see progress and blockers without calling supervisors.',
  ),
  h3('Can solar business management software track technicians?'),
  p(
    'Yes. You can keep technician profiles, assign jobs, see availability and workload, and follow job status as crews update it.',
  ),
  h3('Is field service management software suitable for solar companies?'),
  p(
    'Yes, especially for after-sales. Service requests, technician scheduling, parts and AMC are core field service tasks, and many solar firms pair them with project tracking.',
  ),
  h3('Can solar service software manage AMC contracts?'),
  p(
    'Yes, if it includes contract records. Check that it stores plant details, visit schedules and renewal dates, and reminds you before visits and renewals.',
  ),
  h3('What features should I look for in solar installation software?'),
  p(
    'Look for lead management, site visit scheduling, project tracking, technician scheduling, work orders, inventory, AMC, quotations and invoices, a mobile app and reports.',
  ),
  h3('Is solar installation management software suitable for small businesses?'),
  p(
    'Often, yes. A small team can start with leads, quotations, jobs and AMC, then add more as it grows. Choose something simple and priced for your size.',
  ),
  h2('Conclusion'),
  p(
    'The right solar installation software gives you one place for leads, projects, crews, materials and service. Choose by testing against your real workflow, and make sure it handles both halves of the business: delivering the installation, and looking after the plant afterwards through technician and AMC management.',
  ),
  p(
    'FSMFlow is built around that flow for solar and other service teams. To see it with your own projects and AMC customers, [book a FSMFlow demo](/demo).',
  ),
]

/* -------------------------------------------------------------------------- */
/* CCTV installation project management                                       */
/* -------------------------------------------------------------------------- */

export const CCTV_PROJECT_MANAGEMENT_ARTICLE: BlogBlock[] = [
  p(
    'On a busy Monday, a CCTV company may have a bank branch installation half finished, a factory survey waiting for a quotation, a warehouse camera that stopped recording, and three AMC customers whose renewal dates nobody has checked. The technical work is rarely the problem. The problem is knowing which job is where, who is on it, and what is due next. Good CCTV installation project management answers those questions in one place instead of across phones, notebooks and chat threads.',
  ),
  p(
    'This guide shows how to manage CCTV installation projects step by step, how to run maintenance contracts alongside them, and which software features help.',
  ),
  h2('Understanding CCTV Installation Project Management'),
  p(
    'CCTV installation project management means taking each customer from first enquiry to a completed, handed-over installation in a planned way: a recorded requirement, a site survey, a quotation, an assigned crew, tracked progress and a documented handover. Each installation is a small project with a start, stages and an end.',
  ),
  p(
    'Structure matters because installations involve several people and several visits. When enquiry notes, survey details and equipment lists sit in one record, the office and the crew work from the same facts. That is the idea behind CCTV installation management software: one record per job instead of scattered messages.',
  ),
  h2('Common Challenges Faced by CCTV Installation Businesses'),
  ul(
    'Multiple installation requests: enquiries arrive by call, WhatsApp and referral, and some never get a reply.',
    'Site inspections: surveys are agreed verbally and nobody puts them on a calendar.',
    'Quotations and estimates: a quote is rebuilt from notes after the camera count changes.',
    'Assigning installers: crews are chosen by phone, without a view of who is free.',
    'Project progress: the owner cannot tell which sites are finished, ongoing or stuck.',
    'Equipment: cameras, DVRs, NVRs, hard disks and cables run short because stock is counted in a notebook.',
    'Office and field coordination: the crew arrives without the camera list or the customer’s contact.',
    'Customer complaints: a call about a camera that went dark is noted on paper and forgotten.',
    'AMC agreements: renewal dates sit in a sheet nobody opens.',
    'Service history: nobody can say which camera was replaced last year.',
  ),
  callout(
    'Managing multiple CCTV installation projects and AMC contracts? Simplify your service operations with FSMFlow. [Book a Demo](/demo)',
  ),
  h2('How to Manage CCTV Installation Projects Step by Step'),
  h3('Step 1 – Manage customer enquiries'),
  p(
    'Log every enquiry with the contact, site, what they want covered and a follow-up date. A bank branch and a small shop need different answers, so write the requirement down at the start. [Sales CRM](/features/sales-crm-software) tools keep these follow-ups visible.',
  ),
  h3('Step 2 – Schedule site inspections'),
  p(
    'Book the survey as a scheduled visit with a named person. The surveyor records entry points, camera positions, cable routes, power and recorder location, with photos, against the job. Our [CCTV AMC and installation guide](/blog/cctv-amc-format-installation-service-renewals) covers survey detail.',
  ),
  h3('Step 3 – Prepare quotations and estimates'),
  p(
    'Build the quotation from the survey: cameras, recorder, storage, cabling, accessories, installation and labour as separate lines. Record the customer’s approval before work starts. [Quotation software](/features/quotation-software) can carry an approved quote into the job.',
  ),
  h3('Step 4 – Assign installation technicians'),
  p(
    'Allocate crews by availability, skills and location. A crew experienced with IP cameras should not be sent only because it was nearest. See our guide to [technician scheduling](/blog/technician-scheduling-software-for-service-businesses).',
  ),
  h3('Step 5 – Track installation progress'),
  p(
    'Give every job a clear status: assigned, ongoing, pending or completed. A short daily review of anything pending catches stalled sites early. CCTV service tracking works only if crews update status as they work.',
  ),
  h3('Step 6 – Manage equipment and inventory'),
  p(
    'Track cameras, DVRs, NVRs, cables, connectors, storage devices and small materials, and link what is used to each job. Check stock before a crew leaves, not at the site. See [inventory management](/features/inventory-management-software).',
  ),
  h3('Step 7 – Complete installation and customer handover'),
  p(
    'Close the job with a checklist, photos, the installed equipment list and customer confirmation. Save the camera and recorder details against the site, because they become the baseline for maintenance. [Asset records](/features/asset-management-software) hold them.',
  ),
  h2('What Is a CCTV Annual Maintenance Contract (AMC)?'),
  p(
    'A CCTV AMC is a service contract under which you look after a customer’s cameras and recorder for a set period, usually a year. Customers choose it for planned upkeep, a known contact when something fails, and predictable costs. Contract wording is a business decision, and our [CCTV AMC format guide](/blog/cctv-amc-format-installation-service-renewals) covers the clauses.',
  ),
  p('It helps to keep three kinds of work separate:'),
  ul(
    'Routine maintenance: basic upkeep, such as cleaning lenses and checking that cameras show a picture.',
    'Preventive maintenance: planned visits to inspect cameras, cables, connections, DVR or NVR health, and storage and recording, so faults are found before they cause a gap in footage.',
    'Breakdown service: reactive repair after something fails.',
  ),
  p(
    'What an AMC includes varies. Preventive visits, camera cleaning, recorder health checks, cable inspection, storage checks and breakdown support are common, but each is optional and should be written into the contract only if you and the customer agree. Contract length and renewal terms are also agreed case by case.',
  ),
  h2('How to Manage CCTV Maintenance Contracts Efficiently'),
  p('Good CCTV AMC management follows ten habits:'),
  ul(
    'Keep customer and equipment records together, including model, serial number and installation date.',
    'Record each AMC’s start and end dates.',
    'Schedule preventive visits in advance.',
    'Track renewals due in the next 30 to 60 days.',
    'Assign technicians to each maintenance visit.',
    'Record what was checked and found on every visit.',
    'Log breakdown requests as jobs with a priority.',
    'Keep a service history for each site.',
    'Watch pending maintenance jobs weekly.',
    'Prepare simple maintenance reports for customers.',
  ),
  p(
    'Example: a company with 40 AMC customers has quarterly visits due across the year. If every visit is created in advance and assigned, the coordinator sees each week’s visits and any contract about to lapse. If visits depend on memory, the quietest customers are forgotten first. See [service contract management software](/blog/service-contract-management-software).',
  ),
  h2('Essential Features to Look for in CCTV Service Management Software'),
  p('Whether it is sold as CCTV service management software or security system maintenance software, check these twelve features from a CCTV business’s point of view:'),
  ul(
    'Customer and lead management: every enquiry has a source, next step and date.',
    'Site visit management: surveys are scheduled jobs with notes and photos.',
    'Quotation management: camera, recorder and labour lines, with approvals.',
    'Technician scheduling and assignment: see who is free before assigning, which is core to CCTV technician management.',
    'Job card and work order management: CCTV work order management gives each installation or repair a checklist, status and photos. See [work order management](/features/work-order-management-software).',
    'Installation project tracking: all open installations and their status in one view.',
    'Inventory management: cameras, hard disks and cable linked to jobs.',
    'AMC and contract management: contract dates, covered sites and renewals. See [warranty and AMC management](/features/warranty-management-software).',
    'Preventive maintenance scheduling: planned visits created ahead.',
    'Service request management: complaints logged and turned into jobs. See [service request management](/blog/service-request-management-for-service-businesses).',
    'Customer service history: every visit on the site record.',
    'Reports and analytics: jobs, pending work and renewals. See [reporting](/features/reporting-software).',
  ),
  callout(
    'Managing multiple CCTV installation projects and AMC contracts? Simplify your service operations with FSMFlow. [Book a Demo](/demo)',
  ),
  h2('Manual CCTV Project Management vs Digital Management Software'),
  {
    type: 'table',
    caption: 'Manual CCTV project management compared with digital management software',
    head: ['Activity', 'Manual management', 'Digital management'],
    rows: [
      ['Customer records', 'Paper files and spreadsheets', 'Centralized customer records'],
      ['Site visits', 'Phone-based coordination', 'Organized visit scheduling'],
      ['Technician assignment', 'Manual communication', 'Centralized job assignment'],
      ['Installation tracking', 'Repeated follow-ups', 'Digital job status tracking'],
      ['Inventory', 'Separate stock records', 'Organized inventory records'],
      ['AMC renewals', 'Manual reminders', 'Digital contract tracking'],
      ['Maintenance visits', 'Manual scheduling', 'Organized maintenance scheduling'],
      ['Service history', 'Scattered records', 'Centralized service history'],
      ['Reporting', 'Manual preparation', 'Digital reports'],
    ],
  },
  h2('Benefits of Using CCTV Service Management Software'),
  ul(
    'Better visibility of installation projects, since every job has a status.',
    'Improved technician coordination, with assignments in one place.',
    'Organized customer information that nobody has to ask for twice.',
    'Easier AMC tracking, with dates and renewals together.',
    'Better maintenance scheduling, because visits are planned ahead.',
    'Fewer manual follow-ups, as updates come from the field.',
    'Better service history, kept per site and per device.',
    'More useful operational reports, built from recorded work.',
    'Clearer customer communication, as staff can answer from the record.',
    'More organized operations overall.',
  ),
  p('These benefits depend on your team recording work consistently.'),
  h2('Why CCTV Installation Businesses Should Consider FSMFlow'),
  p(
    'FSMFlow is field service management software for Indian service businesses, with a dedicated page for CCTV installers. It is not video surveillance or camera monitoring software: it manages the business around the cameras. Based on what the product offers today:',
  ),
  callout(
    'Managing multiple CCTV installation projects and AMC contracts? Simplify your service operations with FSMFlow. [Book a Demo](/demo)',
  ),
  ul(
    'Leads and quotations: enquiries with follow-up reminders, and quotations for cameras, NVR, storage, cabling and labour that convert into jobs and invoices.',
    'Service requests and jobs: work orders with checklists, photos and notes, assigned to technicians.',
    'Technician assignment: profiles with skills, availability and workload.',
    'Field tracking: jobs move from assigned to en route, in progress and completed, and technicians use the [field service app](/features/field-service-app) for checklists, photos and sign-off.',
    'Asset records: cameras, NVRs and DVRs on the customer’s site with serial number, installation date and warranty end.',
    'AMC: contracts, visit schedules and renewal reminders.',
    'Inventory: cameras, hard disks, cable and connectors, with low-stock alerts.',
    'Billing and reports: quotations to invoices, and reports on jobs, revenue and pending payments.',
  ),
  p(
    'It does not stream or record camera video, and it does not describe hardware integrations. For the full flow, see [CCTV software](/solutions/cctv-software).',
  ),
  h2('Frequently Asked Questions'),
  h3('How do I manage multiple CCTV installation projects?'),
  p(
    'Give each installation one record with the survey, quotation, camera list, crew and status. Review open jobs daily, and assign crews by availability and skills.',
  ),
  h3('What software is used for CCTV installation project management?'),
  p(
    'Businesses use field service management software for enquiries, jobs, technicians, inventory, AMC and reports. It differs from video management software, which is used to view footage.',
  ),
  h3('How can CCTV companies manage AMC contracts?'),
  p(
    'Keep every contract’s dates, covered sites and visit schedule in one place, create visits in advance, and review renewals due in the next 30 to 60 days each week.',
  ),
  h3('What should a CCTV maintenance contract include?'),
  p(
    'Typically the parties and site, contract period, covered equipment, visit schedule, breakdown support, exclusions and charges. Optional items should appear only if agreed. See the AMC format guide for detail.',
  ),
  h3('How often should CCTV systems be maintained?'),
  p(
    'There is no single rule. Many contracts use quarterly, half-yearly or yearly preventive visits, depending on the site, its environment, how critical the cameras are and the equipment maker’s guidance.',
  ),
  h3('How can I track CCTV installation technicians?'),
  p(
    'Assign each job to a named technician and have them update status from their phone. The office can then see assigned, ongoing and completed jobs without calling.',
  ),
  h3('Can service management software track CCTV maintenance visits?'),
  p(
    'Yes. Visits can be scheduled, assigned and recorded against the customer’s site, with findings and photos, so service history builds up automatically.',
  ),
  h3('What is the difference between CCTV project management and CCTV maintenance management?'),
  p(
    'Project management follows a one-time installation from enquiry to handover. Maintenance management handles recurring work afterwards: contracts, preventive visits, breakdown calls and renewals.',
  ),
  h2('Conclusion'),
  p(
    'Organized CCTV installation project management, structured maintenance contracts and clear technician coordination all rest on one habit: every job, device and visit is recorded in the same place. With that in place, a growing CCTV business can add crews and AMC customers without losing track, and every site has a service history to work from.',
  ),
  p(
    'FSMFlow is built for this kind of field service work. To see it with your own installations and AMC customers, [book a FSMFlow demo](/demo).',
  ),
]

/* -------------------------------------------------------------------------- */
/* Industrial maintenance management                                          */
/* -------------------------------------------------------------------------- */

export const INDUSTRIAL_MAINTENANCE_ARTICLE: BlogBlock[] = [
  p(
    'When a conveyor stops at 2 pm, nobody in the plant is thinking about maintenance strategy. They are asking who is available, whether the part is in stock, and what was done to this machine last time. Industrial maintenance management is the discipline that makes those answers easy to find before the breakdown, not during it. Without it, teams live with unexpected failures, delayed maintenance, paper records, lost work orders and no clear view of what is pending.',
  ),
  p(
    'This guide explains what industrial maintenance management involves, the main types of maintenance, how industrial maintenance management software improves operations, and how to choose a tool. It also says plainly where FSMFlow fits and where it does not.',
  ),
  h2('What Is Industrial Maintenance Management?'),
  p(
    'Industrial maintenance management is the planning, scheduling, tracking and recording of work that keeps machinery and equipment running. It covers who maintains which equipment, when, with what parts, and what happened afterwards. Factories, workshops, utilities and industrial service providers all do it, whether or not they call it that. Industrial equipment maintenance runs from lubricating a bearing to rebuilding a gearbox, and the equipment side, often called equipment maintenance management, focuses on each machine’s schedule and history.',
  ),
  p(
    'Two groups carry the work. Technicians inspect, repair and service the equipment. Supervisors decide priorities, assign jobs and watch the backlog. The simplest distinction in practice is reactive versus planned: reactive work responds to a failure, while planned work is scheduled in advance to prevent one. Most operations need a healthy mix of both.',
  ),
  h2('Common Challenges in Industrial Maintenance Operations'),
  ul(
    'Unexpected equipment breakdowns: a gearbox fails mid-shift and production waits while someone finds the technician.',
    'No preventive maintenance planning: lubrication and inspections happen when someone remembers.',
    'Manual documentation: job sheets are filled on paper, filed late, and rarely searched.',
    'Delayed work order assignments: a request waits in a supervisor’s inbox for hours.',
    'Technician management: shifts, skills and leave are tracked on a whiteboard.',
    'Spare parts coordination: a bearing is needed and the store register says one, but the shelf is empty.',
    'No equipment service history: a technician repeats a diagnosis that was already made last quarter.',
    'Ongoing jobs are hard to follow: the manager walks the floor to find out what is open.',
    'Communication gaps: operations, stores and maintenance each hold a different version of the job.',
    'Limited performance visibility: nobody can say how many planned tasks were completed on time.',
  ),
  callout(
    'Looking to organize your industrial service and maintenance operations? Explore FSMFlow and manage your field service activities more efficiently. [Book a Demo](/demo)',
  ),
  h2('Types of Industrial Maintenance'),
  h3('Reactive maintenance'),
  p(
    'Work done after equipment fails. It is sometimes acceptable for low-risk items, but it brings unplanned stoppages, rushed repairs and urgent part orders, and it makes the schedule unpredictable.',
  ),
  h3('Preventive maintenance'),
  p(
    'Scheduled work, such as inspections and servicing at set intervals, meant to reduce unexpected failures. Preventive maintenance management means setting intervals from the equipment maker’s guidance, operating conditions and your own history. Our guide to [preventive maintenance](/blog/preventive-maintenance-guide-sri-lanka) explains how to build a schedule.',
  ),
  h3('Predictive maintenance'),
  p(
    'Condition-based work that uses equipment data and monitoring, such as vibration or temperature readings, to estimate when service is needed. It needs sensors and analysis tools. FSMFlow does not provide predictive analytics.',
  ),
  h3('Corrective maintenance'),
  p(
    'Work that fixes a fault already identified, often during an inspection. The fault is recorded, assigned to a technician and closed with notes, so it does not resurface unnoticed.',
  ),
  h3('Routine maintenance'),
  p(
    'Regular recurring tasks: inspections, cleaning, lubrication and basic checks. They are simple, but they are the first to be skipped when the team is busy.',
  ),
  h2('How Maintenance Management Software Improves Industrial Operations'),
  p('Used consistently, maintenance management software changes daily operations in eight ways.'),
  h3('Centralized maintenance management'),
  p(
    'Requests, schedules, work orders and records sit in one place instead of in registers, chats and spreadsheets, so maintenance operations management no longer depends on memory.',
  ),
  h3('Better maintenance scheduling'),
  p(
    'Planned tasks are created as dated jobs and can be monitored. Maintenance scheduling software makes missed or overdue tasks visible instead of silent.',
  ),
  h3('Work order management'),
  p(
    'Maintenance work order management turns a request into a work order with an owner, priority, status and completion record. This is how to track industrial maintenance work orders without chasing people. See [work order management software](/features/work-order-management-software).',
  ),
  h3('Technician scheduling and assignment'),
  p(
    'Maintenance technician management starts with seeing skills, availability and workload, so the electrician is not sent to a mechanical fault. See [technician scheduling](/blog/technician-scheduling-software-for-service-businesses).',
  ),
  h3('Equipment maintenance history'),
  p(
    'A record of what was done, when and by whom helps technicians avoid repeat diagnosis and helps managers spot machines that keep failing.',
  ),
  h3('Spare parts and inventory coordination'),
  p(
    'Linking parts to jobs and tracking stock means the right material is available before the technician starts. See [inventory management software](/features/inventory-management-software).',
  ),
  h3('Improved team communication'),
  p(
    'When job details live in one record, managers and technicians stop relaying instructions by phone, and the office stops asking for updates.',
  ),
  h3('Maintenance reports and operational visibility'),
  p(
    'Reports show completed, ongoing and pending work, so managers can see backlog and workload without compiling sheets by hand.',
  ),
  h2('Essential Features to Look for in Industrial Maintenance Management Software'),
  p('These are general capabilities. Later, we say which ones FSMFlow offers.'),
  ul(
    'Maintenance request management: requests are logged with urgency and location, not lost in calls.',
    'Work order management: every task has an assignee, status, checklist and completion record.',
    'Preventive maintenance scheduling: recurring tasks are created ahead and flagged when overdue.',
    'Technician management: skills, availability and workload in one view.',
    'Job assignment and tracking: assign quickly and follow progress.',
    'Equipment and asset records: each machine with its details and warranty or contract status.',
    'Maintenance history: every past job attached to the equipment.',
    'Spare parts and inventory management: stock linked to jobs, with low-stock alerts.',
    'Mobile access for field technicians: jobs, checklists and photos on a phone.',
    'Reports and analytics: completed, pending and overdue work at a glance.',
  ),
  callout(
    'Looking to organize your industrial service and maintenance operations? Explore FSMFlow and manage your field service activities more efficiently. [Book a Demo](/demo)',
  ),
  h2('Manual Maintenance Management vs Digital Maintenance Management'),
  {
    type: 'table',
    caption: 'Manual maintenance management compared with digital maintenance management',
    head: ['Maintenance activity', 'Manual management', 'Digital management'],
    rows: [
      ['Maintenance requests', 'Paper records and phone calls', 'Centralized digital records'],
      ['Job assignment', 'Manual coordination', 'Organized job allocation'],
      ['Maintenance scheduling', 'Spreadsheets and reminders', 'Digital scheduling'],
      ['Work order tracking', 'Manual follow-ups', 'Centralized job status'],
      ['Technician coordination', 'Calls and messages', 'Organized team communication'],
      ['Equipment history', 'Scattered documents', 'Centralized records, where supported'],
      ['Inventory', 'Separate stock registers', 'Organized inventory records'],
      ['Reporting', 'Manual report preparation', 'Digital operational reports'],
    ],
  },
  h2('Benefits of Industrial Maintenance Management Software'),
  ul(
    'Better maintenance planning, because tasks are scheduled and visible.',
    'Improved coordination of equipment maintenance across teams.',
    'Less manual administration and re-typing.',
    'Clearer work order visibility for supervisors.',
    'Improved technician utilization, since workload is visible.',
    'Organized maintenance documentation.',
    'Better inventory coordination for spare parts.',
    'More useful operational reports.',
    'More structured maintenance workflows overall.',
  ),
  p('These gains depend on consistent use. No software guarantees fewer breakdowns.'),
  h2('How to Choose the Right Industrial Maintenance Management Software'),
  p('Start from your actual maintenance requirements, then check these points:'),
  ul(
    'Business and operational requirements: do you maintain your own plant, or serve customers’ equipment?',
    'Equipment and asset needs: how detailed must machine records be?',
    'Scheduling: can it create recurring planned tasks?',
    'Work orders: can a request become a tracked job easily?',
    'Technician management: can you see skills and workload?',
    'Inventory: can parts be linked to jobs?',
    'Mobile access: will technicians use it on the shop floor?',
    'Reporting: can you see pending and overdue work?',
    'Scalability: will it cope with more sites and technicians?',
    'Ease of use: can supervisors and technicians learn it quickly?',
    'Data security: ask about roles, backups and export.',
    'Pricing and support: understand how pricing works and what help is included.',
  ),
  p(
    'Be clear about scope. Plants that need sensor monitoring, machine-level asset registers or predictive analytics should evaluate those separately. For the wider picture, see our guides to [computerized maintenance management software](/blog/computerized-maintenance-management-software-south-africa) and [web-based maintenance management software](/blog/web-based-maintenance-management-software-nigeria).',
  ),
  h2('Why Industrial Service Businesses Should Consider FSMFlow'),
  p(
    'FSMFlow is field service management software for service businesses that send technicians to customer or site locations. It is not presented as a full industrial CMMS or EAM platform, so it suits industrial service management for providers and maintenance contractors who work through scheduled visits and service jobs.',
  ),
  callout(
    'Looking to organize your industrial service and maintenance operations? Explore FSMFlow and manage your field service activities more efficiently. [Book a Demo](/demo)',
  ),
  p('Of the ten features above, FSMFlow offers these:'),
  ul(
    'Customer and service management: enquiries with follow-up reminders and customer site records.',
    'Work orders: jobs with priority, time window, checklist, parts, photos and status.',
    'Technician scheduling: profiles with skills, a weekly schedule showing gaps and double bookings, leave and workload. See [employee and technician scheduling](/features/employee-management-software).',
    'Job tracking: status from assigned to en route, in progress and completed, and the [field service app](/features/field-service-app) for technicians.',
    'Equipment records: units you service, with model, serial number, warranty and AMC status and service history. See [asset management](/features/asset-management-software).',
    'AMC and scheduled visits: contracts, visit schedules and renewal reminders. See [warranty and AMC management](/features/warranty-management-software).',
    'Inventory: warehouse and van stock linked to jobs, with low-stock alerts.',
    'Quotations, billing and reports: quotations that become jobs and invoices, and reports on jobs, revenue and pending payments.',
  ),
  p(
    'FSMFlow does not provide sensor integration, IoT monitoring, machine diagnostics, predictive maintenance or AI-based maintenance. For the broader service workflow, see [service business management software](/solutions/service-business-management-software).',
  ),
  h2('Frequently Asked Questions'),
  h3('What is industrial maintenance management?'),
  p(
    'It is the planning, scheduling, tracking and recording of maintenance work on industrial equipment, so machines are serviced on time and past work is documented.',
  ),
  h3('What is industrial maintenance management software?'),
  p(
    'It is software that organizes maintenance requests, work orders, schedules, technicians, equipment records and parts in one system, replacing registers and spreadsheets.',
  ),
  h3('How does software improve industrial maintenance operations?'),
  p(
    'It centralizes records, makes planned work visible, tracks work orders and technicians, and produces reports. The result depends on how consistently the team records work.',
  ),
  h3('What is the difference between preventive and reactive maintenance?'),
  p(
    'Preventive maintenance is scheduled in advance to reduce failures. Reactive maintenance happens after equipment fails. Most operations use both.',
  ),
  h3('How can businesses manage industrial maintenance work orders?'),
  p(
    'Log every request, create a work order with priority and an owner, assign a technician, update status as work progresses, and close it with notes and parts used.',
  ),
  h3('What features should industrial maintenance software include?'),
  p(
    'Request and work order management, preventive scheduling, technician management, equipment records and history, inventory, mobile access and reports.',
  ),
  h3('How can maintenance software help manage technicians?'),
  p(
    'It shows skills, availability and workload, so jobs are assigned sensibly, and it lets technicians update job status from their phones.',
  ),
  h3('Is field service management software suitable for industrial maintenance companies?'),
  p(
    'It can be, if your work is done by technicians on scheduled visits and service jobs. If you need sensor monitoring or a full plant asset register, assess a dedicated CMMS or EAM too.',
  ),
  h2('Conclusion'),
  p(
    'Sound industrial maintenance management comes down to a few habits: plan the recurring work, route every request through a work order, assign the right technician, keep equipment history and watch what is pending. Digital workflows make those habits easier to keep and give managers real visibility.',
  ),
  p(
    'If your maintenance runs through technicians and scheduled service jobs, see how FSMFlow handles it: [book a FSMFlow demo](/demo).',
  ),
]
