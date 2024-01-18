import { render, fireEvent } from "@testing-library/react"
import App from "../../App"


test("render login component before login", ()=>{
    const {getByText, getByPlaceholderText}=render(<App/>)
    const employeeidinput= getByPlaceholderText("Enter your employee id")
    expect(employeeidinput).toBeInTheDocument()
})

test('allows user to log in', () => {
    const { getByText, getByPlaceholderText } = render(<App />);    
    const employeeIdInput = getByPlaceholderText('Enter your employee id');
    fireEvent.change(employeeIdInput, { target: { value: '123' } });    
    const loginButton = getByText('Login');
    fireEvent.click(loginButton);    
    const welcomeMessage = getByText('Hello 123!!!');
     expect(welcomeMessage).toBeInTheDocument();
});
