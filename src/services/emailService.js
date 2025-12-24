import emailjs from '@emailjs/browser';

// Initialize EmailJS (call this once when app loads)
export const initializeEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
  if (!publicKey) {
    console.warn('EmailJS public key not configured');
    return false;
  }
  
  try {
    emailjs.init(publicKey);
    return true;
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
    return false;
  }
};

// Send quote request email
export const sendQuoteEmail = async (formData) => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const receiverEmail = import.meta.env.VITE_RECEIVE_EMAIL;

  if (!serviceId || !templateId || !receiverEmail) {
    console.error('EmailJS configuration incomplete');
    throw new Error('Email service not properly configured');
  }

  try {
    const templateParams = {
      to_email: receiverEmail,
      from_email: formData.email,
      from_name: formData.name,
      company: formData.company || 'Not provided',
      phone: formData.phone || 'Not provided',
      project_type: formData.projectType,
      subject: formData.subject,
      message: formData.message,
      request_type: formData.requestType,
      file_name: formData.file ? formData.file.name : 'No file attached'
    };

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams
    );

    console.log('Email sent successfully:', response);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// Send contact form email
export const sendContactEmail = async (formData) => {
  return sendQuoteEmail(formData);
};
