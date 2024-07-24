import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import DataObjectIcon from '@mui/icons-material/DataObject';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import CallIcon from '@mui/icons-material/Call';

const NavBar = () => {
  return (
    <div className="fixed top-0 h-16 w-screen flex flex-row justify-center
                  bg-gray-800 ">
                    
        
        <NavBarIcon icon={<HomeIcon size="28" />}  text="Home" />
        <NavBarIcon icon={<PersonIcon size="28" />}  text="About" />
        <NavBarIcon icon={<DataObjectIcon size="28" />}  text="Projects" />
        <NavBarIcon icon={<WorkHistoryIcon size="28" />}  text="Experience" />
        <NavBarIcon icon={<CallIcon size="28" />}  text="Contact" />
    </div>
  );
};

const NavBarIcon = ({ text, icon }) => (
  <div className="group navbar-text hover-underline-animation">
    {text}
    <span class="navbar-tooltip group-hover:scale-100">
      {icon}
    </span>
  </div>
);

export default NavBar;