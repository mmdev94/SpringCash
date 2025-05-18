import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle
} from '../ui/dialog';
import { Button } from '../ui/button';
import { X } from 'lucide-react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from '@/components/ui/input-otp';
import { FlowerPattern, FlowerPattern1, VisaBrand } from '@/lib/icons';

interface SpringCashCardProps {
  number: string;
  exp: string;
  cvc: string;
}

interface SpringCashDialogProps {
  number: string;
  exp: string;
  cvc: string;
}

const SpringCashDialog = ({ number, exp, cvc }: SpringCashDialogProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Get Your Free $25 VISA Card</Button>
      </DialogTrigger>
      <DialogContent
        className="p-0 border-none lg:min-w-[1000px] min-h-[638px] bg-transparent shadow-none min-w-[500px] w-full lg:max-w-[1000px]"
        aria-describedby={undefined}
      >
        <DialogTitle className="sr-only">Spring Cash</DialogTitle>
        <div className="relative bg-[#65BD82] rounded-2xl overflow-auto flex flex-col max-h-[100vh]">
          <div className="absolute top-0 left-0 opacity-20 hidden lg:flex">
            <FlowerPattern />
          </div>
          <div className="absolute bottom-0 right-1/2 opacity-20 hidden lg:flex">
            <FlowerPattern1 />
          </div>
          <div className="z-10 flex flex-col lg:flex-row lg:gap-0 gap-4 items-center px-7 py-8 h-full">
            <div className="w-full order-2 lg:order-1 lg:w-1/2 min-h-[638px] flex justify-center bg-transparent relative">
              <div className="absolute -top-6 -left-7 opacity-20 flex lg:hidden">
                <FlowerPattern />
              </div>
              <div className="absolute bottom-0 -right-7 opacity-20 flex lg:hidden">
                <FlowerPattern1 />
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
                <InputOTP maxLength={10}>
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
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const SpringCashCard = ({ number, exp, cvc }: SpringCashCardProps) => {
  return (
    <div className="absolute top-[180px] -left-7 w-[434px] h-[458px]">
      <img src="/images/card.png" alt="Hand" className="w-full h-full" />
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

export default SpringCashDialog;
