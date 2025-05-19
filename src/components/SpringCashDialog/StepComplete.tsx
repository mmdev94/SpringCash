import { FloatingLabelInput } from '@/molecules/FloatingInput';
import { FlowersPattern } from '@/lib/icons';
import { X, CopyIcon } from 'lucide-react';
import { SuccessIcon } from '@/lib/icons';
import { Button } from '../ui/button';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';

interface TotalCardProps {
  number: string;
  exp: string;
  cvc: string;
  name: string;
  address1: string;
  city: string;
}

const StepComplete = ({
  cardInfo,
  address,
  number,
  exp,
  cvc,
  name,
  address1,
  address2,
  city,
  setOpen
}) => {
  return (
    <>
      <div className="absolute w-full h-full hidden lg:flex top-0 left-0">
        <FlowersPattern />
      </div>
      <div className="absolute w-full h-full flex lg:hidden top-0 left-0 pointer-events-none z-0 min-h-[1400px]">
        <FlowersPattern isMobile />
      </div>

      <div className="w-full order-2 lg:order-1 lg:w-1/2 min-h-[638px] flex justify-center bg-transparent relative">
        <TotalCard
          number={number}
          exp={exp}
          cvc={cvc}
          name={name}
          address1={address1}
          city={city}
        />
      </div>
      <div className="bg-white order-1 lg:order-2 rounded-2xl shadow-xl p-8 relative z-20 w-full lg:w-1/2 h-full flex flex-col justify-center gap-6 font-mackinac min-h-[638px]">
        <div
          className="bg-[#F9F9F9] rounded-full absolute top-5 right-5 size-6 p-1"
          onClick={() => setOpen(false)}
        >
          <X className="text-[#333333] size-4" strokeWidth={0.8} />
        </div>
        <div className="font-[500] text-[26px] leading-[115%] -tracking-[2%] text-[#444444] text-center inline-flex flex-col items-center gap-2">
          <SuccessIcon />
          We've texted you the card details <br /> and also included them below
          for your convenience!
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col justify-center gap-6">
            <div className="flex flex-col gap-4 max-w-[339px]">
              {[
                { label: 'Card Number', value: number },
                { label: 'Expiry', value: exp },
                { label: 'CVC', value: cvc },
                {
                  label: 'Billing Address',
                  value: `${address1}, ${address2}, ${city}`
                }
              ].map(({ label, value }, idx) => (
                <div className="relative" key={idx}>
                  <FloatingLabelInput
                    type="text"
                    value={value}
                    label={label}
                    readOnly
                    disabled
                    className="w-full bg-gray-100 cursor-not-allowed font-sans"
                  />
                  <Button
                    type="button"
                    className="absolute right-3 top-3 h-8 flex gap-1 !rounded-[100px] !bg-[#EEEEEE] !text-[#444444] !font-sans text-[12px] leading-4 opacity-60 !px-2.5"
                    onClick={() => {
                      navigator.clipboard.writeText(value);
                      toast.success(`${label} copied`);
                    }}
                  >
                    <CopyIcon />
                    Copy
                  </Button>
                </div>
              ))}
            </div>
            <div className="text-[#65BD82] border border-[#65BD82] bg-white rounded-[12px] px-6 py-3 text-center leading-snug w-full max-w-[339px] font-sans">
              Call Tej at <span className="font-semibold">555-123-1234</span> to
              chat about
              <br />
              adding Spring Cash to your website
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TotalCard = ({
  number,
  exp,
  cvc,
  name,
  address1,
  city
}: TotalCardProps) => {
  return (
    <div className="absolute top-[98.43px] left-3 w-[415px] h-[436px] font-mono">
      <img src={`/images/Total.png`} alt="Address" className="w-full h-full" />
      <div className="w-full relative">
        <div className="absolute bottom-[248px] left-[40px] text-white text-[18px] tracking-[0.1em] font-medium -rotate-[6.31deg]">
          {number}
        </div>

        <div className="absolute bottom-[218px] left-[76px] text-white text-[16px] tracking-[0.1em] font-medium -rotate-[6.31deg]">
          {exp}
        </div>

        <div className="absolute bottom-[227px] left-[165px] text-white text-[16px] tracking-[0.1em] font-medium -rotate-[6.31deg]">
          {cvc}
        </div>

        <div className="absolute bottom-[84px] left-[90px] text-black text-[56px] -tracking-[2px] font-medium font-signature -rotate-[0.9deg] leading-[1.1] h-[70px]">
          {name}
        </div>

        <div className="absolute bottom-[68px] left-[70px] text-white text-[18px] tracking-[0.1em] font-medium rotate-[4.52deg]">
          {name}
        </div>

        <div className="absolute bottom-[40px] left-[68px] text-white text-[16px] tracking-[0.1em] font-medium opacity-60 rotate-[4.52deg]">
          {address1 ? address1 + (city ? ', ' + city : '') : city || ''}
        </div>
      </div>
    </div>
  );
};

export default StepComplete;
