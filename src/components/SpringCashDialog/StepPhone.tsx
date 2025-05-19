import { useEffect } from 'react';

import { useWatch } from 'react-hook-form';
import { X } from 'lucide-react';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from '@/components/ui/input-otp';
import { FlowerPattern, VisaBrand } from '@/lib/icons';

interface SpringCashCardProps {
  number: string;
  exp: string;
  cvc: string;
}

interface StepPhoneProps {
  form: any;
  onNext: any;
  number: string;
  exp: string;
  cvc: string;
  setOpen: any;
}

const StepPhone = ({
  form,
  onNext,
  number,
  exp,
  cvc,
  setOpen
}: StepPhoneProps) => {
  const phone = useWatch({ control: form.control, name: 'phone' });

  useEffect(() => {
    if (phone.length === 10) {
      form.trigger('phone').then((valid: any) => valid && onNext());
    }
  }, [phone]);

  return (
    <>
      <div className="absolute opacity-20 hidden lg:flex left-0 top-0">
        <FlowerPattern />
      </div>
      <div className="absolute opacity-20 hidden lg:flex bottom-0 right-1/2">
        <FlowerPattern rotate={180} flipX={false} />
      </div>
      <div className="w-full order-2 lg:order-1 lg:w-1/2 min-h-[638px] flex justify-center bg-transparent relative">
        <div className="absolute -top-6 -left-7 opacity-20 flex lg:hidden">
          <FlowerPattern />
        </div>
        <div className="absolute bottom-0 -right-7 opacity-20 flex lg:hidden">
          <FlowerPattern rotate={180} />
        </div>
        <SpringCashCard number={number} exp={exp} cvc={cvc} />
      </div>
      <div className="bg-white order-1 lg:order-2 rounded-2xl shadow-xl p-8 relative z-20 w-full lg:w-1/2 h-full flex flex-col justify-center gap-6 font-mackinac min-h-[638px]">
        <div
          className="bg-[#F9F9F9] rounded-full absolute top-5 right-5 size-6 p-1"
          onClick={() => setOpen(false)}
        >
          <X className="text-[#333333] size-4" strokeWidth={0.8} />
        </div>
        <div className="font-[500] text-[32px] leading-[115%] -tracking-[2%] text-[#444444] text-center">
          Provide your phone number so we can text you your
          <span className="inline-flex items-center align-middle gap-2 px-3 text-[28px]">
            <div className="text-[32px] p-1.5 px-2.5 text-white bg-[#65BD82] rounded-md">
              free <strong className="font-bold">$25</strong>
            </div>
            <VisaBrand />
          </span>
          card.
        </div>
        <div className="flex w-full justify-center">
          <Form {...form}>
            <form>
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <InputOTP
                        maxLength={10}
                        value={field.value}
                        onChange={field.onChange}
                      >
                        <InputOTPGroup className="gap-1">
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup className="gap-1">
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup className="gap-1">
                          <InputOTPSlot index={6} />
                          <InputOTPSlot index={7} />
                          <InputOTPSlot index={8} />
                          <InputOTPSlot index={9} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

const SpringCashCard = ({ number, exp, cvc }: SpringCashCardProps) => {
  return (
    <div className="absolute top-[180px] -left-7 w-[434px] h-[458px] font-mono">
      <img src={`/images/card.png`} alt="Card" className="w-full h-full" />
      <div className="w-full relative">
        <div className="absolute bottom-[284px] left-[99px] text-white text-[18px] tracking-[0.1em] font-medium">
          {number}
        </div>

        <div className="absolute bottom-[252px] left-[132px] text-white text-[16px] tracking-[0.1em] font-medium blur-[2px]">
          {exp}
        </div>

        <div className="absolute bottom-[252px] left-[222px] text-white text-[16px] tracking-[0.1em] font-medium blur-[2px]">
          {cvc}
        </div>
      </div>
    </div>
  );
};

export default StepPhone;
