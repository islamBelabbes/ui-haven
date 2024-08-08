"use client";
import Avatar from "@/elements/shared/avatar";
import Button from "@/elements/shared/button";
import Input from "@/elements/shared/input";
import cn from "@/lib/cn";
import * as Form from "@radix-ui/react-form";
import { useForm, Controller } from "react-hook-form";

const mockPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
};

function SendMoneyForm() {
  const { control, watch, formState, handleSubmit, reset } = useForm({
    defaultValues: {
      amount: "",
    },
  });

  const handleAmountChange = ({
    e,
    onChange,
  }: {
    e: React.ChangeEvent<HTMLInputElement>;
    onChange: (value: string) => void;
  }) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      if (!(+value <= 1_000_000)) return;
      return onChange(value);
    }
  };

  const handleOnSubmit = async () => {
    await mockPromise();
    return reset();
  };

  const amount = watch("amount");
  return (
    <Form.Root
      className="flex min-w-[22.8125rem] flex-col gap-6 rounded bg-white p-4"
      noValidate
      onSubmit={handleSubmit(handleOnSubmit)}
    >
      {/* Header */}
      <h2 className="text-sm font-medium text-slate-500">Sending Money</h2>

      {/* Inputs */}
      <Controller
        control={control}
        name="amount"
        render={({ field }) => (
          <Form.Field name={field.name}>
            <Form.Label className="mb-1 block font-medium text-[#191D23]">
              How much would you like to send?{" "}
            </Form.Label>
            <div className="relative">
              <Form.Control asChild>
                <Input
                  {...field}
                  className="w-full"
                  onChange={(e) =>
                    handleAmountChange({ e, onChange: field.onChange })
                  }
                />
              </Form.Control>
              <DollarIcon className="absolute right-2 top-1/2 -translate-y-1/2" />
            </div>
          </Form.Field>
        )}
      />

      {/* From */}
      <SidesWrapper title="From">
        <Avatar image="/avatar-1.png" />
        <span className="ml-2 text-sm font-semibold text-[#191D23]">
          Checking
        </span>
        <span className="ml-auto text-sm text-slate-500">
          Card ending in 4242
        </span>
      </SidesWrapper>

      {/* Recipient */}
      <SidesWrapper title="Receiving">
        <Avatar image="/avatar-2.png" />

        <div className="ml-2">
          <h2 className="text-sm font-semibold text-[#191D23]">Kathy Miller</h2>
          <span className="text-sm font-light text-slate-500">
            @KittyKatmills
          </span>
        </div>
      </SidesWrapper>

      {/* Submit */}
      <Button disabled={!amount || formState.isSubmitting}>
        {amount ? `Send ${amount}` : "enter amount to send"}
      </Button>
    </Form.Root>
  );
}

const SidesWrapper = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div>
      <span className="mb-1 block font-medium text-[#191D23]">{title}</span>
      <div className="flex items-center rounded bg-[#F7F8F9] p-3">
        {children}
      </div>
    </div>
  );
};

const DollarIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("size-5", className)}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.83327 9.08333C7.9416 8.59167 7.33327 8.08333 7.33327 7.29167C7.33327 6.38333 8.17493 5.75 9.58327 5.75C11.0666 5.75 11.6166 6.45833 11.6666 7.5H13.5083C13.4499 6.06667 12.5749 4.75 10.8333 4.325V2.5H8.33327V4.3C6.7166 4.65 5.4166 5.7 5.4166 7.30833C5.4166 9.23333 7.00827 10.1917 9.33327 10.75C11.4166 11.25 11.8333 11.9833 11.8333 12.7583C11.8333 13.3333 11.4249 14.25 9.58327 14.25C7.8666 14.25 7.1916 13.4833 7.09994 12.5H5.2666C5.3666 14.325 6.73327 15.35 8.33327 15.6917V17.5H10.8333V15.7083C12.4583 15.4 13.7499 14.4583 13.7499 12.75C13.7499 10.3833 11.7249 9.575 9.83327 9.08333Z"
        fill="#191D23"
      />
    </svg>
  );
};

export default SendMoneyForm;
