import React, { useEffect, useState } from 'react';

// Router
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import ResetPassword from '../components/ResetPassword';
import { useAuth } from '../hooks/useAuth';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { t, i18n } = useTranslation();

  const [error, setError] = useState(null);

  const { signInUser, error: firebaseError, loading, googleSignIn } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Empty fields');
      return;
    }

    signInUser(email, password);
  };

  const googleLogin = (e) => {
    e.preventDefault();
    googleSignIn();
  }

  useEffect(() => {
    if (firebaseError) {
      setError(firebaseError);
    }
  }, [firebaseError]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);

  return (
    <>
      <div
        class="gridRow flex flex-row flex-wrap justify-center items-center">
        <div
          class="gridCol basis-1/4 bg-nbwhite ring-2 ring-gray-900 rounded-lg min-w-fit px-5 py-2"
        >
          <div
            class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
          >
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
              <a
                href="#"
                class="nbLogo transition-all flex justify-center items-end shrink gap-2 lg:ml-6 mr-4"
              >
                <svg
                  class="logoVectors2 group/logo shrink-0 w-12 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="group-hover/logo:fill-nbgreendark fill-nbgreenmain"
                    d="M0.647461 16.1046H4.4444V18.5788L7.02756 16.1046H12.0383L15.4929 19.4135V30.95H11.3847V20.4867L10.3265 19.4433H7.71226L4.75562 22.3051V30.95H0.647461V16.1046Z"
                  />
                  <path
                    class="group-hover/logo:fill-nbgreenmain fill-nbgreendark"
                    d="M5.01861 14.8673H0.647461V10.4631L3.68252 7.42806L0.647461 4.393V0.0218506H5.0516L8.07016 3.04042L11.0887 0.0218506H15.4929V4.393L12.4578 7.42806L15.4929 10.4631V14.8673H11.1217L8.07016 11.8157L5.01861 14.8673Z"
                  />
                  <path
                    class="group-hover/logo:fill-nbgreenmain fill-nbgreendark"
                    d="M37.1836 30.95H32.8125V26.5459L35.8476 23.5108L32.8125 20.4758V16.1046H37.2166L40.2352 19.1232L43.2538 16.1046H47.6579V20.4758L44.6228 23.5108L47.6579 26.5459V30.95H43.2868L40.2352 27.8985L37.1836 30.95Z"
                  />
                  <path
                    class="group-hover/logo:fill-nbgreendark fill-nbgreenmain"
                    d="M16.7295 27.7064V9.50659H20.7287V18.0659L22.9403 15.9937H28.4543L31.5749 19.1171V27.8266L28.4543 30.95H19.9712L16.7295 27.7064ZM26.4245 27.5863L27.5757 26.415V20.5286L26.4245 19.3573H23.4554L20.7287 22.0603V26.415L21.8799 27.5863H26.4245Z"
                  />
                  <path
                    class="group-hover/logo:fill-nbgreenmain fill-nbgreendark"
                    d="M19.7646 7.4283L16.7295 4.39324V0.0220947H21.1336L24.1522 3.04066L27.1708 0.0220947H31.5749V4.39324L28.5398 7.4283L31.5749 10.4634V14.8675H27.2037L24.1522 11.8159L19.7646 7.4283Z"
                  />
                  <path
                    class="group-hover/logo:fill-nbgreendark fill-nbgreenmain"
                    d="M35.8644 7.44473L32.8128 10.4963L37.1675 14.8674L40.252 11.8324L43.2871 14.8674L47.6582 10.4633L44.6396 7.44473L47.6582 4.42616L43.2871 0.0220277L40.252 3.05709L37.2169 0.0220272L32.8128 4.35194L35.8644 7.44473Z"
                  />
                </svg>
                <svg
                  class="logoTextVectors2 group/logotext shrink-0 w-16 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    class="group-hover/logotext:fill-nbgreenmain fill-nbgreendark"
                  >
                    <path
                      d="M36.2686 0.496582H38.8092V2.22504L40.4752 0.496582H43.4323V2.82896H41.0374L39.0174 4.91144V10.8673H36.2686V0.496582Z"
                    />
                    <path
                      d="M24.3945 8.95145V6.57743L26.3104 4.66154H31.5791V3.34958L30.9335 2.70401H27.8098L27.1851 3.34958V3.93268H24.4778V2.74566L26.7061 0.496582H32.0581L34.2863 2.74566V10.8673H31.8082V9.38877L30.2671 10.8673H26.3104L24.3945 8.95145ZM30.0797 8.74321L31.5791 7.30629V6.61907H27.664L27.1018 7.18134V8.22258L27.6224 8.74321H30.0797Z"
                    />
                    <path
                      d="M12.3574 8.74321V2.66236L14.5024 0.496582H20.3541L22.5199 2.66236V6.59825H15.1063V7.93104L15.7727 8.61826H19.1671L19.7919 7.97269V7.43124H22.4991V8.78485L20.4374 10.8673H14.4607L12.3574 8.74321ZM19.7711 4.68237V3.47453L19.063 2.74566H15.8143L15.1063 3.47453V4.68237H19.7711Z"
                    />
                    <path
                      d="M0.658203 0.496582H3.19883V2.22504L4.92729 0.496582H8.28008L10.5916 2.80814V10.8673H7.84276V3.55783L7.13472 2.82896H5.38543L3.40708 4.82814V10.8673H0.658203V0.496582Z"
                    />
                  </g>
                  <g
                    class="group-hover/logotext:fill-nbgreenmain fill-nbgreendark"
                  >
                    <path
                      d="M52.4199 16.5792H54.9605V18.3077L56.689 16.5792H60.0418L62.3534 18.8908V26.95H59.6045V19.6405L58.8964 18.9116H57.1472L55.1688 20.9108V26.95H52.4199V16.5792Z"
                    />
                    <path
                      d="M40.5459 25.0341V22.6601L42.4618 20.7442H47.7305V19.4322L47.0849 18.7867H43.9612L43.3364 19.4322V20.0153H40.6292V18.8283L42.8575 16.5792H48.2094L50.4377 18.8283V26.95H47.9595V25.4714L46.4185 26.95H42.4618L40.5459 25.0341ZM46.2311 24.8258L47.7305 23.3889V22.7017H43.8154L43.2531 23.264V24.3052L43.7737 24.8258H46.2311Z"
                    />
                    <path
                      d="M29.4492 12.0811H32.1981V20.3902H34.0098L36.6546 16.5792H39.695L36.2381 21.5772L39.9033 26.95H36.8629L33.9474 22.7225H32.1981V26.95H29.4492V12.0811Z"
                    />
                    <path
                      d="M24.5195 12.0811H27.2684V26.95H24.5195V12.0811Z"
                    />
                    <path
                      d="M12.541 25.0341V22.6601L14.4569 20.7442H19.7256V19.4322L19.08 18.7867H15.9563L15.3315 19.4322V20.0153H12.6243V18.8283L14.8526 16.5792H20.2045L22.4328 18.8283V26.95H19.9546V25.4714L18.4136 26.95H14.4569L12.541 25.0341ZM18.2262 24.8258L19.7256 23.3889V22.7017H15.8105L15.2482 23.264V24.3052L15.7689 24.8258H18.2262Z"
                    />
                    <path
                      d="M0.658203 24.7009V12.0811H3.40708V18.0161L4.92729 16.5792H8.7174L10.8624 18.745V24.7842L8.7174 26.95H2.88646L0.658203 24.7009ZM7.32214 24.6176L8.11348 23.8054V19.7238L7.32214 18.9116H5.28131L3.40708 20.7858V23.8054L4.19842 24.6176H7.32214Z"
                    />
                  </g>
                </svg>
              </a>
              <h2
                class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
              >
                Sign in to your account
              </h2>
            </div>

            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form class="space-y-6" action="#" method="POST">
                <div>
                  <label
                    for="email"
                    class="block text-sm text-left font-medium leading-6 text-gray-900"
                  >Email address</label
                  >
                  <div class="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      autocomplete="email"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-2 hover:ring-nbgreenlight focus:ring-2 focus:ring-inset focus:ring-nbgreendark sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label
                      for="password"
                      class="block text-sm font-medium leading-6 text-gray-900"
                    >Password</label
                    >
                    <div class="text-sm">
                      <a
                        href="#"
                        class="font-semibold text-nbpurpledark hover:text-nbpurplemain"
                      >Forgot password?</a
                      >
                    </div>
                  </div>
                  <div class="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      autocomplete="current-password"
                      required
                      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-2 hover:ring-nbgreenlight focus:ring-2 focus:ring-inset focus:ring-nbgreendark sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"

                    class="flex w-full justify-center rounded-full bg-nbgreendark px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-nbbluedark focus:ring-1 focus:ring-nbbluedark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    {t("login.log_in")}
                  </button>
                </div>
                <div class="inline-flex items-center justify-center w-full">
                  <hr
                    class="w-full h-0.5 my-8 bg-nbblack"
                  />
                  <span
                    class="absolute px-3 font-medium text-nbblack -translate-x-1/2 bg-white left-1/2"
                  >or</span
                  >
                </div>
                <div>
                  <button
                    type="submit"
                    onClick={(e) => { googleLogin(e) }}
                    class="flex w-full justify-center rounded-full bg-nbblack px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-nbbluedark focus:ring-1 focus:ring-nbbluedark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in with Google
                  </button>
                </div>
              </form>

              <p class="mt-10 text-center text-sm text-gray-500">
                Not a member?
                <Link
                  to='/register'
                  class="font-semibold leading-6 text-nbpurpledark hover:text-nbpurplemain"
                >Sign up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
