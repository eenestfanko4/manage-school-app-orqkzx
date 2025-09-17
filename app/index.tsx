
import React, { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { useAuth } from '../hooks/useAuth';
import LoadingSpinner from '../components/LoadingSpinner';

export default function IndexScreen() {
  const { user } = useAuth();

  // Show loading while checking auth state
  if (user === undefined) {
    return <LoadingSpinner />;
  }

  // Redirect based on auth state
  if (user) {
    return <Redirect href="/dashboard" />;
  } else {
    return <Redirect href="/login" />;
  }
}
