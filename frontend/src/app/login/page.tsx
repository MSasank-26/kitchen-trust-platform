'use client';

import { useForm } from 'react-hook-form';

import { api } from '@/lib/api';

import { useAuthStore } from '@/store/auth.store';

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit } =
    useForm<LoginForm>();

  const setAuth = useAuthStore(
    (state) => state.setAuth,
  );

  const onSubmit = async (data: LoginForm) => {
    try {
      const response = await api.post(
        '/auth/login',
        data,
      );

      setAuth(
        response.data.access_token,
        response.data.user,
      );

      alert('Login successful');
    } catch (error) {
      console.error(error);

      alert('Login failed');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md border rounded-xl p-8 shadow"
      >
        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <input
          {...register('email')}
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-6"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded"
        >
          Login
        </button>
      </form>
    </main>
  );
}