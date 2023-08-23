import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <FormControl>
      <FormLabel>Email address</FormLabel>
      <Input type="email" />
      <FormHelperText>We'll never share your email.</FormHelperText>
    </FormControl>
  );
}
