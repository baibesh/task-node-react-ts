import React from 'react';
import ContactList from "../components/ContactList";

const ContactPage: React.FC = () => {
    return (
        <div>
            <h1>Страница контактов</h1>
            <ContactList />
        </div>
    );
};

export default ContactPage;
