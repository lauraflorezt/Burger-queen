const Layout = ({ children }) => {
    return (
      <div className='flex items-center justify-center '>
      <div className=' p-0' style={{ width: '1180px', height: '820px' }}>
        {children}
      </div>
    </div>
  );
  }
  
  export default Layout