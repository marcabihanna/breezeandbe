import Sections from "@/components/TermsAndConditions/Sections";
import Back from "@/components/TermsAndConditions/Back";

export const metadata = {
  title: "TERMS OF SERVICE",
};

const TermsOfServices = () => {
  return (
    <div className="pt-[150px] pb-14 px-10 mx-5 md:mx-[95px] lg:mx-[120px] bg-white flex flex-col space-y-7 border-x-2 border-gray-500 overflow-y-hidden">
      <Back />
      <div>
        <h1 className="text-3xl font-medium">Terms of Service:</h1>
      </div>
      <div>
        <h1 className="text-3xl font-medium">Medical Disclaimer:</h1>
      </div>

      <div>
        At Breeze and Be, we value your well-being and are committed to
        providing helpful information. However, it&apos;s important to note that
        the content on this website, including text, graphics, images, and other
        materials, is intended for informational purposes only. It is not a
        substitute for professional medical advice, diagnosis, or treatment.
      </div>

      <div>
        We encourage you to consult with your healthcare provider for
        personalized advice regarding your skincare needs. The information
        shared here is general in nature and may not be suitable for everyone.
        Never disregard professional medical advice or delay seeking it because
        of information found on this website.
      </div>
      <div>
        In case of a medical emergency, please contact your doctor or dial
        emergency services immediately. Breeze and Be does not endorse specific
        tests, physicians, products, or procedures mentioned on the site
      </div>
      <div>
        Your health is important, and we want to support you in making informed
        decisions. Thank you for trusting Breeze and Be as a resource for
        skincare information
      </div>

      <div>
        <span className="font-semibold">Overview:</span> Operated by Breeze &
        Be, this website provides information, tools, and services, collectively
        referred to as the &quot;Service.&quot; By accessing or purchasing from
        the site, you agree to comply with the terms and conditions outlined in
        these Terms of Service.
      </div>

      <ul className="list-decimal flex flex-col space-y-7 ml-10">
        {/* 1 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Online Store Terms:</span> By agreeing
          to these terms, you confirm that you are of legal age in your
          jurisdiction. You agree not to use our products for any illegal or
          unauthorized purposes. Violation of these terms will result in
          immediate termination of services.
        </li>
        {/* 2 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">General Conditions: </span> We reserve
          the right to refuse service to anyone for any reason. Your content,
          excluding credit card information, may be transferred unencrypted.
          Reproduction or exploitation of the service without written permission
          is prohibited.
        </li>
        {/* 3 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Accuracy of Information: </span> We
          are not responsible for inaccuracies in the information provided on
          the site. Users are encouraged to consult primary sources for
          decision-making. Historical information may not be current, and we
          reserve the right to modify site content without notice.
        </li>
        {/* 4 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Modifications and Prices: </span>{" "}
          Product prices are subject to change without notice. We may modify or
          discontinue the Service at any time without liability. We are not
          responsible for any consequences resulting from changes, suspensions,
          or discontinuations.
        </li>
        {/* 5 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Products: </span> Some products may be
          exclusively available online and subject to limited quantities.
          Product descriptions and images are provided for reference, but we do
          not guarantee color accuracy. We reserve the right to limit sales on a
          case-by-case basis.
        </li>
        {/* 6 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">
            Billing and Account Information:{" "}
          </span>{" "}
          We reserve the right to refuse any order and may limit or cancel
          quantities. You agree to provide accurate account information. For
          more details, refer to our Refund Policy.
        </li>
        {/* 7 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Optional Tools: </span> Third-party
          tools are provided as-is, without warranties. Your use of optional
          tools is at your own risk. New features and services will also be
          subject to these Terms of Service.
        </li>
        {/* 8 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Third-Party Links: </span> Third-party
          links on our site are not affiliated with us, and we are not
          responsible for their content. Use third-party materials at your own
          risk, and review their policies before engaging in transactions.
        </li>
        {/* 9 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">User Comments and Submissions: </span>{" "}
          Comments submitted to us may be used without restriction. We may
          monitor, edit, or remove content at our discretion. Your comments must
          not violate third-party rights or contain unlawful material.
        </li>
        {/* 10 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Personal Information: </span>{" "}
          Submission of personal information is governed by our Privacy Policy.
        </li>
        {/* 11 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">
            Errors, Inaccuracies, and Omissions:{" "}
          </span>{" "}
          We are not responsible for typographical errors, inaccuracies, or
          omissions in the Service. We reserve the right to correct such errors,
          update information, or cancel orders without prior notice. No
          obligation exists to update information in the Service
        </li>
        {/* 12 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Prohibited Uses: </span> The site and
          its content must not be used for unlawful purposes. Prohibited
          activities include solicitation of unlawful acts, violation of
          intellectual property rights, and interference with the security
          features of the Service.
        </li>
        {/* 13 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">
            Disclaimer of Warranties; Limitation of Liability:{" "}
          </span>{" "}
          We do not guarantee uninterrupted, secure, or error-free use of the
          Service. The Service is provided &quot;as is&quot; and &quot;as
          available.&quot; We shall not be liable for any damages, including
          indirect, consequential, or incidental damages, arising from the use
          of the Service.
        </li>
        {/* 14 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Indemnification: </span> You agree to
          indemnify and hold Breeze & Be harmless from any third-party claims
          arising from your breach of these Terms of Service or violation of
          laws. This includes reasonable attorneys&apos; fees.
        </li>
        {/* 15 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Severability: </span> If any provision
          of these Terms of Service is deemed unlawful, void, or unenforceable,
          it will be enforced to the fullest extent permitted by applicable law.
          The unenforceable portion will be deemed severed from the agreement.
        </li>
        {/* 16 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Termination: </span> These Terms of
          Service are effective until terminated by either party. You may
          terminate by notifying us, or by ceasing to use our site. We may
          terminate for non-compliance without notice. Obligations incurred
          before termination survive.
        </li>
        {/* 17 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Entire Agreement: </span> These Terms
          of Service constitute the entire agreement between you and us,
          governing your use of the Service. They supersede prior agreements,
          oral or written, between the parties.
        </li>
        {/* 18 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Governing Law: </span> These Terms of
          Service and related agreements are governed by the laws of Lebanon.
        </li>
        {/* 19 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Changes to Terms of Service: </span>{" "}
          The most current version of the Terms of Service can be reviewed at
          any time on this page. We reserve the right to update, change, or
          replace any part of these terms. Your continued use of the website or
          Service after changes constitutes acceptance.
        </li>
        {/* 20 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Contact Information: </span> Questions
          about the Terms of Service can be directed to us at{" "}
          <a
            href="mailto:info@breezeandbe.com"
            className="text-blue-500 underline"
          >
            info@breezeandbe.com
          </a>
          .
        </li>
      </ul>
      <div>
        These Terms of Service are designed to clarify the terms of use,
        purchase, and interaction with Breeze & Be. Please review them carefully
        and contact us with any questions or concerns.
      </div>

      {/* <Sections /> */}
    </div>
  );
};

export default TermsOfServices;
