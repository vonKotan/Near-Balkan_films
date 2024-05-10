// Routes
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Radix Imports
import {
  Root,
  List,
  Item,
  Trigger,
  Content,
  Link as RadixLink,
} from '@radix-ui/react-navigation-menu';

// Icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiUserFill } from 'react-icons/ri';
import { useAuth } from '../hooks/useAuth';

const Header = ({ user, userObject }) => {
  const { signOutUser } = useAuth();
  const { t, i18n } = useTranslation();

  return (
    <header className='shadow-md bg-gray-50 '>
      <Root className='flex justify-between items-center max-w-[1200px] w-[90%] mx-auto py-4 '>
        <Link
          to='/'
          className='text-2xl font-bold transition-all duration-300 hover:tracking-wider'
        >
          Near-Balkan
          <span className='text-nbgreenmain'>Films</span>
        </Link>
        <List className='relative top-[4px] '>
          {!user && (
            <Item>
              <Trigger>
                <GiHamburgerMenu size={20} className='text-nbgreenmain' />
              </Trigger>
              <Content className='absolute right-0 z-10 flex flex-col gap-2 p-4 shadow-md bg-gray-50'>
                <RadixLink>
                  <Link
                    to='/login'
                    className='px-4 text-nbgreenmain transition-all duration-200 hover:text-black hover:font-bold hover:border-l-4 hover:border-l-nbgreenmain'
                  >
                    {t("header.login")}
                  </Link>
                </RadixLink>
                <RadixLink>
                  <Link
                    to='/register'
                    className='px-4 text-nbgreenmain transition-all duration-200 hover:text-black hover:font-bold hover:border-l-4 hover:border-l-nbgreenmain'
                  >
                    {t("header.register")}
                  </Link>
                </RadixLink>
              </Content>
            </Item>
          )}
          {user && (
            <Item>
              {user.photoURL ? (
                <Trigger className='flex items-center gap-2'>
                  <img
                    src={user.photoURL}
                    alt='user'
                    className='object-cover w-10 h-10 rounded-full'
                  />
                </Trigger>
              ) : (
                <Trigger className='p-2 text-center text-nbgreenmain bg-black rounded-full'>
                  <RiUserFill size={15} className='text-nbgreenmain ' />
                </Trigger>
              )}
              <Content className='absolute right-0 z-10 flex flex-col gap-2 p-4 shadow-md bg-gray-50 w-[170px]'>
                <RadixLink>
                  <Link
                    to='/profile'
                    className='px-4 text-nbgreenmain transition-all duration-200 hover:text-black hover:font-bold hover:border-l-4 hover:border-l-nbgreenmain'
                  >
                    {t("header.profile")}
                  </Link>
                </RadixLink>
                {userObject && userObject.userType ==='creator' &&
                <RadixLink>
                  <Link
                    to='/add-review'
                    className='px-4 text-nbgreenmain transition-all duration-200 hover:text-black hover:font-bold hover:border-l-4 hover:border-l-nbgreenmain'
                  >
                    {t("header.new_review")}
                  </Link>
                </RadixLink>}

                <RadixLink>
                  <Link
                    to='/favorites'
                    className='px-4 text-nbgreenmain transition-all duration-200 hover:text-black hover:font-bold hover:border-l-4 hover:border-l-nbgreenmain'
                  >
                    {t("header.favorites")}
                  </Link>
                </RadixLink>
                <RadixLink>
                  <span
                    onClick={signOutUser}
                    className='px-4 text-nbgreenmain transition-all duration-200 cursor-pointer hover:text-black hover:font-bold hover:border-l-4 hover:border-l-nbgreenmain'
                  >
                    {t("header.signout")}
                  </span>
                </RadixLink>
              </Content>
            </Item>
          )}
        </List>
      </Root>
    </header>
  );
};

export default Header;
