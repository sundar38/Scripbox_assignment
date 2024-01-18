import { fireEvent, render } from "@testing-library/react";
import App from "../../App";

test('renders challenge form when logged in', () => {
    const { getByText, getByPlaceholderText } = render(<App/>);
    const employeeIdInput = getByPlaceholderText('Enter your employee id');
    fireEvent.change(employeeIdInput, { target: { value: '123' } });
    const loginButton = getByText('Login');
    fireEvent.click(loginButton);
  
    const addChallengeHeading = getByText('Add Challenge');
    expect(addChallengeHeading).toBeInTheDocument();
  
    const titleInput = getByPlaceholderText('Enter the title of the challenge');
    const descriptionInput = getByPlaceholderText('Enter the description of the challenge');
    const tagsInput = getByPlaceholderText('Enter the tags');
  
    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(tagsInput).toBeInTheDocument();
});
test('allows user to add a challenge', () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const employeeIdInput = getByPlaceholderText('Enter your employee id');
    fireEvent.change(employeeIdInput, { target: { value: '123' } });
    const loginButton = getByText('Login');
    fireEvent.click(loginButton);
  
    const titleInput = getByPlaceholderText('Enter the title of the challenge');
    const descriptionInput = getByPlaceholderText('Enter the description of the challenge');
    const tagsInput = getByPlaceholderText('Enter the tags');
  
    fireEvent.change(titleInput, { target: { value: 'New Challenge' } });
    fireEvent.change(descriptionInput, { target: { value: 'Description for the new challenge' } });
    fireEvent.change(tagsInput, { target: { value: 'feature, tech' } });
  
    const addChallengeButton = getByText('Add Challenge');
    fireEvent.click(addChallengeButton);
  
    // const challengeTitle = getByText('New Challenge');
    // expect(challengeTitle).toBeInTheDocument();
  });