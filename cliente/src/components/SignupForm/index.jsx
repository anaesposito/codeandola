import React from 'react'

const SignupForm = () =>{
    return(
        <div id="Signup">
            <div className="min-h-screen flex justify-center bg-gray-50 pt-40 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                <div className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    ¿Usuario nuevo? 
                    <h1>
                        ¡Registrate!
                    </h1>
                </div>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm space-y-4">
                    <div>
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" placeholder="Correo electronico" />
                    </div>
                    <div>
                    <label htmlFor="password" className="sr-only">Contraseña</label>
                    <input id="password" name="email" type="password" autoComplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" placeholder="Nueva contaseña" />
                    </div>
                    <div>
                    <label htmlFor="passwordCon" className="sr-only">Contraseña</label>
                    <input id="passwordCon" name="password" type="password" autoComplete="current-password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm" placeholder="Confirma tu contraseña" />
                    </div>
                </div>
                <div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        Registrarme
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default SignupForm