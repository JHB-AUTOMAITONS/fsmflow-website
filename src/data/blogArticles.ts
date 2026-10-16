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
