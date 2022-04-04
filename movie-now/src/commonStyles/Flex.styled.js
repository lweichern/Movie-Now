import styled from "styled-components";
import { motion } from "framer-motion";
export const Flex = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  // @media (max-width: ${({ theme }) => theme.tablet}) {
  //   flex-direction: column;
  // }
`;
