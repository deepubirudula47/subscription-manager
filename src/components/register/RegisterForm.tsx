import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';

import { registerUser } from '../../api/authApi';

export default function RegisterForm(){
  const [name, setName] = useState('');
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
    const res = await registerUser({ name, phone, password });
    setLoading(false);
    if(!res.ok){
      setError(res.message || 'Registration failed');
      return;
    }
    setSuccess('Account created successfully');
  }

  return (
    <form onSubmit={submit}>
      <Stack spacing={2}>
        {error && <Alert severity="error">{error}</Alert>}
        {success && <Alert severity="success">{success}</Alert>}
        <TextField
          label="Full name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
          InputProps={{ startAdornment: (<InputAdornment position="start"><PersonIcon/></InputAdornment>) }}
        />
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
          {loading? 'Please wait...' : 'Create account'}
        </Button>
      </Stack>
    </form>
  );
}
