import React, { useState } from 'react';
import LanguageSwicther from './LanguageSwicther';

export default function Page() {
    const [currentLang, setCurrentLang] = useState('AR');
    // send data from the parent to the shield we use props
    // but from shield to the props , what's we can use ? 
    // we can use call back functions
    const displayCurrentLang = () => {
        switch (currentLang) { 
            case 'AR': return 'السلام عليكم'
                break;
            case 'FR': return 'Bonjour'
                break;
            case 'EN': return 'Hello'
                break;
            case 'SP': return 'Holla'
                break;
            default : return 'Unknown'
        }
    }
    return (
        <>
            <LanguageSwicther onLanguageChange={value => setCurrentLang(value)} />
            <hr />
            the current Language is : {currentLang}
            <hr />
            <div className='alert alert-info'>
                {displayCurrentLang()}
            </div>
        </>
    );
}
