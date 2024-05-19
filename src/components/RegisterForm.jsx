import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { Form } from "formik"
import { object, string } from "yup"

export const registerSchema = object({
  username: string()
    .max(20, "Kullanıcı adı 10 karakterden az olmalıdır.")
    .required("Kullanıcı adı zorunludur"),
  firstName: string()
    .max(20, "İsim 20 karakterden az olmalıdır.")
    .required("İsim zorunludur"),
  lastName: string()
    .max(20, "Soyisim 30 karakterden az olmalıdır.")
    .required("Soyisim zorunludur"),

  email: string()
    .email("Lütfen geçerli bir email giriniz.")
    .required("Email zorunludur"),
  password: string()
    .required("Password is required.")
    .min(8, "The password must be at least 8 characters long.")
    .max(20, "The password must be no more than 20 characters long.")
    .matches(/\d+/, "The password must contain a number.")
    .matches(/[a-z]/, "The password must contain a lowercase letter.")
    .matches(/[A-Z]/, "The password must contain an uppercase letter.")
    .matches(/[!/[@$!%*?&]+/, "The password must contain a special character."),
})

const RegisterForm = ({
  values,
  handleChange,
  errors,
  touched,
  handleBlur,
}) => {
  return (
    <Form>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TextField
          label="User Name"
          name="username"
          id="userName"
          type="text"
          variant="outlined"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username && Boolean(errors.username)}
          helperText={touched.username && errors.username}
        />
        <TextField
          label="First Name"
          name="firstName"
          id="firstName"
          type="text"
          variant="outlined"
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={touched.firstName && errors.firstName}
        />
        <TextField
          label="Last Name"
          name="lastName"
          id="lastName"
          type="text"
          variant="outlined"
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={touched.lastName && errors.lastName}
        />
        <TextField
          label="Email"
          name="email"
          id="email"
          type="email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && Boolean(errors.email)}
          helperText={touched.email && errors.email}
        />
        <TextField
          label="password"
          name="password"
          id="password"
          type="password"
          variant="outlined"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
        />
        <Button type="submit" variant="contained" size="large">
          Submit
        </Button>
      </Box>
    </Form>
  )
}

export default RegisterForm
