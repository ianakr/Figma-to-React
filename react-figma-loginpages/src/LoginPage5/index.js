import React from 'react'
import './index.css'

function LoginPage5() {
	return (
		<div>
			<div className='login-page-5'>
				<div className='nav d-flex justify-content-between align-items-center'>

					<div>
						<h1>SHEY</h1>

					</div>
					<div>
						<a href=''>Home</a>
						<a href=''>Services</a>
						<a href=''>Contact us</a>

					</div>

				</div>

				<div className='row justify-content-center align-items-center'>
					<div className='col-md-5'>
						<div className='text-part d-flex flex-column'>

							<h1>LOGIN</h1>

							<input type="text" placeholder='Username' />
							<input type='text' placeholder='Password' />

							<button>LOGIN</button>

							<div className='d-flex justify-content-between mt-2 w-100 align-items-center'>
								<div className='left-divider'></div>
								<p className='mb-2 mx-2'>OR</p>
								<div className='right-divider'></div>
							</div>

							<div className='d-flex align-items-center justify-content-center'>
								<img

									width='40px'
									height='40px'
									className='mx-5'
									src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'
									alt=''
								/>
								<img
									className='mx-5'
									width='37px'
									height='37px'
									src='https://www.sistemacaseinfissi.com/wp-content/uploads/2022/10/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png'
									alt=''
								/>
							</div>
							<a href='' className='mt-3 w-100 text-center'>Not Yet Registered ? Click Here To Sign Up</a>




						</div>

					</div>
				</div>


				<div className='login-page-5-rectangle'>
				</div>

				<div className='login-page-5-circle-1'></div>

				<div className='login-page-5-circle-2'></div>

			</div>
		</div>
	)
}

export default LoginPage5
