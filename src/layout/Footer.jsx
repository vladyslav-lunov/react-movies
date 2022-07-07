export function Footer() {
  return (
    <footer className='page-footer indigo lighten-2'>
      <div className='footer-copyright'>
        <div className='container'>
          {new Date().getFullYear()}
          <a className='grey-text text-lighten-4 right' href='#!'>
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
