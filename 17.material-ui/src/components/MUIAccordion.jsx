import React, { useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MUIAccordion() {

    const [expanded, setExpanded] = useState('' | false);
    const handleChange = (panelName) => (event, expanded) => {
        setExpanded(expanded ? panelName : false);
    }

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Bölüm 1</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet autem modi non minima necessitatibus iure, quae rem impedit possimus sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio, odio iure repudiandae recusandae iusto tempore sed commodi voluptas aspernatur?</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Bölüm 2</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet autem modi non minima necessitatibus iure, quae rem impedit possimus sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio, odio iure repudiandae recusandae iusto tempore sed commodi voluptas aspernatur?</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Bölüm 3</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet autem modi non minima necessitatibus iure, quae rem impedit possimus sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio, odio iure repudiandae recusandae iusto tempore sed commodi voluptas aspernatur?</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>Bölüm 4</AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet autem modi non minima necessitatibus iure, quae rem impedit possimus sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa optio, odio iure repudiandae recusandae iusto tempore sed commodi voluptas aspernatur?</AccordionDetails>
            </Accordion>

        </div>
    )
}

export default MUIAccordion