"use client";
import { Button } from '@/components/Button';
import FormProvider from '@/components/hook-form/FormProvider';
import { pxToRem, SECONDARY } from '@/theme';
import { Alert, FormHelperText, Link, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
// form
import { useAuthContext } from '@/auth/useAuthContext';
import { RHFCodes } from '@/components/hook-form';
import { maskEmail } from '@/utils/general';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { BackIcon } from '../components/svgs/BackIcon';

type FormValuesProps = {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
};

export default function TwoFactor() {
  const router = useRouter();

  const { verifyOTP, resendOTP, logout, error, user, isLoading, isAuthenticated } = useAuthContext();

  const VerifyCodeSchema = Yup.object().shape({
    code1: Yup.string().required('Code is required'),
    code2: Yup.string().required('Code is required'),
    code3: Yup.string().required('Code is required'),
    code4: Yup.string().required('Code is required'),
    code5: Yup.string().required('Code is required'),
    code6: Yup.string().required('Code is required'),
  });

  const defaultValues = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: '',
  };

  const methods = useForm({
    mode: 'onChange',
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });

  const [resendDisabled, setResendDisabled] = useState(true);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/dashboard/home');
    }
  }, [isAuthenticated]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (resendDisabled) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            setResendDisabled(false);
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [resendDisabled]);

  const {
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await verifyOTP(Object.values(data).join(''));
    } catch (err) {
      console.log(err);
    }
  };

  const handleNavigation = () => {
    logout();
    router.push('/auth/signin');
  }

  const handleResend = async () => {
    try {
      await resendOTP();
      setResendDisabled(true);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Box
      sx={{
        my: 8,
        mx: 4,
        maxWidth: pxToRem(564),
        display: 'flex',
        flexDirection: 'column',
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
          onClick={handleNavigation}
        >
          Go back
        </Typography>
      </Stack>
      <Typography variant="h1" sx={{ mt: 2 }}>
        Please enter code
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ my: 1 }}>
        A verification code has been sent to your email
      </Typography>
      <Typography variant="body2" sx={{ my: 1, fontWeight: 500 }}>
        {user?.email ? maskEmail(user?.email) : ''}
      </Typography>

      {error && <Alert severity="error" sx={{my: 1}}>{error.toString() || 'An Error occurred'}</Alert>}
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
          <RHFCodes keyName="code" inputs={['code1', 'code2', 'code3', 'code4', 'code5', 'code6']} />

          {(!!errors.code1 ||
            !!errors.code2 ||
            !!errors.code3 ||
            !!errors.code4 ||
            !!errors.code5 ||
            !!errors.code6) && (
              <FormHelperText error sx={{ px: 2 }}>
                Code is required
              </FormHelperText>
            )}
          <Stack direction="row" alignItems="center" spacing={0.5}>
            <Typography variant="body2" color="text.secondary">
              Don&#39;t receive the code?
            </Typography>
            <Link component="button" sx={{
              textDecoration: 'none',
            }} onClick={handleResend} disabled={resendDisabled}>
              {resendDisabled ? `resend in ${timer}s` : "Resend"}
            </Link>
          </Stack>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting || isLoading}
          >
            {(isSubmitting || isLoading) ? 'Loading...' : 'Verify'}
          </Button>
        </Box>
      </FormProvider>
    </Box>
  );
}