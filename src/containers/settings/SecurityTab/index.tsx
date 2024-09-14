"use client";
import Button from '@/components/Button';
import FormDialog from '@/components/FormDialog';
import OutlinedButton from '@/components/OutlinedButton';
import TextField from '@/components/TextField';
import { PRIMARY, pxToRem, SECONDARY } from '@/theme';
import { Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, styled, Switch, SwitchProps } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import MuiPhoneNumber from 'material-ui-phone-number';
import { useRouter } from 'next/navigation';
import * as React from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const CustomTabPanel = React.memo(({ children, value, index }: TabPanelProps) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
  >
    {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  </div>
));

CustomTabPanel.displayName = "CustomTabPanel";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  margin: theme.spacing(1),
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? "#FFFFFF" : '#000000',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default function SecurityTab() {
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [openAddTeamMember, setOpenAddTeamMember] = React.useState(false);

  const handleClose = React.useCallback(() => {
    setOpenAddTeamMember(false);
  }, []);

  const handleChange = React.useCallback((event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }, []);

  const handleSubmit = React.useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOpenAddTeamMember(true);
  }, [router]);

  const onPhoneNumberChange = React.useCallback((value: any) => {
    setPhoneNumber(value);
  }, []);

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
        <Typography variant="h2" color="primary">
          Password & Security
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Set a passwords to protect your account.
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Password" {...a11yProps(0)} sx={{ textTransform: 'none' }} />
            <Tab label="2 Factor authentication" {...a11yProps(1)} sx={{ textTransform: 'none' }} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 2, maxWidth: pxToRem(500) }}>
            <Stack direction="column" spacing={1}>
              <Typography variant="body2" color="text.secondary">
                Current Password
              </Typography>
              <TextField
                required
                fullWidth
                size='small'
                id="current-password"
                label=""
                placeholder='Enter your current password'
                name="current-password"
                autoComplete="current-password"
                type='password'
                autoFocus
              />
            </Stack>
            <Stack direction="column" spacing={1}>
              <Typography variant="body1" color="text.secondary">
                New Password
              </Typography>
              <TextField
                size='small'
                required
                fullWidth
                id="new-password"
                label=""
                placeholder='Enter your new password'
                name="new-password"
                autoComplete="new-password"
                type='password'
              />
            </Stack>

            <Stack direction="column" spacing={1}>
              <Typography variant="body2" color="text.secondary">
                Confirm New Password
              </Typography>
              <TextField
                required
                fullWidth
                size='small'
                id="confirm-password"
                label=""
                placeholder='Confirm your new password'
                name="confirm-password"
                autoComplete="confirm-password"
                type='password'
              />
            </Stack>

            <Button
              type="submit"
              variant="contained"
              sx={{
                maxWidth: pxToRem(180),
              }}
            >
              Update Password
            </Button>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 4, maxWidth: pxToRem(500) }}>
            <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
              <Stack direction="column" spacing={1}>
                <Typography variant="h4" color="text.primary">
                  Email
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Two factor authentication is by default enabled on your email <b>“justincollins@yourmail.com”</b>
                </Typography>
              </Stack>
              <FormControlLabel control={<IOSSwitch defaultChecked />} label="" />
            </Stack>

            <Stack direction="column" spacing={1}>
              <Typography variant="h4" color="text.primary">
                Phone Number
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Use your phone number to receive security code
              </Typography>
            </Stack>

            <Button
              type="submit"
              variant="contained"
              sx={{
                maxWidth: pxToRem(220),
              }}
            >
              +  Add phone number
            </Button>
          </Box>
        </CustomTabPanel>
      </Box>

      <FormDialog
        headline="Add phone number"
        subText="A phone number can be used as a second step, to help you sign back in if you lose access, and to receive alerts if there’s unusual activity "
        open={openAddTeamMember}
        onClose={handleClose}
        onFormSubmit={(e) => {
          e.preventDefault();
          handleClose();
        }}
        maxWidth="xs"
        content={
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Stack direction="column" >
              <Typography variant="subtitle1" color={SECONDARY[200]}>
                Phone number
              </Typography>
              <MuiPhoneNumber
                defaultCountry={'us'}
                variant='outlined'
                fullWidth
                size='small'
                id="phone"
                label=""
                placeholder='Enter your phone number'
                name="phone"
                autoComplete="phone"
                value={phoneNumber}
                onChange={onPhoneNumberChange}
                InputProps={{
                  style: { borderRadius: pxToRem(12) }
                }}
              />
            </Stack>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">How do you want to get the code? </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="text-mesage" control={<Radio />} label="Text Message" />
                <FormControlLabel value="phone-call" control={<Radio />} label="Phone Call" />
              </RadioGroup>
            </FormControl>
            <Stack direction="row" spacing={2}>
              <OutlinedButton customColor={SECONDARY["350"]} onClick={handleClose} size="small" sx={{
                width: "48%",
              }}>
                Cancel
              </OutlinedButton>
              <Button variant="outlined" color="primary" onClick={handleClose} size="small" sx={{
                width: "48%",
              }}>
                Add Phone Number
              </Button>
            </Stack>
          </Box>
        }
      />
    </Box>
  );
}