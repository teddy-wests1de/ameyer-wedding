export function Footer() {
  const date = new Date();
  return (
    <footer className='footer'>
      <p className='owners'>
        A & L - 2024
      </p>
      <p className='author'>
        CSD &copy; {date.getFullYear()}
      </p>
    </footer>
  );
}
