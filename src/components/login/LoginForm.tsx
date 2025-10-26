import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

import { loginUser } from '../../api/authApi';

export default function LoginForm(){
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  async function submit(e: React.FormEvent){
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);
    const res = await loginUser({ phone, password });
    setLoading(false);
    if(!res.ok){
      setError(res.message || 'Login failed');
      return;
    }
    setSuccess('Logged in successfully');
  }

  return (
    <form onSubmit={submit}>
      <Stack spacing={2}>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <TextField
          label="Phone"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          required
          InputProps={{ startAdornment: (<InputAdornment position="start"><PhoneIcon/></InputAdornment>) }}
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          InputProps={{ startAdornment: (<InputAdornment position="start"><LockIcon/></InputAdornment>) }}
        />
        <Button type="submit" variant="contained" disabled={loading}>
          {loading? 'Please wait...' : 'Login'}
        </Button>
      </Stack>
    </form>
  );
}
