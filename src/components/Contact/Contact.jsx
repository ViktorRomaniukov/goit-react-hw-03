import React from 'react';
import { TbUserFilled } from 'react-icons/tb';
import { FaPhone } from 'react-icons/fa6';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li>
      <div>
        <p>
          <TbUserFilled className="my-icon" size="24" /> {name}
        </p>
        <p>
          <FaPhone className="my-icon" size="24" /> {number}
        </p>
      </div>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
