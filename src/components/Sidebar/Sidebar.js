import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import DescriptionIcon from '@mui/icons-material/Description';
import PDF from '../../Documents/Kirk_Lefevre_Resume.pdf';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col justify-center
                  bg-transparent ">
                    
        <SideBarIcon icon={<DarkModeIcon size="28" />} text="Dark/Light" link="Dark" />
        <Divider />
        <SideBarIcon icon={<GitHubIcon size="32" />} text="GitHub" link="https://github.com/kirkcit0"/>
        <SideBarIcon icon={<LinkedInIcon size="20" />} text="LinkedIn" link="https://www.linkedin.com/in/kirklefevre/" />
        <SideBarIcon icon={<ContactMailIcon size="20" />} text="Email" link="email" />
        <Divider />
        <SideBarIcon icon={<DescriptionIcon size="22" />} text="Resume" link={PDF} />
    </div>
  );
};

const SideBarIcon = ({ icon, text, link }) => {
  // Handle click by opening the link in a new tab if it exists
  const handleClick = (url) => {
    if(url === "Dark"){
      alert('edgy');
    }
    else if (url === "email"){
      alert('hello world');
    }
    else if(url === PDF){
      window.open(url, '_blank', 'noopener,noreferrer');
    }
    else if (url) {
      console.log('success');
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="sidebar-icon group" onClick={() => handleClick(link)}>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
  );
};



const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;