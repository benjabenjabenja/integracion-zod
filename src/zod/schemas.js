import { z } from "zod";
import { 
	MIN_CARACTERS_NAME, 
	MIN_CARACTERS_PASSWORD 
} from "../utils/const";

export const loginSchema = z.object({
  	email: z.string().email({ 
		message: LOGIN_FORM.EXTRA_VALIDATIONS.EMAIL.ERROR_MESSAGE 
	}),
  	password: z.string().min(MIN_CARACTERS_PASSWORD, { 
		message: LOGIN_FORM.EXTRA_VALIDATIONS.PASSWORD.ERROR_MESSAGE 
	}),
});

export const registerSchema = z.object({
	name: z.string().min(MIN_CARACTERS_NAME, { 
		message: REGISTER_FORM.EXTRA_VALIDATIONS.NAME.ERROR_MESSAGE 
	}),
	email: z.string().email({ 
		message: REGISTER_FORM.EXTRA_VALIDATIONS.EMAIL.ERROR_MESSAGE 
	}),
	password: z.string().min(MIN_CARACTERS_PASSWORD, { 
		message: REGISTER_FORM.EXTRA_VALIDATIONS.PASSWORD.ERROR_MESSAGE 
	}),
	confirmPassword: z.string().min(MIN_CARACTERS_PASSWORD, { 
		message: REGISTER_FORM.EXTRA_VALIDATIONS.CONFIRM_PASSWORD.ERROR_MESSAGE 
	}).refine(
		(val) => val === registerSchema.password, { 
			message: REGISTER_FORM.EXTRA_VALIDATIONS.CONFIRM_PASSWORD.ERROR_MESSAGE,
			path: [
				REGISTER_FORM.INPUT_FIELDS.CONFIRM_PASSWORD.FORM_INPUT_NAME
			]
		}),
});





