import { useContext } from 'react';
import { UserContext } from '../Hooks/ComponentUseContext';

function CurrentUser() {
    const user = useContext(UserContext);
    return (
        <div>
            {user.userOne}
        </div>
    );
}

export default CurrentUser;
