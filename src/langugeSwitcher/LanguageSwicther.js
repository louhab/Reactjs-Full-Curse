export default function LanguageSwicther({onLanguageChange}) {
    const handlLangChange = (e) => {
        e.preventDefault();
        onLanguageChange(e.currentTarget.dataset.lang);
    }
    return (
        <>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" data-lang='AR' href="#" onClick={handlLangChange}>العربية</a>
                </li> 
                <li className="nav-item">
                    <a className="nav-link active" data-lang='FR' href="#" onClick={handlLangChange}>Français</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" data-lang='EN' href="#" onClick={handlLangChange}>English</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" data-lang='SP' href="#" onClick={handlLangChange}>Spanish</a>
                </li>
            </ul>
        </>
    )
}