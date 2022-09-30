import React from 'react'
import './EmailRow.css'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { LabelImportantOutlined, StarBorderOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { selectMails } from './features/mailSlice';
import { useDispatch } from 'react-redux';

function EmailRow({ id, title , subject , description , time}) {
    const history = useNavigate();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(
            selectMails({
                id,
                title,
                subject,
                description,
                time,
            })
        );
        history("/mail")
    };
  return (
 

    <div onClick={openMail} className='emailRow'>
        <div className='emailRow__options'>
            <IconButton>
            <CheckBoxOutlineBlankIcon />
            </IconButton>

            <IconButton>
                <StarBorderOutlined />
            </IconButton>

            <IconButton>
                <LabelImportantOutlined />
            </IconButton>
        </div>

        <div className='emailRow__title'>
            {title}
        </div>

        <div className='emailRow__message'>
            <h4>{subject}{"  -"}
            <span className="emailRow__description">
                {description}
            </span>
            </h4>
        </div>

        <p className='emailRow__time'>
            {time}
        </p>
    </div>
  )
}

export default EmailRow