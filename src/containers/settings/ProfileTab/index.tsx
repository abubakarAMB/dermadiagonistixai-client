"use client";
import OutlinedButton from '@/components/OutlinedButton';
import { ERROR, PRIMARY, pxToRem, SECONDARY } from '@/theme';
import { Avatar, Divider, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';
import React from 'react';
import Button from '../../../components/Button';
import TextField from '../../../components/TextField';

export default function ProfileTab() {
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    router.push('/dashboard/home');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        borderLeft: `1px solid ${PRIMARY['10']}`,
        mt: 2,
        minHeight: '85vh',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', p: 2 }}>
        <Typography variant="h2">
           Change Profile Information
        </Typography>
        <Typography variant="body2" color="text.secondary">
          You can invite mulitple team member at a time. 
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 2 }}>
        <Typography variant="body2" color="text.secondary">
          Profile Picture
        </Typography>
        <Avatar src='/images/user.png' alt='profile photo' sx={{
          width: pxToRem(120),
          height: pxToRem(120),
        }} />
        <Stack direction="row" spacing={2}>
          <OutlinedButton
            customColor={
              SECONDARY['350']
            }
          >
            Change picture
          </OutlinedButton>
          <OutlinedButton
            customColor={
              ERROR['400']
            }
          >
            Delete picture
          </OutlinedButton>
        </Stack>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: pxToRem(500) }}>
          <Stack direction="column" spacing={1}>
            <Typography variant="body2" color="text.secondary">
              Profile name
            </Typography>
            <TextField
              required
              fullWidth
              size='small'
              id="name"
              label=""
              placeholder='Profile name'
              name="name"
              autoComplete="name"
              autoFocus
            />
          </Stack>
          <Stack direction="column" spacing={1}>
            <Typography variant="body1" color="text.secondary">
              Email
            </Typography>
            <TextField
              size='small'
              required
              fullWidth
              id="email"
              label=""
              placeholder='Email'
              name="email"
              autoComplete="email"
              disabled
            />
          </Stack>

          <Stack direction="column" spacing={1}>
            <Typography variant="body2" color="text.secondary">
              Phone number
            </Typography>
            <TextField
              required
              fullWidth
              size='small'
              id="phone"
              label=""
              placeholder='Phone number'
              name="phone"
              autoComplete="phone"
            />
          </Stack>

          <Button
            type="submit"
            variant="contained"
            sx={{
              maxWidth: pxToRem(148),
            }}
          >
            Save changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
}