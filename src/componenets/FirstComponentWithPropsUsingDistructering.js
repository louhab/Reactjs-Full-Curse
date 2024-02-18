export default function FirstComponentWithPropsUsingDistructering({fullName, email ,role}) {
    return (
        <>
            <ul>
                <li>Hello {fullName}</li>
                <li>Your email is {email}</li>
                <li>Your Role is  {role}</li>
            </ul>
        </>
    )
}
