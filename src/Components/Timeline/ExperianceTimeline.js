import React from "react";
import './Timeline.css'
import {experiance} from "../../Utils/profileData";
import { Timeline ,TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@mui/lab';
import {Typography, Card ,CardContent, List, ListItem, ListItemIcon, ListItemText, CardMedia, Link} from '@mui/material';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';



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
{experiance.map((item) =>(
    <TimelineItem>
        <TimelineSeparator className='seperator'>
          <TimelineDot variant='outlined' className='timeline_dot' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className='timeline_subcontent'>
          <Card className="timeline_card">
            <CardContent className="timeline_cardcontent">
            <div className="timeline_logoimg"><img src={item.logo} width='80px' height='80px'/></div>
                <div className="timeline_cardheader">
                  <Typography className="timeline_cardheadtext1" variant="h5">{item.position}</Typography>
                  <Typography><span className="timeline_cardheadtext2">{item.company}</span>, {item.address}</Typography>
                  <Typography>{item.year}</Typography>
                </div>
            </CardContent>
            <CardContent>
              <Typography className="timeline_cardtext1">{item.description}</Typography>
              <Typography className="timeline_cardtext2">{text}</Typography>

              <List className="timeline_list">
              {item.technology.map((tech)=>(
                <ListItem className="timeline_listitem">
                  <ListItemIcon className="timeline_listitemicon">
                  <StarBorderPurple500Icon className="timeline_iconstar"/>
                  </ListItemIcon>
                  <ListItemText primary={tech.name}/>
                </ListItem>
                ))}
              </List> 
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