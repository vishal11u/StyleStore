import React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const QuetionFQ = () => {
    return (
        <div className='md:w-[40vw]'>
            <Accordion className='py-2'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>01. How does information technology work?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        There are many variations of passages of Lorem Ipsum available into the but the majority have suffered alteration in some form, by injecte find to a humour, or randomised words
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ marginTop: "1rem" }} className='py-2'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>02. How can I become IT manager?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        There are many variations of passages of Lorem Ipsum available into the but the majority have suffered alteration in some form, by injecte find to a humour, or randomised words
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ marginTop: "1rem" }} className='py-2'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>03. What are the latest trends in IT?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        There are many variations of passages of Lorem Ipsum available into the but the majority have suffered alteration in some form, by injecte find to a humour, or randomised words
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ marginTop: "1rem" }} className='py-2'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>04. How long should a business plan be?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        There are many variations of passages of Lorem Ipsum available into the but the majority have suffered alteration in some form, by injecte find to a humour, or randomised words
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion sx={{ marginTop: "1rem" }} className='py-2'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>05. How work the support policy?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        There are many variations of passages of Lorem Ipsum available into the but the majority have suffered alteration in some form, by injecte find to a humour, or randomised words
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default QuetionFQ;