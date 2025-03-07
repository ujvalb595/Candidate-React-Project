import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';


export default function Detail() {
  return (
    <div className="main-content">
      <div className="top-bar">
        <div className="left">
            <div className="back-btn">
                <a href="/"><i className="fa-light fa-2x fa-arrow-left"></i></a>
            </div>
            <div>
                <div class="title">John Doe</div>
                <div class="exp">john.doe@test.com</div>
            </div>
        </div>
        <div class="icons">
            <i class="fa-light fa-2x fa-edit"></i>
        </div>
      </div>
      <div className="inner-container">
    
    <div className="left-panel">
        <div className="profile-header">
            <div className="profile-pic">
             <img src="images/Candidate.jpg" alt="Candidate" />;
            </div>
            <div className='profile-detail'>
                <p><i class="fa-light fa-briefcase"></i> Senior Software Engineer</p>
                <p><i class="fa-light fa-code"></i> 5 Years</p>
                <p><i class="fa-light fa-mobile"></i> +91 123 456 7890</p>
                <p><i class="fa-light fa-map-marker-alt"></i> New York</p>
            </div>
        </div>
        <div className="buttons shortlisted">
            <Button variant="contained">Shortlsted</Button>
            <Button variant="outlined" className="mar-left-15"><DownloadIcon /> Download Resume</Button>
        </div>
        <div className="accordian">
            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowDownwardIcon  />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                <Typography component="span">EMPLOYMENT HISTORY</Typography>
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowDownwardIcon  />}
                aria-controls="panel2-content"
                id="panel2-header"
                >
                <Typography component="span">REFERENCES</Typography>
                </AccordionSummary>

                <AccordionDetails>
                <h3>Jacob Anthony</h3>
                <p>General Manager | Make My Trip</p>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowDownwardIcon  />}
                aria-controls="panel3-content"
                id="panel3-header"
                >
                <Typography component="span">INTERVIEW FEEDBACK</Typography>
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                expandIcon={<ArrowDownwardIcon  />}
                aria-controls="panel4-content"
                id="panel4-header"
                >
                <Typography component="span">ADDITIONAL NOTES</Typography>
                </AccordionSummary>
                <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
                </AccordionDetails>
            </Accordion>
    </div>
        
    </div>

    <div class="right-panel">
        <div class="video-profile">Video Profile</div>
        
        <div class="skills">
            <h4>Skills</h4>
            <span class="badge">Java</span>
            <span class="badge">SQL</span>
            <span class="badge">REST / SOAP</span>
            <span class="badge">Advanced SQL</span>
        </div>

        <div class="score">
            <h4>Tech Assessment Score</h4>
            <div class="score-item"><span>Finance Management</span><span class="value">86%</span></div>
            <div class="score-item"><span>Media Management</span><span class="value">56%</span></div>
            <div class="score-item"><span>Technical Assessment</span><span class="value">90%</span></div>
        </div>

    </div>
</div>
      
    </div>
    
  )
}
