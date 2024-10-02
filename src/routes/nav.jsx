import jgLogo from "/jg-logo-reverse.svg";

function Nav() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <>  
        <nav className='header py-8'>
            <div className='mx-auto container flex'>
            <div className='flex-none content-center w-12'><img src={jgLogo}></img></div>
            <div className='flex-1 content-center px-5 font-medium text-3xl'>Joey Groh</div>
            <div className='flex content-center'><button className='btn-primary' src='emailto:joey@homegrohn.com'>Contact Me</button></div>
            </div>
        </nav>
      </>
    )
  }
  
  export default Nav