import React from 'react';
import { Timeline ,TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot} from '@mui/lab';
import './Timeline.css'
import { Typography } from '@mui/material';
import profileData from '../../Utils/profileData';

const CustomTimeline = ({header,icon}) => {
  return (
    <Timeline className='timeline'>

      <TimelineItem className='timeline_header'>
        <TimelineSeparator>
          <TimelineDot className='timeline_header_dot'>{icon}</TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent><Typography variant='h6' className='timeline_content'>{header}</Typography></TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator className='seperator'>
          <TimelineDot variant='outlined' className='timeline_dot' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className='timeline_text'><span className='timeline_title'>Name: </span>{profileData.name}</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator className='seperator'>
          <TimelineDot variant='outlined' className='timeline_dot' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className='timeline_text'><span className='timeline_title'>Birthday: </span>{profileData.birthday}</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator className='seperator'>
          <TimelineDot variant='outlined' className='timeline_dot' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className='timeline_text'><span className='timeline_title'>Email: </span><span className='timeline_email'>{profileData.email}</span></Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator className='seperator'>
          <TimelineDot variant='outlined' className='timeline_dot' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className='timeline_text'><span className='timeline_title'>Address: </span>{profileData.address}</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator className='seperator'>
          <TimelineDot variant='outlined' className='timeline_dot' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography className='timeline_text'><span className='timeline_title'>Phone: </span>{profileData.phone}</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
export default CustomTimeline
