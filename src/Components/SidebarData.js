import HomeIcon from '@mui/icons-material/Home';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/Home"
    },

    {
        title: "Dashboard",
        icon: <SpaceDashboardRoundedIcon />,
        link: "/Dashboard"
    },

    {
        title: "Inbox",
        icon: <MailRoundedIcon />,
        link: "/Inbox"
    },

    {
        title: "Products",
        icon: <ArticleRoundedIcon />,
        link: "/Products"
    },

    {
        title: "Admin",
        icon: <SettingsSharpIcon />,
        link: "/Admin"
    }
]