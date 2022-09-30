import { Button, IconButton } from '@mui/material'
import React from 'react'
import './Sidebar.css'
import AddIcon from '@mui/icons-material/Add';
import SideBarOption from './SideBarOption';
import InboxIcon from '@mui/icons-material/Inbox';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';

function Sidebar() {
    const dispatch = useDispatch();


  return (
    <div className='sideBar'>
        <Button
         startIcon={<AddIcon  fontSize="large"/>}
         className='sideBar__compose'
         onClick={() => dispatch(openSendMessage())}>
            Compose

        </Button>

        <SideBarOption Icon={InboxIcon} title="Inbox" number={14} selected={true} />
        <SideBarOption Icon={StarIcon} title="Starred" number={2}/>
        <SideBarOption Icon={AccessTimeIcon} title="Snoozed" number={33}/>
        <SideBarOption Icon={LabelImportantIcon} title="Important" number={16}/>
        <SideBarOption Icon={SendIcon} title="Sent" number={13}/>
        <SideBarOption Icon={NoteIcon} title="Drafts" number={4}/>
        <SideBarOption Icon={ExpandMoreIcon} title="More" number={20}/>

        <div className='sideBar__footer'>
            <div className='sideBar__footerIcons'>
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <DuoIcon />
                </IconButton>
                <IconButton>
                    <PhoneIcon />
                </IconButton>
            </div>
        </div>

    </div>
  )
}

export default Sidebar;