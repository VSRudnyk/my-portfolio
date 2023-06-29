const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: 'none',
      fontSize: '22px',
      padding: '10px',
      transition: '0.2s ease-in',
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a
        className="icon"
        style={styles.icon}
        href="https://github.com/VSRudnyk"
      >
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Vladimir Rudnyk' GitHub Profile"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/vladimir-rudnyk/"
      >
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Vladimir Rudnyk' LinkedIn Profile"
        ></i>
      </a>
      {/* <a className="icon" style={styles.icon} href="https://www.instagram.com/michael.yeates/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Vladimir Rudnyk' Instagram Profile"></i>
      </a> */}
      <a
        className="icon"
        style={styles.icon}
        href="https://t.me/Vladimir_Rudnyk"
      >
        <i
          className="fa-brands fa-telegram"
          aria-hidden="true"
          title="Vladimir Rudnyk' Telegram Profile"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
