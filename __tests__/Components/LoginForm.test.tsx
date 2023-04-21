import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LoginForm from '../../components/LoginForm';

describe('LoginForm', () => {
    it('should call onLogin when login button is pressed with valid credentials', () => {
        const mockOnLogin = jest.fn();
        const { getByTestId } = render(<LoginForm onLogin={mockOnLogin} />);

        const emailInput = getByTestId('email-input');
        const passwordInput = getByTestId('password-input');
        const loginButton = getByTestId('login-button');

        fireEvent.changeText(emailInput, 'test@example.com');
        expect(emailInput.props.value).toBe('test@example.com');

        fireEvent.changeText(passwordInput, 'password');
        expect(passwordInput.props.value).toBe('password');

        fireEvent.press(loginButton);

        expect(mockOnLogin).toHaveBeenCalledWith('test@example.com', 'password');
    });

    
    it("it return an error when trying to login without filling in all fields", () => {
        const onLogin = jest.fn();
        const { getByTestId } = render(<LoginForm onLogin={onLogin} />);
    
        const loginButton = getByTestId("login-button");
    
        const result = fireEvent.press(loginButton);
        
        expect(result).toBeInstanceOf(Error)
      });
});