"use client";
import Input from "@/elements/shared/input";
import * as Form from "@radix-ui/react-form";
import * as Checkbox from "@radix-ui/react-checkbox";
import * as Separator from "@radix-ui/react-separator";

import { useForm, Controller } from "react-hook-form";
import Button from "@/elements/shared/button";
import cn from "@/lib/cn";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import wait from "@/lib/wait";

const SOCIAL_LOGIN = [
  {
    name: "Google",
    id: "google",
    icon: <GoogleIcon />,
  },
  {
    name: "Facebook",
    id: "facebook",
    icon: <FacebookIcon />,
  },
  {
    name: "apple",
    id: "apple",
    icon: <AppleIcon />,
  },
];

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  remember: z.boolean(),
});

type TSchema = z.infer<typeof schema>;

function LoginForm() {
  const [viewPassword, setViewPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSchema>({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
    resolver: zodResolver(schema),
  });

  const togglePasswordVisibility = () => {
    setViewPassword(!viewPassword);
  };

  const handleOnSubmit = async (data: TSchema) => {
    await wait(1000);
    reset();
    console.log(data);
  };

  return (
    <Form.Root
      className="w-[300px] rounded bg-white p-6"
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      {/* Entry */}
      <LogoIcon />
      <h1 className="mt-6 text-[1.375rem]/[1.875rem] font-bold text-[#191D23]">
        Admin Login
      </h1>
      <p className="mt-2 text-sm/[19px] text-slate-500">
        Welcome back. Enter your credentials to access your account
      </p>

      {/* Email Field */}
      <Controller
        control={control}
        name="email"
        render={({ field }) => (
          <Form.Field name={field.name} className="mt-6">
            <Form.Label className="mb-1 block font-semibold text-[#191D23]">
              Email Address
            </Form.Label>
            <Form.Control asChild>
              <Input
                {...field}
                className={cn("w-full", {
                  "border-destructive focus-visible:outline-destructive":
                    errors.email,
                })}
                disabled={isSubmitting}
                type="email"
              />
            </Form.Control>
          </Form.Field>
        )}
      />

      {/* Password Field */}
      <Controller
        control={control}
        name="password"
        render={({ field }) => (
          <Form.Field name={field.name} className="mt-6">
            <div className="flex justify-between">
              <Form.Label className="mb-1 block font-semibold text-[#191D23]">
                Password
              </Form.Label>
              <span>Forget Password</span>
            </div>

            <div className="relative">
              <Form.Control asChild>
                <Input
                  {...field}
                  className={cn("w-full", {
                    "border-destructive focus-visible:outline-destructive":
                      errors.password,
                  })}
                  disabled={isSubmitting}
                  type={viewPassword ? "text" : "password"}
                />
              </Form.Control>
              <button
                type="button"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                <EyeIcon closed={viewPassword} />
              </button>
            </div>
          </Form.Field>
        )}
      />

      {/* Remember Me Field */}
      <Controller
        control={control}
        name="remember"
        render={({ field: { value, ...reset } }) => (
          <Form.Field
            name={reset.name}
            className="mt-6 flex flex-row-reverse items-center justify-end gap-2"
          >
            <Form.Label className="text-sm text-[#191D23]">
              Keep me signed in
            </Form.Label>

            <Form.Control asChild>
              <Checkbox.Root
                disabled={isSubmitting}
                {...reset}
                className={cn(
                  "relative size-4 border border-transparent disabled:cursor-not-allowed",
                  {
                    "border-[#D0D5DD]": !value,
                  },
                )}
                checked={value}
                onCheckedChange={reset.onChange}
              >
                <Checkbox.Indicator asChild>
                  <div className="absolute inset-0 flex size-full items-center justify-center bg-emerald-700">
                    <CheckMarkIcon />
                  </div>
                </Checkbox.Indicator>
              </Checkbox.Root>
            </Form.Control>
          </Form.Field>
        )}
      />

      {/* Submit */}
      <Button className="mt-6 w-full" disabled={isSubmitting}>
        Continue
      </Button>

      {/* Social Logins */}
      <div className="mx-auto mt-6 flex w-fit items-center gap-2 text-sm font-medium text-[#4B5768]">
        <Separator.Root
          className="h-[1px] w-5 bg-[#4B5768]"
          decorative
          orientation="vertical"
        />
        <h2>or sign up with</h2>
        <Separator.Root
          className="h-[1px] w-5 bg-[#4B5768]"
          decorative
          orientation="vertical"
        />
      </div>
      <ul className="mt-2 flex gap-1">
        {SOCIAL_LOGIN.map(({ name, id, icon }) => (
          <li key={id}>
            <button
              disabled={isSubmitting}
              className="flex items-center justify-center gap-[6px] rounded border border-[#D0D5DD] p-2"
              type="button"
            >
              {icon}
              <span className="text-xs text-[#191D23]">{name}</span>
            </button>
          </li>
        ))}
      </ul>

      {/* Sign Up */}
      <div className="mt-8 flex justify-center">
        <span className="mr-1 text-sm text-[#191D23]">
          Don{"'"}t have an Account?
        </span>
        <a href="#" className="text-sm font-bold text-emerald-700">
          Sign up here
        </a>
      </div>
    </Form.Root>
  );
}

function LogoIcon() {
  return (
    <svg
      width="24"
      height="22"
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.98583 7.65688L6.54385 6.18162L5.116 3.70987H18.5445L11.8324 15.3395L10.4046 12.8635L7.84658 14.3431L11.8324 21.245L23.6605 0.755005H0L3.98583 7.65688Z"
        fill="url(#paint0_linear_6_15908)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_6_15908"
          x1="29.4341"
          y1="4.15125"
          x2="-10.6739"
          y2="7.38576"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.100157" stop-color="#059669" />
          <stop offset="0.707994" stop-color="#00D090" />
        </linearGradient>
      </defs>
    </svg>
  );
}
function GoogleIcon() {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.3465 8.1819C16.3465 7.61462 16.2956 7.06917 16.201 6.54553H8.6665V9.64008H12.972C12.7865 10.6401 12.2229 11.4873 11.3756 12.0546V14.0619H13.961C15.4738 12.6692 16.3465 10.6183 16.3465 8.1819Z"
        fill="#191D23"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.66667 15.9999C10.8267 15.9999 12.6376 15.2835 13.9612 14.0617L11.3758 12.0544C10.6594 12.5344 9.74303 12.8181 8.66667 12.8181C6.58303 12.8181 4.8194 11.4108 4.19031 9.5199H1.51758V11.5926C2.83394 14.2072 5.5394 15.9999 8.66667 15.9999Z"
        fill="#191D23"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.19014 9.52008C4.03014 9.04008 3.93923 8.52735 3.93923 8.00008C3.93923 7.4728 4.03014 6.96008 4.19014 6.48008V4.40735H1.51741C0.975595 5.48735 0.666504 6.70917 0.666504 8.00008C0.666504 9.29099 0.975595 10.5128 1.51741 11.5928L4.19014 9.52008Z"
        fill="#191D23"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.66667 3.18182C9.84122 3.18182 10.8958 3.58545 11.7249 4.37818L14.0194 2.08364C12.6339 0.792727 10.823 0 8.66667 0C5.5394 0 2.83394 1.79273 1.51758 4.40727L4.19031 6.48C4.8194 4.58909 6.58303 3.18182 8.66667 3.18182Z"
        fill="#191D23"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      width="14"
      height="16"
      viewBox="0 0 14 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.7066 12.4689C13.4552 13.0279 13.1577 13.5424 12.813 14.0155C12.3431 14.6604 11.9584 15.1068 11.6619 15.3547C11.2023 15.7616 10.7098 15.97 10.1825 15.9818C9.8039 15.9818 9.34735 15.8781 8.81592 15.6678C8.28274 15.4584 7.79275 15.3547 7.34472 15.3547C6.87484 15.3547 6.37089 15.4584 5.83186 15.6678C5.29201 15.8781 4.85712 15.9878 4.52461 15.9986C4.01892 16.0194 3.51488 15.8051 3.01175 15.3547C2.69063 15.0851 2.28898 14.6229 1.80781 13.9681C1.29156 13.2688 0.867126 12.458 0.534618 11.5336C0.178514 10.5351 0 9.5682 0 8.63213C0 7.55987 0.240686 6.63506 0.722776 5.86007C1.10166 5.23757 1.6057 4.74652 2.23655 4.38604C2.8674 4.02556 3.54904 3.84186 4.2831 3.83011C4.68476 3.83011 5.21148 3.94971 5.86603 4.18476C6.51873 4.42061 6.93783 4.54021 7.12157 4.54021C7.25895 4.54021 7.72452 4.40036 8.51378 4.12156C9.26015 3.863 9.89008 3.75594 10.4061 3.79811C11.8045 3.90675 12.8551 4.4374 13.5537 5.39342C12.3031 6.12288 11.6845 7.14457 11.6968 8.45525C11.708 9.47616 12.0928 10.3257 12.8489 11.0003C13.1916 11.3133 13.5742 11.5553 14 11.7272C13.9077 11.9849 13.8102 12.2318 13.7066 12.4689ZM10.4995 0.320091C10.4995 1.12027 10.1958 1.8674 9.5905 2.55894C8.86003 3.38104 7.97649 3.85608 7.01836 3.78112C7.00616 3.68512 6.99908 3.58409 6.99908 3.47792C6.99908 2.70975 7.34646 1.88765 7.96336 1.21547C8.27135 0.875136 8.66305 0.592152 9.13806 0.36641C9.61205 0.144037 10.0604 0.0210593 10.482 0C10.4944 0.106972 10.4995 0.213951 10.4995 0.320081V0.320091Z"
        fill="#191D23"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.333 8.04889C16.333 3.60361 12.7513 0 8.33301 0C3.91473 0 0.333008 3.60361 0.333008 8.04889C0.333008 12.0663 3.25849 15.3962 7.08301 16V10.3755H5.05176V8.04889H7.08301V6.27562C7.08301 4.25837 8.27735 3.1441 10.1047 3.1441C10.98 3.1441 11.8955 3.3013 11.8955 3.3013V5.28208H10.8867C9.89293 5.28208 9.58301 5.90252 9.58301 6.53905V8.04889H11.8018L11.4471 10.3755H9.58301V16C13.4075 15.3962 16.333 12.0663 16.333 8.04889Z"
        fill="#191D23"
      />
    </svg>
  );
}

function CheckMarkIcon() {
  return (
    <svg
      className="h-2 w-3"
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.8162 0.707014C12.0701 0.973695 12.0597 1.39568 11.793 1.64954L4.08929 8.98287C3.95773 9.1081 3.78078 9.17424 3.59933 9.16598C3.41788 9.15772 3.24766 9.07579 3.12803 8.93912L0.165063 5.55451C-0.0774581 5.27747 -0.0494802 4.85629 0.227553 4.61377C0.504586 4.37125 0.925768 4.39923 1.16829 4.67626L3.67342 7.5379L10.8737 0.683799C11.1404 0.429939 11.5624 0.440333 11.8162 0.707014Z"
        fill="white"
      />
    </svg>
  );
}

function EyeIcon({ closed = false, ...props }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.14434 7.99996C2.52944 8.53106 3.3187 9.5318 4.35798 10.4031C5.43558 11.3065 6.6974 12 8.00019 12C9.30298 12 10.5648 11.3065 11.6424 10.4031C12.6817 9.5318 13.4709 8.53106 13.856 7.99996C13.4709 7.46886 12.6817 6.46812 11.6424 5.59682C10.5648 4.69339 9.30298 3.99996 8.00019 3.99996C6.6974 3.99996 5.43558 4.69339 4.35798 5.59682C3.3187 6.46812 2.52944 7.46886 2.14434 7.99996ZM3.50137 4.57506C4.67585 3.59041 6.23771 2.66663 8.00019 2.66663C9.76267 2.66663 11.3245 3.59041 12.499 4.57506C13.6849 5.56925 14.5623 6.69805 14.9677 7.26196C15.2867 7.70554 15.2867 8.29438 14.9677 8.73796C14.5623 9.30187 13.6849 10.4307 12.499 11.4249C11.3245 12.4095 9.76267 13.3333 8.00019 13.3333C6.23771 13.3333 4.67586 12.4095 3.50137 11.4249C2.3155 10.4307 1.43806 9.30187 1.03264 8.73796C0.713729 8.29438 0.713729 7.70554 1.03264 7.26196C1.43806 6.69805 2.3155 5.56925 3.50137 4.57506Z"
        fill="#64748B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.00019 9.33329C8.73657 9.33329 9.33352 8.73634 9.33352 7.99996C9.33352 7.26358 8.73657 6.66663 8.00019 6.66663C7.26381 6.66663 6.66686 7.26358 6.66686 7.99996C6.66686 8.73634 7.26381 9.33329 8.00019 9.33329ZM8.00019 10.6666C9.47295 10.6666 10.6669 9.47272 10.6669 7.99996C10.6669 6.5272 9.47295 5.33329 8.00019 5.33329C6.52743 5.33329 5.33352 6.5272 5.33352 7.99996C5.33352 9.47272 6.52743 10.6666 8.00019 10.6666Z"
        fill="#64748B"
      />
      {closed && (
        <path
          d="M2.5 2.5L13.5 13.5"
          stroke="#64748B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

export default LoginForm;
