import React, { useEffect, useState } from 'react'
import './EmailList.css'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {
    ArrowDropDown, CheckBox, CheckBoxOutlineBlank, ChevronLeft, ChevronRight, Inbox,
    KeyboardHide, LocalOffer, MoreVert,
    People, Redo, Settings
} from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './firebase';
function EmailList() {

    const [emails, setEmail] = useState([]);

    useEffect(() => {
        db.collection("emails")
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => setEmail(
                snapshot.docs.map(doc => (
                    {
                        id: doc.id,
                        data: doc.data(),
                    }))
            )
            )
    }, [])



    return (
        <div className='emailList'>
            <div className='emailList__settings'>
                <div className='emailList__settingsLeft'>
                    <IconButton>
                        <CheckBoxOutlineBlank/>
                    </IconButton>
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className='emailList__settingsRight'>
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <KeyboardHide />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>
            <div className='emailList__section'>
                <Section title="Primary" color="red" Icon={Inbox} selected={true} />
                <Section title="Social" color="#1A73E8" Icon={People} />
                <Section title="Promotions" color="green" Icon={LocalOffer} />
            </div>

            <div className='emailList__list'>
                {emails.map(({id , data: { to, subject , message , timestamp }}) => (
                <EmailRow
                    key = {id}
                    title={to}
                    subject={subject}
                    description={message}
                    time={new Date(timestamp?.seconds * 1000).toUTCString()} />
                ))}
            </div>
        </div>
    )
}

export default EmailList