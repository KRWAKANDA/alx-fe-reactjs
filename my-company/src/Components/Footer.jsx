function Footer() {
  return (
    <footer style={{
      padding: '10px',
      background: '#222',
      color: '#fff',
      textAlign: 'center',
      marginTop: '30px'
    }}>
      © {new Date().getFullYear()} Our Company. All rights reserved.
    </footer>
  );
}
export default Footer;
