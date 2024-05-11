import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
// import { css } from "styled-components/macro";
import { SectionHeading, Subheading as SubheadingBase } from "../../components/misc/Headings.jsx";
import { SectionDescription } from "../../components/misc/Typography.jsx";

import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { GrStatusGood } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiGuideFill } from "react-icons/ri";
import { GiQuickSlash } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";

import defaultCardImage from "../../images/ShieldIcon.jsx";

import SvgDecoratorBlob3 from "../../images/SvgDecoratorBlob3.jsx";

const Container = tw.div`relative`;

const ThreeColumnContainer = styled.div`
  ${tw`flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
`;
const Subheading = tw(SubheadingBase)`mb-4`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const VerticalSpacer = tw.div`mt-10 w-full`

const Column = styled.div`
  ${tw`md:w-1/2 lg:w-1/3 max-w-sm`}
`;

const Card = styled.div`
  ${tw`flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}
  .imageContainer {
    ${tw`border text-center rounded-full p-5 flex-shrink-0`}
    img {
      ${tw`w-6 h-6`}
    }
  }

  .textContainer {
    ${tw`sm:ml-4 mt-4 sm:mt-2`}
  }

  .title {
    ${tw`mt-4 tracking-wide font-bold text-2xl leading-none`}
  }

  .description {
    ${tw`mt-1 sm:mt-4 font-medium text-secondary-100 leading-loose`}
  }
`;

const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-48 `}
`;

export default ({ cards = null, heading = "Amazing Features", subheading = "Features", description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }) => {
  /*
   * This componets has an array of object denoting the cards defined below. Each object in the cards array can have the key (Change it according to your need, you can also add more objects to have more cards in this feature component) or you can directly pass this using the cards prop:
   *  1) imageSrc - the image shown at the top of the card
   *  2) title - the title of the card
   *  3) description - the description of the card
   *  If a key for a particular card is not provided, a default value is used
   */

  const defaultCards = [
    {
      imageSrc: <FaArrowRightArrowLeft />,
      title: "Reliability",
      description: "Count on us to be there when you need us most. Our steadfast reliability ensures that your needs are met promptly and efficiently, every time."
    },
    { 
      imageSrc: <GrStatusGood />, 
      title: "Quality Assurance",
      description: "From dealing with grains to being enthusiasts, quality is the cornerstone of our service. We never compromise on standards, guaranteeing you the finest experience possible." 
    },
    { 
      imageSrc: <RiCustomerService2Fill />, 
      title: "Customer-Centric Approach",
      description: "Your satisfaction is our top priority. With a customer-centric mindset, we tailor our service to meet your unique requirements, ensuring every interaction exceeds your expectations." 
    },
    { 
      imageSrc: <RiGuideFill />, 
      title: "Expert Guidance",
      description: "Rely on our team's expertise to navigate the complexities of the grains industry. We provide comprehensive guidance to help you make informed decisions and achieve your goals." 
    },
    { 
      imageSrc: <GiQuickSlash />, 
      title: "Efficiency",
      description: "Experience swift and streamlined processes with our efficient services. We prioritize time-saving solutions to optimize your experience and maximize productivity." 
    },
    { 
      imageSrc: <FaHandHoldingHeart />, 
      title: "Personalized Care",
      description: "Receive personalized attention and care tailored to your needs. Our dedicated team goes above and beyond to ensure that every aspect of our service reflects your individual preferences." 
    }
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        {description && <Description>{description}</Description>}
        <VerticalSpacer />
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="imageContainer">
                { card.imageSrc }
                {/* <img src={card.imageSrc || defaultCardImage} alt="" /> */}
              </span>
              <span className="textContainer">
                <span className="title">{card.title || "Fully Secure"}</span>
                <p className="description">
                  {card.description || "Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud."}
                </p>
              </span>
            </Card>
          </Column>
        ))}
      </ThreeColumnContainer>
      {/* <DecoratorBlob /> */}
    </Container>
  );
};
