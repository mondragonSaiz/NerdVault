import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import CustomModal from '../components/CustomModal';
import inboxLogo from '../img/dragonballLogo.svg';
import {
  disableExperimentalFragmentVariables,
  useMutation,
} from '@apollo/client';
import { LOGIN_USER, ADD_USER } from '../utils/mutations';
import AlertModal from '../components/AlertModal';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import gokuPic from '../img/profilepic/goku-pp.png';
import videlPic from '../img/profilepic/videl-pp.png';
import majinbPic from '../img/profilepic/majinb-pp.png';
import vegetaPic from '../img/profilepic/vegeta-pp.png';
import android17Pic from '../img/profilepic/android17-pp.png';
import android16Pic from '../img/profilepic/android16-pp.png';
import android18Pic from '../img/profilepic/android18-pp.png';
import gokublackPic from '../img/profilepic/gokublack-pp.png';
import trunksPic from '../img/profilepic/trunks-pp.png';
import gohanPic from '../img/profilepic/gohan-pp.png';
import chaoPic from '../img/profilepic/chao-pp.png';
import bulmaPic from '../img/profilepic/bulma-pp.png';
export default function Homepage() {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const [username, setUsernameState] = useState('');
  const [email, setEmailState] = useState('');
  const [password, setPasswordState] = useState('');
  const [confirmPasswordState, setConfirmPasswordState] = useState('');
  const [userIcon, setUserIcon] = useState('');
  // const [signUpState, setSignUpState] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  //   userIcon: '',
  // });
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleImageClick = (src) => {
    setUserIcon(src);
  };
  useEffect(() => {}, [userIcon]);
  const userIcons = [
    {
      name: 'gokuPic',
      src: gokuPic,
    },
    {
      name: 'android18Pic',
      src: android18Pic,
    },
    {
      name: 'videlPic',
      src: videlPic,
    },
    {
      name: 'gohanPic',
      src: gohanPic,
    },
    {
      name: 'majinbPic',
      src: majinbPic,
    },
    {
      name: 'vegetaPic',
      src: vegetaPic,
    },
    {
      name: 'android17Pic',
      src: android17Pic,
    },
    {
      name: 'gokublackPic',
      src: gokublackPic,
    },
    {
      name: 'trunksPic',
      src: trunksPic,
    },
    {
      name: 'bulmaPic',
      src: bulmaPic,
    },
    {
      name: 'android16Pic',
      src: android16Pic,
    },

    {
      name: 'chaoPic',
      src: chaoPic,
    },
  ];
  const [login, { error, data }] = useMutation(LOGIN_USER, {
    onError: (error) => {
      // Handle the error here
      console.error('ERROR**', error);

      if (
        error.message.includes('No user found with this email address') ||
        error.message.includes('Incorrect credentials')
      ) {
        setAlertMessage('Incorrect email or password. Please try again.');
        setShowAlert(true);
      }

      // if (error) {
      //   setAlertMessage(
      //     'Could not authenticate user. Please check your credentials.'
      //   );
      //   setShowAlert(true);
      // }
    },
    onCompleted: (data) => {
      // Handle successful login here
      console.log(data);
      if (data && data.login && data.login.token) {
        Auth.login(data.login.token);
      }
    },
  });
  const handleInputLoginChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      // Auth.login(data.login.token);
    } catch (err) {
      console.error(err);
      return;
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  const handleSignUpFormChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setUsernameState(value);
        break;
      case 'email':
        setEmailState(value);
        break;
      case 'password':
        setPasswordState(value);
        break;
      case 'confirmPassword':
        setConfirmPasswordState(value);
        break;
    }
  };
  const validation = (name, value) => {
    let regPassword = /((?=.*[A-Z])(?=.*[a-z])(?=.*\d))(?=.{8,})/; //Password should include at least 8 char, 1 cap, and 1 low case
    let regEmail = /^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;

    if (name === 'password') {
      return regPassword.test(value);
    } else if (name === 'email') {
      return regEmail.test(value);
    } else if (name === 'name') {
      if (!value) {
        setErrorMessage('Name Missing');
      }
    }
  };
  const [addUser, { error: addUserError, data: addUserData }] =
    useMutation(ADD_USER);
  const handleSignUpSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log('SUBMIT TRIGGGERED');
      console.log('1', username);
      console.log('2', email);
      console.log('3', password);
      console.log('4', userIcon);
      if (!username) {
        setErrorMessage('Plase provide a valid username');
        return;
      } else if (!email || !validation('email', email)) {
        setErrorMessage('Plase provide a valid email');
        return;
      } else if (!password || !validation('password', password)) {
        setErrorMessage('Plase provide a valid password');
        return;
      } else if (password !== confirmPasswordState) {
        setErrorMessage('Please double check your password');
        return;
      }
      const { data } = await addUser({
        variables: { username, email, password, userIcon },
      });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    //  linear-gradient(329deg, #090a0a 0%, #ffc049 100%);

    <div>
      <main className=" min-h-screen bg-gradient-to-t from-orange-500 to-[#000000] px-10 md:px-20 lg:px-40">
        <section className="h-[100%] ">
          <Navbar showLoginModal={() => setShowLoginModal(true)} />
          <div className="flex flex-col mt-10 lg:flex-row lg:justify-evenly">
            <div className="text-slate-200 font-bold text-6xl w-5/6 lg:text-8xl lg:w-3/5">
              <h1 className="font-poppins">
                Empower Your Collection Journey with Every Figure Tracked
              </h1>
            </div>
            <div className="mt-10 lg:w-1/3">
              <p className="text-slate-200 font-normal mt-10 w-auto lg:text-lg font-poppins">
                Turning Collections into Connections:{' '}
                <strong>Your Figures</strong> <strong>Our App</strong>.
              </p>
              <p className="text-slate-200 font-normal mt-2 w-4/6 lg:text-lg lg:w-11/12 font-poppins">
                <strong>NerdVault</strong>, your collection - in one place.
              </p>
              <div className="mt-10 flex">
                {!Auth.loggedIn() ? (
                  <button
                    onClick={() => setShowSignUpModal(true)}
                    className=" bg-slate-200 text-neutral-950 hover:text-orange-500  hover:bg-orange-200 py-2 px-6 font-bold font-poppins rounded-lg lg:text-lg cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                  >
                    Get started
                  </button>
                ) : (
                  <Link
                    to="/main-page"
                    className=" bg-slate-200 text-neutral-950 hover:text-orange-500  hover:bg-orange-200 py-2 px-6 font-bold font-poppins rounded-lg lg:text-lg cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
                  >
                    Get Started
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="pb-10 md:pb-0 flex flex-row flex-wrap mt-10 justify-center gap-20 lg:flex-nowrap">
            {/* <div className="hover:transition hover:scale-125 transition duration-300 ease-in-out">
              <img
                src={gokuLogo}
                alt="avatar3"
                className="w-64 h-50 lg:w-52 mb-2 sm:w-44"
              />
              <p className=" text-slate-200 font-thin text-center lg:text-sm">
                Your collection <strong className="font-bold">organized</strong>
                .
              </p>
            </div> */}
            <div className="hover:transition hover:scale-125 transition duration-300 ease-in-out pb-5">
              <img
                src={inboxLogo}
                alt="avatar3"
                className="w-64 h-50 lg:w-52 mb-2 sm:w-44"
              />
              <p className=" text-gray-900 font-thin text-center lg:text-sm">
                Your collection{' '}
                <strong className="font-bold ">organized</strong>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <CustomModal
        isVisible={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      >
        <div className="py-6 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium text-gray-900">
            Sign in and keep collecting!
          </h3>
          <form onSubmit={handleFormSubmit} className="space-y-6" action="#">
            <div>
              <label htmlFor="email" className=""></label>{' '}
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleInputLoginChange}
                id="email"
                className="bg-gra-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                placeholder="name@email.com"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="password" className=""></label>{' '}
              <input
                type="password"
                name="password"
                value={formState.password}
                onChange={handleInputLoginChange}
                id="password"
                className="bg-gra-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5"
                placeholder="••••••••"
                required
              ></input>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-orange-700 hover:bg-orange-800 
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
              rounde-lg text-sm px-5 py-2.5 text-center"
            >
              Log in to your account
            </button>
            <div className="text-sm font-medium text-gray-500">
              Not registered?{' '}
              <button
                onClick={() => {
                  setShowLoginModal(false);
                  setShowSignUpModal(true);
                }}
                className="text-orange-500 hover:underline hover:text-gray-500"
              >
                Create account
              </button>
            </div>
          </form>
        </div>
      </CustomModal>
      <CustomModal
        isVisible={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
      >
        <div className="py-4 px-6 lg:px-8 text-left">
          <h3 className="mb-4 text-xl font-medium max-[420px]:text-base  text-gray-900 ">
            Create your account!
          </h3>
          <form className="space-y-4" action="#">
            <div>
              <label htmlFor="username" className=""></label>{' '}
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={handleSignUpFormChange}
                className="bg-gra-50 border  border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2"
                placeholder="Username"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="email" className=""></label>{' '}
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleSignUpFormChange}
                className="bg-gra-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2"
                placeholder="name@email.com"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="password" className=""></label>{' '}
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handleSignUpFormChange}
                className="bg-gra-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2"
                placeholder="Enter password"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="confirmPassword" className=""></label>{' '}
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPasswordState}
                onChange={handleSignUpFormChange}
                className="bg-gra-50 border border-gray-300 text-gray-900 text-sm 
                rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2"
                placeholder="Confirm password"
                required
              ></input>
            </div>
            <p className="max-[420px]:text-base  text-gray-400 flex justify-center text-lg font-bold">
              Choose your avatar
            </p>
            <div className=" h-[300px] flex  md:flex-row md:flex-wrap md:gap-10 justify-center items-center max-[420px]:flex-row max-[420px]:flex-wrap max-[420px]:w-[300px] lg:flex-row lg:gap-6 overflow-auto">
              {userIcons.map((icon, index) => (
                <div
                  key={index}
                  className={`bg-slate-200 rounded-full lg:w-40 lg:h-30 w-60 h-30 mt-10 max-[420px]:h-[100px] max-[420px]:w-[120px] 
                    overflow-hidden hover:transition hover:scale-110 transition
                    duration-300 ease-in-out cursor-pointer${
                      icon.src === userIcon ? ' selected' : ''
                    }`}
                  onClick={() => handleImageClick(icon.src)}
                >
                  <img src={icon.src} alt={icon.name} />
                </div>
              ))}
            </div>
            <button
              type="submit"
              onClick={handleSignUpSubmit}
              className="w-full text-white bg-orange-700 hover:bg-orange-800 
              focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium
              rounde-lg text-sm px-5 py-2 text-center"
            >
              Create account
            </button>
            <div className="text-sm font-medium text-gray-500">
              Already have an account?{' '}
              <button
                onClick={() => {
                  setShowSignUpModal(false);
                  setShowLoginModal(true);
                }}
                className="text-orange-500 hover:underline hover:text-gray-500"
              >
                Log in to your account
              </button>
            </div>
          </form>
        </div>
      </CustomModal>
      <AlertModal
        isVisible={showAlert}
        onClose={() => setShowAlert(false)}
        bgColor="red-500"
      >
        <h1>{alertMessage}</h1>
      </AlertModal>
      <style>
        {`
          .selected {
            outline: 4px solid orange;
            transform: scale(1.1)
          }
          .selectedImage {
            border: 2px solid green;
          }
        `}
      </style>
        
    </div>
  );
}
