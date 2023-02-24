import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function Dummy(props) {

    const navigate = useNavigate();
    const handleSubmit = async(event) => {
        event.preventDefault();
        try{
            const auth = getAuth();
            signOut(auth)
                .then(() => {
                //Sign out successful
                })
                .then(navigate('/'))
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className='flex flex-col'>
                <h1 className='text-4xl text-center mt-10 items-center'>Login successful!</h1>
                <p className='text-xl text-center'>Congratulations, you have successfully logged in.</p>
                <p className='text-xl text-center'>Additional content can be added through this page</p>
                <button 
                className=' items-center my-5 p-5 bg-kitsuneBlue mx-auto rounded-lg' 
                type='submit'
                onClick={handleSubmit}
                >
                    Sign Out 
                </button>
            </div>
        </div>
    );
}

export default Dummy;