import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";

const Container = tw.div `relative`;
const Content = tw.div `max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div `flex`;
const Column = tw.div ``;

const Image = styled.div(props => [
    `background-image: url("${props.imageSrc}");`,
    props.imageContain ? tw `bg-contain bg-no-repeat` : tw `bg-cover`,
    props.imageShadow ? tw `shadow` : tw `shadow-none`,
    tw `hidden lg:block rounded h-144 bg-center`
]);

const FAQContent = tw.div `lg:ml-12`;
const Subheading = tw(SubheadingBase)
`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)
`lg:text-left`;
const Description = tw.p `max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const FAQSContainer = tw.dl `mt-12`;
const FAQ = tw.div `cursor-pointer mt-8 select-none border lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt `flex justify-between items-center`;
const QuestionText = tw.span `text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = styled.span `
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200 transition duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

export default ({
  subheading = "",
  heading = "Questions",
  description = "Here are some frequently asked questions about our product from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.",
  imageSrc = "https://images.unsplash.com/photo-1579427421635-a0015b804b2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  imageContain = false,
  imageShadow = true,
  faqs = null,
  faqs1= null
}) => {
  /*
   * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
   * the faqs prop
   */
  const defaultFaqs = [
    {
      question: "What happen to the salt in the treated water? ",
      answer:
        "BRK SYSTEMS structure water device cancels the  crystallization process in the salt molecules so the minerals can get easily observed by plants."
    },
    {
      question: "Any replacement or maintenance required?",

      answer:
        "No replacement or maintenance required for BRK SYSTEMS structured water device."
    },
    {
      question: "What will happen  to the already blocked or deposited salt in the pipeline system?",

      answer:
        "BRK SYSTEMS structure water device automatically removes the blocked or deposited salt   in the pipeline on day by day process."
    },
    {
      question: "What is the installation process?",

      answer:
        "BRK SYSTEMS structure water device installation process is so simple. Doesn't make any physical changes in the existing pipeline system. BRK SYSTEMS structure water device becomes two  C type pieces and placed around the pipe and bolted.its an easy and 2 minutes process."
    },
    {
      question: "Electricity or chemical involved in the process?",

      answer:
        "BRK SYSTEMS structure water device is highly eco-friendly and no electricity or any chemicals involved in the process."
    }
  ];


  const defaultFaqs1 = [
    {
      question: "சுத்திகரிக்கப்பட்ட நீரில் இருந்த உப்புக்கு என்ன நடக்கும்? ",
      answer:
        "BRK SYSTEMS structured நீர் சாதனம் உப்பு மூலக்கூறுகளில் உள்ள படிகமயமாக்கல்(Crystallization) செயல்முறையை ரத்துசெய்கிறது, இதனால் தாதுப்புக்கள் தாவரங்களால் எளிதில் உறிஞ்சப்படும்."
    },
    {
      question: "மாற்று அல்லது பராமரிப்பு தேவையா?",

      answer:
        "BRK SYSTEMS structured நீர் சாதனத்திற்கு மாற்று அல்லது பராமரிப்பு எதுவும் தேவையில்லை."
    },
    {
      question: "குழாய்களில் ஏற்கனவே தடுக்கப்பட்ட அல்லது படிந்துள்ள உப்புக்கு என்ன நடக்கும்?",

      answer:
        "BRK SYSTEMS structured  water device  தானாகவே நாளுக்கு நாள் குழாயில் தடுக்கப்பட்ட அல்லது படிந்துள்ள உப்பை நீக்குகிறது."
    },
    {
      question: "பொருத்தும் செயல்முறை என்ன?",

      answer:
        "BRK SYSTEMS structured நீர் சாதனத்தை பொருத்தும் செயல்முறை மிகவும் எளிதானது.  தற்போதுள்ள  குழாய்  அமைப்பில் எந்தவிதமான மாற்றங்களையும் செய்யாது.  BRK SYSTEMS கட்டமைப்பு நீர் சாதனம் இரண்டு   C -type  துண்டுகளாக பிரிக்கப்பட்டு குழாயைச் சுற்றி வைத்துப் பொருத்தப்படும். மிகவும் எளிதான மற்றும் 2 நிமிட செயல்முறை."
    },
    {
      question: "செயல்பாட்டில் மின்சாரம் அல்லது இரசாயனம் சம்பந்தப்பட்டுள்ளதா?",

      answer:
        "BRK SYSTEMS கட்டமைப்பு நீர் சாதனம்  சூழல் சார்ந்தது (eco-friendly) . மின்சாரம் அல்லது எந்தவொரு இரசாயனமும் இல்லை."
    }
  ];
  if (!faqs || faqs.length === 0) faqs = defaultFaqs;
  if (!faqs1 || faqs1.length === 0) faqs1 = defaultFaqs;


  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container>
      <Content>
        <TwoColumn>
          <Column tw="hidden lg:block w-5/12 flex-shrink-0">
            <Image imageContain={imageContain} imageShadow={imageShadow} imageSrc={imageSrc} />
          </Column>
          <Column>
            <FAQContent>
              {subheading ? <Subheading>{subheading}</Subheading> : null}
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
              <div class="form-floating">
  <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
    <option selected>Language</option>
    <option value="English">English</option>
    <option value="Tamil">Tamil</option>
  </select>

</div>
              <FAQSContainer>
                {faqs.map((faq, index) => (
                  <FAQ
                    key={index}
                    onClick={() => {
                      toggleQuestion(index);
                    }}
                    className="group"
                  >
                    <Question>
                      <QuestionText>{faq.question}</QuestionText>
                      <QuestionToggleIcon>
                        {activeQuestionIndex === index ? <MinusIcon /> : <PlusIcon />}
                      </QuestionToggleIcon>
                    </Question>
                    <Answer
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                      }}
                      initial="collapsed"
                      animate={activeQuestionIndex === index ? "open" : "collapsed"}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      {faq.answer}
                    </Answer>
                  </FAQ>
                ))}
              </FAQSContainer>
              <FAQSContainer>
                {faqs1.map((faq, index) => (
                  <FAQ
                    key={index}
                    onClick={() => {
                      toggleQuestion(index);
                    }}
                    className="group"
                  >
                    <Question>
                      <QuestionText>{faq.question}</QuestionText>
                      <QuestionToggleIcon>
                        {activeQuestionIndex === index ? <MinusIcon /> : <PlusIcon />}
                      </QuestionToggleIcon>
                    </Question>
                    <Answer
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                      }}
                      initial="collapsed"
                      animate={activeQuestionIndex === index ? "open" : "collapsed"}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      {faq.answer}
                    </Answer>
                  </FAQ>
                ))}
              </FAQSContainer>
            </FAQContent>
          </Column>
        </TwoColumn>
      </Content>
    </Container>
  );
};