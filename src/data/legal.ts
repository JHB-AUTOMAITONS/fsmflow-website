import { SITE } from './site'

/* ==========================================================================
   Legal content: Privacy Policy, Terms and Conditions, Refund / Cancellation.

   These are sensible, India-appropriate SaaS policies written in plain English.
   They are a starting point and should be reviewed by a qualified lawyer before
   launch. Wherever a commercial value is not known yet it lives in a named
   constant below, flagged CONFIRM, and the wording around it is conservative.
   ========================================================================== */

/** The contracting party shown in every policy. */
export const PARTY: string = SITE.legalEntity || SITE.name

const EMAIL = SITE.contact.email

// CONFIRM: number of days after the FIRST payment on a new subscription within which a refund can be requested.
export const REFUND_REQUEST_WINDOW_DAYS = 7

// CONFIRM: how long approved refunds take to be processed (shown as written).
export const REFUND_PROCESSING_TIME = '7 to 10 business days'

// CONFIRM: minimum days before the renewal date that a cancellation must reach us to avoid the next charge.
export const CANCELLATION_NOTICE_DAYS = 7

// CONFIRM: days we keep a customer's data after a subscription ends, so they can export it, before deleting or anonymising it.
export const DATA_RETENTION_AFTER_CLOSURE_DAYS = 90

// CONFIRM: days allowed to pay an invoice unless the invoice says otherwise.
export const PAYMENT_DUE_DAYS = 7

// CONFIRM: days of notice we give before material changes (Terms, price changes at renewal).
export const CHANGE_NOTICE_DAYS = 30

// CONFIRM: the liability cap is the fees paid in this many months before a claim arose.
export const LIABILITY_CAP_MONTHS = 12

// CONFIRM: city whose courts have jurisdiction (e.g. 'Chennai'). Empty -> "the competent courts in India".
export const JURISDICTION_CITY = ''

// CONFIRM: name of the Grievance Officer. Empty -> the role "Grievance Officer" is shown without a name.
export const GRIEVANCE_OFFICER_NAME = ''

/* -------------------------------------------------------------------------- */

export type LegalBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }

export interface LegalSection {
  /** Anchor id, used by the table of contents. */
  id: string
  title: string
  blocks: LegalBlock[]
}

export interface LegalDoc {
  path: string
  /** The page's single h1. */
  title: string
  seoTitle: string
  description: string
  /** Short intro shown under the h1. */
  intro: string
  sections: LegalSection[]
}

const courts = JURISDICTION_CITY ? `the courts at ${JURISDICTION_CITY}, India` : 'the competent courts in India'

/** Inline links in paragraph and list text use the form [label](/path); LegalLayout renders them. */

/* ----------------------------------- Privacy ---------------------------------- */

export const PRIVACY: LegalDoc = {
  path: '/privacy-policy',
  title: 'Privacy Policy',
  seoTitle: 'Privacy Policy | FSMFlow',
  description:
    'How FSMFlow collects, uses, shares and protects personal information, and the rights and choices you have under Indian law, including the DPDP Act, 2023.',
  intro: `This policy explains how ${PARTY} ("we", "us") collects, uses, shares and protects personal information when you visit ${SITE.domain}, contact us, or use the ${SITE.name} platform.`,
  sections: [
    {
      id: 'scope',
      title: 'Who we are and what this policy covers',
      blocks: [
        {
          type: 'p',
          text: `${PARTY} provides ${SITE.name}, a cloud-based platform that service businesses in India use to manage jobs, technicians, customers, equipment, inventory and invoices.`,
        },
        { type: 'p', text: 'This policy applies to:' },
        {
          type: 'ul',
          items: [
            `people who visit ${SITE.domain}`,
            'people who request a demo or contact us',
            `businesses that subscribe to ${SITE.name}, and the people they authorise to use it`,
          ],
        },
        {
          type: 'p',
          text: 'We follow Indian law, including the Information Technology Act, 2000 and the rules made under it, and the Digital Personal Data Protection Act, 2023 (the DPDP Act), as they apply to us. Please read this policy together with our [Terms and Conditions](/terms-and-conditions).',
        },
      ],
    },
    {
      id: 'information-we-collect',
      title: 'Information we collect',
      blocks: [
        { type: 'h3', text: 'Information you give us' },
        {
          type: 'ul',
          items: [
            'your name, work email address, phone number, company name, industry and team size when you request a demo or contact us',
            'anything you write in a message to us',
            'billing contact details and payment records, if you subscribe to a paid plan',
          ],
        },
        { type: 'h3', text: `Information in your ${SITE.name} account` },
        {
          type: 'p',
          text: `Businesses use ${SITE.name} to keep records about their own work, such as customer names and addresses, phone numbers, equipment details, job notes, photos, spare parts, invoices and technician details. We call this "customer data". Section 4 explains how we handle it.`,
        },
        { type: 'h3', text: 'Information collected automatically' },
        {
          type: 'ul',
          items: [
            'device and browser type, IP address, the pages you visit and the date and time of your visit',
            'information stored by cookies and similar technologies (see section 7)',
            'if your organisation turns on location-based features, the location of a technician’s device while they are working',
          ],
        },
      ],
    },
    {
      id: 'how-we-use-information',
      title: 'How we use information',
      blocks: [
        { type: 'p', text: 'We use personal information to:' },
        {
          type: 'ul',
          items: [
            `provide, operate, secure and improve the website and the ${SITE.name} platform`,
            'respond to demo requests, questions and support requests',
            'create and manage accounts, process subscriptions and send invoices',
            'send service messages such as security, billing and product update notices',
            'prevent misuse and fraud, and enforce our Terms',
            'meet our legal and regulatory duties',
          ],
        },
        {
          type: 'p',
          text: 'We process personal data with your consent, or for the "legitimate uses" the DPDP Act allows, such as performing a contract with you or complying with the law. If we send product news or offers, you can opt out at any time using the link in the message or by writing to us.',
        },
      ],
    },
    {
      id: 'customer-data',
      title: 'Customer data we handle for our customers',
      blocks: [
        {
          type: 'p',
          text: `When a business uses ${SITE.name}, that business decides what personal data about its own customers and staff goes into its account, and why. For that data, the business is the Data Fiduciary (the party that decides the purpose and means of processing) and ${PARTY} acts as a Data Processor.`,
        },
        {
          type: 'p',
          text: 'We use customer data only to provide and support the service, keep it secure and meet legal duties, and we follow the business’s instructions about it. If you are a customer of a business that uses the platform and want to see or correct your data, please contact that business first.',
        },
      ],
    },
    {
      id: 'sharing',
      title: 'When we share information',
      blocks: [
        { type: 'p', text: 'We do not sell your personal data. We share it only in these cases:' },
        {
          type: 'ul',
          items: [
            'with service providers that help us run the service, such as hosting, email delivery, analytics, payment processing and support tools, who may use it only for our purposes and under confidentiality and data protection commitments',
            'when the law requires it, for example in response to a lawful order from a court or a government authority',
            'to protect the rights, property or safety of ' + PARTY + ', our customers or others',
            'in connection with a merger, acquisition or sale of the business, with notice to you where required',
            'with your consent or at your direction, for example when you invite a colleague to your account',
          ],
        },
      ],
    },
    {
      id: 'storage-and-transfers',
      title: 'Where information is stored',
      blocks: [
        {
          type: 'p',
          text: 'Information may be stored and processed on servers run by our service providers, which may be in India or in other countries. Where information is transferred outside India, we do so only as the DPDP Act permits, including any restrictions the Government of India notifies.',
        },
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and similar technologies',
      blocks: [
        {
          type: 'p',
          text: 'Our website may use cookies and similar technologies, such as local storage, to keep the site working, remember simple preferences and understand how the site is used. You can block or delete cookies in your browser settings. Some parts of the site may not work properly if you do.',
        },
      ],
    },
    {
      id: 'retention',
      title: 'How long we keep information',
      blocks: [
        {
          type: 'ul',
          items: [
            'Demo requests and enquiries: for as long as needed to respond and follow up, then deleted or anonymised unless you become a customer.',
            'Account and billing records: for the length of your subscription and afterwards for the period that tax, accounting and other laws require.',
            `Customer data: after a subscription ends we keep it for up to ${DATA_RETENTION_AFTER_CLOSURE_DAYS} days so the business can export it, then delete or anonymise it, unless the law requires us to keep it longer.`,
          ],
        },
      ],
    },
    {
      id: 'security',
      title: 'How we protect information',
      blocks: [
        {
          type: 'p',
          text: 'We use reasonable security safeguards that are appropriate to the nature of the information and that meet the requirements of applicable law, including access controls and limits on who inside the company can see data.',
        },
        {
          type: 'p',
          text: 'No method of sending or storing information online is completely secure, so we cannot guarantee absolute security. Please use a strong, unique password and tell us straight away if you suspect someone has accessed your account without permission.',
        },
      ],
    },
    {
      id: 'your-rights',
      title: 'Your rights and choices',
      blocks: [
        { type: 'p', text: 'Under the DPDP Act you can ask us to:' },
        {
          type: 'ul',
          items: [
            'give you a summary of the personal data we process about you and how we use it',
            'correct, complete or update your personal data',
            'erase your personal data, unless the law requires us to keep it',
            'stop processing that depends on your consent, by withdrawing it at any time (this does not affect processing already done)',
            'handle a complaint through our grievance process (see section 12)',
            'name another person to exercise these rights for you if you die or cannot act for yourself',
          ],
        },
        {
          type: 'p',
          text: `To use any of these rights, write to ${EMAIL}. We may need to confirm who you are first. If you are not satisfied with our response, you may approach the Data Protection Board of India as provided in the DPDP Act.`,
        },
      ],
    },
    {
      id: 'children',
      title: 'Children',
      blocks: [
        {
          type: 'p',
          text: `Our website and platform are meant for businesses and are not directed at children. We do not knowingly collect personal data from anyone under 18. If you believe a child has given us personal data, please contact us and we will delete it.`,
        },
      ],
    },
    {
      id: 'grievance',
      title: 'Grievance redressal and contact',
      blocks: [
        {
          type: 'p',
          text: 'If you have a concern about how your personal data is handled, please write to our Grievance Officer:',
        },
        {
          type: 'ul',
          items: [
            `${GRIEVANCE_OFFICER_NAME ? `${GRIEVANCE_OFFICER_NAME}, ` : ''}Grievance Officer, ${PARTY}`,
            `Email: ${EMAIL}`,
            ...(SITE.contact.address ? [`Address: ${SITE.contact.address}`] : []),
          ],
        },
        {
          type: 'p',
          text: 'We will acknowledge your complaint and respond within the time required by applicable law.',
        },
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      blocks: [
        {
          type: 'p',
          text: 'We may update this policy from time to time. The "Last updated" date at the top shows when it last changed. If we make a material change, we will take reasonable steps to let you know, for example by email or a notice on the website.',
        },
      ],
    },
  ],
}

/* ----------------------------------- Terms ------------------------------------ */

export const TERMS: LegalDoc = {
  path: '/terms-and-conditions',
  title: 'Terms and Conditions',
  seoTitle: 'Terms and Conditions | FSMFlow',
  description:
    'The terms for using fsmflow.in and the FSMFlow platform: accounts, acceptable use, subscriptions and payment, your data, liability and governing law.',
  intro: `These Terms and Conditions ("Terms") govern your use of ${SITE.domain} and the ${SITE.name} platform provided by ${PARTY} ("we", "us"). By using them, you agree to these Terms.`,
  sections: [
    {
      id: 'acceptance',
      title: 'Acceptance of these Terms',
      blocks: [
        {
          type: 'p',
          text: 'If you use the service for a business, you confirm that you have the authority to accept these Terms for that business. If you do not agree to the Terms, please do not use the website or the platform.',
        },
        {
          type: 'p',
          text: 'These Terms are an electronic record under the Information Technology Act, 2000 and do not need a physical signature. If you have a separate written order form or agreement with us, it applies together with these Terms, and if the two conflict, the order form or agreement prevails.',
        },
      ],
    },
    {
      id: 'the-service',
      title: `The ${SITE.name} service`,
      blocks: [
        {
          type: 'p',
          text: `${SITE.name} is a cloud-based platform for managing field service work, including jobs and work orders, technicians, customers and equipment, quotations and invoices, spare parts inventory, AMC (annual maintenance contract) and warranty tracking, and reports. The features you can use depend on your plan. We may improve, add or change features over time.`,
        },
      ],
    },
    {
      id: 'accounts',
      title: 'Accounts and responsibilities',
      blocks: [
        {
          type: 'ul',
          items: [
            'You must be at least 18 years old and legally able to enter into a contract.',
            'You must give accurate information and keep it up to date.',
            'You must keep your login details confidential. You are responsible for activity under your account, including by users you authorise.',
            'You must tell us promptly if you suspect unauthorised use of your account.',
          ],
        },
      ],
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable use',
      blocks: [
        { type: 'p', text: 'You agree not to:' },
        {
          type: 'ul',
          items: [
            'break any law or infringe anyone’s rights while using the service',
            'upload content that is unlawful, harmful, fraudulent or that you have no right to use',
            'try to gain unauthorised access to the service or other users’ data, or disrupt how it works',
            'copy, reverse engineer or resell the service, except as the law allows or we agree in writing',
            'use the service to send spam or unlawful messages',
            'introduce viruses or other harmful code',
          ],
        },
      ],
    },
    {
      id: 'subscriptions-and-payment',
      title: 'Subscriptions, fees and payment',
      blocks: [
        {
          type: 'ul',
          items: [
            'The plan, price and billing cycle for your subscription are set out in your quote, order form or invoice. Fees depend on your plan and the size of your team.',
            'We will tell you whether quoted fees include or exclude applicable taxes, such as GST, before you subscribe.',
            `Invoices are payable within ${PAYMENT_DUE_DAYS} days unless the invoice says otherwise. If a payment is overdue we may suspend access until it is paid.`,
            'Subscriptions renew automatically at the end of each billing cycle until they are cancelled.',
            `We will give you at least ${CHANGE_NOTICE_DAYS} days’ notice before a price change takes effect at renewal.`,
          ],
        },
        {
          type: 'p',
          text: 'How to cancel, and when a refund may be available, is explained in our [Refund / Cancellation Policy](/refund-policy).',
        },
      ],
    },
    {
      id: 'your-data',
      title: 'Your data',
      blocks: [
        {
          type: 'p',
          text: `You own the data you put into ${SITE.name}, including your customer, job, equipment, inventory and invoice records ("customer data"). You give us a limited right to host, process and display it only to provide and support the service.`,
        },
        {
          type: 'p',
          text: 'You are responsible for the accuracy of your customer data, and for having the rights and consents you need to put personal data about your own customers and staff into the service. How we handle personal data is described in our [Privacy Policy](/privacy-policy).',
        },
      ],
    },
    {
      id: 'availability-and-support',
      title: 'Availability and support',
      blocks: [
        {
          type: 'p',
          text: 'We work to keep the service available and to fix problems quickly, but we do not promise that it will be uninterrupted or error-free. Planned maintenance, internet, telecom or power failures, problems at third-party hosting providers and events beyond our control may cause interruptions. Support is provided by email as described for your plan. Any specific service commitment must be written into an agreement signed by us.',
        },
      ],
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual property',
      blocks: [
        {
          type: 'p',
          text: `The ${SITE.name} software, design, logos and content belong to ${PARTY} or its licensors. While you have a subscription, we give you a limited, non-exclusive, non-transferable and revocable right to use the service for your own internal business. If you give us feedback, we may use it without obligation to you.`,
        },
      ],
    },
    {
      id: 'third-party-services',
      title: 'Third-party services',
      blocks: [
        {
          type: 'p',
          text: 'The service may link to, or rely on, services run by other companies. We are not responsible for those services or for how they handle your information, and your use of them may be subject to their own terms.',
        },
      ],
    },
    {
      id: 'disclaimers',
      title: 'Disclaimers',
      blocks: [
        {
          type: 'p',
          text: `To the extent the law allows, the service is provided "as is" and "as available". We do not promise that it will meet every requirement of your business. Reports and calculations depend on the data you enter.`,
        },
        {
          type: 'p',
          text: `${SITE.name} is a management tool. You remain responsible for the quality and safety of the work you do for your customers, for any licences you need, and for checking that your quotations, invoices and records meet applicable legal and tax requirements.`,
        },
      ],
    },
    {
      id: 'limitation-of-liability',
      title: 'Limitation of liability',
      blocks: [
        {
          type: 'p',
          text: `To the extent the law allows, ${PARTY} is not liable for indirect, incidental, special, consequential or punitive loss, or for loss of profit, revenue, goodwill or data.`,
        },
        {
          type: 'p',
          text: `Our total liability for any claim connected with the service is limited to the fees you paid us for the service in the ${LIABILITY_CAP_MONTHS} months before the event that gave rise to the claim. Nothing in these Terms limits liability that cannot be limited under applicable law.`,
        },
      ],
    },
    {
      id: 'indemnity',
      title: 'Indemnity',
      blocks: [
        {
          type: 'p',
          text: `You agree to protect ${PARTY} against claims, losses and reasonable costs that result from your breach of these Terms, your misuse of the service, or customer data that you had no right to use.`,
        },
      ],
    },
    {
      id: 'suspension-and-termination',
      title: 'Suspension and termination',
      blocks: [
        {
          type: 'p',
          text: 'You may stop using the service and cancel your subscription at any time, as described in our [Refund / Cancellation Policy](/refund-policy).',
        },
        {
          type: 'p',
          text: 'We may suspend or end your access if you breach these Terms, do not pay, or if your use creates a security or legal risk. Where it is reasonable to do so, we will tell you first.',
        },
        {
          type: 'p',
          text: `When a subscription ends, your right to use the service ends. We keep customer data for up to ${DATA_RETENTION_AFTER_CLOSURE_DAYS} days so you can export it, then delete or anonymise it, unless the law requires us to keep it longer. Sections that by their nature should continue, such as intellectual property, disclaimers, liability and governing law, continue after termination.`,
        },
      ],
    },
    {
      id: 'governing-law',
      title: 'Governing law and disputes',
      blocks: [
        {
          type: 'p',
          text: `These Terms are governed by the laws of India. If a dispute arises, please first write to us so we can try to resolve it in good faith. If it cannot be resolved that way, ${courts} have jurisdiction.`,
        },
      ],
    },
    {
      id: 'general',
      title: 'General',
      blocks: [
        {
          type: 'ul',
          items: [
            'If any part of these Terms is found to be unenforceable, the rest stays in effect.',
            'If we do not enforce a right straight away, that does not mean we have given it up.',
            'You may not transfer your rights under these Terms without our written consent.',
          ],
        },
      ],
    },
    {
      id: 'changes',
      title: 'Changes to these Terms',
      blocks: [
        {
          type: 'p',
          text: `We may update these Terms from time to time. For material changes, we will give you at least ${CHANGE_NOTICE_DAYS} days’ notice by email or through the service. If you keep using the service after the change takes effect, you accept the updated Terms. If you do not agree, you can cancel before the change takes effect.`,
        },
      ],
    },
  ],
}

/* ----------------------------------- Refunds ---------------------------------- */

export const REFUND: LegalDoc = {
  path: '/refund-policy',
  title: 'Refund / Cancellation Policy',
  seoTitle: 'Refund / Cancellation Policy | FSMFlow',
  description:
    'How to cancel an FSMFlow subscription, what happens to your billing cycle, when a refund may be available and how to request one.',
  intro: `This policy explains how to cancel a ${SITE.name} subscription, what happens to your billing cycle, and when a refund may be available. It applies to paid plans from ${PARTY} and sits alongside our [Terms and Conditions](/terms-and-conditions).`,
  sections: [
    {
      id: 'overview',
      title: 'Overview',
      blocks: [
        {
          type: 'ul',
          items: [
            'You can cancel your subscription at any time.',
            'Cancelling stops future renewals. You keep access until the end of the period you have already paid for.',
            'Refunds are limited and are considered case by case, as set out below.',
          ],
        },
        {
          type: 'p',
          text: 'If you have a written order form or agreement with us that has different cancellation or refund terms, those terms apply instead.',
        },
      ],
    },
    {
      id: 'how-to-cancel',
      title: 'How to cancel',
      blocks: [
        { type: 'p', text: 'To cancel, follow these steps:' },
        {
          type: 'ol',
          items: [
            `Email ${EMAIL} from the email address registered on your account, with the subject "Cancel subscription".`,
            'Include your business name and the plan you are on.',
            'We will confirm by email once your cancellation is processed.',
          ],
        },
        {
          type: 'p',
          text: `To avoid being charged for the next billing cycle, your cancellation request needs to reach us at least ${CANCELLATION_NOTICE_DAYS} days before your renewal date.`,
        },
      ],
    },
    {
      id: 'billing-cycle',
      title: 'What happens to your billing cycle',
      blocks: [
        {
          type: 'ul',
          items: [
            'Cancellation takes effect at the end of the billing cycle you have already paid for. You can keep using the service until then.',
            'We do not refund unused days or unused technician licences within a billing cycle that has started.',
            `After the cycle ends, your account is closed. We keep your customer data for up to ${DATA_RETENTION_AFTER_CLOSURE_DAYS} days so you can export it (see our [Privacy Policy](/privacy-policy)).`,
            'Amounts that were already due for the current cycle remain payable.',
          ],
        },
      ],
    },
    {
      id: 'refund-eligibility',
      title: 'When a refund may be available',
      blocks: [
        { type: 'p', text: 'We may refund a charge in these cases:' },
        {
          type: 'ul',
          items: [
            'you were charged twice, or the amount charged was wrong',
            'you were charged after a valid cancellation request that reached us in time',
            `you ask within ${REFUND_REQUEST_WINDOW_DAYS} days of the first payment on a new subscription, and a fault that we could not fix after reasonable effort stopped you from using the service`,
          ],
        },
        { type: 'p', text: 'Refunds are generally not available for:' },
        {
          type: 'ul',
          items: [
            'renewals that were charged because a cancellation was not requested in time',
            'part of a billing cycle that has already started, or licences that were not used',
            'one-time services such as onboarding, training or custom work once they have been delivered, unless we agreed otherwise in writing',
            'accounts suspended or ended because of a breach of our Terms',
          ],
        },
      ],
    },
    {
      id: 'request-a-refund',
      title: 'How to request a refund',
      blocks: [
        {
          type: 'p',
          text: `Email ${EMAIL} with the subject "Refund request" and include:`,
        },
        {
          type: 'ul',
          items: ['your business name and registered email address', 'the invoice number, date and amount', 'the reason for your request'],
        },
        {
          type: 'p',
          text: 'We may ask for more information. We will tell you our decision in writing.',
        },
      ],
    },
    {
      id: 'how-refunds-are-processed',
      title: 'How refunds are processed',
      blocks: [
        {
          type: 'p',
          text: `Approved refunds go back to the original payment method where possible and are processed within ${REFUND_PROCESSING_TIME}. Your bank or payment provider may take extra time to show the amount in your account. Any taxes collected on a refunded amount are handled as the law requires.`,
        },
      ],
    },
    {
      id: 'plan-changes',
      title: 'Changing your plan or team size',
      blocks: [
        {
          type: 'p',
          text: 'You can ask to move to a different plan or change the number of technicians on your account. How a change affects the charges for your current billing cycle is confirmed when you make the request.',
        },
      ],
    },
  ],
}
