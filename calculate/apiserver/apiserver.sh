#!/bin/bash

# Check if enrollAdmin.js file exists
if [ -f "enrollAdmin.js" ]; then
  # Run enrollAdmin.js
  node enrollAdmin.js
  echo "Admin enrollment successful."
else
  echo "Error: enrollAdmin.js file not found."
fi

# Check if registerUser.js file exists
if [ -f "registerUser.js" ]; then
  # Run registerUser.js
  node registerUser.js
  echo "User registration successful."
else
  echo "Error: registerUser.js file not found."
fi

echo "Calculate network setup complete."