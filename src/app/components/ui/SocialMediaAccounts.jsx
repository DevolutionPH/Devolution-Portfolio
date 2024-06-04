import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const SocialMediaAccounts = () => {
    const socialAccount = [{
        icon: <FaFacebookF />,
        url: "/"
    }, {
        icon: <FaTwitter />,
        url: "/"
    }, {
        icon: <FaLinkedinIn />,
        url: "/"
    }, {
        icon: <FaInstagram />,
        url: "/"
    }];

    return (
        <div className='flex items-center gap-2'>
            {socialAccount.map((social, index) => (
                <Link key={index} href={social.url} className='text-white border-white border rounded-full p-3'>
                    {social.icon}
                </Link>
            ))}
        </div>
    )
}

export default SocialMediaAccounts