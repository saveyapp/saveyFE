import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
const Faqcomp = ({ head, content }) => {
  return (
    <div>
      <Accordion allowToggle>
        <AccordionItem className="border-b py-4">
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton
                  _expanded={{ color: "#ADD565" }}
                  className="text-[#303A42]"
                >
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    className="text-[18px] font-bold"
                  >
                    {head}
                  </Box>
                  {isExpanded ? (
                    <BiMinus fontSize="20px" />
                  ) : (
                    <BiPlus fontSize="20px" />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={6} className="text-[16px] text-[#303A42]">
                {content}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Faqcomp;
