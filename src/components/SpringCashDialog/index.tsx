import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle
} from '../ui/dialog';
import { Button } from '../ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import { z } from 'zod';
import { twMerge } from 'tailwind-merge';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingLabelInput } from '@/molecules/FloatingInput';
import StepPhone from './StepPhone';
import StepAddress from './StepAddress';
import StepComplete from './StepComplete';

interface SpringCashCardProps {
  number: string;
  exp: string;
  cvc: string;
}

interface AddressCardProps {
  name: string;
  address1: string;
  city: string;
}

interface SpringCashDialogProps {
  number: string;
  exp: string;
  cvc: string;
}

const PhoneSchema = z.object({
  phone: z
    .string()
    .transform((val) => val.replace(/\D/g, ''))
    .refine((val) => /^\d{10}$/.test(val), {
      message: 'Please enter a valid 10-digit U.S. phone number.'
    })
});

const AddressSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  address1: z.string().min(5, 'Address Line 1 is required'),
  address2: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  zip: z.string().regex(/^\d{5}$/, 'Zip Code must be a 5-digit number')
});

const SpringCashDialog = ({ number, exp, cvc }: SpringCashDialogProps) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  const form = useForm<z.infer<typeof PhoneSchema>>({
    resolver: zodResolver(PhoneSchema),
    defaultValues: {
      phone: ''
    }
  });

  const second_form = useForm<z.infer<typeof AddressSchema>>({
    resolver: zodResolver(AddressSchema),
    defaultValues: {
      name: '',
      address1: '',
      address2: '',
      city: '',
      zip: ''
    }
  });

  const phone = useWatch({
    control: form.control,
    name: 'phone'
  });

  const name = useWatch({
    control: second_form.control,
    name: 'name'
  });

  const address1 = useWatch({
    control: second_form.control,
    name: 'address1'
  });

  const address2 = useWatch({
    control: second_form.control,
    name: 'address2'
  });

  const city = useWatch({
    control: second_form.control,
    name: 'city'
  });

  useEffect(() => {
    if (phone && phone.length >= 10) {
      form.trigger('phone').then((isValid) => {
        if (isValid) {
          setStep(1);
        }
      });
    }
  }, [phone]);

  const onSubmit = (data: any) => {
    setStep(2);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Get Your Free $25 VISA Card</Button>
      </DialogTrigger>
      <DialogContent
        className="p-0 border-none lg:min-w-[1000px] min-h-[638px] bg-transparent shadow-none min-w-[500px] w-full lg:max-w-[1000px] focus:outline-none"
        aria-describedby={undefined}
      >
        <DialogTitle className="sr-only">Spring Cash</DialogTitle>
        <div className="relative bg-[#65BD82] rounded-2xl overflow-auto flex flex-col max-h-[100vh]">
          <motion.div
            key={step}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="z-10 flex flex-col lg:flex-row lg:gap-0 gap-4 items-center px-7 py-8 h-full"
          >
            {step === 0 && (
              <StepPhone
                form={form}
                onNext={() => setStep(1)}
                number={number}
                exp={exp}
                cvc={cvc}
                setOpen={setOpen}
              />
            )}
            {step === 1 && (
              <StepAddress
                form={second_form}
                onBack={() => setStep(0)}
                onNext={() => setStep(2)}
                name={name}
                address1={address1}
                city={city}
                setOpen={setOpen}
              />
            )}
            {step === 2 && (
              <StepComplete
                cardInfo={{ number, exp, cvc }}
                address={second_form.getValues()}
                name={name}
                city={city}
                address1={address1}
                address2={address2}
                number={number}
                exp={exp}
                cvc={cvc}
                setOpen={setOpen}
              />
            )}
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SpringCashDialog;
