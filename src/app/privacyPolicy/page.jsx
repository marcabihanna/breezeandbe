import Back from "@/components/TermsAndConditions/Back";

export const metadata = {
  title: "PRIVACY POLICY",
};

const PrivacyPolicy = () => {
  return (
    <div className="pt-[150px] pb-14 px-10 mx-5 md:mx-[95px] lg:mx-[120px] bg-white flex flex-col space-y-7 border-x-2 border-gray-500 overflow-y-hidden">
      <Back />
      <div>
        <h1 className="text-3xl font-medium">PRIVACY POLICY:</h1>
      </div>

      <div>Effective Date: [13.12.23]</div>

      <div>
        Welcome to Breeze and Be! This Privacy Policy outlines how we handle
        your personal information when you interact with our services. By using
        our website, making purchases, or communicating with us, you agree to
        the terms outlined below.
      </div>

      <div>
        <span className="font-semibold">Changes to Privacy Policy:</span> We may
        update this policy to reflect operational, legal, or regulatory changes.
        Check the &quot;Last updated&quot; date on our site for the latest
        version.
      </div>

      <div>
        <span className="font-semibold">
          Collection and Use of Your Personal Information:
        </span>{" "}
        To provide our services, we collect personal information from various
        sources. This includes information you provide directly, such as contact
        details and order information, as well as data collected through cookies
        for website optimization.
      </div>

      <div className="flex flex-col space-y-7">
        <span className="font-semibold">Information We Collect:</span>

        <ul className="list-disc ml-10 flex flex-col space-y-7">
          <li className="pl-3">
            Directly from You: Basic contact details, order information,
            shopping history, and customer support interactions.
          </li>
          <li className="pl-3">
            Through Cookies: Usage data, including device information, browser
            details, and interactions with our site
          </li>
        </ul>
      </div>

      <div>
        <span className="font-semibold">
          How We Use Your Personal Information:
        </span>{" "}
        We use your information to provide services, process orders, and enhance
        your experience. This includes marketing, security, and communication
        purposes. We do not control user-generated content&apos;s privacy once
        shared publicly.
      </div>

      <div>
        <span className="font-semibold">Cookies:</span> We use cookies for site
        functionality and analytics. You can adjust your browser settings to
        manage cookies, but this may affect certain features.
      </div>

      <div>
        <span className="font-semibold">
          Disclosure of Personal Information:
        </span>{" "}
        We may share your information with third parties for legitimate
        purposes, such as service providers, business partners, and in specific
        business transactions. We have not sold sensitive personal information.
      </div>

      <div>
        <span className="font-semibold">Third-Party Websites and Links:</span>{" "}
        Links on our site to third-party platforms have their own privacy
        policies. We are not responsible for their practices, and you should
        review their terms when accessing them.
      </div>

      <div>
        <span className="font-semibold">Children&apos;s Data:</span> Our
        services are not for children, and we do not knowingly collect their
        personal information.
      </div>

      <div>
        <span className="font-semibold">Security and Retention:</span> While we
        implement security measures, no system is perfect. Use secure channels
        for sensitive information. Data retention depends on various factors.
      </div>
      <div>
        <span className="font-semibold">Your Rights and Choices:</span>{" "}
        Depending on your location, you may have rights like access, deletion,
        correction, and opting out of targeted advertising. We respect your
        choices and provide avenues for managing communication preferences.
      </div>
      <div>
        <span className="font-semibold">Complaints:</span> If you have concerns,
        contact us. If unsatisfied, you may appeal or lodge a complaint with
        your local data protection authority.
      </div>
      <div>
        <span className="font-semibold">International Users:</span> Your
        information may be processed outside your country, including in the
        United States. We ensure data transfers comply with relevant
        regulations.
      </div>

      <div>
        <span className="font-semibold">Contact Us:</span> For questions or to
        exercise your rights, contact us at{" "}
        <a
          href="mailto:info@breezeandbe.com"
          className="text-blue-500 underline"
        >
          info@breezeandbe.com
        </a>
        .
      </div>
      <div>Thank you for trusting Breeze and Be with your information!</div>
    </div>
  );
};

export default PrivacyPolicy;
