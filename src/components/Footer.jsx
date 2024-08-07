// Routes
import { Link } from 'react-router-dom';

// Components
import { useTranslation } from 'react-i18next';

// Icons
import { useAuth } from '../hooks/useAuth';

const Footer = ({ betaVersion }) => {
  const { signOutUser } = useAuth();

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer>
      <nav id="footerGrid" className="gap-12 px-6 lg:px-12 pt-8 pb-4">
        <div className="justify-start lg:justify-center gap-8 grid sm:grid-cols-2 lg:grid-cols-4">
          <div id="gridCol" className="flex flex-col items-start gap-2.5 grow-1 base-1/4">
            <div className="flex items-start gap-2.5 pb-1">
              <h2 className="font-h2-title font-semibold text-nbgreylight text-sm leading-5">{t("footer.title_about")}</h2>
            </div>
            <div className="flex flex-col items-start gap-1.5">
              <p className="max-w-sm font-normal font-p-paragraph text-nbgreylight text-xs leading-4">{t("footer.about_description")}
              </p>
              <Link to="/about" className="flex items-start gap-1 -mb-0.5 min-w-fit min-h-fit select-none group/anchor">
                <svg
                  className="group-hover/anchor:fill-nbgreenmain group-active/anchor:fill-nbgreenlight group-disabled/anchor:fill-nbgreenlight h-3 transition-all translate-y-1 fill-nbgreylight"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                  <path
                    d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                </svg>
                <p
                  className="group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreymain min-w-max font-a-anchor font-semibold text-nbgreylight text-sm leading-5 tracking-tight transition-all">
                  {t("footer.about_link")}</p>
              </Link>
            </div>
          </div>
          <div id="gridCol" className="flex flex-col items-start gap-2.5 grow-1 base-1/4">
            <div className="flex items-start gap-2.5 pb-1">
              <h2 className="font-h2-title font-semibold text-nbgreylight text-sm leading-5">{t("footer.title_services")}</h2>
            </div>
            <div className="gap-2.5 grid grid-cols-2 sm:grid-cols-1 2xl:grid-cols-2 text-wrap">
              <Link to="/" className="flex items-start gap-1 -mb-0.5 min-w-fit min-h-fit select-none group/anchor">
                <svg
                  className="group-hover/anchor:fill-nbgreenmain group-active/anchor:fill-nbgreenlight group-disabled/anchor:fill-nbgreenlight h-3 transition-all translate-y-1 fill-nbgreylight"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                  <path
                    d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                </svg>
                <p
                  className="group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreymain min-w-fit font-a-anchor font-semibold text-nbgreylight text-sm leading-5 tracking-tight transition-all">
                  {t("footer.competition")}</p>
              </Link>
              <Link to="/past-competitions" className="flex items-start gap-1 -mb-0.5 min-w-fit min-h-fit select-none group/anchor">
              <svg
                  className="group-hover/anchor:fill-nbgreenmain group-active/anchor:fill-nbgreenlight group-disabled/anchor:fill-nbgreenlight h-3 transition-all translate-y-1 fill-nbgreylight"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                  <path
                    d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                </svg>
                <p
                  className="group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreymain min-w-fit font-a-anchor font-semibold text-nbgreylight text-sm leading-5 tracking-tight transition-all">
                  {t("footer.past-competitions")}</p>
              </Link>
              <Link to="/events" className="flex items-start gap-1 -mb-0.5 min-w-fit min-h-fit pointer-events-none select-none group/anchor">
                <svg
                  className="group-hover/anchor:fill-nbgreenmain group-active/anchor:fill-nbgreenlight group-disabled/anchor:fill-nbgreenlight h-3 transition-all translate-y-1 fill-nbgreymain"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                  <path
                    d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                </svg>
                <p
                  className="group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreymain min-w-fit font-a-anchor font-semibold text-nbgreymain text-sm leading-5 tracking-tight transition-all">
                  {t("footer.future_events")}</p>
              </Link>
              <Link to="/past-events" className="flex items-start gap-1 -mb-0.5 min-w-fit min-h-fit select-none group/anchor">
                <svg
                  className="group-hover/anchor:fill-nbgreenmain group-active/anchor:fill-nbgreenlight group-disabled/anchor:fill-nbgreenlight h-3 transition-all translate-y-1 fill-nbgreylight"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                  <path
                    d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                </svg>
                <p
                  className="group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreymain min-w-fit font-a-anchor font-semibold text-nbgreylight text-sm leading-5 tracking-tight transition-all">
                  {t("footer.past_events")}</p>
              </Link>
              <Link to="/upload-demo" className="flex items-start gap-1 -mb-0.5 min-w-fit min-h-fit select-none group/anchor">
                <svg
                  className="group-hover/anchor:fill-nbgreenmain group-active/anchor:fill-nbgreenlight group-disabled/anchor:fill-nbgreenlight h-3 transition-all translate-y-1 fill-nbgreylight"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                  <path
                    d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                </svg>
                <p
                  className="group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreymain min-w-fit font-a-anchor font-semibold text-nbgreylight text-sm leading-5 tracking-tight transition-all">
                  {t("footer.upload_demo")}</p>
              </Link>
              <Link to="/upload-event" className="flex items-start gap-1 -mb-0.5 min-w-fit min-h-fit select-none group/anchor">
                <svg
                  className="group-hover/anchor:fill-nbgreenmain group-active/anchor:fill-nbgreenlight group-disabled/anchor:fill-nbgreenlight h-3 transition-all translate-y-1 fill-nbgreylight"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                  <path
                    d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                </svg>
                <p
                  className="group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreymain min-w-fit font-a-anchor font-semibold text-nbgreylight text-sm leading-5 tracking-tight transition-all">
                  {t("navbar.upload_event")}</p>
              </Link>
              <Link to="/films" className="flex items-start gap-1 -mb-0.5 min-w-fit min-h-fit pointer-events-none select-none group/anchor">
                <svg
                  className="group-hover/anchor:fill-nbgreenmain group-active/anchor:fill-nbgreenlight group-disabled/anchor:fill-nbgreenlight h-3 transition-all translate-y-1 fill-nbgreymain"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                  <path
                    d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                </svg>
                <p
                  className="group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreymain min-w-fit font-a-anchor font-semibold text-nbgreymain text-sm leading-5 tracking-tight transition-all">
                  {t("footer.films")}</p>
              </Link>
              <Link to="/search" className="flex items-start gap-1 -mb-0.5 min-w-fit min-h-fit select-none group/anchor">
                <svg
                  className="group-hover/anchor:fill-nbgreenmain group-active/anchor:fill-nbgreenlight group-disabled/anchor:fill-nbgreenlight h-3 transition-all translate-y-1 fill-nbgreylight"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                  <path
                    d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                </svg>
                <p
                  className="group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreymain min-w-fit font-a-anchor font-semibold text-nbgreylight text-sm leading-5 tracking-tight transition-all">
                  {t("footer.search")}</p>
              </Link>
              <Link to="/favourites" className="flex items-start gap-1 -mb-0.5 min-w-fit min-h-fit select-none group/anchor">
                <svg
                  className="group-hover/anchor:fill-nbgreenmain group-active/anchor:fill-nbgreenlight group-disabled/anchor:fill-nbgreenlight h-3 transition-all translate-y-1 fill-nbgreylight"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                  <path
                    d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                </svg>
                <p
                  className="group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreymain min-w-fit font-a-anchor font-semibold text-nbgreylight text-sm leading-5 tracking-tight transition-all">
                  {t("footer.favourites")}</p>
              </Link>
              <Link to="/profile" className="flex items-start gap-1 -mb-0.5 min-w-fit min-h-fit select-none group/anchor">
                <svg
                  className="group-hover/anchor:fill-nbgreenmain group-active/anchor:fill-nbgreenlight group-disabled/anchor:fill-nbgreenlight h-3 transition-all translate-y-1 fill-nbgreylight"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                  <path
                    d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                </svg>
                <p
                  className="group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreymain min-w-fit font-a-anchor font-semibold text-nbgreylight text-sm leading-5 tracking-tight transition-all">
                  {t("footer.profile")}</p>
              </Link>
            </div>
          </div>
          <div id="gridCol" className="flex flex-col items-start gap-2.5 grow-1 base-1/4">
            <div className="flex items-start gap-2.5 pb-1">
              <h2 className="font-h2-title font-semibold text-nbgreymain text-sm leading-5">{t("footer.title_credit-card")}</h2>
            </div>
            <div className="flex items-start gap-2.5 pb-1">
              <p className="max-w-sm font-normal font-p-paragraph text-nbgreymain text-xs leading-4">{t("footer.credit-card_description")}
              </p>
            </div>
            <div className="flex items-center gap-2.5 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="63" height="27" viewBox="0 0 63 27" fill="none">
                <path
                  d="M11.4372 12.0844C11.291 11.8371 11.0857 11.6299 10.8398 11.4817C10.5682 11.3318 10.2614 11.2576 9.95141 11.2671C9.56836 11.2525 9.18665 11.3204 8.83203 11.4661V16.9775C8.95912 17.034 9.09263 17.0747 9.22959 17.0987C9.41945 17.1322 9.61207 17.1475 9.80482 17.1443C10.5022 17.1443 11.023 16.87 11.3673 16.3214C11.7115 15.7728 11.8833 15.0451 11.8826 14.1384C11.8856 13.7567 11.851 13.3757 11.7793 13.0008C11.7206 12.6774 11.6048 12.3671 11.4372 12.0844Z"
                  fill="#90B0B9" />
                <path
                  d="M19.9417 11.2574C19.2339 11.2574 18.7057 11.5206 18.357 12.047C18.0083 12.5733 17.834 13.3421 17.834 14.3534C17.834 16.275 18.5155 17.2359 19.8784 17.2359C20.0741 17.237 20.2693 17.2187 20.4614 17.1814C20.6217 17.1544 20.7776 17.1054 20.9245 17.0357V11.4631C20.7947 11.4042 20.6597 11.3573 20.5214 11.323C20.3315 11.2779 20.1369 11.2559 19.9417 11.2574Z"
                  fill="#90B0B9" />
                <path
                  d="M0 0.148926V26.6161H62.4829V0.148926H0ZM13.186 17.347C12.3716 18.1462 11.1971 18.5458 9.66239 18.5458C8.98743 18.5558 8.31322 18.497 7.65018 18.3701C7.19677 18.2876 6.75741 18.1408 6.34535 17.9342V6.35204H8.82286V10.2443C9.07292 10.1528 9.32893 10.0785 9.5891 10.0219C9.94321 9.95039 10.304 9.91721 10.6652 9.92288C11.1866 9.91698 11.7037 10.0184 12.1843 10.2209C12.6341 10.4109 13.0383 10.6944 13.3703 11.0527C13.7097 11.4268 13.9703 11.8656 14.1366 12.3427C14.3254 12.8782 14.4179 13.443 14.4097 14.0108C14.4097 15.4387 14.0018 16.5508 13.186 17.347ZM23.4314 18.488C23.4314 18.488 19.5169 18.547 19.1615 18.547C18.625 18.5532 18.0924 18.4561 17.5924 18.2612C17.1285 18.0804 16.708 17.8033 16.3587 17.4482C16.0057 17.0823 15.7313 16.6478 15.5524 16.1716C15.3506 15.6298 15.2516 15.055 15.2604 14.4768C15.2519 13.8374 15.3534 13.2013 15.5602 12.5963C15.7483 12.0523 16.0569 11.558 16.463 11.1506C16.8916 10.7326 17.4074 10.4151 17.9733 10.2209C18.653 9.99333 19.3666 9.88387 20.0832 9.89731C20.7404 9.89263 21.3964 9.95185 22.0422 10.0741C22.6396 10.1931 23.0971 10.2832 23.4269 10.4589L23.4314 18.488ZM29.3347 11.5576C28.9794 11.4438 28.6095 11.3824 28.2365 11.3752C27.9118 11.3535 27.5865 11.4056 27.2848 11.5276V18.488H24.7962V10.5045C25.3156 10.2947 25.8568 10.1436 26.4097 10.0541C27.1584 9.93814 27.9154 9.88531 28.6729 9.89619C28.8695 9.89619 29.076 9.89619 29.2925 9.91176C29.4654 9.91795 29.6377 9.93316 29.8089 9.95735L29.3347 11.5576ZM33.3714 18.488H30.8828V9.99961C31.7152 9.99784 32.547 10.0465 33.3736 10.1453L33.3714 18.488ZM33.0982 8.5428C32.8205 8.76437 32.4736 8.88056 32.1188 8.87087C31.7658 8.8815 31.4206 8.76511 31.146 8.5428C31.0234 8.45147 30.9236 8.33296 30.8545 8.19655C30.7853 8.06014 30.7486 7.90955 30.7473 7.75658C30.7485 7.60357 30.7851 7.45292 30.8542 7.31648C30.9234 7.18005 31.0233 7.06156 31.146 6.97034C31.4206 6.74804 31.7658 6.63165 32.1188 6.64228C32.4736 6.63259 32.8205 6.74878 33.0982 6.97034C33.2227 7.06037 33.3243 7.17842 33.3949 7.31499C33.4655 7.45155 33.5031 7.60281 33.5046 7.75658C33.5033 7.91014 33.466 8.06124 33.3958 8.19777C33.3256 8.33431 33.2244 8.45248 33.1004 8.5428H33.0982ZM34.6929 14.3445C34.6162 10.9983 37.1726 8.22031 40.4052 8.14024C41.1975 8.12262 41.9849 8.26956 42.7177 8.57177C43.4504 8.87399 44.1128 9.32493 44.6629 9.89619C42.5596 9.98961 40.7239 10.8426 39.4635 11.6077C39.3281 11.2841 39.277 11.1628 39.1393 10.8292C38.4818 11.1315 37.9278 11.6213 37.5468 12.2373C37.1658 12.8532 36.9746 13.568 36.9971 14.2922C37.0067 14.8175 37.1275 15.3349 37.3517 15.81C37.5759 16.285 37.8983 16.707 38.2975 17.0479C37.8766 17.1591 36.7428 17.5027 35.6224 17.486C35.036 16.5416 34.7149 15.4563 34.6929 14.3445ZM40.6895 20.2618C39.8962 20.281 39.1075 20.1351 38.3733 19.8334C37.6391 19.5318 36.9754 19.0808 36.4241 18.5091C38.5341 18.4157 40.363 17.5628 41.6246 16.7977C41.7589 17.1213 41.8111 17.2425 41.9477 17.5761C42.6057 17.274 43.1601 16.7842 43.5413 16.168C43.9226 15.5517 44.1138 14.8366 44.091 14.112C44.0812 13.5868 43.9601 13.0696 43.7357 12.5947C43.5113 12.1199 43.1888 11.6981 42.7895 11.3574C43.2115 11.2462 44.3442 10.9026 45.4658 10.9193C46.051 11.8622 46.372 12.9454 46.3952 14.0553C46.4752 17.4038 43.9177 20.1817 40.6862 20.2618H40.6895ZM55.4369 18.4825H52.9416V12.5451C52.9416 12.1166 52.7868 11.806 52.4774 11.6132C52.1268 11.409 51.7256 11.3084 51.3203 11.323C51.1025 11.322 50.8852 11.3403 50.6706 11.3775C50.4953 11.4048 50.3229 11.448 50.1554 11.5065V18.4825H47.6634V10.4989C48.1959 10.3035 48.7459 10.1598 49.3058 10.0697C50.0025 9.94802 50.7086 9.88922 51.4158 9.89397C52.7224 9.89397 53.72 10.1053 54.4085 10.5278C55.097 10.9504 55.4413 11.6143 55.4413 12.5196L55.4369 18.4825Z"
                  fill="#90B0B9" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="27" viewBox="0 0 43 27" fill="none">
                <path
                  d="M16.5664 13.3082C16.5648 15.2816 17.0115 17.2296 17.8726 19.0046C18.7338 20.7796 19.9868 22.3352 21.537 23.5537C23.0871 22.3352 24.3402 20.7796 25.2013 19.0046C26.0625 17.2296 26.5091 15.2816 26.5075 13.3082C26.5091 11.3348 26.0625 9.38686 25.2013 7.61184C24.3402 5.83681 23.0871 4.28121 21.537 3.06274C19.9868 4.28121 18.7338 5.83681 17.8726 7.61184C17.0115 9.38686 16.5648 11.3348 16.5664 13.3082Z"
                  fill="#90B0B9" />
                <path
                  d="M16.2325 13.308C16.2278 11.2981 16.678 9.31339 17.5492 7.50284C18.4205 5.69229 19.6903 4.10304 21.2631 2.85453C19.0184 1.17606 16.291 0.271237 13.4896 0.275651C10.0392 0.277125 6.7306 1.65085 4.29141 4.09476C1.85221 6.53866 0.482127 9.85264 0.482422 13.308C0.482422 16.7639 1.85325 20.0782 4.29337 22.522C6.73349 24.9658 10.043 26.3389 13.4941 26.3392C16.2955 26.3441 19.0231 25.4392 21.2675 23.7603C19.6939 22.5125 18.4232 20.9237 17.5512 19.1133C16.6791 17.3029 16.2282 15.318 16.2325 13.308Z"
                  fill="#90B0B9" />
                <path
                  d="M41.35 21.3827V20.9635H41.5188V20.8778H41.0879V20.9635H41.2567V21.3827H41.35ZM42.1851 21.3827V20.8767H42.0529L41.9008 21.2248L41.7497 20.8767H41.6176V21.3827H41.7109V21.0013L41.853 21.3349H41.9496L42.0918 21.0013V21.3838L42.1851 21.3827Z"
                  fill="#90B0B9" />
                <path
                  d="M25.668 17.917C25.7302 17.7535 25.7901 17.5889 25.8456 17.4221C25.7901 17.5834 25.7302 17.7513 25.668 17.917Z"
                  fill="#90B0B9" />
                <path
                  d="M21.5371 23.554C21.7259 23.405 21.9102 23.2504 22.0924 23.0925C21.9102 23.2549 21.7259 23.405 21.5371 23.554Z"
                  fill="#90B0B9" />
                <path
                  d="M29.5787 0.27564C26.7811 0.27323 24.0578 1.17797 21.8164 2.85452C23.389 4.10309 24.6586 5.69237 25.5297 7.50292C26.4008 9.31348 26.8508 11.2982 26.8458 13.308C26.851 15.3177 26.4012 17.3026 25.53 19.1131C24.6589 20.9237 23.3892 22.513 21.8164 23.7614C24.0591 25.4395 26.7847 26.3444 29.5843 26.3403C33.0355 26.3403 36.3453 24.9673 38.7857 22.5235C41.2261 20.0797 42.597 16.7652 42.597 13.3091C42.5972 11.5972 42.2605 9.90202 41.6063 8.32045C40.9521 6.73888 39.9931 5.30187 38.7842 4.09153C37.5753 2.8812 36.1401 1.92124 34.5606 1.2665C32.9811 0.611752 31.2882 0.275055 29.5787 0.27564Z"
                  fill="#90B0B9" />
                <path
                  d="M22.0918 23.0906C22.2473 22.9527 22.3994 22.8103 22.5493 22.6658C22.3994 22.8092 22.2473 22.9527 22.0918 23.0906Z"
                  fill="#90B0B9" />
                <path
                  d="M23.8008 21.2615C23.9118 21.1158 24.0229 20.9668 24.1339 20.8167C24.0218 20.9668 23.9141 21.1158 23.8008 21.2615Z"
                  fill="#90B0B9" />
                <path
                  d="M23.2835 21.8923C23.0703 22.1355 22.8482 22.3709 22.6172 22.5985C22.8482 22.3687 23.0703 22.1333 23.2835 21.8923Z"
                  fill="#90B0B9" />
                <path
                  d="M24.6309 20.0508C24.783 19.7995 24.9263 19.5415 25.0617 19.2791C24.9251 19.5415 24.783 19.7995 24.6309 20.0508Z"
                  fill="#90B0B9" />
                <path
                  d="M21.537 3.06274C19.9868 4.28121 18.7338 5.83681 17.8726 7.61184C17.0115 9.38686 16.5648 11.3348 16.5664 13.3082C16.5648 15.2816 17.0115 17.2296 17.8726 19.0046C18.7338 20.7796 19.9868 22.3352 21.537 23.5537C23.0871 22.3352 24.3402 20.7796 25.2013 19.0046C26.0625 17.2296 26.5091 15.2816 26.5075 13.3082C26.5091 11.3348 26.0625 9.38686 25.2013 7.61184C24.3402 5.83681 23.0871 4.28121 21.537 3.06274Z"
                  fill="#90B0B9" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="27" viewBox="0 0 35 27" fill="none">
                <path
                  d="M10.7306 26.2178V24.4907C10.7306 23.8402 10.3164 23.402 9.65011 23.3965C9.4601 23.3841 9.27025 23.4229 9.10033 23.509C8.93041 23.595 8.78664 23.7252 8.68399 23.8858C8.59067 23.7298 8.457 23.602 8.29709 23.5158C8.13718 23.4297 7.95699 23.3884 7.7756 23.3965C7.61762 23.3888 7.46037 23.4225 7.31938 23.4942C7.17838 23.566 7.05851 23.6734 6.9716 23.8057V23.4654H6.37305V26.2178H6.97716V24.692C6.97716 24.2138 7.24145 23.9603 7.65011 23.9603C8.05877 23.9603 8.24756 24.2194 8.24756 24.6864V26.2178H8.84945V24.692C8.84945 24.2138 9.12597 23.9603 9.52241 23.9603C9.91886 23.9603 10.1265 24.2194 10.1265 24.6864V26.2178H10.7306ZM14.0987 24.841V23.4654H13.5013V23.799C13.399 23.6675 13.2669 23.5624 13.1158 23.4923C12.9648 23.4223 12.7992 23.3894 12.6329 23.3965C11.8633 23.3965 11.2592 24.0014 11.2592 24.8421C11.2592 25.6829 11.8633 26.2878 12.6329 26.2878C12.7992 26.2951 12.9649 26.2624 13.116 26.1923C13.2671 26.1223 13.3992 26.017 13.5013 25.8853V26.2189H14.0987V24.841ZM11.8778 24.841C11.8778 24.3573 12.1943 23.9603 12.7117 23.9603C13.2059 23.9603 13.5391 24.3406 13.5391 24.841C13.5391 25.3415 13.2059 25.7218 12.7117 25.7218C12.1943 25.7218 11.8778 25.3248 11.8778 24.841ZM26.8938 23.3953C27.0954 23.3931 27.2955 23.4309 27.4824 23.5065C27.6572 23.5761 27.8168 23.6793 27.9521 23.8101C28.0847 23.9408 28.1901 24.0965 28.262 24.2683C28.3372 24.4505 28.375 24.6461 28.373 24.8433C28.375 25.0404 28.3372 25.236 28.262 25.4182C28.1906 25.5903 28.0852 25.7461 27.9521 25.8764C27.8168 26.0072 27.6572 26.1104 27.4824 26.18C27.2955 26.2556 27.0954 26.2934 26.8938 26.2912C26.6919 26.2935 26.4914 26.2557 26.3042 26.18C26.1298 26.1108 25.9709 26.0076 25.8366 25.8764C25.7042 25.7458 25.5993 25.59 25.5279 25.4182C25.4526 25.236 25.4149 25.0404 25.4169 24.8433C25.4143 24.646 25.4521 24.4504 25.5279 24.2683C25.5998 24.0968 25.7047 23.9411 25.8366 23.8101C25.9709 23.6789 26.1298 23.5757 26.3042 23.5065C26.4914 23.4308 26.6919 23.393 26.8938 23.3953ZM26.8938 23.9614C26.7767 23.9607 26.6606 23.9826 26.5518 24.0259C26.4498 24.0673 26.3573 24.129 26.2797 24.2071C26.2014 24.2872 26.1399 24.3821 26.0987 24.4863C26.0536 24.5998 26.0313 24.7211 26.0332 24.8433C26.0313 24.9658 26.0536 25.0874 26.0987 25.2013C26.1396 25.3053 26.2012 25.3999 26.2797 25.4794C26.3573 25.5575 26.4498 25.6192 26.5518 25.6606C26.6604 25.7049 26.7766 25.7272 26.8938 25.7262C27.0107 25.727 27.1265 25.7047 27.2348 25.6606C27.3374 25.6192 27.4307 25.5576 27.509 25.4794C27.5875 25.3997 27.6494 25.3052 27.6912 25.2013C27.7363 25.0874 27.7585 24.9658 27.7567 24.8433C27.7585 24.7211 27.7363 24.5998 27.6912 24.4863C27.6492 24.3822 27.5873 24.2874 27.509 24.2071C27.4307 24.1289 27.3374 24.0673 27.2348 24.0259C27.1263 23.9826 27.0106 23.9607 26.8938 23.9614ZM17.3547 24.8433C17.3547 23.9858 16.8206 23.3976 16.0499 23.3976C15.2459 23.3976 14.6829 23.9847 14.6829 24.8433C14.6829 25.7184 15.2681 26.2889 16.091 26.2889C16.5007 26.3032 16.9014 26.1663 17.217 25.9042L16.9238 25.4593C16.6971 25.6417 16.4161 25.743 16.1254 25.7474C15.7401 25.7474 15.3891 25.5683 15.3036 25.0734H17.3436C17.3436 24.9989 17.3547 24.9244 17.3547 24.8433ZM15.3092 24.6019C15.3725 24.2049 15.6135 23.9347 16.0388 23.9347C16.4241 23.9347 16.6706 24.176 16.7339 24.6019H15.3092ZM19.8722 24.1704C19.6116 24.0198 19.3168 23.9386 19.016 23.9347C18.6829 23.9347 18.493 24.0548 18.493 24.2561C18.493 24.4407 18.6995 24.4918 18.9583 24.5274L19.2403 24.5675C19.8378 24.6531 20.1998 24.9066 20.1998 25.3904C20.1998 25.9142 19.74 26.2878 18.9472 26.2878C18.5227 26.3001 18.1056 26.1749 17.7578 25.9309L18.0388 25.4649C18.3024 25.6611 18.6244 25.7626 18.9527 25.7529C19.3614 25.7529 19.579 25.6328 19.579 25.4193C19.579 25.2636 19.4247 25.178 19.096 25.1313L18.815 25.0912C18.1998 25.0045 17.8666 24.7287 17.8666 24.2794C17.8666 23.7323 18.3108 23.3987 19.0104 23.3987C19.4038 23.3852 19.7927 23.4851 20.1309 23.6867L19.8722 24.1704ZM22.745 24.0148H21.7678V25.2581C21.7678 25.535 21.8655 25.7184 22.1642 25.7184C22.3508 25.7122 22.5326 25.6586 22.6928 25.5628L22.8661 26.0754C22.6418 26.2152 22.3828 26.2888 22.1187 26.2878C21.4113 26.2878 21.1637 25.9086 21.1637 25.2692V24.0125H20.6084V23.4654H21.1637V22.6313H21.7678V23.4654H22.745V24.0148ZM24.8139 23.3987C24.9589 23.3993 25.1028 23.4249 25.2392 23.4743L25.0549 24.0381C24.9363 23.9903 24.8095 23.9665 24.6817 23.9681C24.2908 23.9681 24.0954 24.2216 24.0954 24.6764V26.22H23.4979V23.4676H24.0898V23.8012C24.1632 23.6752 24.2692 23.5712 24.3966 23.5004C24.5241 23.4295 24.6682 23.3944 24.8139 23.3987ZM28.9494 25.8163C28.9874 25.816 29.0251 25.8232 29.0604 25.8374C29.0932 25.8518 29.1233 25.8717 29.1492 25.8964C29.1742 25.922 29.1945 25.9517 29.2092 25.9842C29.2229 26.0178 29.2301 26.0536 29.2303 26.0899C29.2307 26.128 29.2236 26.1658 29.2092 26.2011C29.1942 26.2331 29.1739 26.2625 29.1492 26.2878C29.1235 26.3128 29.0934 26.3328 29.0604 26.3468C29.0253 26.3615 28.9874 26.3687 28.9494 26.3679C28.9113 26.3685 28.8735 26.3613 28.8383 26.3468C28.8053 26.3328 28.7752 26.3128 28.7495 26.2878C28.7248 26.2627 28.7048 26.2333 28.6906 26.2011C28.6753 26.166 28.6677 26.1281 28.6684 26.0899C28.6685 26.0535 28.676 26.0175 28.6906 25.9842C28.7046 25.9515 28.7245 25.9217 28.7495 25.8964C28.7754 25.8717 28.8055 25.8518 28.8383 25.8374C28.8737 25.8235 28.9113 25.8163 28.9494 25.8163ZM28.9494 26.3045C28.978 26.3044 29.0064 26.2983 29.0326 26.2867C29.0577 26.2763 29.0804 26.2607 29.0993 26.2411C29.1188 26.2217 29.1343 26.1987 29.1448 26.1733C29.1561 26.1469 29.1617 26.1185 29.1615 26.0899C29.1612 26.0616 29.1555 26.0337 29.1448 26.0076C29.1339 25.9823 29.1185 25.9593 29.0993 25.9397C29.0804 25.9201 29.0577 25.9046 29.0326 25.8942C29.0063 25.8829 28.978 25.8772 28.9494 25.8775C28.9207 25.8772 28.8924 25.8829 28.8661 25.8942C28.8403 25.9046 28.8169 25.9201 28.7972 25.9397C28.7784 25.9594 28.7633 25.9824 28.7528 26.0076C28.7416 26.0336 28.736 26.0616 28.7361 26.0899C28.7359 26.1185 28.7415 26.1469 28.7528 26.1733C28.763 26.1986 28.7781 26.2217 28.7972 26.2411C28.8169 26.2608 28.8403 26.2763 28.8661 26.2867C28.8923 26.2983 28.9207 26.3044 28.9494 26.3045ZM28.966 25.962C28.993 25.9605 29.0196 25.9684 29.0415 25.9842C29.0503 25.9912 29.0573 26.0002 29.0619 26.0105C29.0665 26.0207 29.0687 26.0319 29.0682 26.0432C29.0683 26.0529 29.0665 26.0625 29.0629 26.0714C29.0593 26.0804 29.0539 26.0886 29.0471 26.0954C29.0301 26.1098 29.0092 26.1187 28.9871 26.121L29.0704 26.2167H29.0049L28.9283 26.121H28.9027V26.2167H28.8494V25.962H28.966ZM28.9027 26.0098V26.0776H28.9649C28.9769 26.0785 28.9889 26.0758 28.9993 26.0699C29.0037 26.067 29.0072 26.063 29.0095 26.0583C29.0119 26.0536 29.0129 26.0484 29.0126 26.0432C29.0129 26.0381 29.0117 26.0331 29.0094 26.0286C29.0071 26.0241 29.0036 26.0203 28.9993 26.0176C28.9889 26.0117 28.9769 26.009 28.9649 26.0098H28.9027Z"
                  fill="#90B0B9" />
                <path
                  d="M33.1334 17.051V16.7174H33.2678V16.6495H32.9258V16.7174H33.0579V17.051H33.1334ZM33.7997 17.051V16.6484H33.6887L33.5676 16.9253L33.4477 16.6484H33.3367V17.051H33.4111V16.7474L33.5221 17.0099H33.5987L33.7098 16.7463V17.051H33.7997Z"
                  fill="#90B0B9" />
                <path
                  d="M13.4023 10.6247C13.401 12.1959 13.7567 13.7468 14.4424 15.16C15.1281 16.5732 16.1258 17.8117 17.3601 18.7817C18.5943 17.8116 19.5919 16.5731 20.2774 15.1599C20.9629 13.7467 21.3183 12.1958 21.3168 10.6247C21.3184 9.05339 20.9629 7.50234 20.2774 6.08894C19.5919 4.67554 18.5943 3.43682 17.3601 2.46655C16.1259 3.43688 15.1283 4.67558 14.4426 6.08895C13.7569 7.50232 13.4012 9.05334 13.4023 10.6247Z"
                  fill="#90B0B9" />
                <path
                  d="M13.1351 10.6245C13.1311 9.02439 13.4894 7.44418 14.183 6.00266C14.8766 4.56114 15.8874 3.29582 17.1395 2.3018C15.355 0.966277 13.1864 0.24564 10.9585 0.247808C8.21057 0.248103 5.57524 1.34149 3.63223 3.28747C1.68922 5.23344 0.597656 7.87263 0.597656 10.6245C0.597656 13.3763 1.68926 16.0154 3.6323 17.9612C5.57534 19.9069 8.21067 21.0001 10.9585 21.0001C13.1869 21.001 15.3555 20.2788 17.1395 18.9417C15.8881 17.9483 14.8776 16.6838 14.1841 15.2433C13.4905 13.8028 13.1319 12.2237 13.1351 10.6245Z"
                  fill="#90B0B9" />
                <path
                  d="M20.6484 14.2925C20.6984 14.1624 20.7451 14.0312 20.7895 13.8977C20.7451 14.0312 20.6984 14.1602 20.6484 14.2925Z"
                  fill="#90B0B9" />
                <path
                  d="M17.3594 18.7813C17.5093 18.6634 17.6559 18.54 17.8036 18.4143C17.6559 18.54 17.5115 18.6634 17.3594 18.7813Z"
                  fill="#90B0B9" />
                <path
                  d="M21.127 12.5954C21.1492 12.4787 21.1703 12.3608 21.188 12.2429C21.1747 12.3608 21.1492 12.4787 21.127 12.5954Z"
                  fill="#90B0B9" />
                <path
                  d="M21.2148 12.0671C21.2363 11.9144 21.2541 11.7609 21.2681 11.6067C21.2541 11.7616 21.2363 11.9151 21.2148 12.0671Z"
                  fill="#90B0B9" />
                <path
                  d="M23.7616 0.247811C21.5323 0.244923 19.3621 0.965584 17.5762 2.3018C18.8283 3.29582 19.8392 4.56114 20.5327 6.00266C21.2263 7.44418 21.5846 9.02439 21.5806 10.6245C21.5838 12.2237 21.2252 13.8028 20.5316 15.2434C19.8381 16.6839 18.8276 17.9483 17.5762 18.9417C19.3621 20.2779 21.5323 20.9985 23.7616 20.9956C26.5093 20.9954 29.1443 19.9021 31.0871 17.9563C33.03 16.0105 34.1214 13.3716 34.1214 10.6201C34.1205 7.86906 33.0287 5.23101 31.086 3.28597C29.1433 1.34092 26.5087 0.248106 23.7616 0.247811Z"
                  fill="#90B0B9" />
                <path
                  d="M17.7988 18.4135C17.9232 18.3022 18.0443 18.191 18.1631 18.0798C18.0443 18.1899 17.9232 18.3034 17.7988 18.4135Z"
                  fill="#90B0B9" />
                <path
                  d="M19.1621 16.9575C19.2509 16.8463 19.3376 16.7229 19.422 16.6028C19.3376 16.7229 19.2509 16.8408 19.1621 16.9575Z"
                  fill="#90B0B9" />
                <path
                  d="M18.7493 17.4592C18.5794 17.6527 18.4039 17.8407 18.2207 18.0208C18.3995 17.8407 18.5794 17.6527 18.7493 17.4592Z"
                  fill="#90B0B9" />
                <path
                  d="M17.359 2.46655C16.125 3.43699 15.1276 4.67574 14.4421 6.0891C13.7566 7.50247 13.4011 9.05343 13.4023 10.6247C13.401 12.1959 13.7567 13.7468 14.4424 15.16C15.1281 16.5732 16.1258 17.8117 17.3601 18.7817C18.5943 17.8116 19.5919 16.5731 20.2774 15.1599C20.9629 13.7467 21.3183 12.1958 21.3168 10.6247C21.3182 9.0533 20.9626 7.50219 20.2769 6.08878C19.5912 4.67537 18.5934 3.43671 17.359 2.46655Z"
                  fill="#90B0B9" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="53" height="18" viewBox="0 0 53 18" fill="none">
                <path
                  d="M20.0788 1.1076L13.1938 17.5462H8.7052L5.31931 4.42379C5.11387 3.61531 4.93507 3.31951 4.30986 2.9781C3.28932 2.42207 1.60249 1.90273 0.121094 1.58023L0.221041 1.10315H7.447C8.3676 1.10315 9.19603 1.71702 9.40591 2.77904L11.1938 12.2917L15.6125 1.10204H20.0744L20.0788 1.1076ZM37.6679 12.1827C37.6846 7.84562 31.6713 7.6043 31.7179 5.66596C31.7301 5.07657 32.2909 4.44936 33.5191 4.28923C34.1277 4.20916 35.8034 4.14911 37.7057 5.02542L38.4508 1.53909C37.181 1.06137 35.8362 0.814329 34.4797 0.80957C30.2821 0.80957 27.327 3.04482 27.3026 6.24424C27.2748 8.61072 29.4125 9.93074 31.0205 10.7181C32.6752 11.5232 33.2304 12.0403 33.2248 12.761C33.2126 13.8641 31.9045 14.3512 30.6818 14.3701C28.5475 14.4035 27.3082 13.7918 26.3209 13.3326L25.5514 16.9334C26.543 17.3894 28.3742 17.7864 30.2732 17.8064C34.7351 17.8064 37.6535 15.6001 37.6679 12.1827ZM48.7518 17.5495H52.6784L49.2492 1.11094H45.6257C45.2384 1.10729 44.859 1.22027 44.5366 1.43523C44.2143 1.65018 43.9638 1.95719 43.8178 2.31642L37.4458 17.5517H41.9067L42.7951 15.0963H48.2365L48.7518 17.5495ZM44.0166 11.7223L46.252 5.5492L47.538 11.7223H44.0166ZM26.1499 1.1076L22.6385 17.5462H18.392L21.9045 1.1076H26.1499Z"
                  fill="#90B0B9" />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.3926 21.3254V13.9146H17.6669V15.6216H13.4237V16.7803H17.5658V18.4596H13.4237V19.5972H17.6669V21.3254H11.3926Z"
                  fill="#90B0B9" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M17.6348 21.3254L21.1062 17.6155L17.6348 13.9146H20.3221L22.4432 16.2632L24.5709 13.9146H27.1428V13.9735L23.7447 17.6155L27.1428 21.2197V21.3254H24.5454L22.3855 18.9522L20.2489 21.3254H17.6348Z"
                  fill="#90B0B9" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M0.677734 0.0566406V26.5594H27.1419V22.3814H24.028L22.3723 20.552L20.7288 22.3881L10.2646 22.3658V13.9363H6.87317L11.0519 4.44041H15.1197L16.5489 7.68987V4.44041H21.5716L22.4378 6.87472L23.3073 4.44041H27.1419V0.0566406H0.677734Z"
                  fill="#90B0B9" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M27.1414 19.7025V15.5078L25.1914 17.5952L27.1414 19.7025Z" fill="#90B0B9" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.8217 5.4729L8.53906 12.8759H10.7911L11.4108 11.3935H14.7667L15.3852 12.8759H17.6939L14.4236 5.4729H11.8217ZM12.1048 9.73212L13.0887 7.37454L14.0727 9.73212H12.1048Z"
                  fill="#90B0B9" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M17.6621 12.8745V5.47144L20.827 5.48256L22.4561 10.0342L24.0952 5.47144H27.1424V12.8745L25.1812 12.8923V7.80678L23.3312 12.8745H21.5422L19.6532 7.78898V12.8745H17.6621Z"
                  fill="#90B0B9" />
              </svg>
            </div>
          </div>
          <div id="gridCol" className="flex flex-col items-start gap-2.5 grow-1 base-1/4">
            <div className="flex items-start gap-2.5 pb-1">
              <h2 className="font-h2-title font-semibold text-nbgreylight text-sm leading-5">{t("footer.title_contact")}</h2>
            </div>
            <div className="flex items-center gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path
                  d="M1 2.88883L5.38367 5.81128C5.75689 6.06011 6.24311 6.06011 6.61633 5.81128L11 2.88883M2.11111 8.99995H9.88889C10.5026 8.99995 11 8.5025 11 7.88883V2.33328C11 1.71963 10.5026 1.22217 9.88889 1.22217H2.11111C1.49746 1.22217 1 1.71963 1 2.33328V7.88883C1 8.5025 1.49746 8.99995 2.11111 8.99995Z"
                  stroke="#E9EFF0" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <a href="mailto:productions@near-balkan.com"
                className="font-normal font-p-paragraph text-nbgreylight text-xs hover:text-nbgreenmain active:text-nbgreenlight leading-4">{t("footer.email")}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 2.11111C1 1.49746 1.49746 1 2.11111 1H3.93291C4.17204 1 4.38434 1.15302 4.45996 1.37987L5.29206 3.87623C5.3795 4.13851 5.26078 4.42517 5.0135 4.54882L3.75945 5.17583C4.37181 6.534 5.466 7.62822 6.82417 8.24056L7.45117 6.9865C7.57483 6.73922 7.8615 6.6205 8.12378 6.70794L10.6201 7.54006C10.847 7.61567 11 7.82794 11 8.06711V9.88889C11 10.5026 10.5026 11 9.88889 11H9.33333C4.73096 11 1 7.26906 1 2.66667V2.11111Z"
                  stroke="#E9EFF0" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <a href="tel:0036705337066" className="font-normal font-p-paragraph text-nbgreylight text-xs hover:text-nbgreenmain active:text-nbgreenlight leading-4">{t("footer.phone")}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 6L2.11111 4.88889M2.11111 4.88889L6 1L9.88889 4.88889M2.11111 4.88889V10.4444C2.11111 10.7513 2.35984 11 2.66667 11H4.33333M9.88889 4.88889L11 6M9.88889 4.88889V10.4444C9.88889 10.7513 9.64017 11 9.33333 11H7.66667M4.33333 11C4.64016 11 4.88889 10.7513 4.88889 10.4444V8.22222C4.88889 7.91539 5.13761 7.66667 5.44444 7.66667H6.55556C6.86239 7.66667 7.11111 7.91539 7.11111 8.22222V10.4444C7.11111 10.7513 7.35983 11 7.66667 11M4.33333 11H7.66667"
                  stroke="#E9EFF0" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <a href="https://near-balkan.com" className="font-normal font-p-paragraph text-nbgreylight text-xs hover:text-nbgreenmain active:text-nbgreenlight leading-4">
                {t("footer.url")}</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <div className="flex justify-between items-baseline py-2.5 gap2.5 self-stretch">
            <div className="flex items-end gap-2 pt-3">
              <div className="flex justify-center items-end gap-2 transition-all nbLogo shrink">
                <svg className="w-12 h-8 logoVectors2 shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path className="group-hover/logo:fill-nbgreendark fill-nbgreylight"
                    d="M0.647461 16.1046H4.4444V18.5788L7.02756 16.1046H12.0383L15.4929 19.4135V30.95H11.3847V20.4867L10.3265 19.4433H7.71226L4.75562 22.3051V30.95H0.647461V16.1046Z" />
                  <path className="group-hover/logo:fill-nbgreenmain fill-nbgreylight"
                    d="M5.01861 14.8673H0.647461V10.4631L3.68252 7.42806L0.647461 4.393V0.0218506H5.0516L8.07016 3.04042L11.0887 0.0218506H15.4929V4.393L12.4578 7.42806L15.4929 10.4631V14.8673H11.1217L8.07016 11.8157L5.01861 14.8673Z" />
                  <path className="group-hover/logo:fill-nbgreenmain fill-nbgreylight"
                    d="M37.1836 30.95H32.8125V26.5459L35.8476 23.5108L32.8125 20.4758V16.1046H37.2166L40.2352 19.1232L43.2538 16.1046H47.6579V20.4758L44.6228 23.5108L47.6579 26.5459V30.95H43.2868L40.2352 27.8985L37.1836 30.95Z" />
                  <path className="group-hover/logo:fill-nbgreendark fill-nbgreylight"
                    d="M16.7295 27.7064V9.50659H20.7287V18.0659L22.9403 15.9937H28.4543L31.5749 19.1171V27.8266L28.4543 30.95H19.9712L16.7295 27.7064ZM26.4245 27.5863L27.5757 26.415V20.5286L26.4245 19.3573H23.4554L20.7287 22.0603V26.415L21.8799 27.5863H26.4245Z" />
                  <path className="group-hover/logo:fill-nbgreenmain fill-nbgreylight"
                    d="M19.7646 7.4283L16.7295 4.39324V0.0220947H21.1336L24.1522 3.04066L27.1708 0.0220947H31.5749V4.39324L28.5398 7.4283L31.5749 10.4634V14.8675H27.2037L24.1522 11.8159L19.7646 7.4283Z" />
                  <path className="group-hover/logo:fill-nbgreendark fill-nbgreylight"
                    d="M35.8644 7.44473L32.8128 10.4963L37.1675 14.8674L40.252 11.8324L43.2871 14.8674L47.6582 10.4633L44.6396 7.44473L47.6582 4.42616L43.2871 0.0220277L40.252 3.05709L37.2169 0.0220272L32.8128 4.35194L35.8644 7.44473Z" />
                </svg>
                <svg className="w-16 h-7 logoTextVectors2 shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <g className="group-hover/logotext:fill-nbgreenmain fill-nbgreylight">
                    <path
                      d="M36.2686 0.496582H38.8092V2.22504L40.4752 0.496582H43.4323V2.82896H41.0374L39.0174 4.91144V10.8673H36.2686V0.496582Z" />
                    <path
                      d="M24.3945 8.95145V6.57743L26.3104 4.66154H31.5791V3.34958L30.9335 2.70401H27.8098L27.1851 3.34958V3.93268H24.4778V2.74566L26.7061 0.496582H32.0581L34.2863 2.74566V10.8673H31.8082V9.38877L30.2671 10.8673H26.3104L24.3945 8.95145ZM30.0797 8.74321L31.5791 7.30629V6.61907H27.664L27.1018 7.18134V8.22258L27.6224 8.74321H30.0797Z" />
                    <path
                      d="M12.3574 8.74321V2.66236L14.5024 0.496582H20.3541L22.5199 2.66236V6.59825H15.1063V7.93104L15.7727 8.61826H19.1671L19.7919 7.97269V7.43124H22.4991V8.78485L20.4374 10.8673H14.4607L12.3574 8.74321ZM19.7711 4.68237V3.47453L19.063 2.74566H15.8143L15.1063 3.47453V4.68237H19.7711Z" />
                    <path
                      d="M0.658203 0.496582H3.19883V2.22504L4.92729 0.496582H8.28008L10.5916 2.80814V10.8673H7.84276V3.55783L7.13472 2.82896H5.38543L3.40708 4.82814V10.8673H0.658203V0.496582Z" />
                  </g>
                  <g className="group-hover/logotext:fill-nbgreenmain fill-nbgreylight">
                    <path
                      d="M52.4199 16.5792H54.9605V18.3077L56.689 16.5792H60.0418L62.3534 18.8908V26.95H59.6045V19.6405L58.8964 18.9116H57.1472L55.1688 20.9108V26.95H52.4199V16.5792Z" />
                    <path
                      d="M40.5459 25.0341V22.6601L42.4618 20.7442H47.7305V19.4322L47.0849 18.7867H43.9612L43.3364 19.4322V20.0153H40.6292V18.8283L42.8575 16.5792H48.2094L50.4377 18.8283V26.95H47.9595V25.4714L46.4185 26.95H42.4618L40.5459 25.0341ZM46.2311 24.8258L47.7305 23.3889V22.7017H43.8154L43.2531 23.264V24.3052L43.7737 24.8258H46.2311Z" />
                    <path
                      d="M29.4492 12.0811H32.1981V20.3902H34.0098L36.6546 16.5792H39.695L36.2381 21.5772L39.9033 26.95H36.8629L33.9474 22.7225H32.1981V26.95H29.4492V12.0811Z" />
                    <path d="M24.5195 12.0811H27.2684V26.95H24.5195V12.0811Z" />
                    <path
                      d="M12.541 25.0341V22.6601L14.4569 20.7442H19.7256V19.4322L19.08 18.7867H15.9563L15.3315 19.4322V20.0153H12.6243V18.8283L14.8526 16.5792H20.2045L22.4328 18.8283V26.95H19.9546V25.4714L18.4136 26.95H14.4569L12.541 25.0341ZM18.2262 24.8258L19.7256 23.3889V22.7017H15.8105L15.2482 23.264V24.3052L15.7689 24.8258H18.2262Z" />
                    <path
                      d="M0.658203 24.7009V12.0811H3.40708V18.0161L4.92729 16.5792H8.7174L10.8624 18.745V24.7842L8.7174 26.95H2.88646L0.658203 24.7009ZM7.32214 24.6176L8.11348 23.8054V19.7238L7.32214 18.9116H5.28131L3.40708 20.7858V23.8054L4.19842 24.6176H7.32214Z" />
                  </g>
                </svg>
              </div>
            </div>
            <h3 className="font-h3-subtitle font-medium text-nbgreylight text-xs">{t("footer.copyright")}</h3>
          </div>
          <div className="flex flex-col items-start bg-nbgreylight h-px self-stretch">
          </div>
          <div className="flex justify-between items-center gap-2.5 py-2.5 w-full">
            <div className="flex items-center gap-2.5">
              <Link to="/privacy" className="flex items-start gap-1 -mb-0.5 min-w-fit min-h-fit pointer-events-none select-none group/anchor">
                <svg
                  className="group-hover/anchor:fill-nbgreenmain group-active/anchor:fill-nbgreenlight group-disabled/anchor:fill-nbgreenlight h-3 transition-all translate-y-1 fill-nbgreymain"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                  <path
                    d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                </svg>
                <p
                  className="group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreymain min-w-fit font-a-anchor font-semibold text-nbgreymain text-sm leading-5 tracking-tight transition-all">
                  {t("footer.privacy")}</p>
              </Link>
              <Link to="/terms-and-policies" className="flex items-start gap-1 -mb-0.5 min-w-fit min-h-fit pointer-events-none select-none group/anchor">
                <svg
                  className="group-hover/anchor:fill-nbgreenmain group-active/anchor:fill-nbgreenlight group-disabled/anchor:fill-nbgreenlight h-3 transition-all translate-y-1 fill-nbgreymain"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13" fill="none">
                  <path
                    d="M9.53333 6.5L12 4.03333L8.48 0.5L5.98667 2.95333L3.53333 0.5L0 4.06L2.44 6.5L0 8.94L3.53333 12.5L5.98667 10.0467L8.44 12.5L12 9L9.53333 6.5Z" />
                </svg>
                <p
                  className="group-hover/anchor:text-nbgreenmain group-active/anchor:text-nbgreenlight group-disabled/anchor:text-nbgreymain min-w-fit font-a-anchor font-semibold text-nbgreymain text-sm leading-5 tracking-tight transition-all">
                  {t("footer.terms_and_policies")}</p>
              </Link>
            </div>
            <div className="sm:flex items-center gap-2.5 hidden">
              <h5 className="font-h3-subtitle font-normal text-nbgreymain text-xs pointer-events-none select-none">{betaVersion}</h5>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
