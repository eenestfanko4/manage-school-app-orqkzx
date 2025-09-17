
import { useState, useEffect } from 'react';
import { User } from '../types';
import { mockUsers } from '../data/mockData';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string, password: string) => {
    console.log('Attempting login with:', email);
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const foundUser = mockUsers.find(u => u.email === email);
      if (foundUser && password === 'password') {
        setUser(foundUser);
        console.log('Login successful:', foundUser);
      } else {
        console.log('Login failed: Invalid credentials');
      }
      setIsLoading(false);
    }, 1000);
  };

  const logout = () => {
    console.log('User logged out');
    setUser(null);
  };

  const signup = async (name: string, email: string, password: string, role: User['role']) => {
    console.log('Attempting signup:', { name, email, role });
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const newUser: User = {
        id: Date.now().toString(),
        name,
        email,
        role,
      };
      setUser(newUser);
      console.log('Signup successful:', newUser);
      setIsLoading(false);
    }, 1000);
  };

  return {
    user,
    isLoading,
    login,
    logout,
    signup,
  };
};
