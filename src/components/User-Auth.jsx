import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RingLoader } from 'react-spinners';
import { BiShow } from 'react-icons/bi';



function UserAuth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); 
    const [inputClass, setInputClass] = useState('text-gray-400');
    const [showPassword, setShowPassword] = useState(false);


    // Handler for React Hook Form
    const { register, handleSubmit, formState: { errors }, clearErrors  } = useForm(); 
    const onSubmit = (data) => {
        setLoading(true);
        // Creating a timeout function to emulate the loading of the component into the actual page. The timeout allows the animation to load and then stops it after 1 second has passed
        setTimeout(() => {
            setLoading(false);
        }, 1000);
        
        // After the form is submitted, the fields are cleared automatically. 
        setEmail('');
        setPassword('');
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
        if (event.target.value) {
            setInputClass('text-black');
        } else {
            setInputClass('text-gray-400')
        }
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
        if (event.target.value) {
            setInputClass('text-black');
        } else {
            setInputClass('text-gray-400')
        }
    };

    const override = {
        display: 'block',
        margin: '0 auto',
        borderColor: 'red',
        position: 'absolute',
        top: '50%',
        left: '49%',
        transform: 'translate(-50%, -50%)',
    };

    const loadIcon = () => setLoading(!loading)
    const errorRemover = () => clearErrors('email', 'password')


    return (
        <div className='bg-gray-300 rounded-lg p-6 shadow-lg mx-5 pt-5 pb-20 font-robotoSlab'>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-gray-100 rounded-lg p-6' action="" autoComplete='off'>
                    <div className='mb-4'>
                        <label className='font-medium rounded-lg p-6 block' htmlFor="email">
                            Email
                        </label>
                            <input {...register("email", {
                                required: true,
                                maxLength: 20,
                                minLength: 4,
                                pattern: /^[A-Za-z0-9_@./#&+-]+$/i // Regex pattern catches alphanumeric characters as well as special characters. 
                            })}   
                                className={`mb-5 w-full border border-kitsuneBlue p-2 rounded-lg ${inputClass} `} type="text" id='email' value={email || ''} 
                                placeholder='Enter your email' 
                                onChange={handleEmail}               
                            />
                        {errors.email && <ul>
                            <li>email must be greater than 4 characters</li>
                            <li>email must be less than 20 characters</li>
                            <li>email must contain only alphanumeric characters  (a-z, A-Z), numbers (0-9), and special characters ie; _@./#&+-</li>
                            </ul>}
                    </div>
                    <div className='mb-4'>
                        <label className='font-medium rounded-lg p-5 block' htmlFor="password">
                            Password
                        </label>
                            <div className='flex-row w-full relative'>
                                <input {...register("password", {
                                    maxLength:20,
                                    minLength: 4,
                                    pattern: /^[A-Za-z0-9_@./#&+-]+$/i              
                                })}
                                    required
                                    className={`mb-5 w-full border border-kitsuneBlue p-2 rounded-lg ${inputClass} `} 
                                    value={password || ''}
                                    placeholder='Enter your password'
                                    onChange={handlePassword}
                                    type={showPassword ? 'text' : 'password'}
                                />                          
                                    
                                        {errors.password && <ul>
                                        <li>Password must be greater than 4 characters</li>
                                        <li>Password must be less than 20 characters</li>
                                        <li>Password must contain only alphanumeric characters  (a-z, A-Z), numbers (0-9), and special characters ie; _@./#&+-</li>
                                        </ul>}
                                    
                                    <div>        
                                        <div className='absolute right-3 top-3 cursor-pointer hover:text-kitsuneBlue2 text-xl'
                                            onClick={() => setShowPassword(!showPassword)}>
                                           <BiShow />
                                        </div>
                                    </div>
                            </div>
                    </div>                                        
                    <div className='flex justify-center'>
                        <div className='inline-flex relative content-center'>
                            <button
                            // onClick is going to take in the loadIcon function which displays a loading animation as well as the errorRemover function which will remove any error that is created through the form validation
                                onClick={() => {
                                    if (!loading) {
                                    loadIcon(true); 
                                    errorRemover();
                                    }
                                }}
                                className='bg-kitsuneBlue2 hover:bg-kitsuneBlue3 font-medium py-2 rounded-lg px-16' 
                                type='submit'
                                >
                                Login
                            </button>
                        <div className='pt-2'>
                            {loading && (
                                <RingLoader
                                    color={'#000000'}
                                    loading={loading}
                                    cssOverride={override}
                                    size={25}
                                    aria-label='Loading Spinner'
                                    data-testid='loader'
                                /> // Ringloader animation is only going to display when the button is clicked and only as long as it takes to load the next page, next page emulation is being provided through the timeout function at top. 
                            )}
                        </div>
                        <div className='flex-col '>
                            <div className=''>
                                <p onClick={() => console.log('I  create a user account')} className='text-left ml-5 hover:text-kitsuneBlue2 hover:cursor-pointer' type='submit'>
                                    Create Account
                                </p>
                            </div>
                            <div className=''>
                                <p onClick={() => console.log('I reset a password')} className='text-left ml-5 hover:text-kitsuneBlue2 hover:cursor-pointer'>
                                    Forgot Password
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserAuth;