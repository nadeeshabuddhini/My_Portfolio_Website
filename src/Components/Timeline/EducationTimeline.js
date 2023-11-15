import React from "react";
import './Timeline.css'
import {education} from "../../Utils/profileData";
import { Timeline ,TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@mui/lab';
import {Typography, Card ,CardContent, Link, CardMedia} from '@mui/material';

const DefaultTimeline = ({icon,text}) => {
    return(
      <Timeline className='timeline def_timeline'>

        <TimelineItem className="timeline_header">
        <TimelineSeparator>
          <TimelineDot className='timeline_header_dot'>{icon}</TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent><Typography variant='h6' className='timeline_content'></Typography></TimelineContent>
        </TimelineItem>
{education.map((item) =>(
    <TimelineItem>
        <TimelineSeparator className='seperator'>
          <TimelineDot variant='outlined' className='timeline_dot' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timeline_subcontent'>
          <Card className="timeline_card">
            <CardContent className="timeline_cardcontent">
                <div className="timeline_logoimg"><img src={item.logo} width='80px' height='80px' alt=""/></div>
                <div className="timeline_cardheader">
                  <Typography className="timeline_cardheadtext1" variant="h5">{item.institute}</Typography>
                  <Typography><span className="timeline_cardheadtext2">{item.grade}</span></Typography>
                  <Typography>{item.year}</Typography>
                </div>
            </CardContent>
            <CardContent>
              <Typography className="timeline_cardtext1">{item.description}</Typography>
              <Typography className="timeline_cardtext2">{text}
              </Typography>
            </CardContent>
            <CardContent>
            <Link href={item.link} target="_blank">
            <CardMedia sx={{ height: 150, width:110}} image={item.image}/>
            </Link>
            </CardContent>
          </Card>
        </TimelineContent>
      </TimelineItem>
))}
        

      </Timeline>

    );
};

export default DefaultTimeline