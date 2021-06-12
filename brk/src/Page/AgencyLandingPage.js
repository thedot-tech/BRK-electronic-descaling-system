import React from "react";
import tw from 'twin.macro' //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage.js";
import News from "./NewsFeeds"
import VideoSection from "./VideoSection"
import Dealer from "./Dealer";
import Features from "components/features/DashedBorderSixFeatures";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtonss.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Blog from "components/blogs/ThreeColSimpleWithImageAndDashedBorder.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import customerSupportIllustrationSrc from "images/customer-support-illustration.svg";


import Client_One from "../images/client_one@2x.png"
import Client_Two from "../images/client_two@2x.png"


export default () => (
  <AnimationRevealPage>
    <Hero/>
    <News/>
    <VideoSection/>
    {/* <MainFeature />   */}
    <Features />
    <MainFeature2 />
    {/* <Portfolio /> */}
    <Testimonial
      subheading="Testimonials"
      heading={
        <>
          Our Clients <span tw="text-blue-500">Love Us.</span>
        </>
      }
      description="Here are what some of our amazing customers are saying about our product. And their are their thoughts about our product."
      testimonials={[
        {
          imageSrc:
          null,
          profileImageSrc:
            "",
          quote:
            "BRK Systems electronic descaler is effective in the chiller unit, cleaning work was performed 2-times in 15 months. Temperature maintains less than 2.5 degrees Celcius in the condenser.",
          customerName: "Solara Active Pharma Science Ltd.",
          customerTitle: "Pharma"
        },
        {
          imageSrc:
          null,
          profileImageSrc:
            "",
            quote:
            "Hard precipitation of salt on tank drastically reduced like small salt flasks. Maintenance and cleaning process reduced from one day to 3 hours. Water wastage gets reduced simultaneously, and the water PH is maintained.",
          customerName: "Pioneer Gloves Factory",
          customerTitle: "Farmer"
        },
        {
          imageSrc:
          null,
          profileImageSrc:
            "",
            quote:
            "After installation of BRK system structure water unit. Coconut yield drastically increased to 5 times than before. Irrigation time gets reduced into 20 to 40%. Attains uniformity in Coconut and weight of coconut was increased.",
          customerName: "UKP Radha Krishnan",
          customerTitle: "Farmer"
        }
      ]}
      textOnLeft={true}
    />
    <FAQ
      imageSrc={customerSupportIllustrationSrc}
      imageContain={true}
      imageShadow={false}
      subheading="FAQs"
      heading={
        <>
          Do you have <span tw="text-blue-500">Questions ?</span>
        </>
      }
    />
    <Footer />
  </AnimationRevealPage>
);
