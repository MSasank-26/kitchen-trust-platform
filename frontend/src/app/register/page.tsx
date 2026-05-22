'use client';

import { useForm } from 'react-hook-form';

import { api } from '@/lib/api';

type RegisterForm = {
  email: string;
  password: string;
};

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
  } = useForm<RegisterForm>();

  const onSubmit = async (
    data: RegisterForm,
  ) => {
    try {
      await api.post(
        '/auth/register',
        {
          ...data,
          role: 'OWNER',
        },
      );

      alert(
        'Registration successful',
      );
    } catch (error) {
      console.error(error);

      alert('Registration failed');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-zinc-900 p-10 rounded-2xl w-full max-w-md space-y-6"
      >
        <h1 className="text-4xl font-bold">
          Register
        </h1>

        <input
          type="email"
          placeholder="Email"
          {...register('email')}
          className="w-full p-4 rounded-lg bg-zinc-800"
        />

        <input
          type="password"
          placeholder="Password"
          {...register('password')}
          className="w-full p-4 rounded-lg bg-zinc-800"
        />

        <button
          type="submit"
          className="w-full bg-white text-black p-4 rounded-lg font-bold"
        >
          Create Account
        </button>
      </form>
    </main>
  );
}