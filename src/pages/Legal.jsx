import { useState } from "react";
import { Search, ChevronUp, ChevronDown } from "lucide-react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function LegalDocuments() {
  const [activeTab, setActiveTab] = useState("terms");
  const [mobileTabsOpen, setMobileTabsOpen] = useState(false);

  const allTabs = [
    {
      id: "terms",
      label: "Terms & Conditions",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-5 h-5 transition-transform group-hover:scale-110" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>`,
    },
    {
      id: "privacy",
      label: "Privacy Policy",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield w-5 h-5 transition-transform group-hover:scale-110" aria-hidden="true"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>`,
    },
    {
      id: "acceptable",
      label: "Acceptable Use Policy",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-alert w-5 h-5 transition-transform scale-110" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>`,
    },
  ];
  const tabs = [
    allTabs.find((tab) => tab.id === activeTab),
    ...allTabs.filter((tab) => tab.id !== activeTab),
  ];

  const activeTabData = tabs[0];
  const inactiveTabs = tabs.slice(1);

  return (
    <>
      <Navbar />
      <div class="px-4 sm:px-8 md:px-16 lg:px-[120px] py-8 sm:py-12 md:py-[60px] bg-gradient-to-br from-[#f8fafb] via-white to-[#f0f4f8] relative overflow-hidden">
        <div class="absolute inset-0 opacity-5">
          <div class="absolute top-10 left-20 w-72 h-72 bg-[#1c8540] rounded-full blur-3xl"></div>
          <div class="absolute bottom-10 right-20 w-96 h-96 bg-[#8DBDFF] rounded-full blur-3xl"></div>
        </div>
        <div class="max-w-[1200px] h-[188px] lg:h-[200px] top-[6rem] lg:top-[5rem] mx-auto text-center relative z-10">
          <h1 class="text-[32px] sm:text-[42px] md:text-[56px] mb-[12px] md:mb-[16px] bg-gradient-to-r from-[#1c8540] to-[#156a33] bg-clip-text text-transparent">
            LEGAL TERMS
          </h1>
          <p class="text-base sm:text-[18px] md:text-xl text-[#353535]">
            Have questions? We're here to help
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-gray-50 md:px-28 px-5 py-8 sm:py-12 md:py-[80px] relative">
        <div className="mx-auto max-w-7xl">
          {/* Search Bar */}
          {/* <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search legal documents..."
                className="w-full text-base rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-gray-700 placeholder:text-gray-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
          </div> */}

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-[60px]">
            {/* Left Sidebar - Sticky */}
            <div className="lg:w-[320px] shrink-0">
              <div className="sticky top-8 overflow-hidden rounded-[16px] lg:rounded-[20px] border border-[#e5e5e5] bg-white shadow-lg">
                <div class="hidden lg:block p-[20px] border-b border-[#e5e5e5] bg-gradient-to-r from-[#f8fafb] to-white">
                  <p class="text-sm text-[#999] uppercase tracking-wider">
                    Legal Documents
                  </p>
                </div>

                {/* Mobile: Tabs accordion header */}
                <button
                  onClick={() => setMobileTabsOpen(!mobileTabsOpen)}
                  className="flex w-full justify-between gap-3 px-6 py-4 text-left lg:hidden left bg-gradient-to-r from-[#1c8540] to-[#1c8540]/90 text-white"
                >
                  <div className="flex items-center gap-3">
                    {activeTabData && (
                      <span
                        dangerouslySetInnerHTML={{ __html: activeTabData.icon }}
                      />
                    )}
                    <span className="text-base">{activeTabData.label}</span>
                  </div>
                  {mobileTabsOpen ? (
                    <ChevronUp className="h-5 w-5 shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 shrink-0" />
                  )}
                </button>
                <nav
                  className={`lg:block ${mobileTabsOpen ? "block" : "hidden"}`}
                >
                  {inactiveTabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setMobileTabsOpen(false);
                        }}
                        className="flex lg:hidden w-full items-center gap-3 rounded-l px-6 py-4 text-left text-sm border-b border-[#e5e5e5] last:border-b-0 hover:bg-[#f8fafb] transition-all"
                      >
                        <span dangerouslySetInnerHTML={{ __html: Icon }} />
                        <p className="text-base text-[#353535]">{tab.label}</p>
                      </button>
                    );
                  })}
                  {allTabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`hidden lg:flex w-full gap-3 px-6 py-[20px] text-left border-b border-[#e5e5e5] last:border-b-0 text-base group bg-white text-[#353535] hover:bg-[#f8fafb] hover:pl-[28px] transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-[#1c8540] to-[#1c8540]/90 text-white rounded-none"
                            : "text-[#353535] hover:bg-[#f8fafb]"
                        }`}
                      >
                        <span dangerouslySetInnerHTML={{ __html: Icon }} />
                        <span className="text-base flex-1">{tab.label}</span>
                        {isActive && (
                          <span className="h-2 w-2 rounded-full bg-white" />
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Right Content Area - Scrollable */}
            <div className="flex-1">
              <div className="relative rounded-2xl md:rounded-[20px] border border-[#e5e5e5] bg-white shadow-lg">
                <div
                  className={`max-h-[600px] sm:max-h-[700px] md:max-h-[800px] overflow-y-auto scroll-smooth p-6 sm:p-8 md:p-[48px] my-container`}
                >
                  {activeTab === "terms" && <TermsContent />}
                  {activeTab === "privacy" && <PrivacyContent />}
                  {activeTab === "acceptable" && <AcceptableContent />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Accordion({ title, number, children, defaultOpen = true }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex group-hover:text-[#1c8540] gro w-full items-start justify-between gap-4 text-left"
      >
        <h2 className="text-[28px] text-[#353535] transition-colors">
          {number}. {title}
        </h2>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 shrink-0 text-[#1c8540]" />
        ) : (
          <ChevronDown className="h-6 w-6 shrink-0 text-[#1c8540]" />
        )}
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
}

function TermsContent() {
  return (
    <div className="max-w-none">
      <h1 className="text-[40px] mb-[24px] text-[#1c8540]">
        Terms &amp; Conditions for Savey (A Product of Cre8ng Digitals)
      </h1>
      <p className="text-base mb-8 text-[#666]">
        <strong>Last Updated: </strong> 20th November 2025
      </p>
      <p className="text-base text-[#353535] mb-6">
        Welcome to <strong>Savey</strong>, a budgeting and spending-management
        product provided by <strong>Cre8ng Digitals Ltd</strong> ("we", "us",
        "our"). By accessing or using Savey, you agree to these Terms and
        Conditions.
      </p>
      <hr className="my-8 border-[#e5e5e5]" />

      <h2 className="text-[28px] mb-4 text-[#353535]">
        1. Acceptance of Terms
      </h2>

      <p className="text-base text-[#353535] mb-4">
        By using Savey, you confirm that you:
      </p>

      <ul className="text-base text-[#353535] mb-6 pl-6 list-disc">
        <li>Are at least 18 years old;</li>
        <li>Have the legal capacity to enter into agreements;</li>
        <li>Have read, understood, and agreed to these Terms.</li>
      </ul>

      <p className="text-base text-[#353535] mb-6">
        If you do not agree, please discontinue use of the platform.
      </p>

      <hr className="my-8 border-[#e5e5e5]"></hr>

      <h2 className="text-[28px] mb-4 text-[#353535]">2. About Savey</h2>

      <p className="text-base text-[#353535] mb-4">
        Savey is a <strong>budgeting and financial-management tool</strong> that
        helps users track spending, create budgets, set goals, and view
        financial insights.{" "}
        <strong>
          Savey is not a bank, wallet operator, lender, investment service, or
          financial institution.
        </strong>
      </p>

      <p className="text-base text-[#353535] mb-6">
        All payments, virtual accounts, deposits, and withdrawals on Savey are{" "}
        <strong>
          processed and held by licensed payment partners (Paystack and its
          banking partners)
        </strong>
        .
      </p>
      <hr className="my-8 border-[#e5e5e5]"></hr>
      <h2 className="text-[28px] mb-4 text-[#353535]">3. User Accounts</h2>
      <p className="text-base text-[#353535] mb-4">
        To use Savey, you must create an account. You agree to:
      </p>
      <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
        <li>Provide accurate information;</li>
        <li>Keep your login credentials confidential;</li>
        <li>Notify us immediately of unauthorized access.</li>
      </ul>
      <p className="text-base text-[#353535] mb-6">
        We may suspend or terminate accounts involved in suspicious, fraudulent,
        or abusive behaviour.
      </p>
      <hr className="my-8 border-[#e5e5e5]"></hr>
      <h2 className="text-[28px] mb-4 text-[#353535]">
        4. How Savey Handles Money
      </h2>
      <p className="text-base text-[#353535] mb-4">
        Savey displays a <strong>virtual balance</strong> that represents your
        budgeting allocations. This is <strong>not stored value</strong>. All
        real funds are held by our licensed payment partners.
      </p>
      <h3 className="text-xl mb-3 text-[#353535]">Savey does NOT:</h3>
      <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
        <li>Hold customer funds;</li>
        <li>Provide peer-to-peer (user-to-user) transfers;</li>
        <li>Offer loans, interest, or investment services;</li>
        <li>Process withdrawals internally.</li>
      </ul>
      <h3 className="text-xl mb-3 text-[#353535]">Savey DOES:</h3>
      <ul className="text-base text-[#353535] mb-6 list-disc pl-6">
        <li>Show budget and spending allocations;</li>
        <li>Use Paystack to process deposits and withdrawals;</li>
        <li>Allow withdrawals only to the user's verified bank account.</li>
      </ul>
      <hr className="my-8 border-[#e5e5e5]"></hr>
      <h2 className="text-[28px] mb-4 text-[#353535]">
        5. Funding and Withdrawals
      </h2>
      <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
        <li>
          Users may fund their Savey balance via Paystack-issued virtual
          accounts.
        </li>
        <li>
          Withdrawals are processed through Paystack and can only be made to the
          user's own bank account.
        </li>
        <li>
          Settlement timelines (e.g., T+1) are determined by Paystack and
          partner banks.
        </li>
      </ul>
      <p className="text-base text-[#353535] mb-6">
        We are not responsible for delays caused by banks, payment processors,
        or external networks.
      </p>
      <hr className="my-8 border-[#e5e5e5]"></hr>
      <h2 className="text-[28px] mb-4 text-[#353535]">
        6. Prohibited Activities
      </h2>
      <p className="text-base text-[#353535] mb-4">
        Users must not use Savey to:
      </p>
      <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
        <li>Launder money or engage in fraud;</li>
        <li>Circumvent financial regulations;</li>
        <li>Conduct P2P transfers through alternative means;</li>
        <li>Manipulate or abuse the platform;</li>
        <li>Upload false information.</li>
      </ul>
      <p className="text-base text-[#353535] mb-6">
        Violations may result in immediate account restrictions or closure.
      </p>
      <hr className="my-8 border-[#e5e5e5]"></hr>
      <h2 className="text-[28px] mb-4 text-[#353535]">7. Fees</h2>
      <p className="text-base text-[#353535] mb-6">
        Savey may charge fees for certain services. All fees will be
        transparently communicated in-app. By using the service, you agree to
        any applicable charges.
      </p>
      <hr className="my-8 border-[#e5e5e5]"></hr>
      <h2 className="text-[28px] mb-4 text-[#353535]">
        8. Data Protection &amp; Privacy
      </h2>
      <p className="text-base text-[#353535] mb-6">
        We process user data in accordance with our{" "}
        <strong>Privacy Policy</strong> and Nigerian Data Protection regulation.
        Savey (Cre8ng Digitals) will never sell user data.
      </p>
      <hr className="my-8 border-[#e5e5e5]"></hr>
      <h2 className="text-[28px] mb-4 text-[#353535]">
        9. Service Availability
      </h2>
      <p className="text-base text-[#353535] mb-4">
        Savey is provided on an "as-is" basis. We do not guarantee uninterrupted
        access. Maintenance, updates, third-party outages, or regulatory actions
        may affect availability.
      </p>
      <p className="text-base text-[#353535] mb-6">
        We shall not be liable for losses due to downtime or service disruptions
        beyond our control.
      </p>
      <hr className="my-8 border-[#e5e5e5]"></hr>
      <h2 className="text-[28px] mb-4 text-[#353535]">
        10. Intellectual Property
      </h2>
      <p className="text-base text-[#353535] mb-6">
        All trademarks, code, features, designs, and content on Savey belong to
        Cre8ng Digitals. Users may not copy, reverse-engineer, or misuse our
        platform.
      </p>
      <hr className="my-8 border-[#e5e5e5]"></hr>
      <h2 className="text-[28px] mb-4 text-[#353535]">
        11. Limitation of Liability
      </h2>
      <p className="text-base text-[#353535] mb-4">
        To the fullest extent permitted by law:
      </p>
      <ul className="text-base text-[#353535] mb-6 list-disc pl-6">
        <li>Savey is not liable for financial decisions made by the user;</li>
        <li>We are not liable for payment processor delays/failures;</li>
        <li>We are not liable for losses caused by third-party systems.</li>
      </ul>
      <p className="text-base text-[#353535] mb-6">
        Your use of the platform is at your sole risk.
      </p>
      <hr className="my-8 border-[#e5e5e5]"></hr>
      <h2 className="text-[28px] mb-4 text-[#353535]">12. Changes to Terms</h2>
      <p className="text-base text-[#353535] mb-6">
        We may update these Terms when necessary. Users will be notified through
        the app or email. Continued use constitutes acceptance of updates.
      </p>
      <hr className="my-8 border-[#e5e5e5]"></hr>
      <h2 className="text-[28px] mb-4 text-[#353535]">
        13. Contact Information
      </h2>
      <p className="text-base text-[#353535] mb-4">For support or questions:</p>
      <p className="text-base text-[#353535]">
        <strong>Cre8ng Digital Innovation</strong>
        <br />
        Email:{" "}
        <a
          href="mailto:help@getsavey.com"
          className="text-[#1c8540] hover:underline"
        >
          help@getsavey.com
        </a>
        <br />
        Website:{" "}
        <Link
          to="https://getsavey.com"
          className="text-[#1c8540] hover:underline"
        >
          https://getsavey.com
        </Link>
      </p>
    </div>
  );
}

function PrivacyContent() {
  return (
    <div className="max-w-none">
      <h1 className="text-[40px] mb-6 text-[#1c8540]">
        Privacy Policy for Savey (A Product of Cre8ng Digitals)
      </h1>
      <p className="text-base mb-8 text-[#666]">
        <strong>Last Updated: </strong> 20th November 2025
      </p>
      <p className="text-base text-[#353535] mb-6">
        Cre8ng Digitals Ltd ("we", "our", "us") operates the Savey application
        and is committed to protecting your privacy and personal information.
        This Privacy Policy explains how we collect, use, store, and safeguard
        your data when you use Savey.
      </p>
      <hr className="mt-8 mb-4 border-[#e5e5e5]" />
      <Accordion title="Information We Collect" number={1}>
        <p className="text-base text-[#353535] mb-4">
          We collect the following categories of information:
        </p>
        <h3 className="text-xl mb-3 text-[#353535]">a. Personal Information</h3>
        <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
          <li>Full name</li>
          <li>Phone number</li>
          <li>Email address</li>
          <li>Date of birth</li>
          <li>
            BVN or other identity verification details (where required for
            withdrawals)
          </li>
        </ul>

        <h3 className="text-xl mb-3 text-[#353535]">
          b. Financial &amp; Transaction Information
        </h3>
        <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
          <li>Deposits and withdrawals processed through Paystack</li>
          <li>Virtual account details</li>
          <li>Bank transfer details</li>
          <li>Spending categories and budgets</li>
        </ul>

        <h3 className="text-xl mb-3 text-[#353535]">
          c. Device &amp; Usage Information
        </h3>
        <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
          <li>Device type</li>
          <li>IP address</li>
          <li>App interactions</li>
          <li>Log data and crash analytics</li>
        </ul>

        <h3 className="text-xl mb-3 text-[#353535]">
          d. Cookies &amp; Tracking
        </h3>
        <p className="text-base text-[#353535] mb-4">
          We may use cookies and similar technologies to improve app
          functionality and user experience.
        </p>
      </Accordion>
      <Accordion title="How We Use Your Information" number={2}>
        <p className="text-base text-[#353535] mb-4">
          We use your information to:
        </p>
        <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
          <li>Provide the Savey budgeting and financial management service</li>
          <li>Process deposits and withdrawals via Paystack</li>
          <li>Personalize spending insights and financial recommendations</li>
          <li>Enhance app functionality and improve user experience</li>
          <li>Comply with regulatory and security requirements</li>
          <li>Prevent fraud and unauthorized activities</li>
        </ul>
        <p className="text-base text-[#353535]">
          We do <strong>not</strong> sell personal data to third parties.
        </p>
      </Accordion>
      <Accordion title="How Funds Are Handled" number={3}>
        <p className="text-base text-[#353535] mb-4">
          Savey does <strong>not</strong> store or hold customer funds.
        </p>
        <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
          <li>
            All payments, settlements, and virtual accounts are managed by{" "}
            <strong>Paystack and its partner banks</strong>.
          </li>
          <li>
            Savey only displays a <strong>virtual ledger</strong> to help users
            plan budgets and track spending.
          </li>
          <li>
            Withdrawals are executed directly from Paystack to the user's bank
            account.
          </li>
        </ul>
      </Accordion>
      <Accordion title="Sharing of Information" number={4}>
        <p className="text-base text-[#353535] mb-4">
          We may share limited user information with:
        </p>
        <h3 className="text-xl mb-3 text-[#353535]">a. Payment Partners</h3>
        <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
          <li>Paystack (payment processing, virtual accounts, withdrawals)</li>
          <li>Partner banks (e.g., Titan Bank, Providus Bank, Wema Bank)</li>
        </ul>
        <h3 className="text-xl mb-3 text-[#353535]">b. Service Providers</h3>
        <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
          <li>Cloud hosting</li>
          <li>Customer support tools</li>
          <li>Analytics platforms (e.g., Google Firebase, Crashlytics)</li>
        </ul>
        <h3 className="text-xl mb-3 text-[#353535]">
          c. Regulatory Authorities (if required by law)
        </h3>
        <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
          <li>NDPC (Data Protection Commission)</li>
          <li>Law enforcement and financial crime agencies</li>
        </ul>
        <p className="text-base text-[#353535]">
          We do <strong>not</strong> share your information for advertising or
          marketing resale.
        </p>
      </Accordion>
      <Accordion title="How We Protect Your Data" number={5}>
        <p className="text-base text-[#353535] mb-4">
          We implement industry-standard security measures:
        </p>
        <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
          <li>HTTPS and encryption-in-transit</li>
          <li>Encrypted storage where required</li>
          <li>Tokenized payment processing via Paystack</li>
          <li>Role-based access control on backend systems</li>
        </ul>
        <p className="text-base text-[#353535]">
          Users are responsible for protecting their login credentials.
        </p>
      </Accordion>
      <Accordion title="Data Retention" number={6}>
        <p className="text-base text-[#353535] mb-4">
          We retain user information for as long as your account is active and
          as required for:
        </p>
        <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
          <li>Compliance</li>
          <li>Fraud prevention</li>
          <li>Financial record keeping</li>
        </ul>
        <p className="text-base text-[#353535]">
          You may request deletion, but some data must remain stored for
          statutory retention periods.
        </p>
      </Accordion>
      <Accordion title="Your Rights" number={7}>
        <p className="text-base text-[#353535] mb-4">
          Under Nigerian Data Protection laws, you have the right to:
        </p>
        <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
          <li>Access your personal data</li>
          <li>Request corrections</li>
          <li>Request deletion (where applicable)</li>
          <li>Object to processing</li>
          <li>Withdraw consent for non-essential data processing</li>
        </ul>
        <p className="text-base text-[#353535]">
          Requests can be sent to our support email.
        </p>
      </Accordion>
      <h2 className="text-[28px] my-[16px] text-[#353535]">
        8. Third-Party Links
      </h2>
      <p className="text-base text-[#353535] mb-6">
        Savey may contain links to third-party sites. We are not responsible for
        the privacy practices of those websites.
      </p>
      <hr className="my-8 border-[#e5e5e5]" />
      <h2 className="text-[28px] my-[16px] text-[#353535]">
        9. Children's Privacy
      </h2>
      <p className="text-base text-[#353535] mb-6">
        Savey is not intended for individuals under 18 years. We do not
        knowingly collect data from minors.
      </p>
      <hr className="my-8 border-[#e5e5e5]" />
      <h2 className="text-[28px] my-4 text-[#353535]">
        10. Changes to This Policy
      </h2>
      <p className="text-base text-[#353535] mb-6">
        We may modify this policy from time to time. Updates will be posted on
        our website or app.
      </p>
      <hr className="my-8 border-[#e5e5e5]" />
      <h2 className="text-[28px] mb-4 text-[#353535]">11. Contact Us</h2>
      <p className="text-[16px] text-[#353535] mb-4">
        For privacy-related concerns:
      </p>
      <p className="text-[16px] text-[#353535]">
        <strong>Cre8ng Digital Innovation</strong>
        <br />
        Email:{" "}
        <a
          href="mailto:help@getsavey.com"
          className="text-[#1c8540] hover:underline"
        >
          help@getsavey.com
        </a>
        <br />
        Website:{" "}
        <Link
          to="https://getsavey.com"
          className="text-[#1c8540] hover:underline"
        >
          https://getsavey.com
        </Link>
      </p>
      <hr className="my-8 border-[#e5e5e5]" />
      <p className="text-sm text-[#666]">
        This Privacy Policy ensures Savey remains compliant with NDPR/NDPC and
        clearly defines how user data is collected and protected.
      </p>
    </div>
  );
}

function AcceptableContent() {
  return (
    <div className="max-w-none">
      <h1 className="text-[40px] mb-6 text-[#1c8540]">Cookie Policy</h1>
      <p className="text-base mb-8 text-[#666]">
        <strong>Last Updated: </strong> 20th November 2025
      </p>
      <p className="text-base text-[#353535]">
        Content coming soon. This section will explain how Savey uses cookies
        and similar technologies to enhance your experience.
      </p>
      <div>
        <h1 className="text-[40px] mb-6 text-[#1c8540]">
          Savey Acceptable Use Policy
        </h1>
        <p className="text-base mb-8 text-[#666]">
          <strong>Last Updated: </strong> 20th November 2025
        </p>
        <p className="text-base text-[#353535] mb-6">
          This Acceptable Use Policy ("Policy") explains activities that are not
          allowed on Savey. By using Savey, you agree to follow these rules to
          keep our platform secure, compliant, and safe for everyone.
        </p>
        <hr className="my-8 border-[#e5e5e5]" />

        <Accordion title="No Illegal or Unlawful Transactions" number={1}>
          <p className="text-base text-[#353535] mb-4">
            You must not use Savey for any activity that violates Nigerian law,
            including but not limited to:
          </p>
          <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
            <li>Fraud</li>
            <li>Money laundering</li>
            <li>Terrorist financing</li>
            <li>Identity theft</li>
            <li>Stolen funds</li>
            <li>Unauthorized card usage</li>
          </ul>
          <p className="text-base text-[#353535]">
            Savey will immediately restrict or close accounts involved in
            suspicious activity.
          </p>
        </Accordion>
        <Accordion
          title="No User-to-User (P2P) Transfers — Temporarily Disabled"
          number={2}
        >
          <p className="text-[#353535] mb-4">
            Savey does <strong>not currently support</strong> user-to-user (P2P)
            transfers. At this time, users may only:
          </p>
          <ul className="text-[#353535] mb-4 list-disc pl-6">
            <li>
              Transfer funds to their <strong>own bank account</strong>, or
            </li>
            <li>
              Move funds within <strong>their own Savey account</strong> (e.g.,
              goals, budgets)
            </li>
          </ul>
          <p className="text-[#353535]">
            This feature is <strong>temporarily disabled</strong> while we
            upgrade our wallet infrastructure in partnership with licensed
            financial providers.
          </p>
        </Accordion>
        <Accordion title="No Arbitrage or Money Cycling" number={3}>
          <p className="text-base text-[#353535] mb-4">
            Savey must not be used for:
          </p>
          <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
            <li>Repeated deposits and withdrawals for value rotation</li>
            <li>Circular transactions</li>
            <li>Cash-flipping or arbitrage schemes</li>
            <li>Any activity designed to manipulate financial systems</li>
          </ul>
          <p className="text-base text-[#353535]">
            These patterns trigger compliance flags with financial partners.
          </p>
        </Accordion>
        <Accordion title="No High-Risk Transactions" number={4}>
          <p className="text-base text-[#353535] mb-4">
            You may not use Savey for:
          </p>
          <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
            <li>Betting or gambling settlements</li>
            <li>Ponzi or pyramid schemes</li>
            <li>Crypto cash-outs or third-party crypto settlements</li>
            <li>Forex trading settlements</li>
            <li>Donations or fundraising outside approved channels</li>
          </ul>
        </Accordion>
        <Accordion title="No Third-Party Withdrawals or Deposits" number={5}>
          <p className="text-base text-[#353535] mb-4">
            All wallet activity must belong to the same user. You cannot:
          </p>
          <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
            <li>Withdraw to someone else's bank account</li>
            <li>Fund your wallet using another person's card or account</li>
            <li>Use Savey as a pass-through channel</li>
          </ul>
        </Accordion>
        <Accordion
          title="No Business or Commercial Transactions (Without Approval)"
          number={6}
        >
          <p className="text-base text-[#353535] mb-4">
            Savey is designed for personal budgeting and spending management.
            You must not use it for:
          </p>
          <ul className="text-base text-[#353535] mb-4 list-disc pl-6">
            <li>Merchant payments</li>
            <li>Selling goods/services</li>
            <li>Payroll or staff payments</li>
            <li>Business settlements</li>
          </ul>
          <p className="text-base text-[#353535]">
            Unless you have written approval from Savey.
          </p>
        </Accordion>

        <h2 className="text-[28px] my-4 text-[#353535]">
          7. Account Integrity Requirements
        </h2>
        <p className="text-base text-[#353535] mb-4">Users must:</p>
        <ul className="text-base text-[#353535] mb-6 list-disc pl-6">
          <li>Use real personal information</li>
          <li>Not create multiple fake accounts</li>
          <li>Not impersonate others</li>
          <li>Not misuse referral systems or bonuses</li>
        </ul>
        <p className="text-base text-[#353535] mb-6">
          Savey may freeze, suspend, or terminate accounts that violate these
          terms.
        </p>
        <hr className="my-4 border-[#e5e5e5]" />
        <h2 className="text-[28px] mb-4 text-[#353535]">
          8. Compliance With Our Financial Partners
        </h2>
        <p className="text-base text-[#353535] mb-4">
          Savey uses licensed payment providers and banks to process deposits
          and withdrawals. You must comply with their rules and risk checks. Any
          activity that triggers a partner restriction may lead to temporary or
          permanent limits on your Savey account.
        </p>
        <hr className="my-4 border-[#e5e5e5]" />

        <h2 className="text-[28px] mb-4 text-[#353535]">
          9. Enforcement and Actions Savey May Take
        </h2>
        <p className="text-base text-[#353535] mb-4">
          If you violate this Policy, Savey may:
        </p>
        <ul className="text-base text-[#353535] mb-6 list-disc pl-6">
          <li>Freeze your account</li>
          <li>Restrict deposits/withdrawals</li>
          <li>Request verification</li>
          <li>Report activity to partners or regulators</li>
          <li>Close your account permanently</li>
        </ul>
        <hr className="my-4 border-[#e5e5e5]" />
        <h2 className="text-[28px] mb-4 text-[#353535]">
          10. Updates to This Policy
        </h2>
        <p className="text-base text-[#353535] mb-6">
          Savey may update this Policy as needed to comply with regulations,
          partner requirements, or risk management standards. Continuing to use
          Savey after updates means you agree to the new rules.
        </p>
      </div>
    </div>
  );
}
