import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import DescriptionIcon from '@mui/icons-material/Description';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col justify-center
                  bg-gray-900 shadow-lg">
                    
        <SideBarIcon icon={<DarkModeIcon size="28" />} text="Dark/Light" />
        <Divider />
        <SideBarIcon icon={<GitHubIcon size="32" />} text="GitHub" />
        <SideBarIcon icon={<LinkedInIcon size="20" />} text="LinkedIn" />
        <SideBarIcon icon={<ContactMailIcon size="20" />} text="Email" />
        <Divider />
        <SideBarIcon icon={<DescriptionIcon size="22" />} text="Resume"/>
    </div>
  );
};

const SideBarIcon = ({ icon, text}) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);


const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;