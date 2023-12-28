import Back from "@/components/TermsAndConditions/Back";

export const metadata = {
  title: "Return and Refund Policy",
};

const ReturnAndRefundPolicy = () => {
  return (
    <div className="pt-[150px] pb-14 px-10 mx-5 md:mx-[95px] lg:mx-[120px] bg-white flex flex-col space-y-7 border-x-2 border-gray-500 overflow-y-hidden">
      <Back />
      <div>
        <h1 className="text-3xl font-medium">Return and Refund Policy:</h1>
      </div>
      <div>
        This policy outlines the terms and conditions governing the purchase of
        all skincare products offered by Breeze & Be through our online store.
        Applicable to both local and international customers, please read this
        policy carefully before finalizing your purchase.
      </div>
      <ul className="list-decimal flex flex-col space-y-7 ml-10">
        {/* 1 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">All Sales Are Final: </span> Once a
          purchase is made, it is non-refundable and non-exchangeable. We urge
          you to thoroughly review your order before completing the transaction.
        </li>
        {/* 2 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Defective Items: </span> In the event
          of a defective or damaged product upon arrival, you may request a
          replacement within 3 days of receiving the item. Please provide proof
          of the defect or damage (e.g., photographs). Upon approval, we will
          replace the product at no additional cost.
        </li>
        {/* 3 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Wrong Item Received: </span> If you
          receive an item different from your order, please contact us within 3
          days of receipt. We will assess and address these cases at our
          discretion.
        </li>
        {/* 4 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Disclaimer: </span> Product images are
          for illustrative purposes only. While we strive for accurate
          representation, variations may occur due to differences in computer
          monitors. We cannot guarantee the precise color accuracy on your
          monitor.
        </li>
        {/* 5 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Change of Policy: </span> We reserve
          the right to modify this policy at any time. Please review it
          frequently, as changes will take effect immediately upon posting on
          our website.
        </li>
        {/* 6 */}
        <li className="marker:font-medium pl-3">
          <span className="font-semibold">Policy Governance: </span> This policy
          is governed by the laws of Lebanon. For any questions or concerns,
          please contact us at{" "}
          <a
            href="mailto:info@breezeandbe.com"
            className="text-blue-500 underline"
          >
            info@breezeandbe.com
          </a>
          .
        </li>
      </ul>
    </div>
  );
};

export default ReturnAndRefundPolicy;
