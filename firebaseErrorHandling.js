function handleError(error) {
  // Check if the error is a Firebase Error
  if (error instanceof FirebaseError) {
    switch (error.code) {
      case 'auth/user-not-found':
        console.error('User not found!');
        break;
      case 'auth/invalid-email':
        console.error('Invalid email!');
        break;
      case 'auth/weak-password':
        console.error('Weak password!');
        break;
      case 'auth/email-already-in-use':
        console.error('Email already in use!');
        break;
      // Add other Firebase error codes as needed
      default:
        console.error('Unknown Firebase error:', error);
    }
  } else {
    // Handle other types of errors
    console.error('An error occurred:', error);
  }
}