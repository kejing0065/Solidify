// EmailJS Configuration
// Get your credentials from: https://www.emailjs.com/

export const emailJSConfig = {
  // Replace these with your actual EmailJS credentials
  SERVICE_ID: 'service_q87ybho', // Your EmailJS Service ID
  TEMPLATE_ID: 'template_l3aejqe', // Your EmailJS Template ID
  PUBLIC_KEY: '3uPrN2I-mDTBOQkxX', // Your EmailJS Public Key
};

export const initEmailJS = () => {
  try {
    // Initialize EmailJS with your public key
    // Note: Make sure to set this in your environment variables for security
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || emailJSConfig.PUBLIC_KEY;
    
    if (publicKey && publicKey !== 'xxxxx') {
      // emailjs.init(publicKey); // Uncomment when ready
      console.log('EmailJS will be initialized with your credentials');
      return true;
    } else {
      console.warn('EmailJS not configured. Please set your credentials in .env file');
      return false;
    }
  } catch (error) {
    console.error('Error initializing EmailJS:', error);
    return false;
  }
};
