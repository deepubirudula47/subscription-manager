export async function loginUser({ phone }: { phone: string; password: string; }) {
  // Replace with real API call. Return a mocked success response after a delay.
  await new Promise((r) => setTimeout(r, 300));
  if (phone === '000') {
    return { ok: false, message: 'Invalid credentials' };
  }
  return { ok: true, token: 'mock-token', user: { phone } };
}

export async function registerUser({ name, phone }: { name: string; phone: string; password: string; }) {
  // Replace with real API call.
  await new Promise((r) => setTimeout(r, 400));
  if (phone === 'existing') {
    return { ok: false, message: 'Phone already registered' };
  }
  return { ok: true, user: { name, phone } };
}
