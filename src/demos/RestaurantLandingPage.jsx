import React from "react";
import tw from "twin.macro";
// import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "../helpers/AnimationRevealPage.jsx";
import Hero from "../components/hero/TwoColumnWithVideo.jsx";
// import Features from "../components/features/ThreeColSimple.jsx";
import Features from "../components/features/ThreeColWithSideImage.jsx";
import MainFeature from "../components/features/TwoColWithButton.jsx";
import MainFeature2 from "../components/features/TwoColSingleFeatureWithStats2.jsx";
// import TabGrid from "../components/cards/TabCardGrid.jsx";
// import Testimonial from "../components/testimonials/ThreeColumnWithProfileImage.jsx";
import DownloadApp from "../components/cta/DownloadApp.jsx";
import Footer from "../components/footers/FiveColumnWithInputForm.jsx";

import riceField from "../images/rice-field.jpg";
import grainBawl from "../images/grainBawls.jpg";
import chooseUs from "../images/choose-us.jpg";
// import chefIconImageSrc from "./images/chef-icon.svg";
// import celebrationIconImageSrc from "./images/celebration-icon.svg";
// import shopIconImageSrc from "./images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  const imageCss = tw`rounded-4xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={<>Quality & Affordable <HighlightedText>Grains Near You.</HighlightedText></>}
        description="Welcome to Summer Grains, your premier destination for top-notch grains at unbeatable prices. 
          Whether you're a wholesaler, a restaurateur, or a grain enthusiast, 
          we've got you covered with our wide selection of premium grains sourced directly from farmers."
        // imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        // imageSrc="https://images.unsplash.com/a-field-of-grass-with-a-dirt-road-in-the-background-ePBbDf2-ovQ"
        imageSrc={riceField}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Contact Us"
      />

      <MainFeature
        subheading={<Subheading>We got you</Subheading>}
        heading={
          <>
            We've been dealing with 
            <wbr /> <HighlightedText>grains for years.</HighlightedText>
          </>
        }
        description={
          <Description>
            Cultivating a legacy in grains for generations, our journey with grains especially rice spans years of dedication and expertise. 
            From field to table, we've honed our craft, ensuring each grain tells a story of quality, tradition, and nourishment.
            <br />
            <br />
            Join us as we celebrate the timeless art of grain cultivation and 
            embark on a journey that transcends mere sustenance—it's a testament to our enduring commitment to excellence.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText=""
        imageSrc={grainBawl}
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />

      <Features
        subheading={<Subheading>You come first.</Subheading>}
        heading={
          <>
            We have Amazing <HighlightedText>Service.</HighlightedText>
          </>
        }
        description="Experience the pinnacle of service excellence with us. 
        Our commitment to you extends beyond mere satisfaction—it's about delivering an unparalleled experience that leaves you truly amazed."
      />

      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={<>Why <HighlightedText>Choose Us ?</HighlightedText></>}
        statistics={[]}
        primaryButtonText=""
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc={chooseUs}
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto ml-5`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />

      <DownloadApp
        subheading={<Subheading>Call Us</Subheading>}
        text={<>Companies around you are partinering with us at <HighlightedTextInverse>Summer Grains Ltd.</HighlightedTextInverse></>}
      />
      
      <Footer />

    </AnimationRevealPage>
  );
}
