'use client';

import ImagePicker from '@/components/meals/image-picker';
import styles from './page.module.css';
import { submitMeal } from '@/lib/actions';
import MealsFormSubmit from '@/components/meals/meals-form-submit';
import { useFormState } from 'react-dom';

export default function ShareMealPage() {
	const [state, formAction] = useFormState(submitMeal, { errorMsg: null });

	return (
		<>
			<header className={styles.header}>
				<h1>
					Share your&nbsp;
					<span className={styles.highlight}>Favorite Meal</span>
				</h1>
				<p>Or any other meal you feel needs sharing!</p>
			</header>
			<main className={styles.main}>
				<form className={styles.form} action={formAction}>
					<div className={styles.row}>
						<p>
							<label htmlFor='name'>Your name</label>
							<input type='text' id='name' name='name' required />
						</p>
						<p>
							<label htmlFor='email'>Your email</label>
							<input
								type='email'
								id='email'
								name='email'
								required
							/>
						</p>
					</div>
					<p>
						<label htmlFor='title'>Title</label>
						<input type='text' id='title' name='title' required />
					</p>
					<p>
						<label htmlFor='summary'>Short Summary</label>
						<input
							type='text'
							id='summary'
							name='summary'
							required
						/>
					</p>
					<p>
						<label htmlFor='instructions'>Instructions</label>
						<textarea
							id='instructions'
							name='instructions'
							rows='10'
							required></textarea>
					</p>
					<ImagePicker label='Meal Image' name='image' />
					{state.errorMsg && <p>{state.errorMsg}</p>}
					<p className={styles.actions}>
						<MealsFormSubmit />
					</p>
				</form>
			</main>
		</>
	);
}
