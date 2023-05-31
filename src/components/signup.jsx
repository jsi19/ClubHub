const handleEmail = (e) => {
  if (e.length === 0) {
    setEmailError(false);
    return true;
  }
  if (!isValidEmail(e)) {
    setEmailError(true);
    return false;
  }
  const dom = e.substring(e.indexOf("@") + 1);
};

 // Add closing curly brace at the end of the code