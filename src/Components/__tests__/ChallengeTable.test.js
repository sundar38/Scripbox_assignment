import { fireEvent, render } from "@testing-library/react";
import App from "../../App";

// test('renders challenge list when logged in', () => {
//     const { getByPlaceholderText, getByText } = render(<App />);
//     const employeeIdInput = getByPlaceholderText('Enter your employee id');
//     fireEvent.change(employeeIdInput, { target: { value: '123' } });
//     const loginButton = getByText('Login');
//     fireEvent.click(loginButton);
  
//     const challengesHeading = getByText('Challenges');
//     expect(challengesHeading).toBeInTheDocument();
//   });

  test('allows user to upvote a challenge', () => {
    const { getByText, getByPlaceholderText, getAllByText } = render(<App />);
    const employeeIdInput = getByPlaceholderText('Enter your employee id');
    fireEvent.change(employeeIdInput, { target: { value: '123' } });
    const loginButton = getByText('Login');
    fireEvent.click(loginButton);
    const titleInput = getByPlaceholderText('Enter the title of the challenge');
    const descriptionInput = getByPlaceholderText('Enter the description of the challenge');
    const tagsInput = getByPlaceholderText('Enter the tags');

  fireEvent.change(titleInput, { target: { value: 'Upvote Challenge' } });
  fireEvent.change(descriptionInput, { target: { value: 'Description for the upvote challenge' } });
  fireEvent.change(tagsInput, { target: { value: 'feature, tech' } });

  const addChallengeButton = getByText('Add Challenge');
  fireEvent.click(addChallengeButton);

  const upvoteButton = getAllByText('Upvote');
  fireEvent.click(upvoteButton);

  const votesCount = getAllByText('upvotes: 1');
  expect(votesCount).toBeInTheDocument();
  })

  test('allows user to sort challenges by votes count', () => {
    const { getByText, getByPlaceholderText } = render(<App />);
    const employeeIdInput = getByPlaceholderText('Enter your employee id');
    fireEvent.change(employeeIdInput, { target: { value: '123' } });
    const loginButton = getByText('Login');
    fireEvent.click(loginButton);
  
    // const sortBySelect = getByPlaceholderText('Select');
    // fireEvent.change(sortBySelect, { target: { value: 'Upvotes' } });
  
    // const sortedChallenges = getByText('upvotes: 0').closest('td');
    // expect(sortedChallenges).toHaveTextContent('upvotes: 0');
  });
  