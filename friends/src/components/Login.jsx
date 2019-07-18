import React from 'react';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import './styles.css';

function Login({ touched, errors }) {
	return (
		<Form className="form">
			<div className="form-group">
				<label className="label">Email</label>
				<Field
					className="input"
					name="email"
					type="email"
					autoComplete="off"
				/>
				<p className="error">{touched.email && errors.email}</p>
			</div>
			<div className="form-group">
				<label className="label">Password</label>
				<Field
					className="input"
					name="password"
					type="password"
					autoComplete="off"
				/>
				<p className="error">{touched.password && errors.password}</p>
			</div>

			<button type="submit" className="btn">Submit &rarr;</button>
		</Form>
	)
}

export default withFormik({
	mapPropsToValues() {
		return {
			email: "",
			password: ""
		};
	},

	validationSchema: Yup.object().shape({
		email: Yup.string().email().required(),
		password: Yup.string().required()
	}),

	handleSubmit: (values, formikBag) => {
		console.log("submitted")
	},
})(Login);
