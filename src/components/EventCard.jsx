// Routes
import { Link } from 'react-router-dom';

// Components
import { useFetchData } from '../hooks/useFetchData';
import { useTranslation } from 'react-i18next';

// Radix Imports
import {
  Root,
  Item,
  Trigger,
  Content,
  Link as RadixLink,
} from '@radix-ui/react-navigation-menu';

// Icons
import { useAuth } from '../hooks/useAuth';

const EventCard = ({ user, userObject, images }) => {
  const { signOutUser } = useAuth();

  const { documents: movies } = useFetchData('films');
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section id="gridRow" className="flex flex-row flex-wrap justify-center items-center">
      <div id="gridCol"
        className="lg:flex items-stretch bg-nbgreylight mx-auto lg:mx-0 px-5 sm:py-2 pt-2 pb-3 rounded-lg w-full min-w-fit lg:max-w-5xl">
        <div className="lg:flex-auto px-2 sm:px-6 py-5 sm:py-7 lg:p-10 sm:pb-5 lg:pb-10">
          <div>
            <div className="flex flex-row justify-between w-full">
              <h4 className="font-bold font-h3-subtitle text-base text-nbgreenmain tracking-tighter">July 2023</h4>
              <img className="p-0.5 w-24 h-[1.5rem] select-none"
                src="./public/images/co-funded_EN/horizontal/RGB/PNG/EN_Co-fundedbytheEU_RGB_Monochrome.png" alt="" />
            </div>
            <div>
              <h3 className="font-black font-h2-title text-2xl text-gray-900 tracking-tight">Beyond Genders</h3>
              <h5 className="font-bold font-h3-subtitle text-gray-500 text-xs leading-4 tracking-wide">a Euroculture
                event
              </h5>
            </div>
          </div>

          <p className="mt-6 font-p-paragraph text-base text-gray-600 leading-7">Three weeks of creation, Beyond Genders.
            Menet, a remote
            village in the heart of France, where we gathered to create together around the theme of Beyond Genders,
            to
            use art to highlight the diversity of the human condition. Three weeks of creation, togetherness,
            experiences, another possibility to develop ourselves and change the world.</p>
          <div className="flex items-center gap-x-4 mt-7">
            <h4 className="flex-none font-h3-subtitle font-semibold text-nbgreenmain text-sm leading-6">Who were there?
            </h4>
            <div className="flex-auto bg-nbgreenmain h-px"></div>
          </div>
          <ul className="flex flex-wrap gap-4 mt-5 mb-10 flew-row">
            <div className="flex flex-col gap-0">
              <ul role="list" className="flex flex-wrap gap-4 sm:gap-4 flew-row text-gray-600 text-sm leading-6">
                <li className="flex gap-x-2">
                  <svg className="flex-none w-5 h-6 text-nbgreenmain" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                  </svg>
                  <p className="font-h3-subtitle">France</p>
                </li>
              </ul>
              <ul role="list" className="flex -space-x-3 mt-2 flew-row text-gray-600 text-sm leading-6">
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-0">
              <ul role="list" className="flex flex-wrap gap-4 sm:gap-4 flew-row text-gray-600 text-sm leading-6">
                <li className="flex gap-x-2">
                  <svg className="flex-none w-5 h-6 text-nbgreenmain" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                  </svg>
                  <p className="font-h3-subtitle">Bulgaria</p>
                </li>
              </ul>
              <ul role="list" className="flex -space-x-3 mt-2 flew-row text-gray-600 text-sm leading-6">
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-0">
              <ul role="list" className="flex flex-wrap gap-4 sm:gap-4 flew-row text-gray-600 text-sm leading-6">
                <li className="flex gap-x-2">
                  <svg className="flex-none w-5 h-6 text-nbgreenmain" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                  </svg>
                  <p className="font-h3-subtitle">Hungary</p>
                </li>
              </ul>
              <ul role="list" className="flex -space-x-3 mt-2 flew-row text-gray-600 text-sm leading-6">
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-0">
              <ul role="list" className="flex flex-wrap gap-4 sm:gap-4 flew-row text-gray-600 text-sm leading-6">
                <li className="flex gap-x-2">
                  <svg className="flex-none w-5 h-6 text-nbgreenmain" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                  </svg>
                  <p className="font-h3-subtitle">Spain</p>
                </li>
              </ul>
              <ul role="list" className="flex -space-x-3 mt-2 flew-row text-gray-600 text-sm leading-6">
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-0">
              <ul role="list" className="flex flex-wrap gap-4 sm:gap-4 flew-row text-gray-600 text-sm leading-6">
                <li className="flex gap-x-2">
                  <svg className="flex-none w-5 h-6 text-nbgreenmain" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5" />
                  </svg>
                  <p className="font-h3-subtitle">Czech Rep.</p>
                </li>
              </ul>
              <ul role="list" className="flex -space-x-3 mt-2 flew-row text-gray-600 text-sm leading-6">
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
                <li className="flex">
                  <button type="button" id="menu-button" aria-expanded="true" aria-haspopup="true"
                    className="flex justify-center items-end gap-1 bg-nbgreydark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreymiddark rounded-full w-7 min-w-fit h-7 min-h-fit -translate-y-px overflow-hidden select-none group/button">
                    <div className="">
                      <svg
                        className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymain transition-all fill-nbgreymain"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M11.7571 0.951111C8.62515 0.951111 6.06264 4.14002 6.06264 8.0692C6.06264 11.9984 8.62515 15.1873 11.7571 15.1873C14.8891 15.1873 17.4516 11.9984 17.4516 8.0692C17.4516 4.14002 14.8891 0.951111 11.7571 0.951111ZM5.80639 15.1873C2.78832 15.3297 0.368164 17.8068 0.368164 20.8818V23.729H23.1461V20.8818C23.1461 17.8068 20.7544 15.3297 17.7078 15.1873C16.1703 16.9241 14.0634 18.0345 11.7571 18.0345C9.45085 18.0345 7.3439 16.9241 5.80639 15.1873Z" />
                      </svg>
                    </div>
                  </button>
                </li>
              </ul>
            </div>
          </ul>
          <div
            className="lg:flex lg:flex-col lg:justify-center bg-gray-50 py-4 lg:py-6 rounded-2xl text-center ring-1 ring-gray-900/5 ring-inset">
            <div className="mx-auto px-8 max-w-xs">
              <p className="font-semibold text-gray-600 text-sm">Were you also there?</p>
              <button href="#"
                className="bg-nbgreendark hover:bg-nbgreenmain active:bg-nbgreenlight disabled:bg-nbgreenlight mt-3 px-3 py-2 rounded-xl min-w-fit min-h-fit transition-all select-none group/button focus:outline-none focus:ring focus:ring-nbgreenmain">
                <div className="flex items-start gap-2 -mb-0.5">
                  <svg
                    className="group-hover/button:fill-nbgreenlight group-active/button:fill-nbgreenmain group-disabled/button:fill-nbgreymiddark h-4 translate-y-px fill-nbgreenmain"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                    <path
                      d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                  </svg>
                  <p
                    className="group-hover/button:text-nbgreydark group-active/button:text-nbgreydark group-disabled/button:text-nbgreymiddark min-w-max font-button font-semibold text-nbgreylight text-sm leading-5 tracking-tight">
                    I was there!</p>
                </div>
              </button>
              <p className="mt-4 text-gray-600 text-xs leading-4">Click on the button, assign your profile and get
                verified!</p>
            </div>
          </div>
        </div>
        <div
          className="lg:flex-shrink-0 lg:flex-auto gap-3 -mt-2 sm:-mt-5 lg:mt-0 px-0 py-5 sm:py-7 sm:p-6 lg:p-10 lg:w-full lg:max-w-lg">
          <div className="mb-10 px-2 sm:px-0 font-h3-subtitle">
            <div className="flex items-center gap-x-4">
              <h4 className="flex-none font-h3-subtitle font-semibold text-nbgreenmain text-sm leading-6">Workshops &
                Performances</h4>
              <div className="flex-auto bg-nbgreenmain h-px"></div>
            </div>
            <div className="mt-4">
              <ul role="list" className="space-y-1 pl-4 text-sm list-disc">
                <li className="text-gray-400 group/anchor"><a href="https://www.youtube.com/watch?v=qdAgXq_Iieg"
                  className="group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreymain text-gray-600 transition-all">Queer
                  Topic Presentation</a></li>
                <li className="text-gray-400 group/anchor">
                  <p className="text-gray-600">Drag
                    Workshop & Performance</p>
                </li>
                <li className="text-gray-400 group/anchor">
                  <p className="text-gray-600">Puppet Theatre Workshop & Performance</p>
                </li>
                <li className="text-gray-400 group/anchor">
                  <p className="text-gray-600">Countryside Theatre Workshop & Performance</p>
                </li>
                <li className="text-gray-400 group/anchor">
                  <p className="text-gray-600">"Love Once Again" Video Short</p>
                </li>
                <li className="text-gray-400 group/anchor"><a href="https://www.youtube.com/watch?v=qdAgXq_Iieg"
                  className="group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreymain text-gray-600 transition-all">"Mooshroom"
                  Mockumentary Short Film</a></li>
              </ul>
            </div>
          </div>
          <div className="gap-3 lg:gap-3 grid lg:grid-cols-3 lg:grid-flow-dense mx-auto max-w-2xl">
            <div
              className="block lg:col-span-2 bg-nbgreydark rounded-2xl max-h-48 lg:max-h-none overflow-hidden aspect-video">
              <video controls src="./public/images/Love_Once_Again.mov"
                className="w-full h-full object-center object-cover"></video>
            </div>
            <div className="block rounded-2xl max-h-48 lg:max-h-none overflow-hidden aspect-auto">
              <img src="./public/images/IMG_2271.jpg" className="w-full h-full object-center object-cover" />
              {/* src={images[0]} */}
            </div>
            <div className="gap-y-3 grid grid-cols-1">
              <div className="rounded-2xl max-h-48 lg:max-h-none overflow-hidden aspect-auto">
                <img src="./public/images/IMG_20230728_221158.jpg" className="w-full h-full object-center object-cover" />
              </div>
              <div className="rounded-2xl max-h-48 lg:max-h-none overflow-hidden aspect-auto">
                <img src="./public/images/IMG_20230711_174225.jpg" className="w-full h-full object-center object-cover" />
              </div>
            </div>
            <div className="gap-y-3 grid grid-cols-1">
              <div className="block rounded-2xl max-h-48 lg:max-h-none overflow-hidden aspect-auto">
                <img src="./public/images/IMG_7504.jpg" className="w-full h-full object-center object-cover" />
              </div>
              <div className="block rounded-2xl max-h-48 lg:max-h-none overflow-hidden aspect-auto">
                <img src="./public/images/20230724_230936.jpg" className="w-full h-full object-center object-cover" />
              </div>
            </div>
            <div className="block rounded-2xl max-h-48 lg:max-h-none overflow-hidden aspect-auto">
              <img src="./public/images/IMG_7435.jpg" className="w-full h-full object-center object-cover" />
            </div>
            <div className="block rounded-2xl max-h-48 lg:max-h-none overflow-hidden aspect-auto">
              <img src="./public/images/IMG_7438.jpg" className="w-full h-full object-center object-cover" />
            </div>
            <div
              className="flex justify-center lg:col-span-2 bg-nbblack p-0 rounded-2xl sm:max-h-none overflow-hidden aspect-video">
              <iframe className="mx-auto my-0" src="https://www.youtube.com/embed/hRs6vZHItDM?si=ONErfGNSxgdXItYx"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
