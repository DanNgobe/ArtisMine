const CustomTheme = {
  token: {
    colorPrimary: '#2E3A59', // Muted modern primary color
    colorLink: '#4A90E2', // Soft blue for links
    colorSuccess: '#3CB371', // Fresh green for success
    colorWarning: '#FFAA33', // Vibrant amber for warnings
    colorError: '#FF6B6B', // Soft but bold red for errors
    borderRadius: 16, // Increased for a softer look
    fontSizeBase: '14px', // Reduced to fit compact design
    fontFamily: "'Poppins', 'Roboto', sans-serif", // Modern sans-serif font
  },
  components: {
    Button: {
      borderRadius: 20, // Rounded buttons
      colorPrimary: '#2E3A59',
      colorPrimaryHover: '#3F4D71',
      fontWeight: '600', // Slightly bold for emphasis
      fontSize: '14px',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)', // Subtle elevation
    },
    Input: {
      borderRadius: 12, // Rounded inputs
      borderColor: '#D1D5DB', // Neutral border color
      focusBorderColor: '#4A90E2', // Highlighted focus color
      fontSize: '14px',
      backgroundColor: '#F7F9FC', // Light background
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    },
    Card: {
      borderRadius: 16, // Softer card edges
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Gentle shadow
      backgroundColor: '#FFFFFF', // Clean white for contrast
      padding: '20px', // Spacious padding
    },
    Badge: {
      colorPrimary: '#FF6B6B', // Accent color for badges
      fontWeight: 'bold', // Highlighted text
      borderRadius: 12, // Pill-shaped
    },
    Avatar: {
      borderRadius: '50%', // Fully circular avatars
      backgroundColor: '#2E3A59', // Muted background
      fontSize: '16px', // Compact size
    },
  },
};

export default CustomTheme;
