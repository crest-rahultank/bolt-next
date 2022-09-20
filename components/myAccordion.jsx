import React,{useState} from 'react'
import { FiChevronDown } from 'react-icons/fi';
import { AccordionBody, AccordionHeader, AccordionItem, UncontrolledAccordion } from 'reactstrap'
import { faq } from "../helpers/constant";

const MyAccordion = () => {
  const [open, setOpen] = useState('');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  
  return (
    <>
      <div className='solution-wrapper'>
        <UncontrolledAccordion flush open={open} toggle={toggle} stayOpen>
          {faq.map((q) => {
            return(
              <AccordionItem key={q.id}>
                <AccordionHeader targetId={q.id}>{q.question}<span><FiChevronDown/></span></AccordionHeader>
                <AccordionBody accordionId={q.id}>
                  <p className='text-base font-normal' dangerouslySetInnerHTML={{ __html: q.answer }}></p>
                  <div className='my-6'>
                    <hr />
                  </div>
                </AccordionBody>
              </AccordionItem>
            )
          })}
        </UncontrolledAccordion>
      </div>
    </>
  );
}

export default MyAccordion

//MUI Accordion

// {
//   // eslint-disable-next-line react/jsx-key
//   faq.map((q) => {
//     return (
//       <Accordion 
//         key="id"
//         expanded={expanded === q.question}
//         onChange={() => {
//           setExpanded((p) => (p ? false : q.question));
//         }}
//       >
//         <AccordionSummary
//           expandIcon={<ExpandMoreIcon />}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography
//             sx={{
//               fontFamily: "Montserrat",
//               fontWeight: 600,
//               fontSize: 24,
//               color:
//                 expanded === q.question ? "#61D16A" : "#3D3D3D",
//             }}
//           >
//             {q.question}
//           </Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Typography
//             className="answer"
//             dangerouslySetInnerHTML={{ __html: q.answer }}
//             sx={{
//               fontFamily: "Montserrat",
//               fontWeight: 400,
//               fontSize: 16,
//             }}
//           >
//             {/* {q.answer} */}
//           </Typography>
//         </AccordionDetails>
//       </Accordion>
//     );
//   })
// }