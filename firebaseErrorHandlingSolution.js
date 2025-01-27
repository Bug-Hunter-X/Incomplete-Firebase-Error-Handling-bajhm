function handleError(error) {
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'auth/user-not-found':
      case 'auth/invalid-email':
      case 'auth/weak-password':
      case 'auth/email-already-in-use':
        // Display user-friendly error messages
        alert(error.message);
        break;
      case 'auth/network-request-failed':
        alert('Network error. Please check your connection.');
        break;
      default:
        console.error('Unhandled Firebase error:', error);
        // Optionally display a generic error message to the user
        alert('An unexpected error occurred.');
    }
  } else {
    console.error('Non-Firebase error:', error);
    alert('An unexpected error occurred.');
  }
} 