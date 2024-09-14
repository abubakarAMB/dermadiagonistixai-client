"use client";
import { Button } from '@/components/Button';
import FormProvider from '@/components/hook-form/FormProvider';
import LogoBlack from '@/components/LogoBlack';
import { pxToRem, SECONDARY } from '@/theme';
import { Alert, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import * as Yup from 'yup';
// form
import { useAuthContext } from '@/auth/useAuthContext';
import { RHFTextField } from '@/components/hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { BackIcon } from '../components/svgs/BackIcon';

// TODO remove, this demo shouldn&apos;t need to reset the theme.

type FormValuesProps = {
  email: string;
  afterSubmit?: string;
};

export default function ForgotPassword() {
  const router = useRouter();

  const { forgotPassword, error, isLoading, user, isAuthenticated, signUpComplete } = useAuthContext();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required')
  });

  const defaultValues = {
    email: ''
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    // setError,
    handleSubmit,
    // formState: { errors },
  } = methods;


  const onSubmit = async (data: FormValuesProps) => {
    try {
      await forgotPassword(data.email);
    } catch (err) {
      reset();
    }
  };

  useEffect(() => {
    if (user && !isAuthenticated) {
      router.push('/auth/two-factor');
    }else if (isAuthenticated && user) {
      router.push('/dashboard/home');
    }
  }, [isAuthenticated, user]);

  const navigateToSignIn = () => {
    router.push('/auth/signin');
  };

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        width:{
          xs: '100%',
          sm: pxToRem(564)
        },
        display: 'flex',
        flexDirection: 'column'
      }}
    >
        <Stack
          direction={"row"}
          alignItems={"center"}
          gap={pxToRem(4)}
          sx={{ cursor: "pointer", mb: 2 }}
        >
          <BackIcon />
          <Typography
            variant="subtitle2"
            color={SECONDARY[300]}
            fontSize={pxToRem(14)}
            onClick={navigateToSignIn}
          >
            Go back
          </Typography>
        </Stack>
      <LogoBlack />
      <Typography variant="h1" sx={{ mt: 2 }}>
        Forget Password?
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
         No worries, we&#39;ll send you the reset instructinos. 
      </Typography>
      {error && <Alert severity="error" sx={{my: 1}}>{error.toString() || 'An Error occurred'}</Alert>}
      {signUpComplete && !error && <Alert severity="success" sx={{my: 1}}>Sign up complete, please login</Alert>}
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <RHFTextField name="email" label="" placeholder="Email" required />
          <Button
            type="submit"
            fullWidth
            disabled={isLoading}
            variant="contained"
            sx={{
              height: pxToRem(56),
            }}
          >
            {isLoading ? 'Loading...' : 'Reset password'}
          </Button>
        </Box>
      </FormProvider>
    </Box>
  );
}