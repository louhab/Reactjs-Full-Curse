export default function FirstComponentWithProps(props) {
    return (
        <>
            <ul>
                <li>Hello {props.fullName}</li>
                <li>Your email is {props.email}</li>
                <li>Your Role is  {props.role}</li>
            </ul>
        </>
    )
}
