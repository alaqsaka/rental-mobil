import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
  Alert,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import axios from "axios";
import { useState } from "react";
import { IconAlertCircle } from "@tabler/icons";
import { useNavigate } from "react-router";

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1485321586038-4cc99992a06f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)",
    backgroundPosition: "",
  },

  form: {
    borderRight: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: "100vh",
    maxWidth: 450,
    paddingTop: 80,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  logo: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    width: 120,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function Login() {
  const { classes } = useStyles();
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  // const router = useRouter();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: (values) => {
      return {
        password:
          values.password.length < 6
            ? "Password must include at least 6 characters"
            : null,
        email: /^\S+@\S+$/.test(values.email) ? null : "Invalid email",
      };
    },
  });

  const handleSubmit = (values) => {
    console.log(" submitt ", values);
    axios
      .post(`http://localhost:5000/customers/login`, values)
      .then((res) => {
        setResponse(res.data.data);
        console.log(response);
        localStorage.setItem("customerToken", res.data.customerToken);
        // router.push("/dashboard");
        navigate("/dashboard");
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setResponse(err.response.data);
        console.log(response);
      });
  };

  return (
    <>
      <div className={classes.wrapper}>
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <Paper className={classes.form} radius={0} p={30}>
            <Title
              order={2}
              className={classes.title}
              align="center"
              mt="md"
              mb={50}
            >
              Selamat datang di DriveNow
            </Title>
            {response && (
              <Alert
                icon={<IconAlertCircle size={16} />}
                title={response?.status === "error" ? "Error" : "Success"}
                color={response?.status === "error" ? "red" : "green"}
                withCloseButton
                variant="filled"

                // onClose={() => }
              >
                {response?.status === "error"
                  ? response?.message
                  : "Berhasil Login"}
              </Alert>
            )}
            <TextInput
              label="Email address"
              placeholder="hello@gmail.com"
              size="md"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              mt="md"
              size="md"
              {...form.getInputProps("password")}
            />

            <Button type="submit" fullWidth mt="xl" size="md">
              Masuk
            </Button>

            <Text align="center" mt="md">
              Belum punya akun?{" "}
              <Anchor href="/signup" weight={700}>
                Daftar
              </Anchor>
            </Text>
          </Paper>
        </form>
      </div>
    </>
  );
}
