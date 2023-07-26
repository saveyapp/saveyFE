import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FooterAccordion = ({
  head,
  content,
  content1,
  content2,
  content3,
  content4,
  link1,
  link2,
  link3,
  link4,
  link5,
}) => {
  return (
    <Accordion allowToggle>
      <AccordionItem
        borderBottomWidth={"2px"}
        borderBottomColor={"#EBEBEB"}
        marginBottom={"2rem"}
      >
        <h2 className="pb-[8px]">
          <AccordionButton pt={"8px"}>
            <Box
              as="span"
              flex="1"
              textAlign="left"
              fontWeight={"500"}
              fontSize={"18px"}
              cursor={"default"}
            >
              {head}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} pt={"6px"}>
          <Box paddingBottom={"15px"}>
            <Link to={link1} className="text-[16px]">
              {content}
            </Link>
          </Box>
          <Box paddingBottom={"15px"}>
            <Link to={link2} className="text-[16px]">
              {content1}
            </Link>
          </Box>
          <Box paddingBottom={"15px"}>
            <Link to={link3} className="text-[16px]">
              {content2}
            </Link>
          </Box>
          <Box paddingBottom={"15px"}>
            <Link to={link4} className="text-[16px]">
              {content3}
            </Link>
          </Box>
          <Box>
            <Link to={link5} className="text-[16px]">
              {content4}
            </Link>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default FooterAccordion;
