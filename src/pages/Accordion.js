import React, { useState } from "react";

const Accordion = () => {
    return (
        <section className="relative py-24 z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            {/* <span className="mb-2 block text-lg font-semibold text-primary">
                                FAQ
                            </span> */}
                            <h2 className="mb-4 lg:text-3xl text-xl font-semibold text-dark sm:text-4xl md:text-[40px] text-[#1C314C] tracking-wider">
                                FAQ! Need Help?
                            </h2>
                            <p className="text-base font-semibold text-[#6F94C4EB] tracking-widest">
                                We Got Answers to All Your Questions
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap lg:mx-10">
                    <div className="w-full px-4 lg:w-1/2 text-justify text-[#1C314CB2]">
                        <AccordionItem
                            header="How can I request a quote or estimate for your services?"
                            text="You can request a quote or estimate by filling out our online contact form, sending us an email, or giving us a call. One of our representatives will get in touch with you promptly."
                        />
                        <AccordionItem
                            header=" Can you help with IT issues remotely?"
                            text="Yes, we offer remote IT support services. Our team can diagnose and resolve many IT issues remotely, providing a quick and cost-effective solution."
                        />
                        <AccordionItem
                            header="What is the typical response time for IT support requests?"
                            text="Our response time varies depending on the severity of the issue. Critical issues are addressed immediately, while non-critical issues are usually addressed within [specified timeframe]."
                        />
                        <AccordionItem
                            header="Can you assist with data migration to the cloud?"
                            text="Absolutely. We have extensive experience in migrating data and applications to the cloud, ensuring a seamless transition while minimizing downtime."
                        />
                        <AccordionItem
                            header="What are your payment options?"
                            text="We accept various payment methods, including credit cards, checks, and bank transfers. Our billing department can provide you with detailed payment information."
                        />
                    </div>
                    <div className="w-full px-4 lg:w-1/2 text-justify text-[#1C314CB2]">
                        <AccordionItem
                            header="What industries does your IT solutions company serve?"
                            text="We work with clients across various industries, including healthcare, finance, education, manufacturing, and more. Our solutions are tailored to meet the specific needs of each industry."
                        />
                        <AccordionItem
                            header=" How do you ensure the security of my data and IT systems?"
                            text="We employ industry-best practices and advanced security measures to protect your data and IT systems. Our cybersecurity experts continuously monitor and update your systems to safeguard against threats."
                        />
                        <AccordionItem
                            header="Do you provide training for our employees on new IT systems or software?"
                            text="Yes, we offer training services to help your employees adapt to new IT systems and software. Our training programs are customized to meet your organization's needs."
                        />
                        <AccordionItem
                            header="How can I get in touch with your support team for urgent issues outside of regular business hours?"
                            text="We offer 24/7 emergency support. You can reach our support team at [emergency contact number] at any time."
                        />
                        <AccordionItem
                            header="How do I know which IT solutions are best for my business?"
                            text="We offer a free consultation to assess your specific needs and recommend tailored IT solutions. Contact us to schedule a consultation with one of our experts."
                        />
                        {/*  */}
                    </div>
                </div>
            </div>

            <div class="absolute bottom-0 right-0 z-[-1]">
                <svg
                    width="1440"
                    height="886"
                    viewBox="0 0 1440 886"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="1"
                        d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="1308.65"
                            y1="1142.58"
                            x2="602.827"
                            y2="-418.681"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#6F94C4EB" stop-opacity="0.36" />
                            <stop offset="1" stop-color="white" stop-opacity="1" />
                            <stop offset="1" stop-color="white" stop-opacity="100" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        // event.preventDefault();
        setActive(!active);
    };
    return (
        <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
            <button
                className={`faq-btn flex w-full text-left`}
                onClick={() => handleToggle()}
            >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                        className={`duration-200 ease-in-out fill-primary stroke-primary ${active ? "rotate-180" : ""
                            }`}
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill=""
                            stroke=""
                        />
                    </svg>
                </div>

                <div className="w-full">
                    <h4 className="text-base font-semibold text-[#1C314C]">{header}</h4>
                </div>
            </button>

            <div
                className={`pl-[62px] duration-200 ease-in-out ${active ? "block" : "hidden"
                    }`}
            >
                <p className="py-3 text-sm leading-relaxed text-body-color">{text}</p>
            </div>
        </div>
    );
};
