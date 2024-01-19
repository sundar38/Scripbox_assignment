import { render, fireEvent } from "@testing-library/react"
import App from "../../App"


test("render login component before user logging in", ()=>{
    const {getByText, getByPlaceholderText}=render(<App/>)
    const employeeidinput= getByPlaceholderText("Enter your employee id")
    expect(employeeidinput).toBeInTheDocument()
})

test('render main page after user logging in', () => {
    const { getByText, getByPlaceholderText } = render(<App />);    
    const employeeIdInput = getByPlaceholderText('Enter your employee id');
    fireEvent.change(employeeIdInput, { target: { value: '123' } });    
    const loginButton = getByText('Login');
    fireEvent.click(loginButton);    
    const welcomeMessage = getByText('Hello 123!!!');
     expect(welcomeMessage).toBeInTheDocument();
});
